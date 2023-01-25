export const datesToFraction = (startTime: Date, endTime: Date, currentTime: Date): number => {
    if (startTime === endTime) {
        return 0;
    }
    return (currentTime.getTime() - startTime.getTime()) / (endTime.getTime() - startTime.getTime());
}

export const fractionToDate = (startTime: Date, endTime: Date, fraction: number): Date => {
    if (startTime === endTime) return startTime;
    const currentTime = new Date(startTime.getTime() + (endTime.getTime() - startTime.getTime()) * fraction);
    return currentTime;
}
