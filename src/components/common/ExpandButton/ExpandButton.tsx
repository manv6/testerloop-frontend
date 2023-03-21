import React, { useState } from 'react';
import { Tooltip } from '@mui/material';
import Button from '../Button';
import ChevronIcon from '../ChevronIcon';
import styles from './ExpandButton.module.scss';

type Props = {
    isExpanded: boolean;
    onClick: () => void;
};

const ExpandButton: React.FC<Props> = ({ isExpanded, onClick }) => {
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    return (
        <Tooltip
            title={isExpanded ? 'Collapse' : 'Expand'}
            placement="top"
            arrow
            open={isButtonHovered}
        >
            <div>
                <Button
                    className={styles.expandButton}
                    onClick={onClick}
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                >
                    <ChevronIcon direction={isExpanded ? 'up' : 'down'} />
                </Button>
            </div>
        </Tooltip>
    );
};

export default ExpandButton;
