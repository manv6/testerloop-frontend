import React from 'react';
import { Tab as MUITab, Tabs as MUITabs } from '@mui/material';

type TabProps = React.PropsWithChildren<{
    tabLabel: string;
    title: string;
}>;

type TabsProps = {
    tabChildren: TabProps[];
    activeTab: number | null;
    onChange: (value: number) => void;
};

const Tabs: React.FC<TabsProps> = ({ onChange, tabChildren, activeTab }) => {
    return (
        <MUITabs onChange={(e, value) => onChange(value)} value={activeTab}>
            {tabChildren.map(({ children, tabLabel, ...props }, i) => {
                return <MUITab label={tabLabel} key={i} {...props} />;
            })}
        </MUITabs>
    );
};

export default Tabs;
