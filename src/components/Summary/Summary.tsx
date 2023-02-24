// TODO: Remove this check once temp data is removed!!
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import styles from './Summary.module.scss';
import cicd from 'src/data/cicd';
import results from 'src/data/results';
import BlankAvatar from './components/BlankAvatar';
import ChromeIcon from './components/ChromeIcon';
import CommitIcon from './components/CommitIcon';
import ErrorIcon from './components/ErrorIcon';
import { formatDate } from 'src/utils/date';
import { useFragment } from 'react-relay';
import { SummaryFragment$key } from './__generated__/SummaryFragment.graphql';
import graphql from 'babel-plugin-relay/macro';
import { isOfType } from 'src/utils/isOfType';

type Props = {
    fragmentKey: SummaryFragment$key | null;
};

const Summary: React.FC<Props> = ({ fragmentKey }) => {
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
                summaryConsoleErrors: events(
                    filter: {
                        type: CONSOLE
                        consoleFilter: { logLevel: ERROR }
                    }
                ) {
                    totalCount
                }
                summaryNetworkEvents: events(filter: { type: NETWORK }) {
                    edges {
                        node {
                            __typename
                            ... on HttpNetworkEvent {
                                response {
                                    status
                                }
                            }
                        }
                    }
                }
            }
        `,
        fragmentKey
    );

    const branch = cicd.GITHUB_REF_NAME;
    const engineer = cicd.GITHUB_TRIGGERING_ACTOR;
    const engineerUrl = [cicd.GITHUB_SERVER_URL, engineer].join('/');
    const endTime = results.endedTestsAt;

    const logErrorCount = summaryData?.summaryConsoleErrors.totalCount;

    const networkErrorCount = useMemo(
        () =>
            summaryData?.summaryNetworkEvents.edges
                .map(({ node }) => node)
                .filter(isOfType('HttpNetworkEvent'))
                .filter(
                    (evt) => evt.response.status && evt.response.status >= 400
                ).length,
        [summaryData]
    );

    const errorObj = results.runs[0].tests[0].attempts[0];
    const cypressErrorName = errorObj.error.name;

    return (
        <div className={styles.summary}>
            <p className={styles.summaryMessage}>
                <ErrorIcon />
                <span>
                    Test failed on {formatDate(endTime)} by{' '}
                    <BlankAvatar className={styles.avatar} />{' '}
                    <a href={engineerUrl} target="_blank" rel="noreferrer">
                        {engineer}
                    </a>{' '}
                    on branch <CommitIcon /> {branch}
                </span>
                <ChromeIcon />
            </p>
            <div className={styles.summaryRightBlock}>
                <div className={styles.errorsContainer}>
                    <div className={styles.errorsLabel}>Errors:</div>
                    <ul>
                        {cypressErrorName && (
                            <li className={styles.cypressError}>
                                1 {cypressErrorName}
                            </li>
                        )}
                        <li className={styles.networkError}>
                            {networkErrorCount} Network errors
                        </li>
                        <li className={styles.consoleError}>
                            {logErrorCount} Console errors
                        </li>
                    </ul>
                </div>
                <div className={styles.buttons}>
                    <button>Compare with latest passed</button>
                    <button>Re-run</button>
                </div>
            </div>
        </div>
    );
};

export default Summary;
