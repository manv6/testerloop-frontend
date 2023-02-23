import graphql from 'babel-plugin-relay/macro';

const NetworkEventDetailFragment = graphql`
    fragment NetworkEventDetailFragment on HttpNetworkEvent {
        id
        request {
            body {
                data
                mimeType
            }
            cookies {
                name
                value
            }
            headers {
                values {
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
            body {
                mimeType
                data
            }
            headers {
                values {
                    value
                    key
                }
            }
        }
    }
`;

export default NetworkEventDetailFragment;
