import React from 'react';
import cx from 'classnames';
import { useTimeline } from 'src/hooks/timeline';
import styles from './ActionRecord.module.scss';
import { Accordion, StepPrefix } from 'src/components/common';
import { EventType } from 'src/constants';
import { styled } from '@mui/material';
import { ActionRecordFragment$key } from './__generated__/ActionRecordFragment.graphql';
import ActionRecordFragment from './ActionRecordFragment';
import { useFragment } from 'react-relay';
import StepFailIcon from '../StepFailIcon/StepFailIcon';
import StepSuccessIcon from '../StepSuccessIcon';
interface Props {
    action: ActionRecordFragment$key;
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
            borderColor = theme.palette.primary[300];
            backgroundColor = theme.palette.primary[500];
        }
        return {
            backgroundColor,
            borderBottom: `1px solid ${borderColor}`,
            borderTop: `1px solid ${borderColor}`,
            '&:hover': {
                backgroundColor: 'rgba(38, 42, 50, 0.5)',
            },
        };
    }
);

const ActionRecord: React.FC<Props> = ({
    action,
    isActionSelected,
    isActionHovered,
}) => {
    const data = useFragment(ActionRecordFragment, action);
    const { seek } = useTimeline();

    const navigateInTimeline = () => {
        seek(new Date(data.at));
    };

    const hasFailed = data.status === 'FAILED';
    const location = data.error?.location;
    const url = location?.line.url;
    const urlText = [
        location?.line.file.path,
        location?.line.line,
        location?.column,
    ].join(':');

    return (
        <StyledAction
            key={data.id}
            onClick={navigateInTimeline}
            isSelected={isActionSelected}
            className={cx(
                styles.actionRecord,
                hasFailed ? styles.error : styles.success,
                {
                    [styles.selected]: isActionSelected,
                    [styles.hovered]: isActionHovered,
                }
            )}
            data-cy={`action-record-${data.id}`}
        >
            <span
                className={styles.actionStatus}
                data-cy={`action-status-${data.id}`}
            >
                {hasFailed ? <StepFailIcon /> : <StepSuccessIcon />}
            </span>
            <StepPrefix
                type={hasFailed ? EventType.CYPRESS_ERROR : EventType.STEP}
                isAction={true}
                isSelected={isActionSelected}
                hasFailed={hasFailed}
                className={styles.expandedActionName}
            >
                {data.name}
            </StepPrefix>
            <span className={styles.expandedActionMessage}>
                {data.description}
            </span>
            {hasFailed && (
                <>
                    <div
                        className={styles.errorUrl}
                        data-cy={`error-url-${data.id}`}
                    >
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
                        {data.error?.stackTrace}
                    </Accordion>
                </>
            )}
        </StyledAction>
    );
};

export default ActionRecord;
