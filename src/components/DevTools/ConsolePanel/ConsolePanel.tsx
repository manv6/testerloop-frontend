import React from 'react';
import cx from 'classnames';
import Form from 'react-bootstrap/Form';
import logs, { LogLevel } from 'src/data/logs';
import { LogEntry } from './components';
import styles from './ConsolePanel.module.scss';


const ConsolePanel: React.FC = () => {
    const [filterTerm, setFilterTerm] = React.useState<string>('');

    const [displayLogLevels, setDisplayLogLevels] = React.useState<Record<LogLevel, boolean>>({
        log: true,
        warning: true,
        error: true
    });

    const toggleDisplayLogLevel = (level: LogLevel) => {
        setDisplayLogLevels({...displayLogLevels, [level]: !displayLogLevels[level]});
    };

    const filteredLogs = logs.filter(({ message }) =>
        message.toLowerCase().includes(filterTerm.toLowerCase()));

    const logStats = React.useMemo(() => {
        return filteredLogs.reduce((acc, { level }) => {
            ++acc[level];
            return acc;
        }, {
            log: 0,
            warning: 0,
            error: 0
        } as Record<LogLevel, number>);
    }, [filteredLogs]);

    return (
        <section className={styles.consolePanel}>
            <div className={styles.logsFilters}>
                <button
                    onClick={() => toggleDisplayLogLevel('log')}
                    className={cx(styles.toggleLogLevelButton, { [styles.logLevelActive]: displayLogLevels.log })}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" className={styles.toggleLogLevelIcon}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                    <small className={styles.logLevelCount}>{logStats.log}</small>
                </button>

                <button
                    onClick={() => toggleDisplayLogLevel('warning')}
                    className={cx(styles.toggleLogLevelButton, { [styles.logLevelActive]: displayLogLevels.warning })}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className={styles.toggleLogLevelIcon}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <small className={styles.logLevelCount}>{logStats.warning}</small>
                </button>

                <button
                    onClick={() => toggleDisplayLogLevel('error')}
                    className={cx(styles.toggleLogLevelButton, { [styles.logLevelActive]: displayLogLevels.error })}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className={styles.toggleLogLevelIcon}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <small className={styles.logLevelCount}>{logStats.error}</small>
                </button>

                <Form.Control
                    type="text"
                    size="sm"
                    value={filterTerm}
                    placeholder="Filter"
                    onChange={(e) => setFilterTerm(e.target.value)}
                />
            </div>

            <ul className={styles.logsList}>
                {filteredLogs
                    .filter(({ level }) => displayLogLevels[level])
                    .map((log) => {
                        // TODO: Timestamp is not unique, provide an id or a way to make it unique.
                        return <LogEntry key={log.timestamp + log.message.substring(0, 50)} {...log} />;
                    })}
            </ul>
        </section>
    );
};

export default ConsolePanel;
