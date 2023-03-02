import React from 'react';
import { useTimeline } from 'src/hooks/timeline';
import styles from './PlayButton.module.scss';

const PlayButton: React.FC = () => {
    const { setPlaying, isPlaying } = useTimeline();

    return (
        <div className={styles.playButton}>
            <button
                onClick={() => setPlaying(!isPlaying)}
                className={styles.play}
            >
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
                {isPlaying ? 'PAUSE' : 'PLAY'}
            </button>
        </div>
    );
};

export default PlayButton;
