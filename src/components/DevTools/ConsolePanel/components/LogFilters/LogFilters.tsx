import React from 'react';
import cx from 'classnames';
import { ExclamationTriangleFill, ExclamationOctagonFill, TextLeft } from 'react-bootstrap-icons';
import styles from './LogFilters.module.scss';
import { LogLevel } from '../../ConsolePanel';
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
);

export default LogFilters;
