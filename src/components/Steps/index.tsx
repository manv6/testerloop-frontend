import React from 'react';
import cx from 'classnames';
import { useTimeline } from 'src/hooks/timeline';
import steps from 'src/data/steps';
import styles from './Steps.module.scss';

type Props = {
    className?: string;
};

export const Steps: React.FC<Props> = ({ className }) => {
    const {
        currentTime,
        seek,
    } = useTimeline();

    return (
        <div className={cx(className, styles.steps)}>
            {
                steps.map(({ options, timestamp }) => (
                    <div
                        key={`${options.id}-${timestamp}`} // TODO: Should only need ID, but it's not currently unique
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (options.wallClockStartedAt)
                                seek(options.wallClockStartedAt);
                        }}
                    >
                        ({options.state})
                        {options.name} {options.message}
                        {
                            options.wallClockStartedAt <= currentTime &&
                            options.wallClockStartedAt > currentTime && // TODO: THIS IS WRONG. We need an ended time equivalent here
                            '(active)'
                        }
                    </div>
                ))
            }
        </div>
    );
};
