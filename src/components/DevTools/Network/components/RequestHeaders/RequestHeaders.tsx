import React from 'react';
import { useFragment } from 'react-relay';
import { Accordion, Divider } from 'src/components/common';
import KeyValueTable from '../KeyValueTable';
import RequestHeadersFragment from './RequestHeadersFragment';
import { RequestHeadersFragment$key } from './__generated__/RequestHeadersFragment.graphql';

type Props = {
    fragmentKey: RequestHeadersFragment$key;
};

const RequestHeaders: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(RequestHeadersFragment, fragmentKey);

    return (
        <>
            <Accordion title={<div>Request Headers</div>}>
                <KeyValueTable
                    key="requestHeader"
                    valuePairs={data.headers.values}
                />
            </Accordion>
            <Divider />
        </>
    );
};

export default RequestHeaders;
