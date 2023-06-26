import React from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { RunEnvironmentDetailsFragment$key } from './__generated__/RunEnvironmentDetailsFragment.graphql';
import {
    TestCount,
    TestRunBrowser,
    TestRunAuthor,
    TestRunBranch,
    TestRunDateTime,
} from 'src/components/RunSummary/components';
import { DetailColumn } from 'src/components/Summary/components';
import styles from './RunEnvironmentDetails.module.scss';

type Props = {
    fragmentKey: RunEnvironmentDetailsFragment$key;
};

const RunEnvironmentDetails: React.FC<Props> = ({ fragmentKey }) => {
    const environmentDetails = useFragment(
        graphql`
            fragment RunEnvironmentDetailsFragment on TestRun {
                ...TestCountFragment
                ...TestRunDateTimeFragment
                testCodeRevision {
                    ...TestRunBranchFragment
                    ...TestRunAuthorFragment
                }
            }
        `,
        fragmentKey
    );

    return (
        <div className={styles.envDetails}>
            <DetailColumn title="Tests">
                <div className={styles.columnContent}>
                    <TestCount fragmentKey={environmentDetails} />
                </div>
            </DetailColumn>
            <DetailColumn title="Browser">
                <div className={styles.columnContent}>
                    <TestRunBrowser />
                </div>
            </DetailColumn>
            <DetailColumn title="Branch">
                <div className={styles.columnContent}>
                    {environmentDetails.testCodeRevision ? (
                        <TestRunBranch
                            fragmentKey={environmentDetails.testCodeRevision}
                        />
                    ) : (
                        <div>No Branch Information</div>
                    )}
                </div>
            </DetailColumn>
            <DetailColumn title="Date/Time">
                <div className={styles.columnContent}>
                    <TestRunDateTime fragmentKey={environmentDetails} />
                </div>
            </DetailColumn>
            <DetailColumn title="By">
                <div className={styles.columnContent}>
                    {environmentDetails.testCodeRevision ? (
                        <TestRunAuthor
                            fragmentKey={environmentDetails.testCodeRevision}
                        />
                    ) : (
                        <div>No Author Information</div>
                    )}
                </div>
            </DetailColumn>
        </div>
    );
};

export default RunEnvironmentDetails;
