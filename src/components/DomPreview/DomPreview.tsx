import React, { useEffect, useMemo, useState } from 'react';
import { useTimeline } from 'src/hooks/timeline';
import styles from './DomPreview.module.scss';
import { formatSteps } from 'src/utils/formatters';
import stepsData from 'src/data/steps';
import snapshots from 'src/data/snapshots';

enum DOMTab {
    BEFORE = 'beforeBody',
    AFTER = 'afterBody',
}

interface ElementWithValue extends HTMLElement {
    'data-otf-value': string;
    value: string;
}

const DomPreview: React.FC = () => {
    const { currentTime } = useTimeline();
    const steps = useMemo(() => formatSteps(stepsData as any), [stepsData]); //eslint-disable-line
    const [tab, setTab] = useState(DOMTab.BEFORE);

    const currentSnapshot = useMemo(() => {
        const nextStepIdx = steps.findIndex(
            ({ options }) =>
                new Date(options.wallClockStartedAt).getTime() >
                currentTime.getTime()
        );
        const mostRecentIdx =
            (nextStepIdx === -1 ? steps.length : nextStepIdx) - 1;
        const mostRecentStep = steps[mostRecentIdx];
        const snapshotId = mostRecentStep.options.snapshotID;
        const snapshot = snapshots.find(
            (snapshot) => snapshot.snapshotID === snapshotId
        );

        return snapshot;
    }, [steps, currentTime]);

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
    }, [currentSnapshot, tab]);

    return (
        <div className={styles.domPreview}>
            <header>
                <ul>
                    <li>Snapshot</li>
                </ul>
                <div className={styles.controls}>
                    <button onClick={() => setTab(DOMTab.BEFORE)}>
                        Before
                    </button>
                    <button onClick={() => setTab(DOMTab.AFTER)}>After</button>
                </div>
            </header>
            <iframe
                className={styles.iframe}
                sandbox="allow-scripts allow-same-origin"
                id="dom-iframe"
                title="domSnapshot"
            />
        </div>
    );
};

export default DomPreview;
