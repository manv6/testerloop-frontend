import React from 'react';
import { Button } from 'src/components/common';
import styles from './CompareButton.module.scss';

const CompareButton: React.FC = () => {
    return (
        <Button size="small" className={styles.compareButton}>
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 5H12.6L11.3 6.3C10.9 6.7 10.9 7.3 11.3 7.7C11.5 7.9 11.7 8 12 8C12.3 8 12.5 7.9 12.7 7.7L15.7 4.7C16.1 4.3 16.1 3.7 15.7 3.3L12.7 0.3C12.3 -0.1 11.7 -0.1 11.3 0.3C10.9 0.7 10.9 1.3 11.3 1.7L12.6 3H1C0.4 3 0 3.4 0 4C0 4.6 0.4 5 1 5Z"
                    fill="#FEFDFF"
                />
                <path
                    d="M15 11H3.4L4.7 9.7C5.1 9.3 5.1 8.7 4.7 8.3C4.3 7.9 3.7 7.9 3.3 8.3L0.3 11.3C-0.1 11.7 -0.1 12.3 0.3 12.7L3.3 15.7C3.5 15.9 3.7 16 4 16C4.3 16 4.5 15.9 4.7 15.7C5.1 15.3 5.1 14.7 4.7 14.3L3.4 13H15C15.6 13 16 12.6 16 12C16 11.4 15.6 11 15 11Z"
                    fill="#FEFDFF"
                />
            </svg>
            Compare
        </Button>
    );
};

export default CompareButton;
