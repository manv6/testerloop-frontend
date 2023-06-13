import { styled } from '@mui/material';
import React from 'react';
import styles from './ErrorIcon.module.scss';

const StyledErrorCircle = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.status.error[500],
    border: `1px solid ${theme.palette.status.error[300]}`,
}));

const ErrorIcon: React.FC = () => (
    <StyledErrorCircle className={styles.errorCircle}>
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_326_26347)">
                <path
                    d="M15.8001 12.526L9.4831 0.880001C9.3273 0.591065 9.08972 0.354523 8.8001 0.200001C8.40662 -0.010568 7.94592 -0.0572588 7.51819 0.0700845C7.09047 0.197428 6.73033 0.488504 6.5161 0.880001L0.200098 12.526C0.0619904 12.7823 -0.0070628 13.0701 -0.000276352 13.3611C0.0065101 13.6522 0.0889027 13.9365 0.238805 14.186C0.388708 14.4356 0.600962 14.6419 0.854712 14.7846C1.10846 14.9273 1.39497 15.0015 1.6861 15H14.3141C14.5931 15 14.8679 14.9313 15.1141 14.8C15.3092 14.6965 15.4818 14.5553 15.622 14.3847C15.7623 14.2142 15.8674 14.0175 15.9312 13.8061C15.9951 13.5947 16.0165 13.3727 15.9942 13.153C15.9718 12.9333 15.9052 12.7202 15.8001 12.526ZM8.0001 13C7.80232 13 7.60898 12.9414 7.44453 12.8315C7.28008 12.7216 7.15191 12.5654 7.07622 12.3827C7.00053 12.2 6.98073 11.9989 7.01931 11.8049C7.0579 11.6109 7.15314 11.4327 7.29299 11.2929C7.43284 11.153 7.61103 11.0578 7.80501 11.0192C7.99899 10.9806 8.20006 11.0004 8.38278 11.0761C8.56551 11.1518 8.72169 11.28 8.83157 11.4444C8.94145 11.6089 9.0001 11.8022 9.0001 12C9.0001 12.2652 8.89474 12.5196 8.7072 12.7071C8.51967 12.8946 8.26531 13 8.0001 13ZM9.0001 9.5C9.0001 9.63261 8.94742 9.75979 8.85365 9.85356C8.75988 9.94732 8.63271 10 8.5001 10H7.5001C7.36749 10 7.24031 9.94732 7.14654 9.85356C7.05278 9.75979 7.0001 9.63261 7.0001 9.5V5.5C7.0001 5.36739 7.05278 5.24022 7.14654 5.14645C7.24031 5.05268 7.36749 5 7.5001 5H8.5001C8.63271 5 8.75988 5.05268 8.85365 5.14645C8.94742 5.24022 9.0001 5.36739 9.0001 5.5V9.5Z"
                    fill="#FEFDFF"
                />
            </g>
            <defs>
                <clipPath id="clip0_326_26347">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    </StyledErrorCircle>
);

export default ErrorIcon;
