import React from 'react';
import { MenuItem as MuiMenuItem, MenuItemProps, styled } from '@mui/material';

const MenuItem = styled((props: MenuItemProps) => <MuiMenuItem {...props} />)(
    ({ theme }) => ({
        '&.Mui-selected': {
            borderTopColor: theme.palette.status.success[300],
            borderBottomColor: theme.palette.status.success[300],
            backgroundColor: theme.palette.status.success[500],
        },
        '&:hover': {
            backgroundColor: theme.palette.base[300],
        },
    })
);

export default MenuItem;
