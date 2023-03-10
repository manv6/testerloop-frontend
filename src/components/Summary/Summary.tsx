// TODO: Remove this check once temp data is removed!!
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import styles from './Summary.module.scss';
import cicd from 'src/data/cicd';
import results from 'src/data/results';
import BlankAvatar from './components/BlankAvatar';
import ChromeIcon from './components/ChromeIcon';
import { formatDate } from 'src/utils/date';
import * as formatter from 'src/utils/formatters';
import networkEventData from 'src/data/networkEvents';
import { useFragment } from 'react-relay';
import { SummaryFragment$key } from './__generated__/SummaryFragment.graphql';
import graphql from 'babel-plugin-relay/macro';
import { Panel } from 'src/components/common';
import cx from 'classnames';
import DetailColumn from './components/DetailColumn';

type Props = {
    fragmentKey: SummaryFragment$key | null;
    className?: string;
};

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

    const branch = cicd.GITHUB_REF_NAME;
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
    const cypressErrorName = errorObj.error.name;

    const title = results.runs[0].tests[0].title.slice(-1)[0];

    const failedAt = formatDate(endTime);

    return (
        <Panel className={cx(styles.summary, className)}>
            <div className={styles.row}>
                <h1>{title}</h1>
                <div className={styles.buttons}>
                    <button>Compare</button>
                    <button>Re-run</button>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.envDetails}>
                    <DetailColumn title="Browser">
                        <div>
                            <ChromeIcon /> Chrome
                        </div>
                    </DetailColumn>
                    <DetailColumn title="Branch">
                        <div>{branch}</div>
                    </DetailColumn>
                    <DetailColumn title="Commit">
                        <div>hash</div>
                    </DetailColumn>
                    <DetailColumn title="Time">
                        <div>{failedAt}</div>
                    </DetailColumn>
                    <DetailColumn title="By">
                        <div>
                            <BlankAvatar className={styles.avatar} />{' '}
                            <a
                                href={engineerUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {engineer}
                            </a>{' '}
                        </div>
                    </DetailColumn>
                </div>
                <div className={styles.errorsContainer}>
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
            </div>
        </Panel>
    );
};

export default Summary;
