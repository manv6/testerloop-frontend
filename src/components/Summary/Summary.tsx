import React, { useState } from 'react';
import styles from './Summary.module.scss';
import results from 'src/data/results';
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
                ...ConsoleErrorCountFragment
                ...NetworkErrorCountFragment
                ...EnvironmentDetailsFragment
            }
        `,
        fragmentKey
    );

    const [isExpanded, setIsExpanded] = useState(false);

    const errorObj = results.runs[0].tests[0].attempts[0];
    const frameworkErrorName = errorObj.error.name;
    const title = results.runs[0].tests[0].title.slice(-1)[0];

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
