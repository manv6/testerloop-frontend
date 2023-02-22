export function fillObjFromType<T extends Record<string, string>, V>(
    t: T,
    fillWith: V
) {
    return Object.values(t).reduce(
        (obj, v) => ({
            ...obj,
            [v]: fillWith,
        }),
        {}
    ) as Record<T[keyof T], V>;
}
