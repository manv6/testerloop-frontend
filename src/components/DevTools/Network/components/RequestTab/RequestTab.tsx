import React from 'react';
import { useFragment } from 'react-relay';
import { Accordion, Divider } from 'src/components/common';
import KeyValueTable from '../KeyValueTable';
import RequestBody from '../RequestBody';
import RequestTabFragment from './RequestTabFragment';
import { RequestTabFragment$key } from './__generated__/RequestTabFragment.graphql';

type RequestTabProps = {
    fragmentKey: RequestTabFragment$key;
};

const RequestTab: React.FC<RequestTabProps> = ({ fragmentKey }) => {
    const data = useFragment(RequestTabFragment, fragmentKey);

    return (
        <div>
            <Accordion
                accordionProps={{ defaultExpanded: true }}
                title={<div>Request to</div>}
            >
                {data.request.url.url}
            </Accordion>
            <Divider />
            {data.request.queryString.length ? (
                <>
                    <Accordion title={<div>Query params</div>}>
                        <KeyValueTable
                            key="queryParams"
                            valuePairs={data.request.queryString}
                        />
                    </Accordion>
                    <Divider />
                </>
            ) : null}
            {data.request.body?.data && (
                <>
                    <Accordion title={<div>Mime Type</div>}>
                        {data.request.body.mimeType}
                    </Accordion>
                    <Divider />
                    <Accordion title={<div>Payload</div>}>
                        <RequestBody body={data.request.body} />
                    </Accordion>
                    <Divider />
                </>
            )}
            <Accordion title={<div>Request Headers</div>}>
                <KeyValueTable
                    key="requestHeader"
                    valuePairs={data.request.headers.values}
                />
            </Accordion>
            <Divider />
        </div>
    );
};

export default RequestTab;
