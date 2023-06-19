import React, {
    useCallback,
    useEffect,
    useMemo,
    useState,
    useRef,
    startTransition,
} from 'react';
import { useRefetchableFragment } from 'react-relay';

import type { NetworkPanelFragment$key } from './__generated__/NetworkPanelFragment.graphql';
import {
    NetworkSlice,
    NetworkEventDetailPanel,
    NetworkEventDetailPanelWrapper,
} from './components/';
import styles from './Network.module.scss';
import { useTimeline } from 'src/hooks/timeline';
import { Button, ButtonGroup, TextInput } from 'src/components/common';
import * as formatter from 'src/utils/formatters';
import * as Expandable from 'src/components/Expandable';
import { HeaderWithFilter } from 'src/components/common';
import { styled } from '@mui/material';
import useScrollToChild from 'src/hooks/scrollTo';
import NetworkPanelFragment from './NetworkPanelFragment';
import { useDebounce } from 'use-debounce';

enum ResourceTypeFilterType {
    HTML = 'html',
    XHR = 'xhr',
    JS = 'js',
    CSS = 'css',
    IMAGE = 'image',
    FONT = 'font',
    OTHER = 'other',
}

const resourceTypeMap = {
    [ResourceTypeFilterType.HTML]: 'document',
    [ResourceTypeFilterType.XHR]: 'xhr',
    [ResourceTypeFilterType.JS]: 'script',
    [ResourceTypeFilterType.CSS]: 'stylesheet',
    [ResourceTypeFilterType.IMAGE]: 'image',
    [ResourceTypeFilterType.FONT]: 'font',
    [ResourceTypeFilterType.OTHER]: 'other',
};

export enum TabLabel {
    REQUEST = 'request',
    RESPONSE = 'response',
}

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
                borderColor = theme.palette.status.caution[300];
                break;
            case ProgressFilterType.COMPLETED:
                backgroundColor = theme.palette.status.success[500];
                borderColor = theme.palette.status.success[300];
                break;
            default:
                backgroundColor = theme.palette.base[300];
                borderColor = theme.palette.base[200];
                break;
        }

        return {
            '&&': {
                backgroundColor: theme.palette.base[400],
                borderColor: theme.palette.base[300],
                ...(active
                    ? {
                          backgroundColor,
                          borderColor,
                          '&:not(:last-child)': {
                              '.group > &': {
                                  boxShadow: `inset -1px 0 0 ${borderColor}`,
                              },
                          },
                      }
                    : {}),
            },
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
                return event.until <= currentTime;
            case ProgressFilterType.IN_PROGRESS:
                return event.at <= currentTime && currentTime < event.until;
            case ProgressFilterType.NOT_STARTED:
                return currentTime < event.at;
            default:
                return false;
        }
    });
};

type Props = {
    fragmentKey: NetworkPanelFragment$key;
};

