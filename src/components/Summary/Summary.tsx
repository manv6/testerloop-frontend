import React, { useState } from 'react';
import styles from './Summary.module.scss';
import { useFragment } from 'react-relay';
import { SummaryFragment$key } from './__generated__/SummaryFragment.graphql';
import graphql from 'babel-plugin-relay/macro';
import {
    Panel,
    Tag,
    Divider,
    ExpandButton,
    BreadCrumb,
} from 'src/components/common';
import cx from 'classnames';
import { EnvironmentDetails } from './components';
import splitCamelCase from 'src/utils/splitCamelCase';
import NetworkErrorCount from './components/NetworkErrorCount';
import ConsoleErrorCount from './components/ConsoleErrorCount';
import { Typography } from '@mui/material';
import { extractRunId } from 'src/utils/extractRunId';
import { styled } from '@mui/material';

type Props = {
    fragmentKey: SummaryFragment$key;
    className?: string;
};

const Summary: React.FC<Props> = ({ fragmentKey, className }) => {
    const summaryData = useFragment(
        graphql`
            fragment SummaryFragment on TestExecution {
                id
                title
                ...ConsoleErrorCountFragment
                ...NetworkErrorCountFragment
                ...EnvironmentDetailsFragment
                commandWithError: events(
                    filter: { type: COMMAND, commandFilter: { status: FAILED } }
                ) {
                    edges {
                        node {
                            ... on CommandEvent {
                                id
                                error {
                                    type
                                }
                            }
                        }
                    }
                }
            }
        `,
        fragmentKey
    );

    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const frameworkErrorName =
        summaryData.commandWithError.edges[0]?.node.error?.type;
    const title = summaryData.title;
    const tagType = frameworkErrorName ? 'error' : 'success';
    const tagText = frameworkErrorName ? 'Failed' : 'Passed';
    const runId = extractRunId(summaryData.id);

    const StyledSpan = styled('span')(({ theme }) => ({
        color: frameworkErrorName
            ? theme.palette.base[100]
            : theme.palette.base[200],
    }));

    return (
        <Panel
            className={cx(styles.summary, styles.panel, className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-cy="summary-panel"
        >
            <BreadCrumb
                paths={[
                    {
                        text: 'RUNS',
                        link: '/',
                    },
                    {
                        text: runId,
                        link: `/run/${runId}`,
                    },
                    {
                        text: '',
                        link: '',
                    },
                ]}
                data-cy="breadcrumb"
            />

            <div className={styles.row}>
                <div className={styles.pageTitle} data-cy="debug-page-title">
                    <Typography variant="h2">Scenario: {title}</Typography>
                    <Tag tagType={tagType} text={tagText} />
                </div>
            </div>
            {isExpanded && (
                <div className={cx(styles.row, styles.detailsRow)}>
                    <EnvironmentDetails
                        fragmentKey={summaryData}
                        data-cy="environment-details"
                    />
                    <div
                        className={styles.errorsContainer}
                        data-cy="errors-container"
                    >
                        <ul>
                            {frameworkErrorName && (
                                <li>
                                    <StyledSpan>
                                        1 {splitCamelCase(frameworkErrorName)}
                                    </StyledSpan>
                                </li>
                            )}
                            <Divider className={styles.divider} />
                            <NetworkErrorCount fragmentKey={summaryData} />
                            <Divider className={styles.divider} />
                            <ConsoleErrorCount fragmentKey={summaryData} />
                        </ul>
                    </div>
                </div>
            )}
            {isHovered && (
                <ExpandButton
                    onClick={() => setIsExpanded(!isExpanded)}
                    isExpanded={isExpanded}
                    data-cy="summary-expand-button"
                />
            )}
        </Panel>
    );
};

export default Summary;
