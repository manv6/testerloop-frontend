import React from 'react';
import { styled } from '@mui/material/styles';
import cx from 'classnames';
import styles from './Panel.module.scss';

const StyledDiv = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary[400],
    borderColor: theme.palette.primary[300],
}));

interface Props extends React.PropsWithChildren {
    className?: string;
}

const Panel: React.FC<Props> = ({ children, className }) => (
    <StyledDiv className={cx(styles.panel, className)}>{children}</StyledDiv>
);

export default Panel;
