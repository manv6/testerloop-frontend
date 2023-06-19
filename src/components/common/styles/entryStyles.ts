import { Theme } from '@mui/material';

interface StyledEntryProps {
    isSelected?: boolean;
    isHovered?: boolean;
}

const entryStyles = ({
    theme,
    isSelected,
    isHovered,
}: StyledEntryProps & { theme: Theme }) => {
    let backgroundColor = theme.palette.base[400];
    let borderColor = theme.palette.base[300];
    if (isSelected) {
        backgroundColor = theme.palette.primary[500];
        borderColor = `${theme.palette.primary[300]}`;
    }
    if (isHovered) {
        backgroundColor = `${theme.palette.base[300]}7F`;
        borderColor = theme.palette.base[300];
    }

    return {
        backgroundColor,
        borderBottom: `1px solid ${borderColor}`,
        borderTop: `1px solid ${borderColor}`,
    };
};

export default entryStyles;
