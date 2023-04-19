const getMostRecentIdx = (
    array: ReadonlyArray<{
        readonly node: {
            readonly at: string;
        };
    }>,
    timestamp: number
): number => {
    const nextStepIdx = array.findIndex(
        ({ node }) => new Date(node.at).getTime() > timestamp
    );
    return (nextStepIdx === -1 ? array.length : nextStepIdx) - 1;
};

export default getMostRecentIdx;
