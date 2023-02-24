// TODO: Remove this check once temp data is removed!!
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo, useEffect } from 'react';
import { useFragment } from 'react-relay';
import { useTimeline } from 'src/hooks/timeline';
import { datesToElapsedTime, datesToFraction } from 'src/utils/date';
import styles from './TimelineControls.module.scss';
import {
    EventType,
    FILTER_LABELS,
    MARKER_COLOURS,
} from 'src/constants/eventType';
import * as formatter from 'src/utils/formatters';
import networkEventData from 'src/data/networkEvents';
import stepsData from 'src/data/steps';
import { TimelineControlsFragment$key } from './__generated__/TimelineControlsFragment.graphql';
import { isOfType } from 'src/utils/isOfType';
import graphql from 'babel-plugin-relay/macro';

const AVAILABLE_SPEEDS = [0.25, 0.5, 1, 1.5, 2];

type Props = {
    fragmentKey: TimelineControlsFragment$key | null;
};

export const TimelineControls: React.FC<Props> = ({ fragmentKey }) => {
    const timelineData = useFragment(
        graphql`
            fragment TimelineControlsFragment on TestExecution {
                id
                timelineControlNetworkEvents: events(
                    filter: { type: NETWORK }
                ) {
                    edges {
                        node {
                            __typename
                            ... on HttpNetworkEvent {
                                id
                                response {
                                    status
                                }
                                time {
                                    at
                                    until
                                }
                            }
                        }
                    }
                }
            }
        `,
        fragmentKey
    );

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
        setFilters,
        speed,
        setSpeed,
    } = useTimeline();

    // Add dates

    const steps = useMemo(
        () => formatter.formatSteps(data.steps),
        [data.steps]
    );
    const networkEvents = useMemo(
        () =>
            timelineData?.timelineControlNetworkEvents.edges
                .map(({ node }) => node)
                .filter(isOfType('HttpNetworkEvent'))
                .map(({ time: { at, until }, ...rest }) => {
                    return {
                        ...rest,
                        time: { at: new Date(at), until: new Date(until) },
                    };
                }) || [],
        [timelineData]
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
                    id: evt.id,
                    type: EventType.NETWORK_ERROR,
                    start: evt.time.until,
                    startFraction: datesToFraction(
                        startTime,
                        endTime,
                        evt.time.until
                    ),
                })),
        [networkEvents, startTime, endTime]
    );

    const successNetworkMarkers = useMemo(
        () =>
            networkEvents
                .filter((evt) => evt.response.status.toString().startsWith('2'))
                .map((evt) => ({
                    id: evt.id,
                    type: EventType.NETWORK_SUCCESS,
                    start: evt.time.until,
                    startFraction: datesToFraction(
                        startTime,
                        endTime,
                        evt.time.until
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

    const onSpeedChange = useCallback(
        (ev: React.ChangeEvent<HTMLSelectElement>) => {
            setSpeed(parseFloat(ev.target.value));
        },
        [setSpeed]
    );

    useEffect(() => {
        // goto first cypress error
        const firstErrorStartFraction = cypressErrorMarkers[0]?.startFraction;
        if (firstErrorStartFraction) {
            seekFraction(firstErrorStartFraction);
        }
    }, [cypressErrorMarkers, seekFraction]);

    return (
        <div className={styles.timeline}>
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
                    <div
                        className={styles.fill}
                        style={{
                            right: `${100 - 100 * currentTimeFraction}%`,
                        }}
                    ></div>
                    {markers.map((marker) => (
                        <div
                            key={marker.id}
                            className={styles.marker}
                            style={{
                                left: `${100 * marker.startFraction}%`,
                                borderColor: MARKER_COLOURS[marker.type],
                            }}
                        ></div>
                    ))}
                    <div
                        className={styles.play}
                        onClick={(ev) => {
                            ev.stopPropagation();
                            setPlaying(!isPlaying);
                        }}
                    >
                        <span>{isPlaying ? 'Ⅱ' : '▶'}</span>
                    </div>
                </div>
                <div
                    className={styles.cursor}
                    style={{
                        right: `${100 - 100 * currentTimeFraction}%`,
                    }}
                    data-after-content={
                        datesToElapsedTime(startTime, currentTime) || 0
                    }
                ></div>
            </div>
            <div className={styles.controlSection}>
                <div className={styles.filters}>
                    {Object.values(EventType).map((et) => (
                        <label key={`filter-${et}`} className={styles.filter}>
                            <div
                                className={styles.legend}
                                style={{ background: MARKER_COLOURS[et] }}
                            ></div>
                            <input
                                type="checkbox"
                                defaultChecked={filters[et]}
                                onInput={() =>
                                    setFilters({
                                        ...filters,
                                        [et]: !filters[et],
                                    })
                                }
                            />
                            <span>{FILTER_LABELS[et]}</span>
                        </label>
                    ))}
                </div>
                <div>
                    <label>
                        {' '}
                        Speed:
                        <select value={speed} onChange={onSpeedChange}>
                            {AVAILABLE_SPEEDS.map((s, idx) => (
                                // TODO: Better key?
                                <option key={`speed-${s}-${idx}`} value={s}>
                                    × {s}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            </div>
        </div>
    );
};
