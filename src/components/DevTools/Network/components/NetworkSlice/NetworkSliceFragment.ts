import graphql from 'babel-plugin-relay/macro';

const NetworkSliceFragment = graphql`
    fragment NetworkSliceFragment on HttpNetworkEvent {
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

export default NetworkSliceFragment;
