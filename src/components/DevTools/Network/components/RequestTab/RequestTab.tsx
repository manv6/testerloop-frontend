import React from 'react';
import { useFragment } from 'react-relay';
import QueryParams from '../QueryParams/QueryParams';
import RequestData from '../RequestData';
import RequestHeaders from '../RequestHeaders';
import RequestToUrl from '../RequestToUrl';
import RequestTabFragment from './RequestTabFragment';
import { RequestTabFragment$key } from './__generated__/RequestTabFragment.graphql';

type RequestTabProps = {
    fragmentKey: RequestTabFragment$key;
};

const RequestTab: React.FC<RequestTabProps> = ({ fragmentKey }) => {
    const data = useFragment(RequestTabFragment, fragmentKey);

    return (
        <div>
            <RequestToUrl fragmentKey={data.request} />
            <QueryParams fragmentKey={data.request} />
            <RequestData fragmentKey={data.request} />
            <RequestHeaders fragmentKey={data.request} />
        </div>
    );
};

export default RequestTab;
