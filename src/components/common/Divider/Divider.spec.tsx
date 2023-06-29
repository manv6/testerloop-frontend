import React from 'react';
import { render, screen } from '@testing-library/react';
import Divider from './Divider';
import Provider from 'src/hooks/theme/Provider';

describe('<Divider />', () => {
    it('renders', () => {
        render(
            <Provider>
                <Divider />
            </Provider>
        );
        const dividerElement = screen.getByTestId('divider');
        expect(dividerElement).toBeInTheDocument();
    });

    it('renders with additional class name', () => {
        render(
            <Provider>
                <Divider className="test-class" />
            </Provider>
        );
        const dividerElement = screen.getByTestId('divider');
        expect(dividerElement).toHaveClass('test-class');
    });
});
