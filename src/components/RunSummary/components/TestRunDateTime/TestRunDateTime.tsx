import React from 'react';
import { useFragment } from 'react-relay';
import { TestRunDateTimeFragment$key } from './__generated__/TestRunDateTimeFragment.graphql';
import graphql from 'babel-plugin-relay/macro';
import { formatDate } from 'src/utils/date';

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

    const validDates = testRunData.executions.edges
        .map(({ node }) => node?.at)
        .filter((at) => at != null && !isNaN(new Date(at).getTime()))
        .map((at) => new Date(at).getTime());

    if (validDates.length === 0) {
        return <span data-cy="test-run-datetime">-</span>;
    }

    const minTimestamp = Math.min(...validDates);
    const timestamp = new Date(minTimestamp).toISOString();

    return <span data-cy="test-run-datetime">{formatDate(timestamp)}</span>;
};

export default TestRunDateTime;
