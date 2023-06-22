import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
    useTransition,
} from 'react';
import { useRefetchableFragment } from 'react-relay';
import { useTimeline } from 'src/hooks/timeline';
import { LogEntry, LogFilters } from './components';
import styles from './ConsolePanel.module.scss';
import graphql from 'babel-plugin-relay/macro';
import { useDebounce } from 'use-debounce';
import * as Expandable from 'src/components/Expandable';

import type { ConsolePanelFragment$key } from './__generated__/ConsolePanelFragment.graphql';
import { isOfType } from 'src/utils/isOfType';
import { fillObjFromType } from 'src/utils/fillObjFromType';
import { HeaderWithFilter } from 'src/components/common';
import useScrollToChild from 'src/hooks/scrollTo/useScrollToChild';

export enum LogLevel {
    LOG = 'LOG',
    WARN = 'WARN',
    ERROR = 'ERROR',
}

type Props = {
    fragmentKey: ConsolePanelFragment$key;
};

const ConsolePanel: React.FC<Props> = ({ fragmentKey }) => {
    const [data, refetch] = useRefetchableFragment(
        graphql`
            fragment ConsolePanelFragment on TestExecution
            @argumentDefinitions(
                logSearch: { type: "String", defaultValue: null }
                logLevels: { type: "[ConsoleLogLevel!]", defaultValue: null }
            )
            @refetchable(queryName: "ConsolePanelFragmentRefetchQuery") {
                id
                searchedEvents: events(
                    filter: {
                        type: CONSOLE
                        consoleFilter: {
                            logSearch: $logSearch
                            logLevel: $logLevels
                        }
                    }
                ) {
                    edges {
                        __typename
                        node {
                            __typename
                            ... on ConsoleLogEvent {
                                __typename
                                id
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

    const [logSearch, setLogSearch] = React.useState<string | null>(null);
    const debouncedResult = useDebounce(logSearch, 200);
    const debouncedTerm = debouncedResult[0];

    const [isPending, startTransition] = useTransition();

    const [showLogFilters, setShowLogFilters] = useState(true);

    const defaultActiveLogLevels = fillObjFromType(LogLevel, true);
    const [activeLogLevels, setActiveLogLevels] = React.useState<Record<
        LogLevel,
        boolean
    > | null>(null);

    useEffect(() => {
        if (debouncedTerm === null && activeLogLevels === null) {
            return;
        }
        const logLevels = activeLogLevels
            ? Object.keys(activeLogLevels).filter(
                  (key: string) => activeLogLevels[key as LogLevel]
              )
            : null;
        startTransition(() => {
            refetch({ logSearch: debouncedTerm, logLevels });
        });
    }, [activeLogLevels, debouncedTerm, refetch]);

    const toggleActiveLogLevel = useCallback(
        (level: LogLevel) => {
            const activeLogs = activeLogLevels ?? defaultActiveLogLevels;
            const newActiveLogs = {
                ...activeLogs,
                [level]: !activeLogs[level],
            };
            setActiveLogLevels(newActiveLogs);
        },
        [activeLogLevels, defaultActiveLogLevels]
    );

    const logs = useMemo(
        () =>
            data.searchedEvents.edges
                .map(({ node }) => node)
                .filter(isOfType('ConsoleLogEvent'))
                .map(({ at, ...event }) => ({
                    at: new Date(at),
                    ...event,
                })),
        [data.searchedEvents.edges]
    );

    const getMostRecentLogIdx = useCallback(
        (timestamp: number): number => {
            const nextStepIdx = logs.findIndex(
                (node) => node.at.getTime() > timestamp
            );
            return (nextStepIdx === -1 ? logs.length : nextStepIdx) - 1;
        },
        [logs]
    );

    const currentTimestamp = currentTime.getTime();
    const currentLogIdx = getMostRecentLogIdx(currentTimestamp);

    const hoverTimestamp = hoverTime?.getTime();
    const hoveredLogIdx = hoverTimestamp
        ? getMostRecentLogIdx(hoverTimestamp)
        : null;

    const header = useMemo(
        () => (
            <HeaderWithFilter
                isFilterOn={showLogFilters}
                title="Console"
                toggleFilter={() => setShowLogFilters(!showLogFilters)}
                dataCyPrefix="console-panel"
            />
        ),
        [showLogFilters]
    );

    const listRef = useRef<HTMLUListElement>(null);
    const logEntryRef = useRef<HTMLLIElement>(null);

    useScrollToChild({
        childRef: logEntryRef,
        containerRef: listRef,
        dependencies: [currentLogIdx],
    });

    return (
        <Expandable.Child
            className={styles.expandableConsole}
            header={header}
            data-cy="console-panel"
        >
            <section className={styles.consolePanel}>
                {showLogFilters && (
                    <LogFilters
                        logFilters={data}
                        filterTerm={logSearch ?? ''}
                        setFilterTerm={setLogSearch}
                        activeLogLevels={
                            activeLogLevels ?? defaultActiveLogLevels
                        }
                        toggleActiveLogLevel={toggleActiveLogLevel}
                        data-cy="console-panel-log-filters"
                    />
                )}
                {isPending ? (
                    <div>Loading...</div>
                ) : (
                    <ul ref={listRef} className={styles.logsList}>
                        {logs.map((node, idx) => {
                            // TODO: Timestamp is not unique, provide an id or a way to make it unique.
                            return (
                                <LogEntry
                                    key={node.id}
                                    ref={
                                        currentLogIdx === idx
                                            ? logEntryRef
                                            : null
                                    }
                                    isLogSelected={currentLogIdx === idx}
                                    isLogHovered={hoveredLogIdx === idx}
                                    logEntry={node}
                                    data-cy={`log-entry-${idx}`}
                                />
                            );
                        })}
                    </ul>
                )}
            </section>
        </Expandable.Child>
    );
};

export default ConsolePanel;
