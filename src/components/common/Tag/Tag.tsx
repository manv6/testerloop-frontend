import { styled } from '@mui/material';
import React, { ReactNode } from 'react';
import cx from 'classnames';
import styles from './Tag.module.scss';

type StyledTagProps = {
    tagType?: 'error' | 'success';
};

const StyledTag = styled('div')<StyledTagProps>(({ theme, tagType }) => {
    let backgroundColor;
    let borderColor;

    switch (tagType) {
        case 'error':
            backgroundColor = theme.palette.status.error[500];
            borderColor = theme.palette.status.error[300];
            break;
        case 'success':
            backgroundColor = theme.palette.status.success[500];
            borderColor = theme.palette.status.success[300];
            break;
    }
    return {
        backgroundColor,
        border: `1px solid ${borderColor}`,
    };
});

type Props = {
    className?: string;
    text: ReactNode;
} & StyledTagProps;

const Tag: React.FC<Props> = ({ text, tagType = 'error', className }) => (
    <StyledTag
        className={cx(styles.tag, className)}
        tagType={tagType}
        data-cy="status-tag"
    >
        {text}
    </StyledTag>
);

export default Tag;
