import {
    DataID,
    FetchFunction,
    NormalizationLinkedField,
    PayloadError,
    PayloadData,
    ROOT_ID,
    ROOT_TYPE,
    ReadOnlyRecordProxy,
    ReaderLinkedField,
    Variables,
} from 'relay-runtime';
import fetchMultipart from 'fetch-multipart-graphql';
import {
    Store,
    RecordSource,
    Environment,
    Network,
    Observable,
} from 'relay-runtime';
import { ReadOnlyRecordSourceProxy } from 'relay-runtime/lib/store/RelayStoreTypes';
import { PayloadExtensions } from 'relay-runtime/lib/network/RelayNetworkTypes';

interface ExtendedPayloadError extends PayloadError {
    path?: Array<string | number>;
    extensions?: PayloadExtensions;
}

export class GraphQLError extends Error implements ExtendedPayloadError {
    path?: Array<string | number>;
    locations?: Array<{ line: number; column: number }>;
    extensions?: PayloadExtensions;

    constructor(payloadError: ExtendedPayloadError) {
        super(payloadError.message);
        this.name = 'GraphQLError';
        this.locations = payloadError.locations;
        this.path = payloadError.path;
        this.extensions = payloadError.extensions;
    }
}

const ftch: FetchFunction = (params, variables) => {
    return Observable.create((sink) => {
        fetchMultipart('/api', {
            method: 'POST',
            headers: {
                Accept: 'multipart/mixed; deferSpec=20220824, application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: params.text,
                variables,
            }),
            onNext: (res) => {
                const parts = res as (
                    | {
                          hasNext?: boolean;
                          incremental: {
                              path: string[];
                              label: string;
                              data: PayloadData;
                          }[];
                          errors?: ExtendedPayloadError[];
                      }
                    | {
                          data: PayloadData;
                          hasNext?: boolean;
                          errors?: ExtendedPayloadError[];
                      }
                )[];
                const formatted = parts
                    .map((part) => {
                        if ('incremental' in part) {
                            return part.incremental;
                        }
                        return part;
                    })
                    .flat();
                const errorPart = parts.find(
                    (part) => part.errors && part.errors.length > 0
                );
                if (errorPart?.errors) {
                    const error = new GraphQLError(errorPart.errors[0]);
                    sink.error(error);
                } else {
                    // This is to work-around a relay bug: https://github.com/facebook/relay/issues/3904
                    if (
                        formatted.length === 1 &&
                        (!('hasNext' in formatted[0]) || !formatted[0].hasNext)
                    )
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (formatted[0] as any).extensions = {
                            // eslint-disable-next-line camelcase
                            is_final: true,
                        };
                    // End relay bug workaround

                    sink.next(formatted);
                }
            },
            onError: (err) => {
                sink.error(err as Error);
            },
            onComplete: () => sink.complete(),
        });
    });
};

export function createEnvironment() {
    const network = Network.create(ftch);
    const store = new Store(new RecordSource());
    return new Environment({
        store,
        network,
        missingFieldHandlers: [
            {
                kind: 'linked',
                handle(
                    field: NormalizationLinkedField | ReaderLinkedField,
                    parentRecord: ReadOnlyRecordProxy | null | undefined,
                    args: Variables,
                    store: ReadOnlyRecordSourceProxy
                ): DataID | null | undefined {
                    if (!parentRecord) return;
                    // NOTE: TS defs for parentRecord are incorrect.
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const parent = parentRecord as any;
                    if (
                        parent.__typename !== ROOT_TYPE ||
                        parent.__id !== ROOT_ID
                    )
                        return;
                    if (field.name !== 'node') return;
                    if (typeof args.id !== 'string') return;
                    const { id } = args;
                    return id;
                },
            },
        ],
    });
}
