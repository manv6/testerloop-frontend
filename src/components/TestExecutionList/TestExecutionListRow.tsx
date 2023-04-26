import React, { useMemo } from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { TestExecutionListRowFragment$key } from './__generated__/TestExecutionListRowFragment.graphql';
import { Link } from 'react-router-dom';
import { formatIntervalEvent } from 'src/utils/formatters';

type Props = {
    fragmentKey: TestExecutionListRowFragment$key;
};

const testExecutionIdToUrl = (id: string) => {
    const [type, runId, testId] = window.atob(id).split('/');
    if (type !== 'TestExecution') throw new Error('Invalid id');
    return `/run/${runId}/test/${testId}`;
};

export const TestExecutionListRow: React.FC<Props> = ({ fragmentKey }) => {
    const testExecutionRaw = useFragment(
        graphql`
            fragment TestExecutionListRowFragment on TestExecution {
                id
                at
                title
                until
                failedCommands: events(
                    filter: { type: COMMAND, commandFilter: { status: FAILED } }
                ) {
                    totalCount
                }
            }
        `,
        fragmentKey
    );
    const testExecution = useMemo(
        () => formatIntervalEvent(testExecutionRaw),
        [testExecutionRaw]
    );

    return (
        <tr>
            <td>
                <Link to={testExecutionIdToUrl(testExecution.id)}>
                    {testExecution.title}
                </Link>
            </td>
            <td>
                {testExecution.failedCommands.totalCount
                    ? 'Failed'
                    : 'Succeeded'}
            </td>
            <td>
                {Intl.DateTimeFormat(undefined, {
                    dateStyle: 'short',
                    timeStyle: 'medium',
                }).format(testExecution.at)}
            </td>
            <td>
                {Intl.DateTimeFormat(undefined, {
                    dateStyle: 'short',
                    timeStyle: 'medium',
                }).format(testExecution.until)}
            </td>
        </tr>
    );
};
