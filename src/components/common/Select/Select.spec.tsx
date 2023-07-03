import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import Provider from 'src/hooks/theme/Provider';
import Select from './Select';
import { MenuItem } from '@mui/material';

describe('<Select />', () => {
    const testOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
    ];

    it('renders the Select component', () => {
        render(
            <Provider>
                <Select value="option1">
                    {testOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </Provider>
        );
        expect(screen.getByTestId('select')).toBeInTheDocument();
    });

    it('changes value when an option is clicked', async () => {
        const handleChange = jest.fn();
        render(
            <Provider>
                <Select value="option1" onChange={handleChange}>
                    {testOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </Provider>
        );

        fireEvent.mouseDown(screen.getByRole('button'));

        const listbox = within(screen.getByRole('listbox'));
        const optionElement = listbox.getByText(/Option 2/i);
        fireEvent.click(optionElement);

        expect(handleChange).toBeCalledTimes(1);
    });
});
