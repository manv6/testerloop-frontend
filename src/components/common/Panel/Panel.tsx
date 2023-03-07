import React from 'react';
import { styled } from '@mui/material/styles';
import cx from 'classnames';
import styles from './Panel.module.scss';

const StyledDiv = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.base[400],
    borderColor: theme.palette.base[300],
}));

const SuspensePanel: React.FC<React.PropsWithChildren> = ({ children }) => (
    <React.Suspense fallback={<div>Loading</div>}>{children}</React.Suspense>
);

interface Props extends React.PropsWithChildren {
    className?: string;
}

const Panel: React.FC<Props> = ({ children, className }) => (
    <SuspensePanel>
        <StyledDiv className={cx(styles.panel, className)}>
            {children}
        </StyledDiv>
    </SuspensePanel>
);

export default Panel;
