import { createContext } from 'react';
import { EventType } from 'src/constants';

export type TimelineContextValue = {
    isPlaying: boolean
    setPlaying: (playing: boolean) => void,
    // Timestamps for when this run began and ended
    startTime: Date
    endTime: Date
    // Where the timeline has been "seeked" to
    currentTime: Date
    // Every computed Date field has a fractional counterpart, i.e.
    // currentTime (Date) has the currentTimeFraction (number) counterpart
    // which represents that time's offset (in percentage) from the start of the run.
    currentTimeFraction: number
    hoverTime: Date | null
    hoverTimeFraction: number | null
    setHoverTime: (time: Date | null) => void,
    setHoverTimeFraction: (timeFraction: number | null) => void,
    seek: (time: Date) => void,
    seekFraction: (timeFraction: number) => void,
    filters: { [k in EventType]: boolean }
    setFilters: (filters: { [k in EventType]: boolean }) => void,
};

export const TimelineContext = createContext<TimelineContextValue>({
    isPlaying: false,
    setPlaying: () => {},
    startTime: new Date(),
    endTime: new Date(),
    currentTime: new Date(),
    currentTimeFraction: 0,
    hoverTime: null,
    hoverTimeFraction: null,
    setHoverTime: () => {},
    setHoverTimeFraction: () => {},
    seek: () => {},
    seekFraction: () => {},
    filters: {} as TimelineContextValue['filters'],
    setFilters: () => {},
});
