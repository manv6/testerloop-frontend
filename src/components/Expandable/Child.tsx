import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Child.module.scss';
import { Panel } from 'src/components/common';

type Props = React.PropsWithChildren<{
    notExpandable?: boolean;
    className?: string;
}>;

const Child: React.FC<Props> = ({ className, notExpandable, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Panel
            className={cx(className, styles.child, {
                [styles.expanded]: isExpanded,
            })}
        >
            {notExpandable ? null : (
                <button
                    className={styles.expand}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? 'Collapse' : 'Expand'}
                </button>
            )}
            {children}
        </Panel>
    );
};

export default Child;
