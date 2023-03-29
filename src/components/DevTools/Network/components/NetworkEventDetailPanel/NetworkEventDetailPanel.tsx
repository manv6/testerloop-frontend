import React, { useMemo } from 'react';
import { Tabs, Accordion, Divider, Button } from 'src/components/common';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import styles from './NetworkEventDetailPanel.module.scss';
import { styled } from '@mui/material';
import { CollapseIcon } from 'src/components/Expandable/components';
import { TabLabel } from '../../NetworkPanel';
import { KeyValueTable } from 'src/components/DevTools/Network/components';
import { useFragment } from 'react-relay';
import NetworkEventDetailPanelFragment from './NetworkEventDetailPanelFragment';
import {
    NetworkEventDetailPanelFragment$data,
    NetworkEventDetailPanelFragment$key,
} from './__generated__/NetworkEventDetailPanelFragment.graphql';

const sortByName = (
    array: ReadonlyArray<{
        readonly key: string;
        readonly value: string;
    }>
) =>
    [...array].sort((a, b) =>
        a.key.toLowerCase() > b.key.toLowerCase() ? 1 : -1
    );

type PostDataProps = {
    selectedEvent: NetworkEventDetailPanelFragment$data;
};

const PostData: React.FC<PostDataProps> = ({ selectedEvent }) => {
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
                    style={vscDarkPlus}
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

    return <div>{snippet}</div>;
};

type ResponseDataTabProps = {
    selectedEvent: NetworkEventDetailPanelFragment$data;
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
                    style={vscDarkPlus}
                    wrapLongLines={true}
                >
                    {JSON.stringify(JSON.parse(responsePayload), null, 2)}
                </SyntaxHighlighter>
            );
        }
        return <div>{responsePayload}</div>;
    }, [selectedEvent]);

    const orderedHeaders = useMemo(
        () => sortByName(selectedEvent.response.headers.values),
        [selectedEvent.response.headers]
    );

    return (
        <div>
            <Accordion title={<div>Mime Type</div>}>
                {selectedEvent.response.body.mimeType}
            </Accordion>
            <Divider />
            {snippet && (
                <>
                    <Accordion
                        accordionProps={{ defaultExpanded: true }}
                        title={<div>Payload</div>}
                    >
                        <div className={styles.responseContentTextWrapper}>
                            {snippet}
                        </div>
                    </Accordion>
                    <Divider />
                </>
            )}
            <Accordion title={<div>Response Headers</div>}>
                <KeyValueTable
                    key="responseHeader"
                    valuePairs={orderedHeaders}
                />
            </Accordion>
            <Divider />
        </div>
    );
};

type RequestTabProps = {
    selectedEvent: NetworkEventDetailPanelFragment$data;
};

const RequestTab: React.FC<RequestTabProps> = ({ selectedEvent }) => {
    const orderedHeaders = useMemo(
        () => sortByName(selectedEvent.request.headers.values),
        [selectedEvent.request.headers]
    );

    return (
        <div>
            <Accordion
                accordionProps={{ defaultExpanded: true }}
                title={<div>Request to</div>}
            >
                {selectedEvent.request.url.url}
            </Accordion>
            <Divider />
            {selectedEvent.request.queryString.length ? (
                <>
                    <Accordion title={<div>Query params</div>}>
                        <KeyValueTable
                            key="queryParams"
                            valuePairs={selectedEvent.request.queryString}
                        />
                    </Accordion>
                    <Divider />
                </>
            ) : null}
            {selectedEvent.request.body?.data && (
                <>
                    <Accordion title={<div>Mime Type</div>}>
                        {selectedEvent.request.body.mimeType}
                    </Accordion>
                    <Divider />
                    <Accordion title={<div>Payload</div>}>
                        <PostData selectedEvent={selectedEvent} />
                    </Accordion>
                    <Divider />
                </>
            )}
            <Accordion title={<div>Request Headers</div>}>
                <KeyValueTable
                    key="requestHeader"
                    valuePairs={orderedHeaders}
                />
            </Accordion>
            <Divider />
        </div>
    );
};

type NetworkEventDetailPanelProps = {
    selectedEvent: NetworkEventDetailPanelFragment$key;
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
    const data = useFragment(NetworkEventDetailPanelFragment, selectedEvent);

    const tabChildren = [
        {
            tabLabel: TabLabel.REQUEST,
            title: 'Request',
            children: <RequestTab selectedEvent={data} />,
        },
        {
            tabLabel: TabLabel.RESPONSE,
            title: 'Response',
            children: <ResponseDataTab selectedEvent={data} />,
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
