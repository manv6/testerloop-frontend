import graphql from 'babel-plugin-relay/macro';

const ResponseHeadersFragment = graphql`
    fragment ResponseHeadersFragment on HttpNetworkResponse {
        headers {
            values(order: { by: ALPHABETICAL, direction: ASCENDING }) {
                value
                key
            }
        }
    }
`;

export default ResponseHeadersFragment;
