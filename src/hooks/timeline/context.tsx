import { createContext } from "react"

export type TimelineContextValue = {
    currentTime: Date
    currentTimeFraction: number
    hoverTime: Date | null
    hoverTimeFraction: number | null
    startTime: Date
    endTime: Date
    isPlaying: boolean,
    setPlaying: (playing: boolean) => void,
    setHoverTime: (time: Date | null) => void,
    setHoverTimeFraction: (timeFraction: number | null) => void,
    seek: (time: Date) => void,
    seekFraction: (timeFraction: number) => void,
}

export const TimelineContext = createContext<TimelineContextValue>({
    currentTime: new Date(),
    currentTimeFraction: 0,
    hoverTime: null,
    hoverTimeFraction: null,
    startTime: new Date(),
    endTime: new Date(),
    isPlaying: false,
    setPlaying: () => {},
    setHoverTime: () => {},
    setHoverTimeFraction: () => {},
    seek: () => {},
    seekFraction: () => {},
});
