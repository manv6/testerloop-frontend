import React, { useState } from 'react';
import styles from './Summary.module.scss';
import cicd from 'src/data/cicd';
import results from 'src/data/results';
import { formatDate } from 'src/utils/date';
import { useFragment } from 'react-relay';
import { SummaryFragment$key } from './__generated__/SummaryFragment.graphql';
import graphql from 'babel-plugin-relay/macro';
import { Panel, Tag, Divider, ExpandButton } from 'src/components/common';
import cx from 'classnames';
import { styled } from '@mui/material';
import { DetailColumn, ChromeIcon, FrameworkErrorIcon } from './components';
import splitCamelCase from 'src/utils/splitCamelCase';
import NetworkErrorCount from './components/NetworkErrorCount';
import ConsoleErrorCount from './components/ConsoleErrorCount';

type Props = {
    fragmentKey: SummaryFragment$key;
    className?: string;
};

const StyledLink = styled('a')(({ theme }) => ({
    color: theme.palette.base[100],
}));

const Summary: React.FC<Props> = ({ fragmentKey, className }) => {
    const summaryData = useFragment(
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
                ...ConsoleErrorCountFragment
                ...NetworkErrorCountFragment
            }
        `,
        fragmentKey
    );

    const [isExpanded, setIsExpanded] = useState(false);

    const branchName = cicd.gitBranch;
    const branchUrl = [cicd.gitUrl, 'tree', cicd.gitBranch].join('/');

    const commitHash = cicd.shortHash;
    const commitUrl = [cicd.gitUrl, 'commit', cicd.hash].join('/');

    const engineer = cicd.GITHUB_TRIGGERING_ACTOR;
    const engineerUrl = [cicd.GITHUB_SERVER_URL, engineer].join('/');
    const endTime = results.endedTestsAt;

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
                                <li>
                                    <FrameworkErrorIcon />
                                    <span>
                                        1 {splitCamelCase(frameworkErrorName)}
                                    </span>
                                </li>
                            )}
                            <Divider className={styles.divider} />
                            <NetworkErrorCount fragmentKey={summaryData} />
                            <Divider className={styles.divider} />
                            <ConsoleErrorCount fragmentKey={summaryData} />
                        </ul>
                    </div>
                </div>
            )}
            <ExpandButton
                onClick={() => setIsExpanded(!isExpanded)}
                isExpanded={isExpanded}
            />
        </Panel>
    );
};

export default Summary;
