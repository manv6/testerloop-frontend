import graphql from 'babel-plugin-relay/macro';

const LogEntryFragment = graphql`
    fragment LogEntryFragment on ConsoleLogEvent {
        at
        message
        logLevel
    }
`;

export default LogEntryFragment;
