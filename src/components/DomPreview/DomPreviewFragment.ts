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
                        previousSnapshot {
                            dom
                        }
                        nextSnapshot {
                            dom
                        }
                        commandChains {
                            edges {
                                node {
                                    ... on CommandChainEvent {
                                        commands {
                                            edges {
                                                node {
                                                    ... on CommandEvent {
                                                        at
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
