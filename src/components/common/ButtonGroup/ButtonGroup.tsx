import React from 'react';
import { ButtonGroup as MuiButtonGroup } from '@mui/material';

type Props = React.ComponentProps<typeof MuiButtonGroup>;

const ButtonGroup: React.FC<Props> = ({ children, ...props }) => {
    return <MuiButtonGroup {...props}>{children}</MuiButtonGroup>;
};

export default ButtonGroup;
