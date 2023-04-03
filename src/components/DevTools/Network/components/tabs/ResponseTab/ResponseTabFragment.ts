import graphql from 'babel-plugin-relay/macro';

const ResponseTabFragment = graphql`
    fragment ResponseTabFragment on HttpNetworkEvent {
        response {
            ...ResponseDataFragment
            ...ResponseHeadersFragment
        }
    }
`;

export default ResponseTabFragment;
