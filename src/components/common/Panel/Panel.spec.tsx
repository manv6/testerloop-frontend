/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Panel from './Panel';
import Provider from 'src/hooks/theme/Provider';
import { act } from 'react-dom/test-utils';

describe('<Panel />', () => {
    let onMouseEnterMock: jest.Mock;
    let onMouseLeaveMock: jest.Mock;

    beforeEach(() => {
        onMouseEnterMock = jest.fn();
        onMouseLeaveMock = jest.fn();
    });

    it('renders the Panel', () => {
        render(
            <Provider>
                <Panel
                    onMouseEnter={onMouseEnterMock}
                    onMouseLeave={onMouseLeaveMock}
                />
            </Provider>
        );
        expect(screen.getByTestId('panel-div')).toBeInTheDocument();
    });

    it('calls onMouseEnter when mouse enters the Panel', () => {
        render(
            <Provider>
                <Panel
                    onMouseEnter={onMouseEnterMock}
                    onMouseLeave={onMouseLeaveMock}
                />
            </Provider>
        );
        act(() => {
            userEvent.hover(screen.getByTestId('panel-div'));
        });
        expect(onMouseEnterMock).toHaveBeenCalled();
    });

    it('calls onMouseLeave when mouse leaves the Panel', () => {
        render(
            <Provider>
                <Panel
                    onMouseEnter={onMouseEnterMock}
                    onMouseLeave={onMouseLeaveMock}
                />
            </Provider>
        );
        act(() => {
            userEvent.unhover(screen.getByTestId('panel-div'));
        });
        expect(onMouseLeaveMock).toHaveBeenCalled();
    });

    it('renders with additional class name', () => {
        render(
            <Provider>
                <Panel
                    className="test-class"
                    onMouseEnter={onMouseEnterMock}
                    onMouseLeave={onMouseLeaveMock}
                />
            </Provider>
        );
        const panelElement = screen.getByTestId('panel-div');
        expect(panelElement).toHaveClass('test-class');
    });
});
