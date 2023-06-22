import React from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { TestExecutionListFragment$key } from './__generated__/TestExecutionListFragment.graphql';
import { TestExecutionListRow } from './TestExecutionListRow';
import { useFetcher } from 'react-router-dom';
import { Table, Panel } from 'src/components/common';
import styles from './TestExecutionList.module.scss';

type Props = {
    fragmentKey: TestExecutionListFragment$key;
};

export const TestExecutionList: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(
        graphql`
            fragment TestExecutionListFragment on TestExecutionConnection {
                edges {
                    node {
                        title
                        id
                        at
                        ...TestExecutionListRowFragment
                    }
                }
            }
        `,
        fragmentKey
    );
    const preloadFetcher = useFetcher();

    const edges = [...data.edges].sort((a, b) => {
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
                        {edges.map(({ node }) => (
                            <TestExecutionListRow
                                key={node.id}
                                fragmentKey={node}
                                preloadFetcher={preloadFetcher}
                            />
                        ))}
                    </tbody>
                </Table>
            </Panel>
        </>
    );
};
