import React from 'react';
import { useFragment } from 'react-relay';
import { RunSummaryFragment$key } from './__generated__/RunSummaryFragment.graphql';
import graphql from 'babel-plugin-relay/macro';
import { Panel, BreadCrumb } from 'src/components/common';
import { Typography } from '@mui/material';
import { RunEnvironmentDetails, RunStatus } from './components';
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
                ...TestRunTitleFragment
                ...TestCountFragment
                ...TestRunDateTimeFragment
                ...RunEnvironmentDetailsFragment
                ...RunStatusFragment
            }
        `,
        fragmentKey
    );

    return (
        <Panel className={cx(styles.summary, className)}>
            <BreadCrumb
                paths={[
                    {
                        text: 'RUNS',
                        link: '/',
                    },
                    {
                        text: '',
                        link: '',
                    },
                ]}
            />
            <div className={styles.row}>
                <div className={styles.pageTitle}>
                    <Typography variant="h1">
                        <TestRunTitle testRunKey={runData} />
                    </Typography>
                    <RunStatus fragmentKey={runData} />
                </div>
            </div>

            <div className={cx(styles.row, styles.detailsRow)}>
                <RunEnvironmentDetails fragmentKey={runData} />
            </div>
        </Panel>
    );
};

export default RunSummary;
