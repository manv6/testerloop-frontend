import graphql from 'babel-plugin-relay/macro';

const DomPreviewFragment = graphql`
    fragment DomPreviewFragment on TestExecution {
        id
        snapshots: events(filter: { type: STEP }) {
            edges {
                __typename
                node {
                    ... on StepEvent {
                        at
                        commandChains {
                            totalCount
                            edges {
                                node {
                                    ... on CommandChainEvent {
                                        commands {
                                            edges {
                                                node {
                                                    ... on CommandEvent {
                                                        previousSnapshot {
                                                            dom
                                                        }
                                                        nextSnapshot {
                                                            dom
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default DomPreviewFragment;
