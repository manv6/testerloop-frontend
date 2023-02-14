import graphql from 'babel-plugin-relay/macro';

const SummaryFragment = graphql`
    fragment SummaryFragment on Query {
        test
    }
`;

export default SummaryFragment;
