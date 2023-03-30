import graphql from 'babel-plugin-relay/macro';

const RequestToUrlFragment = graphql`
    fragment RequestToUrlFragment on HttpNetworkRequest {
        url {
            url
        }
    }
`;

export default RequestToUrlFragment;
