import { styled } from '@mui/material';
import React, { useMemo } from 'react';
import { useTimeline } from 'src/hooks/timeline';
import { datesToElapsedTime } from 'src/utils/date';
import styles from './ElapsedTime.module.scss';

const StyledDisplayTime = styled('span')(({ theme }) => ({
    color: theme.palette.base[200],
}));

type Props = {
    className?: string;
    timestamp: number;
};

const ElapsedTime: React.FC<Props> = ({ timestamp, className }) => {
    const { startTime } = useTimeline();

    const displayTime = useMemo(() => {
        const date = timestamp ? new Date(timestamp) : undefined;
        if (!date) {
            return;
        }
        const elapsedTime = datesToElapsedTime(startTime, date);
        return elapsedTime.replace('.', ' • ') + ' ms';
    }, [startTime, timestamp]);

    return (
        <StyledDisplayTime className={styles.displayTime}>
            {displayTime}
        </StyledDisplayTime>
    );
};

export default ElapsedTime;
