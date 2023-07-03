/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterButton from './FilterButton';
import Provider, { DARK } from 'src/hooks/theme/Provider';
import { act } from 'react-dom/test-utils';

describe('<FilterButton />', () => {
    let onClickMock: jest.Mock;
    const theme = DARK;
    beforeEach(() => {
        onClickMock = jest.fn();
    });

    it('renders the button', () => {
        render(
            <Provider>
                <FilterButton onClick={onClickMock} isActive={false} />
            </Provider>
        );
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onClick when button is clicked', () => {
        render(
            <Provider>
                <FilterButton onClick={onClickMock} isActive={false} />
            </Provider>
        );
        act(() => {
            userEvent.click(screen.getByRole('button'));
        });
        expect(onClickMock).toHaveBeenCalled();
    });

    it('has the active style when isActive is true', () => {
        render(
            <Provider>
                <FilterButton onClick={onClickMock} isActive={true} />
            </Provider>
        );
        const button = screen.getByRole('button');
        expect(button).toHaveStyle(
            `background-color: ${theme.palette.base[300]}`
        );
        expect(button).toHaveStyle(`border-color: ${theme.palette.base[200]}`);
    });

    it('has the inactive style when isActive is false', () => {
        render(
            <Provider>
                <FilterButton onClick={onClickMock} isActive={false} />
            </Provider>
        );
        const button = screen.getByRole('button');
        expect(button).toHaveStyle(
            `background-color: ${theme.palette.base[400]}`
        );
        expect(button).toHaveStyle(`border-color: ${theme.palette.base[300]}`);
    });
});
