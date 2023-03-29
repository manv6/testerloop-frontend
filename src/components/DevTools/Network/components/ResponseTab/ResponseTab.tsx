import React from 'react';
import { useMemo } from 'react';
import { NetworkEventDetailPanelFragment$data } from '../NetworkEventDetailPanel/__generated__/NetworkEventDetailPanelFragment.graphql';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Accordion, Divider } from 'src/components/common';
import KeyValueTable from '../KeyValueTable';
import styles from './ResponseTab.module.scss';

type ResponseTabProps = {
    selectedEvent: NetworkEventDetailPanelFragment$data;
};

const ResponseTab: React.FC<ResponseTabProps> = ({ selectedEvent }) => {
    const snippet = useMemo(() => {
        const responseDataExcludedMimeTypes = [
            'application/font-woff2',
            'application/octet-stream',
        ];
        const mimeType = selectedEvent.response.body.mimeType;
        const responsePayload = selectedEvent.response.body.data;

        if (
            !responsePayload ||
            responseDataExcludedMimeTypes.includes(mimeType)
        ) {
            return null;
        }

        if (mimeType === 'application/json') {
            return (
                <SyntaxHighlighter
                    language="json"
                    style={vscDarkPlus}
                    wrapLongLines={true}
                >
                    {JSON.stringify(JSON.parse(responsePayload), null, 2)}
                </SyntaxHighlighter>
            );
        }
        return <div>{responsePayload}</div>;
    }, [selectedEvent]);

    return (
        <div>
            <Accordion title={<div>Mime Type</div>}>
                {selectedEvent.response.body.mimeType}
            </Accordion>
            <Divider />
            {snippet && (
                <>
                    <Accordion
                        accordionProps={{ defaultExpanded: true }}
                        title={<div>Payload</div>}
                    >
                        <div className={styles.responseContentTextWrapper}>
                            {snippet}
                        </div>
                    </Accordion>
                    <Divider />
                </>
            )}
            <Accordion title={<div>Response Headers</div>}>
                <KeyValueTable
                    key="responseHeader"
                    valuePairs={selectedEvent.response.headers.values}
                />
            </Accordion>
            <Divider />
        </div>
    );
};

export default ResponseTab;
