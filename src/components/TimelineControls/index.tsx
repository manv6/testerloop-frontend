// TODO: Remove this check once temp data is removed!!
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import cx from 'classnames';
import { useTimeline } from 'src/hooks/timeline';
import { datesToFraction } from 'src/utils/date';
import styles from './TimelineControls.module.scss';
import steps from 'src/data/steps';
import networkEvents from 'src/data/networkEvents';
import { EventType, FILTER_LABELS, MARKER_COLOURS } from 'src/constants/eventType';

export const TimelineControls: React.FC = () => {
    const {
        currentTimeFraction,
        hoverTimeFraction,
        isPlaying,
        setPlaying,
        setHoverTimeFraction,
        seekFraction,
        startTime,
        endTime,
        filters,
        setFilters
    } = useTimeline();

    const stepMarkers = useMemo(() =>
        steps.filter(({ options }) => options.groupStart).map(({ options }) => ({
            id: `${options.id}`,
            type: EventType.STEP,
            start: options.wallClockStartedAt,
            startFraction: datesToFraction(startTime, endTime, options.wallClockStartedAt),
        })
        ), [steps, startTime, endTime]);

    const networkMarkers = useMemo(() => networkEvents.map((evt) => ({
        id: evt._requestId,
        type: EventType.NETWORK,
        start: evt.endedDateTime,
        startFraction: datesToFraction(startTime, endTime, evt.endedDateTime),
    })), [networkEvents, startTime, endTime]);

    const errorMarkers = useMemo(() =>
        steps.filter(({ options }) => options.state === 'failed').map(({ options }) => ({
            id: `${options.id}`,
            type: EventType.ERROR,
            start: options.wallClockStartedAt,
            startFraction: datesToFraction(startTime, endTime, options.wallClockStartedAt),
        })
        ), [steps, startTime, endTime]);

    const markers = useMemo(() => [
        ...stepMarkers,
        ...networkMarkers,
        ...errorMarkers
    ], [stepMarkers, networkMarkers, errorMarkers]);

    return (
        <div
            className={styles.timeline}
        >
            <div
                className={styles.seeker}
                onMouseMove={(ev) => {
                    setHoverTimeFraction((ev.clientX - ev.currentTarget.offsetLeft) / ev.currentTarget.offsetWidth);
                }}
                onMouseLeave={() => {
                    setHoverTimeFraction(null);
                }}
                onClick={(ev) => {
                    seekFraction((ev.clientX - ev.currentTarget.offsetLeft) / ev.currentTarget.offsetWidth);
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
                        (filters.network && marker.type === EventType.NETWORK) ||
                        (filters.error && marker.type === EventType.ERROR)
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
        </div>
    );
};
