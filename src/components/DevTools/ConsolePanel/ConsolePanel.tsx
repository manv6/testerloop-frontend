import React from 'react';
import logs, { LogLevel, LogRecord } from 'src/data/logs';
import { useTimeline } from 'src/hooks/timeline';
import { LogEntry, LogFilters } from './components';
import styles from './ConsolePanel.module.scss';

const getMostRecentLogIdx = (logs: LogRecord[], timestamp: number): number => {
    const nextStepIdx = logs.findIndex((log) => log.timestamp > timestamp);
    return (nextStepIdx === -1 ? logs.length : nextStepIdx) - 1;
};

const ConsolePanel: React.FC = () => {
    const {
        currentTime,
        hoverTime,
    } = useTimeline();

    const [filterTerm, setFilterTerm] = React.useState<string>('');
    const [activeLogLevels, setActiveLogLevels] = React.useState<Record<LogLevel, boolean>>(
        Object.values(LogLevel).reduce((obj, lvl) => ({
            ...obj, [lvl]: true
        }), {} as Record<LogLevel, boolean>)
    );

    const toggleActiveLogLevel = (level: LogLevel) => {
        setActiveLogLevels({...activeLogLevels, [level]: !activeLogLevels[level]});
    };

    const textFilteredLogs = logs.filter(({ message }) =>
        message.toLowerCase().includes(filterTerm.toLowerCase()));

    // Calculate log stats from logs filtered ONLY with text.
    // If we apply it to the full filtered logs the disabled log levels will be 0.
    const logStats = React.useMemo(() => (
        textFilteredLogs.reduce((acc, { level }) => {
            ++acc[level];
            return acc;
        }, { log: 0, warning: 0, error: 0 } as Record<LogLevel, number>)
    ), [textFilteredLogs]);

    const filteredLogs = textFilteredLogs
        .filter(({ level }) => activeLogLevels[level]);

    const currentTimestamp = currentTime.getTime();
    const currentLogIdx = getMostRecentLogIdx(filteredLogs, currentTimestamp);

    const hoverTimestamp = hoverTime?.getTime();
    const hoveredLogIdx = hoverTimestamp
        ? getMostRecentLogIdx(filteredLogs, hoverTimestamp)
        : null;

    return (
        <section className={styles.consolePanel}>
            <LogFilters
                logStats={logStats}
                filterTerm={filterTerm}
                setFilterTerm={setFilterTerm}
                activeLogLevels={activeLogLevels}
                toggleActiveLogLevel={toggleActiveLogLevel}
            />

            <ul className={styles.logsList}>
                {filteredLogs.map((log, idx) => {
                    // TODO: Timestamp is not unique, provide an id or a way to make it unique.
                    return (
                        <LogEntry
                            key={log.timestamp + log.message.substring(0, 50) + idx}
                            isLogSelected={currentLogIdx === idx}
                            isLogHovered={hoveredLogIdx === idx}
                            {...log}
                        />
                    );
                })}
            </ul>
        </section>
    );
};

export default ConsolePanel;
