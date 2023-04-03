import graphql from 'babel-plugin-relay/macro';

const RequestHeadersFragment = graphql`
    fragment RequestHeadersFragment on HttpNetworkRequest {
        headers {
            values(order: { by: ALPHABETICAL, direction: ASCENDING }) {
                value
                key
            }
        }
    }
`;

export default RequestHeadersFragment;
