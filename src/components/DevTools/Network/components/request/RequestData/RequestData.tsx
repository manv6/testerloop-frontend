import React from 'react';
import { useFragment } from 'react-relay';
import { Accordion, Divider } from 'src/components/common';
import RequestBody from '../RequestBody';
import RequestDataFragment from './RequestDataFragment';
import { RequestDataFragment$key } from './__generated__/RequestDataFragment.graphql';

type Props = {
    fragmentKey: RequestDataFragment$key;
};

const RequestData: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(RequestDataFragment, fragmentKey);

    return data.body?.data ? (
        <>
            <Accordion title={<div>Mime Type</div>}>
                {data.body.mimeType}
            </Accordion>
            <Divider />
            <Accordion title={<div>Payload</div>}>
                <RequestBody body={data.body} />
            </Accordion>
            <Divider />
        </>
    ) : null;
};

export default RequestData;
