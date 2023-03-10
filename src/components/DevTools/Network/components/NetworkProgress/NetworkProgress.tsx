import { styled } from '@mui/material';
import React from 'react';
import { ProgressFilterType } from '../../NetworkPanel';
import styles from './NetworkProgress.module.scss';

interface StyledCircleProps {
    progress: ProgressFilterType;
}

const StyledCircle = styled('div')<StyledCircleProps>(({ theme, progress }) => {
    let backgroundColor;
    let borderColor;

    switch (progress) {
        case ProgressFilterType.IN_PROGRESS:
            backgroundColor = theme.palette.status.caution[500];
            borderColor = theme.palette.status.caution[400];
            break;
        case ProgressFilterType.COMPLETED:
            backgroundColor = theme.palette.status.success[500];
            borderColor = theme.palette.status.success[400];
            break;
        default:
            backgroundColor = theme.palette.base[300];
            borderColor = theme.palette.base[200];
            break;
    }

    return {
        backgroundColor,
        border: `1px solid ${borderColor}`,
    };
});

const NetworkProgress: React.FC<StyledCircleProps> = ({ progress }) => {
    return <StyledCircle className={styles.circle} progress={progress} />;
};

export default NetworkProgress;
