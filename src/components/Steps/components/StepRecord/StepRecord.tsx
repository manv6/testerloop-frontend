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

    isStepSelected: boolean;
    isStepHovered: boolean;

    selectedActionIdx: number | null;
    hoveredActionIdx: number | null;
}

const StepRecord: React.FC<Props> = ({
    step,
    actions,
    isStepSelected,
    isStepHovered,
    selectedActionIdx,
    hoveredActionIdx,
}) => {
    const { options } = step;
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const { seek } = useTimeline();

    const hasFailedActions = actions.some(
        (action) => action.options.state === 'failed'
    );
    const hasFailed = options.state === 'failed' || hasFailedActions;

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
                className={cx(styles.stepHeader, {
                    [styles.selected]: isStepSelected,
                    [styles.hovered]: isStepHovered,
                })}
            >
                <td className={styles.stepName}>{options.name}</td>

                <td
                    className={cx(
                        styles.stepContent,
                        hasFailed ? styles.error : styles.success
                    )}
                >
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
                        {actions.map((action, idx) => (
                            <ActionRecord
                                key={action.options.id}
                                action={action}
                                isActionSelected={selectedActionIdx === idx}
                                isActionHovered={hoveredActionIdx === idx}
                            />
                        ))}
                    </td>
                </tr>
            )}
        </>
    );
};

export default StepRecord;
