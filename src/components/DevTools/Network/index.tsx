// TODO: Remove this check once temp data is removed!!
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CloseButton from 'react-bootstrap/CloseButton';

import { RequestSlice } from './RequestSlice';
import networkEvents from 'src/data/networkEvents';
import styles from './Network.module.scss';
import { EventType, NameValueType } from './types';

const SelectedNetworkEventPostDataTab: React.FC<{
    selectedEvent: EventType;
}> = ({ selectedEvent }) => {
    return <pre>{selectedEvent.request?.postData?.text}</pre>;
};


const NameValueTable: React.FC<{ valuePairs: NameValueType[] }> = ({
    valuePairs
}) => {
    return (<Table striped bordered size="sm">
        <thead>
            <tr>
                <th>Header Name</th>
                <th>Header Value</th>
            </tr>
        </thead>
        <tbody>
            {valuePairs.map(({ name, value }) => (
                <tr>
                    <td>{name}</td>
                    <td>{value}</td>
                </tr>
            ))}
        </tbody>
    </Table>);
};

const SelectedNetworkEventHeaderTab: React.FC<{
    selectedEvent: EventType;
}> = ({ selectedEvent }) => {
    return (
        <>
            <br />
            <div key="requestURL" className={styles.requestUrl}  >
                <b>Request to:</b> {selectedEvent.request.url}
            </div>
            <br />
            {selectedEvent.request.queryString.length ? (
                <>
                    <div key="queryParams">
                        <b>Query Params:</b>
                    </div>
                    <NameValueTable valuePairs={selectedEvent.request.queryString} />
                </>
            ) : null}
            <br />
            <div key="requestHeader">
                <b>Request Headers:</b>
            </div>
            <NameValueTable valuePairs={selectedEvent.request.headers} />
            <br />
            <div key="responseHeader">
                <b>Response Headers:</b>
            </div>
            <NameValueTable valuePairs={selectedEvent.response.headers} />

        </>
    );
};

const SelectedNetworkEventPanel: React.FC<{
    selectedEvent: EventType;
    activeTabKey?: string | null;
    onSelectTab: (x: string | null) => void;
}> = ({ selectedEvent, activeTabKey, onSelectTab }) => {
    return (
        <div key="details" className={styles.networkDetailPanel}>
            <Tabs
                transition={false}
                onSelect={onSelectTab}
                className="mb-3"
                {...Object.assign(
                    {},
                    activeTabKey ? { activeKey: activeTabKey } : null
                )}
            >
                <Tab eventKey="headers" title="Headers">
                    <SelectedNetworkEventHeaderTab
                        selectedEvent={selectedEvent}
                    />
                </Tab>
                {selectedEvent.request?.postData && (
                    <Tab eventKey="postData" title="Post">
                        <SelectedNetworkEventPostDataTab
                            selectedEvent={selectedEvent}
                        />
                    </Tab>
                )}
            </Tabs>
        </div>
    );
};

export const NetworkPanel: React.FC = () => {
    const [selectedEventId, setSelectedEventId] = useState<null | string>(null);
    const [filterTerm, setFilterTerm] = useState<string>('');
    const [filterCypressEvent, setFilterCypressEvents] =
        useState<boolean>(true);
    const [activeTabKey, setActiveTabKey] = useState<string | null>('headers');
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
                .filter((networkEvent) =>
                    filterCypressEvent
                        ? !networkEvent.request.url.includes('/__/') &&
                          !networkEvent.request.url.includes('/__cypress/')
                        : true
                ),
        [networkEvents, filterTerm, filterCypressEvent]
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
    const filterCypressEventInputOnChange = useCallback(
        (ev: React.ChangeEvent<HTMLInputElement>) => {
            setFilterCypressEvents(ev.target.checked);
        },
        [setFilterCypressEvents]
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
            <div>
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
            </div>
            <div>
                <Form.Check
                    type="switch"
                    id="filterCypressEventCheckbox"
                    label="Filter Cypress Urls"
                    checked={filterCypressEvent}
                    onChange={filterCypressEventInputOnChange}
                />
            </div>
            <br />
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
            {selectedEvent && (
                <SelectedNetworkEventPanel
                    selectedEvent={selectedEvent}
                    activeTabKey={activeTabKey}
                    onSelectTab={onSelectTab}
                />
            )}
        </div>
    );
};
