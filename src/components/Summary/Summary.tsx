// TODO: Remove this check once temp data is removed!!
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from 'react';
import styles from './Summary.module.scss';
import cicd from 'src/data/cicd';
import results from 'src/data/results';
import { formatDate } from 'src/utils/date';
import * as formatter from 'src/utils/formatters';
import networkEventData from 'src/data/networkEvents';
import { useFragment } from 'react-relay';
import { SummaryFragment$key } from './__generated__/SummaryFragment.graphql';
import graphql from 'babel-plugin-relay/macro';
import {
    Panel,
    Tag,
    Button,
    ChevronIcon,
    Divider,
} from 'src/components/common';
import cx from 'classnames';
import { styled, Tooltip } from '@mui/material';
import {
    RerunButton,
    CompareButton,
    DetailColumn,
    ChromeIcon,
    FrameworkErrorIcon,
    NetworkErrorIcon,
    WarnIcon,
} from './components';
import splitCamelCase from 'src/utils/splitCamelCase';

type Props = {
    fragmentKey: SummaryFragment$key | null;
    className?: string;
};

const StyledLink = styled('a')(({ theme }) => ({
    color: theme.palette.base[100],
}));

const Summary: React.FC<Props> = ({ fragmentKey, className }) => {
    const consoleData = useFragment(
        graphql`
            fragment SummaryFragment on TestExecution {
                id
                events(filter: { type: CONSOLE }) {
                    edges {
                        __typename
                        node {
                            at
                            ... on ConsoleLogEvent {
                                at
                                message
                                logLevel
                            }
                        }
                    }
                }
                summaryConsoleErrors: events(
                    filter: {
                        type: CONSOLE
                        consoleFilter: { logLevel: ERROR }
                    }
                ) {
                    totalCount
                }
            }
        `,
        fragmentKey
    );

    const data = { networkEvents: networkEventData.log.entries } as any; // eslint-disable-line
    const networkEvents = useMemo(
        () => formatter.formatNetworkEvents(data.networkEvents),
        [data.networkEvents]
    );

    const [isExpanded, setIsExpanded] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const branchName = cicd.gitBranch;
    const branchUrl = [cicd.gitUrl, 'tree', cicd.gitBranch].join('/');

    const commitHash = cicd.shortHash;
    const commitUrl = [cicd.gitUrl, 'commit', cicd.hash].join('/');

    const engineer = cicd.GITHUB_TRIGGERING_ACTOR;
    const engineerUrl = [cicd.GITHUB_SERVER_URL, engineer].join('/');
    const endTime = results.endedTestsAt;

    const logErrorCount = consoleData?.summaryConsoleErrors.totalCount;

    const networkErrorCount = useMemo(
        () =>
            networkEvents.reduce((acc, curr) => {
                const status = curr.response.status.toString();
                const isError =
                    status.startsWith('4') || status.startsWith('5');
                return isError ? ++acc : acc;
            }, 0),
        []
    );

    const errorObj = results.runs[0].tests[0].attempts[0];
    const frameworkErrorName = errorObj.error.name;
    const title = results.runs[0].tests[0].title.slice(-1)[0];

    const failedAt = formatDate(endTime);

    return (
        <Panel className={cx(styles.summary, className)}>
            <div className={styles.row}>
                <div className={styles.pageTitle}>
                    <h1>Scenario: {title}</h1>
                    <Tag text="Failed" />
                </div>
                <div className={styles.buttons}>
                    <CompareButton />
                    <RerunButton />
                </div>
            </div>
            {isExpanded && (
                <div className={cx(styles.row, styles.detailsRow)}>
                    <div className={styles.envDetails}>
                        <DetailColumn title="Browser">
                            <div className={styles.columnContent}>
                                <ChromeIcon /> Chrome
                            </div>
                        </DetailColumn>
                        <DetailColumn title="Branch">
                            <StyledLink
                                className={styles.columnContent}
                                target="_blank"
                                rel="noreferrer"
                                href={branchUrl}
                            >
                                {branchName}
                            </StyledLink>
                        </DetailColumn>
                        <DetailColumn title="Commit">
                            <StyledLink
                                className={styles.columnContent}
                                target="_blank"
                                rel="noreferrer"
                                href={commitUrl}
                            >
                                {commitHash}
                            </StyledLink>
                        </DetailColumn>
                        <DetailColumn title="Time">
                            <div className={styles.columnContent}>
                                {failedAt}
                            </div>
                        </DetailColumn>
                        <DetailColumn title="By">
                            <div className={styles.columnContent}>
                                <StyledLink
                                    href={engineerUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.engineerLink}
                                >
                                    <img
                                        src={cicd.author.avatarUrl}
                                        alt="kkavasik"
                                        className={styles.avatar}
                                    />
                                    {engineer}
                                </StyledLink>{' '}
                            </div>
                        </DetailColumn>
                    </div>
                    <div className={styles.errorsContainer}>
                        <ul>
                            {frameworkErrorName && (
                                <li className={styles.cypressError}>
                                    <FrameworkErrorIcon />
                                    <span>
                                        1 {splitCamelCase(frameworkErrorName)}
                                    </span>
                                </li>
                            )}
                            <Divider className={styles.divider} />
                            <li className={styles.networkError}>
                                <NetworkErrorIcon />
                                <span>{networkErrorCount} Network errors</span>
                            </li>
                            <Divider className={styles.divider} />
                            <li className={styles.consoleError}>
                                <WarnIcon />
                                <span>{logErrorCount} Console errors</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            <Tooltip
                title={isExpanded ? 'Collapse' : 'Expand'}
                placement="top"
                arrow
                open={isButtonHovered}
            >
                <div>
                    <Button
                        className={styles.collapseButton}
                        onClick={() => setIsExpanded(!isExpanded)}
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                    >
                        <ChevronIcon direction={isExpanded ? 'up' : 'down'} />
                    </Button>
                </div>
            </Tooltip>
        </Panel>
    );
};

export default Summary;
