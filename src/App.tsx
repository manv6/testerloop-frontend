import { TimelineProvider } from './hooks/timeline';
import { TimelineControls } from './components/TimelineControls';
import { NetworkPanel } from './components/DevTools/Network';
import { DomPreview } from './components/DomPreview';
import { Steps } from './components/Steps'
import * as Expandable from './components/Expandable';
import styles from './App.module.scss';
import steps from './data/steps';

function App() {
    // TODO: We likely want to add some "lead" and "lag" time to these dates, 
    // so that events that occur at or near the very beginning or end of the 
    // timeline can be viewed and scrubbed to easily.
    const startTime = steps.at(0)!.options.wallClockStartedAt;
    const endTime = steps.at(-1)!.options.wallClockStartedAt;
    
    // TODO: Use these times instead, once the start / end dates match the data
    // const startTime = new Date(Date.parse(run.startedTestsAt));
    // const endTime = new Date(Date.parse(run.endedTestsAt));

    return (
        <div className={styles.app}>
            <TimelineProvider
                startTime={startTime}
                endTime={endTime}
            >
            <div>
                <div>Summary Placeholder</div>
                <div style={{ height: '100px', width: '100%', background: 'lightgrey' }}></div>
            </div>
            <TimelineControls />
            <Expandable.Parent className={styles['expandable-parent']}>
                <Expandable.Child className={styles['expandable-steps']} notExpandable={true}>
                    <Steps className={styles.steps} />
                </Expandable.Child>            
                <Expandable.Child className={styles['expandable-dom']}>
                    <DomPreview />
                </Expandable.Child>
                <Expandable.Child className={styles['expandable-console']}>
                    <div>Console</div>
                </Expandable.Child>
                <Expandable.Child className={styles['expandable-network']}>
                    <NetworkPanel />
                </Expandable.Child>
            </Expandable.Parent>
            </TimelineProvider>
        </div>
    );
}

export default App;
