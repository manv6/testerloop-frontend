import { useMemo } from 'react';
import { Step, StepHierarchy } from '../../Steps';

const useBuildStepsHierarchy = (steps: Step[]): StepHierarchy[] => {
    return useMemo(() => {
        const hierarchy: StepHierarchy[] = [];
        const hierarchyIndicesById: Record<string, number[]> = {};

        steps.forEach((step, idx) => {
            const parentId: string | undefined = step.options.group;

            // Filter top-level steps that are not a groupStart
            if (!parentId && !step.options.groupStart) return;

            const parentHierarchy = parentId
                ? hierarchyIndicesById[parentId]
                : [];

            const parentNode = parentHierarchy.reduce(
                (acc: StepHierarchy[], x: number) => acc[x].children,
                hierarchy);

            const newLength = parentNode.push({ step, children: []});
            hierarchyIndicesById[step.options.id] = [...parentHierarchy, newLength - 1];
        });

        return hierarchy;
    }, [steps]);
};

export default useBuildStepsHierarchy;