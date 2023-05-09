import graphql from 'babel-plugin-relay/macro';
export type { IndexPageQuery } from './__generated__/IndexPageQuery.graphql';

export const indexPageQuery = graphql`
    query IndexPageQuery {
        testRuns {
            ...TestRunListFragment
        }
    }
`;
