import React, { useCallback } from 'react';
import { EventType, FILTER_LABELS } from 'src/constants';
import CypressErrorMarker from '../CypressErrorMarker';
import FailedNetworkMarker from '../FailedNetworkMarker';
import StepMarker from '../StepMarker';
import SuccessNetworkMarker from '../SuccessNetworkMarker';
import styles from './TimelineFilters.module.scss';

type Props = {
    className?: string;
    filters: { [k in EventType]: boolean };
    setFilters: (filters: { [k in EventType]: boolean }) => void;
};

const TimelineFilters: React.FC<Props> = ({ filters, setFilters }) => {
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
};

export default TimelineFilters;
