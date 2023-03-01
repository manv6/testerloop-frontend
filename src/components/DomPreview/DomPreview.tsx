import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
                const elements = nodeList && Array.from(nodeList);
                if (elements) {
                    for (const elem of elements) {
                        (elem as ElementWithValue).value =
                            (elem as ElementWithValue).getAttribute(
                                'data-otf-value'
                            ) || '';
                    }
                }
            };

            iframe.addEventListener('load', handleLoad);

            return () => {
                iframe.removeEventListener('load', handleLoad);
            };
        }
    }, [currentSnapshot]);

    const iframeBlob = useMemo(() => {
        const html = currentSnapshot?.[tab];

        // const top = snapshots[0].html as string;
        // const head = snapshots[0].head as string;
        // const body = currentSnapshot?.[tab];
        // const html = top + head + body + '</html>';

        return html;

        // const blobContent = new Blob([html || ''], {
        //     type: 'text/html;charset=utf-8',
        // });
        // return URL.createObjectURL(blobContent);
    }, [currentSnapshot, tab]);

    // console.log('iframe blob', iframeBlob);

    useEffect(() => {
        console.log('here');
        const iframe = document.getElementById(
            'dom-iframe'
        ) as HTMLIFrameElement | null;
        if (iframe?.contentWindow) {
            console.log('posting');
            iframe.contentWindow.postMessage(
                { type: 'text/html;charset=utf-8', value: iframeBlob },
                '*'
            );
        }
    }, [iframeBlob]);

    useEffect(() => {
        console.log('in use efect here');
        const iframe = document.getElementById(
            'dom-iframe'
        ) as HTMLIFrameElement | null;
        const iframeWindow = iframe?.contentWindow;

        // const handleMessage = (event: MessageEvent) => {
        //     const { type, value } = event.data;

        //     if (type === 'text/html;charset=utf-8') {
        //         if (iframe) {
        //             iframe.innerHTML = value;
        //         }
        //     }
        // };

        if (iframeWindow) {
            iframeWindow.addEventListener('message', (event) => {
                const { type, value } = event.data;

                if (type === 'text/html;charset=utf-8') {
                    // iframe.srcdoc = value;
                    const doc = iframe.contentDocument;

                    if (doc) {
                        doc.open();
                        doc.write(value);
                        doc.close();
                    }
                }
            });
        }

        // return () => {
        //     if (iframeWindow) {
        //         iframeWindow.removeEventListener('message', handleMessage);
        //     }
        // };
    }, [currentSnapshot, tab]);

    const changeTab = useCallback((tab: DOMTab) => {
        setTab(tab);
    }, []);

    return (
        <div className={styles.domPreview}>
            <header>
                <ul>
                    <li>Snapshot</li>
                </ul>
                <div className={styles.controls}>
                    <button onClick={() => changeTab(DOMTab.BEFORE)}>
                        Before
                    </button>
                    <button onClick={() => changeTab(DOMTab.AFTER)}>
                        After
                    </button>
                </div>
            </header>
            <iframe
                className={styles.iframe}
                sandbox="allow-scripts allow-same-origin"
                id="dom-iframe"
                // src={iframeUrl}
                title="domSnapshot"
            />
        </div>
    );
};

export default DomPreview;
