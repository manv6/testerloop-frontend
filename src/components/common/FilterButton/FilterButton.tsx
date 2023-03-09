import React from 'react';
import { Button } from 'src/components/common';
import styles from './FilterButton.module.scss';

type Props = {
    onClick: () => void;
};

const FilterButton: React.FC<Props> = ({ onClick }) => {
    return (
        <Button
            className={styles.filterButton}
            onClick={onClick}
            size="small"
            variant="text"
        >
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_569_10150)">
                    <path
                        d="M16 3C16 0.0840001 8.819 0 8 0C7.181 0 0 0.0840001 0 3C0 3.457 0.191 3.837 0.492 4.166L6 10.37V15C6 15.553 6.448 16 7 16H9C9.552 16 10 15.553 10 15V10.37L15.47 4.207C15.794 3.87 16 3.476 16 3ZM8 2C11.137 2 13.155 2.584 13.829 3C13.155 3.416 11.137 4 8 4C4.863 4 2.845 3.416 2.171 3C2.845 2.584 4.863 2 8 2Z"
                        fill="#FEFDFF"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_569_10150">
                        <rect width="16" height="16" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <span>Filter</span>
        </Button>
    );
};

export default FilterButton;
