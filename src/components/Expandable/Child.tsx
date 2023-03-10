import React, { ReactNode, useState } from 'react';
import cx from 'classnames';
import styles from './Child.module.scss';
import { Button, Panel, PanelHeader } from 'src/components/common';
import { CollapseIcon, ExpandIcon } from './components';

type Props = React.PropsWithChildren<{
    notExpandable?: boolean;
    className?: string;
    header?: ReactNode;
}>;

const Child: React.FC<Props> = ({
    className,
    notExpandable,
    children,
    header,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Panel
            className={cx(className, styles.child, {
                [styles.expanded]: isExpanded,
            })}
        >
            <PanelHeader>
                <div className={styles.header}>{header}</div>
                <div>
                    <Button
                        size="small"
                        className={cx(styles.expand, {
                            [styles.hide]: notExpandable,
                        })}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? <CollapseIcon /> : <ExpandIcon />}
                    </Button>
                </div>
            </PanelHeader>
            {children}
        </Panel>
    );
};

export default Child;
