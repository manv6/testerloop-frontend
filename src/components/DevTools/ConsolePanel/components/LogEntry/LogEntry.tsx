import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { LogRecord } from 'src/data/logs';
import styles from './LogEntry.module.scss';

const LogEntry: React.FC<LogRecord> = ({ level, timestamp, message }) => {
    const [textOverflows, setTextOverflows] = useState<boolean>(false);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const messageRef = useRef<HTMLSpanElement>(null);

    const displayDate = new Date(timestamp).toLocaleTimeString();

    useEffect(() => {
        if (!messageRef.current) return;
        const element = messageRef.current;
        setTextOverflows(element.scrollWidth > element.offsetWidth);
    }, [messageRef, textOverflows]);

    return (
        <li key={timestamp + message.substring(0, 50)}
            className={cx(
                styles.logEntry,
                {[styles.warningLevel]: level === 'warning'},
                {[styles.errorLevel]: level === 'error'}
            )}
        >
            <span className={styles.displayDate}>{displayDate}</span>
            <span
                ref={messageRef}
                className={cx(
                    styles.message,
                    { [styles.expanded]: isExpanded}
                )}
            >
                {textOverflows && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={styles.expandButton}
                    >
                        {isExpanded ? '▼' : '▶'}
                    </button>
                )}
                {message}
            </span>
        </li>
    );
};

export default LogEntry;
