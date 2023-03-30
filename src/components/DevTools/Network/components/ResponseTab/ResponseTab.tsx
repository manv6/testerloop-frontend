import React from 'react';
import { useMemo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Accordion, Divider } from 'src/components/common';
import KeyValueTable from '../KeyValueTable';
import styles from './ResponseTab.module.scss';
import { ResponseTabFragment$key } from './__generated__/ResponseTabFragment.graphql';
import ResponseTabFragment from './ResponseTabFragment';
import { useFragment } from 'react-relay';

type ResponseTabProps = {
    fragmentKey: ResponseTabFragment$key;
};

const ResponseTab: React.FC<ResponseTabProps> = ({ fragmentKey }) => {
    const data = useFragment(ResponseTabFragment, fragmentKey);

    const snippet = useMemo(() => {
        const responseDataExcludedMimeTypes = [
            'application/font-woff2',
            'application/octet-stream',
        ];
        const mimeType = data.response.body.mimeType;
        const responsePayload = data.response.body.data;

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
    }, [data]);

    return (
        <div>
            <Accordion title={<div>Mime Type</div>}>
                {data.response.body.mimeType}
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
                    valuePairs={data.response.headers.values}
                />
            </Accordion>
            <Divider />
        </div>
    );
};

export default ResponseTab;
