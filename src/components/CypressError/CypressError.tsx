import { styled } from '@mui/material';
import React from 'react';
import { Panel } from 'src/components/common';
import cicd from 'src/data/cicd';
import results from 'src/data/results';
import splitCamelCase from 'src/utils/splitCamelCase';
import { ErrorIcon, GoToCodeButton } from './components';

import styles from './CypressError.module.scss';

const StyledErrorName = styled('div')(({ theme }) => ({
    color: theme.palette.status.error[400],
}));

const CypressError: React.FC = () => {
    const githubUrl = cicd.GITHUB_SERVER_URL;
    const repository = cicd.GITHUB_REPOSITORY;
    const ref = cicd.GITHUB_REF_NAME;

    const errorObj = results.runs[0].tests[0].attempts[0];
    const error = errorObj.error;

    const relativePath = error.codeFrame.relativeFile;
    const line = error.codeFrame.line;
    const column = error.codeFrame.column;

    const url = [
        githubUrl,
        repository,
        'blob',
        ref,
        relativePath,
        `?#L${line}`,
    ].join('/');

    const tooltipText = [relativePath, line, column].join(':');

    return (
        <Panel className={styles.cypressError}>
            <div className={styles.errorDetail}>
                <div className={styles.title}>
                    <ErrorIcon />
                </div>
                <div className={styles.errorContent}>
                    <StyledErrorName className={styles.errorName}>
                        {splitCamelCase(error.name)}
                    </StyledErrorName>
                    <div>{error.message}</div>
                </div>
            </div>
            <GoToCodeButton url={url} tooltipText={tooltipText} />
        </Panel>
    );
};

export default CypressError;
