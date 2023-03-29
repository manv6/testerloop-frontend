import React from 'react';
import { Tabs, Button } from 'src/components/common';
import styles from './NetworkEventDetailPanel.module.scss';
import { styled } from '@mui/material';
import { CollapseIcon } from 'src/components/Expandable/components';
import { TabLabel } from '../../NetworkPanel';
import { useFragment } from 'react-relay';
import NetworkEventDetailPanelFragment from './NetworkEventDetailPanelFragment';
import { NetworkEventDetailPanelFragment$key } from './__generated__/NetworkEventDetailPanelFragment.graphql';
import RequestTab from '../RequestTab';
import ResponseTab from '../ResponseTab';

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
            children: <ResponseTab selectedEvent={data} />,
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
