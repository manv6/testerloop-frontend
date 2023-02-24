import React from 'react';
import styles from './CloseButton.module.scss';
import cx from 'classnames';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CloseButton: React.FC<Props> = ({ className, ...props }) => {
    return (
        <button className={cx(className, styles.button)} {...props}></button>
    );
};
