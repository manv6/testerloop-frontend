import type { FetchFunction } from 'relay-runtime';
import {
    Store,
    RecordSource,
    Environment,
    Network,
    Observable,
} from 'relay-runtime';

const ftch: FetchFunction = (params, variables) => {
    const response = fetch('/api', {
        method: 'POST',
        headers: [['Content-Type', 'application/json']],
        body: JSON.stringify({
            query: params.text,
            variables,
        }),
    });

    return Observable.from(response.then((data) => data.json()));
};

export function createEnvironment() {
    const network = Network.create(ftch);
    const store = new Store(new RecordSource());
    return new Environment({ store, network });
}
