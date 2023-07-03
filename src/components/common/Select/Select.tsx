import React from 'react';
import { Select as MUISelect, SelectProps, styled } from '@mui/material';

const Select = styled((props: SelectProps<string>) => (
    <MUISelect {...props} data-cy="select" />
))(({ theme }) => ({
    backgroundColor: theme.palette.base[400],
    color: theme.palette.base[100],
    fontWeight: 500,
}));

export default Select;
