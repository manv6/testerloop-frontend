import React from 'react';
import styles from './Tabs.module.scss';
import cx from 'classnames';
import Button from '../Button';

type TabProps = React.PropsWithChildren<{
    tabKey: string;
    title: string;
}>;

type TabButtonProps = {
    onSelect: (tabKey: string | null) => void;
    tabKey: string;
    title: string;
    active: boolean;
};

const TabButton = (props: TabButtonProps) => {
    return (
        <Button
            onClick={() => props.onSelect(props.tabKey)}
            className={cx(styles.tabButton, {
                [styles.tabButtonActive]: props.active,
            })}
        >
            {props.title}
        </Button>
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
                {props.tabChildren.map(
                    ({ children, tabKey, ...buttonProps }) => {
                        return (
                            <TabButton
                                key={tabKey}
                                tabKey={tabKey}
                                onSelect={props.onSelect}
                                active={props.activeTabKey === tabKey}
                                {...buttonProps}
                            ></TabButton>
                        );
                    }
                )}
            </div>
            <div>
                {props.tabChildren.map((tabProps) => {
                    const { children, tabKey } = tabProps;
                    if (props.activeTabKey !== tabKey) return null;
                    return <div key={tabKey}>{children}</div>;
                })}
            </div>
        </div>
    );
};
