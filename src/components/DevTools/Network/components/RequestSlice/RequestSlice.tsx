import React from 'react';
import cx from 'classnames';
import { useTimeline } from 'src/hooks/timeline';
import { datesToFraction } from 'src/utils/date';
import styles from './RequestSlice.module.scss';
import { FormattedNetworkEvents } from 'src/utils/formatters';
import { styled } from '@mui/material';
import NetworkProgress from '../NetworkProgress';
import { ProgressFilterType } from '../../NetworkPanel';

type Props = {
    event: FormattedNetworkEvents[0];
    setSelectedEventId: (id: string) => void;
    isLastStartedEvent: boolean;
};

const StyledTd = styled('td')(({ theme }) => ({
    border: `1px solid ${theme.palette.base[300]}`,
}));

const RequestSlice: React.FC<Props> = (props) => {
    const { startTime, endTime, currentTime, setHoverTimeFraction } =
        useTimeline();

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

    const currentTimePercentage =
        100 * datesToFraction(startTime, endTime, currentTime);

    const textColorStyle = cx({
        [styles.networkTableRowError]: props.event.response.status >= 400,
    });
    const progressColorStyle = cx({
        [styles.progressStarted]:
            props.event.startedDateTime <= currentTime &&
            currentTime < props.event.endedDateTime,
        [styles.progressEnded]: props.event.endedDateTime <= currentTime,
    });
    let progress = ProgressFilterType.NOT_STARTED;
    if (props.event.endedDateTime <= currentTime) {
        progress = ProgressFilterType.COMPLETED;
    } else if (props.event.startedDateTime <= currentTime) {
        progress = ProgressFilterType.IN_PROGRESS;
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
            <StyledTd
                className={cx(styles.td, progressColorStyle, {
                    [styles.progressLastStartEvent]: props.isLastStartedEvent,
                })}
            >
                <NetworkProgress progress={progress} />
                {/* {progressText} {props.isLastStartedEvent && '*'} */}
            </StyledTd>
            <StyledTd className={cx(styles.td, textColorStyle)}>
                <span>{props.event.response.status}</span>
            </StyledTd>
            <StyledTd className={styles.td}>
                <span className={textColorStyle}>
                    {props.event.request.method}
                </span>
            </StyledTd>
            <StyledTd className={cx(styles.td, styles.urlColumn)}>
                <span className={textColorStyle}>
                    {truncateValue(props.event.request.url, 60)}
                </span>
            </StyledTd>
            <StyledTd className={styles.td}>
                <span className={textColorStyle}>
                    {truncateValue(
                        (props.event._initiator || '') +
                            (props.event._initiator_line
                                ? `:${props.event._initiator_line}`
                                : ''),
                        40
                    )}
                </span>
            </StyledTd>
            <StyledTd className={styles.td}>
                <span className={textColorStyle}>
                    {props.event.response.content.mimeType}
                </span>
            </StyledTd>
            <StyledTd className={styles.td}>
                <span className={textColorStyle}>
                    {props.event.response._transferSize}
                </span>
            </StyledTd>
            <StyledTd className={styles.td}>
                <span className={textColorStyle}>
                    {props.event.response.bodySize}
                </span>
            </StyledTd>
            <StyledTd className={cx(styles.td, styles.waterfall)}>
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
            </StyledTd>
        </tr>
    );
};

export default RequestSlice;
