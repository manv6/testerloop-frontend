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

export const NetworkPanel: React.FC = () => {
    const [selectedEventId, setSelectedEventId] = useState<null | string>(null);
    const [filterTerm, setFilterTerm] = useState<string>('');
    const [activeTabKey, setActiveTabKey] = useState<string | null>('headers');
    const selectedEvent = useMemo(
        () => networkEvents.find(({ id }) => id === selectedEventId),
        [networkEvents, selectedEventId]
    );

    const filteredEvents = useMemo(
        () =>
            (networkEvents as EventType[]).filter((networkEvent) =>
                filterTerm
                    ? networkEvent.request.url.includes(filterTerm)
                    : true
            ),
        [networkEvents, filterTerm]
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

    useEffect(() => {
        setSelectedEventId(null);
    }, [filterTerm]);

    useEffect(() => {
        setActiveTabKey('headers');
    }, [selectedEventId]);

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
                <div className={styles.networkTablePanel}>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
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
