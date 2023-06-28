import React from 'react';
import { useFragment } from 'react-relay';
import NetworkErrorCountFragment from './NetworkErrorCountFragment';
import { NetworkErrorCountFragment$key } from './__generated__/NetworkErrorCountFragment.graphql';
import { styled } from '@mui/material';

type Props = {
    fragmentKey: NetworkErrorCountFragment$key;
};

const NetworkErrorCount: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(NetworkErrorCountFragment, fragmentKey);
    const errorCount = data.summaryNetworkErrors.totalCount;

    const StyledSpan = styled('span')(({ theme }) => ({
        color:
            errorCount === 0
                ? theme.palette.base[200]
                : theme.palette.base[100],
    }));

    return (
        <li>
            <StyledSpan data-cy="network-error-count">
                {data.summaryNetworkErrors.totalCount} Network errors
            </StyledSpan>
        </li>
    );
};

export default NetworkErrorCount;
