import { useMemo } from "react";
import { useTimeline } from "../../hooks/timeline";


export const DomPreview: React.FunctionComponent<{}> = () => {
    const { currentTime } = useTimeline();
    const domSnapshots = useMemo(
        () => [
            {
                from: new Date(Date.parse("2022-01-01T00:00:00Z")),
                to: new Date(Date.parse("2022-01-01T00:02:00Z")),
                body: `
                    <html>
                    <head>
                    <title>Test</title>
                    </head>
                    <body>
                    Test body 1
                    </body>
                `,
            },
            {
                from: new Date(Date.parse("2022-01-01T00:02:00Z")),
                to: new Date(Date.parse("2022-01-01T00:03:00Z")),
                body: `
                    <html>
                    <head>
                    <title>Test</title>
                    </head>
                    <body>
                    Test body 2
                    <img />
                    </body>
                `,
            },
            {
                from: new Date(Date.parse("2022-01-01T00:03:00Z")),
                to: new Date(Date.parse("2022-01-01T00:09:00Z")),
                body: `
                    <html>
                    <head>
                    <title>Test</title>
                    </head>
                    <body>
                    Test body 3
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" />
                    </body>
                `,
            },
        ],
        [],
    );
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
        <iframe sandbox="" src={iframeUrl} />
    );
};
