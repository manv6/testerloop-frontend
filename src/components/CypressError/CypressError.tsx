import React from 'react';
import { Panel } from 'src/core/components';
import cicd from 'src/data/cicd';
import results from 'src/data/results';

import styles from './CypressError.module.scss';

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

    const hrefText = [relativePath, line, column].join(':');

    return (
        <Panel className={styles.cypressError}>
            <div>
                <div className={styles.title}>
                    <span>!</span> {error.name}
                </div>
                <div className={styles.errorMessage}>{error.message}</div>
                <a href={url} target="_blank" rel="noreferrer">
                    {hrefText}
                </a>
            </div>
        </Panel>
    );
};

export default CypressError;
