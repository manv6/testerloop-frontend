import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { EventType } from 'src/constants';
import { datesToFraction } from 'src/utils/date';
import { fillObjFromType } from 'src/utils/fillObjFromType';
import { TimelineContext, TimelineContextValue } from './context';

type Props = React.PropsWithChildren<{
    startTime: Date;
    endTime: Date;
}>;

export const TimelineProvider: React.FC<Props> = (props) => {
    const { startTime, endTime } = props;

    const [currentTime, seek] = useState(startTime);
    const [speed, setSpeed] = useState(1);
    useEffect(() => {
        seek((currentTime) => {
            if (currentTime < startTime) {
                return startTime;
            }
            if (currentTime > endTime) {
                return endTime;
            }
            return currentTime;
        });
    }, [startTime, endTime]);
    const currentTimeFraction = useMemo(
        () => datesToFraction(startTime, endTime, currentTime),
        [startTime, currentTime, endTime]
    );
    const seekFraction = useCallback(
        (fraction: number) =>
            seek(
                new Date(
                    fraction * (endTime.getTime() - startTime.getTime()) +
                        startTime.getTime()
                )
            ),
        [startTime, endTime, seek]
    );

    const [isPlaying, setPlaying] = useState(false);
    useEffect(() => {
        if (isPlaying) {
            let lastTime = Date.now();
            const interval = setInterval(() => {
                const nextTime = Date.now();
                const deltaTime = nextTime - lastTime;
                lastTime = nextTime;
                seek((currentTime) => {
                    const target = new Date(
                        currentTime.getTime() + deltaTime * speed
                    );
                    if (target > endTime) {
                        setPlaying(false);
                        return endTime;
                    }
                    return target;
                });
            }, 20);

            return () => clearInterval(interval);
        }
    }, [isPlaying, setPlaying, seek, endTime, speed]);

    const [hoverTime, setHoverTime] = useState<Date | null>(null);
    const hoverTimeFraction = useMemo(() => {
        if (hoverTime === null) {
            return null;
        }
        if (startTime === endTime) {
            return 0;
        }
        return (
            (hoverTime.getTime() - startTime.getTime()) /
            (endTime.getTime() - startTime.getTime())
        );
    }, [startTime, hoverTime, endTime]);
    const setHoverTimeFraction = useCallback(
        (fraction: number | null) => {
            if (fraction === null) {
                setHoverTime(null);
                return;
            }
            setHoverTime(
                new Date(
                    fraction * (endTime.getTime() - startTime.getTime()) +
                        startTime.getTime()
                )
            );
        },
        [startTime, endTime, setHoverTime]
    );

    const [filters, setFilters] = useState<TimelineContextValue['filters']>({
        ...fillObjFromType(EventType, true),
        [EventType.NETWORK_SUCCESS]: false,
    });

    const contextValue = {
        currentTime,
        currentTimeFraction,
        hoverTime,
        hoverTimeFraction,
        startTime,
        endTime,
        seek,
        seekFraction,
        setHoverTime,
        setHoverTimeFraction,
        isPlaying,
        setPlaying,
        filters,
        setFilters,
        speed,
        setSpeed,
    };

    return (
        <TimelineContext.Provider value={contextValue}>
            {props.children}
        </TimelineContext.Provider>
    );
};
