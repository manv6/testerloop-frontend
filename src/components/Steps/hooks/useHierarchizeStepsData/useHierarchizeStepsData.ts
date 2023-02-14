import { useMemo } from 'react';
import { Step, StepHierarchy } from '../../Steps';

const useHierarchizeStepsData = (data: Step[]): StepHierarchy[] => {
    return useMemo(() => {
        const filteredData = data.filter(
            (e) => e.options.state !== 'pending'
        ).filter(
            (e) => !['log', 'task'].includes(e.options.name)
        );

        const steps = filteredData.filter(({ options }) => options.groupStart);
        const actions = filteredData.filter(({ options }) => !options.groupStart);

        const hierarchy: StepHierarchy[] = steps.map((step) => ({ step, actions: []}));
        const stepIdxById: Record<string, number> = steps.reduce((acc, step, idx) => ({
            ...acc, [step.options.id]: idx
        }), {});

        actions.forEach((action) => {
            const stepId = action.options.group;

            if (!stepId) {
                console.error('The following action does not have a linked step: ', action);
                return;
            }

            const stepIdx = stepIdxById[stepId];
            hierarchy[stepIdx].actions.push(action);
        });

        return hierarchy;
    }, [data]);
};

export default useHierarchizeStepsData;
