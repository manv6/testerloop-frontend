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

    const textColorStyle =
        props.event.response.status >= 400 ? styles.networkTableRowError : '';

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
            <td>
                <span className={textColorStyle}>
                    {props.event.response.status}
                </span>
            </td>
            <td>
                <span className={textColorStyle}>
                    {props.event.request.method}
                </span>
            </td>
            <td className={styles.urlColumn}>
                <span className={textColorStyle}>
                    {props.event.request.url}
                </span>
            </td>
            <td>
                <span className={textColorStyle}>
                    {(props.event._initiator || '') +
                        (props.event._initiator_line
                            ? `:${props.event._initiator_line}`
                            : '')}
                </span>
            </td>
            <td>
                <span className={textColorStyle}>
                    {props.event.response.content.mimeType}
                </span>
            </td>
            <td>
                <span className={textColorStyle}>
                    {props.event.response._transferSize}
                </span>
            </td>
            <td>
                <span className={textColorStyle}>
                    {props.event.response.bodySize}
                </span>
            </td>
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
                        width: `${
                            100 *
                            (datesToFraction(
                                startTime,
                                endTime,
                                props.event.endedDateTime
                            ) -
                                datesToFraction(
                                    startTime,
                                    endTime,
                                    props.event.startedDateTime
                                ))
                        }%`,
                        transform: 'translate(0, -50%)',
                        backgroundColor: 'red',
                    }}
                ></div>
            </td>
        </tr>
    );
};
