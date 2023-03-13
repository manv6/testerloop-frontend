import React, { ReactNode } from 'react';
import {
    AccordionDetails,
    AccordionSummary,
    Accordion as MUIAccordion,
    styled,
} from '@mui/material';
import cx from 'classnames';
import styles from './Accordion.module.scss';
import ChevronIcon from '../ChevronIcon';

interface Props extends React.PropsWithChildren {
    accordionProps?: typeof MUIAccordion & { className?: string };
    summaryProps?: typeof AccordionSummary & { className?: string };
    detailsProps?: typeof AccordionDetails & { className?: string };
    title: ReactNode;
}

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    color: theme.palette.base[200],
}));

const Accordion: React.FC<Props> = ({
    accordionProps,
    summaryProps,
    detailsProps,
    title,
    children,
}) => (
    <MUIAccordion TransitionProps={{ timeout: 200 }} {...accordionProps}>
        <StyledAccordionSummary
            expandIcon={<ChevronIcon direction={'down'} />}
            className={cx(styles.accordionSummary, summaryProps?.className)}
            {...summaryProps}
        >
            {title}
        </StyledAccordionSummary>
        <AccordionDetails {...detailsProps}>{children}</AccordionDetails>
    </MUIAccordion>
);

export default Accordion;
