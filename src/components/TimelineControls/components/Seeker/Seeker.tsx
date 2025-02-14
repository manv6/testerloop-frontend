import React, { startTransition, useEffect, useMemo, useState } from 'react';
import { EventType, TIMELINE_SVG_PX_WIDTH } from 'src/constants';
import { useTimeline } from 'src/hooks/timeline';
import { datesToElapsedTime, datesToFraction } from 'src/utils/date';
import styles from './Seeker.module.scss';
import { styled, Tooltip } from '@mui/material';
import MarkerTooltip from '../MarkerTooltip';
import fractionToPercentage from 'src/utils/fractionToPercentage';
import { SeekerFragment$key } from './__generated__/SeekerFragment.graphql';
import SeekerFragment from './SeekerFragment';
import { useRefetchableFragment } from 'react-relay';

const StyledFill = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.base[100],
    '&:after': {
        backgroundColor: theme.palette.base[100],
    },
}));

const StyledSeeker = styled('div')(({ theme }) => ({
    '&:before': {
        backgroundColor: theme.palette.base[300],
    },
}));

const StyledHover = styled('div')(({ theme }) => ({
    '&:after': {
        background: theme.palette.base[400],
        border: `2px solid ${theme.palette.base[100]}`,
    },
}));

interface StyledMarkerProps {
    size: number;
    type: EventType;
}

interface Event {
    id: string;
    type: EventType;
    start: Date;
    startFraction: number;
    name: string;
    message: string;
    hasFailed?: boolean;
}

type Events = {
    steps: Event[];
    successNetwork: Event[];
    failedNetwork: Event[];
    frameworkError: Event[];
};

const getMarkerSize = (type: EventType, size: number): string => {
    switch (type) {
        case EventType.NETWORK_SUCCESS:
            return '10px';
        case EventType.NETWORK_ERROR:
            return '12px';
        default:
            return `${size}px`;
    }
};

const StyledMarker = styled('div')<StyledMarkerProps>(({ size, type }) => ({
    svg: {
        height: getMarkerSize(type, size),
        width: getMarkerSize(type, size),
    },
}));

type Props = {
    getMarker: (ev: EventType) => JSX.Element;
    filters: { [k in EventType]: boolean };
    fragmentKey: SeekerFragment$key;
};

