import React from 'react';
import { useTimeline } from 'src/hooks/timeline';
import styles from './PlayButton.module.scss';

const PlayButton: React.FC = () => {
    const { setPlaying, isPlaying } = useTimeline();

    return (
        <button onClick={() => setPlaying(!isPlaying)} className={styles.play}>
            {isPlaying ? (
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3.75 0.75H1.5C1.05 0.75 0.75 1.05 0.75 1.5V10.5C0.75 10.95 1.05 11.25 1.5 11.25H3.75C4.2 11.25 4.5 10.95 4.5 10.5V1.5C4.5 1.05 4.2 0.75 3.75 0.75Z"
                        fill="#FEFDFF"
                    />
                    <path
                        d="M10.5 0.75H8.25C7.8 0.75 7.5 1.05 7.5 1.5V10.5C7.5 10.95 7.8 11.25 8.25 11.25H10.5C10.95 11.25 11.25 10.95 11.25 10.5V1.5C11.25 1.05 10.95 0.75 10.5 0.75Z"
                        fill="#FEFDFF"
                    />
                </svg>
            ) : (
                <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.5 5.9993C9.5 5.7548 9.38075 5.5253 9.17975 5.38505L1.67975 0.135049C1.45175 -0.0254508 1.15175 -0.0434508 0.9035 0.0840492C0.65525 0.213799 0.5 0.469549 0.5 0.749299V11.25C0.5 11.5298 0.65525 11.7863 0.9035 11.9153C1.15175 12.0428 1.451 12.0248 1.67975 11.8643L9.17975 6.6143C9.38075 6.4748 9.5 6.2453 9.5 6.0008V5.9993Z"
                        fill="#FEFDFF"
                    />
                </svg>
            )}
            {isPlaying ? 'PAUSE' : 'PLAY'}
        </button>
    );
};

export default PlayButton;
