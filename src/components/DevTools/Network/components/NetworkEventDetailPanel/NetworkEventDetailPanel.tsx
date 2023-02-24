import React, { useMemo } from 'react';
import { Tabs } from 'src/components/common/Tabs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { KeyValueTable } from 'src/components/DevTools/Network/components';
import { CloseButton } from 'src/components/common/CloseButton';
import { NetworkPanelFragment$data } from 'src/components/DevTools/Network/__generated__/NetworkPanelFragment.graphql.js';
import styles from './NetworkEventDetailPanel.module.scss';

type EventNode =
    NetworkPanelFragment$data['searchedNetworkEvents']['edges'][0]['node'] & {
        __typename: 'HttpNetworkEvent';
    };

type PostDataTabProps = {
    selectedEvent: EventNode;
};

const PostDataTab: React.FC<PostDataTabProps> = ({ selectedEvent }) => {
    const snippet = useMemo(() => {
        const mimeType = selectedEvent.request.body?.mimeType;
        const data = selectedEvent.request.body?.data;

        if (!data) {
            return;
        }
        if (mimeType?.includes('application/json')) {
            return (
                <SyntaxHighlighter
                    language="json"
                    style={vs}
                    wrapLongLines={true}
                >
                    {JSON.stringify(JSON.parse(data), null, 2)}
                </SyntaxHighlighter>
            );
        }
        if (mimeType?.includes('application/x-www-form-urlencoded')) {
            const valuePairs = Array.from(
                new URLSearchParams(data).entries()
            ).map(([key, value]) => {
                return { key, value };
            });
            return (
                <KeyValueTable
                    valuePairs={valuePairs}
                    keyLabel="key"
                    valueLabel="value"
                />
            );
        }
        return <div>{data}</div>;
    }, [selectedEvent]);

    return (
        <div className={styles.verticalStack}>
            <div>
                <span className={styles.boldText}>Mime Type: </span>
                {selectedEvent.request.body?.mimeType}
            </div>
            {snippet}
        </div>
    );
};

type ResponseDataTabProps = {
    selectedEvent: EventNode;
};

const ResponseDataTab: React.FC<ResponseDataTabProps> = ({ selectedEvent }) => {
    const snippet = useMemo(() => {
        const responseDataExcludedMimeTypes = [
            'application/font-woff2',
            'application/octet-stream',
        ];
        const mimeType = selectedEvent.response.body.mimeType;
        const responsePayload = selectedEvent.response.body.data;

        if (
            !responsePayload ||
            responseDataExcludedMimeTypes.includes(mimeType)
        ) {
            return null;
        }

        if (mimeType === 'application/json') {
            return (
                <SyntaxHighlighter
                    language="json"
                    style={vs}
                    wrapLongLines={true}
                >
                    {JSON.stringify(JSON.parse(responsePayload), null, 2)}
                </SyntaxHighlighter>
            );
        }
        return (
            <div className={styles.responseContentTextOther}>
                {responsePayload}
            </div>
        );
    }, [selectedEvent]);

    return (
        <div className={styles.verticalStack}>
            <div>
                <span className={styles.boldText}>Mime Type: </span>
                {selectedEvent.response.body.mimeType}
            </div>
            {snippet && (
                <div className={styles.responseContentTextWrapper}>
                    {snippet}
                </div>
            )}
        </div>
    );
};

type HeadersTabProps = {
    selectedEvent: EventNode;
};

const HeadersTab: React.FC<HeadersTabProps> = ({ selectedEvent }) => {
    return (
        <div className={styles.verticalStack}>
            <div key="requestURL" className={styles.requestUrl}>
                <span className={styles.boldText}>Request to:</span>{' '}
                {selectedEvent.request.url.url}
            </div>
            {selectedEvent.request.queryString.length ? (
                <>
                    <div key="queryParamsLabel">
                        <span className={styles.boldText}>Query Params:</span>
                    </div>
                    <KeyValueTable
                        key="queryParams"
                        valuePairs={selectedEvent.request.queryString}
                        keyLabel="Header Name"
                        valueLabel="Header Value"
                    />
                </>
            ) : null}
            <div>
                <div key="requestHeaderLabel">
                    <span className={styles.boldText}>Request Headers:</span>
                </div>
                <KeyValueTable
                    key="requestHeader"
                    valuePairs={selectedEvent.request.headers.values}
                    keyLabel="Header Name"
                    valueLabel="Header Value"
                />
            </div>
            <div>
                <div key="responseHeaderLabel">
                    <span className={styles.boldText}>Response Headers:</span>
                </div>
                <KeyValueTable
                    key="responseHeader"
                    valuePairs={selectedEvent.response.headers.values}
                    keyLabel="Header Name"
                    valueLabel="Header Value"
                />
            </div>
        </div>
    );
};

type NetworkEventDetailPanelProps = {
    selectedEvent: EventNode;
    activeTabKey: string | null;
    onSelectTab: (x: string | null) => void;
    onDetailPanelClose: () => void;
};

const NetworkEventDetailPanel: React.FC<NetworkEventDetailPanelProps> = ({
    selectedEvent,
    activeTabKey,
    onSelectTab,
    onDetailPanelClose,
}) => {
    const tabChildren = [
        {
            tabKey: 'headers',
            title: 'Headers',
            children: <HeadersTab selectedEvent={selectedEvent} />,
        },
        {
            tabKey: 'postData',
            title: 'Post',
            children: <PostDataTab selectedEvent={selectedEvent} />,
        },
        {
            tabKey: 'responseData',
            title: 'Response',
            children: <ResponseDataTab selectedEvent={selectedEvent} />,
        },
    ].filter(
        (tabChild) =>
            tabChild.tabKey !== 'postData' || selectedEvent.request.body
    );

    return (
        <div key="details" className={styles.networkDetailPanel}>
            {
                <CloseButton
                    className={styles.closeButton}
                    onClick={onDetailPanelClose}
                />
            }
            <div className={styles.networkDetailPanelContent}>
                <Tabs
                    onSelect={onSelectTab}
                    activeTabKey={activeTabKey}
                    tabChildren={tabChildren}
                />
            </div>
        </div>
    );
};

export default NetworkEventDetailPanel;
