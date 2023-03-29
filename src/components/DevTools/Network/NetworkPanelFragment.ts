import graphql from 'babel-plugin-relay/macro';

const NetworkPanelFragment = graphql`
    fragment NetworkPanelFragment on TestExecution
    @argumentDefinitions(
        urlSearch: { type: "String", defaultValue: null }
        resourceType: {
            type: "[HttpNetworkEventResourceType!]"
            defaultValue: null
        }
    )
    @refetchable(queryName: "NetworkPanelFragmentRefetchQuery") {
        id
        searchedNetworkEvents: events(
            filter: {
                type: NETWORK
                networkFilter: {
                    urlSearch: $urlSearch
                    resourceType: $resourceType
                }
            }
        ) {
            edges {
                __typename
                node {
                    ... on HttpNetworkEvent {
                        __typename
                        id
                        at
                        until
                        ...RequestSliceFragment
                        ...NetworkEventDetailPanelFragment
                    }
                }
            }
        }
    }
`;

export default NetworkPanelFragment;
