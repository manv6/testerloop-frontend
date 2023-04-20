import graphql from 'babel-plugin-relay/macro';

const FrameworkErrorFragment = graphql`
    fragment FrameworkErrorFragment on TestExecution {
        frameworkError: events(
            filter: { type: COMMAND, commandFilter: { status: FAILED } }
        ) {
            edges {
                node {
                    ... on CommandEvent {
                        id
                        error {
                            type
                            message
                            stackTrace
                            url
                            urlText
                        }
                    }
                }
            }
        }
    }
`;

export default FrameworkErrorFragment;
