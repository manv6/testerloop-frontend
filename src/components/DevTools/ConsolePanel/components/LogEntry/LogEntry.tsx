import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import cx from 'classnames';
import styles from './LogEntry.module.scss';
import LogEntryFragment from './LogEntryFragment';
import { useRefetchableFragment } from 'react-relay';

import type {
    ConsoleLogLevel,
    LogEntryFragment$key,
} from './__generated__/LogEntryFragment.graphql';
import { styled } from '@mui/material';
import { LogLevel } from '../../ConsolePanel';
import { LogErrorIcon, LogWarnIcon, OtherLogIcon } from '..';
import { ChevronIcon } from 'src/components/common';
import ElapsedTime from 'src/components/common/ElapsedTime';
import entryStyles from 'src/components/common/styles/entryStyles';
import StackTrace from '../StackTrace/StackTrace';
interface Props {
    isLogSelected: boolean;
    isLogHovered: boolean;
    logEntry: LogEntryFragment$key;
}

interface StyledLogEntryProps {
    isSelected: boolean;
    isHovered: boolean;
}

const StyledLogEntry = styled('li')<StyledLogEntryProps>((props) => {
    return entryStyles(props);
});

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
        const [data, refetch] = useRefetchableFragment(
            LogEntryFragment,
            logEntry
        );
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

        const handleExpandClick = () => {
            setIsExpanded(!isExpanded);
            refetch({ open: !isExpanded });
        };

        return (
            <StyledLogEntry
                key={timestamp + (message || '')}
                isSelected={isLogSelected}
                isHovered={isLogHovered}
                className={styles.logEntry}
                ref={ref}
            >
                <div className={styles.mainContent}>
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
                            onClick={handleExpandClick}
                            className={styles.expandButton}
                        >
                            <ChevronIcon
                                direction={isExpanded ? 'up' : 'down'}
                            />
                        </button>
                    </span>
                </div>
                {isExpanded && (
                    <React.Suspense fallback="...">
                        <StackTrace fragmentKey={data.stackTrace} />
                    </React.Suspense>
                )}{' '}
            </StyledLogEntry>
        );
    }
);

export default LogEntry;
