import React, { ReactNode } from 'react';
import { PanelHeader } from 'src/components/common';
import styles from './StepsHeader.module.scss';

type Props = {
    headerTitle: ReactNode;
};

const StepHeader: React.FC<Props> = ({ headerTitle }) => (
    <PanelHeader>
        <div className={styles.headerTitle}>{headerTitle}</div>
    </PanelHeader>
);

export default StepHeader;
