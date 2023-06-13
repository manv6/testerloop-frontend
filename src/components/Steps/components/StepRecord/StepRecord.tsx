import { styled } from '@mui/material';
import cx from 'classnames';
import React from 'react';
import { useFragment } from 'react-relay';
import { StepPrefix, ChevronIcon } from 'src/components/common';
import { EventType } from 'src/constants';
import { useTimeline } from 'src/hooks/timeline';
import getMostRecentIdx from 'src/utils/getMostRecentIdx';
import ActionRecord from '../ActionRecord';
import styles from './StepRecord.module.scss';
import StepRecordFragment from './StepRecordFragment';
import StepFailIcon from '../StepFailIcon/StepFailIcon';
import StepSuccessIcon from '../StepSuccessIcon';
import { StepRecordFragment$key } from './__generated__/StepRecordFragment.graphql';

interface Props {
    step: StepRecordFragment$key;
    isStepSelected: boolean;
    isStepHovered: boolean;
    isPreviousToSelected: boolean;
    selectedStepIdx: number | null;
}

interface StyledStepHeaderProps {
    isSelected: boolean;
    isPreviousToSelected: boolean;
}

const StyledStepHeader = styled('tr')<StyledStepHeaderProps>(
    ({ theme, isPreviousToSelected }) => {
        const borderColor = theme.palette.base[300];

        return {
            backgroundColor: theme.palette.base[400],
            borderBottom: `1px solid ${borderColor}`,
            ...(isPreviousToSelected && { borderBottom: 'none' }),
            borderTop: `1px solid ${borderColor}`,
        };
    }
);

const StepRecord: React.FC<Props> = ({
    isPreviousToSelected,
    step,
    isStepSelected,
    isStepHovered,
    selectedStepIdx,
}) => {
    const data = useFragment(StepRecordFragment, step);
    const { seek } = useTimeline();

    const { currentTime, hoverTime } = useTimeline();

    const currentTimestamp = currentTime.getTime();
    const hoverTimestamp = hoverTime?.getTime();

    const actions = data.commandChains.edges
        .map(({ node }) => node.commands.edges)
        .flat();

    const selectedActionIdx =
        selectedStepIdx !== -1
            ? getMostRecentIdx(actions, currentTimestamp)
            : null;

    const hoveredActionIdx =
        hoverTimestamp && selectedStepIdx !== -1
            ? getMostRecentIdx(actions, hoverTimestamp)
            : null;

    const hasFailed = data.status === 'FAILED';

    return (
        <>
            <StyledStepHeader
                key={`${data.id}`}
                isPreviousToSelected={isPreviousToSelected}
                isSelected={isStepSelected}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    seek(new Date(data.at));
                }}
                className={cx(styles.stepHeader, {
                    [styles.selected]: isStepSelected,
                    [styles.hovered]: isStepHovered,
                })}
            >
                <td className={styles.stepStatus}>
                    {hasFailed ? <StepFailIcon /> : <StepSuccessIcon />}
                </td>

                <td className={styles.stepName}>
                    <StepPrefix
                        type={
                            hasFailed ? EventType.CYPRESS_ERROR : EventType.STEP
                        }
                        hasFailed={hasFailed}
                        className={styles.stepPrefix}
                    >
                        {data.definition.keyword.toUpperCase()}
                    </StepPrefix>
                </td>

                <td
                    className={cx(
                        styles.stepContent,
                        hasFailed ? styles.error : styles.success
                    )}
                >
                    {data.definition.description.replaceAll('*', '')}
                </td>

                <td className={styles.stepAccordionIcon}>
                    <ChevronIcon direction={isStepSelected ? 'up' : 'down'} />
                </td>
            </StyledStepHeader>
            {isStepSelected && (
                <tr className={styles.expandedPanel}>
                    <td colSpan={4}>
                        {actions.map(({ node }, idx) => (
                            <ActionRecord
                                key={idx}
                                action={node}
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
