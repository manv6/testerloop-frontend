import React from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { TestRunListRowFragment$key } from './__generated__/TestRunListRowFragment.graphql';
import { FetcherWithComponents, Link } from 'react-router-dom';
import TestRunTitle from '../TestRun/TestRunTitle';

type Props = {
    fragmentKey: TestRunListRowFragment$key;
    preloadFetcher: FetcherWithComponents<unknown>;
};

const testRunIdToUrl = (id: string) => {
    const [type, runId] = window.atob(id).split('/');
    if (type !== 'TestRun') throw new Error('Invalid id');
    return `/run/${runId}`;
};

export const TestRunListRow: React.FC<Props> = ({
    fragmentKey,
    preloadFetcher,
}) => {
    const testRun = useFragment(
        graphql`
            fragment TestRunListRowFragment on TestRun {
                id
                executions {
                    totalCount
                }
                ...TestRunTitleFragment
            }
        `,
        fragmentKey
    );

    return (
        <tr
            onMouseEnter={() => preloadFetcher.load(testRunIdToUrl(testRun.id))}
        >
            <td>
                <Link to={testRunIdToUrl(testRun.id)}>
                    <TestRunTitle testRunKey={testRun} />
                </Link>
            </td>
            <td>{testRun.executions.totalCount}</td>
        </tr>
    );
};
