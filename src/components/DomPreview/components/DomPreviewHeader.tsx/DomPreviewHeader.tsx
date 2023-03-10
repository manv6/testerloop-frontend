import React from 'react';
import { Button } from 'src/components/common';
import { DOMTab } from '../../DomPreview';
import styles from './DomPreviewHeader.module.scss';

type Props = {
    setTab: (tab: DOMTab) => void;
};

const DomPreviewHeader: React.FC<Props> = ({ setTab }) => {
    return (
        <div className={styles.domPreviewHeader}>
            <div>Snapshot</div>
            <div className={styles.controls}>
                <Button size="small" onClick={() => setTab(DOMTab.BEFORE)}>
                    Before
                </Button>
                <Button size="small" onClick={() => setTab(DOMTab.AFTER)}>
                    After
                </Button>
            </div>
        </div>
    );
};

export default DomPreviewHeader;
