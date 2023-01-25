import { FunctionComponent } from "react";
import { useTimeline } from "../../hooks/timeline";
import scenario from "../../data/scenario";

export const Steps: FunctionComponent = () => {
    const {
        currentTime,
        seek,
    } = useTimeline();

    return (
        <div>
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
