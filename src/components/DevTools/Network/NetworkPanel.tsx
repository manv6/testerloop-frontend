// TODO: Remove this check once temp data is removed!!
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { RequestSlice, NetworkEventDetailPanel } from './components/';
import networkEvents from 'src/data/networkEvents';
import styles from './Network.module.scss';
import { EventType } from './types';
import { useTimeline } from 'src/hooks/timeline';
import { TextInput } from 'src/components/common/TextInput';

enum ProgressFilterType {
    COMPLETED = 'completed',
    STARTED = 'started',
    NOT_STARTED = 'not started',
}

const filterByProgressPredicate = (
    event: EventType,
    selectedOptions: ProgressFilterType[],
    currentTime: Date
) => {
    const filterLookup = {
        [ProgressFilterType.COMPLETED]: (e: EventType) =>
            e.endedDateTime <= currentTime,
        [ProgressFilterType.STARTED]: (e: EventType) =>
            e.startedDateTime <= currentTime && currentTime < e.endedDateTime,
        [ProgressFilterType.NOT_STARTED]: (e: EventType) =>
            currentTime < e.startedDateTime,
    };

    return selectedOptions.reduce(
        (result, progressFilter) =>
            result || filterLookup[progressFilter](event),
        false
    );
};

export const NetworkPanel: React.FC = () => {
    const [selectedEventId, setSelectedEventId] = useState<null | string>(null);
    const [filterTerm, setFilterTerm] = useState<string>('');
    const [activeTabKey, setActiveTabKey] = useState<string | null>('headers');
    const [selectedProgressFilters, setSelectedProgressFilters] = useState<
        ProgressFilterType[]
    >(Object.values(ProgressFilterType));
    const { currentTime } = useTimeline();
    const selectedEvent = useMemo(
        () => networkEvents.find(({ id }) => id === selectedEventId),
        [networkEvents, selectedEventId]
    );

    const filteredEvents = useMemo(
        () =>
            (networkEvents as EventType[])
                .filter((networkEvent) =>
                    (filterTerm
                        ? networkEvent.request.url.includes(filterTerm)
                        : true)
                )
                .filter((event) =>
                    filterByProgressPredicate(
                        event,
                        selectedProgressFilters,
                        currentTime
                    )
                ),
        [networkEvents, filterTerm, currentTime, selectedProgressFilters]
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
            const newValues = ev.target.checked
                ? [
                    ...selectedProgressFilters,
                    ev.target.name as ProgressFilterType,
                ]
                : selectedProgressFilters.filter((x) => x !== ev.target.name);

            setSelectedProgressFilters(newValues);
        },
        [selectedProgressFilters, setSelectedProgressFilters]
    );

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
                <div className={styles.inlineWrapper}>
                    {Object.values(ProgressFilterType).map((value, idx) => (
                        <div key={`${value}-${idx}`} className={styles.labelWrapper}>
                            <input
                                type="checkbox"
                                onChange={onChangeProgressFilter}
                                name={value}
                                checked={selectedProgressFilters.includes(value)}
                            ></input>
                            <span>{value}</span>
                        </div>
                    ))}
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
