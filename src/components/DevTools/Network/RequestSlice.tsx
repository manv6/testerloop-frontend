import React from 'react';
import { useTimeline } from 'src/hooks/timeline';
import { datesToFraction } from 'src/utils/date';
import { EventType } from './types';

type Props = {
    event: EventType
    setSelectedEventId: (id: string) => void
};

export const RequestSlice: React.FC<Props> = (props) => {
    const {
        startTime,
        endTime,
        setHoverTimeFraction,
    } = useTimeline();

    return (
        <tr
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
            <td>
                {props.event.response.status}
            </td>
            <td>
                {props.event.request.method}
            </td>
            <td>
                {props.event.request.url}
            </td>
            <td>
                {JSON.stringify(props.event.request.queryString)}
            </td>
            <td>
                N/A
            </td>
            <td>
                {props.event.response.content.mimeType}
            </td>
            <td>
                {props.event.response._transferSize}
            </td>
            <td>
                {props.event.response.bodySize}
            </td>
        </tr>
    );
};
