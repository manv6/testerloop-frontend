import React from 'react';
import { styled } from '@mui/material';
import { EventType } from 'src/constants';

interface StyledPrefixProps {
    type: EventType;
    hasFailed?: boolean;
    isAction?: boolean;
    isSelected?: boolean;
}

const StyledPrefix = styled('span')<StyledPrefixProps>(
    ({ theme, isAction, isSelected }) => {
        let color;
        if (isAction) {
            color = isSelected
                ? theme.palette.base[100]
                : theme.palette.base[200];
        } else {
            color = theme.palette.base[100];
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
    isSelected = false,
}) => (
    <StyledPrefix
        isAction={isAction}
        isSelected={isSelected}
        type={type}
        hasFailed={hasFailed}
        className={className}
        data-cy="step-prefix"
    >
        {children}
    </StyledPrefix>
);

export default StepPrefix;
