import React from 'react';
import { render, screen } from '@testing-library/react';
import Provider, { DARK } from 'src/hooks/theme/Provider';
import MenuItem from './MenuItem';

describe('<MenuItem />', () => {
    const theme = DARK;

    it('renders the menu item', () => {
        render(
            <Provider>
                <MenuItem>Menu Item</MenuItem>
            </Provider>
        );

        expect(screen.getByText('Menu Item')).toBeInTheDocument();
    });

    it('applies the correct styles when selected', () => {
        render(
            <Provider>
                <MenuItem selected>Menu Item</MenuItem>
            </Provider>
        );

        const menuItem = screen.getByText('Menu Item');

        expect(menuItem).toHaveStyle(
            `background-color: ${theme.palette.status.success[500]}`
        );
        expect(menuItem).toHaveStyle(
            `border-top-color: ${theme.palette.status.success[300]}`
        );
        expect(menuItem).toHaveStyle(
            `border-bottom-color: ${theme.palette.status.success[300]}`
        );
    });
});
