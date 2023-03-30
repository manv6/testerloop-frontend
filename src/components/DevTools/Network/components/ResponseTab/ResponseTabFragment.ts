import graphql from 'babel-plugin-relay/macro';

const ResponseTabFragment = graphql`
    fragment ResponseTabFragment on HttpNetworkEvent {
        response {
            status
            transferSize
            body {
                mimeType
                data
                size
            }
            headers {
                values(order: { by: ALPHABETICAL, direction: ASCENDING }) {
                    value
                    key
                }
            }
        }
    }
`;

export default ResponseTabFragment;
