import React, { ReactNode } from 'react';
import {
    AccordionDetails,
    AccordionSummary,
    Accordion as MUIAccordion,
    styled,
    AccordionProps,
} from '@mui/material';
import cx from 'classnames';
import styles from './Accordion.module.scss';
import ChevronIcon from '../ChevronIcon';

interface Props extends React.PropsWithChildren {
    accordionProps?: Partial<AccordionProps>;
    accordionClassName?: string;
    summaryProps?: typeof AccordionSummary;
    summaryClassName?: string;
    summaryContentClassName?: string;
    detailsProps?: typeof AccordionDetails;
    detailsClassName?: string;
    title: ReactNode;
}

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    color: theme.palette.base[200],
}));

const Accordion: React.FC<Props> = ({
    accordionProps,
    accordionClassName,
    summaryProps,
    summaryClassName,
    summaryContentClassName,
    detailsClassName,
    detailsProps,
    title,
    children,
}) => (
    <MUIAccordion
        TransitionProps={{ timeout: 200 }}
        className={accordionClassName}
        {...accordionProps}
    >
        <StyledAccordionSummary
            expandIcon={<ChevronIcon direction={'down'} />}
            className={cx(styles.accordionSummary, summaryClassName)}
            classes={{
                content: summaryContentClassName,
                expanded: summaryContentClassName,
            }}
            {...summaryProps}
        >
            {title}
        </StyledAccordionSummary>
        <AccordionDetails className={detailsClassName} {...detailsProps}>
            {children}
        </AccordionDetails>
    </MUIAccordion>
);

export default Accordion;
