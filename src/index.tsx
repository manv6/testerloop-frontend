import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import JobStatusDashboard from './components/JobStatusDashboard/JobStatusDashboard';
import reportWebVitals from './reportWebVitals';
import { RelayEnvironment } from './gql/RelayEnvironment';
import './index.scss';
import ThemeProvider from 'src/hooks/theme/Provider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RelayEnvironment>
            <React.Suspense fallback={<div>App loading...</div>}>
                <ThemeProvider>
                    <JobStatusDashboard />
                    <App />
                </ThemeProvider>
            </React.Suspense>
        </RelayEnvironment>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
