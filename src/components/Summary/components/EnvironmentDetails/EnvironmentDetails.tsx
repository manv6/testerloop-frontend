import { styled } from '@mui/material';
import React from 'react';
import { useFragment } from 'react-relay';
import { formatDate } from 'src/utils/date';
import ChromeIcon from '../ChromeIcon';
import DetailColumn from '../DetailColumn';
import styles from './EnvironmentDetails.module.scss';
import EnvironmentDetailsFragment from './EnvironmentDetailsFragment';
import { EnvironmentDetailsFragment$key } from './__generated__/EnvironmentDetailsFragment.graphql';

const StyledLink = styled('a')(({ theme }) => ({
    color: theme.palette.base[100],
}));

const BranchLink = styled('a')(({ theme }) => ({
    color: theme.palette.status.success[200],
}));

type Props = {
    fragmentKey: EnvironmentDetailsFragment$key;
};

const EnvironmentDetails: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(EnvironmentDetailsFragment, fragmentKey);
    const testCodeRevision = data.summaryEnvironmentDetails.testCodeRevision;

    return (
        <div className={styles.envDetails}>
            <DetailColumn title="Browser">
                <div className={styles.columnContent}>
                    <ChromeIcon /> Chrome
                </div>
            </DetailColumn>
            <DetailColumn title="Branch">
                {testCodeRevision?.branch ? (
                    <BranchLink
                        className={styles.columnContent}
                        target="_blank"
                        rel="noreferrer"
                        href={testCodeRevision.branch.url}
                    >
                        {testCodeRevision.branch.name}
                    </BranchLink>
                ) : (
                    '-'
                )}
            </DetailColumn>
            <DetailColumn title="Commit">
                {testCodeRevision ? (
                    <StyledLink
                        className={styles.columnContent}
                        target="_blank"
                        rel="noreferrer"
                        href={testCodeRevision.url}
                    >
                        {testCodeRevision.commitId}
                    </StyledLink>
                ) : (
                    '-'
                )}
            </DetailColumn>
            <DetailColumn title="Date/Time">
                <div className={styles.columnContent}>
                    {formatDate(data.at)}
                </div>
            </DetailColumn>
            <DetailColumn title="By">
                <div className={styles.columnContent}>
                    {testCodeRevision?.author ? (
                        <div>{testCodeRevision.author.name}</div>
                    ) : (
                        '-'
                    )}
                </div>
            </DetailColumn>
        </div>
    );
};

export default EnvironmentDetails;
