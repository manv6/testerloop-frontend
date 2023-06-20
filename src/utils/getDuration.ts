export const getDuration = (start: Date, end: Date): string => {
    const durationMs = end.getTime() - start.getTime();
    const seconds = Math.floor((durationMs / 1000) % 60);
    const minutes = Math.floor((durationMs / 1000 / 60) % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;
};
