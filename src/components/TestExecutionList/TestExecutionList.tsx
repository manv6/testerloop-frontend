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
    const { edges } = useFragment(
        graphql`
            fragment TestExecutionListFragment on TestExecutionConnection {
                edges {
                    node {
                        title
                        id
                        ...TestExecutionListRowFragment
                    }
                }
            }
        `,
        fragmentKey
    );
    const preloadFetcher = useFetcher();

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
