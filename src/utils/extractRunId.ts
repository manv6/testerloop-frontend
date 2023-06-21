export const extractRunId = (encodedId: string) => {
    const decodedId = window.atob(encodedId);
    const parts = decodedId.split('/');
    if (parts.length < 2 || parts[0] !== 'TestExecution')
        throw new Error('Invalid id');
    return parts[1];
};
