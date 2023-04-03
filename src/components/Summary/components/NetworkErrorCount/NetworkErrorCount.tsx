import React from 'react';
import { useFragment } from 'react-relay';
import NetworkErrorIcon from '../NetworkErrorIcon';
import NetworkErrorCountFragment from './NetworkErrorCountFragment';
import { NetworkErrorCountFragment$key } from './__generated__/NetworkErrorCountFragment.graphql';

type Props = {
    fragmentKey: NetworkErrorCountFragment$key;
};

const NetworkErrorCount: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(NetworkErrorCountFragment, fragmentKey);

    return (
        <li>
            <NetworkErrorIcon />
            <span>{data.summaryNetworkErrors.totalCount} Network errors</span>
        </li>
    );
};

export default NetworkErrorCount;
