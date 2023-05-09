import {
    DataID,
    FetchFunction,
    NormalizationLinkedField,
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
                      }
                    | { data: PayloadData; hasNext?: boolean }
                )[];
                const formatted = parts
                    .map((part) => {
                        if ('incremental' in part) {
                            return part.incremental;
                        }
                        return part;
                    })
                    .flat();
                sink.next(formatted);
            },
            onError: (err) => sink.error(err as Error),
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
