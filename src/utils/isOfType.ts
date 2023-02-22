// Checks an object's __typename property against a specified typename, narrowing its type
export const isOfType = <TValue extends string>(typename: TValue) =>
    <T extends { __typename: string }>(
        generic: T,
    ): generic is Extract<T, { __typename: TValue }> => {
        return generic.__typename === typename;
    };
