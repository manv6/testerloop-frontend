import React, { ReactNode } from 'react';
import { FilterButton } from 'src/components/common';
import styles from './HeaderWithFilter.module.scss';

type Props = {
    title: ReactNode;
    toggleFilter: () => void;
};

const HeaderWithFilter: React.FC<Props> = ({ toggleFilter, title }) => {
    return (
        <div className={styles.headerWithFilter}>
            <div>{title}</div>
            <FilterButton onClick={toggleFilter} />
        </div>
    );
};

export default HeaderWithFilter;
