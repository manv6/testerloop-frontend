import React, { useMemo } from 'react';
import { TimelineProvider } from './hooks/timeline';
import { TimelineControls } from './components/TimelineControls';
import { NetworkPanel, ConsolePanel } from './components/DevTools';
import { Steps } from './components/Steps';
import * as Expandable from './components/Expandable';
import FrameworkError from './components/FrameworkError';
import Summary from './components/Summary';
import styles from './App.module.scss';
import results from './data/results';
import * as formatters from './utils/formatters';
import stepsData from 'src/data/steps';
import { useLazyLoadQuery } from 'react-relay';
import AppQuery from './AppQuery';
import { AppQuery as AppQueryType } from './__generated__/AppQuery.graphql';
import { styled } from '@mui/material/styles';
import DomPreview from './components/DomPreview';

const StyledApp = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.base[500],
}));

//base-64 string for 'TestExecution/d7a674e5-9726-4c62-924b-0bb846e9f213/00343af4-acf3-473b-9975-0c2bd26e47o1'
const testExecutionId =
    'VGVzdEV4ZWN1dGlvbi9kN2E2NzRlNS05NzI2LTRjNjItOTI0Yi0wYmI4NDZlOWYyMTMvMDAzNDNhZjQtYWNmMy00NzNiLTk5NzUtMGMyYmQyNmU0N28x';

const App: React.FC = () => {
    const data = { steps: stepsData } as any; // eslint-disable-line
    const steps = useMemo(
        () => formatters.formatSteps(data.steps),
        [data.steps]
    );

    const queryData = useLazyLoadQuery<AppQueryType>(AppQuery, {
        testExecutionId,
    });

    // TODO: We likely want to add some "lead" and "lag" time to these dates,
    // so that events that occur at or near the very beginning or end of the
    // timeline can be viewed and scrubbed to easily.
    const startTime = steps.at(0)!.options.wallClockStartedAt; // eslint-disable-line @typescript-eslint/no-non-null-assertion
    const endTime = new Date(Date.parse(results.endedTestsAt));

    return (
        <StyledApp className={styles.app}>
            <TimelineProvider startTime={startTime} endTime={endTime}>
                {/* eslint-disable @typescript-eslint/no-non-null-assertion */}
                <Summary fragmentKey={queryData.testExecution!} />
                <div className={styles.appContent}>
                    <FrameworkError />
                    <TimelineControls fragmentKey={queryData.testExecution!} />
                    <Expandable.Parent className={styles.expandableParent}>
                        <Steps
                            className={styles.steps}
                            fragmentKey={queryData.testExecution!}
                        />
                        <DomPreview fragmentKey={queryData.testExecution!} />
                        <NetworkPanel fragmentKey={queryData.testExecution!} />
                        <ConsolePanel fragmentKey={queryData.testExecution!} />
                    </Expandable.Parent>
                </div>
            </TimelineProvider>
        </StyledApp>
    );
};

export default App;
