import { useMemo, useState } from "react";
import { RequestSlice } from "./RequestSlice";
import networkEvents from "../../../data/networkEvents";
import styles from './Network.module.scss';

export const NetworkPanel: React.FunctionComponent = () => {
    const [selectedEventId, setSelectedEventId] = useState<null | string>(null)
    const selectedEvent = useMemo(() => (
        networkEvents.find(({ id }) => id === selectedEventId)
    ), [networkEvents, selectedEventId]);

    return (
        <div className={styles.network}>
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
                            File
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
                        networkEvents.map((networkEvent, i) => (
                            <tr
                                key={networkEvent.id}
                            >
                                <td>
                                    {networkEvent.response.status}
                                </td>
                                <td>
                                    {networkEvent.request.method}
                                </td>
                                <td>
                                    {networkEvent.request.url}
                                </td>
                                <td>
                                    {JSON.stringify(networkEvent.request.queryString)}
                                </td>
                                <td>
                                    N/A
                                </td>
                                <td>
                                    {networkEvent.response.content.mimeType}
                                </td>
                                <td>
                                    {networkEvent.response._transferSize}
                                </td>
                                <td>
                                    {networkEvent.response.bodySize}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>
                {
                    networkEvents.map((networkEvent, i) => (
                        <div
                            style={{
                                position: 'relative',
                                height: 20,
                                margin: 5,
                            }}
                            key={networkEvent.id}
                        >
                            <RequestSlice
                                event={networkEvent}
                                setSelectedEventId={setSelectedEventId}
                            />
                        </div>
                    ))
                }
                {
                    selectedEvent &&
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: '50%',
                            background: 'white',
                            borderLeft: '3px solid black',
                        }}
                    >
                        Request to: {selectedEvent.request.url}
                        <br />
                        Sent Headers:
                        <table>
                            <thead>
                                <tr>
                                    <td>Header Name</td>
                                    <td>Header Value</td>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedEvent.request.headers.map(({ name, value }) => (
                                    <tr key={name}>
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
                }
            </div>
        </div>
    )
}
