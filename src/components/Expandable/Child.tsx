import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Child.module.scss';

type Props = React.PropsWithChildren<{
    notExpandable?: boolean;
    className?: string;
}>;

const Child: React.FC<Props> = ({ className, notExpandable, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
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
        </div>
    );
};

export default Child;
