import React from 'react';
import { render, screen } from '@testing-library/react';
import StepPrefix from './StepPrefix';
import Provider, { DARK } from 'src/hooks/theme/Provider';
import { EventType } from 'src/constants';

describe('<StepPrefix />', () => {
    const theme = DARK;

    it('renders the StepPrefix with type prop', () => {
        render(
            <Provider>
                <StepPrefix type={EventType.STEP} />
            </Provider>
        );
        expect(screen.getByTestId('step-prefix')).toBeInTheDocument();
    });

    it('renders the StepPrefix with type, isSelected props and children', () => {
        const childrenText = 'Test Children Text';
        render(
            <Provider>
                <StepPrefix type={EventType.STEP} isSelected={true}>
                    {childrenText}
                </StepPrefix>
            </Provider>
        );
        expect(screen.getByText(childrenText)).toBeInTheDocument();
    });

    it('has the correct color when isAction is true and isSelected is false', () => {
        render(
            <Provider>
                <StepPrefix
                    type={EventType.STEP}
                    isAction={true}
                    isSelected={false}
                />
            </Provider>
        );
        const stepPrefixElement = screen.getByTestId('step-prefix');
        expect(stepPrefixElement).toHaveStyle(
            `color: ${theme.palette.base[200]}`
        );
    });

    it('has the correct color when isAction and isSelected are true', () => {
        render(
            <Provider>
                <StepPrefix
                    type={EventType.STEP}
                    isAction={true}
                    isSelected={true}
                />
            </Provider>
        );
        const stepPrefixElement = screen.getByTestId('step-prefix');
        expect(stepPrefixElement).toHaveStyle(
            `color: ${theme.palette.base[100]}`
        );
    });
});
