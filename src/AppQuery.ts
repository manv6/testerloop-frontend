import graphql from 'babel-plugin-relay/macro';

const AppQuery = graphql`
    query AppQuery($testExecutionId: ID!) {
        testExecution(id: $testExecutionId) {
            ...ConsolePanelFragment
            ...SeekerFragment
            ...NetworkPanelFragment
            ...SummaryFragment
            ...StepsFragment
        }
    }
`;

export default AppQuery;
