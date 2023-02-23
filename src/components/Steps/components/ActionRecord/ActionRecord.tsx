import React from 'react';
import cx from 'classnames';
import { useTimeline } from 'src/hooks/timeline';
import { Step } from '../../Steps';
import styles from './ActionRecord.module.scss';

interface Props {
    action: Step;
    isActionSelected: boolean;
    isActionHovered: boolean;
}

const ActionRecord: React.FC<Props> = ({
    action: { options },
    isActionSelected,
    isActionHovered,
}) => {
    const { seek } = useTimeline();

    const navigateInTimeline = () => {
        seek(options.wallClockStartedAt);
    };

    return (
        <div
            key={options.id}
            onClick={navigateInTimeline}
            className={cx(
                styles.actionRecord,
                options.state === 'failed' ? styles.error : styles.success,
                {
                    [styles.selected]: isActionSelected,
                    [styles.hovered]: isActionHovered,
                }
            )}
        >
            <span className={styles.expandedActionName}>{options.name}</span>
            <span className={styles.expandedActionMessage}>
                {options.message}
            </span>
        </div>
    );
};

export default ActionRecord;
