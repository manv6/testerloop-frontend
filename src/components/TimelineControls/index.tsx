import cx from 'classnames';
import { useMemo, useState } from 'react';
import { useTimeline } from "../../hooks/timeline"
import { datesToFraction } from "../../utils/date";
import styles from './TimelineControls.module.scss';
import steps from '../../data/steps';
import networkEvents from '../../data/networkEvents';

const MARKER_COLOUR_STEP = '#F7C325';
const MARKER_COLOUR_NETWORK = 'purple';
const MARKER_COLOUR_ERROR = 'red';

export const TimelineControls: React.FunctionComponent<{}> = () => {
    const [filters, setFilters] = useState({
        steps: true,
        network: true,
        errors: true,
    });
    
    const {
        currentTimeFraction,
        hoverTimeFraction,
        isPlaying,
        setPlaying,
        setHoverTimeFraction,
        seekFraction,
        startTime,
        endTime
    } = useTimeline();

    const stepMarkers = useMemo(() => 
        steps.filter(({ options }) => options.groupStart).map(({ options, timestamp }) => ({
            id: `${options.id}-${timestamp}`,
            type: 'step',
            start: options.wallClockStartedAt,
            startFraction: datesToFraction(startTime, endTime, options.wallClockStartedAt),
            colour: MARKER_COLOUR_STEP
        })
    ), [steps, startTime, endTime]);

    const networkMarkers = useMemo(() => networkEvents.map((evt) => ({
        id: evt._requestId,
        type: 'network',
        start: evt.endedDateTime,
        startFraction: datesToFraction(startTime, endTime, evt.endedDateTime),
        colour: MARKER_COLOUR_NETWORK
    })), [networkEvents, startTime, endTime]);

    const errorMarkers = useMemo(() => 
        steps.filter(({ options }) => options.state == 'failed').map(({ options, timestamp }) => ({
            id: `${options.id}-${timestamp}`,
            type: 'error',
            start: options.wallClockStartedAt,
            startFraction: datesToFraction(startTime, endTime, options.wallClockStartedAt),
            colour: MARKER_COLOUR_ERROR
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
                        (filters.steps && marker.type == 'step') ||
                        (filters.network && marker.type == 'network') ||
                        (filters.errors && marker.type == 'error')
                    )).map((marker) => (
                        <div 
                            key={marker.id}
                            className={cx(
                                styles.marker,
                                styles[`marker-${marker.type}`]
                            )}
                            style={{
                                left: `${100 * marker.startFraction}%`,
                                borderColor: marker.colour
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
                <label className={styles.filter}>
                    <div className={styles.legend} style={{ background: MARKER_COLOUR_STEP }}></div>
                    <input 
                        type="checkbox"
                        defaultChecked={filters.steps}
                        onInput={() => setFilters({ ...filters, steps: !filters.steps })} 
                    />
                    <span>Step Definitions</span>
                </label>
                <label className={styles.filter}>
                    <div className={styles.legend} style={{ background: MARKER_COLOUR_NETWORK }}></div>
                    <input 
                        type="checkbox"
                        defaultChecked={filters.network}
                        onInput={() => setFilters({ ...filters, network: !filters.network })} 
                    />
                    <span>Network</span>
                </label>
                <label className={styles.filter}>
                    <div className={styles.legend} style={{ background: MARKER_COLOUR_ERROR }}></div>
                    <input 
                        type="checkbox"
                        defaultChecked={filters.errors}
                        onInput={() => setFilters({ ...filters, errors: !filters.errors })}
                    />
                    <span>Error</span>
                </label>
            </div>
        </div>
    )
}
