import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';
import Provider from 'src/hooks/theme/Provider';

describe('<Table />', () => {
    it('renders the Table', () => {
        render(
            <Provider>
                <Table data-testid="table" />
            </Provider>
        );
        expect(screen.getByTestId('table')).toBeInTheDocument();
    });

    it('renders children', () => {
        const children = (
            <thead>
                <tr>
                    <th>Header</th>
                </tr>
            </thead>
        );

        render(
            <Provider>
                <Table data-testid="table">{children}</Table>
            </Provider>
        );
        expect(screen.getByText('Header')).toBeInTheDocument();
    });
});
