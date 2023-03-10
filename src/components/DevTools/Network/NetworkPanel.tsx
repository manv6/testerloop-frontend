import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { RequestSlice, NetworkEventDetailPanel } from './components/';
import styles from './Network.module.scss';
import { useTimeline } from 'src/hooks/timeline';
import { Button, TextInput } from 'src/components/common';
import * as formatter from 'src/utils/formatters';
import networkEventData from 'src/data/networkEvents';
import * as Expandable from 'src/components/Expandable';
import { HeaderWithFilter } from 'src/components/common';
import { styled } from '@mui/material';

enum ResourceTypeFilterType {
    HTML = 'html',
    XHR = 'xhr',
    JS = 'js',
    CSS = 'css',
    IMAGE = 'image',
    FONT = 'font',
    OTHER = 'other',
}

const filterByResourceTypePredicate = (
    event: formatter.FormattedNetworkEvents[0],
    selectedOptions: Set<ResourceTypeFilterType>
) => {
    const resourceType = event._resourceType;

    const resourceTypeLookup = {
        [ResourceTypeFilterType.HTML]: 'document',
        [ResourceTypeFilterType.XHR]: 'xhr',
        [ResourceTypeFilterType.JS]: 'script',
        [ResourceTypeFilterType.CSS]: 'stylesheet',
        [ResourceTypeFilterType.IMAGE]: 'image',
        [ResourceTypeFilterType.FONT]: 'font',
        [ResourceTypeFilterType.OTHER]: 'other',
    };

    if (!selectedOptions.size) {
        return true;
    }

    return Array.from(selectedOptions).some(
        (resourceTypeFilter) =>
            resourceTypeLookup[resourceTypeFilter] === resourceType
    );
};

export enum ProgressFilterType {
    NOT_STARTED = 'Not Started',
    IN_PROGRESS = 'In Progress',
    COMPLETED = 'Completed',
}

interface StyledButtonProps {
    active: number;
    statetype?: string;
}

const StyledButton = styled(Button)<StyledButtonProps>(
    ({ theme, active, statetype }) => {
        let backgroundColor;
        let borderColor;

        switch (statetype) {
            case ProgressFilterType.IN_PROGRESS:
                backgroundColor = theme.palette.status.caution[500];
                borderColor = theme.palette.status.caution[400];
                break;
            case ProgressFilterType.COMPLETED:
                backgroundColor = theme.palette.status.success[500];
                borderColor = theme.palette.status.success[400];
                break;
            default:
                backgroundColor = theme.palette.base[300];
                borderColor = theme.palette.base[200];
                break;
        }

        return {
            ...(active
                ? {
                      backgroundColor,
                      borderColor,
                  }
                : {
                      backgroundColor: theme.palette.base[400],
                      borderColor: theme.palette.base[300],
                  }),
        };
    }
);

const StyledTh = styled('th')(({ theme }) => ({
    border: `1px solid ${theme.palette.base[300]}`,
    color: theme.palette.base[200],
}));

const filterByProgressPredicate = (
    event: formatter.FormattedNetworkEvents[0],
    selectedOptions: Set<ProgressFilterType>,
    currentTime: Date
) => {
    return Array.from(selectedOptions).some((filter) => {
        switch (filter) {
            case ProgressFilterType.COMPLETED:
                return event.endedDateTime <= currentTime;
            case ProgressFilterType.IN_PROGRESS:
                return (
                    event.startedDateTime <= currentTime &&
                    currentTime < event.endedDateTime
                );
            case ProgressFilterType.NOT_STARTED:
                return currentTime < event.startedDateTime;
            default:
                return false;
        }
    });
};

type Props = {
    // TODO: Update this with fragment key type
    fragmentKey: any; // eslint-disable-line
};

