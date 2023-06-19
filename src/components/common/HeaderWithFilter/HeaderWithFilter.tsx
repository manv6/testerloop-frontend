import React, { ReactNode } from 'react';
import { FilterButton } from 'src/components/common';
import styles from './HeaderWithFilter.module.scss';

type Props = {
    title: ReactNode;
    toggleFilter: () => void;
    isFilterOn: boolean;
};

const HeaderWithFilter: React.FC<Props> = ({
    toggleFilter,
    title,
    isFilterOn,
}) => {
    return (
        <div className={styles.headerWithFilter}>
            <div>{title}</div>
            <FilterButton isActive={isFilterOn} onClick={toggleFilter} />
        </div>
    );
};

export default HeaderWithFilter;
