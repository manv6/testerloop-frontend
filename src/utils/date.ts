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

export const datesToElapsedTime = (startTime: Date, currentTime: Date) => {
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

    let timestamp = [
        hours,
        String(minutes).padStart((hours ? 2 : 1), '0'),
        String(seconds).padStart(2, '0')
    ].filter(Boolean).join(':');

    timestamp += `.${String(ms).padStart(3, '0')}`;
    return timestamp;
};

export const formatDate = (dateString: string) =>  {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
};