export const NetworkPanel: React.FC<Props> = () => {
    const data = { networkEvents: networkEventData.log.entries } as any; // eslint-disable-line
    const networkEvents = useMemo(
        () => formatter.formatNetworkEvents(data.networkEvents),
        [data.networkEvents]
    );

    const [showFilters, setShowFilters] = useState(true);
    const [selectedEventId, setSelectedEventId] = useState<null | string>(null);
    const [filterTerm, setFilterTerm] = useState<string>('');
    const [activeTabKey, setActiveTabKey] = useState<string | null>('headers');
    const [selectedProgressFilters, setSelectedProgressFilters] = useState<
        Set<ProgressFilterType>
    >(new Set(Object.values(ProgressFilterType)));
    const [selectedResourceTypeFilters, setSelectedResourceTypeFilters] =
        useState<Set<ResourceTypeFilterType>>(new Set());
    const { currentTime } = useTimeline();

    const selectedEvent = useMemo(
        () => networkEvents.find(({ id }) => id === selectedEventId),
        [networkEvents, selectedEventId]
    );

    const filteredEvents = useMemo(
        () =>
            networkEvents
                .filter((networkEvent) =>
                    filterTerm
                        ? networkEvent.request.url.includes(filterTerm)
                        : true
                )
                .filter((event) =>
                    filterByProgressPredicate(
                        event,
                        selectedProgressFilters,
                        currentTime
                    )
                )
                .filter((event) =>
                    filterByResourceTypePredicate(
                        event,
                        selectedResourceTypeFilters
                    )
                ),
        [
            networkEvents,
            filterTerm,
            currentTime,
            selectedProgressFilters,
            selectedResourceTypeFilters,
        ]
    );

    const onDetailPanelClose = useCallback(() => {
        setSelectedEventId(null);
    }, [setSelectedEventId]);

    const filterTermInputOnChange = useCallback(
        (ev: React.ChangeEvent<HTMLInputElement>) => {
            setFilterTerm(ev.target.value);
        },
        [setFilterTerm]
    );

    const onSelectTab = useCallback(
        (key: string | null) => {
            setActiveTabKey(key);
        },
        [setActiveTabKey]
    );

    const onChangeProgressFilter = useCallback(
        (value: ProgressFilterType) => {
            const newFilters = new Set(selectedProgressFilters);
            if (selectedProgressFilters.has(value)) {
                newFilters.delete(value);
            } else {
                newFilters.add(value);
            }

            setSelectedProgressFilters(newFilters);
        },
        [selectedProgressFilters, setSelectedProgressFilters]
    );

    const onChangeResourceTypeFilters = useCallback(
        (filter: ResourceTypeFilterType) => {
            const newFilters = new Set(selectedResourceTypeFilters);
            if (newFilters.has(filter)) {
                newFilters.delete(filter);
            } else {
                newFilters.add(filter);
            }
            setSelectedResourceTypeFilters(newFilters);
        },
        [selectedResourceTypeFilters]
    );

    const onChangeResourceTypeAllFilter = useCallback(() => {
        setSelectedResourceTypeFilters(new Set());
    }, [setSelectedResourceTypeFilters]);

    useEffect(() => {
        setSelectedEventId(null);
    }, [filterTerm]);

    useEffect(() => {
        setActiveTabKey('headers');
    }, [selectedEventId]);

    const lastStartedNetworkEvent = useMemo(
        () =>
            // Note that we assume networkEvents is already sorted by startedDateTime here
            networkEvents
                .filter((event) => currentTime > event.startedDateTime)
                .at(-1),

        [currentTime, networkEvents]
    );

    const header = useMemo(
        () => (
            <HeaderWithFilter
                title="Network"
                toggleFilter={() => setShowFilters(!showFilters)}
            />
        ),
        [showFilters]
    );

    return (
        <Expandable.Child className={styles.expandableNetwork} header={header}>
            <div className={styles.network}>
                <div className={styles.verticalStack}>
                    {showFilters && (
                        <div className={styles.filters}>
                            <div>
                                <label className={styles.labelWrapper}>
                                    <TextInput
                                        inputProps={{ value: filterTerm }}
                                        variant="outlined"
                                        onChange={filterTermInputOnChange}
                                        placeholder="Filter"
                                    ></TextInput>
                                </label>
                            </div>
                            <div className={styles.filterRow}>
                                <div className={styles.filterBlock}>
                                    <div className={styles.inlineWrapper}>
                                        {Object.values(ProgressFilterType).map(
                                            (value, idx) => (
                                                <StyledButton
                                                    key={idx}
                                                    size="small"
                                                    statetype={value}
                                                    onClick={() => {
                                                        onChangeProgressFilter(
                                                            value
                                                        );
                                                    }}
                                                    active={
                                                        selectedProgressFilters.has(
                                                            value
                                                        )
                                                            ? 1
                                                            : 0
                                                    }
                                                    className={
                                                        styles.toggleNetworkStateType
                                                    }
                                                >
                                                    {value}
                                                </StyledButton>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className={styles.filterBlock}>
                                    <StyledButton
                                        size="small"
                                        onClick={() => {
                                            onChangeResourceTypeAllFilter();
                                        }}
                                        active={
                                            !selectedResourceTypeFilters.size
                                                ? 1
                                                : 0
                                        }
                                        className={styles.resourceTypeFilter}
                                    >
                                        all
                                    </StyledButton>
                                    {Object.values(ResourceTypeFilterType).map(
                                        (value) => (
                                            <StyledButton
                                                key={`${value}`}
                                                size="small"
                                                onClick={() => {
                                                    onChangeResourceTypeFilters(
                                                        value
                                                    );
                                                }}
                                                active={
                                                    selectedResourceTypeFilters.has(
                                                        value
                                                    )
                                                        ? 1
                                                        : 0
                                                }
                                                className={
                                                    styles.resourceTypeFilter
                                                }
                                            >
                                                {value}
                                            </StyledButton>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className={styles.networkTablePanel}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <StyledTh className={styles.th}></StyledTh>
                                    <StyledTh className={styles.th}>
                                        Status
                                    </StyledTh>
                                    <StyledTh className={styles.th}>
                                        Method
                                    </StyledTh>
                                    <StyledTh className={styles.th}>
                                        Domain
                                    </StyledTh>
                                    <StyledTh className={styles.th}>
                                        Initiator
                                    </StyledTh>
                                    <StyledTh className={styles.th}>
                                        Type
                                    </StyledTh>
                                    <StyledTh className={styles.th}>
                                        Transferred
                                    </StyledTh>
                                    <StyledTh className={styles.th}>
                                        Size
                                    </StyledTh>
                                    <StyledTh className={styles.th}>
                                        Waterfall
                                    </StyledTh>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEvents.map((networkEvent, i) => (
                                    <RequestSlice
                                        key={networkEvent.id}
                                        event={networkEvent}
                                        setSelectedEventId={setSelectedEventId}
                                        isLastStartedEvent={
                                            lastStartedNetworkEvent?.id ===
                                            networkEvent.id
                                        }
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {selectedEvent && (
                    <NetworkEventDetailPanel
                        selectedEvent={selectedEvent}
                        activeTabKey={activeTabKey}
                        onSelectTab={onSelectTab}
                        onDetailPanelClose={onDetailPanelClose}
                    />
                )}
            </div>
        </Expandable.Child>
    );
};
