import React from 'react';
import cx from 'classnames';
import { useTimeline } from 'src/hooks/timeline';
import { Step } from '../../Steps';
import styles from './ActionRecord.module.scss';
import { StepPrefix } from 'src/components/common';
import { EventType } from 'src/constants';
import { styled } from '@mui/material';

interface Props {
    action: Step;
    isActionSelected: boolean;
    isActionHovered: boolean;
}

interface StyledActionProps {
    isSelected: boolean;
}

const StyledAction = styled('div')<StyledActionProps>(
    ({ theme, isSelected }) => {
        let borderColor = theme.palette.base[300];
        let backgroundColor = theme.palette.base[400];
        if (isSelected) {
            borderColor = theme.palette.primary[400];
            backgroundColor = theme.palette.primary[500];
        }
        return {
            backgroundColor,
            borderBottom: `1px solid ${borderColor}`,
            borderTop: `1px solid ${borderColor}`,
            '&:first-of-type': {
                borderTop: 0,
            },
            '&:last-of-type': {
                borderBottom: 0,
            },
        };
    }
);

const ActionRecord: React.FC<Props> = ({
    action: { options },
    isActionSelected,
    isActionHovered,
}) => {
    const { seek } = useTimeline();

    const navigateInTimeline = () => {
        seek(options.wallClockStartedAt);
    };

    return (
        <StyledAction
            key={options.id}
            onClick={navigateInTimeline}
            isSelected={isActionSelected}
            className={cx(
                styles.actionRecord,
                options.state === 'failed' ? styles.error : styles.success,
                {
                    [styles.selected]: isActionSelected,
                    [styles.hovered]: isActionHovered,
                }
            )}
        >
            <StepPrefix
                type={
                    options.state === 'failed'
                        ? EventType.CYPRESS_ERROR
                        : EventType.STEP
                }
                isAction={true}
                hasFailed={options.state === 'failed'}
                className={styles.expandedActionName}
            >
                {options.name}
            </StepPrefix>
            <span className={styles.expandedActionMessage}>
                {options.message}
            </span>
        </StyledAction>
    );
};

export default ActionRecord;
