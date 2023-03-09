import React from 'react';
import cx from 'classnames';

import styles from './TextInput.module.scss';
import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import SearchIcon from '../SearchIcon';

type TextInputProps = TextFieldProps & {
    inputProps?: {
        value: string;
    };
    inputIcon?: JSX.Element;
};

const TextInput: React.FC<TextInputProps> = ({
    className,
    inputProps,
    inputIcon,
    ...props
}) => (
    <TextField
        className={cx(className, styles.textField)}
        variant="standard"
        inputProps={inputProps}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    {inputIcon || <SearchIcon />}
                </InputAdornment>
            ),
        }}
        {...props}
    />
);

export default TextInput;
