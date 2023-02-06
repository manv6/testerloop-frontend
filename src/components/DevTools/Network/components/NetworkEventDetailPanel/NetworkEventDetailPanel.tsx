import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { NameValueTable } from '../../components';
import { EventType } from '../../types';
import styles from './NetworkEventDetailPanel.module.scss';


const PostDataTab: React.FC<{
    selectedEvent: EventType;
}> = ({ selectedEvent }) => {
    const mimeType = selectedEvent.request?.postData?.mimeType;

    let postData = selectedEvent.request?.postData?.text;

    let snippet = null;
    if (mimeType?.includes('application/json') && postData) {
        postData = JSON.stringify(JSON.parse(postData), null, 2);
        snippet = (
            <SyntaxHighlighter language="json" style={vs} wrapLongLines={true}>
                {postData}
            </SyntaxHighlighter>
        );
    } else if (
        mimeType?.includes('application/x-www-form-urlencoded') &&
        postData
    ) {
        const valuePairs = Array.from(
            new URLSearchParams(postData).entries()
        ).map(([key, value]) => {
            return { name: key, value };
        });
        snippet = (
            <NameValueTable
                valuePairs={valuePairs}
                nameLabel="key"
                valueLabel="value"
            />
        );
    } else {
        snippet = <div>{postData}</div>;
    }

    return (
        <div>
            <div>
                <b>Mime Type: </b>
                {selectedEvent.request?.postData?.mimeType}
            </div>
            <br />
            {snippet}
        </div>
    );
};

const HeadersTab: React.FC<{
    selectedEvent: EventType;
}> = ({ selectedEvent }) => {
    return (
        <>
            <br />
            <div key="requestURL" className={styles.requestUrl}>
                <b>Request to:</b> {selectedEvent.request.url}
            </div>
            <br />
            {selectedEvent.request.queryString.length ? (
                <>
                    <div key="queryParamsLabel">
                        <b>Query Params:</b>
                    </div>
                    <NameValueTable
                        key="queryParams"
                        valuePairs={selectedEvent.request.queryString}
                        nameLabel="Header Name"
                        valueLabel="Header Value"
                    />
                </>
            ) : null}
            <br />
            <div key="requestHeaderLabel">
                <b>Request Headers:</b>
            </div>
            <NameValueTable
                key="requestHeader"
                valuePairs={selectedEvent.request.headers}
                nameLabel="Header Name"
                valueLabel="Header Value"
            />
            <br />
            <div key="responseHeaderLabel">
                <b>Response Headers:</b>
            </div>
            <NameValueTable
                key="responseHeader"
                valuePairs={selectedEvent.response.headers}
                nameLabel="Header Name"
                valueLabel="Header Value"
            />
        </>
    );
};

const NetworkEventDetailPanel: React.FC<{
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
                    <HeadersTab selectedEvent={selectedEvent} />
                </Tab>
                {selectedEvent.request?.postData && (
                    <Tab eventKey="postData" title="Post">
                        <PostDataTab selectedEvent={selectedEvent} />
                    </Tab>
                )}
            </Tabs>
        </div>
    );
};

export default NetworkEventDetailPanel;
