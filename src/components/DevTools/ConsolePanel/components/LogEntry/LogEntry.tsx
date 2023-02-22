import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { CaretRightFill, CaretDownFill } from 'react-bootstrap-icons';
import styles from './LogEntry.module.scss';
import LogEntryFragment from './LogEntryFragment';
import { useFragment } from 'react-relay';

import type { LogEntryFragment$key } from './__generated__/LogEntryFragment.graphql';

interface Props {
    isLogSelected: boolean;
    isLogHovered: boolean;
    logEntry: LogEntryFragment$key;
}

const LogEntry: React.FC<Props> = ({
    isLogSelected,
    isLogHovered,
    logEntry,
}) => {
    const data = useFragment(LogEntryFragment, logEntry);

    const level = data.logLevel;
    const timestamp = data.at;
    const message = data.message;
    const [textOverflows, setTextOverflows] = useState<boolean>(false);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const messageRef = useRef<HTMLSpanElement>(null);

    const date = timestamp ? new Date(timestamp) : undefined;
    const displayDate = date
        ? new Intl.DateTimeFormat(navigator.language, {
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              fractionalSecondDigits: 3,
          }).format(date)
        : undefined;

    useEffect(() => {
        if (!messageRef.current) return;
        const element = messageRef.current;
        setTextOverflows(element.scrollWidth > element.offsetWidth);
    }, [messageRef, textOverflows]);

    return (
        <li
            key={timestamp + (message || '')}
            className={cx(
                styles.logEntry,
                {
                    [styles.warningLevel]: level === 'WARN',
                    [styles.errorLevel]: level === 'ERROR',
                },
                {
                    [styles.selected]: isLogSelected,
                    [styles.hovered]: isLogHovered,
                }
            )}
        >
            <span className={styles.displayDate}>{displayDate}</span>
            <span
                ref={messageRef}
                className={cx(styles.message, {
                    [styles.expanded]: isExpanded,
                })}
            >
                {textOverflows && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={styles.expandButton}
                    >
                        {isExpanded ? <CaretDownFill /> : <CaretRightFill />}
                    </button>
                )}
                {message}
            </span>
        </li>
    );
};

export default LogEntry;
