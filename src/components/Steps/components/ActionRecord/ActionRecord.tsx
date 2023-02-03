import { useTimeline } from 'src/hooks/timeline';
import { Step } from '../../Steps';
import styles from './ActionRecord.module.scss';

interface Props {
	action: Step;

	isSelected: boolean;
	isHovered: boolean;
}

const ActionRecord: React.FC<Props> = ({ action: { options } }) => {
    const { seek } = useTimeline();

    const navigateInTimeline = () => {
        if (options.wallClockStartedAt)
            seek(options.wallClockStartedAt);
    };

    return (
        <div
            key={options.id}
            className={styles.actionRecord}
            onClick={navigateInTimeline}
        >
            <span className={styles.expandedActionName}>
                {options.name}
            </span>
            <span className={styles.expandedActionMessage}>
                {options.message}
            </span>
        </div>
    );
};

export default ActionRecord;