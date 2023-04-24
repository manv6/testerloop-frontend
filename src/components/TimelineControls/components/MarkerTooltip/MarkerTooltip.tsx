import { styled } from '@mui/material';
import React, { ReactNode } from 'react';
import { StepPrefix } from 'src/components/common';
import { EventType } from 'src/constants';
import styles from './MarkerTooltip.module.scss';

const StyledContainer = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.base[500],
}));

const StyledTime = styled('div')(({ theme }) => ({
    color: theme.palette.base[200],
}));

type Props = {
    prefix: ReactNode;
    message: ReactNode;
    time: ReactNode;
    type: EventType;
    hasFailed?: boolean;
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
            <StepPrefix type={type} hasFailed={hasFailed}>
                {prefix}
            </StepPrefix>{' '}
            <span>{message}</span>
        </div>
        <StyledTime>{time}</StyledTime>
    </StyledContainer>
);

export default MarkerTooltip;
