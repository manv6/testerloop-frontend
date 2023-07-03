import { styled } from '@mui/material';
import React from 'react';
import styles from './PanelHeader.module.scss';
import cx from 'classnames';

const StyledHeader = styled('header')(({ theme }) => ({
    backgroundColor: theme.palette.base[400],
    borderBottom: `1px solid ${theme.palette.base[300]}`,
}));

interface Props extends React.PropsWithChildren {
    className?: string;
}

const PanelHeader: React.FC<Props> = ({ children, className }) => {
    return (
        <StyledHeader
            className={cx(styles.panelHeader, className)}
            data-cy="panel-header"
        >
            {children}
        </StyledHeader>
    );
};

export default PanelHeader;
