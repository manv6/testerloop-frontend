/*eslint-disable */
import React, { useEffect, useMemo, useState } from 'react';
import { EventType, TIMELINE_SVG_PX_WIDTH } from 'src/constants';
import { useTimeline } from 'src/hooks/timeline';
import { datesToElapsedTime, datesToFraction } from 'src/utils/date';
import networkEventData from 'src/data/networkEvents';
import stepsData from 'src/data/steps';
import * as formatter from 'src/utils/formatters';
import styles from './Seeker.module.scss';
import { styled, Tooltip } from '@mui/material';
import MarkerTooltip from '../MarkerTooltip';
import fractionToPercentage from 'src/utils/fractionToPercentage';

const StyledFill = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.base[100],
    '&:after': {
        backgroundColor: theme.palette.base[100],
    },
}));

const StyledSeeker = styled('div')(({ theme }) => ({
    '&:before': {
        backgroundColor: theme.palette.base[300],
    },
}));

const StyledHover = styled('div')(({ theme }) => ({
    '&:after': {
        background: theme.palette.base[400],
        border: `2px solid ${theme.palette.base[100]}`,
    },
}));

interface StyledMarkerProps {
    size: number;
}

const StyledMarker = styled('div')<StyledMarkerProps>(({ size }) => ({
    svg: {
        height: size,
        width: size,
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
        currentTimeFraction,
        hoverTimeFraction,
        hoverTime,
        setHoverTimeFraction,
        seekFraction,
        startTime,
        endTime,
        filters,
    } = useTimeline();
    const [displayHoverTooltip, setDisplayHoverTooltip] = useState(true);

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
                    name: options.name,
                    message: options.message.replaceAll('*', ''),
                    hasFailed: options.state === 'failed',
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
                    name: `${evt.request.method} ${evt.response.status}`,
                    message: evt.request.url,
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
                    name: `${evt.request.method} ${evt.response.status}`,
                    message: evt.request.url,
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
                    name: options.name,
                    message: options.message.replaceAll('*', ''),
                    hasFailed: true,
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
        // Go to first cypress error
        const firstErrorStartFraction = cypressErrorMarkers[0]?.startFraction;
        if (firstErrorStartFraction) {
            seekFraction(firstErrorStartFraction);
        }
    }, [cypressErrorMarkers, seekFraction]);

    return (
        <div className={styles.seekerContainer}>
            <StyledSeeker
                className={styles.seeker}
                onMouseMove={(ev) => {
                    const parentOffset =
                        ev.currentTarget.parentElement?.offsetLeft || 0;
                    const hoverTimeFraction =
                        (ev.clientX -
                            parentOffset -
                            ev.currentTarget.offsetLeft) /
                        ev.currentTarget.offsetWidth;

                    // Limit hover fraction between 0 and 1
                    const adjustedHoverTimeFraction = Math.min(
                        Math.max(hoverTimeFraction, 0),
                        1
                    );

                    setHoverTimeFraction(adjustedHoverTimeFraction);
                }}
                onMouseLeave={() => {
                    setHoverTimeFraction(null);
                }}
                onClick={(ev) => {
                    const parentOffset =
                        ev.currentTarget.parentElement?.offsetLeft || 0;
                    const timeFraction =
                        (ev.clientX -
                            parentOffset -
                            ev.currentTarget.offsetLeft) /
                        ev.currentTarget.offsetWidth;

                    // Limit fraction between 0 and 1
                    const adjustedTimeFraction = Math.min(
                        Math.max(timeFraction, 0),
                        1
                    );

                    seekFraction(adjustedTimeFraction);
                }}
            >
                {hoverTimeFraction ? (
                    <StyledHover
                        className={styles.hover}
                        style={{
                            right: `${fractionToPercentage(
                                hoverTimeFraction
                            )}%`,
                        }}
                    ></StyledHover>
                ) : null}
                {hoverTimeFraction && hoverTime && displayHoverTooltip ? (
                    <Tooltip
                        title={datesToElapsedTime(startTime, hoverTime)}
                        placement="top"
                        open
                        arrow
                    >
                        <div
                            className={styles.hoverCursor}
                            style={{
                                right: `${fractionToPercentage(
                                    hoverTimeFraction
                                )}%`,
                            }}
                        ></div>
                    </Tooltip>
                ) : null}
                <StyledFill
                    className={styles.fill}
                    style={{
                        right: `${fractionToPercentage(currentTimeFraction)}%`,
                    }}
                ></StyledFill>
                <div
                    className={styles.cursor}
                    style={{
                        right: `${fractionToPercentage(currentTimeFraction)}%`,
                    }}
                ></div>
                {/*TODO: remove 'any' once temp data is removed */}
                {markers.map((marker: any, i) => {
                    const svgSize =
                        marker.type === EventType.CYPRESS_ERROR
                            ? Math.round(1.8 * TIMELINE_SVG_PX_WIDTH)
                            : TIMELINE_SVG_PX_WIDTH;
                    return (
                        <Tooltip
                            key={i}
                            placement="top"
                            onOpen={() => setDisplayHoverTooltip(false)}
                            onClose={() => setDisplayHoverTooltip(true)}
                            arrow
                            title={
                                <MarkerTooltip
                                    type={marker.type}
                                    hasFailed={marker.hasFailed}
                                    prefix={
                                        marker.type === EventType.STEP
                                            ? marker.name.toUpperCase()
                                            : marker.name
                                    }
                                    message={
                                        marker.message.length > 100
                                            ? marker.message.slice(0, 100) +
                                              '...'
                                            : marker.message
                                    }
                                    time={datesToElapsedTime(
                                        startTime,
                                        marker.start
                                    )}
                                />
                            }
                        >
                            <StyledMarker
                                size={svgSize}
                                key={marker.id}
                                className={styles.marker}
                                style={{
                                    right: `calc(${fractionToPercentage(
                                        marker.startFraction
                                    )}% - ${svgSize / 2}px)`, // For the cursor to be centered on the svg
                                }}
                            >
                                {getMarker(marker.type)}
                            </StyledMarker>
                        </Tooltip>
                    );
                })}
            </StyledSeeker>
        </div>
    );
};

export default Seeker;
