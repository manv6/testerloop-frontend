import React from 'react';

const FailedNetworkMarker: React.FC = () => (
    <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="1"
            y="1"
            width="8"
            height="8"
            rx="2"
            fill="#FE9C28"
            stroke="#1B2028"
            strokeWidth="2"
        />
    </svg>
);

export default FailedNetworkMarker;
