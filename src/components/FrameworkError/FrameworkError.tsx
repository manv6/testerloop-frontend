import { styled } from '@mui/material';
import React, { useState } from 'react';
import { ExpandButton, Panel } from 'src/components/common';
import splitCamelCase from 'src/utils/splitCamelCase';
import { ErrorIcon, GoToCodeButton } from './components';
import cx from 'classnames';

import styles from './FrameworkError.module.scss';
import getFrameworkErrorInfo from 'src/utils/getFrameworkErrorInfo';
import results from 'src/data/results';

const StyledErrorName = styled('div')(({ theme }) => ({
    color: theme.palette.status.error[400],
}));

const FrameworkError: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { url, text: tooltipText } = getFrameworkErrorInfo();

    const errorObj = results.runs[0].tests[0].attempts[0];
    const error = errorObj.error;

    return (
        <Panel className={styles.errorPanel}>
            <div className={styles.frameworkError}>
                <div className={styles.errorDetail}>
                    <div className={styles.title}>
                        <ErrorIcon />
                    </div>
                    <div
                        className={cx(styles.errorContent, {
                            [styles.contentMargin]: isExpanded,
                        })}
                    >
                        <StyledErrorName className={styles.errorName}>
                            {splitCamelCase(error.name)}
                        </StyledErrorName>
                        <div>{error.message}</div>
                        <br />
                        {isExpanded && <div>{error.stack}</div>}
                    </div>
                </div>
                <GoToCodeButton url={url} tooltipText={tooltipText} />
            </div>
            <ExpandButton
                onClick={() => setIsExpanded(!isExpanded)}
                isExpanded={isExpanded}
            />
        </Panel>
    );
};

export default FrameworkError;
