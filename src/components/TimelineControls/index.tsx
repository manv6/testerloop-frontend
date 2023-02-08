// TODO: Remove this check once temp data is removed!!
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo } from 'react';
import cx from 'classnames';
import { useTimeline } from 'src/hooks/timeline';
import { datesToElapsedTime, datesToFraction } from 'src/utils/date';
import styles from './TimelineControls.module.scss';
import steps from 'src/data/steps';
import networkEvents from 'src/data/networkEvents';
import { EventType, FILTER_LABELS, MARKER_COLOURS } from 'src/constants/eventType';

const AVAILABLE_SPEEDS = [0.25, 0.5, 1, 1.5, 2];

export const TimelineControls: React.FC = () => {
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
        setSpeed
    } = useTimeline();

    const stepMarkers = useMemo(() =>
        steps.filter(({ options }) => options.groupStart).map(({ options }) => ({
            id: `${options.id}-${options.wallClockStartedAt.getTime()}-${options.state}`,
            type: EventType.STEP,
            start: options.wallClockStartedAt,
            startFraction: datesToFraction(startTime, endTime, options.wallClockStartedAt),
        })
        ), [steps, startTime, endTime]);

    const failedNetworkMarkers = useMemo(() => networkEvents.filter((evt) => {
        const status = evt.response.status.toString();
        return status.startsWith('4') || status.startsWith('5');
    }).map((evt) =>
        ({
            id: evt._requestId,
            type: EventType.NETWORK_ERROR,
            start: evt.endedDateTime,
            startFraction: datesToFraction(startTime, endTime, evt.endedDateTime),
        })), [networkEvents, startTime, endTime]);

    const successNetworkMarkers = useMemo(() => networkEvents.filter((evt) =>
        evt.response.status.toString().startsWith('2')).map((evt) =>
        ({
            id: evt._requestId,
            type: EventType.NETWORK_SUCCESS,
            start: evt.endedDateTime,
            startFraction: datesToFraction(startTime, endTime, evt.endedDateTime),
        })), [networkEvents, startTime, endTime]);

    const errorMarkers = useMemo(() =>
        steps.filter(({ options }) => options.state === 'failed').map(({ options }) => ({
            id: `${options.id}-${options.wallClockStartedAt.getTime()}-${options.state}`,
            type: EventType.CYPRESS_ERROR,
            start: options.wallClockStartedAt,
            startFraction: datesToFraction(startTime, endTime, options.wallClockStartedAt),
        })
        ), [steps, startTime, endTime]);

    const markers = useMemo(() => [
        ...stepMarkers,
        ...failedNetworkMarkers,
        ...successNetworkMarkers,
        ...errorMarkers
    ], [stepMarkers, failedNetworkMarkers, successNetworkMarkers, errorMarkers]);

    const onSpeedChange = useCallback((ev: React.ChangeEvent<HTMLSelectElement>) => {
        setSpeed(parseFloat(ev.target.value));
    }, [setSpeed]);

    return (
        <div
            className={styles.timeline}
        >
            <div className={styles.seekerContainer}>
                <div
                    className={styles.seeker}
                    onMouseMove={(ev) => {
                        const parentOffset = ev.currentTarget.parentElement?.offsetLeft || 0;
                        setHoverTimeFraction((ev.clientX - parentOffset - ev.currentTarget.offsetLeft) / ev.currentTarget.offsetWidth);
                    }}
                    onMouseLeave={() => {
                        setHoverTimeFraction(null);
                    }}
                    onClick={(ev) => {
                        const parentOffset = ev.currentTarget.parentElement?.offsetLeft || 0;
                        seekFraction((ev.clientX - parentOffset - ev.currentTarget.offsetLeft) / ev.currentTarget.offsetWidth);
                    }}
                >
                    {
                        hoverTimeFraction
                    && <div
                        className={styles.hover}
                        style={{
                            right: `${100 - 100 * hoverTimeFraction}%`
                        }}
                    >
                    </div>
                    }
                    <div
                        className={styles.fill}
                        style={{
                            right: `${100 - 100 * currentTimeFraction}%`
                        }}
                    >
                    </div>
                    {
                        markers.filter((marker) => (
                            (filters.step && marker.type === EventType.STEP) ||
                        (filters.cypress_error && marker.type === EventType.CYPRESS_ERROR) ||
                        (filters.network_error && marker.type === EventType.NETWORK_ERROR) ||
                        (filters.network_success && marker.type === EventType.NETWORK_SUCCESS)
                        )).map((marker) => (
                            <div
                                key={marker.id}
                                className={cx(
                                    styles.marker,
                                    styles[`marker-${marker.type}`]
                                )}
                                style={{
                                    left: `${100 * marker.startFraction}%`,
                                    borderColor: MARKER_COLOURS[marker.type]
                                }}
                            >
                            </div>
                        ))
                    }
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
                <div className={styles.cursor}  style={{
                    right: `${100 - 100 * currentTimeFraction}%`
                }} data-after-content={datesToElapsedTime(startTime, currentTime) || 0}
                ></div>
            </div>
            <div className={styles.controlSection}>
                <div className={styles.filters}>
                    { Object.values(EventType).map((et) => (
                        <label key={`filter-${et}`} className={styles.filter}>
                            <div className={styles.legend} style={{ background: MARKER_COLOURS[et] }}></div>
                            <input
                                type="checkbox"
                                defaultChecked={filters[et]}
                                onInput={() => setFilters({ ...filters, [et]: !filters[et] })}
                            />
                            <span>{FILTER_LABELS[et]}</span>
                        </label>
                    )) }
                </div>
                <div>
                    <label> Speed:
                        <select value={speed} onChange={onSpeedChange}>
                            {AVAILABLE_SPEEDS.map((s) =>
                                <option value={s}>× {s}</option>
                            )}
                        </select>
                    </label>
                </div>
            </div>
        </div>
    );
};
