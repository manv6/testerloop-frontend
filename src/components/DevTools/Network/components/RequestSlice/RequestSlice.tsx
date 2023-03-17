import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useTimeline } from 'src/hooks/timeline';
import { datesToFraction } from 'src/utils/date';
import styles from './RequestSlice.module.scss';
import { FormattedNetworkEvents } from 'src/utils/formatters';
import { styled } from '@mui/material';
import NetworkProgress from '../NetworkProgress';
import { ProgressFilterType } from '../../NetworkPanel';
import entryStyles from 'src/components/common/styles/entryStyles';

interface StyledEntryProps {
    isSelected?: boolean;
    isHovered?: boolean;
    isError?: boolean;
    isClicked?: boolean;
    isPreviousToSelected?: boolean;
    isPreviousToClicked?: boolean;
}

const StyledEntry = styled('tr')<StyledEntryProps>((props) => {
    const clickedBorderColor = props.theme.palette.base[200];
    return {
        ...entryStyles(props),
        ...(props.isError && { color: props.theme.palette.status.error[200] }),
        ...(!props.isSelected &&
            !props.isClicked && {
                border: `1px solid ${props.theme.palette.base[300]}`,
            }),
        ...((props.isPreviousToClicked || props.isPreviousToSelected) && {
            borderBottom: 'none !important',
        }),
        ...(props.isClicked && {
            backgroundColor: props.theme.palette.base[300],
            borderBottom: `1px solid ${clickedBorderColor} !important`,
            borderTop: `1px solid ${clickedBorderColor} !important`,
        }),
    };
});

type Props = {
    idx: number;
    event: FormattedNetworkEvents[0];
    selectedEvent?: FormattedNetworkEvents[0];
    selectedEventIdx: number | null;
    setSelectedEventIdx: (idx: number) => void;
    isLastStartedEvent: boolean;
    lastStartedNetworkEventIdx: number;
};

type RequestSliceWithRefProps = Props & {
    ref: React.Ref<HTMLTableRowElement>;
};

// eslint-disable-next-line react/display-name
const RequestSlice = forwardRef<HTMLTableRowElement, RequestSliceWithRefProps>(
    (props, ref) => {
        const { startTime, endTime, currentTime, setHoverTimeFraction } =
            useTimeline();

        const truncateValue = (value: string, limit: number) => {
            if (value.length <= limit) return value;

            return `${value.slice(0, limit - 3)}...`;
        };

        const waterfallStartPositionPercentage =
            100 *
            datesToFraction(startTime, endTime, props.event.startedDateTime);

        const waterfallWidthPercentage =
            100 *
            (datesToFraction(startTime, endTime, props.event.endedDateTime) -
                datesToFraction(
                    startTime,
                    endTime,
                    props.event.startedDateTime
                ));

        const currentTimePercentage =
            100 * datesToFraction(startTime, endTime, currentTime);

        let progress = ProgressFilterType.NOT_STARTED;
        if (props.event.endedDateTime <= currentTime) {
            progress = ProgressFilterType.COMPLETED;
        } else if (props.event.startedDateTime <= currentTime) {
            progress = ProgressFilterType.IN_PROGRESS;
        }

        return (
            <StyledEntry
                isClicked={props.selectedEvent?.id === props.event.id}
                isError={props.event.response.status >= 400}
                isSelected={props.isLastStartedEvent}
                isPreviousToClicked={props.idx + 1 === props.selectedEventIdx}
                isPreviousToSelected={
                    props.idx + 1 === props.lastStartedNetworkEventIdx
                }
                ref={ref}
                onMouseMove={(ev) => {
                    ev.stopPropagation();
                }}
                onMouseEnter={(ev) => {
                    ev.stopPropagation();
                    setHoverTimeFraction(null);
                }}
                onClick={(ev) => {
                    ev.stopPropagation();
                    props.setSelectedEventIdx(props.idx);
                }}
                className={styles.trBody}
            >
                <td className={styles.td}>
                    <NetworkProgress progress={progress} />
                </td>
                <td className={styles.td}>
                    <span>{props.event.response.status}</span>
                </td>
                <td className={styles.td}>
                    <span>{props.event.request.method}</span>
                </td>
                <td className={cx(styles.td, styles.urlColumn)}>
                    <span>{truncateValue(props.event.request.url, 60)}</span>
                </td>
                <td className={styles.td}>
                    <span>
                        {truncateValue(
                            (props.event._initiator || '') +
                                (props.event._initiator_line
                                    ? `:${props.event._initiator_line}`
                                    : ''),
                            40
                        )}
                    </span>
                </td>
                <td className={styles.td}>
                    <span>{props.event.response.content.mimeType}</span>
                </td>
                <td className={styles.td}>
                    <span>{props.event.response._transferSize}</span>
                </td>
                <td className={styles.td}>
                    <span>{props.event.response.bodySize}</span>
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
            </StyledEntry>
        );
    }
);

export default RequestSlice;
