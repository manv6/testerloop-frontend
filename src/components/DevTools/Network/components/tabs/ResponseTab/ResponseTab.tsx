import React from 'react';
import { ResponseTabFragment$key } from './__generated__/ResponseTabFragment.graphql';
import ResponseTabFragment from './ResponseTabFragment';
import { useFragment } from 'react-relay';
import { ResponseData, ResponseHeaders } from '../../response';

type ResponseTabProps = {
    fragmentKey: ResponseTabFragment$key;
};

const ResponseTab: React.FC<ResponseTabProps> = ({ fragmentKey }) => {
    const data = useFragment(ResponseTabFragment, fragmentKey);

    return (
        <div>
            <ResponseData fragmentKey={data.response} />
            <ResponseHeaders fragmentKey={data.response} />
        </div>
    );
};

export default ResponseTab;
