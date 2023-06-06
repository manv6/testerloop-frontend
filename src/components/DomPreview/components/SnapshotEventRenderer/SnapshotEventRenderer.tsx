import React, { useEffect, useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import styles from './SnapshotEventRenderer.module.scss';
import { DOMTab } from '../../DomPreview';
import { SnapshotEventRendererFragment$key } from './__generated__/SnapshotEventRendererFragment.graphql';

interface CSSStyleDeclarationWithZoom extends CSSStyleDeclaration {
    zoom: string;
}

interface DomMessage {
    type: 'dom';
    value: string;
}

interface ZoomMessage {
    type: 'zoom';
    value: number;
}

type Message = DomMessage | ZoomMessage;

type Props = {
    tab: DOMTab;
    snapshotEventKey: SnapshotEventRendererFragment$key | null;
    zoom: number;
};

const SnapshotEventRenderer: React.FC<Props> = ({
    tab,
    snapshotEventKey,
    zoom,
}) => {
    const snapshotEvent = useFragment(
        graphql`
            fragment SnapshotEventRendererFragment on SnapshotEvent {
                previousSnapshot {
                    dom
                }
                nextSnapshot {
                    dom
                }
            }
        `,
        snapshotEventKey
    );

    const snapshot =
        tab === DOMTab.AFTER
            ? snapshotEvent?.nextSnapshot
            : snapshotEvent?.previousSnapshot;

    const [iframe, setIframeRef] = useState<HTMLIFrameElement | null>(null);

    useEffect(() => {
        if (!iframe) return;

        const handleLoad = () => {
            const window = iframe.contentWindow;
            const elements =
                window?.document.querySelectorAll('[data-otf-value]');
            if (elements) {
                for (const elem of Array.from(elements)) {
                    elem.setAttribute(
                        'value',
                        elem.getAttribute('data-otf-value') || ''
                    );
                }
            }

            const links = window?.document.getElementsByTagName('a');
            if (links) {
                for (const link of Array.from(links)) {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                    });
                }
            }
        };

        iframe.addEventListener('load', handleLoad);

        return () => {
            iframe.removeEventListener('load', handleLoad);
        };
    }, [iframe]);

    useEffect(() => {
        if (iframe?.contentWindow && snapshot) {
            const message: DomMessage = {
                type: 'dom',
                value: snapshot.dom,
            };
            iframe.contentWindow.postMessage(message, '*');
        }
    }, [iframe, snapshot]);

    useEffect(() => {
        if (iframe?.contentWindow) {
            const message: ZoomMessage = {
                type: 'zoom',
                value: zoom,
            };
            iframe.contentWindow.postMessage(message, '*');
        }
    }, [iframe, zoom]);

    useEffect(() => {
        const iframeWindow = iframe?.contentWindow;
        if (!iframeWindow) return;

        let zoom = '1';

        const handleMessage = (event: MessageEvent<Message>) => {
            const { type, value } = event.data;
            const doc = iframe.contentDocument;
            if (!doc) return;

            if (type === 'dom') {
                doc.open();
                doc.write(value);
                (doc.body.style as CSSStyleDeclarationWithZoom).zoom = zoom;
                doc.close();
                // re-attach handler to handle further messages
                iframeWindow.addEventListener('message', handleMessage);
            }

            if (type === 'zoom') {
                zoom = `${value}`;
                (doc.body.style as CSSStyleDeclarationWithZoom).zoom = zoom;
            }
        };

        iframeWindow.addEventListener('message', handleMessage);
        return () => {
            iframeWindow.removeEventListener('message', handleMessage);
        };
    }, [iframe]);

    return (
        <div className={styles.domPreview}>
            <iframe
                className={styles.iframe}
                sandbox="allow-same-origin"
                id="dom-iframe"
                title="domSnapshot"
                ref={setIframeRef}
            />
        </div>
    );
};

export default SnapshotEventRenderer;
