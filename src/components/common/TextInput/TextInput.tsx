import React from 'react';
import cx from 'classnames';

import styles from './TextInput.module.scss';
import {
    InputAdornment,
    TextField,
    TextFieldProps,
    styled,
} from '@mui/material';
import SearchIcon from '../SearchIcon';

type TextInputProps = TextFieldProps & {
    inputProps?: {
        value: string;
    };
    inputIcon?: JSX.Element;
    width?: string | number;
};

const StyledTextField = styled(TextField)<{ width?: string | number }>`
    width: ${(props) => props.width ?? 'auto'};
`;

const TextInput: React.FC<TextInputProps> = ({
    className,
    inputProps,
    inputIcon,
    width,
    ...props
}) => (
    <StyledTextField
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
        width={width} // Pass width prop here
        {...props}
    />
);

export default TextInput;
