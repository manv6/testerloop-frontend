import React from 'react';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { TestCountFragment$key } from './__generated__/TestCountFragment.graphql';

type Props = {
    fragmentKey: TestCountFragment$key;
};

const TestCount: React.FC<Props> = ({ fragmentKey }) => {
    const data = useFragment(
        graphql`
            fragment TestCountFragment on TestRun {
                executions {
                    totalCount
                }
            }
        `,
        fragmentKey
    );

    const numberOfTests = data.executions.totalCount;

    return <div data-cy="test-count">{numberOfTests}</div>;
};

export default TestCount;
