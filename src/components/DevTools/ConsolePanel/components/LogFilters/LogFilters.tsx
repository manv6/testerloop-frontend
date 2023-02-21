import React, { useEffect } from 'react';
import cx from 'classnames';
import { ExclamationTriangleFill, ExclamationOctagonFill, TextLeft } from 'react-bootstrap-icons';
import styles from './LogFilters.module.scss';
import { LogLevel } from '../../ConsolePanel';
import { TextInput } from 'src/components/common/TextInput';
import LogFiltersFragment from './LogFiltersFragment';
import { useRefetchableFragment } from 'react-relay';
import { LogFiltersFragment$key } from './__generated__/LogFiltersFragment.graphql';

interface Props {
    logFilters: LogFiltersFragment$key | null;
    filterTerm: string;
    setFilterTerm: (logSearch: string) => void;
    activeLogLevels: Record<LogLevel, boolean>;
    toggleActiveLogLevel: (level: LogLevel) => void;
    debouncedTerm: string;
}

const LogFilters: React.FC<Props> = ({
    logFilters,
    filterTerm,
    setFilterTerm,
    activeLogLevels,
    debouncedTerm,
    toggleActiveLogLevel
}) => {
    const [data, refetch] = useRefetchableFragment(
        LogFiltersFragment,
        logFilters
    );

    useEffect(() => {
        refetch({ logSearch: debouncedTerm });
    }, [debouncedTerm, refetch]);


    const logStats = React.useMemo(
        () => ({
            LOG: data?.logs.totalCount || 0,
            WARN: data?.warnings.totalCount || 0,
            ERROR: data?.errors.totalCount || 0,
        }),
        [
            data?.errors.totalCount,
            data?.logs.totalCount,
            data?.warnings.totalCount,
        ]
    );

    return (
        <aside className={styles.logsFilters}>
            <div className={styles.toggleButtons}>
                <button
                    onClick={() => toggleActiveLogLevel(LogLevel.LOG)}
                    className={cx(styles.toggleLogLevelButton, { [styles.logLevelActive]: activeLogLevels.LOG })}
                >
                    <TextLeft stroke="blue" strokeWidth={0.5} />
                    <small className={styles.logLevelCount}>{logStats.LOG}</small>
                </button>

                <button
                    onClick={() => toggleActiveLogLevel(LogLevel.WARN)}
                    className={cx(styles.toggleLogLevelButton, { [styles.logLevelActive]: activeLogLevels.WARN })}
                >
                    <ExclamationTriangleFill fill="yellow" stroke="black" strokeWidth={0.5} />
                    <small className={styles.logLevelCount}>{logStats.WARN}</small>
                </button>

                <button
                    onClick={() => toggleActiveLogLevel(LogLevel.ERROR)}
                    className={cx(styles.toggleLogLevelButton, { [styles.logLevelActive]: activeLogLevels.ERROR })}
                >
                    <ExclamationOctagonFill fill='red' stroke="black" strokeWidth={0.5} />
                    <small className={styles.logLevelCount}>{logStats.ERROR}</small>
                </button>
            </div>

            <TextInput
                type="text"
                value={filterTerm}
                placeholder="Filter"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFilterTerm(e.target.value);
                }}
            />
        </aside>
    );};

export default LogFilters;
