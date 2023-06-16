import React from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { TestExecutionListFragment$key } from './__generated__/TestExecutionListFragment.graphql';
import { TestExecutionListRow } from './TestExecutionListRow';
import { useFetcher } from 'react-router-dom';

type Props = {
    fragmentKey: TestExecutionListFragment$key;
};

export const TestExecutionList: React.FC<Props> = ({ fragmentKey }) => {
    const { edges } = useFragment(
        graphql`
            fragment TestExecutionListFragment on TestExecutionConnection {
                edges {
                    node {
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
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Started</th>
                    <th>Ended</th>
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
        </table>
    );
};
