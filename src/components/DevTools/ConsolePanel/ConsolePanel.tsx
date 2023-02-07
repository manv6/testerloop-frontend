import React from 'react';
import logs, { LogLevel } from 'src/data/logs';
import { LogEntry, LogFilters } from './components';
import styles from './ConsolePanel.module.scss';


const ConsolePanel: React.FC = () => {
    const [filterTerm, setFilterTerm] = React.useState<string>('');

    const [activeLogLevels, setActiveLogLevels] = React.useState<Record<LogLevel, boolean>>({
        log: true,
        warning: true,
        error: true
    });

    const toggleActiveLogLevel = (level: LogLevel) => {
        setActiveLogLevels({...activeLogLevels, [level]: !activeLogLevels[level]});
    };

    const filteredLogs = logs.filter(({ message }) =>
        message.toLowerCase().includes(filterTerm.toLowerCase()));

    return (
        <section className={styles.consolePanel}>
            <LogFilters
                logs={filteredLogs}
                filterTerm={filterTerm}
                setFilterTerm={setFilterTerm}
                activeLogLevels={activeLogLevels}
                toggleActiveLogLevel={toggleActiveLogLevel}
            />

            <ul className={styles.logsList}>
                {filteredLogs
                    .filter(({ level }) => activeLogLevels[level])
                    .map((log) => {
                        // TODO: Timestamp is not unique, provide an id or a way to make it unique.
                        return <LogEntry key={log.timestamp + log.message.substring(0, 50)} {...log} />;
                    })}
            </ul>
        </section>
    );
};

export default ConsolePanel;
