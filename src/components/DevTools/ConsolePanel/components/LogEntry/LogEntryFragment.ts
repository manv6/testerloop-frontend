import graphql from 'babel-plugin-relay/macro';

const LogEntryFragment = graphql`
    fragment LogEntryFragment on ConsoleLogEvent {
        id
        at
        message
        logLevel
        stackTrace {
            ...StackTraceFragment
        }
    }
`;

export default LogEntryFragment;
