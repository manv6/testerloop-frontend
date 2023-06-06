import React, { useEffect, useState } from 'react';
import styles from './DomPreviewFallback.module.scss';

const DomPreviewFallback: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => (count + 1) % 3);
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);
    return (
        <div className={styles.domPreview}>
            {/* TODO: Loading icon? */}
            <div className={styles.loading}>
                Loading{new Array(count + 1).fill('.').join('')}
            </div>
        </div>
    );
};

export default DomPreviewFallback;
