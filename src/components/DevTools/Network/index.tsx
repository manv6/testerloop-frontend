import { useMemo, useState } from "react";
import { useTimeline } from "../../../hooks/timeline"
import { RequestSlice } from "./RequestSlice";
import networkEvents from "../../../data/networkEvents";

export const NetworkPanel: React.FunctionComponent = () => {
    const {
        currentTimeFraction,
        hoverTimeFraction,
        seekFraction,
        setHoverTimeFraction,
    } = useTimeline();
    
    const [selectedEventId, setSelectedEventId] = useState<null | string>(null)
    const selectedEvent = useMemo(() => networkEvents.find(({ id }) => id === selectedEventId), [networkEvents, selectedEventId]);

    return (
        <>
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
                                    {networkEvent.request.queryString}
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
            <div
                style={{
                    gridArea: "seeker",
                    margin: "5px",
                    border: "1px solid black",
                    position: "relative",
                    height: Math.max(100, networkEvents.length * 20),
                }}
                onMouseMove={(ev) => {
                    setHoverTimeFraction((ev.clientX - ev.currentTarget.offsetLeft) / ev.currentTarget.offsetWidth);
                }}
                onMouseLeave={(ev) => {
                    setHoverTimeFraction(null);
                }}
                onClick={(ev) => {
                    seekFraction((ev.clientX - ev.currentTarget.offsetLeft) / ev.currentTarget.offsetWidth);
                }}
            >
                <div
                    style={{
                        background: "#CCC",
                        borderRight: "1px solid #666",
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: `${100 - 100 * currentTimeFraction}%`
                    }}
                >
                </div>
                {
                    hoverTimeFraction &&
                    <div
                        style={{
                            borderRight: "1px solid #000",
                            position: 'absolute',
                            top: 0,
                            left: "",
                            bottom: 0,
                            right: `${100 - 100 * hoverTimeFraction}%`
                        }}
                    >
                    </div>
                }
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
        </>
    )
}
