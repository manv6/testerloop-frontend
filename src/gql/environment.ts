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

interface APQRequest {
    variables: Variables;
    extensions: {
        persistedQuery: {
            sha256Hash: string;
            version: 1;
        };
    };
}
interface APQNotFoundRequest extends APQRequest {
    query: string;
}

type RequestBody = APQRequest | APQNotFoundRequest;

const runRequest = (body: RequestBody, signal?: AbortSignal) => {
    // NOTE: This is a bit hacky, but the typings for `fetchMultipart` don't include
    // signal support despite it working, so this works around that by telling TS
    // that the signal doesn't exist.
    const signalConfig = { signal } as unknown as Record<string, never>;
    return Observable.create((sink) => {
        fetchMultipart('/api', {
            ...signalConfig,
            method: 'POST',
            headers: {
                Accept: 'multipart/mixed; deferSpec=20220824, application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
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

let pqLookup: {
    [index: string]: string;
} | null = null;

const getPersistedQueries = async () => {
    if (!pqLookup)
        pqLookup = (await import('./__generated__/persistedQueries.json'))
            .default;
    return pqLookup;
};

const executePersistedQuery = (
    queryId: string,
    variables: Variables,
    sendQuery: boolean,
    signal?: AbortSignal
) => {
    let queryObservable: Observable<string | undefined> =
        Observable.from(undefined);
    if (sendQuery)
        queryObservable = Observable.from(getPersistedQueries()).map(
            (queries) => queries[queryId]
        );

    let resultObservable = queryObservable.mergeMap((query) =>
        runRequest(
            {
                query,
                variables,
                extensions: {
                    persistedQuery: {
                        sha256Hash: queryId,
                        version: 1,
                    },
                },
            },
            signal
        )
    );

    if (!sendQuery)
        resultObservable = resultObservable.catch((err) => {
            if (err.message === 'PersistedQueryNotFound')
                return executePersistedQuery(queryId, variables, true, signal);
            return Observable.create((sink) => sink.error(err));
        });

    return resultObservable;
};

const ftch: FetchFunction = (params, variables, { metadata }) => {
    if (!params.id) throw new Error('Received non-persisted Query');

    const signal = metadata?.signal as AbortSignal | undefined;

    return executePersistedQuery(
        params.id,
        variables,
        process.env.NODE_ENV === 'development',
        signal
    );
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
