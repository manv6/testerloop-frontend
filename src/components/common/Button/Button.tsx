import * as React from 'react';
import MUIButton from '@mui/material/Button';
import { styled } from '@mui/material';

const StyledButton = styled(MUIButton)(({ theme }) => ({
    border: `1px solid ${theme.palette.base[300]}`,
    color: theme.palette.base[100],
}));

type Props = React.ComponentProps<typeof MUIButton>;
const Button: React.FC<Props> = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
