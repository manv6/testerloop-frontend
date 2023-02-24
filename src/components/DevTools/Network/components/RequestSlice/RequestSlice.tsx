import React from 'react';
import cx from 'classnames';
import { useTimeline } from 'src/hooks/timeline';
import { datesToFraction } from 'src/utils/date';
import styles from './RequestSlice.module.scss';
import RequestSliceFragment from './RequestSliceFragment';
import { RequestSliceFragment$key } from './__generated__/RequestSliceFragment.graphql';
import { useFragment } from 'react-relay';

type Props = {
    event: RequestSliceFragment$key;
    setSelectedEventId: (id: string) => void;
    isLastStartedEvent: boolean;
};

const RequestSlice: React.FC<Props> = (props) => {
    const eventData = useFragment(RequestSliceFragment, props.event);

    const eventTimeAt = new Date(eventData.time.at);
    const eventTimeUntil = new Date(eventData.time.until);

    const { startTime, endTime, currentTime, setHoverTimeFraction } =
        useTimeline();

    const truncateValue = (value: string, limit: number) => {
        if (value.length <= limit) return value;

        return `${value.slice(0, limit - 3)}...`;
    };

    const waterfallStartPositionPercentage =
        100 * datesToFraction(startTime, endTime, eventTimeAt);

    const waterfallWidthPercentage =
        100 *
        (datesToFraction(startTime, endTime, eventTimeUntil) -
            datesToFraction(startTime, endTime, eventTimeAt));

    const currentTimePercentage =
        100 * datesToFraction(startTime, endTime, currentTime);

    const textColorStyle = cx({
        [styles.networkTableRowError]: eventData.response.status >= 400,
    });
    const progressColorStyle = cx({
        [styles.progressStarted]:
            eventTimeAt <= currentTime && currentTime < eventTimeUntil,
        [styles.progressEnded]: eventTimeUntil <= currentTime,
    });
    let progressText = null;
    if (eventTimeUntil <= currentTime) {
        progressText = 'completed';
    } else if (eventTimeAt <= currentTime) {
        progressText = 'started';
    }

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
                props.setSelectedEventId(eventData.id);
            }}
            className={styles.trBody}
        >
            <td
                className={cx(styles.td, progressColorStyle, {
                    [styles.progressLastStartEvent]: props.isLastStartedEvent,
                })}
            >
                {progressText} {props.isLastStartedEvent && '*'}
            </td>
            <td className={cx(styles.td, textColorStyle)}>
                <span>{eventData.response.status}</span>
            </td>
            <td className={styles.td}>
                <span className={textColorStyle}>
                    {eventData.request.method}
                </span>
            </td>
            <td className={cx(styles.td, styles.urlColumn)}>
                <span className={textColorStyle}>
                    {truncateValue(eventData.request.url.url, 60)}
                </span>
            </td>
            <td className={styles.td}>
                <span className={textColorStyle}>
                    {truncateValue(
                        (eventData.initiator.origin || '') +
                            (eventData.initiator.lineNo
                                ? `:${eventData.initiator.lineNo}`
                                : ''),
                        40
                    )}
                </span>
            </td>
            <td className={styles.td}>
                <span className={textColorStyle}>
                    {eventData.response.body.mimeType}
                </span>
            </td>
            <td className={styles.td}>
                <span className={textColorStyle}>
                    {eventData.response.transferSize}
                </span>
            </td>
            <td className={styles.td}>
                <span className={textColorStyle}>
                    {eventData.response.body.size}
                </span>
            </td>
            <td className={cx(styles.td, styles.waterfall)}>
                <div
                    className={styles.waterfallBar}
                    style={{
                        left: `${waterfallStartPositionPercentage}%`,
                        width: `${waterfallWidthPercentage}%`,
                    }}
                ></div>
                <div
                    className={styles.waterfallProgressLine}
                    style={{ left: `${currentTimePercentage}%` }}
                />
            </td>
        </tr>
    );
};

export default RequestSlice;
