import React from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { TestExecutionListFragment$key } from './__generated__/TestExecutionListFragment.graphql';
import { TestExecutionListRow } from './TestExecutionListRow';
import { useFetcher } from 'react-router-dom';
import { Table, Panel } from 'src/components/common';
import styles from './TestExecutionList.module.scss';
import ErrorBoundary from './ErrorBoundary';

type Props = {
    fragmentKey: TestExecutionListFragment$key;
};

export const TestExecutionList: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(
        graphql`
            fragment TestExecutionListFragment on TestExecutionConnection {
                edges {
                    cursor
                    node {
                        title
                        at
                    }
                    ...TestExecutionListRowFragment
                }
            }
        `,
        fragmentKey
    );
    const preloadFetcher = useFetcher();

    const edges = [...data.edges].sort((a, b) => {
        if (a.node === null && b.node === null) return 0;
        if (a.node === null) return 1;
        if (b.node === null) return -1;

        if (a.node.title < b.node.title) return -1;
        if (a.node.title > b.node.title) return 1;
        return new Date(b.node.at).getTime() - new Date(a.node.at).getTime();
    });

    return (
        <>
            <Panel className={styles.runTable}>
                <Table>
                    <thead>
                        <tr>
                            <th>Test Name</th>
                            <th>Date/Time</th>
                            <th>Duration</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {edges.map((edge, idx) => (
                            <ErrorBoundary key={edge.cursor}>
                                <TestExecutionListRow
                                    idx={idx}
                                    fragmentKey={edge}
                                    preloadFetcher={preloadFetcher}
                                />
                            </ErrorBoundary>
                        ))}
                    </tbody>
                </Table>
            </Panel>
        </>
    );
};
