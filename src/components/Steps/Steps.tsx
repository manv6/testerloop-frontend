import cx from 'classnames';
import React from 'react';
import steps from 'src/data/steps';
import { useTimeline } from 'src/hooks/timeline';
import { StepRecord } from './components';
import { useHierarchizeStepsData } from './hooks';
import styles from './Steps.module.scss';

type Props = {
    className?: string;
};

// TODO: Define `Step` type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Step = any;
export type StepHierarchy = {
    step: Step;
    actions: Step[];
}

const getMostRecentStepIdx = (hierarchy: StepHierarchy[], timestamp: number): number => {
    const nextStepIdx = hierarchy.findIndex(({ step }) =>
        step.options.wallClockStartedAt.getTime() > timestamp);
    return (nextStepIdx === -1 ? hierarchy.length : nextStepIdx) - 1;
};

const getMostRecentActionIdx = (actions: Step[], timestamp: number): number => {
    const nextStepIdx = actions.findIndex((action) =>
        action.options.wallClockStartedAt.getTime() > timestamp);
    return (nextStepIdx === -1 ? actions.length : nextStepIdx) - 1;
};

export const Steps: React.FC<Props> = ({ className }) => {
    const {
        currentTime,
        hoverTime,
    } = useTimeline();

    const currentTimestamp = currentTime.getTime();
    const hoverTimestamp = hoverTime?.getTime();

    const stepsHierarchy = useHierarchizeStepsData(steps);

    const selectedStepIdx = getMostRecentStepIdx(stepsHierarchy, currentTimestamp);
    const hoveredStepIdx = hoverTimestamp ? getMostRecentStepIdx(stepsHierarchy, hoverTimestamp) : null;

    const selectedActionIdx = getMostRecentActionIdx(stepsHierarchy[selectedStepIdx].actions, currentTimestamp);
    const hoveredActionIdx = hoverTimestamp ? getMostRecentActionIdx(stepsHierarchy[selectedStepIdx].actions, hoverTimestamp) : null;

    return (
        <table className={cx(className, styles.stepsTable)}>
            <tbody className={styles.stepsTableBody}>
                {stepsHierarchy.map(({ step, actions }, idx) => {
                    const isStepSelected = selectedStepIdx === idx;
                    const isStepHovered = hoveredStepIdx === idx;

                    return (
                        <StepRecord
                            key={step.options.id}
                            step={step}
                            actions={actions}
                            isStepSelected={isStepSelected}
                            isStepHovered={isStepHovered}
                            selectedActionIdx={isStepSelected ? selectedActionIdx : null}
                            hoveredActionIdx={isStepSelected ? hoveredActionIdx : null}
                        />
                    );
                })}
            </tbody>
        </table>
    );
};
