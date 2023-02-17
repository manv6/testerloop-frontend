import React, { useMemo } from 'react';
import { useFragment } from 'react-relay';
import { useTimeline } from 'src/hooks/timeline';
import { LogEntry, LogFilters } from './components';
import styles from './ConsolePanel.module.scss';
import graphql from 'babel-plugin-relay/macro';

import type {ConsolePanelFragment$key} from './__generated__/ConsolePanelFragment.graphql';

export enum LogLevel {
    LOG = 'log',
    WARN = 'warning',
    ERROR = 'error',
}

export type LogRecord = {
    timestamp?: number;
    level?: LogLevel;
    message?: string | undefined;
}

const getMostRecentLogIdx = (logs: LogRecord[], timestamp: number): number => {
    const nextStepIdx = logs.findIndex((log) => (log?.timestamp ? log.timestamp > timestamp : false));
    return (nextStepIdx === -1 ? logs.length : nextStepIdx) - 1;
};

type Props = {
    fragmentKey: ConsolePanelFragment$key | null
}

const ConsolePanel: React.FC<Props> = ({fragmentKey}) => {
    const data = useFragment(
        graphql`
            fragment ConsolePanelFragment on TestExecution {
                id
                events(type: CONSOLE) {
                    edges {
                        __typename
                        node {
                            at
                            ... on ConsoleLogEvent {
                                at
                                message
                                logLevel
                            }
                        }
                    }
                }
            }
            `,
        fragmentKey
    );

    const logs = useMemo(() => data?.events.edges.map((e) => {
        if(!e.node.logLevel){
            return e.node;
        }
        const index = Object.keys(LogLevel).indexOf(e.node.logLevel);
        const value = Object.values(LogLevel)[index];
        return {...e.node, timestamp: new Date(e.node.at).getTime(), level: value };
    }), [data?.events.edges]);


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

    const textFilteredLogs = logs?.filter(({ message }) =>
        message?.toLowerCase().includes(filterTerm.toLowerCase()));

    // Calculate log stats from logs filtered ONLY with text.
    // If we apply it to the full filtered logs the disabled log levels will be 0.
    const logStats = React.useMemo(() => (
        (textFilteredLogs || []).reduce((acc, curr: LogRecord) => {
            if(!curr?.level){
                return acc;
            }

            ++acc[curr.level];
            return acc;
        }, { log: 0, warning: 0, error: 0 } as Record<LogLevel, number>)
    ), [textFilteredLogs]);

    const filteredLogs = textFilteredLogs
        ?.filter((log: LogRecord) => log?.timestamp && (log?.level ? activeLogLevels[log.level] : undefined));

    const currentTimestamp = currentTime.getTime();
    const currentLogIdx = getMostRecentLogIdx((filteredLogs || []) as LogRecord[], currentTimestamp);

    const hoverTimestamp = hoverTime?.getTime();
    const hoveredLogIdx = hoverTimestamp
        ? getMostRecentLogIdx((filteredLogs || []) as LogRecord[], hoverTimestamp)
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
                {filteredLogs?.map((log: LogRecord, idx) => {
                    // TODO: Timestamp is not unique, provide an id or a way to make it unique.
                    return (
                        <LogEntry
                            key={log?.timestamp + (log?.message || '')}
                            isLogSelected={currentLogIdx === idx}
                            isLogHovered={hoveredLogIdx === idx}
                            level={log?.level}
                            timestamp={log.timestamp as number}
                            message={log.message as string}
                        />
                    );
                })}
            </ul>
        </section>
    );
};

export default ConsolePanel;
