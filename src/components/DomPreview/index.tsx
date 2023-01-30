// TODO: Remove this check once temp data is removed!!
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import { useTimeline } from 'src/hooks/timeline';
import domSnapshots from 'src/data/domSnapshots';

export const DomPreview: React.FC = () => {
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
