/*eslint-disable */
import React, { useEffect, useMemo } from 'react';
import { EventType } from 'src/constants';
import { useTimeline } from 'src/hooks/timeline';
import { datesToElapsedTime, datesToFraction } from 'src/utils/date';
import networkEventData from 'src/data/networkEvents';
import stepsData from 'src/data/steps';
import * as formatter from 'src/utils/formatters';
import styles from './Seeker.module.scss';
import { styled } from '@mui/material';

const StyledFill = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary[100],
    '&:after': {
        backgroundColor: theme.palette.primary[100],
    },
}));

type Props = {
    getMarker: (ev: EventType) => JSX.Element;
};

const Seeker: React.FC<Props> = ({ getMarker }) => {
    const data = {
        networkEvents: networkEventData.log.entries,
        steps: stepsData,
    } as any; // eslint-disable-line
    const {
        currentTime,
        currentTimeFraction,
        hoverTimeFraction,
        isPlaying,
        setPlaying,
        setHoverTimeFraction,
        seekFraction,
        startTime,
        endTime,
        filters,
    } = useTimeline();

    // Add dates

    const steps = useMemo(
        () => formatter.formatSteps(data.steps),
        [data.steps]
    );
    const networkEvents = useMemo(
        () => formatter.formatNetworkEvents(data.networkEvents),
        [data.networkEvents]
    );

    // Define step markers

    const stepMarkers = useMemo(
        () =>
            steps
                .filter(({ options }) => options.groupStart)
                .map(({ options }) => ({
                    id: `${
                        options.id
                    }-${options.wallClockStartedAt.getTime()}-${options.state}`,
                    type: EventType.STEP,
                    start: options.wallClockStartedAt,
                    startFraction: datesToFraction(
                        startTime,
                        endTime,
                        options.wallClockStartedAt
                    ),
                })),
        [steps, startTime, endTime]
    );

    const failedNetworkMarkers = useMemo(
        () =>
            networkEvents
                .filter((evt) => {
                    const status = evt.response.status.toString();
                    return status.startsWith('4') || status.startsWith('5');
                })
                .map((evt) => ({
                    id: evt._requestId,
                    type: EventType.NETWORK_ERROR,
                    start: evt.endedDateTime,
                    startFraction: datesToFraction(
                        startTime,
                        endTime,
                        evt.endedDateTime
                    ),
                })),
        [networkEvents, startTime, endTime]
    );

    const successNetworkMarkers = useMemo(
        () =>
            networkEvents
                .filter((evt) => evt.response.status.toString().startsWith('2'))
                .map((evt) => ({
                    id: evt._requestId,
                    type: EventType.NETWORK_SUCCESS,
                    start: evt.endedDateTime,
                    startFraction: datesToFraction(
                        startTime,
                        endTime,
                        evt.endedDateTime
                    ),
                })),
        [networkEvents, startTime, endTime]
    );

    const cypressErrorMarkers = useMemo(
        () =>
            steps
                .filter(
                    ({ options }) => options.state === 'failed' && options.err
                )
                .map(({ options }) => ({
                    id: `${
                        options.id
                    }-${options.wallClockStartedAt.getTime()}-${options.state}`,
                    type: EventType.CYPRESS_ERROR,
                    start: options.wallClockStartedAt,
                    startFraction: datesToFraction(
                        startTime,
                        endTime,
                        options.wallClockStartedAt
                    ),
                })),
        [steps, startTime, endTime]
    );

    const markers = useMemo(
        () => [
            ...(filters.step ? stepMarkers : []),
            ...(filters.network_error ? failedNetworkMarkers : []),
            ...(filters.network_success ? successNetworkMarkers : []),
            ...(filters.cypress_error ? cypressErrorMarkers : []),
        ],
        [
            stepMarkers,
            failedNetworkMarkers,
            successNetworkMarkers,
            cypressErrorMarkers,
            filters,
        ]
    );

    useEffect(() => {
        // goto first cypress error
        const firstErrorStartFraction = cypressErrorMarkers[0]?.startFraction;
        if (firstErrorStartFraction) {
            seekFraction(firstErrorStartFraction);
        }
    }, [cypressErrorMarkers, seekFraction]);

    console.log('cursor', 100 - 100 * currentTimeFraction);

    console.log('markers', markers);

    return (
        <div className={styles.seekerContainer}>
            <div
                className={styles.seeker}
                onMouseMove={(ev) => {
                    const parentOffset =
                        ev.currentTarget.parentElement?.offsetLeft || 0;
                    setHoverTimeFraction(
                        (ev.clientX -
                            parentOffset -
                            ev.currentTarget.offsetLeft) /
                            ev.currentTarget.offsetWidth
                    );
                }}
                onMouseLeave={() => {
                    setHoverTimeFraction(null);
                }}
                onClick={(ev) => {
                    const parentOffset =
                        ev.currentTarget.parentElement?.offsetLeft || 0;
                    seekFraction(
                        (ev.clientX -
                            parentOffset -
                            ev.currentTarget.offsetLeft) /
                            ev.currentTarget.offsetWidth
                    );
                }}
            >
                {hoverTimeFraction && (
                    <div
                        className={styles.hover}
                        style={{
                            right: `${100 - 100 * hoverTimeFraction}%`,
                        }}
                    ></div>
                )}
                <StyledFill
                    className={styles.fill}
                    style={{
                        right: `${100 - 100 * currentTimeFraction}%`,
                    }}
                ></StyledFill>
                <div
                    className={styles.cursor}
                    style={{
                        right: `${100 - 100 * currentTimeFraction}%`,
                    }}
                    // data-after-content={
                    //     datesToElapsedTime(startTime, currentTime) || 0
                    // }
                ></div>
                {markers.map((marker: any) => (
                    <div
                        key={marker.id}
                        className={styles.marker}
                        style={{
                            right: `calc(${
                                100 - 100 * marker.startFraction
                            }% - 7px)`,
                        }}
                    >
                        {getMarker(marker.type)}
                    </div>
                ))}
            </div>
            <div
                className={styles.cursor}
                style={{
                    right: `${100 - 100 * currentTimeFraction}%`,
                }}
                // data-after-content={
                //     datesToElapsedTime(startTime, currentTime) || 0
                // }
            ></div>
        </div>
    );
};

export default Seeker;
