import graphql from 'babel-plugin-relay/macro';

const SeekerFragment = graphql`
    fragment SeekerFragment on TestExecution
    @argumentDefinitions(
        cypressError: { type: "Boolean", defaultValue: true }
        networkError: { type: "Boolean", defaultValue: true }
        networkSuccess: { type: "Boolean", defaultValue: false }
        step: { type: "Boolean", defaultValue: true }
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
        seekerCypressErrors: events(
            filter: { type: COMMAND, commandFilter: { status: FAILED } }
        ) @include(if: $cypressError) {
            edges {
                node {
                    ... on CommandEvent {
                        __typename
                        id
                        at
                        status
                        name
                        description
                    }
                }
            }
        }
        seekerNetworkErrors: events(
            filter: { type: NETWORK, networkFilter: { status: { gte: 400 } } }
        ) @include(if: $networkError) {
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
                }
            }
        }
        seekerNetworkSuccesses: events(
            filter: {
                type: NETWORK
                networkFilter: { status: { gte: 200, lte: 299 } }
            }
        ) @include(if: $networkSuccess) {
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
                }
            }
        }
        seekerSteps: events(filter: { type: STEP }) @include(if: $step) {
            edges {
                node {
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
