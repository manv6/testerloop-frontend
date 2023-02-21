import React, { useCallback, useEffect } from 'react';
import { useRefetchableFragment } from 'react-relay';
import { useTimeline } from 'src/hooks/timeline';
import { LogEntry, LogFilters } from './components';
import styles from './ConsolePanel.module.scss';
import graphql from 'babel-plugin-relay/macro';
import { useDebounce } from 'use-debounce';

import type { ConsolePanelFragment$key } from './__generated__/ConsolePanelFragment.graphql';

export enum LogLevel {
    LOG = 'LOG',
    WARN = 'WARN',
    ERROR = 'ERROR',
}

type Props = {
    fragmentKey: ConsolePanelFragment$key | null;
};

const ConsolePanel: React.FC<Props> = ({ fragmentKey }) => {
    const [data, refetch] = useRefetchableFragment(
        graphql`
            fragment ConsolePanelFragment on TestExecution
            @argumentDefinitions(
                logSearch: { type: "String", defaultValue: null }
                logLevels: { type: "[ConsoleLogLevel!]", defaultValue: null}
            )
            @refetchable(queryName: "ConsolePanelFragmentRefetchQuery") {
                id
                searchedEvents: events(
                    filter: {
                        type: CONSOLE
                        consoleFilter: { logSearch: $logSearch, logLevel: $logLevels }
                    }
                ) {
                    edges {
                        __typename
                        node {
                            ... on ConsoleLogEvent {
                                at
                                ...LogEntryFragment
                            }
                        }
                    }
                }
                ...LogFiltersFragment @arguments(logSearch: $logSearch)
            }
        `,
        fragmentKey
    );

    const { currentTime, hoverTime } = useTimeline();

    const [logSearch, setLogSearch] = React.useState<string>('');
    const debouncedResult = useDebounce(logSearch, 200);
    const debouncedTerm = debouncedResult[0];

    useEffect(() => {
        refetch({ logSearch: debouncedTerm });
    }, [debouncedTerm, refetch]);

    const [activeLogLevels, setActiveLogLevels] = React.useState<
        Record<LogLevel, boolean>
    >(
        Object.values(LogLevel).reduce(
            (obj, lvl) => ({
                ...obj,
                [lvl]: true,
            }),
            {} as Record<LogLevel, boolean>
        )
    );

    const toggleActiveLogLevel = (level: LogLevel) => {
        const newActiveLogs = {
            ...activeLogLevels,
            [level]: !activeLogLevels[level],
        };
        setActiveLogLevels(newActiveLogs);
        const logLevels = Object.keys(newActiveLogs).filter(
            (key: string) => newActiveLogs[key as LogLevel]);
        refetch({ logSearch: debouncedTerm, logLevels });
    };

    const getMostRecentLogIdx = useCallback(
        (timestamp: number): number => {
            const logs = data?.searchedEvents?.edges;
            if (!logs) {
                return -1;
            }
            const nextStepIdx = logs.findIndex(
                ({ node }) => new Date(node.at).getTime() > timestamp
            );
            return (nextStepIdx === -1 ? logs.length : nextStepIdx) - 1;
        },
        [data?.searchedEvents?.edges]
    );

    const currentTimestamp = currentTime.getTime();
    const currentLogIdx = getMostRecentLogIdx(currentTimestamp);

    const hoverTimestamp = hoverTime?.getTime();
    const hoveredLogIdx = hoverTimestamp
        ? getMostRecentLogIdx(hoverTimestamp)
        : null;

    return (
        <section className={styles.consolePanel}>
            <LogFilters
                logFilters={data}
                filterTerm={logSearch}
                setFilterTerm={setLogSearch}
                activeLogLevels={activeLogLevels}
                toggleActiveLogLevel={toggleActiveLogLevel}
            />

            <ul className={styles.logsList}>
                {(data?.searchedEvents?.edges || [])?.map((log, idx) => {
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
