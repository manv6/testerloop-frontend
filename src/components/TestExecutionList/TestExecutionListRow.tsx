import React, { useMemo } from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { TestExecutionListRowFragment$key } from './__generated__/TestExecutionListRowFragment.graphql';
import { FetcherWithComponents } from 'react-router-dom';
import { formatIntervalEvent } from 'src/utils/formatters';
import { getDuration } from 'src/utils/getDuration';
import { Tag } from 'src/components/common';
import { useNavigate } from 'react-router-dom';

type Props = {
    fragmentKey: TestExecutionListRowFragment$key;
    preloadFetcher: FetcherWithComponents<unknown>;
};

const testExecutionIdToUrl = (id: string) => {
    const [type, runId, testId] = window.atob(id).split('/');
    if (type !== 'TestExecution') throw new Error('Invalid id');
    return `/run/${runId}/test/${testId}`;
};

export const TestExecutionListRow: React.FC<Props> = ({
    fragmentKey,
    preloadFetcher,
}) => {
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

    const duration = useMemo(
        () => getDuration(testExecution.at, testExecution.until),
        [testExecution.at, testExecution.until]
    );
    const navigate = useNavigate();

    return (
        <tr
            onMouseEnter={() =>
                preloadFetcher.load(testExecutionIdToUrl(testExecution.id))
            }
            onClick={() => navigate(testExecutionIdToUrl(testExecution.id))}
            style={{ cursor: 'pointer' }}
        >
            <td>{testExecution.title}</td>
            <td>
                {Intl.DateTimeFormat(undefined, {
                    dateStyle: 'short',
                    timeStyle: 'medium',
                }).format(testExecution.at)}
            </td>
            <td>{duration}</td>
            <td>
                <div style={{ display: 'inline-block' }}>
                    {testExecution.failedCommands.totalCount ? (
                        <Tag tagType="error" text="Failed" />
                    ) : (
                        <Tag tagType="success" text="Passed" />
                    )}
                </div>
            </td>
        </tr>
    );
};
