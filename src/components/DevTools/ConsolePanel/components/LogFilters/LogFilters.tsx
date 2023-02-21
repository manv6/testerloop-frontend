import React from 'react';
import cx from 'classnames';
import { ExclamationTriangleFill, ExclamationOctagonFill, TextLeft } from 'react-bootstrap-icons';
import styles from './LogFilters.module.scss';
import { LogLevel } from '../../ConsolePanel';
import { TextInput } from 'src/components/common/TextInput';
import LogFiltersFragment from './LogFiltersFragment';
import { useFragment } from 'react-relay';
import { LogFiltersFragment$key } from './__generated__/LogFiltersFragment.graphql';

interface Props {
    logFilters: LogFiltersFragment$key | null;
    filterTerm: string;
    setFilterTerm: (logSearch: string) => void;
    activeLogLevels: Record<LogLevel, boolean>;
    toggleActiveLogLevel: (level: LogLevel) => void;
}

const LogFilters: React.FC<Props> = ({
    logFilters,
    filterTerm,
    setFilterTerm,
    activeLogLevels,
    toggleActiveLogLevel
}) => {
    const data = useFragment(
        LogFiltersFragment,
        logFilters
    );

    return (
        <aside className={styles.logsFilters}>
            <div className={styles.toggleButtons}>
                <button
                    onClick={() => toggleActiveLogLevel(LogLevel.LOG)}
                    className={cx(styles.toggleLogLevelButton, { [styles.logLevelActive]: activeLogLevels.LOG })}
                >
                    <TextLeft stroke="blue" strokeWidth={0.5} />
                    <small className={styles.logLevelCount}>{data?.logs.totalCount || 0}</small>
                </button>

                <button
                    onClick={() => toggleActiveLogLevel(LogLevel.WARN)}
                    className={cx(styles.toggleLogLevelButton, { [styles.logLevelActive]: activeLogLevels.WARN })}
                >
                    <ExclamationTriangleFill fill="yellow" stroke="black" strokeWidth={0.5} />
                    <small className={styles.logLevelCount}>{data?.warnings.totalCount || 0}</small>
                </button>

                <button
                    onClick={() => toggleActiveLogLevel(LogLevel.ERROR)}
                    className={cx(styles.toggleLogLevelButton, { [styles.logLevelActive]: activeLogLevels.ERROR })}
                >
                    <ExclamationOctagonFill fill='red' stroke="black" strokeWidth={0.5} />
                    <small className={styles.logLevelCount}>{data?.errors.totalCount || 0}</small>
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
