export const datesToFraction = (startTime: Date, endTime: Date, currentTime: Date): number => {
    if (startTime === endTime) {
        return 0;
    }
    return (currentTime.getTime() - startTime.getTime()) / (endTime.getTime() - startTime.getTime());
};

export const fractionToDate = (startTime: Date, endTime: Date, fraction: number): Date => {
    if (startTime === endTime) return startTime;
    const currentTime = new Date(startTime.getTime() + (endTime.getTime() - startTime.getTime()) * fraction);
    return currentTime;
};

export const datesDelta = (startTime: Date, currentTime: Date) => {
    let ms = currentTime.getTime() - startTime.getTime();

    if(ms < 0){
        return 0;
    }

    const hours = Math.floor(ms / (3600 * 1000) );
    ms = ms % (3600 * 1000);

    const minutes = Math.floor( ms / (60 * 1000) );
    ms = ms % (60 * 1000);

    const seconds = Math.floor( ms / (1000) );
    ms = ms % 1000;

    const format = (t: number, isLast?: boolean) => t ? t + (isLast? '' : ':') : '';

    return `${format(hours)}${format(minutes)}${format(seconds)}${format(ms, true)}`;
};