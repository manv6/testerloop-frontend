import React, { useState } from 'react';
import styles from './Summary.module.scss';
import { useFragment } from 'react-relay';
import { SummaryFragment$key } from './__generated__/SummaryFragment.graphql';
import graphql from 'babel-plugin-relay/macro';
import { Panel, Tag, Divider, ExpandButton } from 'src/components/common';
import cx from 'classnames';
import { FrameworkErrorIcon, EnvironmentDetails } from './components';
import splitCamelCase from 'src/utils/splitCamelCase';
import NetworkErrorCount from './components/NetworkErrorCount';
import ConsoleErrorCount from './components/ConsoleErrorCount';

type Props = {
    fragmentKey: SummaryFragment$key;
    className?: string;
};

const Summary: React.FC<Props> = ({ fragmentKey, className }) => {
    const summaryData = useFragment(
        graphql`
            fragment SummaryFragment on TestExecution {
                id
                title
                ...ConsoleErrorCountFragment
                ...NetworkErrorCountFragment
                ...EnvironmentDetailsFragment
                commandWithError: events(
                    filter: { type: COMMAND, commandFilter: { status: FAILED } }
                ) {
                    edges {
                        node {
                            ... on CommandEvent {
                                id
                                error {
                                    type
                                }
                            }
                        }
                    }
                }
            }
        `,
        fragmentKey
    );

    const [isExpanded, setIsExpanded] = useState(false);

    const frameworkErrorName =
        summaryData.commandWithError.edges[0]?.node.error?.type;
    const title = summaryData.title;
    const tagType = frameworkErrorName ? 'error' : 'success';
    const tagText = frameworkErrorName ? 'Failed' : 'Passed';

    return (
        <Panel className={cx(styles.summary, className)}>
            <div className={styles.row}>
                <div className={styles.pageTitle}>
                    <h1>Scenario: {title}</h1>
                    <Tag tagType={tagType} text={tagText} />
                </div>
            </div>
            {isExpanded && (
                <div className={cx(styles.row, styles.detailsRow)}>
                    <EnvironmentDetails fragmentKey={summaryData} />
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
