import React from 'react';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { useLoaderData } from 'react-router-dom';
import { TestRunPageQuery, testRunPageQuery } from './TestRunPageQuery';
import { TestExecutionList } from 'src/components/TestExecutionList';
import RunSummary from 'src/components/RunSummary';

export default function TestExecutionPage() {
    // NOTE: Type is only guaranteed outside of the type system by configuration in the router setup.
    const queryFetchKey = useLoaderData() as PreloadedQuery<TestRunPageQuery>;

    const { testRun } = usePreloadedQuery(testRunPageQuery, queryFetchKey);
    if (!testRun) {
        return <>404</>;
    }

    return (
        <>
            <RunSummary fragmentKey={testRun} />
            <TestExecutionList fragmentKey={testRun.executions} />
        </>
    );
}
