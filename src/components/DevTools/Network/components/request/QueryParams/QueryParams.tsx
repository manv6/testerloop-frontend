import React from 'react';
import { useFragment } from 'react-relay';
import { Accordion, Divider } from 'src/components/common';
import KeyValueTable from '../../KeyValueTable';
import QueryParamsFragment from './QueryParamsFragment';
import { QueryParamsFragment$key } from './__generated__/QueryParamsFragment.graphql';

type Props = {
    fragmentKey: QueryParamsFragment$key;
};

const QueryParams: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(QueryParamsFragment, fragmentKey);

    return data.queryString.length ? (
        <>
            <Accordion title={<div>Query params</div>}>
                <KeyValueTable
                    key="queryParams"
                    valuePairs={data.queryString}
                />
            </Accordion>
            <Divider />
        </>
    ) : null;
};

export default QueryParams;
