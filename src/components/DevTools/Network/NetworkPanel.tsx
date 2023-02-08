// TODO: Remove this check once temp data is removed!!
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';

import { RequestSlice, NetworkEventDetailPanel } from './components/';
import networkEvents from 'src/data/networkEvents';
import styles from './Network.module.scss';
import { EventType } from './types';
import { useTimeline } from 'src/hooks/timeline';

enum progressFilterType {
    completed = 'completed',
    started = 'started',
    notStarted = 'not started',
}

const filterByProgressPredicate = (
    event: EventType,
    selectedOptions: progressFilterType[],
    currentTime: Date
) => {
    const filterLookup = {
        [progressFilterType.completed]: (e: EventType) =>
            e.endedDateTime <= currentTime,
        [progressFilterType.started]: (e: EventType) =>
            e.startedDateTime <= currentTime && currentTime < e.endedDateTime,
        [progressFilterType.notStarted]: (e: EventType) =>
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
        progressFilterType[]
    >(Object.values(progressFilterType));
    const { currentTime } = useTimeline();
    const selectedEvent = useMemo(
        () => networkEvents.find(({ id }) => id === selectedEventId),
        [networkEvents, selectedEventId]
    );

    const filteredEvents = useMemo(
        () =>
            (networkEvents as EventType[])
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
                ),
        [networkEvents, filterTerm, currentTime, selectedProgressFilters]
    );

    const onDetailPenalClose = useCallback(() => {
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
                    ev.target.name as progressFilterType,
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
            {selectedEvent && (
                <CloseButton
                    className={styles.closeButton}
                    onClick={onDetailPenalClose}
                />
            )}
            <Stack gap={3}>
                <Form.Group
                    as={Row}
                    className="mb-1"
                    controlId="filterTermInput"
                >
                    <Form.Label column sm="2">
                        Filter
                    </Form.Label>
                    <Col sm="5">
                        <Form.Control
                            type="text"
                            size="sm"
                            value={filterTerm}
                            onChange={filterTermInputOnChange}
                        />
                    </Col>
                </Form.Group>
                <div>
                    {Object.values(progressFilterType).map((value) => (
                        <Form.Check
                            inline
                            onChange={onChangeProgressFilter}
                            name={value}
                            label={value}
                            checked={selectedProgressFilters.includes(value)}
                        ></Form.Check>
                    ))}
                </div>
                <div className={styles.networkTablePanel}>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Progress</th>
                                <th>Status</th>
                                <th>Method</th>
                                <th>Domain</th>
                                <th>Initiator</th>
                                <th>Type</th>
                                <th>Transferred</th>
                                <th>Size</th>
                                <th>Waterfall</th>
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
                    </Table>
                </div>
            </Stack>
            {selectedEvent && (
                <NetworkEventDetailPanel
                    selectedEvent={selectedEvent}
                    activeTabKey={activeTabKey}
                    onSelectTab={onSelectTab}
                />
            )}
        </div>
    );
};
