import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import cx from 'classnames';
import styles from './LogEntry.module.scss';
import LogEntryFragment from './LogEntryFragment';
import { useFragment } from 'react-relay';

import type {
    ConsoleLogLevel,
    LogEntryFragment$key,
} from './__generated__/LogEntryFragment.graphql';
import { styled } from '@mui/material';
import { LogLevel } from '../../ConsolePanel';
import { LogErrorIcon, LogWarnIcon, OtherLogIcon } from '..';
import { ChevronIcon } from 'src/components/common';
import ElapsedTime from 'src/components/common/ElapsedTime';

interface Props {
    isLogSelected: boolean;
    isLogHovered: boolean;
    logEntry: LogEntryFragment$key;
}

interface StyledLogEntryProps {
    isSelected: boolean;
    isHovered: boolean;
}

const StyledLogEntry = styled('li')<StyledLogEntryProps>(
    ({ theme, isSelected, isHovered }) => {
        let backgroundColor = theme.palette.base[400];
        let borderColor = theme.palette.base[300];
        if (isSelected) {
            backgroundColor = theme.palette.primary[500];
            borderColor = `${theme.palette.primary[400]}`;
        }
        if (isHovered) {
            backgroundColor = `${theme.palette.base[300]}7F`;
            borderColor = theme.palette.base[300];
        }

        return {
            backgroundColor,
            borderBottom: `1px solid ${borderColor}`,
            borderTop: `1px solid ${borderColor}`,
        };
    }
);

interface StyledLineMarkertProps {
    logType: ConsoleLogLevel;
}

const StyledLineMarker = styled('div')<StyledLineMarkertProps>(
    ({ theme, logType }) => {
        let backgroundColor;
        switch (logType) {
            case LogLevel.ERROR:
                backgroundColor = theme.palette.status.error[400];
                break;
            case LogLevel.WARN:
                backgroundColor = theme.palette.status.caution[400];
                break;
            default:
                backgroundColor = theme.palette.base[200];
                break;
        }
        return {
            backgroundColor,
        };
    }
);

type LogEntryWithRefProps = Props & {
    ref: React.Ref<HTMLLIElement>;
};

// eslint-disable-next-line react/display-name
const LogEntry = forwardRef<HTMLLIElement, LogEntryWithRefProps>(
    ({ isLogSelected, isLogHovered, logEntry }, ref) => {
        const data = useFragment(LogEntryFragment, logEntry);

        const timestamp = data.at;
        const message = data.message;
        const [textOverflows, setTextOverflows] = useState<boolean>(false);
        const [isExpanded, setIsExpanded] = useState<boolean>(false);
        const messageRef = useRef<HTMLSpanElement>(null);

        const logIcon = useMemo(() => {
            switch (data.logLevel) {
                case LogLevel.ERROR:
                    return <LogErrorIcon />;
                case LogLevel.WARN:
                    return <LogWarnIcon />;
                default:
                    return <OtherLogIcon />;
            }
        }, [data.logLevel]);

        useEffect(() => {
            if (!messageRef.current) return;
            const element = messageRef.current;
            setTextOverflows(element.scrollWidth > element.offsetWidth);
        }, [messageRef, textOverflows]);

        return (
            <StyledLogEntry
                key={timestamp + (message || '')}
                isSelected={isLogSelected}
                isHovered={isLogHovered}
                className={styles.logEntry}
                ref={ref}
            >
                <StyledLineMarker
                    className={styles.lineMarker}
                    logType={data.logLevel}
                />
                <ElapsedTime timestamp={timestamp} />
                <span
                    className={cx(styles.message, {
                        [styles.expanded]: isExpanded,
                    })}
                >
                    <span className={styles.logIcon}>{logIcon}</span>
                    <span ref={messageRef} className={styles.messageText}>
                        {message}
                    </span>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={styles.expandButton}
                        style={!textOverflows ? { visibility: 'hidden' } : {}}
                    >
                        <ChevronIcon direction={isExpanded ? 'up' : 'down'} />
                    </button>
                </span>
            </StyledLogEntry>
        );
    }
);

export default LogEntry;
