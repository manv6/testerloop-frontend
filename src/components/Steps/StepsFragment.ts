import graphql from 'babel-plugin-relay/macro';

const StepsFragment = graphql`
    fragment StepsFragment on TestExecution {
        id
        stepEvents: events(filter: { type: STEP }) {
            edges {
                __typename
                node {
                    at
                    ... on StepEvent {
                        ...StepRecordFragment
                    }
                }
            }
        }
    }
`;

export default StepsFragment;
