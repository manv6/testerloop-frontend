import React from 'react';
import { styled } from '@mui/material';
import { EventType } from 'src/constants';

interface StyledPrefixProps {
    type: EventType;
    hasFailed?: boolean;
    isAction?: boolean;
}

const StyledPrefix = styled('span')<StyledPrefixProps>(
    ({ theme, type, hasFailed, isAction }) => {
        let color = theme.palette.base[200];
        if ([EventType.STEP, EventType.CYPRESS_ERROR].includes(type)) {
            if (hasFailed) {
                color = theme.palette.status.error[400];
            } else if (isAction === false) {
                color = theme.palette.status.success[400];
            }
        }
        return {
            color,
        };
    }
);

type Props = StyledPrefixProps &
    React.PropsWithChildren & {
        className?: string;
    };

const StepPrefix: React.FC<Props> = ({
    type,
    hasFailed,
    children,
    className,
    isAction = false,
}) => (
    <StyledPrefix
        isAction={isAction}
        type={type}
        hasFailed={hasFailed}
        className={className}
    >
        {children}
    </StyledPrefix>
);

export default StepPrefix;