export const NetworkPanel: React.FC<Props> = ({ fragmentKey }) => {
    const [data, refetch] = useRefetchableFragment(
        NetworkPanelFragment,
        fragmentKey
    );

    const networkEvents = useMemo(
        () => formatter.formatNetworkEvents(data),
        [data]
    );

    const [showFilters, setShowFilters] = useState(true);
    const [selectedEventIdx, setSelectedEventIdx] = useState<null | number>(
        null
    );
    const [filterTerm, setFilterTerm] = useState<string | null>(null);
    const debouncedResult = useDebounce(filterTerm, 200);
    const debouncedTerm = debouncedResult[0];

    const [activeTab, setActiveTab] = useState<number | null>(0);
    const [selectedProgressFilters, setSelectedProgressFilters] = useState<
        Set<ProgressFilterType>
    >(new Set(Object.values(ProgressFilterType)));
    const [selectedResourceTypeFilters, setSelectedResourceTypeFilters] =
        useState<Set<ResourceTypeFilterType> | null>(null);
    const { currentTime } = useTimeline();

    useEffect(() => {
        if (debouncedTerm === null && selectedResourceTypeFilters === null) {
            return;
        }
        const resourceType = selectedResourceTypeFilters?.size
            ? Array.from(selectedResourceTypeFilters).map((r) =>
                  resourceTypeMap[r].toUpperCase()
              )
            : null;

        startTransition(() => {
            refetch({
                urlSearch: debouncedTerm,
                resourceType,
            });
        });
    }, [debouncedTerm, refetch, selectedResourceTypeFilters]);

    const filteredEvents = useMemo(
        () =>
            networkEvents.filter((event) =>
                filterByProgressPredicate(
                    event,
                    selectedProgressFilters,
                    currentTime
                )
            ),
        [networkEvents, currentTime, selectedProgressFilters]
    );

    const selectedEvent =
        selectedEventIdx !== null
            ? filteredEvents[selectedEventIdx]
            : undefined;

    const onDetailPanelClose = useCallback(() => {
        setSelectedEventIdx(null);
    }, [setSelectedEventIdx]);

    const filterTermInputOnChange = useCallback(
        (ev: React.ChangeEvent<HTMLInputElement>) => {
            setFilterTerm(ev.target.value);
        },
        [setFilterTerm]
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
        setSelectedEventIdx(null);
    }, [filterTerm]);

    useEffect(() => {
        setActiveTab(0);
    }, [selectedEventIdx]);

    const lastStartedNetworkEventIdx = useMemo(() => {
        // Note that we assume networkEvents is already sorted by startedDateTime here
        return networkEvents.reduceRight((acc, event, index) => {
            if (acc !== -1) {
                return acc;
            }
            return currentTime > event.at ? index : acc;
        }, -1);
    }, [currentTime, networkEvents]);

    const lastStartedNetworkEvent =
        lastStartedNetworkEventIdx !== -1
            ? networkEvents[lastStartedNetworkEventIdx]
            : undefined;

    const header = useMemo(
        () => (
            <HeaderWithFilter
                isFilterOn={showFilters}
                title="Network"
                toggleFilter={() => setShowFilters(!showFilters)}
            />
        ),
        [showFilters]
    );

    const containerRef = useRef<HTMLDivElement>(null);
    const networkEntryRef = useRef<HTMLTableRowElement>(null);

    useScrollToChild({
        childRef: networkEntryRef,
        containerRef,
        dependencies: [lastStartedNetworkEvent?.id],
    });

    const fallback = useMemo(
        () => (
            <NetworkEventDetailPanelWrapper
                className={styles.eventPanelLoading}
            >
                Loading...
            </NetworkEventDetailPanelWrapper>
        ),
        []
    );

    return (
        <Expandable.Child
            className={styles.expandableNetwork}
            header={header}
            notExpandable={!!selectedEvent}
        >
            <div className={styles.network}>
                {showFilters && (
                    <div className={styles.filters}>
                        <div>
                            <label className={styles.labelWrapper}>
                                <TextInput
                                    inputProps={{ value: filterTerm ?? '' }}
                                    variant="outlined"
                                    onChange={filterTermInputOnChange}
                                    width="100%"
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
                                <ButtonGroup className="group">
                                    <StyledButton
                                        size="small"
                                        onClick={() => {
                                            onChangeResourceTypeAllFilter();
                                        }}
                                        active={
                                            !selectedResourceTypeFilters?.size
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
                                                    selectedResourceTypeFilters?.has(
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
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={containerRef} className={styles.networkTablePanel}>
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
                                <StyledTh className={styles.th}>Type</StyledTh>
                                <StyledTh className={styles.th}>
                                    Transferred
                                </StyledTh>
                                <StyledTh className={styles.th}>Size</StyledTh>
                                <StyledTh className={styles.th}>
                                    Waterfall
                                </StyledTh>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEvents.map((networkEvent, i) => (
                                <NetworkSlice
                                    idx={i}
                                    ref={
                                        lastStartedNetworkEvent?.id ===
                                        networkEvent.id
                                            ? networkEntryRef
                                            : null
                                    }
                                    key={networkEvent.id}
                                    event={networkEvent}
                                    setSelectedEventIdx={setSelectedEventIdx}
                                    selectedEventIdx={selectedEventIdx}
                                    selectedEventId={selectedEvent?.id}
                                    lastStartedNetworkEventIdx={
                                        lastStartedNetworkEventIdx
                                    }
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
                <React.Suspense fallback={fallback}>
                    <NetworkEventDetailPanel
                        selectedEventId={selectedEvent.id}
                        activeTab={activeTab}
                        onSelectTab={(value: number) => setActiveTab(value)}
                        onDetailPanelClose={onDetailPanelClose}
                    />
                </React.Suspense>
            )}
        </Expandable.Child>
    );
};
