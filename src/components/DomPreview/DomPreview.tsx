import React, { useCallback, useMemo, useState } from 'react';
import styles from './DomPreview.module.scss';
import * as Expandable from 'src/components/Expandable';
import { DomPreviewHeader } from './components';
import { DEFAULT_DOM_ZOOM, DOM_ZOOM_STEP_PERCENTAGE } from 'src/constants';
import { DomPreviewFragment$key } from './__generated__/DomPreviewFragment.graphql';
import DomPreviewFragment from './DomPreviewFragment';
import { useFragment } from 'react-relay';
import DomPreviewRenderer from './components/DomPreviewRenderer/DomPreviewRenderer';
import DomPreviewFallback from './components/DomPreviewFallback/DomPreviewFallback';

export enum DOMTab {
    BEFORE = 'previousSnapshot',
    AFTER = 'nextSnapshot',
}

type Props = {
    fragmentKey: DomPreviewFragment$key;
};

const DomPreview: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(DomPreviewFragment, fragmentKey);
    const [tab, setTab] = useState(DOMTab.BEFORE);
    const [zoom, setZoom] = useState(DEFAULT_DOM_ZOOM);

    const handleZoom = useCallback(
        (direction: 'in' | 'out') => {
            const newZoom =
                direction === 'in'
                    ? zoom + DOM_ZOOM_STEP_PERCENTAGE
                    : zoom - DOM_ZOOM_STEP_PERCENTAGE;
            if (newZoom < 0.1 || newZoom > 1) {
                return;
            }
            setZoom(newZoom);
        },
        [zoom]
    );

    const header = useMemo(
        () => (
            <DomPreviewHeader
                setTab={setTab}
                tab={tab}
                handleZoom={handleZoom}
                zoom={zoom}
            />
        ),
        [handleZoom, tab, zoom]
    );

    return (
        <Expandable.Child
            className={styles.expandableDom}
            header={header}
            data-cy="dom-preview"
        >
            <React.Suspense fallback={<DomPreviewFallback />}>
                <DomPreviewRenderer
                    tab={tab}
                    testExecutionKey={data}
                    zoom={zoom}
                />
            </React.Suspense>
        </Expandable.Child>
    );
};

export default DomPreview;
