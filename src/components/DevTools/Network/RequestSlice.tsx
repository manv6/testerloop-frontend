import React from 'react';
import { useTimeline } from 'src/hooks/timeline';
import { datesToFraction } from 'src/utils/date';

type Props = {
    event: {
        id: string
        startedDateTime: Date
        endedDateTime: Date
        request: {
            url: string
        }
    }
    setSelectedEventId: (id: string) => void
};

export const RequestSlice: React.FC<Props> = (props) => {
    const {
        startTime,
        endTime,
        setHoverTimeFraction,
    } = useTimeline();

    return (
        <div
            style={{
                border: '1px solid black',
                background: 'white',
                position: 'absolute',
                left: `${100 * datesToFraction(startTime, endTime, props.event.startedDateTime)}%`,
                top: 0,
                right: `${100 - 100 * datesToFraction(startTime, endTime, props.event.endedDateTime)}%`,
                bottom: 0,
                overflow: 'hidden',
                cursor: 'pointer',
            }}
            onMouseMove={(ev) => {
                ev.stopPropagation();
            }}
            onMouseEnter={(ev) => {
                ev.stopPropagation();
                setHoverTimeFraction(null);
            }}
            onClick={(ev) => {
                ev.stopPropagation();
                props.setSelectedEventId(props.event.id);
            }}
        >
            {props.event.request.url}
        </div>
    );
};
