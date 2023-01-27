import React from "react";
import cx from 'classnames';
import { useTimeline } from "../../hooks/timeline";
import scenario from "../../data/scenario";

type Props = {
    className?: string;
};

export const Steps: React.FC<Props> = ({ className }) => {
    const {
        currentTime,
        seek,
    } = useTimeline();

    return (
        <div className={cx(className)}>
            {
                scenario.steps.map((step, i) => (
                    /* TODO: Don't use `i` as a key */
                    <div
                        key={i}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (step.from)
                                seek(step.from);
                        }}
                    >
                        ({step.result.status})
                        {step.keyword} {step.name}
                        {
                            step.from && step.from <= currentTime &&
                            step.to && step.to > currentTime &&
                            '(active)'
                        }
                    </div>
                ))
            }
        </div>
    )
};
