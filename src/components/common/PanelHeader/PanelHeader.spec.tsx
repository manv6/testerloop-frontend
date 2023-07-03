import React from 'react';
import { render, screen } from '@testing-library/react';
import PanelHeader from './PanelHeader';
import Provider from 'src/hooks/theme/Provider';

describe('<PanelHeader />', () => {
    it('renders the PanelHeader', () => {
        render(
            <Provider>
                <PanelHeader />
            </Provider>
        );
        expect(screen.getByTestId('panel-header')).toBeInTheDocument();
    });

    it('renders with additional class name', () => {
        render(
            <Provider>
                <PanelHeader className="test-class" />
            </Provider>
        );
        const panelHeaderElement = screen.getByTestId('panel-header');
        expect(panelHeaderElement).toHaveClass('test-class');
    });

    it('renders the children', () => {
        const childrenText = 'Test Children Text';
        render(
            <Provider>
                <PanelHeader>{childrenText}</PanelHeader>
            </Provider>
        );
        expect(screen.getByText(childrenText)).toBeInTheDocument();
    });
});
