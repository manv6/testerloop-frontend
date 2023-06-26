import React from 'react';
import { Breadcrumbs } from '@mui/material';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFetcher } from 'react-router-dom';
import styles from './BreadCrumb.module.scss';
type BreadcrumbPath = {
    text: string;
    link: string;
};

type Props = {
    paths: BreadcrumbPath[];
};

const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.base[200],
    textTransform: 'uppercase',
}));

const BreadCrumb: React.FC<Props> = ({ paths }) => {
    const preloadFetcher = useFetcher();

    return (
        <div className={styles.breadcrumb}>
            <Breadcrumbs>
                {paths.map((path) => (
                    <StyledLink
                        key={path.link}
                        to={path.link}
                        onMouseEnter={() => preloadFetcher.load(path.link)}
                    >
                        {path.text}
                    </StyledLink>
                ))}
            </Breadcrumbs>
        </div>
    );
};

export default BreadCrumb;
