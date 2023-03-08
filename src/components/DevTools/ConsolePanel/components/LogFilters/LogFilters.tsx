import React from 'react';
import styles from './LogFilters.module.scss';
import { LogLevel } from '../../ConsolePanel';
import { TextInput } from 'src/components/common/TextInput';
import LogFiltersFragment from './LogFiltersFragment';
import { useFragment } from 'react-relay';
import { LogFiltersFragment$key } from './__generated__/LogFiltersFragment.graphql';
import { Button } from 'src/components/common';
import { LogErrorIcon, LogWarnIcon, OtherLogIcon } from '..';
import { styled } from '@mui/material';

interface Props {
    logFilters: LogFiltersFragment$key | null;
    filterTerm: string;
    setFilterTerm: (logSearch: string) => void;
    activeLogLevels: Record<LogLevel, boolean>;
    toggleActiveLogLevel: (level: LogLevel) => void;
}

interface StyledButtonProps {
    active: boolean;
}

const StyledButton = styled(Button)<StyledButtonProps>(({ theme, active }) => ({
    ...(active && {
        backgroundColor: theme.palette.base[300],
        borderColor: theme.palette.base[200],
    }),
}));

const LogFilters: React.FC<Props> = ({
    logFilters,
    filterTerm,
    setFilterTerm,
    activeLogLevels,
    toggleActiveLogLevel,
}) => {
    const data = useFragment(LogFiltersFragment, logFilters);

    return (
        <aside className={styles.logsFilters}>
            <TextInput
                type="text"
                value={filterTerm}
                placeholder="Filter events"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFilterTerm(e.target.value);
                }}
            />
            <div className={styles.toggleButtons}>
                <StyledButton
                    onClick={() => toggleActiveLogLevel(LogLevel.ERROR)}
                    active={activeLogLevels.ERROR}
                    className={styles.toggleLogLevelButton}
                >
                    <LogErrorIcon />
                    <small className={styles.logLevelCount}>
                        {data?.errors.totalCount || 0} Errors
                    </small>
                </StyledButton>

                <StyledButton
                    onClick={() => toggleActiveLogLevel(LogLevel.WARN)}
                    active={activeLogLevels.WARN}
                    className={styles.toggleLogLevelButton}
                >
                    <LogWarnIcon />
                    <small className={styles.logLevelCount}>
                        {data?.warnings.totalCount || 0} Warnings
                    </small>
                </StyledButton>

                <StyledButton
                    onClick={() => toggleActiveLogLevel(LogLevel.LOG)}
                    active={activeLogLevels.LOG}
                    className={styles.toggleLogLevelButton}
                >
                    <OtherLogIcon />
                    <small className={styles.logLevelCount}>
                        {data?.logs.totalCount || 0} Other
                    </small>
                </StyledButton>
            </div>
        </aside>
    );
};

export default LogFilters;
