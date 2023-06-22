import cx from 'classnames';
import React, { memo } from 'react';
import { useTimeline } from 'src/hooks/timeline';
import { StepRecord, StepsHeader } from './components';
import styles from './Steps.module.scss';
import * as formatter from 'src/utils/formatters';
import * as Expandable from 'src/components/Expandable';
import StepsFragment from './StepsFragment';
import { useFragment } from 'react-relay';
import { StepsFragment$key } from './__generated__/StepsFragment.graphql';
import getMostRecentIdx from 'src/utils/getMostRecentIdx';

type Props = {
    className?: string;
    fragmentKey: StepsFragment$key;
};

export type Step = formatter.FormattedSteps[0];
export type StepHierarchy = {
    step: Step;
    actions: Step[];
};

// eslint-disable-next-line react/display-name
export const Steps: React.FC<Props> = memo(({ className, fragmentKey }) => {
    const steps = useFragment(StepsFragment, fragmentKey);

    const { currentTime, hoverTime } = useTimeline();

    const currentTimestamp = currentTime.getTime();
    const hoverTimestamp = hoverTime?.getTime();

    const selectedStepIdx = getMostRecentIdx(
        steps.stepEvents.edges,
        currentTimestamp
    );
    const hoveredStepIdx = hoverTimestamp
        ? getMostRecentIdx(steps.stepEvents.edges, hoverTimestamp)
        : null;

    return (
        <Expandable.Child
            className={styles.steps}
            notExpandable={true}
            header={<StepsHeader headerTitle="Scenario" />}
            data-cy="steps-panel"
        >
            <table className={cx(className, styles.stepsTable)}>
                <tbody className={styles.stepsTableBody}>
                    {steps.stepEvents.edges.map(({ node }, idx) => {
                        const isStepSelected = selectedStepIdx === idx;
                        const isStepHovered = hoveredStepIdx === idx;
                        const isPreviousToSelected =
                            selectedStepIdx - 1 === idx;

                        return (
                            <StepRecord
                                key={idx}
                                isPreviousToSelected={isPreviousToSelected}
                                step={node}
                                isStepSelected={isStepSelected}
                                isStepHovered={isStepHovered}
                                selectedStepIdx={selectedStepIdx}
                            />
                        );
                    })}
                </tbody>
            </table>
        </Expandable.Child>
    );
});
