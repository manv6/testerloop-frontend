import React from 'react';
import styles from './App.module.scss';
import { styled } from '@mui/material/styles';
import TestExecutionPage from './pages/run/[runId]/test/[testExecutionId]';

const StyledApp = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.base[500],
}));

const App: React.FC = () => {
    return (
        <StyledApp className={styles.app}>
            <TestExecutionPage />
        </StyledApp>
    );
};

export default App;
