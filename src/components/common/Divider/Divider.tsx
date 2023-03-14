import React from 'react';
import { styled } from '@mui/material';
import cx from 'classnames';
import styles from './Divider.module.scss';

const StyledDivider = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.base[300],
}));

type Props = {
    className?: string;
};

const Divider: React.FC<Props> = ({ className }) => (
    <StyledDivider className={cx(styles.divider, className)} />
);

export default Divider;
