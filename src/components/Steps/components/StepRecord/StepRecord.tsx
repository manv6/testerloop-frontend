import { styled } from '@mui/material';
import cx from 'classnames';
import React from 'react';
import { StepPrefix } from 'src/components/common';
import { EventType } from 'src/constants';
import { useTimeline } from 'src/hooks/timeline';
import { Step } from '../../Steps';
import ActionRecord from '../ActionRecord';
import ChevronIcon from './ChevronIcon';
import styles from './StepRecord.module.scss';

interface Props {
    idx: number;
    isExpanded: boolean;
    setExpandedStepIdx: (idx: number | undefined) => void;
    step: Step;
    actions: Step[];
    isStepSelected: boolean;
    isStepHovered: boolean;
    isPreviousToSelected: boolean;
    selectedActionIdx: number | null;
    hoveredActionIdx: number | null;
}

interface StyledStepHeaderProps {
    isSelected: boolean;
    isPreviousToSelected: boolean;
}

const StyledStepHeader = styled('tr')<StyledStepHeaderProps>(
    ({ theme, isSelected, isPreviousToSelected }) => {
        let backgroundColor = theme.palette.base[400];
        let borderColor = theme.palette.base[300];
        if (isSelected) {
            backgroundColor = theme.palette.base[300];
            borderColor = `${theme.palette.base[200]}`;
        }

        return {
            backgroundColor,
            borderBottom: `1px solid ${borderColor}`,
            ...(isPreviousToSelected && { borderBottom: 'none' }),
            borderTop: `1px solid ${borderColor}`,
        };
    }
);

const StepRecord: React.FC<Props> = ({
    idx,
    isExpanded,
    isPreviousToSelected,
    setExpandedStepIdx,
    step,
    actions,
    isStepSelected,
    isStepHovered,
    selectedActionIdx,
    hoveredActionIdx,
}) => {
    const { options } = step;
    const { seek } = useTimeline();

    const hasFailedActions = actions.some(
        (action) => action.options.state === 'failed'
    );
    const hasFailed = options.state === 'failed' || hasFailedActions;

    return (
        <>
            <StyledStepHeader
                key={`${options.id}`}
                isPreviousToSelected={isPreviousToSelected}
                isSelected={isStepSelected}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setExpandedStepIdx(isExpanded ? undefined : idx);
                    seek(step.options.wallClockStartedAt);
                }}
                className={cx(styles.stepHeader, {
                    [styles.selected]: isStepSelected,
                    [styles.hovered]: isStepHovered,
                })}
            >
                <td className={styles.stepName}>
                    <StepPrefix
                        type={
                            hasFailed ? EventType.CYPRESS_ERROR : EventType.STEP
                        }
                        hasFailed={hasFailed}
                        className={styles.stepPrefix}
                    >
                        {options.name.toUpperCase()}
                    </StepPrefix>
                </td>

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
            </StyledStepHeader>

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
