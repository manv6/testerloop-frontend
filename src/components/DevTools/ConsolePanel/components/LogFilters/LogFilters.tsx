import React from 'react';
import cx from 'classnames';
import { ExclamationTriangleFill, ExclamationOctagonFill, TextLeft } from 'react-bootstrap-icons';
import { LogLevel } from 'src/data/logs';
import styles from './LogFilters.module.scss';
import { TextInput } from 'src/components/common/TextInput';

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
                onClick={() => toggleActiveLogLevel(LogLevel.LOG)}
                className={cx(styles.toggleLogLevelButton, { [styles.logLevelActive]: activeLogLevels.log })}
            >
                <TextLeft stroke="blue" strokeWidth={0.5} />
                <small className={styles.logLevelCount}>{logStats.log}</small>
            </button>

            <button
                onClick={() => toggleActiveLogLevel(LogLevel.WARNING)}
                className={cx(styles.toggleLogLevelButton, { [styles.logLevelActive]: activeLogLevels.warning })}
            >
                <ExclamationTriangleFill fill="yellow" stroke="black" strokeWidth={0.5} />
                <small className={styles.logLevelCount}>{logStats.warning}</small>
            </button>

            <button
                onClick={() => toggleActiveLogLevel(LogLevel.ERROR)}
                className={cx(styles.toggleLogLevelButton, { [styles.logLevelActive]: activeLogLevels.error })}
            >
                <ExclamationOctagonFill fill='red' stroke="black" strokeWidth={0.5} />
                <small className={styles.logLevelCount}>{logStats.error}</small>
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
);

export default LogFilters;
