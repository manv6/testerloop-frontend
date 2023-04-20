import graphql from 'babel-plugin-relay/macro';

const AppQuery = graphql`
    query AppQuery($testExecutionId: ID!) {
        testExecution(id: $testExecutionId) {
            until
            firstStep: events(filter: { type: STEP }, first: 1) {
                edges {
                    __typename
                    node {
                        at
                    }
                }
            }
            ...ConsolePanelFragment
            ...NetworkPanelFragment
            ...SummaryFragment
            ...StepsFragment
            ...DomPreviewFragment
            ...FrameworkErrorFragment
        }
    }
`;

export default AppQuery;
