import React from 'react';
import styles from './CloseButton.module.scss';
import cx from 'classnames';

export const CloseButton: React.FC<
    React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
    const newProps = Object.assign({}, props, {
        className: cx(props.className, styles.button),
    });
    return <button {...newProps}></button>;
};
