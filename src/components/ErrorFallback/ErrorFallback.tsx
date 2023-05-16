import React from 'react';
import { useRouteError } from 'react-router-dom';
import { GraphQLError } from 'src/gql/environment';

const ErrorFallback: React.FC = () => {
    const error = useRouteError();

    if (error instanceof GraphQLError) {
        return (
            <div>
                <h2>Something went wrong.</h2>
                <details>
                    <strong>Message: </strong>
                    {error.message}
                    <br />
                    <br />

                    <strong>Locations: </strong>
                    {JSON.stringify(error.locations, null, 2)}
                    <br />
                    <br />

                    <strong>Path: </strong>
                    {JSON.stringify(error.path, null, 2)}
                    <br />
                    <br />

                    <strong>Extensions: </strong>
                    {JSON.stringify(error.extensions, null, 2)}
                    <br />
                    <br />
                </details>
            </div>
        );
    }

    return (
        <div>
            <h2>Unknown Error</h2>
            <details>{JSON.stringify(error, null, 2)}</details>
        </div>
    );
};

export default ErrorFallback;
