import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { useLoaderData } from 'react-router-dom';
import { IndexPageQuery, indexPageQuery } from './IndexPageQuery';
import { TestRunList } from 'src/components/TestRunList';

export default function IndexPage() {
    // NOTE: Type is only guaranteed outside of the type system by configuration in the router setup.
    const queryFetchKey = useLoaderData() as PreloadedQuery<IndexPageQuery>;

    const { testRuns } = usePreloadedQuery(indexPageQuery, queryFetchKey);

    return (
        <div>
            <h2>Test Runs</h2>
            <TestRunList fragmentKey={testRuns} />
        </div>
    );
}
