import React, { useMemo } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { DOMTab } from '../../DomPreview';
import { useFragment } from 'react-relay';
import { DomPreviewRendererFragment$key } from './__generated__/DomPreviewRendererFragment.graphql';
import SnapshotEventRenderer from '../SnapshotEventRenderer/SnapshotEventRenderer';
import { useTimeline } from 'src/hooks/timeline';

type Props = {
    tab: DOMTab;
    testExecutionKey: DomPreviewRendererFragment$key;
    zoom: number;
};

const DomPreviewRenderer: React.FC<Props> = ({
    tab,
    testExecutionKey,
    zoom,
}) => {
    const { currentTime } = useTimeline();
    const {
        domPreviewEvents: { edges },
    } = useFragment(
        graphql`
            fragment DomPreviewRendererFragment on TestExecution {
                domPreviewEvents: events(filter: { type: [COMMAND, STEP] }) {
                    edges {
                        node {
                            at
                            ...SnapshotEventRendererFragment
                            ... on SnapshotEvent {
                                previousSnapshot {
                                    dom
                                }
                                nextSnapshot {
                                    dom
                                }
                            }
                        }
                    }
                }
            }
        `,
        testExecutionKey
    );

    const currentSnapshot = useMemo(() => {
        const filteredEdges = edges.filter((edge) => {
            if (!edge.node.previousSnapshot || !edge.node.nextSnapshot) {
                return false;
            }
            return true;
        });
        const nextStepIdx = filteredEdges.findIndex(
            (step) => new Date(step.node.at).getTime() > currentTime.getTime()
        );
        const mostRecentIdx =
            (nextStepIdx === -1 ? filteredEdges.length : nextStepIdx) - 1;
        // NOTE: TS incorrectly types array indexes as always existing.
        // as we don't know that is correct, we change the type manually.
        return (
            (
                filteredEdges[mostRecentIdx] as
                    | (typeof filteredEdges)[0]
                    | undefined
            )?.node ?? null
        );
    }, [edges, currentTime]);

    return (
        <SnapshotEventRenderer
            snapshotEventKey={currentSnapshot}
            tab={tab}
            zoom={zoom}
        />
    );
};

export default DomPreviewRenderer;
