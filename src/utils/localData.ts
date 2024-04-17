export const fetchDataFromFile = async (fileKey: string): Promise<string> => {
    try {
        const response = await fetch(`/fixtures/${fileKey}`);
        if (!response.ok) {
            throw new Error('Failed to fetch: ' + response.statusText);
        }
        return await response.text();
    } catch (err) {
        console.error('Error fetching local file:', err);
        throw err;
    }
};

export const listFilesInFolder = async (): Promise<string[]> => {
    // For demo purposes, return a fixed list of files
    return ['job1.txt', 'job2.txt', 'job3.txt'];
};
