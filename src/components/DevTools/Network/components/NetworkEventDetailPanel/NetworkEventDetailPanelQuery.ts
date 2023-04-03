import graphql from 'babel-plugin-relay/macro';

const NetworkEventDetailPanelQuery = graphql`
    query NetworkEventDetailPanelQuery($httpNetworkEventId: ID!) {
        httpNetworkEvent(id: $httpNetworkEventId) {
            __typename
            id
            resourceType
            at
            until
            initiator {
                origin
                lineNumber
            }
            ...RequestTabFragment
            ...ResponseTabFragment
        }
    }
`;

export default NetworkEventDetailPanelQuery;
