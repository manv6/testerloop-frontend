import { styled } from '@mui/material';
import React, { ReactNode } from 'react';
import styles from './DetailColumn.module.scss';

type Props = {
    title: ReactNode;
    children: ReactNode;
};

const StyledTitle = styled('div')(({ theme }) => ({
    color: theme.palette.base[200],
}));

const DetailColumn: React.FC<Props> = ({ title, children }) => {
    return (
        <div className={styles.detailColumn}>
            <StyledTitle className={styles.title}>{title}</StyledTitle>
            <div className={styles.detailContent}>{children}</div>
        </div>
    );
};

export default DetailColumn;
