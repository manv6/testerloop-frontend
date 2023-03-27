import graphql from 'babel-plugin-relay/macro';

const NetworkPanelFragment = graphql`
    fragment NetworkPanelFragment on TestExecution {
        id
        searchedNetworkEvents: events(filter: { type: NETWORK }) {
            edges {
                __typename
                node {
                    ... on HttpNetworkEvent {
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
                            status
                            transferSize
                            body {
                                mimeType
                                data
                                size
                            }
                            headers {
                                values {
                                    value
                                    key
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default NetworkPanelFragment;
