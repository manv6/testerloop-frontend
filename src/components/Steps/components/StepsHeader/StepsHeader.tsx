import React, { ReactNode } from 'react';
import styles from './StepsHeader.module.scss';

type Props = {
    headerTitle: ReactNode;
};

const StepHeader: React.FC<Props> = ({ headerTitle }) => (
    <div>
        <div className={styles.headerTitle}>{headerTitle}</div>
    </div>
);

export default StepHeader;
