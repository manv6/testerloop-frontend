import graphql from 'babel-plugin-relay/macro';
export type { TestRunPageQuery } from './__generated__/TestRunPageQuery.graphql';

export const testRunPageQuery = graphql`
    query TestRunPageQuery($id: ID!) {
        testRun(id: $id) {
            id
            executions {
                ...TestExecutionListFragment
            }
            ...TestRunTitleFragment
        }
    }
`;
