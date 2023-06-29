import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';
import Provider from 'src/hooks/theme/Provider';

describe('<ButtonGroup />', () => {
    it('renders children correctly', () => {
        const buttonTexts = ['Button 1', 'Button 2', 'Button 3'];

        render(
            <Provider>
                <ButtonGroup>
                    {buttonTexts.map((text, index) => (
                        <Button key={index}>{text}</Button>
                    ))}
                </ButtonGroup>
            </Provider>
        );

        buttonTexts.forEach((text) => {
            expect(screen.getByText(text)).toBeInTheDocument();
        });
    });
});
