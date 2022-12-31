export const datesToFraction = (startTime: Date, endTime: Date, currentTime: Date): number => {
    if (startTime === endTime) {
        return 0;
    }
    return (currentTime.getTime() - startTime.getTime()) / (endTime.getTime() - startTime.getTime());
}
