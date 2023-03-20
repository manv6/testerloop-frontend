import cx from 'classnames';
import React, { useMemo, memo } from 'react';
import { useTimeline } from 'src/hooks/timeline';
import { StepRecord, StepsHeader } from './components';
import { useHierarchizeStepsData } from './hooks';
import styles from './Steps.module.scss';
import * as formatter from 'src/utils/formatters';
import stepsData from 'src/data/steps';
import * as Expandable from 'src/components/Expandable';

type Props = {
    className?: string;
    // TODO: Update with fragment key type
    fragmentKey: any; // eslint-disable-line
};

export type Step = formatter.FormattedSteps[0];
export type StepHierarchy = {
    step: Step;
    actions: Step[];
};

const getMostRecentStepIdx = (
    hierarchy: StepHierarchy[],
    timestamp: number
): number => {
    const nextStepIdx = hierarchy.findIndex(
        ({ step }) => step.options.wallClockStartedAt.getTime() > timestamp
    );
    return (nextStepIdx === -1 ? hierarchy.length : nextStepIdx) - 1;
};

const getMostRecentActionIdx = (actions: Step[], timestamp: number): number => {
    const nextStepIdx = actions.findIndex(
        (action) => action.options.wallClockStartedAt.getTime() > timestamp
    );
    return (nextStepIdx === -1 ? actions.length : nextStepIdx) - 1;
};

// eslint-disable-next-line react/display-name
export const Steps: React.FC<Props> = memo(({ className }) => {
    const data = { steps: stepsData } as any; // eslint-disable-line
    const steps = useMemo(
        () => formatter.formatSteps(data.steps),
        [data.steps]
    );

    const { currentTime, hoverTime } = useTimeline();

    const currentTimestamp = currentTime.getTime();
    const hoverTimestamp = hoverTime?.getTime();

    const stepsHierarchy = useHierarchizeStepsData(steps);

    const selectedStepIdx = getMostRecentStepIdx(
        stepsHierarchy,
        currentTimestamp
    );
    const hoveredStepIdx = hoverTimestamp
        ? getMostRecentStepIdx(stepsHierarchy, hoverTimestamp)
        : null;

    const selectedActionIdx =
        selectedStepIdx !== -1
            ? getMostRecentActionIdx(
                  stepsHierarchy[selectedStepIdx].actions,
                  currentTimestamp
              )
            : null;

    const hoveredActionIdx =
        hoverTimestamp && selectedStepIdx !== -1
            ? getMostRecentActionIdx(
                  stepsHierarchy[selectedStepIdx].actions,
                  hoverTimestamp
              )
            : null;

    return (
        <Expandable.Child
            className={styles.steps}
            notExpandable={true}
            header={<StepsHeader headerTitle="Scenario" />}
        >
            <table className={cx(className, styles.stepsTable)}>
                <tbody className={styles.stepsTableBody}>
                    {stepsHierarchy.map(({ step, actions }, idx) => {
                        const isStepSelected = selectedStepIdx === idx;
                        const isStepHovered = hoveredStepIdx === idx;
                        const isPreviousToSelected =
                            selectedStepIdx - 1 === idx;

                        return (
                            <StepRecord
                                key={step.options.id}
                                isPreviousToSelected={isPreviousToSelected}
                                step={step}
                                actions={actions}
                                isStepSelected={isStepSelected}
                                isStepHovered={isStepHovered}
                                selectedActionIdx={
                                    isStepSelected ? selectedActionIdx : null
                                }
                                hoveredActionIdx={
                                    isStepHovered ? hoveredActionIdx : null
                                }
                            />
                        );
                    })}
                </tbody>
            </table>
        </Expandable.Child>
    );
});
