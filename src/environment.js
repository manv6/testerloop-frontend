import { Environment, Network, RecordSource, Store } from 'relay-runtime';

// Define the function to fetch the GraphQL query
async function fetchQuery(operation, variables) {
    const response = await fetch('https://testerloop.theorchard.io', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text, // GraphQL text from the operation
            variables,
        }),
    });

    return await response.json();
}

// Create a Relay environment with a network layer and a store
const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});

export default environment;
