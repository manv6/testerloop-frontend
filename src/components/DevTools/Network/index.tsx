// TODO: Remove this check once temp data is removed!!
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { RequestSlice } from './RequestSlice';
import networkEvents from 'src/data/networkEvents';
import styles from './Network.module.scss';
import { EventType } from './types';


const SelectedNetworkEventPanel: React.FC<{ selectedEvent: EventType }> = ({selectedEvent}) => {
    return (
        <div key="details" className={styles.networkDetailPanel}>
            <div key='1'><b>Request to:</b> {selectedEvent.request.url}</div>
            <br/>
            <div key='2'><b>Sent Headers:</b></div>
            <table>
                <thead>
                    <tr>
                        <th>Header Name</th>
                        <th>Header Value</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedEvent.request.headers.map(({ name, value }) => (
                        <tr>
                            <td>
                                {name}
                            </td>
                            <td>
                                {value}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export const NetworkPanel: React.FC = () => {
    const [selectedEventId, setSelectedEventId] = useState<null | string>(null);
    const [filterTerm, setFilterTerm] = useState<string>('');
    const selectedEvent = useMemo(() => (
        networkEvents.find(({ id }) => id === selectedEventId)
    ), [networkEvents, selectedEventId]);

    const filteredEvents = useMemo(() => (
        networkEvents.filter((networkEvent) => (
            filterTerm ? networkEvent.request.url.includes(filterTerm) : true
        ))
    ), [networkEvents, filterTerm]);

    const filterTermInputOnChange = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
        setFilterTerm(ev.target.value);
    }, []);

    useEffect(() => {
        setSelectedEventId(null);
    }, [filterTerm]);

    return (
        <div className={styles.network}>
            <div>
                <span><b>Filter:</b></span>
                <input value={filterTerm} onChange={filterTermInputOnChange} />
            </div>
            <br/>
            <div className={styles.networkTablePanel}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Status
                            </th>
                            <th>
                                Method
                            </th>
                            <th>
                                Domain
                            </th>
                            <th>
                                Query String Params
                            </th>
                            <th>
                                Initiator
                            </th>
                            <th>
                                Type
                            </th>
                            <th>
                                Transferred
                            </th>
                            <th>
                                Size
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredEvents.map((networkEvent, i) => (
                                <RequestSlice key={networkEvent.id}
                                    event={networkEvent}
                                    setSelectedEventId={setSelectedEventId}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {
                selectedEvent &&
                <SelectedNetworkEventPanel selectedEvent={selectedEvent} />
            }
        </div>
    );
};
