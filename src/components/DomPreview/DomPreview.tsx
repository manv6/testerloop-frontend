import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTimeline } from 'src/hooks/timeline';
import styles from './DomPreview.module.scss';
import * as Expandable from 'src/components/Expandable';
import { DomPreviewHeader } from './components';
import { DEFAULT_DOM_ZOOM, DOM_ZOOM_STEP_PERCENTAGE } from 'src/constants';
import { DomPreviewFragment$key } from './__generated__/DomPreviewFragment.graphql';
import DomPreviewFragment from './DomPreviewFragment';
import { useFragment } from 'react-relay';

export enum DOMTab {
    BEFORE = 'previousSnapshot',
    AFTER = 'nextSnapshot',
}

interface ElementWithValue extends HTMLElement {
    'data-otf-value': string;
    value: string;
}

type Props = {
    fragmentKey: DomPreviewFragment$key;
};

const DomPreview: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(DomPreviewFragment, fragmentKey);
    const steps = data.snapshots.edges;
    const { currentTime } = useTimeline();
    const [tab, setTab] = useState(DOMTab.BEFORE);
    const [zoom, setZoom] = useState(DEFAULT_DOM_ZOOM);

    const flatSteps = useMemo(
        () =>
            steps.flatMap((step) => {
                const { node } = step;
                const { previousSnapshot, nextSnapshot, at } = node;
                const commandChains = node.commandChains?.edges ?? [];

                const flattenedCommands = commandChains.flatMap((chain) => {
                    const commands = chain.node.commands.edges;

                    return commands.map(({ node }) => ({
                        previousSnapshot: node.previousSnapshot.dom,
                        nextSnapshot: node.nextSnapshot.dom,
                        at: node.at,
                    }));
                });

                return [
                    {
                        previousSnapshot: previousSnapshot?.dom,
                        nextSnapshot: nextSnapshot?.dom,
                        at,
                    },
                    ...flattenedCommands,
                ];
            }),
        [steps]
    );

    const currentSnapshot = useMemo(() => {
        const nextStepIdx = flatSteps.findIndex(
            (step) => new Date(step.at).getTime() > currentTime.getTime()
        );
        const mostRecentIdx =
            (nextStepIdx === -1 ? flatSteps.length : nextStepIdx) - 1;
        // NOTE: TS incorrectly types array indexes as always existing.
        // as we don't know that is correct, we change the type manually.
        return (
            (flatSteps[mostRecentIdx] as (typeof flatSteps)[0] | undefined) ??
            null
        );
    }, [flatSteps, currentTime]);

    useEffect(() => {
        if (currentSnapshot) {
            const iframe = document.getElementById(
                'dom-iframe'
            ) as HTMLIFrameElement;

            const handleLoad = () => {
                const window = iframe.contentWindow;
                const nodeList =
                    window?.document.querySelectorAll('[data-otf-value]');
                const elements =
                    nodeList && (Array.from(nodeList) as ElementWithValue[]);
                if (elements) {
                    for (const elem of elements) {
                        elem.value = elem.getAttribute('data-otf-value') || '';
                    }
                }

                const links = window?.document.getElementsByTagName('a');
                if (links) {
                    for (let i = 0; i < links.length; i++) {
                        links[i].addEventListener('click', (e) => {
                            e.preventDefault();
                        });
                    }
                }
            };

            iframe.addEventListener('load', handleLoad);

            return () => {
                iframe.removeEventListener('load', handleLoad);
            };
        }
    }, [currentSnapshot]);

    useEffect(() => {
        const iframe = document.getElementById(
            'dom-iframe'
        ) as HTMLIFrameElement | null;
        if (iframe?.contentWindow) {
            iframe.contentWindow.postMessage(
                {
                    type: 'text/html;charset=utf-8',
                    value: currentSnapshot?.[tab],
                },
                '*'
            );
        }
    }, [currentSnapshot, tab]);

    useEffect(() => {
        const iframe = document.getElementById(
            'dom-iframe'
        ) as HTMLIFrameElement | null;
        const iframeWindow = iframe?.contentWindow;

        const handleMessage = (event: MessageEvent) => {
            const { type, value } = event.data;

            if (type === 'text/html;charset=utf-8') {
                if (iframe) {
                    const doc = iframe.contentDocument;

                    if (doc) {
                        doc.open();
                        doc.write(value);
                        (doc.body.style as any).zoom = zoom; //eslint-disable-line
                        doc.close();
                    }
                }
            }
        };

        if (iframeWindow) {
            iframeWindow.addEventListener('message', handleMessage);
        }

        return () => {
            if (iframeWindow) {
                iframeWindow.removeEventListener('message', handleMessage);
            }
        };
    }, [currentSnapshot, tab, zoom]);

    const handleZoom = useCallback((direction: 'in' | 'out') => {
        const iframe = document.getElementById(
            'dom-iframe'
        ) as HTMLIFrameElement | null;
        const body = iframe?.contentDocument?.body as HTMLBodyElement | null;

        if (body) {
            const newZoom =
                direction === 'in'
                    ? DOM_ZOOM_STEP_PERCENTAGE
                    : -DOM_ZOOM_STEP_PERCENTAGE;
            const currentZoom = parseFloat((body.style as any).zoom || '1'); //eslint-disable-line
            const newZoomValue = currentZoom + newZoom;
            if (newZoomValue === 0 || newZoomValue > 1) {
                return;
            }
            setZoom(newZoomValue);
            (body.style as any).zoom = newZoomValue.toString(); //eslint-disable-line
        }
    }, []);

    const header = useMemo(
        () => (
            <DomPreviewHeader
                setTab={setTab}
                tab={tab}
                handleZoom={handleZoom}
                zoom={zoom}
            />
        ),
        [handleZoom, tab, zoom]
    );

    return (
        <Expandable.Child className={styles.expandableDom} header={header}>
            <div className={styles.domPreview}>
                <iframe
                    className={styles.iframe}
                    sandbox="allow-same-origin"
                    id="dom-iframe"
                    title="domSnapshot"
                />
            </div>
        </Expandable.Child>
    );
};

export default DomPreview;
