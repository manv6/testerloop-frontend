import { useTimeline } from "../../hooks/timeline"


export const TimelineControls: React.FunctionComponent<{}> = () => {
    const {
        currentTimeFraction,
        hoverTimeFraction,
        isPlaying,
        setPlaying,
        setHoverTimeFraction,
        seekFraction,
    } = useTimeline();

    return (
        <div
            style={{
                grid: "'play_button seeker' 1fr / 40px 1fr",
                display: "grid",
                height: "30px",
            }}
        >
            <div
                onClick={() => setPlaying(!isPlaying)}
                style={{
                    gridArea: "play_button",
                    border: "1px solid black",
                }}
            >
                {isPlaying ? 'Pause' : 'Play'}
            </div>
            <div
                style={{
                    gridArea: "seeker",
                    margin: "5px",
                    border: "1px solid black",
                    position: "relative",
                }}
                onMouseMove={(ev) => {
                    setHoverTimeFraction((ev.clientX - ev.currentTarget.offsetLeft) / ev.currentTarget.offsetWidth);
                }}
                onMouseLeave={(ev) => {
                    setHoverTimeFraction(null);
                }}
                onClick={(ev) => {
                    seekFraction((ev.clientX - ev.currentTarget.offsetLeft) / ev.currentTarget.offsetWidth);
                }}
            >
                <div
                    style={{
                        background: "#CCC",
                        borderRight: "1px solid #666",
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: `${100 - 100 * currentTimeFraction}%`
                    }}
                >
                </div>
                {
                    hoverTimeFraction
                    && <div
                            style={{
                                borderRight: "1px solid #000",
                                position: 'absolute',
                                top: 0,
                                left: "",
                                bottom: 0,
                                right: `${100 - 100 * hoverTimeFraction}%`
                            }}
                        >
                        </div>
                }
            </div>
        </div>
    )
}
