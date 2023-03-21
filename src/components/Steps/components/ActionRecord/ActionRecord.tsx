import React from 'react';
import cx from 'classnames';
import { useTimeline } from 'src/hooks/timeline';
import { Step } from '../../Steps';
import styles from './ActionRecord.module.scss';
import { Accordion, StepPrefix } from 'src/components/common';
import { EventType } from 'src/constants';
import { styled } from '@mui/material';
import results from 'src/data/results';
import getFrameworkErrorInfo from 'src/utils/getFrameworkErrorInfo';

interface Props {
    action: Step;
    isActionSelected: boolean;
    isActionHovered: boolean;
}

interface StyledActionProps {
    isSelected: boolean;
}

const StyledLink = styled('a')(({ theme }) => ({
    color: theme.palette.base[100],
}));

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
    const { url, text: urlText } = getFrameworkErrorInfo();

    const navigateInTimeline = () => {
        seek(options.wallClockStartedAt);
    };

    const errorObj = results.runs[0].tests[0].attempts[0];
    const error = errorObj.error;

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
            {options.state === 'failed' && (
                <>
                    <div className={styles.errorUrl}>
                        <StyledLink href={url} target="_blank" rel="noreferrer">
                            {urlText}
                        </StyledLink>
                    </div>
                    <Accordion
                        accordionClassName={styles.stackAccordionRoot}
                        summaryClassName={styles.stackAccordion}
                        summaryContentClassName={styles.stackAccordionContent}
                        detailsClassName={styles.accordionDetails}
                        title={<div>View stack trace</div>}
                    >
                        {error.stack}
                    </Accordion>
                </>
            )}
        </StyledAction>
    );
};

export default ActionRecord;
