import graphql from 'babel-plugin-relay/macro';

const StepRecordFragment = graphql`
    fragment StepRecordFragment on StepEvent {
        __typename
        id
        at
        until
        definition {
            description
            keyword
        }
        status
        commandChains {
            totalCount
            edges {
                node {
                    ... on CommandChainEvent {
                        at
                        until
                        commands {
                            edges {
                                node {
                                    at
                                    ... on CommandEvent {
                                        ...ActionRecordFragment
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

export default StepRecordFragment;
