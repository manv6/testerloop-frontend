import React from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { TestRunListRowFragment$key } from './__generated__/TestRunListRowFragment.graphql';
import { Link } from 'react-router-dom';

type Props = {
    fragmentKey: TestRunListRowFragment$key;
};

const testRunIdToUrl = (id: string) => {
    const [type, runId] = window.atob(id).split('/');
    if (type !== 'TestRun') throw new Error('Invalid id');
    return `/run/${runId}`;
};

export const TestRunListRow: React.FC<Props> = ({ fragmentKey }) => {
    const testExecution = useFragment(
        graphql`
            fragment TestRunListRowFragment on TestRun {
                id
                executions {
                    totalCount
                }
            }
        `,
        fragmentKey
    );

    return (
        <tr>
            <td>
                <Link to={testRunIdToUrl(testExecution.id)}>
                    {window.atob(testExecution.id).split('/')[1]}
                </Link>
            </td>
            <td>{testExecution.executions.totalCount}</td>
        </tr>
    );
};
