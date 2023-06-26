import React from 'react';
import { MenuItem, MenuItemProps, styled } from '@mui/material';

const StyledMenuItem = styled((props: MenuItemProps) => (
    <MenuItem {...props} />
))(({ theme }) => ({
    '&.Mui-selected': {
        borderTopColor: theme.palette.status.success[300],
        borderBottomColor: theme.palette.status.success[300],
        backgroundColor: theme.palette.status.success[500],
    },
    '&:hover': {
        backgroundColor: theme.palette.base[300],
    },
}));

export default StyledMenuItem;
