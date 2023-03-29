import React from 'react';
import { Accordion, Divider } from 'src/components/common';
import KeyValueTable from '../KeyValueTable';
import { NetworkEventDetailPanelFragment$data } from '../NetworkEventDetailPanel/__generated__/NetworkEventDetailPanelFragment.graphql';
import RequestBody from '../RequestBody';

type RequestTabProps = {
    selectedEvent: NetworkEventDetailPanelFragment$data;
};

const RequestTab: React.FC<RequestTabProps> = ({ selectedEvent }) => {
    return (
        <div>
            <Accordion
                accordionProps={{ defaultExpanded: true }}
                title={<div>Request to</div>}
            >
                {selectedEvent.request.url.url}
            </Accordion>
            <Divider />
            {selectedEvent.request.queryString.length ? (
                <>
                    <Accordion title={<div>Query params</div>}>
                        <KeyValueTable
                            key="queryParams"
                            valuePairs={selectedEvent.request.queryString}
                        />
                    </Accordion>
                    <Divider />
                </>
            ) : null}
            {selectedEvent.request.body?.data && (
                <>
                    <Accordion title={<div>Mime Type</div>}>
                        {selectedEvent.request.body.mimeType}
                    </Accordion>
                    <Divider />
                    <Accordion title={<div>Payload</div>}>
                        <RequestBody selectedEvent={selectedEvent} />
                    </Accordion>
                    <Divider />
                </>
            )}
            <Accordion title={<div>Request Headers</div>}>
                <KeyValueTable
                    key="requestHeader"
                    valuePairs={selectedEvent.request.headers.values}
                />
            </Accordion>
            <Divider />
        </div>
    );
};

export default RequestTab;
