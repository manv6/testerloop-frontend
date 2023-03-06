import { styled } from '@mui/material';
import React, { ReactNode } from 'react';
import { EventType } from 'src/constants';
import styles from './MarkerTooltip.module.scss';

const StyledContainer = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.base[500],
}));

interface StyledPrefixProps {
    type: EventType;
    hasFailed: boolean;
}

const StyledPrefix = styled('span')<StyledPrefixProps>(
    ({ theme, type, hasFailed }) => {
        let color = theme.palette.base[200];
        if ([EventType.STEP, EventType.CYPRESS_ERROR].includes(type)) {
            if (hasFailed) {
                color = theme.palette.status.error[400];
            } else {
                color = theme.palette.status.success[400];
            }
        }
        return {
            color,
        };
    }
);

const StyledTime = styled('div')(({ theme }) => ({
    color: theme.palette.base[200],
}));

type Props = {
    prefix: ReactNode;
    message: ReactNode;
    time: ReactNode;
    type: EventType;
    hasFailed: boolean;
};

const MarkerTooltip: React.FC<Props> = ({
    prefix,
    message,
    time,
    type,
    hasFailed,
}) => (
    <StyledContainer className={styles.container}>
        <div>
            <StyledPrefix type={type} hasFailed={hasFailed}>
                {prefix}
            </StyledPrefix>{' '}
            <span>{message}</span>
        </div>
        <StyledTime>{time}</StyledTime>
    </StyledContainer>
);

export default MarkerTooltip;
