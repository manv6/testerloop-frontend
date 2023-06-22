import { styled } from '@mui/material';
import React, { useState } from 'react';
import { Panel } from 'src/components/common';
import splitCamelCase from 'src/utils/splitCamelCase';
import { ChevronIcon } from 'src/components/common';
import { ErrorIcon, GoToCodeButton } from './components';
import cx from 'classnames';

import styles from './FrameworkError.module.scss';
import { FrameworkErrorFragment$key } from './__generated__/FrameworkErrorFragment.graphql';
import FrameworkErrorFragment from './FrameworkErrorFragment';
import { useFragment } from 'react-relay';

const StyledErrorName = styled('div')(({ theme }) => ({
    color: theme.palette.status.error[300],
}));

type Props = {
    fragmentKey: FrameworkErrorFragment$key;
};

const FrameworkError: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(FrameworkErrorFragment, fragmentKey);
    const [isExpanded, setIsExpanded] = useState(false);

    const error = data.frameworkError.edges[0]?.node.error;

    if (!error) {
        return null;
    }

    const location = error.location;
    const url = location.line.url;
    const tooltipText = [
        location.line.file.path,
        location.line.line,
        location.column,
    ].join(':');

    return (
        <Panel className={styles.errorPanel}>
            <div onClick={() => setIsExpanded(!isExpanded)}>
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
                                {splitCamelCase(error.type)}
                            </StyledErrorName>
                            {error.message}
                            <span className={styles.chevron}>
                                <ChevronIcon
                                    direction={isExpanded ? 'up' : 'down'}
                                />
                            </span>
                            {isExpanded && (
                                <div className={styles.stackMessage}>
                                    {error.stackTrace}
                                </div>
                            )}
                        </div>
                    </div>
                    <GoToCodeButton url={url} tooltipText={tooltipText} />
                </div>
            </div>
        </Panel>
    );
};

export default FrameworkError;
