import React from 'react';
import { EventType, FILTER_LABELS } from 'src/constants';
import styles from './TimelineFilters.module.scss';

type Props = {
    className?: string;
    filters: { [k in EventType]: boolean };
    setFilters: (filters: { [k in EventType]: boolean }) => void;
    getMarker: (ev: EventType) => JSX.Element;
};

const TimelineFilters: React.FC<Props> = ({
    filters,
    setFilters,
    getMarker,
}) => (
    <div className={styles.filters}>
        {Object.values(EventType).map((et) => (
            <label key={`filter-${et}`} className={styles.filter}>
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
                {getMarker(et)}
                <span>{FILTER_LABELS[et]}</span>
            </label>
        ))}
    </div>
);

export default TimelineFilters;
