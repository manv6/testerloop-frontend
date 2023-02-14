import graphql from 'babel-plugin-relay/macro';

const StepsFragment = graphql`
    fragment StepsFragment on Query {
        test
    }
`;

export default StepsFragment;
