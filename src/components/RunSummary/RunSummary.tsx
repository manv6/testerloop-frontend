import React from 'react';
import { useFragment } from 'react-relay';
import { RunSummaryFragment$key } from './__generated__/RunSummaryFragment.graphql';
import graphql from 'babel-plugin-relay/macro';
import { Panel, Tag } from 'src/components/common';
import { Typography } from '@mui/material';
import { RunEnvironmentDetails } from './components';
import TestRunTitle from '../TestRun/TestRunTitle';
import cx from 'classnames';
import styles from './RunSummary.module.scss';

type Props = {
    fragmentKey: RunSummaryFragment$key;
    className?: string;
};

const RunSummary: React.FC<Props> = ({ fragmentKey, className }) => {
    const runData = useFragment(
        graphql`
            fragment RunSummaryFragment on TestRun {
                id
                ...TestRunTitleFragment
                ...TestCountFragment
                ...TestRunDateTimeFragment
                ...RunEnvironmentDetailsFragment
                executions {
                    totalCount
                    edges {
                        node {
                            at
                            events(
                                filter: {
                                    type: COMMAND
                                    commandFilter: { status: FAILED }
                                }
                            ) {
                                totalCount
                            }
                        }
                    }
                }
            }
        `,
        fragmentKey
    );

    const didAnyTestFail = runData.executions.edges.some(
        (edge) => edge.node.events.totalCount > 0
    );

    const tagType = didAnyTestFail ? 'error' : 'success';
    const tagText = didAnyTestFail ? 'Failed' : 'Passed';

    return (
        <Panel className={cx(styles.summary, className)}>
            <div className={styles.row}>
                <div className={styles.pageTitle}>
                    <Typography variant="h1">
                        <TestRunTitle testRunKey={runData} />
                    </Typography>
                    <Tag tagType={tagType} text={tagText} />
                </div>
            </div>

            <div className={cx(styles.row, styles.detailsRow)}>
                <RunEnvironmentDetails fragmentKey={runData} />
            </div>
        </Panel>
    );
};

export default RunSummary;
