import React, { useEffect } from 'react';

type Args = {
    containerRef: React.RefObject<HTMLElement>;
    childRef: React.RefObject<HTMLElement>;
    dependencies: (string | number | undefined | null)[];
};

const useScrollToChild = ({ containerRef, childRef, dependencies }: Args) => {
    useEffect(() => {
        const container = containerRef.current;
        const child = childRef.current;

        if (container && child) {
            const containerRect = container.getBoundingClientRect();
            const childRect = child.getBoundingClientRect();

            if (
                childRect.top < containerRect.top ||
                childRect.bottom > containerRect.bottom
            ) {
                const scrollToY =
                    container.scrollTop + childRect.top - containerRect.top;

                container.scrollTo({
                    top: scrollToY,
                    behavior: 'smooth',
                });
            }
        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [...dependencies, containerRef, childRef]);
};

export default useScrollToChild;
