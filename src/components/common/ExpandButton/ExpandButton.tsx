import React from 'react';
import { Tooltip } from '@mui/material';
import Button from '../Button';
import ChevronIcon from '../ChevronIcon';
import styles from './ExpandButton.module.scss';

type Props = {
    isExpanded: boolean;
    onClick: () => void;
};

const ExpandButton: React.FC<Props> = ({ isExpanded, onClick }) => (
    <Tooltip
        title={isExpanded ? 'Collapse' : 'Expand'}
        placement="top"
        arrow
        open
    >
        <div>
            <Button className={styles.expandButton} onClick={onClick}>
                <ChevronIcon direction={isExpanded ? 'up' : 'down'} />
            </Button>
        </div>
    </Tooltip>
);

export default ExpandButton;
