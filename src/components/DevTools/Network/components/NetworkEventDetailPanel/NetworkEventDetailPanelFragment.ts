import graphql from 'babel-plugin-relay/macro';

const NetworkEventDetailPanelFragment = graphql`
    fragment NetworkEventDetailPanelFragment on HttpNetworkEvent {
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
                data
                mimeType
            }
            cookies {
                name
                value
            }
            headers {
                values(order: { by: ALPHABETICAL, direction: ASCENDING }) {
                    value
                    key
                }
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

export default NetworkEventDetailPanelFragment;
