import React, { ReactNode, useState } from 'react';
import cx from 'classnames';
import styles from './Child.module.scss';
import { Button, Panel } from 'src/components/common';
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
            {header}
            {notExpandable ? null : (
                <Button
                    size="small"
                    className={styles.expand}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? <CollapseIcon /> : <ExpandIcon />}
                </Button>
            )}
            {children}
        </Panel>
    );
};

export default Child;
