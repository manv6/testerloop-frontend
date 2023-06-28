import { styled, StyledComponentProps, Tooltip } from '@mui/material';
import React from 'react';
import { Button } from 'src/components/common';
import styles from './GoToCodeButton.module.scss';

type Props = {
    url: string;
    tooltipText: string;
};

const StyledButton = styled(Button)<StyledComponentProps>(({ theme }) => ({
    a: {
        color: theme.palette.base[100],
    },
}));

const GoToCodeButton: React.FC<Props> = ({ url, tooltipText }) => (
    <StyledButton
        className={styles.goToCodeButton}
        variant="text"
        size="small"
        data-cy="go-to-code-button"
    >
        <Tooltip title={tooltipText} placement="top" arrow>
            <a href={url} target="_blank" rel="noreferrer">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_569_9775)">
                        <path
                            d="M15.5 8.00651e-07H10.5C10.4009 -0.000176365 10.3041 0.029052 10.2217 0.0839806C10.1393 0.138909 10.0751 0.217064 10.0372 0.308538C9.99926 0.400011 9.98935 0.500683 10.0087 0.597791C10.0281 0.6949 10.0759 0.784071 10.146 0.854001L11.939 2.646L6.29296 8.293C6.19745 8.38525 6.12127 8.49559 6.06886 8.6176C6.01645 8.7396 5.98886 8.87082 5.98771 9.0036C5.98655 9.13638 6.01186 9.26806 6.06214 9.39095C6.11242 9.51385 6.18667 9.6255 6.28056 9.7194C6.37446 9.81329 6.48611 9.88754 6.60901 9.93782C6.7319 9.9881 6.86358 10.0134 6.99636 10.0123C7.12914 10.0111 7.26036 9.98351 7.38236 9.9311C7.50437 9.87869 7.61471 9.80251 7.70696 9.707L13.354 4.061L15.146 5.854C15.1925 5.9004 15.2477 5.93718 15.3084 5.96223C15.3692 5.98728 15.4343 6.00012 15.5 6C15.5655 5.99967 15.6303 5.98677 15.691 5.962C15.7824 5.92421 15.8606 5.86013 15.9156 5.77789C15.9706 5.69565 15.9999 5.59894 16 5.5V0.500001C16 0.367393 15.9473 0.240216 15.8535 0.146447C15.7597 0.0526792 15.6326 8.00651e-07 15.5 8.00651e-07Z"
                            fill="#FEFDFF"
                        />
                        <path
                            d="M13 9C12.7348 9 12.4804 9.10536 12.2929 9.29289C12.1054 9.48043 12 9.73478 12 10V14H2V4H6C6.26522 4 6.51957 3.89464 6.70711 3.70711C6.89464 3.51957 7 3.26522 7 3C7 2.73478 6.89464 2.48043 6.70711 2.29289C6.51957 2.10536 6.26522 2 6 2H2C1.46957 2 0.960859 2.21071 0.585786 2.58579C0.210714 2.96086 0 3.46957 0 4L0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H12C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14V10C14 9.73478 13.8946 9.48043 13.7071 9.29289C13.5196 9.10536 13.2652 9 13 9Z"
                            fill="#FEFDFF"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_569_9775">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <span className={styles.buttonText}>Go to code</span>
            </a>
        </Tooltip>
    </StyledButton>
);

export default GoToCodeButton;
