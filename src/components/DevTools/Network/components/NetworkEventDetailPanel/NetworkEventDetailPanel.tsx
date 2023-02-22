import React, { useMemo } from 'react';
import { Tabs } from 'src/components/common/Tabs';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { NameValueTable } from 'src/components/DevTools/Network/components';
import styles from './NetworkEventDetailPanel.module.scss';
import { CloseButton } from 'src/components/common/CloseButton';
import { FormattedNetworkEvents } from 'src/utils/formatters';

type PostDataTabProps = {
    selectedEvent: FormattedNetworkEvents[0];
};

const PostDataTab: React.FC<PostDataTabProps> = ({ selectedEvent }) => {
    const snippet = useMemo(() => {
        const mimeType = selectedEvent.request?.postData?.mimeType;
        const postData = selectedEvent.request?.postData?.text;

        if (!postData) {
            return;
        }
        if (mimeType?.includes('application/json')) {
            return (
                <SyntaxHighlighter
                    language="json"
                    style={vs}
                    wrapLongLines={true}
                >
                    {JSON.stringify(JSON.parse(postData), null, 2)}
                </SyntaxHighlighter>
            );
        }
        if (mimeType?.includes('application/x-www-form-urlencoded')) {
            const valuePairs = Array.from(
                new URLSearchParams(postData).entries()
            ).map(([key, value]) => {
                return { name: key, value };
            });
            return (
                <NameValueTable
                    valuePairs={valuePairs}
                    nameLabel="key"
                    valueLabel="value"
                />
            );
        }
        return <div>{postData}</div>;
    }, [selectedEvent]);

    return (
        <div className={styles.verticalStack}>
            <div>
                <span className={styles.boldText}>Mime Type: </span>
                {selectedEvent.request?.postData?.mimeType}
            </div>
            {snippet}
        </div>
    );
};

type ResponseDataTabProps = {
    selectedEvent: FormattedNetworkEvents[0];
};

const ResponseDataTab: React.FC<ResponseDataTabProps> = ({ selectedEvent }) => {
    const snippet = useMemo(() => {
        const responseDataExcludedMimeTypes = [
            'application/font-woff2',
            'application/octet-stream',
        ];
        const mimeType = selectedEvent.response?.content?.mimeType;
        const responsePayload = selectedEvent.response?.content?.text;

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
                {selectedEvent.response?.content?.mimeType}
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
    selectedEvent: FormattedNetworkEvents[0];
};

const HeadersTab: React.FC<HeadersTabProps> = ({ selectedEvent }) => {
    return (
        <div className={styles.verticalStack}>
            <div key="requestURL" className={styles.requestUrl}>
                <span className={styles.boldText}>Request to:</span>{' '}
                {selectedEvent.request.url}
            </div>
            {selectedEvent.request.queryString.length ? (
                <>
                    <div key="queryParamsLabel">
                        <span className={styles.boldText}>Query Params:</span>
                    </div>
                    <NameValueTable
                        key="queryParams"
                        valuePairs={selectedEvent.request.queryString}
                        nameLabel="Header Name"
                        valueLabel="Header Value"
                    />
                </>
            ) : null}
            <div>
                <div key="requestHeaderLabel">
                    <span className={styles.boldText}>Request Headers:</span>
                </div>
                <NameValueTable
                    key="requestHeader"
                    valuePairs={selectedEvent.request.headers}
                    nameLabel="Header Name"
                    valueLabel="Header Value"
                />
            </div>
            <div>
                <div key="responseHeaderLabel">
                    <span className={styles.boldText}>Response Headers:</span>
                </div>
                <NameValueTable
                    key="responseHeader"
                    valuePairs={selectedEvent.response.headers}
                    nameLabel="Header Name"
                    valueLabel="Header Value"
                />
            </div>
        </div>
    );
};

type NetworkEventDetailPanelProps = {
    selectedEvent: FormattedNetworkEvents[0];
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
            tabChild?.tabKey !== 'postData' || selectedEvent.request?.postData
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
