import graphql from 'babel-plugin-relay/macro';

const RequestTabFragment = graphql`
    fragment RequestTabFragment on HttpNetworkEvent {
        request {
            ...RequestHeadersFragment
            ...RequestDataFragment
            ...QueryParamsFragment
            ...RequestToUrlFragment
        }
    }
`;

export default RequestTabFragment;
