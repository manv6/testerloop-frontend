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


enum ResponseTypeFilterType {
    HTML = 'html',
    XHR = 'xhr',
    JS = 'js',
    CSS = 'css',
    IMAGE = 'image',
    FONT = 'font',
    OTHER = 'other',
}

const filterByResponseTypePredicate = (
    event: formatter.FormattedNetworkEvents[0],
    selectedOptions: ResponseTypeFilterType[]
) => {
    const mimeType = event.response.content.mimeType;

    const responseTypeLookup = {
        [ResponseTypeFilterType.HTML]: (mimeType: string) =>
            ['text/html'].includes(mimeType),
        [ResponseTypeFilterType.XHR]: (mimeType: string) =>
            ['application/json', 'application/javascript'].includes(mimeType),
        [ResponseTypeFilterType.JS]: (mimeType: string) =>
            ['text/javascript'].includes(mimeType),
        [ResponseTypeFilterType.CSS]: (mimeType: string) =>
            ['text/css'].includes(mimeType),
        [ResponseTypeFilterType.IMAGE]: (mimeType: string) =>
            mimeType.startsWith('image/'),
        [ResponseTypeFilterType.FONT]: (mimeType: string) =>
            ['application/font-woff2'].includes(mimeType),
        [ResponseTypeFilterType.OTHER]: (mimeType: string) => false  // dummy result
    };

    if (!selectedOptions.length) {
        return true;
    }

    let isOthers = false;
    if (selectedOptions.includes(ResponseTypeFilterType.OTHER)) {
        isOthers = Object.values(ResponseTypeFilterType)
            .filter(
                (responseTypeFilter) =>
                    responseTypeFilter !== ResponseTypeFilterType.OTHER
            )
            .reduce(
                (result, responseTypeFilter) => {
                    return result && !responseTypeLookup[responseTypeFilter](mimeType);
                },
                true
            );
    }

    return selectedOptions.reduce(
        (result, responseTypeFilter) =>
            result || responseTypeLookup[responseTypeFilter](mimeType),
        isOthers
    );
};


enum ProgressFilterType {
    COMPLETED = 'completed',
    STARTED = 'started',
    NOT_STARTED = 'not started',
}

const filterByProgressPredicate = (
    event: formatter.FormattedNetworkEvents[0],
    selectedOptions: ProgressFilterType[],
    currentTime: Date
) => {
    const filterLookup = {
        [ProgressFilterType.COMPLETED]: (e: typeof event) =>
            e.endedDateTime <= currentTime,
        [ProgressFilterType.STARTED]: (e: typeof event) =>
            e.startedDateTime <= currentTime && currentTime < e.endedDateTime,
        [ProgressFilterType.NOT_STARTED]: (e: typeof event) =>
            currentTime < e.startedDateTime,
    };

    return selectedOptions.reduce(
        (result, progressFilter) =>
            result || filterLookup[progressFilter](event),
        false
    );
};

type Props = {
    // TODO: Update this with fragment key type
    fragmentKey: any // eslint-disable-line
};

export const NetworkPanel: React.FC<Props> = () => {
    const data = { networkEvents: networkEventData.log.entries } as any; // eslint-disable-line
    const networkEvents = useMemo(() =>
        formatter.formatNetworkEvents(data.networkEvents), [data.networkEvents]);

    const [selectedEventId, setSelectedEventId] = useState<null | string>(null);
    const [filterTerm, setFilterTerm] = useState<string>('');
    const [activeTabKey, setActiveTabKey] = useState<string | null>('headers');
    const [selectedProgressFilters, setSelectedProgressFilters] =
        useState<ProgressFilterType[]>(Object.values(ProgressFilterType));
    const [selectedResponseTypeFilters, setSelectedResponseTypeFilters] =
        useState<ResponseTypeFilterType[]>([]);
    const { currentTime } = useTimeline();

    const selectedEvent = useMemo(
        () => networkEvents.find(({ id }) => id === selectedEventId),
        [networkEvents, selectedEventId]
    );

    const filteredEvents = useMemo(
        () => networkEvents
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
            )
            .filter((event) => filterByResponseTypePredicate(
                event,
                selectedResponseTypeFilters,
            )),
        [networkEvents, filterTerm, currentTime, selectedProgressFilters, selectedResponseTypeFilters]
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

    const onSelectTab = useCallback((key: string | null) => {
        setActiveTabKey(key);
    }, [setActiveTabKey]);

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

    const onChangeResponseTypeFilters = useMemo(
        () =>
            Object.fromEntries(Object.values(ResponseTypeFilterType).map(
                (responseTypeFilter) => {
                    const handler = () => {

                        let newValues = [];
                        if (
                            selectedResponseTypeFilters.includes(responseTypeFilter)
                        ) {
                            newValues = selectedResponseTypeFilters.filter(
                                (x) => x !== responseTypeFilter
                            );
                        } else {
                            newValues = [
                                ...selectedResponseTypeFilters,
                                responseTypeFilter as ResponseTypeFilterType,
                            ];
                        }
                        setSelectedResponseTypeFilters(newValues);
                    };

                    return [responseTypeFilter, handler];
                }
            )),
        [selectedResponseTypeFilters, setSelectedResponseTypeFilters]
    );

    const onChangeResponseTypeAllFilter = useCallback(() => {
        setSelectedResponseTypeFilters([]);
    }, [selectedResponseTypeFilters, setSelectedResponseTypeFilters]);

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
                    </div>
                    <div className={styles.filterBlock}>
                        <button
                            onClick={onChangeResponseTypeAllFilter}
                            className={cx({
                                [styles.responseTypeFilterActive]:
                                    !selectedResponseTypeFilters.length}
                            )}
                        >
                            all
                        </button>
                        {Object.values(ResponseTypeFilterType).map((value) => (
                            <button
                                key={`${value}`}
                                onClick={onChangeResponseTypeFilters[value]}
                                className={cx({
                                    [styles.responseTypeFilterActive]:
                                        selectedResponseTypeFilters.includes(value)}
                                )}
                            >{value}</button>
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
