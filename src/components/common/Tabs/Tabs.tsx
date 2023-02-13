import React from 'react';
import styles from './Tabs.module.scss';
import cx from 'classnames';

type TabProps = {
    tabKey: string;
    title: string;
    children: JSX.Element;
};

type TabContentProps = {
    children: JSX.Element;
};

const TabContent = (props: TabContentProps) => {
    return <>{props.children}</>;
};

type TabButtonProps = {
    onSelect: (tabKey: string | null) => void;
    tabKey: string;
    title: string;
    active: boolean;
};

const TabButton = (props: TabButtonProps) => {
    return (
        <button
            onClick={() => props.onSelect(props.tabKey)}
            className={cx(styles.tabButton, {
                [styles.tabButtonActive]: props.active,
                [styles.tabButtonNotActive]: !props.active,
            })}
        >
            {props.title}
        </button>
    );
};

type TabsProps = {
    tabChildren: TabProps[];
    activeTabKey: string | null;
    onSelect: (tabKey: string | null) => void;
};

export const Tabs = (props: TabsProps) => {
    return (
        <div>
            <div className={styles.tabButtonContainer}>
                {props.tabChildren.map((tabProps) => {
                    const { children, tabKey, ...buttonProps } = tabProps;
                    return (
                        <TabButton
                            key={tabKey}
                            tabKey={tabKey}
                            onSelect={props.onSelect}
                            active={props.activeTabKey === tabKey}
                            {...buttonProps}
                        ></TabButton>
                    );
                })}
            </div>
            <div>
                {props.tabChildren.map((tabProps) => {
                    const { children, tabKey } = tabProps;
                    if (props.activeTabKey !== tabKey) return null;
                    return <TabContent key={tabKey}>{children}</TabContent>;
                })}
            </div>
        </div>
    );
};
