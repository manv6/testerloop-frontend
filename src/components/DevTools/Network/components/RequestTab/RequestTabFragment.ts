import graphql from 'babel-plugin-relay/macro';

const RequestTabFragment = graphql`
    fragment RequestTabFragment on HttpNetworkEvent {
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
    }
`;

export default RequestTabFragment;
