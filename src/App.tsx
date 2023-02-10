import React from 'react';
import { TimelineProvider } from './hooks/timeline';
import { TimelineControls } from './components/TimelineControls';
import { NetworkPanel, ConsolePanel } from './components/DevTools';
import { DomPreview } from './components/DomPreview';
import { Steps } from './components/Steps';
import * as Expandable from './components/Expandable';
import { RelayEnvironment } from './gql/RelayEnvironment';
import CypressError from './components/CypressError';
import Summary from './components/Summary';

import styles from './App.module.scss';
import steps from './data/steps';
import results from './data/results';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
    // TODO: We likely want to add some "lead" and "lag" time to these dates,
    // so that events that occur at or near the very beginning or end of the
    // timeline can be viewed and scrubbed to easily.

    steps.sort((step1, step2) =>
        step1.options.wallClockStartedAt.getTime() - step2.options.wallClockStartedAt.getTime());

    const startTime = steps.at(0)!.options.wallClockStartedAt; // eslint-disable-line @typescript-eslint/no-non-null-assertion
    const endTime = new Date(Date.parse(results.endedTestsAt));

    return (
        <div className={styles.app}>
            <RelayEnvironment>
                <TimelineProvider
                    startTime={startTime}
                    endTime={endTime}
                >
                    <Summary />
                    <TimelineControls />
                    <Expandable.Parent className={styles.expandableParent}>
                        <Expandable.Child className={styles.expandableSteps} notExpandable={true}>
                            <Steps className={styles.steps} />
                        </Expandable.Child>
                        <Expandable.Child className={styles.expandableCypressError} notExpandable={true}>
                            <CypressError />
                        </Expandable.Child>
                        <Expandable.Child className={styles.expandableDom}>
                            <DomPreview />
                        </Expandable.Child>
                        <Expandable.Child className={styles.expandableConsole}>
                            <ConsolePanel />
                        </Expandable.Child>
                        <Expandable.Child className={styles.expandableNetwork}>
                            <NetworkPanel />
                        </Expandable.Child>
                    </Expandable.Parent>
                </TimelineProvider>
            </RelayEnvironment>
        </div>
    );
};

export default App;
