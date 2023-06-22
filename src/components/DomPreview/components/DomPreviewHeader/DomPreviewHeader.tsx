import React from 'react';
import { Button, ButtonGroup } from 'src/components/common';
import { DOMTab } from '../../DomPreview';
import styles from './DomPreviewHeader.module.scss';
import cx from 'classnames';

type Props = {
    tab: DOMTab;
    setTab: (tab: DOMTab) => void;
    handleZoom: (direction: 'in' | 'out') => void;
    zoom: number;
};

const DomPreviewHeader: React.FC<Props> = ({
    setTab,
    tab,
    handleZoom,
    zoom,
}) => {
    return (
        <div className={styles.domPreviewHeader}>
            <div>Snapshot</div>
            <div className={styles.controls}>
                <ButtonGroup>
                    <Button
                        className={cx({ selected: tab === DOMTab.BEFORE })}
                        onClick={() => setTab(DOMTab.BEFORE)}
                        data-cy="dom-preview-before-button"
                    >
                        Before
                    </Button>
                    <Button
                        className={cx({ selected: tab === DOMTab.AFTER })}
                        onClick={() => setTab(DOMTab.AFTER)}
                        data-cy="dom-preview-after-button"
                    >
                        After
                    </Button>
                </ButtonGroup>

                <div className={styles.zoomValue}>{`${Math.round(
                    zoom * 100
                )}%`}</div>

                <ButtonGroup>
                    <Button
                        onClick={() => handleZoom('out')}
                        data-cy="dom-preview-zoom-out-button"
                    >
                        -
                    </Button>
                    <Button
                        onClick={() => handleZoom('in')}
                        data-cy="dom-preview-zoom-in-button"
                    >
                        +
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default DomPreviewHeader;
