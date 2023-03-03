import * as React from 'react';
import MUIButton from '@mui/material/Button';

type Props = React.ComponentProps<typeof MUIButton>;
const Button: React.FC<Props> = ({ children, ...props }) => {
    return <MUIButton {...props}>{children}</MUIButton>;
};

export default Button;
