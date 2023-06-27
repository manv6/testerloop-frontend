import React from 'react';
import { mount } from '@cypress/react18';
import Accordion from './Accordion';
import ThemeProvider from 'src/hooks/theme/Provider';

describe('<Accordion />', () => {
    const title = 'Test Title';
    const content = 'Test Content';

    it('renders title and content correctly', () => {
        mount(
            <ThemeProvider>
                <Accordion title={title}>{content}</Accordion>
            </ThemeProvider>
        );

        cy.get('[data-cy="accordion-summary"').contains(title);
        cy.get('[data-cy="accordion-details"').contains(content);
    });

    it('renders ChevronIcon', () => {
        mount(
            <ThemeProvider>
                <Accordion title={title}>{content}</Accordion>
            </ThemeProvider>
        );

        cy.get('svg').should('exist');
    });

    it('handles no content correctly', () => {
        mount(
            <ThemeProvider>
                <Accordion title={title} />
            </ThemeProvider>
        );

        cy.get('[data-cy="accordion-summary"').contains(title);
        cy.get('[data-cy="accordion-details"').should('not.be.visible');
    });

    it('toggles content visibility on summary click', () => {
        mount(
            <ThemeProvider>
                <Accordion title={title}>{content}</Accordion>
            </ThemeProvider>
        );

        cy.get('[data-cy="accordion-summary"').contains(title);
        cy.get('[data-cy="accordion-details"').should('not.be.visible');
        cy.get('[data-cy="accordion-summary"').click();
        cy.get('[data-cy="accordion-details"').should('be.visible');
    });
});
