import React from 'react';
import { useMemo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import KeyValueTable from '../../KeyValueTable';
import { RequestDataFragment$data } from '../RequestData/__generated__/RequestDataFragment.graphql';

type RequestBodyProps = {
    body: RequestDataFragment$data['body'];
};

const RequestBody: React.FC<RequestBodyProps> = ({ body }) => {
    const snippet = useMemo(() => {
        const mimeType = body?.mimeType;
        const data = body?.data;

        if (!data) {
            return;
        }
        if (mimeType?.includes('application/json')) {
            return (
                <SyntaxHighlighter
                    language="json"
                    style={vscDarkPlus}
                    wrapLongLines={true}
                >
                    {JSON.stringify(JSON.parse(data), null, 2)}
                </SyntaxHighlighter>
            );
        }
        if (mimeType?.includes('application/x-www-form-urlencoded')) {
            const valuePairs = Array.from(
                new URLSearchParams(data).entries()
            ).map(([key, value]) => {
                return { key, value };
            });
            return (
                <KeyValueTable
                    valuePairs={valuePairs}
                    keyLabel="key"
                    valueLabel="value"
                />
            );
        }
        return <div>{data}</div>;
    }, [body?.data, body?.mimeType]);

    return <div>{snippet}</div>;
};

export default RequestBody;
