import graphql from 'babel-plugin-relay/macro';

const LogEntryFragment = graphql`
    fragment LogEntryFragment on ConsoleLogEvent
    @refetchable(queryName: "LogEntryRefetchQuery")
    @argumentDefinitions(open: { type: "Boolean", defaultValue: false }) {
        id
        at
        message
        logLevel
        stackTrace {
            ...StackTraceFragment @include(if: $open)
        }
    }
`;

export default LogEntryFragment;
