import React from 'react';
import cx from 'classnames';

import styles from './TextInput.module.scss';

// This is just wrapper to prettify the input
export const TextInput: React.FC<React.HTMLProps<HTMLInputElement>> = (
    props
) => {
    const newProps = Object.assign({}, props, {
        className: cx(props.className, styles.input),
        type: 'text',
    });
    return <input {...newProps} />;
};
