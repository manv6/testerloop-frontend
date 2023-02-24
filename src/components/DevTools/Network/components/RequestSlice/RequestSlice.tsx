import React from 'react';
import cx from 'classnames';
import { useTimeline } from 'src/hooks/timeline';
import { datesToFraction } from 'src/utils/date';
import styles from './RequestSlice.module.scss';
import { NetworkPanelFragment$data } from 'src/components/DevTools/Network/__generated__/NetworkPanelFragment.graphql.js';

type EventNode =
    NetworkPanelFragment$data['searchedNetworkEvents']['edges'][0]['node'] & {
        __typename: 'HttpNetworkEvent';
    };

type Props = {
    event: EventNode;
    setSelectedEventId: (id: string) => void;
    isLastStartedEvent: boolean;
};

const RequestSlice: React.FC<Props> = (props) => {
    const eventTimeAt = new Date(props.event.time.at);
    const eventTimeUntil = new Date(props.event.time.until);

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
        [styles.networkTableRowError]: props.event.response.status >= 400,
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
                props.setSelectedEventId(props.event.id);
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
                <span>{props.event.response.status}</span>
            </td>
            <td className={styles.td}>
                <span className={textColorStyle}>
                    {props.event.request.method}
                </span>
            </td>
            <td className={cx(styles.td, styles.urlColumn)}>
                <span className={textColorStyle}>
                    {truncateValue(props.event.request.url.url, 60)}
                </span>
            </td>
            <td className={styles.td}>
                <span className={textColorStyle}>
                    {truncateValue(
                        (props.event.initiator.origin || '') +
                            (props.event.initiator.lineNo
                                ? `:${props.event.initiator.lineNo}`
                                : ''),
                        40
                    )}
                </span>
            </td>
            <td className={styles.td}>
                <span className={textColorStyle}>
                    {props.event.response.body.mimeType}
                </span>
            </td>
            <td className={styles.td}>
                <span className={textColorStyle}>
                    {props.event.response.transferSize}
                </span>
            </td>
            <td className={styles.td}>
                <span className={textColorStyle}>
                    {props.event.response.body.size}
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
