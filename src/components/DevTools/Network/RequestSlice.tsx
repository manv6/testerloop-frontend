import React from 'react';
import { useTimeline } from 'src/hooks/timeline';
import { datesToFraction } from 'src/utils/date';
import { EventType } from './types';
import styles from './Network.module.scss';

type Props = {
    event: EventType;
    setSelectedEventId: (id: string) => void;
};

export const RequestSlice: React.FC<Props> = (props) => {
    const { startTime, endTime, setHoverTimeFraction } = useTimeline();

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
            className={styles.networkTableRow}
        >
            <td>{props.event.response.status}</td>
            <td>{props.event.request.method}</td>
            <td className={styles.urlColumn}>{props.event.request.url}</td>
            <td>N/A</td>
            <td>{props.event.response.content.mimeType}</td>
            <td>{props.event.response._transferSize}</td>
            <td>{props.event.response.bodySize}</td>
            <td className={styles.waterfall}>
                <div
                    style={{
                        position: 'absolute',
                        left: `${
                            100 *
                            datesToFraction(
                                startTime,
                                endTime,
                                props.event.startedDateTime
                            )
                        }%`,
                        top: '50%',
                        height: '10px',
                        marginRight: '-50%',
                        width: `${100 * (
                            datesToFraction(
                                startTime,
                                endTime,
                                props.event.endedDateTime
                            ) -
                            datesToFraction(
                                startTime,
                                endTime,
                                props.event.startedDateTime
                            )
                        )}%`,
                        transform: 'translate(0, -50%)',
                        backgroundColor: 'red',
                    }}
                ></div>
            </td>
        </tr>
    );
};
