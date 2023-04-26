import React from 'react';
import styles from './App.module.scss';
import { styled } from '@mui/material/styles';
import { testExecutionPageQuery } from './pages/run/[runId]/test/[testExecutionId]/TestExecutionPageQuery';
import {
    RouterProvider,
    createBrowserRouter,
    redirect,
} from 'react-router-dom';
import { loadQuery } from 'react-relay';
import { environment } from './gql/RelayEnvironment';
import { testRunPageQuery } from './pages/run/[runId]/TestRunPageQuery';

const StyledApp = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.base[500],
}));

const router = createBrowserRouter([
    {
        path: '/',
        loader: () => {
            return redirect(
                '/run/d7a674e5-9726-4c62-924b-0bb846e9f213/test/00343af4-acf3-473b-9975-0c2bd26e47o1'
            );
        },
    },
    {
        path: '/run/:runId',
        loader: ({ params }) => {
            const { runId } = params;
            const id = window.btoa(`TestRun/${runId}`);

            const queryReference = loadQuery(environment, testRunPageQuery, {
                id,
            });

            return queryReference;
        },
        lazy: async () => {
            const { default: TestRunPage } = await import(
                './pages/run/[runId]/index'
            );
            return {
                element: <TestRunPage />,
            };
        },
    },
    {
        path: '/run/:runId/test/:testExecutionId',
        loader: ({ params }) => {
            const { runId, testExecutionId } = params;
            const id = window.btoa(`TestExecution/${runId}/${testExecutionId}`);

            const queryReference = loadQuery(
                environment,
                testExecutionPageQuery,
                {
                    id,
                }
            );

            return queryReference;
        },
        lazy: async () => {
            const { default: TestExecutionPage } = await import(
                './pages/run/[runId]/test/[testExecutionId]/index'
            );
            return {
                element: <TestExecutionPage />,
            };
        },
    },
]);

const App: React.FC = () => {
    return (
        <StyledApp className={styles.app}>
            <RouterProvider router={router} />
        </StyledApp>
    );
};

export default App;
