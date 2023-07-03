import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tabs from './Tabs';

describe('<Tabs />', () => {
    const tabChildren = [
        { tabLabel: 'Tab1', title: 'Title1' },
        { tabLabel: 'Tab2', title: 'Title2' },
    ];
    const mockOnChange = jest.fn();

    it('renders Tabs', () => {
        render(
            <Tabs
                tabChildren={tabChildren}
                onChange={mockOnChange}
                activeTab={0}
            />
        );
        tabChildren.forEach(({ tabLabel }) => {
            expect(screen.getByText(tabLabel)).toBeInTheDocument();
        });
    });

    it('calls onChange with correct value when a Tab is clicked', () => {
        render(
            <Tabs
                tabChildren={tabChildren}
                onChange={mockOnChange}
                activeTab={0}
            />
        );
        fireEvent.click(screen.getByText(tabChildren[1].tabLabel));
        expect(mockOnChange).toHaveBeenCalledWith(1);
    });
});
