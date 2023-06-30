import React from 'react';
import { useFragment } from 'react-relay';
import { TestRunDateTimeFragment$key } from './__generated__/TestRunDateTimeFragment.graphql';
import graphql from 'babel-plugin-relay/macro';

type Props = {
    fragmentKey: TestRunDateTimeFragment$key;
};

const TestRunDateTime: React.FC<Props> = ({ fragmentKey }) => {
    const testRunData = useFragment(
        graphql`
            fragment TestRunDateTimeFragment on TestRun {
                executions {
                    edges {
                        node {
                            at
                        }
                    }
                }
            }
        `,
        fragmentKey
    );

    const timestamp =
        testRunData.executions.edges.length === 0
            ? null
            : new Date(
                  Math.min(
                      ...testRunData.executions.edges.map(({ node: { at } }) =>
                          new Date(at).getTime()
                      )
                  )
              ).toISOString();

    return (
        <span data-cy="test-run-datetime">
            {timestamp ? new Date(timestamp).toLocaleString() : '-'}
        </span>
    );
};

export default TestRunDateTime;
