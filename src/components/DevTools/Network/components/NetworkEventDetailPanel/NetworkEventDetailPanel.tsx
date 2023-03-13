import React, { useMemo } from 'react';
import { Tabs, Accordion, Divider, Button } from 'src/components/common';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { NameValueTable } from 'src/components/DevTools/Network/components';
import styles from './NetworkEventDetailPanel.module.scss';
import { FormattedNetworkEvents } from 'src/utils/formatters';
import { styled } from '@mui/material';
import { CollapseIcon } from 'src/components/Expandable/components';
import { TabLabel } from '../../NetworkPanel';

type PostDataTabProps = {
    selectedEvent: FormattedNetworkEvents[0];
};

const PostDataTab: React.FC<PostDataTabProps> = ({ selectedEvent }) => {
    const snippet = useMemo(() => {
        const mimeType = selectedEvent.request.postData?.mimeType;
        const postData = selectedEvent.request.postData?.text;

        if (!postData) {
            return;
        }
        if (mimeType?.includes('application/json')) {
            return (
                <SyntaxHighlighter
                    language="json"
                    style={vscDarkPlus}
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
        <div>
            <div>
                <span className={styles.boldText}>Mime Type: </span>
                {selectedEvent.request.postData?.mimeType}
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
        const mimeType = selectedEvent.response.content.mimeType;
        const responsePayload = selectedEvent.response.content.text;

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
                    style={vscDarkPlus}
                    wrapLongLines={true}
                >
                    {JSON.stringify(JSON.parse(responsePayload), null, 2)}
                </SyntaxHighlighter>
            );
        }
        return <div>{responsePayload}</div>;
    }, [selectedEvent]);

    return (
        <div>
            <Accordion title={<div>Mime Type</div>}>
                {selectedEvent.response.content.mimeType}
            </Accordion>
            <Divider />
            {snippet && (
                <>
                    <Accordion title={<div>Payload</div>}>
                        <div className={styles.responseContentTextWrapper}>
                            {snippet}
                        </div>
                    </Accordion>
                    <Divider />
                </>
            )}
            <Accordion title={<div>Response Headers</div>}>
                <NameValueTable
                    key="responseHeader"
                    valuePairs={selectedEvent.response.headers}
                />
            </Accordion>
            <Divider />
        </div>
    );
};

type RequestTabProps = {
    selectedEvent: FormattedNetworkEvents[0];
};

const RequestTab: React.FC<RequestTabProps> = ({ selectedEvent }) => {
    return (
        <div>
            <Accordion title={<div>Request to</div>}>
                {selectedEvent.request.url}
            </Accordion>
            <Divider />
            {selectedEvent.request.queryString.length ? (
                <>
                    <Accordion title={<div>Query params</div>}>
                        <NameValueTable
                            key="queryParams"
                            valuePairs={selectedEvent.request.queryString}
                        />
                    </Accordion>
                    <Divider />
                </>
            ) : null}
            {selectedEvent.request.postData && (
                <>
                    <Accordion title={<div>Payload</div>}>
                        <PostDataTab selectedEvent={selectedEvent} />
                    </Accordion>
                    <Divider />
                </>
            )}
            <Accordion title={<div>Request Headers</div>}>
                <NameValueTable
                    key="requestHeader"
                    valuePairs={selectedEvent.request.headers}
                />
            </Accordion>
            <Divider />
        </div>
    );
};

type NetworkEventDetailPanelProps = {
    selectedEvent: FormattedNetworkEvents[0];
    activeTab: number | null;
    onSelectTab: (value: number) => void;
    onDetailPanelClose: () => void;
};

const StyledDetails = styled('div')(({ theme }) => ({
    borderLeft: `1px solid ${theme.palette.base[300]}`,
    backgroundColor: theme.palette.base[400],
}));

const StyledTabs = styled('div')(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.base[300]}`,
}));

const NetworkEventDetailPanel: React.FC<NetworkEventDetailPanelProps> = ({
    selectedEvent,
    activeTab,
    onSelectTab,
    onDetailPanelClose,
}) => {
    const tabChildren = [
        {
            tabLabel: TabLabel.REQUEST,
            title: 'Request',
            children: <RequestTab selectedEvent={selectedEvent} />,
        },
        {
            tabLabel: TabLabel.RESPONSE,
            title: 'Response',
            children: <ResponseDataTab selectedEvent={selectedEvent} />,
        },
    ];

    return (
        <StyledDetails key="details" className={styles.networkDetailPanel}>
            <div className={styles.networkDetailPanelContent}>
                <StyledTabs className={styles.tabs}>
                    <Tabs
                        onChange={onSelectTab}
                        activeTab={activeTab}
                        tabChildren={tabChildren}
                    />
                    <Button
                        size="small"
                        onClick={onDetailPanelClose}
                        className={styles.closeButton}
                    >
                        <CollapseIcon />
                    </Button>
                </StyledTabs>
                {tabChildren.map((tabProps, i) => {
                    const { children } = tabProps;
                    if (activeTab !== i) return null;
                    return <div key={i}>{children}</div>;
                })}
            </div>
        </StyledDetails>
    );
};

export default NetworkEventDetailPanel;
