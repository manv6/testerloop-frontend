import { TimelineProvider } from './hooks/timeline';
import { TimelineControls } from './components/TimelineControls';
import { NetworkPanel } from './components/DevTools/Network';
import { DomPreview } from './components/DomPreview';
import { Steps } from './components/Steps'
import * as Expandable from './components/Expandable';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <TimelineProvider
        /**
         * Fake timestamps - TODO: Take min/max time of the run to use as the timeline endpoints
         */
        startTime={new Date(Date.parse("2022-01-01T00:00:00Z"))}
        endTime={new Date(Date.parse("2022-01-01T00:09:00Z"))}
      >
        <div>
            <div>Summary Placeholder</div>
            <div style={{ height: '100px', width: '100%', background: 'lightgrey' }}></div>
        </div>
        <TimelineControls />
        <Expandable.Parent className={styles['expandable-parent']}>
            <Expandable.Child className={styles['expandable-steps']} notExpandable={true}>
                {/* <Steps className={styles.steps} /> */}
                <div>Steps</div>
            </Expandable.Child>            
            <Expandable.Child className={styles['expandable-dom']}>
                {/* <DomPreview /> */}
                <div>Dom</div>
            </Expandable.Child>
            <Expandable.Child className={styles['expandable-console']}>
                <div>Console</div>
            </Expandable.Child>
            <Expandable.Child className={styles['expandable-network']}>
                {/* <NetworkPanel /> */}
                <div>Network</div>
            </Expandable.Child>
        </Expandable.Parent>
      </TimelineProvider>
    </div>
  );
}

export default App;
