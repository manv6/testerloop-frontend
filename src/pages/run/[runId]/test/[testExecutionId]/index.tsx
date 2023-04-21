import React, { useMemo } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { TimelineProvider } from 'src/hooks/timeline';
import { TimelineControls } from 'src/components/TimelineControls';
import { NetworkPanel, ConsolePanel } from 'src/components/DevTools';
import { Steps } from 'src/components/Steps';
import * as Expandable from 'src/components/Expandable';
import FrameworkError from 'src/components/FrameworkError';
import Summary from 'src/components/Summary';
import styles from 'src/App.module.scss';
import results from 'src/data/results';
import * as formatters from 'src/utils/formatters';
import stepsData from 'src/data/steps';
import { useLazyLoadQuery } from 'react-relay';
import DomPreview from 'src/components/DomPreview';
import { TestExecutionIdPageQuery } from './__generated__/TestExecutionIdPageQuery.graphql';

//base-64 string for 'TestExecution/d7a674e5-9726-4c62-924b-0bb846e9f213/00343af4-acf3-473b-9975-0c2bd26e47o1'
const testExecutionId =
    'VGVzdEV4ZWN1dGlvbi9kN2E2NzRlNS05NzI2LTRjNjItOTI0Yi0wYmI4NDZlOWYyMTMvMDAzNDNhZjQtYWNmMy00NzNiLTk5NzUtMGMyYmQyNmU0N28x';

export default function TestExecutionPage() {
    const data = { steps: stepsData } as any; // eslint-disable-line
    const steps = useMemo(
        () => formatters.formatSteps(data.steps),
        [data.steps]
    );

    const queryData = useLazyLoadQuery<TestExecutionIdPageQuery>(
        graphql`
            query TestExecutionIdPageQuery($testExecutionId: ID!) {
                testExecution(id: $testExecutionId) {
                    ...ConsolePanelFragment
                    ...NetworkPanelFragment
                    ...SummaryFragment
                    ...StepsFragment
                    ...DomPreviewFragment
                    ...SeekerFragment
                }
            }
        `,
        {
            testExecutionId,
        }
    );

    // TODO: We likely want to add some "lead" and "lag" time to these dates,
    // so that events that occur at or near the very beginning or end of the
    // timeline can be viewed and scrubbed to easily.
    const startTime = steps.at(0)!.options.wallClockStartedAt; // eslint-disable-line @typescript-eslint/no-non-null-assertion
    const endTime = new Date(Date.parse(results.endedTestsAt));

    return (
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
    );
}
