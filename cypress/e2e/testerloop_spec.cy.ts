describe('testerloop debug page', () => {
    const summaryTitlePage = '[data-cy="debug-page-title-text"]';
    const status = '[data-cy="status-tag"]';
    const errorType = '[data-cy="framework-error-name"]';
    const btnGoToCode = '[data-cy="go-to-code-button"]';
    const btnExpandError = '[data-cy="framework-error-expand-button"]';
    const stacktrace = '[data-cy="framework-error-stacktrace"]';
    const btnPlay = '[data-cy="play-button"]';
    const btnFilterStep = '[data-cy="filter-step"]';
    const btnCypressError = '[data-cy="filter-cypressError"]';
    const btnNetworkError = '[data-cy="filter-networkError"]';
    const btnNetworkSuccess = '[data-cy="filter-networkSuccess"]';
    const runId = '[data-cy="run-summary-title"]';
    const testCount = '[data-cy="test-count"]';
    const browser = '[data-cy="test-run-browser"]';
    const branch = '[data-cy="test-run-branch"]';
    const runDatetime = '[data-cy="test-run-datetime"]';
    const author = '[data-cy="test-run-author"]';
    const testExecutionNo = (no: number) => `[data-cy="test-execution-${no}"]`;
    const testsTable = '[data-cy="table"]';

    it('verify Testerloop Debug Contact page', () => {
        cy.fixture('contactPage').then((data) => {
            cy.visit(data.url);
            //verify summary
            cy.get(summaryTitlePage).should('have.text', data.scenario);
            cy.get(status).should('have.text', data.status);

            //verify error component
            cy.get(errorType).should('have.text', data.error);
            cy.get(btnExpandError).click();
            // cy.get(stacktrace).should('have.text', data.stacktrace);
            cy.get(btnGoToCode)
                .find('a')
                .should('have.attr', 'href')
                .and('include', data.line);

            //verify timeline controls
            cy.get(btnPlay).should('be.enabled');
            cy.get(btnFilterStep).should('have.text', 'Steps');
            cy.get(btnCypressError).should('have.text', 'Cypress Error');
            cy.get(btnNetworkError).should('have.text', 'Failed network');
            cy.get(btnNetworkSuccess).should('have.text', 'Success network');

            //verify step definitions
            cy.contains("I visit overloop's website").should('be.visible');
            cy.contains('I navigate to contact page').should('be.visible');
            cy.contains('I fill in contact form details').should('be.visible');
            cy.contains("I visit overloop's website").should('be.visible');

            cy.get('.DomPreview_expandableDom__05a9S').should('be.visible');
            cy.scrollTo(0, 1000);
            //verify at least one console log
            cy.get('.ConsolePanel_expandableConsole__txJbV').should(
                'be.visible'
            );
            cy.contains(
                'SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead.'
            ).should('be.visible');
        });
    });

    it('verify Testerloop Run page', () => {
        cy.fixture('runPage').then((data) => {
            cy.visit(data.url);
            //verify summary
            cy.get(runId).should('have.text', data.runId);
            cy.get(status).first().should('have.text', data.status);
            cy.get(testCount).should('have.text', data.noTests);
            cy.get(branch).should('have.text', data.branch);
            cy.get(runDatetime).should('have.text', data.dateTime);
            cy.get(author).should('have.text', data.author);
            //verify table
            cy.get('tr').should('have.length', 4);
            cy.get(testExecutionNo(0))
                .find('td')
                .eq(0)
                .contains(data.textExecution0Name)
                .should('be.visible');
            cy.get(testExecutionNo(0))
                .find('td')
                .eq(1)
                .contains(data.textExecution0Datetime)
                .should('be.visible');
            cy.get(testExecutionNo(0))
                .find('td')
                .eq(2)
                .contains(data.textExecution0Duration)
                .should('be.visible');
            cy.get(testExecutionNo(0))
                .find('td')
                .eq(3)
                .contains(data.textExecution0Status)
                .should('be.visible');
            cy.get(testExecutionNo(0)).click();
            cy.fixture('contactPage').then((contact) => {
                cy.url().should('eq', contact.url);
            });
        });
    });
});
