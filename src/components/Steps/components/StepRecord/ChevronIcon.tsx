import React from 'react';

interface Props {
    direction: 'up' | 'down';
}

const iconDrawPath: Record<'up' | 'down', string> = {
    up: 'M4.5 15.75l7.5-7.5 7.5 7.5',
    down: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
};

const ChevronIcon: React.FC<Props> = ({ direction }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            style={{ width: 24, height: 24 }}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={iconDrawPath[direction]}
            />
        </svg>
    );
};

export default ChevronIcon;
