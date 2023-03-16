import React from 'react';
import { Button } from 'src/components/common';
import { DOMTab } from '../../DomPreview';
import styles from './DomPreviewHeader.module.scss';
import cx from 'classnames';

type Props = {
    tab: DOMTab;
    setTab: (tab: DOMTab) => void;
};

const DomPreviewHeader: React.FC<Props> = ({ setTab, tab }) => {
    return (
        <div className={styles.domPreviewHeader}>
            <div>Snapshot</div>
            <div className={styles.controls}>
                <Button
                    size="small"
                    className={cx({
                        selected: tab === DOMTab.BEFORE,
                    })}
                    onClick={() => setTab(DOMTab.BEFORE)}
                >
                    Before
                </Button>
                <Button
                    size="small"
                    className={cx({
                        selected: tab === DOMTab.AFTER,
                    })}
                    onClick={() => setTab(DOMTab.AFTER)}
                >
                    After
                </Button>
            </div>
        </div>
    );
};

export default DomPreviewHeader;
