import React from 'react';
import { styled } from '@mui/material/styles';
import cx from 'classnames';
import styles from './Panel.module.scss';

const StyledDiv = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.base[400],
    borderColor: theme.palette.base[300],
    border: `1px solid ${theme.palette.base[300]}`,
    borderRadius: '5px',
}));

const SuspensePanel: React.FC<React.PropsWithChildren> = ({ children }) => (
    <React.Suspense fallback={<div>Loading</div>}>{children}</React.Suspense>
);

interface Props extends React.PropsWithChildren {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    className?: string;
}

const Panel: React.FC<Props> = ({
    children,
    className,
    onMouseEnter,
    onMouseLeave,
    ...props
}) => (
    <SuspensePanel>
        <StyledDiv
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={cx(styles.panel, className)}
            data-cy="panel-div"
            {...props}
        >
            {children}
        </StyledDiv>
    </SuspensePanel>
);

export default Panel;
