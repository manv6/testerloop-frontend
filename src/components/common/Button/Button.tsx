import * as React from 'react';
import MUIButton from '@mui/material/Button';
import { styled } from '@mui/material';

type StyledButtonProps = {
    styletype?: 'default' | 'primary';
};

const StyledButton = styled(MUIButton)<StyledButtonProps>(
    ({ theme, styletype }) => {
        let backgroundColor;
        let borderColor;
        switch (styletype) {
            case 'primary':
                backgroundColor = theme.palette.primary[400];
                borderColor = theme.palette.primary[300];
                break;
            default:
                backgroundColor = theme.palette.base[400];
                borderColor = theme.palette.base[300];
        }
        return {
            height: '32px',
            border: `1px solid ${borderColor}`,
            color: theme.palette.base[100],
            backgroundColor,
        };
    }
);

type Props = React.ComponentProps<typeof MUIButton> & StyledButtonProps;

const Button: React.FC<Props> = ({
    children,
    styletype = 'default',
    ...props
}) => {
    return (
        <StyledButton styletype={styletype} {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;
