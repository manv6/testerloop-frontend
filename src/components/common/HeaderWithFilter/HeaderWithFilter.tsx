import React, { ReactNode } from 'react';
import { FilterButton } from 'src/components/common';
import styles from './HeaderWithFilter.module.scss';

type Props = {
    title: ReactNode;
    toggleFilter: () => void;
    isFilterOn: boolean;
    dataCyPrefix?: string;
};

const HeaderWithFilter: React.FC<Props> = ({
    toggleFilter,
    title,
    isFilterOn,
    dataCyPrefix,
}) => {
    return (
        <div className={styles.headerWithFilter}>
            <div>{title}</div>
            <FilterButton
                isActive={isFilterOn}
                onClick={toggleFilter}
                data-cy={`${dataCyPrefix}-filter-button`}
            />
        </div>
    );
};

export default HeaderWithFilter;
