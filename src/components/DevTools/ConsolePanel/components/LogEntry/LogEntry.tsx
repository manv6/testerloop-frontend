import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { CaretRightFill, CaretDownFill } from 'react-bootstrap-icons';
import { LogRecord } from 'src/data/logs';
import styles from './LogEntry.module.scss';

interface Props extends LogRecord {
    isLogSelected: boolean;
    isLogHovered: boolean;
}

const LogEntry: React.FC<Props> = ({
    level,
    timestamp,
    message,
    isLogSelected,
    isLogHovered
}) => {
    const [textOverflows, setTextOverflows] = useState<boolean>(false);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const messageRef = useRef<HTMLSpanElement>(null);

    const date = new Date(timestamp);
    const displayDate = `${date.toLocaleTimeString()}.${date.getMilliseconds()}`;

    useEffect(() => {
        if (!messageRef.current) return;
        const element = messageRef.current;
        setTextOverflows(element.scrollWidth > element.offsetWidth);
    }, [messageRef, textOverflows]);

    return (
        <li key={timestamp + message.substring(0, 50)}
            className={cx(
                styles.logEntry,
                {
                    [styles.warningLevel]: level === 'warning',
                    [styles.errorLevel]: level === 'error'
                },
                {
                    [styles.selected]: isLogSelected,
                    [styles.hovered]: isLogHovered
                }
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
                        {isExpanded ? <CaretDownFill/> : <CaretRightFill/>}
                    </button>
                )}
                {message}
            </span>
        </li>
    );
};

export default LogEntry;
