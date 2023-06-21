import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { styled } from '@mui/material';

type BreadcrumbPath = {
    text: string;
    link?: string;
};

type Props = {
    paths: BreadcrumbPath[];
};

const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.base[200],
    textTransform: 'uppercase',
}));

const BreadCrumb: React.FC<Props> = ({ paths }) => {
    return (
        <Breadcrumbs>
            {paths.map((path, index) => (
                <StyledLink color="inherit" href={path.link} key={index}>
                    {path.text}
                </StyledLink>
            ))}
            <Typography color="textPrimary"></Typography>
        </Breadcrumbs>
    );
};

export default BreadCrumb;
