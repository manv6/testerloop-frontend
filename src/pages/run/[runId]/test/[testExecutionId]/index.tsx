import React, { useMemo } from 'react';
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
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import DomPreview from 'src/components/DomPreview';
import { useLoaderData } from 'react-router-dom';
import {
    testExecutionPageQuery,
    TestExecutionPageQuery,
} from './TestExecutionPageQuery';

export default function TestExecutionPage() {
    const data = { steps: stepsData } as any; // eslint-disable-line
    const steps = useMemo(
        () => formatters.formatSteps(data.steps),
        [data.steps]
    );

    // NOTE: Type is only guaranteed outside of the type system by configuration in the router setup.
    const queryFetchKey =
        useLoaderData() as PreloadedQuery<TestExecutionPageQuery>;

    const { testExecution } = usePreloadedQuery(
        testExecutionPageQuery,
        queryFetchKey
    );
    if (!testExecution) {
        return <>404</>;
    }

    // TODO: We likely want to add some "lead" and "lag" time to these dates,
    // so that events that occur at or near the very beginning or end of the
    // timeline can be viewed and scrubbed to easily.
    const startTime = steps.at(0)!.options.wallClockStartedAt; // eslint-disable-line @typescript-eslint/no-non-null-assertion
    const endTime = new Date(Date.parse(results.endedTestsAt));

    return (
        <TimelineProvider startTime={startTime} endTime={endTime}>
            <Summary fragmentKey={testExecution} />
            <div className={styles.appContent}>
                <FrameworkError />
                <TimelineControls fragmentKey={testExecution} />
                <Expandable.Parent className={styles.expandableParent}>
                    <Steps
                        className={styles.steps}
                        fragmentKey={testExecution}
                    />
                    <DomPreview fragmentKey={testExecution} />
                    <NetworkPanel fragmentKey={testExecution} />
                    <ConsolePanel fragmentKey={testExecution} />
                </Expandable.Parent>
            </div>
        </TimelineProvider>
    );
}
