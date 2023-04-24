import graphql from 'babel-plugin-relay/macro';

const SeekerFragment = graphql`
    fragment SeekerFragment on TestExecution
    @argumentDefinitions(
        eventTypes: {
            type: "[TestExecutionEventType!]"
            defaultValue: [STEP, NETWORK, COMMAND]
        }
        networkStatus: {
            type: "NetworkEventResponseStatusFilterInput"
            defaultValue: { gte: 400 }
        }
        commandStatus: { type: "[CommandEventStatus!]", defaultValue: [FAILED] }
    )
    @refetchable(queryName: "SeekerFragmentRefetchQuery") {
        screenshots: events(filter: { type: SCREENSHOT }) {
            edges {
                node {
                    ... on TestExecutionScreenshot {
                        at
                        url {
                            url
                        }
                    }
                }
            }
        }
        seekerEvents: events(
            filter: {
                type: $eventTypes
                networkFilter: { status: $networkStatus }
                commandFilter: { status: $commandStatus }
            }
        ) {
            edges {
                node {
                    ... on HttpNetworkEvent {
                        __typename
                        id
                        at
                        until
                        request {
                            method
                            url {
                                url
                            }
                        }
                        response {
                            status
                        }
                    }
                    ... on CommandEvent {
                        __typename
                        id
                        at
                        status
                        name
                        description
                    }
                    ... on StepEvent {
                        __typename
                        id
                        at
                        status
                        definition {
                            description
                            keyword
                        }
                    }
                }
            }
        }
    }
`;

export default SeekerFragment;
