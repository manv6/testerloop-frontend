import cx from 'classnames';
import { useMemo, useState } from 'react';
import { useTimeline } from "../../hooks/timeline"
import { datesToFraction } from "../../utils/date";
import styles from './TimelineControls.module.scss';
import scenario from '../../data/scenario';
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
        scenario.steps.filter(({ result }) => result.status == 'passed').map((step) => ({
            type: 'step',
            start: step.from,
            startFraction: datesToFraction(startTime, endTime, step.from!),
            colour: MARKER_COLOUR_STEP
        })
    ), [scenario, startTime, endTime]);

    const networkMarkers = useMemo(() => networkEvents.map((evt) => ({
        type: 'network',
        start: evt.startedDateTime,
        startFraction: datesToFraction(startTime, endTime, evt.startedDateTime),
        colour: MARKER_COLOUR_NETWORK
    })), [networkEvents, startTime, endTime]);

    const errorMarkers = useMemo(() => 
        scenario.steps.filter(({ result }) => result.status == 'failed').map((step) => ({
            type: 'error',
            start: step.from,
            startFraction: datesToFraction(startTime, endTime, step.from!),
            colour: MARKER_COLOUR_ERROR
        })
    ), [scenario, startTime, endTime]);

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
