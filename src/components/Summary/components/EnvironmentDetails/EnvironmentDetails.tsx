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

type Props = {
    fragmentKey: EnvironmentDetailsFragment$key;
};

const EnvironmentDetails: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(EnvironmentDetailsFragment, fragmentKey);
    const testCodeRevision = data.summaryEnvironmentDetails.testCodeRevision;

    const endTime = data.until;
    const failedAt = formatDate(endTime);

    return (
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
                    href={testCodeRevision?.branch?.url}
                >
                    {testCodeRevision?.branch?.name}
                </StyledLink>
            </DetailColumn>
            <DetailColumn title="Commit">
                <StyledLink
                    className={styles.columnContent}
                    target="_blank"
                    rel="noreferrer"
                    href={testCodeRevision?.url}
                >
                    {testCodeRevision?.commitId}
                </StyledLink>
            </DetailColumn>
            <DetailColumn title="Execution time">
                <div className={styles.columnContent}>{failedAt}</div>
            </DetailColumn>
            <DetailColumn title="By">
                <div className={styles.columnContent}>
                    <StyledLink
                        href={testCodeRevision?.author?.user?.url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.engineerLink}
                    >
                        <img
                            src={testCodeRevision?.author?.user?.avatar}
                            alt="avatar"
                            className={styles.avatar}
                        />
                        {testCodeRevision?.author?.user?.name}
                    </StyledLink>{' '}
                </div>
            </DetailColumn>
        </div>
    );
};

export default EnvironmentDetails;
