import React, { useCallback } from 'react';
import { useFragment } from 'react-relay';
import { useTimeline } from 'src/hooks/timeline';
import { LogEntry, LogFilters } from './components';
import styles from './ConsolePanel.module.scss';
import graphql from 'babel-plugin-relay/macro';

import type {ConsolePanelFragment$key} from './__generated__/ConsolePanelFragment.graphql';

export enum LogLevel {
    LOG = 'LOG',
    WARN = 'WARN',
    ERROR = 'ERROR',
}

type Props = {
    fragmentKey: ConsolePanelFragment$key | null
}

const ConsolePanel: React.FC<Props> = ({fragmentKey}) => {
    const data = useFragment(
        graphql`
            fragment ConsolePanelFragment on TestExecution {
                id
                events(type: [CONSOLE]) 
                {
                    edges {
                        __typename
                        node {
                            __typename
                            at
                            ...LogEntryFragment
                        }
                    }
                }
                warnings: events(type: [CONSOLE], logLevel: [WARN]) {
                    totalCount
                    }
                errors: events(type: [CONSOLE], logLevel: [ERROR]) {
                totalCount
                }
                logs: events(type: [CONSOLE], logLevel: [LOG]) {
                totalCount
                }
            }
            `,
        fragmentKey
    );


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

    const getMostRecentLogIdx = useCallback((timestamp: number): number => {
        const logs = data?.events?.edges;
        if(!logs) {
            return -1;
        }
        const nextStepIdx = logs.findIndex(({node}) =>  new Date(node.at).getTime() > timestamp );
        return (nextStepIdx === -1 ? logs.length : nextStepIdx) - 1;
    }, [data?.events?.edges]);

    // const textFilteredLogs = logs?.filter(({ message }) =>
    //     message?.toLowerCase().includes(filterTerm.toLowerCase()));

    const logStats = React.useMemo(() => (
        {
            LOG: data?.logs.totalCount || 0,
            WARN: data?.warnings.totalCount || 0,
            ERROR: data?.errors.totalCount || 0
        }
    ), [data?.errors.totalCount, data?.logs.totalCount, data?.warnings.totalCount]);

    const currentTimestamp = currentTime.getTime();
    const currentLogIdx = getMostRecentLogIdx(currentTimestamp);

    const hoverTimestamp = hoverTime?.getTime();
    const hoveredLogIdx = hoverTimestamp
        ? getMostRecentLogIdx(hoverTimestamp)
        : null;

    console.log(data);

    return (
        <section className={styles.consolePanel}>
            <LogFilters
                logStats={logStats} //TODO: add consoleEvent filter to BE
                filterTerm={filterTerm}
                setFilterTerm={setFilterTerm}
                activeLogLevels={activeLogLevels}
                toggleActiveLogLevel={toggleActiveLogLevel}
            />

            <ul className={styles.logsList}>
                {(data?.events?.edges || [])?.map((log, idx) => {
                    // TODO: Timestamp is not unique, provide an id or a way to make it unique.
                    return (
                        <LogEntry
                            key={idx}
                            isLogSelected={currentLogIdx === idx}
                            isLogHovered={hoveredLogIdx === idx}
                            logEntry={log.node}
                        />
                    );
                })}
            </ul>
        </section>
    );
};

export default ConsolePanel;
