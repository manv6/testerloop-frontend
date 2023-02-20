import React, { useMemo } from 'react';
import { TimelineProvider } from './hooks/timeline';
import { TimelineControls } from './components/TimelineControls';
import { NetworkPanel, ConsolePanel } from './components/DevTools';
import { DomPreview } from './components/DomPreview';
import { Steps } from './components/Steps';
import * as Expandable from './components/Expandable';
import CypressError from './components/CypressError';
import Summary from './components/Summary';
import styles from './App.module.scss';
import results from './data/results';
import * as formatters from './utils/formatters';
import stepsData from 'src/data/steps';
import { useLazyLoadQuery } from 'react-relay';
import AppQuery from './AppQuery';
import { AppQuery as AppQueryType } from './__generated__/AppQuery.graphql';

const SuspensePanel: React.FC<React.PropsWithChildren> = ({ children }) => (
    <React.Suspense fallback={<div>Loading</div>}>
        {children}
    </React.Suspense>
);

const App: React.FC = () => {
    const data = { steps: stepsData } as any; // eslint-disable-line
    const steps = useMemo(() =>
        formatters.formatSteps(data.steps), [data.steps]);

    const queryData = useLazyLoadQuery<AppQueryType>(
        AppQuery,
        {
            testExecutionId: 'VGVzdEV4ZWN1dGlvbi8xMjM0', //base-64 string for 'TestExecution/1234'
        },
    );

    // TODO: We likely want to add some "lead" and "lag" time to these dates,
    // so that events that occur at or near the very beginning or end of the
    // timeline can be viewed and scrubbed to easily.
    const startTime = steps.at(0)!.options.wallClockStartedAt; // eslint-disable-line @typescript-eslint/no-non-null-assertion
    const endTime = new Date(Date.parse(results.endedTestsAt));

    return (
        <div className={styles.app}>
            <TimelineProvider
                startTime={startTime}
                endTime={endTime}
            >
                <SuspensePanel>
                    <Summary fragmentKey={queryData.testExecution} />
                </SuspensePanel>
                <SuspensePanel>
                    <TimelineControls fragmentKey={data} />
                </SuspensePanel>
                <Expandable.Parent className={styles.expandableParent}>
                    <SuspensePanel>
                        <Expandable.Child className={styles.expandableSteps} notExpandable={true}>
                            <Steps className={styles.steps} fragmentKey={data} />
                        </Expandable.Child>
                    </SuspensePanel>
                    <SuspensePanel>
                        <Expandable.Child className={styles.expandableCypressError} notExpandable={true}>
                            <CypressError />
                        </Expandable.Child>
                    </SuspensePanel>
                    <SuspensePanel>
                        <Expandable.Child className={styles.expandableDom}>
                            <DomPreview />
                        </Expandable.Child>
                    </SuspensePanel>
                    <SuspensePanel>
                        <Expandable.Child className={styles.expandableConsole}>
                            <ConsolePanel fragmentKey={queryData.testExecution}/>
                        </Expandable.Child>
                    </SuspensePanel>
                    <SuspensePanel>
                        <Expandable.Child className={styles.expandableNetwork}>
                            <NetworkPanel fragmentKey={data} />
                        </Expandable.Child>
                    </SuspensePanel>
                </Expandable.Parent>
            </TimelineProvider>
        </div>
    );
};

export default App;
