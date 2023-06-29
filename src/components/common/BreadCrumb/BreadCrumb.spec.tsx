import React from 'react';
import { render, screen } from '@testing-library/react';
import BreadCrumb from './BreadCrumb';
import { MemoryRouter } from 'react-router-dom';
import Provider from 'src/hooks/theme/Provider';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useFetcher: () => ({
        load: jest.fn(),
    }),
}));

describe('<BreadCrumb />', () => {
    const paths = [
        { text: 'Home', link: '/' },
        { text: 'Runs', link: '/runs' },
        { text: 'Run 1', link: '/runs/1' },
    ];

    it('renders the correct number of breadcrumbs', () => {
        render(
            <MemoryRouter>
                <Provider>
                    <BreadCrumb paths={paths} />
                </Provider>
            </MemoryRouter>
        );
        paths.forEach((path) => {
            expect(screen.getByText(path.text)).toBeInTheDocument();
        });
    });

    it('renders the correct breadcrumb text', () => {
        render(
            <MemoryRouter>
                <Provider>
                    <BreadCrumb paths={paths} />
                </Provider>
            </MemoryRouter>
        );

        const breadcrumbLinks = screen.getAllByTestId('breadcrumb-link');
        paths.forEach((path, index) => {
            expect(breadcrumbLinks[index]).toHaveTextContent(path.text);
        });
    });

    it('assigns the correct links to breadcrumbs', () => {
        render(
            <MemoryRouter>
                <Provider>
                    <BreadCrumb paths={paths} />
                </Provider>
            </MemoryRouter>
        );

        const breadcrumbLinks = screen.getAllByTestId('breadcrumb-link');
        paths.forEach((path, index) => {
            expect(breadcrumbLinks[index]).toHaveAttribute('href', path.link);
        });
    });
});
