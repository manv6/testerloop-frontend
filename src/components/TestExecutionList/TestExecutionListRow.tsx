import React, { useMemo } from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { TestExecutionListRowFragment$key } from './__generated__/TestExecutionListRowFragment.graphql';
import { FetcherWithComponents, Link } from 'react-router-dom';
import { formatIntervalEvent } from 'src/utils/formatters';
import { getDuration } from 'src/utils/getDuration';
import { Tag } from 'src/components/common';
import { styled } from '@mui/material';

type Props = {
    fragmentKey: TestExecutionListRowFragment$key;
    preloadFetcher: FetcherWithComponents<unknown>;
};

const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.base[100],
    textDecoration: 'none',
}));

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

    return (
        <tr
            onMouseEnter={() =>
                preloadFetcher.load(testExecutionIdToUrl(testExecution.id))
            }
        >
            <td>
                <StyledLink to={testExecutionIdToUrl(testExecution.id)}>
                    {testExecution.title}
                </StyledLink>
            </td>
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
