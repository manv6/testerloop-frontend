import React from 'react';
import { Tabs, Button } from 'src/components/common';
import styles from './NetworkEventDetailPanel.module.scss';
import { styled } from '@mui/material';
import { CollapseIcon } from 'src/components/Expandable/components';
import { TabLabel } from '../../NetworkPanel';
import { useLazyLoadQuery } from 'react-relay';
import { RequestTab, ResponseTab } from '../tabs';
import NetworkEventDetailPanelQuery from './NetworkEventDetailPanelQuery';
import { NetworkEventDetailPanelQuery as NetworkEventDetailPanelQueryType } from './__generated__/NetworkEventDetailPanelQuery.graphql';
import NetworkEventDetailPanelWrapper from '../NetworkEventDetailPanelWrapper';

type NetworkEventDetailPanelProps = {
    selectedEventId: string;
    activeTab: number | null;
    onSelectTab: (value: number) => void;
    onDetailPanelClose: () => void;
};

const StyledTabs = styled('div')(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.base[300]}`,
}));

const NetworkEventDetailPanel: React.FC<NetworkEventDetailPanelProps> = ({
    selectedEventId,
    activeTab,
    onSelectTab,
    onDetailPanelClose,
}) => {
    const data = useLazyLoadQuery<NetworkEventDetailPanelQueryType>(
        NetworkEventDetailPanelQuery,
        {
            httpNetworkEventId: selectedEventId,
        }
    );

    if (!data.httpNetworkEvent) {
        return <div>No data</div>;
    }

    const tabChildren = [
        {
            tabLabel: TabLabel.REQUEST,
            title: 'Request',
            children: <RequestTab fragmentKey={data.httpNetworkEvent} />,
        },
        {
            tabLabel: TabLabel.RESPONSE,
            title: 'Response',
            children: <ResponseTab fragmentKey={data.httpNetworkEvent} />,
        },
    ];

    return (
        <NetworkEventDetailPanelWrapper key="details">
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
        </NetworkEventDetailPanelWrapper>
    );
};

export default NetworkEventDetailPanel;
