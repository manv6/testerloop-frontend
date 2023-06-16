import React from 'react';
import styles from './App.module.scss';
import { styled } from '@mui/material/styles';
import { testExecutionPageQuery } from './pages/run/[runId]/test/[testExecutionId]/TestExecutionPageQuery';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { loadQuery } from 'react-relay';
import { environment } from './gql/RelayEnvironment';
import { testRunPageQuery } from './pages/run/[runId]/TestRunPageQuery';
import { indexPageQuery } from './pages/IndexPageQuery';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';

const StyledApp = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.base[500],
}));

const router = createBrowserRouter([
    {
        path: '/',
        loader: ({ request: { signal } }) => {
            const queryReference = loadQuery(
                environment,
                indexPageQuery,
                {},
                {
                    networkCacheConfig: {
                        metadata: {
                            signal,
                        },
                    },
                }
            );

            return queryReference;
        },
        lazy: async () => {
            const { default: IndexPage } = await import('./pages/index');
            return {
                element: <IndexPage />,
            };
        },
        errorElement: <ErrorFallback />,
    },
    {
        path: '/run/:runId',
        loader: ({ params, request: { signal } }) => {
            const { runId } = params;
            const id = window.btoa(`TestRun/${runId}`);

            const queryReference = loadQuery(
                environment,
                testRunPageQuery,
                {
                    id,
                },
                {
                    networkCacheConfig: {
                        metadata: {
                            signal,
                        },
                    },
                }
            );

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
        errorElement: <ErrorFallback />,
    },
    {
        path: '/run/:runId/test/:testExecutionId',
        loader: ({ params, request: { signal } }) => {
            const { runId, testExecutionId } = params;
            const id = window.btoa(`TestExecution/${runId}/${testExecutionId}`);

            const queryReference = loadQuery(
                environment,
                testExecutionPageQuery,
                {
                    id,
                },
                {
                    networkCacheConfig: {
                        metadata: {
                            signal,
                        },
                    },
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
        errorElement: <ErrorFallback />,
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
