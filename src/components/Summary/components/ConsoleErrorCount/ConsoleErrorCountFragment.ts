import graphql from 'babel-plugin-relay/macro';

const ConsoleErrorCountFragment = graphql`
    fragment ConsoleErrorCountFragment on TestExecution {
        summaryConsoleErrors: events(
            filter: { type: CONSOLE, consoleFilter: { logLevel: ERROR } }
        ) {
            totalCount
        }
    }
`;

export default ConsoleErrorCountFragment;
