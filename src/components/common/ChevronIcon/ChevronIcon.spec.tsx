import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChevronIcon from './ChevronIcon';

describe('<ChevronIcon />', () => {
    it('renders correctly when direction is "up"', () => {
        render(<ChevronIcon direction="up" />);
        const svgElement = screen.getByTestId('chevron-icon-svg-up');
        expect(svgElement).toBeInTheDocument();
    });

    it('renders correctly when direction is "down"', () => {
        render(<ChevronIcon direction="down" />);
        const svgElement = screen.getByTestId('chevron-icon-svg-down');
        expect(svgElement).toBeInTheDocument();
    });
});
