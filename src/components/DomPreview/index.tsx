// TODO: Remove this check once temp data is removed!!
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import { useTimeline } from 'src/hooks/timeline';
import domSnapshots from 'src/data/domSnapshots';
import styles from './DomPreview.module.scss';

export const DomPreview: React.FC = () => {
    const { currentTime } = useTimeline();

    const currentSnapshot = useMemo(
        () => domSnapshots.filter(({ at }) => at <= currentTime).at(-1),
        [domSnapshots, currentTime],
    );
    const iframeUrl = useMemo(
        () => {
            const blobContent = new Blob(
                [currentSnapshot?.body || ''],
                {
                    type: 'text/html',
                },
            );
            return URL.createObjectURL(blobContent);
        },
        [currentSnapshot],
    );

    return (
        <iframe
            className={styles.iframe}
            sandbox=""
            src={iframeUrl}
            title="domSnapshot"
        />
    );
};
