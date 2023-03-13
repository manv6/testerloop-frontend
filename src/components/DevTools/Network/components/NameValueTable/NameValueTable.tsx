import { styled } from '@mui/material';
import React from 'react';
import { FormattedNetworkEvents } from 'src/utils/formatters';

import styles from './NameValueTable.module.scss';

type Props = {
    valuePairs: FormattedNetworkEvents[0]['request']['queryString'];
    nameLabel?: string;
    valueLabel?: string;
};

const StyledTd = styled('td')(({ theme }) => ({
    border: `1px solid ${theme.palette.base[300]}`,
}));

const StyledTh = styled('th')(({ theme }) => ({
    border: `1px solid ${theme.palette.base[300]}`,
    color: theme.palette.base[200],
}));

const NameValueTable: React.FC<Props> = ({
    valuePairs,
    nameLabel = 'Name',
    valueLabel = 'Value',
}) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <StyledTh className={styles.th}>{nameLabel}</StyledTh>
                    <StyledTh className={styles.th}>{valueLabel}</StyledTh>
                </tr>
            </thead>
            <tbody>
                {valuePairs.map(({ name, value }, idx) => (
                    <tr className={styles.trBody} key={`${name}-${idx}`}>
                        <StyledTd className={styles.td}>{name}</StyledTd>
                        <StyledTd className={styles.td}>{value}</StyledTd>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default NameValueTable;
