/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeaderWithFilter from './HeaderWithFilter';
import Provider from 'src/hooks/theme/Provider';
import { act } from 'react-dom/test-utils';

describe('<HeaderWithFilter />', () => {
    let toggleFilterMock: jest.Mock;

    beforeEach(() => {
        toggleFilterMock = jest.fn();
    });

    it('renders the title', () => {
        render(
            <Provider>
                <HeaderWithFilter
                    title="Test Title"
                    toggleFilter={toggleFilterMock}
                    isFilterOn={false}
                />
            </Provider>
        );
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('calls toggleFilter when FilterButton is clicked', () => {
        render(
            <Provider>
                <HeaderWithFilter
                    title="Test Title"
                    toggleFilter={toggleFilterMock}
                    isFilterOn={false}
                />
            </Provider>
        );
        act(() => {
            userEvent.click(screen.getByRole('button'));
        });
        expect(toggleFilterMock).toHaveBeenCalled();
    });
});
