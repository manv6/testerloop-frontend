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
import { EventType } from 'src/constants';
import CypressErrorMarker from './components/CypressErrorMarker';
import FailedNetworkMarker from './components/FailedNetworkMarker';
import StepMarker from './components/StepMarker';
import SuccessNetworkMarker from './components/SuccessNetworkMarker';

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

    const getMarker = useCallback((type: EventType): JSX.Element => {
        switch (type) {
            case EventType.STEP:
                return <StepMarker />;
            case EventType.CYPRESS_ERROR:
                return <CypressErrorMarker />;
            case EventType.NETWORK_ERROR:
                return <FailedNetworkMarker />;
            case EventType.NETWORK_SUCCESS:
                return <SuccessNetworkMarker />;
        }
    }, []);

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
                <TimelineFilters
                    getMarker={getMarker}
                    filters={filters}
                    setFilters={setFilters}
                />
            </div>
            <Seeker getMarker={getMarker} />
        </Panel>
    );
};
