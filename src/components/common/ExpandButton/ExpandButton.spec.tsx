/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ExpandButton from './ExpandButton';
import ChevronIcon from '../ChevronIcon';
import Provider from 'src/hooks/theme/Provider';
import userEvent from '@testing-library/user-event';

jest.mock('../ChevronIcon', () => jest.fn());

describe('<ExpandButton />', () => {
    let onClickMock: jest.Mock;

    beforeEach(() => {
        onClickMock = jest.fn();
    });

    it('displays up arrow when isExpanded is true', () => {
        render(
            <Provider>
                <ExpandButton isExpanded onClick={onClickMock} />
            </Provider>
        );
        expect(ChevronIcon).toHaveBeenCalledWith({ direction: 'up' }, {});
    });

    it('displays down arrow when isExpanded is false', () => {
        render(
            <Provider>
                <ExpandButton isExpanded={false} onClick={onClickMock} />
            </Provider>
        );
        expect(ChevronIcon).toHaveBeenCalledWith({ direction: 'down' }, {});
    });

    it('calls onClick when button is clicked', async () => {
        render(
            <Provider>
                <ExpandButton isExpanded onClick={onClickMock} />
            </Provider>
        );
        act(() => {
            userEvent.click(screen.getByRole('button'));
        });
        expect(onClickMock).toHaveBeenCalled();
    });

    it('displays "Collapse" tooltip when isExpanded is true and button is hovered', async () => {
        render(
            <Provider>
                <ExpandButton isExpanded onClick={onClickMock} />
            </Provider>
        );
        act(() => {
            userEvent.hover(screen.getByRole('button'));
        });
        expect(await screen.findByText('Collapse')).toBeInTheDocument();
    });

    it('displays "Expand" tooltip when isExpanded is false and button is hovered', async () => {
        render(
            <Provider>
                <ExpandButton isExpanded={false} onClick={onClickMock} />
            </Provider>
        );
        act(() => {
            userEvent.hover(screen.getByRole('button'));
        });
        expect(await screen.findByText('Expand')).toBeInTheDocument();
    });
});
