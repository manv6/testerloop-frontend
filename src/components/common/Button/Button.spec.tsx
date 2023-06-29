import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import Provider, { DARK } from 'src/hooks/theme/Provider';

describe('<Button />', () => {
    const buttonText = 'Click Me';
    const theme = DARK;
    it('renders the button with the correct text', () => {
        render(
            <Provider>
                <Button>{buttonText}</Button>
            </Provider>
        );

        expect(screen.getByText(buttonText)).toBeInTheDocument();
    });

    it('handles onClick correctly', () => {
        const handleClick = jest.fn();
        render(
            <Provider>
                <Button onClick={handleClick}>{buttonText}</Button>
            </Provider>
        );

        fireEvent.click(screen.getByText(buttonText));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders with default styletype if not provided', () => {
        render(
            <Provider>
                <Button>{buttonText}</Button>
            </Provider>
        );

        const button = screen.getByText(buttonText);
        expect(button).toHaveStyle(
            `background-color: ${theme.palette.base[400]}`
        );
        expect(button).toHaveStyle(`border-color: ${theme.palette.base[300]}`);
    });

    it('renders with primary styletype if provided', () => {
        render(
            <Provider>
                <Button styletype="primary">{buttonText}</Button>
            </Provider>
        );

        const button = screen.getByText(buttonText);
        expect(button).toHaveStyle(
            `background-color: ${theme.palette.primary[400]}`
        );
        expect(button).toHaveStyle(
            `border-color: ${theme.palette.primary[300]}`
        );
    });
});
