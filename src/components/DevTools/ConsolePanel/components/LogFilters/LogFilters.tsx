import cx from 'classnames';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { LogLevel } from 'src/data/logs';
import styles from './LogFilters.module.scss';

interface Props {
    logStats: Record<LogLevel, number>;
    filterTerm: string;
    setFilterTerm: React.Dispatch<React.SetStateAction<string>>;
    activeLogLevels: Record<LogLevel, boolean>;
    toggleActiveLogLevel: (level: LogLevel) => void;
}

const LogFilters: React.FC<Props> = ({
    logStats,
    filterTerm,
    setFilterTerm,
    activeLogLevels,
    toggleActiveLogLevel
}) => (
    <aside className={styles.logsFilters}>
        <div className={styles.toggleButtons}>
            <button
                onClick={() => toggleActiveLogLevel('log')}
                className={cx(styles.toggleLogLevelButton, { [styles.logLevelActive]: activeLogLevels.log })}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className={styles.toggleLogLevelIcon}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
                <small className={styles.logLevelCount}>{logStats.log}</small>
            </button>

            <button
                onClick={() => toggleActiveLogLevel('warning')}
                className={cx(styles.toggleLogLevelButton, { [styles.logLevelActive]: activeLogLevels.warning })}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className={styles.toggleLogLevelIcon}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <small className={styles.logLevelCount}>{logStats.warning}</small>
            </button>

            <button
                onClick={() => toggleActiveLogLevel('error')}
                className={cx(styles.toggleLogLevelButton, { [styles.logLevelActive]: activeLogLevels.error })}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className={styles.toggleLogLevelIcon}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <small className={styles.logLevelCount}>{logStats.error}</small>
            </button>
        </div>

        <Form.Control
            type="text"
            size="sm"
            value={filterTerm}
            placeholder="Filter"
            onChange={(e) => setFilterTerm(e.target.value)}
        />
    </aside>
);

export default LogFilters;
