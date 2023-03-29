import graphql from 'babel-plugin-relay/macro';

const RequestSliceFragment = graphql`
    fragment RequestSliceFragment on HttpNetworkEvent {
        __typename
        id
        resourceType
        at
        until
        initiator {
            origin
            lineNumber
        }
        request {
            method
            body {
                mimeType
            }
            queryString {
                value
                key
            }
            url {
                url
            }
        }
        response {
            status
            transferSize
            body {
                mimeType
                size
            }
        }
    }
`;

export default RequestSliceFragment;
