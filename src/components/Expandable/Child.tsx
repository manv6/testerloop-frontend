import React, { ReactNode, useState } from 'react';
import cx from 'classnames';
import styles from './Child.module.scss';
import { Button, Panel, PanelHeader } from 'src/components/common';
import { CollapseIcon, ExpandIcon } from './components';
import { Tooltip } from '@mui/material';

type Props = React.PropsWithChildren<{
    notExpandable?: boolean;
    className?: string;
    header?: ReactNode;
}>;

const Child: React.FC<Props> = ({
    className,
    notExpandable,
    children,
    header,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    return (
        <Panel
            className={cx(className, styles.child, {
                [styles.expanded]: isExpanded,
            })}
        >
            <PanelHeader>
                <div className={styles.header}>{header}</div>
                <Tooltip
                    title={isExpanded ? 'Collapse' : 'Expand'}
                    placement="top"
                    arrow
                    open={isButtonHovered}
                >
                    <div>
                        <Button
                            size="small"
                            className={cx(styles.expand, {
                                [styles.hide]: notExpandable,
                            })}
                            onClick={() => setIsExpanded(!isExpanded)}
                            onMouseEnter={() => setIsButtonHovered(true)}
                            onMouseLeave={() => setIsButtonHovered(false)}
                        >
                            {isExpanded ? <CollapseIcon /> : <ExpandIcon />}
                        </Button>
                    </div>
                </Tooltip>
            </PanelHeader>
            {children}
        </Panel>
    );
};

export default Child;
