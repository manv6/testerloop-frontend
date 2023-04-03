import React from 'react';
import { useFragment } from 'react-relay';
import { Accordion, Divider } from 'src/components/common';
import KeyValueTable from '../../KeyValueTable';
import ResponseHeadersFragment from './ResponseHeadersFragment';
import { ResponseHeadersFragment$key } from './__generated__/ResponseHeadersFragment.graphql';

type Props = {
    fragmentKey: ResponseHeadersFragment$key;
};

const ResponseHeaders: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(ResponseHeadersFragment, fragmentKey);

    return (
        <>
            <Accordion title={<div>Response Headers</div>}>
                <KeyValueTable
                    key="responseHeader"
                    valuePairs={data.headers.values}
                />
            </Accordion>
            <Divider />
        </>
    );
};

export default ResponseHeaders;
