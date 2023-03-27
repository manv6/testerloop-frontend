// TODO: Remove this check once temp data is removed!!
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import { useTimeline } from 'src/hooks/timeline';
import { datesToElapsedTime } from 'src/utils/date';
import styles from './TimelineControls.module.scss';
import {
    PlayButton,
    Seeker,
    SpeedControl,
    TimelineFilters,
} from './components';
import { EventType } from 'src/constants';
import FrameworkErrorMarker from './components/FrameworkErrorMarker';
import FailedNetworkMarker from './components/FailedNetworkMarker';
import StepMarker from './components/StepMarker';
import SuccessNetworkMarker from './components/SuccessNetworkMarker';
import { styled } from '@mui/material';
import { Panel } from 'src/components/common';
import { SeekerFragment$key } from './components/Seeker/__generated__/SeekerFragment.graphql';

type Props = {
    fragmentKey: SeekerFragment$key | null;
};

const StyledControlSection = styled('div')(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.base[300]}`,
}));

const StyledTime = styled('div')(({ theme }) => ({
    color: theme.palette.base[200],
}));

export const TimelineControls: React.FC<Props> = ({ fragmentKey }) => {
    const { currentTime, startTime, endTime, filters, setFilters } =
        useTimeline();

    const getMarker = useCallback((type: EventType): JSX.Element => {
        switch (type) {
            case EventType.STEP:
                return <StepMarker />;
            case EventType.CYPRESS_ERROR:
                return <FrameworkErrorMarker />;
            case EventType.NETWORK_ERROR:
                return <FailedNetworkMarker />;
            case EventType.NETWORK_SUCCESS:
                return <SuccessNetworkMarker />;
        }
    }, []);

    return (
        <Panel className={styles.timeline}>
            <StyledControlSection className={styles.controlSection}>
                <div className={styles.controlsContainer}>
                    <PlayButton />
                    <StyledTime className={styles.time}>
                        {datesToElapsedTime(startTime, currentTime) || 0} /{' '}
                        {datesToElapsedTime(startTime, endTime)}
                    </StyledTime>
                    <SpeedControl />
                </div>
                <TimelineFilters
                    getMarker={getMarker}
                    filters={filters}
                    setFilters={setFilters}
                />
            </StyledControlSection>
            <Seeker getMarker={getMarker} fragmentKey={fragmentKey} />
        </Panel>
    );
};
