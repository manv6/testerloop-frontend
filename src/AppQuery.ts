import graphql from 'babel-plugin-relay/macro';

const AppQuery = graphql`
    query AppQuery($testExecutionId: ID!) {
        testExecution(id: $testExecutionId) {
            ...ConsolePanelFragment
            ...NetworkPanelFragment
            ...SummaryFragment
            ...StepsFragment
            ...DomPreviewFragment
        }
    }
`;

export default AppQuery;
