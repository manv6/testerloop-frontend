import { useMemo } from "react";
import { useTimeline } from "../../hooks/timeline";
import domSnapshots from "../../data/domSnapshots";

export const DomPreview: React.FunctionComponent<{}> = () => {
    const { currentTime } = useTimeline();

    const currentBody = useMemo(
        () => domSnapshots.find(({ from, to }) => from <= currentTime && to > currentTime),
        [domSnapshots, currentTime],
    );
    const iframeUrl = useMemo(
        () => {
            const blobContent = new Blob(
                [currentBody?.body || ''],
                {
                    type: 'text/html',
                },
            );
            return URL.createObjectURL(blobContent);
        },
        [currentBody],
    );

    return (
        <iframe sandbox="" src={iframeUrl} title='domSnapshot'/>
    );
};
