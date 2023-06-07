import graphql from 'babel-plugin-relay/macro';

const StackTraceFragment = graphql`
    fragment StackTraceFragment on StackTrace {
        callFrames {
            id
            functionName
            url
            lineNumber
        }
    }
`;

export default StackTraceFragment;
