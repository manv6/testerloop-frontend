import React from 'react';
import { TimelineProvider } from 'src/hooks/timeline';
import { TimelineControls } from 'src/components/TimelineControls';
import { NetworkPanel, ConsolePanel } from 'src/components/DevTools';
import { Steps } from 'src/components/Steps';
import * as Expandable from 'src/components/Expandable';
import FrameworkError from 'src/components/FrameworkError';
import Summary from 'src/components/Summary';
import styles from 'src/App.module.scss';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import DomPreview from 'src/components/DomPreview';
import { useLoaderData } from 'react-router-dom';
import {
    testExecutionPageQuery,
    TestExecutionPageQuery,
} from './TestExecutionPageQuery';

export default function TestExecutionPage() {
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
    const startTime = new Date(testExecution.firstStep.edges[0].node.at);
    const endTime = new Date(testExecution.until);
    const initialSeekTime = new Date(
        testExecution.commandFailures.edges[0]?.node.at ?? startTime
    );

    return (
        <TimelineProvider
            initialSeekTime={initialSeekTime}
            startTime={startTime}
            endTime={endTime}
        >
            <Summary fragmentKey={testExecution} />
            <div className={styles.appContent}>
                <FrameworkError fragmentKey={testExecution} />
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
