import { TimelineProvider } from './hooks/timeline';
import { TimelineControls } from './components/TimelineControls';
import { NetworkPanel } from './components/DevTools/Network';
import { DomPreview } from './components/DomPreview';
import { Steps } from './components/Steps';
import * as Expandable from './components/Expandable';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.scss';
import results from './data/results';

function App() {
    // TODO: We likely want to add some "lead" and "lag" time to these dates,
    // so that events that occur at or near the very beginning or end of the
    // timeline can be viewed and scrubbed to easily.

    const startTime = new Date(Date.parse(results.startedTestsAt));
    const endTime = new Date(Date.parse(results.endedTestsAt));

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
