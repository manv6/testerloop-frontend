import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TextInput from './TextInput';
import Provider from 'src/hooks/theme/Provider';
import SearchIcon from '../SearchIcon';

describe('<TextInput />', () => {
    const defaultProps = {
        inputProps: {
            value: 'Test input value',
        },
        placeholder: 'Test placeholder',
    };

    it('renders the TextInput component with default props', () => {
        render(
            <Provider>
                <TextInput {...defaultProps} />
            </Provider>
        );
        expect(
            screen.getByPlaceholderText(defaultProps.placeholder)
        ).toBeInTheDocument();
    });

    it('renders the TextInput component with custom icon', () => {
        render(
            <Provider>
                <TextInput {...defaultProps} inputIcon={<SearchIcon />} />
            </Provider>
        );
        expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    });

    it('renders the TextInput component with correct value', () => {
        render(
            <Provider>
                <TextInput {...defaultProps} />
            </Provider>
        );
        expect(
            screen.getByDisplayValue(defaultProps.inputProps.value)
        ).toBeInTheDocument();
    });

    it('updates the TextInput value on change', () => {
        const handleChange = jest.fn();
        render(
            <Provider>
                <TextInput {...defaultProps} onChange={handleChange} />
            </Provider>
        );
        fireEvent.change(
            screen.getByDisplayValue(defaultProps.inputProps.value),
            {
                target: { value: 'New value' },
            }
        );
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('renders the TextInput component with a custom width', () => {
        const width = '200px';
        render(
            <Provider>
                <TextInput {...defaultProps} width={width} />
            </Provider>
        );
        expect(screen.getByTestId('text-input')).toHaveStyle(`width: ${width}`);
    });
});
