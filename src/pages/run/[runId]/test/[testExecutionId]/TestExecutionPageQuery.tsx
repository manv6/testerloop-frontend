import graphql from 'babel-plugin-relay/macro';
export type { TestExecutionPageQuery } from './__generated__/TestExecutionPageQuery.graphql';

export const testExecutionPageQuery = graphql`
    query TestExecutionPageQuery($id: ID!) {
        testExecution(id: $id) {
            ...ConsolePanelFragment
            ...NetworkPanelFragment
            ...SummaryFragment
            ...StepsFragment
            ...DomPreviewFragment
            ...SeekerFragment
        }
    }
`;
