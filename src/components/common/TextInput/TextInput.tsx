import React from 'react';
import cx from 'classnames';

import styles from './TextInput.module.scss';

// This is just wrapper to prettify the input
export const TextInput: React.FC<React.HTMLProps<HTMLInputElement>> = ({
    className,
    ...props
}) => {
    return <input className={cx(className, styles.input)} {...props} />;
};
