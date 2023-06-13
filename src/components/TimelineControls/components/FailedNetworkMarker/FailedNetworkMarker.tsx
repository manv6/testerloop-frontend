import React from 'react';

const FailedNetworkMarker: React.FC = () => (
    <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="1"
            y="1"
            width="10"
            height="10"
            rx="2"
            fill="#FFBF40"
            stroke="#121418"
            strokeWidth="2"
        />
    </svg>
);

export default FailedNetworkMarker;
