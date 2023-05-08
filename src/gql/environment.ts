import {
    DataID,
    FetchFunction,
    NormalizationLinkedField,
    ROOT_ID,
    ROOT_TYPE,
    ReadOnlyRecordProxy,
    ReaderLinkedField,
    Variables,
} from 'relay-runtime';
import {
    Store,
    RecordSource,
    Environment,
    Network,
    Observable,
} from 'relay-runtime';
import { ReadOnlyRecordSourceProxy } from 'relay-runtime/lib/store/RelayStoreTypes';

const ftch: FetchFunction = (params, variables) => {
    const response = fetch('/api', {
        method: 'POST',
        headers: [['Content-Type', 'application/json']],
        body: JSON.stringify({
            query: params.text,
            variables,
        }),
    });

    return Observable.from(
        response.then(async (data) => {
            const json = await data.json();
            if ('errors' in json) {
                throw new Error(
                    `GraphQL errors: ${json.errors
                        .map(({ message }: { message: string }) => message)
                        .join('\n')}`
                );
            }
            return json;
        })
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
