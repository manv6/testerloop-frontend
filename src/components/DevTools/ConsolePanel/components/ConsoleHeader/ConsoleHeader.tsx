import React from 'react';
import FilterButton from '../FilterButton';
import styles from './ConsoleHeader.module.scss';

type Props = {
    toggleFilter: () => void;
};

const ConsoleHeader: React.FC<Props> = ({ toggleFilter }) => {
    return (
        <div className={styles.consoleHeader}>
            <div>Console</div>
            <FilterButton onClick={toggleFilter} />
        </div>
    );
};

export default ConsoleHeader;