const Seeker: React.FC<Props> = ({ getMarker, filters, fragmentKey }) => {
    const [
        {
            screenshots,
            seekerCypressErrors,
            seekerNetworkErrors,
            seekerNetworkSuccesses,
            seekerSteps,
        },
        refetch,
    ] = useRefetchableFragment(SeekerFragment, fragmentKey);

    const {
        currentTimeFraction,
        hoverTimeFraction,
        hoverTime,
        setHoverTimeFraction,
        seekFraction,
        startTime,
        endTime,
    } = useTimeline();
    const [displayHoverTooltip, setDisplayHoverTooltip] = useState(true);

    useEffect(() => {
        startTransition(() => {
            refetch(filters);
        });
    }, [filters, refetch]);

    const events = useMemo(() => {
        return [
            ...(seekerCypressErrors?.edges ?? []),
            ...(seekerNetworkErrors?.edges ?? []),
            ...(seekerNetworkSuccesses?.edges ?? []),
            ...(seekerSteps?.edges ?? []),
        ].reduce(
            (acc: Events, { node }) => {
                if (node.__typename === 'StepEvent') {
                    return {
                        ...acc,
                        steps: [
                            ...acc.steps,
                            {
                                ...node,
                                id: node.id,
                                type: EventType.STEP,
                                start: new Date(node.at),
                                startFraction: datesToFraction(
                                    startTime,
                                    endTime,
                                    new Date(node.at)
                                ),
                                name: node.definition.keyword,
                                message: node.definition.description.replaceAll(
                                    '*',
                                    ''
                                ),
                                hasFailed: node.status === 'FAILED',
                            },
                        ],
                    };
                } else if (node.__typename === 'HttpNetworkEvent') {
                    if (new Date(node.until) > endTime) {
                        return acc;
                    }
                    const obj = {
                        ...node,
                        id: node.id,
                        start: new Date(node.at),
                        startFraction: datesToFraction(
                            startTime,
                            endTime,
                            new Date(node.until)
                        ),
                        name: `${node.request.method} ${node.response.status}`,
                        message: node.request.url.url,
                    };

                    let type;
                    if (node.response.status >= 400) {
                        type = EventType.NETWORK_ERROR;
                        return {
                            ...acc,
                            failedNetwork: [
                                ...acc.failedNetwork,
                                {
                                    ...obj,
                                    type,
                                },
                            ],
                        };
                    } else if (
                        node.response.status >= 200 &&
                        node.response.status < 300
                    ) {
                        type = EventType.NETWORK_SUCCESS;
                        return {
                            ...acc,
                            successNetwork: [
                                ...acc.successNetwork,
                                {
                                    ...obj,
                                    type,
                                },
                            ],
                        };
                    }
                } else if (node.__typename === 'CommandEvent') {
                    return {
                        ...acc,
                        frameworkError: [
                            ...acc.frameworkError,
                            {
                                ...node,
                                id: node.id,
                                type: EventType.CYPRESS_ERROR,
                                start: new Date(node.at),
                                startFraction: datesToFraction(
                                    startTime,
                                    endTime,
                                    new Date(node.at)
                                ),
                                name: node.name,
                                message: node.description.replaceAll('*', ''),
                                hasFailed: node.status === 'FAILED',
                            },
                        ],
                    };
                }

                return acc;
            },
            {
                steps: [],
                successNetwork: [],
                failedNetwork: [],
                frameworkError: [],
            }
        );
    }, [
        endTime,
        startTime,
        seekerCypressErrors,
        seekerNetworkErrors,
        seekerNetworkSuccesses,
        seekerSteps,
    ]);

    const markers = useMemo(() => Object.values(events).flat(), [events]);

    const screenshotsSource = useMemo(() => {
        return Object.fromEntries(
            screenshots.edges.map(({ node }) => [
                new Date(node.at).getTime(),
                node.url?.url,
            ])
        );
    }, [screenshots.edges]);

    useEffect(() => {
        // Preload all images so that the UI is responsive and we can support a low expiry time
        for (const url of Object.values(screenshotsSource)) {
            new Image().src = url;
        }
    }, [screenshotsSource]);

    const screenshot = useMemo(() => {
        const hoverTimestamp = hoverTime?.getTime();
        if (!hoverTimestamp) {
            return;
        }
        let closestTimestamp: number | undefined;

        for (const key in screenshotsSource) {
            const timestamp = parseInt(key);
            if (
                !closestTimestamp ||
                (timestamp < hoverTimestamp &&
                    hoverTimestamp - timestamp <
                        hoverTimestamp - closestTimestamp)
            ) {
                closestTimestamp = timestamp;
            }
        }

        if (!closestTimestamp) {
            return;
        }

        return screenshotsSource[closestTimestamp];
    }, [hoverTime, screenshotsSource]);

    const hoverPercentage = hoverTimeFraction
        ? fractionToPercentage(hoverTimeFraction)
        : undefined;

    const screenshotWidth = window.innerWidth / 3;
    const screenshotHeight = window.innerWidth / 4;

    return (
        <div className={styles.seekerContainer}>
            <StyledSeeker
                className={styles.seeker}
                onMouseMove={(ev) => {
                    const parentOffset =
                        ev.currentTarget.parentElement?.offsetLeft || 0;
                    const hoverTimeFraction =
                        (ev.clientX -
                            parentOffset -
                            ev.currentTarget.offsetLeft) /
                        ev.currentTarget.offsetWidth;

                    // Limit hover fraction between 0 and 1
                    const adjustedHoverTimeFraction = Math.min(
                        Math.max(hoverTimeFraction, 0),
                        1
                    );

                    setHoverTimeFraction(adjustedHoverTimeFraction);
                }}
                onMouseLeave={() => {
                    setHoverTimeFraction(null);
                }}
                onClick={(ev) => {
                    const parentOffset =
                        ev.currentTarget.parentElement?.offsetLeft || 0;
                    const timeFraction =
                        (ev.clientX -
                            parentOffset -
                            ev.currentTarget.offsetLeft) /
                        ev.currentTarget.offsetWidth;

                    // Limit fraction between 0 and 1
                    const adjustedTimeFraction = Math.min(
                        Math.max(timeFraction, 0),
                        1
                    );

                    seekFraction(adjustedTimeFraction);
                }}
            >
                {hoverPercentage ? (
                    <StyledHover
                        className={styles.hover}
                        style={{
                            right: `${hoverPercentage}%`,
                        }}
                    ></StyledHover>
                ) : null}
                {hoverPercentage && hoverTime && displayHoverTooltip ? (
                    <Tooltip
                        title={datesToElapsedTime(startTime, hoverTime)}
                        placement="top"
                        open
                        arrow
                    >
                        <div
                            className={styles.hoverCursor}
                            style={{
                                right: `${hoverPercentage}%`,
                            }}
                        ></div>
                    </Tooltip>
                ) : null}
                {hoverPercentage ? (
                    <div
                        className={styles.screenshotContainer}
                        style={{
                            right: `calc(${Math.max(
                                Math.min(hoverPercentage, 85),
                                15
                            )}% - ${screenshotWidth / 2}px)`,
                        }}
                    >
                        <img
                            src={screenshot}
                            alt="screenshot"
                            className={styles.screenshotImage}
                            style={{
                                width: `${screenshotWidth}px`,
                                height: `${screenshotHeight}px`,
                            }}
                        />
                    </div>
                ) : null}
                <StyledFill
                    className={styles.fill}
                    style={{
                        right: `${fractionToPercentage(currentTimeFraction)}%`,
                    }}
                ></StyledFill>
                <div
                    className={styles.cursor}
                    style={{
                        right: `${fractionToPercentage(currentTimeFraction)}%`,
                    }}
                ></div>
                {markers.map((marker: Event, i: number) => {
                    const svgSize = TIMELINE_SVG_PX_WIDTH;
                    return (
                        <Tooltip
                            key={i}
                            placement="top"
                            onOpen={() => setDisplayHoverTooltip(false)}
                            onClose={() => setDisplayHoverTooltip(true)}
                            arrow
                            title={
                                //eslint-disable-next-line
                                <MarkerTooltip
                                    type={marker.type}
                                    hasFailed={marker.hasFailed}
                                    prefix={
                                        marker.type === EventType.STEP
                                            ? marker.name.toUpperCase()
                                            : marker.name
                                    }
                                    message={
                                        marker.message.length > 100
                                            ? marker.message.slice(0, 100) +
                                              '...'
                                            : marker.message
                                    }
                                    time={datesToElapsedTime(
                                        startTime,
                                        marker.start
                                    )}
                                />
                            }
                        >
                            <StyledMarker
                                size={svgSize}
                                type={marker.type}
                                key={marker.id}
                                className={styles.marker}
                                style={{
                                    right: `calc(${fractionToPercentage(
                                        marker.startFraction
                                    )}% - ${svgSize / 2}px)`, // For the cursor to be centered on the svg
                                }}
                            >
                                {getMarker(marker.type)}
                            </StyledMarker>
                        </Tooltip>
                    );
                })}
            </StyledSeeker>
        </div>
    );
};

export default Seeker;
