import React from 'react';
import { styled } from '@mui/material';
import styles from './NetworkEventDetailPanelWrapper.module.scss';
import cx from 'classnames';

export const StyledEventPanel = styled('div')(({ theme }) => ({
    borderLeft: `1px solid ${theme.palette.base[300]}`,
    backgroundColor: theme.palette.base[400],
}));

interface Props extends React.PropsWithChildren {
    className?: string;
}

const NetworkEventDetailPanelWrapper: React.FC<Props> = ({
    children,
    className,
}) => (
    <StyledEventPanel className={cx(styles.wrapper, className)}>
        {children}
    </StyledEventPanel>
);

export default NetworkEventDetailPanelWrapper;
