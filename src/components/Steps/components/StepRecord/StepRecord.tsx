import cx from 'classnames';
import React, { useState } from 'react';
import { useTimeline } from 'src/hooks/timeline';
import { Step } from '../../Steps';
import ActionRecord from '../ActionRecord';
import ChevronIcon from './ChevronIcon';
import styles from './StepRecord.module.scss';

interface Props {
	step: Step;
	actions: Step[];

	isSelected: boolean;
	isHovered: boolean;
}

const StepRecord: React.FC<Props> = ({ step, actions, isSelected, isHovered }) => {
    const { options } = step;
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const { seek } = useTimeline();

    return (
        <>
            <tr
                key={`${options.id}`}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                    if (step.options.wallClockStartedAt) {
                        seek(step.options.wallClockStartedAt);
                    }
                }}
                className={cx(
                    styles.stepHeader,
                    { [styles.selected]: isSelected, [styles.hovered]: isHovered }
                )}
            >
                <td className={styles.stepName}>
                    {options.name}
                </td>

                <td className={cx(
                    styles.stepContent,
                    options.state === 'passed' ? styles.success : styles.error
                )}>
                    {/* TODO: No need to slice, just for now to dismiss `**` in all steps */}
                    {options.message.replaceAll('*', '')}
                </td>

                <td className={styles.stepAccordionIcon}>
                    <ChevronIcon direction={isExpanded ? 'up' : 'down'} />
                </td>
            </tr>

            {isExpanded && (
                <tr className={styles.expandedPanel}>
                    <td colSpan={4}>
                        {actions.map(action => (
                            <ActionRecord
                                key={action.options.id}
                                action={action}
                                isSelected={false}
                                isHovered={false}
                            />
                        ))}
                    </td>
                </tr>
            )}
        </>
    );
};

export default StepRecord;