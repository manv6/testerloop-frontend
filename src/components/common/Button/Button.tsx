import * as React from 'react';
import MUIButton from '@mui/material/Button';
import { styled } from '@mui/material';

type StyledButtonProps = {
    styletype?: 'default' | 'primary';
    customHeight?: string;
};

const StyledButton = styled(MUIButton)<StyledButtonProps>(
    ({ theme, styletype, customHeight }) => {
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
            height: customHeight || 'auto',
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
    customHeight,
    ...props
}) => {
    return (
        <StyledButton
            styletype={styletype}
            customHeight={customHeight}
            {...props}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
