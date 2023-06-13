import React from 'react';
import { EventType, FILTER_LABELS } from 'src/constants';
import styles from './TimelineFilters.module.scss';
import VisibilityToggleOff from '../VisibilityToggleOff';
import VisibilityToggleOn from '../VisibilityToggleOn';
import { styled } from '@mui/material';

type Props = {
    className?: string;
    filters: { [k in EventType]: boolean };
    setFilters: (filters: { [k in EventType]: boolean }) => void;
    getMarker: (ev: EventType) => JSX.Element;
};

type FilterItemProps = {
    active: boolean;
};

const FilterItem = styled('span')<FilterItemProps>(({ theme, active }) => ({
    color: active ? theme.palette.base[100] : theme.palette.base[200],
}));

const TimelineFilters: React.FC<Props> = ({
    filters,
    setFilters,
    getMarker,
}) => (
    <div className={styles.filters}>
        {Object.values(EventType).map((et) => (
            <label key={`filter-${et}`} className={styles.filter}>
                {getMarker(et)}
                <FilterItem active={filters[et]}>
                    {FILTER_LABELS[et]}
                </FilterItem>
                <span
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                        setFilters({
                            ...filters,
                            [et]: !filters[et],
                        })
                    }
                >
                    {filters[et] ? (
                        <VisibilityToggleOn />
                    ) : (
                        <VisibilityToggleOff />
                    )}
                </span>
            </label>
        ))}
    </div>
);

export default TimelineFilters;
