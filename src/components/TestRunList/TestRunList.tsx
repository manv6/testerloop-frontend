import React from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { TestRunListFragment$key } from './__generated__/TestRunListFragment.graphql';
import { TestRunListRow } from './TestRunListRow';
import { useFetcher } from 'react-router-dom';

type Props = {
    fragmentKey: TestRunListFragment$key;
};

export const TestRunList: React.FC<Props> = ({ fragmentKey }) => {
    const { edges } = useFragment(
        graphql`
            fragment TestRunListFragment on TestRunConnection {
                edges {
                    node {
                        id
                        ...TestRunListRowFragment
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
                    <th>id</th>
                    <th>Tests Executed</th>
                </tr>
            </thead>
            <tbody>
                {edges.map(({ node }) => (
                    <TestRunListRow
                        key={node.id}
                        fragmentKey={node}
                        preloadFetcher={preloadFetcher}
                    />
                ))}
            </tbody>
        </table>
    );
};
