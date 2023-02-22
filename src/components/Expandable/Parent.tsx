import React from 'react';
import cx from 'classnames';
import styles from './Parent.module.scss';

type Props = React.PropsWithChildren<{
    className?: string;
}>;

const Parent: React.FC<Props> = ({ className, children }) => {
    return <div className={cx(className, styles.parent)}>{children}</div>;
};

export default Parent;
