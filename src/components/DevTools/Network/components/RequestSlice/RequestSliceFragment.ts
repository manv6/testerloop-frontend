import graphql from 'babel-plugin-relay/macro';

const RequestSliceFragment = graphql`
    fragment RequestSliceFragment on HttpNetworkEvent {
        id
        initiator {
            origin
            lineNo
        }
        time {
            at
            until
        }
        request {
            method
            url {
                url
            }
        }
        response {
            status
            body {
                mimeType
                size
            }
            transferSize
        }

    }
`;

export default RequestSliceFragment;
