import React from 'react';
import { useFragment } from 'react-relay';
import ConsoleErrorCountFragment from './ConsoleErrorCountFragment';
import { ConsoleErrorCountFragment$key } from './__generated__/ConsoleErrorCountFragment.graphql';
import { styled } from '@mui/material';

type Props = {
    fragmentKey: ConsoleErrorCountFragment$key;
};

let errorCount = 0;

const StyledSpan = styled('span')(({ theme }) => ({
    color: errorCount === 0 ? theme.palette.base[200] : theme.palette.base[100],
}));

const ConsoleErrorCount: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(ConsoleErrorCountFragment, fragmentKey);
    errorCount = data.summaryConsoleErrors.totalCount;
    return (
        <li>
            <StyledSpan data-cy="console-error-count">
                {data.summaryConsoleErrors.totalCount} Console errors
            </StyledSpan>
        </li>
    );
};

export default ConsoleErrorCount;
