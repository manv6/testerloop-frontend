import React from 'react';
import { render, screen } from '@testing-library/react';
import Tag from './Tag';
import Provider, { DARK } from 'src/hooks/theme/Provider';

describe('<Tag />', () => {
    const theme = DARK;

    it('renders the Tag', () => {
        render(
            <Provider>
                <Tag text="Passed" />
            </Provider>
        );
        expect(screen.getByText('Passed')).toBeInTheDocument();
    });

    it('renders with the correct color for error type', () => {
        render(
            <Provider>
                <Tag text="Failed" tagType="error" />
            </Provider>
        );
        const tagElement = screen.getByText('Failed');
        expect(tagElement).toHaveStyle(
            `background-color: ${theme.palette.status.error[500]}`
        );
        expect(tagElement).toHaveStyle(
            `border-color: ${theme.palette.status.error[300]}`
        );
    });

    it('renders with the correct color for success type', () => {
        render(
            <Provider>
                <Tag text="Passed" tagType="success" />
            </Provider>
        );
        const tagElement = screen.getByText('Passed');
        expect(tagElement).toHaveStyle(
            `background-color: ${theme.palette.status.success[500]}`
        );
        expect(tagElement).toHaveStyle(
            `border-color: ${theme.palette.status.success[300]}`
        );
    });
});
