import React, { forwardRef } from 'react';
import cx from 'classnames';
import { useTimeline } from 'src/hooks/timeline';
import { datesToFraction } from 'src/utils/date';
import styles from './RequestSlice.module.scss';
import { styled } from '@mui/material';
import NetworkProgress from '../NetworkProgress';
import { ProgressFilterType } from '../../NetworkPanel';
import entryStyles from 'src/components/common/styles/entryStyles';
import { NetworkPanelFragment$data } from 'src/components/DevTools/Network/__generated__/NetworkPanelFragment.graphql.js';

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

type EventNode =
    NetworkPanelFragment$data['searchedNetworkEvents']['edges'][0]['node'] & {
        __typename: 'HttpNetworkEvent';
    };

type Props = {
    idx: number;
    event: EventNode;
    selectedEvent?: EventNode;
    setSelectedEventIdx: (idx: number) => void;
    selectedEventIdx: number | null;
    isLastStartedEvent: boolean;
    lastStartedNetworkEventIdx: number;
};

type RequestSliceWithRefProps = Props & {
    ref: React.Ref<HTMLTableRowElement>;
};

// eslint-disable-next-line react/display-name
const RequestSlice = forwardRef<HTMLTableRowElement, RequestSliceWithRefProps>(
    (props, ref) => {
        const eventTimeAt = new Date(props.event.at);
        const eventTimeUntil = new Date(props.event.until);
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

        let progress = ProgressFilterType.NOT_STARTED;
        if (eventTimeUntil <= currentTime) {
            progress = ProgressFilterType.COMPLETED;
        } else if (eventTimeAt <= currentTime) {
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
                    <span>
                        {truncateValue(props.event.request.url.url, 60)}
                    </span>
                </td>
                <td className={styles.td}>
                    <span>
                        {truncateValue(
                            (props.event.initiator.origin || '') +
                                (props.event.initiator.lineNumber
                                    ? `:${props.event.initiator.lineNumber}`
                                    : ''),
                            40
                        )}
                    </span>
                </td>
                <td className={styles.td}>
                    <span>{props.event.response.body.mimeType}</span>
                </td>
                <td className={styles.td}>
                    <span>{props.event.response.transferSize}</span>
                </td>
                <td className={styles.td}>
                    <span>{props.event.response.body.size}</span>
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
