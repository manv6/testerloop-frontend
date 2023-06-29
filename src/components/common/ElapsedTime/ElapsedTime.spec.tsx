import { render, screen } from '@testing-library/react';
import React from 'react';
import ElapsedTime from './ElapsedTime';
import { TimelineContext } from 'src/hooks/timeline/context';
import Provider from 'src/hooks/theme/Provider';

describe('<ElapsedTime />', () => {
    beforeAll(() => {
        jest.spyOn(Date, 'now').mockImplementation(() =>
            new Date(2023, 5, 27, 13, 37, 0).valueOf()
        );
    });

    afterAll(() => {
        jest.spyOn(Date, 'now').mockRestore();
    });

    it('displays the correct elapsed time', () => {
        const startTime = new Date(2023, 5, 27, 13, 37, 0);
        const timestamp = new Date(2023, 5, 27, 13, 37, 10);
        const contextValue = {
            isPlaying: false,
            setPlaying: jest.fn(),
            startTime,
            endTime: new Date(),
            currentTime: new Date(),
            currentTimeFraction: 0,
            hoverTime: null,
            hoverTimeFraction: null,
            setHoverTime: jest.fn(),
            setHoverTimeFraction: jest.fn(),
            seek: jest.fn(),
            seekFraction: jest.fn(),
            speed: 1,
            setSpeed: jest.fn(),
        };

        render(
            <Provider>
                <TimelineContext.Provider value={contextValue}>
                    <ElapsedTime timestamp={timestamp.getTime()} />
                </TimelineContext.Provider>
            </Provider>
        );

        expect(screen.getByText(/0:10 • 000 ms/)).toBeInTheDocument();
    });

    it('displays no elapsed time if no timestamp provided', () => {
        const contextValue = {
            isPlaying: false,
            setPlaying: jest.fn(),
            startTime: new Date(),
            endTime: new Date(),
            currentTime: new Date(),
            currentTimeFraction: 0,
            hoverTime: null,
            hoverTimeFraction: null,
            setHoverTime: jest.fn(),
            setHoverTimeFraction: jest.fn(),
            seek: jest.fn(),
            seekFraction: jest.fn(),
            speed: 1,
            setSpeed: jest.fn(),
        };

        render(
            <Provider>
                <TimelineContext.Provider value={contextValue}>
                    <ElapsedTime timestamp={0} />
                </TimelineContext.Provider>
            </Provider>
        );

        expect(screen.queryByText(/ • /)).not.toBeInTheDocument();
        expect(screen.queryByText(/ ms$/)).not.toBeInTheDocument();
    });
});
