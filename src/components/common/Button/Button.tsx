import * as React from 'react';
import MUIButton from '@mui/material/Button';
import { styled } from '@mui/material';

type StyledButtonProps = {
    styleType?: 'default' | 'primary';
};

const StyledButton = styled(MUIButton)<StyledButtonProps>(
    ({ theme, styleType }) => {
        let backgroundColor;
        let borderColor;
        switch (styleType) {
            case 'primary':
                backgroundColor = theme.palette.primary[400];
                borderColor = theme.palette.primary[300];
                break;
            default:
                backgroundColor = theme.palette.base[400];
                borderColor = theme.palette.base[300];
        }
        return {
            border: `1px solid ${borderColor}`,
            color: theme.palette.base[100],
            backgroundColor,
        };
    }
);

type Props = React.ComponentProps<typeof MUIButton> & StyledButtonProps;
const Button: React.FC<Props> = ({
    children,
    styleType = 'default',
    ...props
}) => {
    return (
        <StyledButton styleType={styleType} {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;
