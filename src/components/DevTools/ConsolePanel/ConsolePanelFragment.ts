import graphql from 'babel-plugin-relay/macro';

const ConsolePanelFragment = graphql`
    fragment ConsolePanelFragment on Query {
        testExecution(id: $testExecutionId) {
            id
            events(type: CONSOLE) {
                edges {
                    __typename
                    node {
                        at
                        ... on ConsoleLogEvent {
                            at
                            message
                            logLevel
                            }
                        }
                }
            }
        }
    }
`;

export default ConsolePanelFragment;
