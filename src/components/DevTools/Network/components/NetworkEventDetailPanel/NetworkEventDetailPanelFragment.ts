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
        ...RequestTabFragment
        ...ResponseTabFragment
    }
`;

export default NetworkEventDetailPanelFragment;
