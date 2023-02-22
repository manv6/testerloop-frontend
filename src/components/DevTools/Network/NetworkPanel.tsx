// TODO: Remove this check once temp data is removed!!
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import cx from 'classnames';

import { RequestSlice, NetworkEventDetailPanel } from './components/';
import styles from './Network.module.scss';
import { useTimeline } from 'src/hooks/timeline';
import { TextInput } from 'src/components/common/TextInput';
import * as formatter from 'src/utils/formatters';
import networkEventData from 'src/data/networkEvents';

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

enum ProgressFilterType {
    COMPLETED = 'completed',
    STARTED = 'started',
    NOT_STARTED = 'not started',
}

const filterByProgressPredicate = (
    event: formatter.FormattedNetworkEvents[0],
    selectedOptions: Set<ProgressFilterType>,
    currentTime: Date
) => {
    return Array.from(selectedOptions).some((filter) => {
        switch (filter) {
            case ProgressFilterType.COMPLETED:
                return event.endedDateTime <= currentTime;
            case ProgressFilterType.STARTED:
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
        (ev: React.ChangeEvent<HTMLInputElement>) => {
            const newFilters = new Set(selectedProgressFilters);
            const newValue = ev.target.name as ProgressFilterType;
            if (ev.target.checked) {
                newFilters.add(newValue);
            } else {
                newFilters.delete(newValue);
            }

            setSelectedProgressFilters(newFilters);
        },
        [selectedProgressFilters, setSelectedProgressFilters]
    );

    const onChangeResourceTypeFilters =
        (filter: ResourceTypeFilterType) => () => {
            const newFilters = new Set(selectedResourceTypeFilters);
            if (newFilters.has(filter)) {
                newFilters.delete(filter);
            } else {
                newFilters.add(filter);
            }
            setSelectedResourceTypeFilters(newFilters);
        };

    const onChangeResourceTypeAllFilter = useCallback(() => {
        setSelectedResourceTypeFilters(new Set());
    }, [selectedResourceTypeFilters, setSelectedResourceTypeFilters]);

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

    return (
        <div className={styles.network}>
            <div className={styles.verticalStack}>
                <div>
                    <label className={styles.labelWrapper}>
                        <span>Filter:</span>
                        <TextInput
                            value={filterTerm}
                            onChange={filterTermInputOnChange}
                            placeholder="Filter"
                        ></TextInput>
                    </label>
                </div>
                <div>
                    <div className={styles.filterBlock}>
                        <div className={styles.inlineWrapper}>
                            {Object.values(ProgressFilterType).map(
                                (value, idx) => (
                                    <div
                                        key={`${value}-${idx}`}
                                        className={styles.labelWrapper}
                                    >
                                        <input
                                            type="checkbox"
                                            onChange={onChangeProgressFilter}
                                            name={value}
                                            checked={selectedProgressFilters.has(
                                                value
                                            )}
                                        ></input>
                                        <span>{value}</span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div className={styles.filterBlock}>
                        <button
                            onClick={onChangeResourceTypeAllFilter}
                            className={cx({
                                [styles.resourceTypeFilterActive]:
                                    !selectedResourceTypeFilters.size,
                            })}
                        >
                            all
                        </button>
                        {Object.values(ResourceTypeFilterType).map((value) => (
                            <button
                                key={`${value}`}
                                onClick={onChangeResourceTypeFilters(value)}
                                className={cx({
                                    [styles.resourceTypeFilterActive]:
                                        selectedResourceTypeFilters.has(value),
                                })}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.networkTablePanel}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.th}>Progress</th>
                                <th className={styles.th}>Status</th>
                                <th className={styles.th}>Method</th>
                                <th className={styles.th}>Domain</th>
                                <th className={styles.th}>Initiator</th>
                                <th className={styles.th}>Type</th>
                                <th className={styles.th}>Transferred</th>
                                <th className={styles.th}>Size</th>
                                <th className={styles.th}>Waterfall</th>
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
    );
};
