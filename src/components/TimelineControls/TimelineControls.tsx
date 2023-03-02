// TODO: Remove this check once temp data is removed!!
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import { useTimeline } from 'src/hooks/timeline';
import { datesToElapsedTime } from 'src/utils/date';
import styles from './TimelineControls.module.scss';
import { Panel } from 'src/core/components';
import {
    PlayButton,
    Seeker,
    SpeedControl,
    TimelineFilters,
} from './components';

type Props = {
    // TODO: Update fragment key type
    fragmentKey: any; // eslint-disable-line
};

export const TimelineControls: React.FC<Props> = () => {
    const {
        currentTime,
        startTime,
        endTime,
        filters,
        setFilters,
        speed,
        setSpeed,
    } = useTimeline();

    const onSpeedChange = useCallback(
        (ev: React.ChangeEvent<HTMLSelectElement>) => {
            setSpeed(parseFloat(ev.target.value));
        },
        [setSpeed]
    );

    return (
        <Panel className={styles.timeline}>
            <div className={styles.controlSection}>
                <div className={styles.controlsContainer}>
                    <PlayButton />
                    <div className={styles.time}>
                        {datesToElapsedTime(startTime, currentTime) || 0} :{' '}
                        {datesToElapsedTime(startTime, endTime)}
                    </div>
                    <SpeedControl speed={speed} onSpeedChange={onSpeedChange} />
                </div>
                <TimelineFilters filters={filters} setFilters={setFilters} />
            </div>
            <Seeker />
        </Panel>
    );
};
