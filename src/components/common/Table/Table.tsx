import { Table, TableProps, styled } from '@mui/material';
import React from 'react';

const StyledMuiTable = styled(Table)(({ theme }) => ({
    '& thead th': {
        color: theme.palette.base[100],
        textAlign: 'left',
        height: '52px',
        borderBottom: `1px solid ${theme.palette.base[300]}`,
        paddingLeft: '24px',
        textTransform: 'uppercase',
        fontWeight: 500,
    },
    '& thead th:last-child': {
        textAlign: 'center',
        paddingRight: '24px',
    },
    '& tbody td': {
        textAlign: 'left',
        verticalAlign: 'middle',
        height: '52px',
        borderBottom: `1px solid ${theme.palette.base[300]}`,
        paddingLeft: '24px',
    },
    '& tbody td:last-child': {
        textAlign: 'center',
        paddingRight: '24px',
    },
    border: `1px solid ${theme.palette.base[300]}`,
}));

type Props = TableProps &
    React.PropsWithChildren<{
        className?: string;
    }>;

const StyledTable: React.FC<Props> = ({ children, ...props }) => {
    return <StyledMuiTable {...props}>{children}</StyledMuiTable>;
};

export default StyledTable;
