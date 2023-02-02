import React, { useState } from 'react';
import cx from 'classnames';
import styles from './StepRecord.module.scss';
import { Step, StepHierarchy } from '../../Steps';

interface Props {
	step: Step;
	childrenSteps: StepHierarchy[];

	isSelected: boolean;
	isHovered: boolean;

	onClick: React.MouseEventHandler<HTMLElement>;
}

const StepRecord: React.FC<Props> = ({ step, childrenSteps, isSelected, isHovered, onClick }) => {
    const { timestamp, options } = step;
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const toggleExpandedState = () => setIsExpanded(!isExpanded);

    const iconDrawPath = isExpanded
        // Chevron up
        ? 'M4.5 15.75l7.5-7.5 7.5 7.5'
        // Chevron down
        : 'M19.5 8.25l-7.5 7.5-7.5-7.5';

    return (
        <tr
            // TODO: Should only need ID, but it's not currently unique
            key={`${options.id}-${timestamp}`}
            onClick={onClick}
            className={cx(
                styles.stepRecord,
                { [styles.selected]: isSelected, [styles.hovered]: isHovered }
            )}
        >
            <td className={styles.stepName}>
                {options.name}
            </td>

            <td className={styles.stepContent}>
                <div className={styles.stepHeader}>
                    <div className={options.state === 'passed' ? styles.success : styles.error}>
                        {/* TODO: No need to slice, just for now to dismiss `**` in all steps */}
                        {options.message.slice(2, options.message.length - 2)}
                    </div>

                    <button className={styles.toggleExpandedButton} onClick={toggleExpandedState}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            style={{ width: 24, height: 24}}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d={iconDrawPath} />
                        </svg>
                    </button>
                </div>

                {isExpanded &&
                    <div>
                        {childrenSteps.map(child => {
                            return <div key={`${child.step.options.id}-${child.step.timestamp}`}>
                                {child.step.options.name}
                            </div>;
                        })}
                    </div>
                }
            </td>
        </tr>
    );
};

export default StepRecord;