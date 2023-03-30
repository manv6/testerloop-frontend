import React from 'react';
import { useFragment } from 'react-relay';
import { Accordion, Divider } from 'src/components/common';
import RequestToUrlFragment from './RequestToUrlFragment';
import { RequestToUrlFragment$key } from './__generated__/RequestToUrlFragment.graphql';

type Props = {
    fragmentKey: RequestToUrlFragment$key;
};

const RequestToUrl: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(RequestToUrlFragment, fragmentKey);

    return (
        <>
            <Accordion
                accordionProps={{ defaultExpanded: true }}
                title={<div>Request to</div>}
            >
                {data.url.url}
            </Accordion>
            <Divider />
        </>
    );
};

export default RequestToUrl;
