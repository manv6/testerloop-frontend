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
    for (let i = 0; i < hierarchy.length; ++i) {
        if (hierarchy[i].step.options.wallClockStartedAt.getTime() > timestamp) {
            return i - 1;
        }
    }

    return hierarchy.length - 1;
};

export const Steps: React.FC<Props> = ({ className }) => {
    const {
        currentTime,
        hoverTime,
    } = useTimeline();

    const stepsHierarchy = useHierarchizeStepsData(steps);

    const selectedStepIdx = getMostRecentStepIdx(stepsHierarchy, currentTime.getTime());
    const hoveredStepIdx = hoverTime ? getMostRecentStepIdx(stepsHierarchy, hoverTime.getTime()) : null;

    return (
        <table className={cx(className, styles.stepsTable)}>
            <tbody className={styles.stepsTableBody}>
                {stepsHierarchy.map(({ step, actions }, idx) => {
                    return (
                        <StepRecord
                            key={step.options.id}
                            step={step}
                            actions={actions}
                            isSelected={selectedStepIdx === idx}
                            isHovered={hoveredStepIdx === idx}
                        />
                    );
                })}
            </tbody>
        </table>
    );
};
