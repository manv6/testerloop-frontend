import React from 'react';
import { Select, SelectProps, styled } from '@mui/material';

const StyledSelect = styled((props: SelectProps<string>) => (
    <Select {...props} />
))(({ theme }) => ({
    backgroundColor: theme.palette.base[400],
    color: theme.palette.base[100],
    fontWeight: 500,
}));

export default StyledSelect;
