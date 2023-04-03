import React from 'react';
import { useFragment } from 'react-relay';
import WarnIcon from '../WarnIcon';
import ConsoleErrorCountFragment from './ConsoleErrorCountFragment';
import { ConsoleErrorCountFragment$key } from './__generated__/ConsoleErrorCountFragment.graphql';

type Props = {
    fragmentKey: ConsoleErrorCountFragment$key;
};

const ConsoleErrorCount: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(ConsoleErrorCountFragment, fragmentKey);

    return (
        <li>
            <WarnIcon />
            <span>{data.summaryConsoleErrors.totalCount} Console errors</span>
        </li>
    );
};

export default ConsoleErrorCount;
