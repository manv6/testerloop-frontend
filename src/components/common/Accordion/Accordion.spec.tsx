import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from './Accordion';
import Provider from 'src/hooks/theme/Provider';

describe('<Accordion />', () => {
    const title = 'Test Title';
    const content = 'Test Content';

    it('renders title and content correctly', () => {
        render(
            <Provider>
                <Accordion title={title}>{content}</Accordion>
            </Provider>
        );

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(content)).toBeInTheDocument();
    });

    it('handles no content correctly', () => {
        render(
            <Provider>
                <Accordion title={title} />
            </Provider>
        );

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.queryByText(content)).not.toBeInTheDocument();
    });

    it('toggles content visibility on summary click', () => {
        render(
            <Provider>
                <Accordion title={title}>{content}</Accordion>
            </Provider>
        );
        expect(screen.queryByText(content)).not.toBeVisible();
        fireEvent.click(screen.getByText(title));
        expect(screen.getByText(content)).toBeInTheDocument();
    });
});
