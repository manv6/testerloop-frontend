import graphql from 'babel-plugin-relay/macro';

const RequestDataFragment = graphql`
    fragment RequestDataFragment on HttpNetworkRequest {
        body {
            data
            mimeType
        }
    }
`;

export default RequestDataFragment;
