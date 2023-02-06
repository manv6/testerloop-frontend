import React from 'react';
import { useTimeline } from 'src/hooks/timeline';
import { datesToFraction } from 'src/utils/date';
import { EventType } from '../../types';
import styles from './RequestSlice.module.scss';

type Props = {
    event: EventType;
    setSelectedEventId: (id: string) => void;
};

const RequestSlice: React.FC<Props> = (props) => {
    const { startTime, endTime, setHoverTimeFraction } = useTimeline();

    const textColorStyle =
        props.event.response.status >= 400 ? styles.networkTableRowError : '';

    const truncateValue = (value: string, limit: number) => {
        if (value.length <= limit) return value;

        return `${value.slice(0, limit - 3)}...`;
    };

    const waterfallStartPositionPercentage =
        100 * datesToFraction(startTime, endTime, props.event.startedDateTime);

    const waterfallWidthPercentage =
        100 *
        (datesToFraction(startTime, endTime, props.event.endedDateTime) -
            datesToFraction(startTime, endTime, props.event.startedDateTime));

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
                    {truncateValue(props.event.request.url, 60)}
                </span>
            </td>
            <td>
                <span className={textColorStyle}>
                    {truncateValue(
                        (props.event._initiator || '') +
                            (props.event._initiator_line
                                ? `:${props.event._initiator_line}`
                                : ''),
                        40
                    )}
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
                <div className={styles.waterfallBar}
                    style={{
                        left: `${waterfallStartPositionPercentage}%`,
                        width: `${waterfallWidthPercentage}%`,
                    }}
                ></div>
            </td>
        </tr>
    );
};

export default RequestSlice;
