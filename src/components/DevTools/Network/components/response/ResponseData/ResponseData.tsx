import React, { useMemo } from 'react';
import { Accordion, Divider } from 'src/components/common';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './ResponseData.module.scss';
import { ResponseDataFragment$key } from './__generated__/ResponseDataFragment.graphql';
import { useFragment } from 'react-relay';
import ResponseDataFragment from './ResponseDataFragment';

type Props = {
    fragmentKey: ResponseDataFragment$key;
};

const ResponseData: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(ResponseDataFragment, fragmentKey);

    const snippet = useMemo(() => {
        const responseDataExcludedMimeTypes = [
            'application/font-woff2',
            'application/octet-stream',
        ];
        const mimeType = data.body.mimeType;
        const responsePayload = data.body.data;

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
        <>
            <Accordion title={<div>Mime Type</div>}>
                {data.body.mimeType}
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
        </>
    );
};

export default ResponseData;
