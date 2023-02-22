import graphql from 'babel-plugin-relay/macro';

const StepsFragment = graphql`
    fragment StepsFragment on TestExecution {
        id
    }
`;

export default StepsFragment;
