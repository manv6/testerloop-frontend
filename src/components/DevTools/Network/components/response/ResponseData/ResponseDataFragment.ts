import graphql from 'babel-plugin-relay/macro';

const ResponseDataFragment = graphql`
    fragment ResponseDataFragment on HttpNetworkResponse {
        body {
            mimeType
            data
            size
        }
    }
`;

export default ResponseDataFragment;
