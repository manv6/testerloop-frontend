import graphql from 'babel-plugin-relay/macro';

const QueryParamsFragment = graphql`
    fragment QueryParamsFragment on HttpNetworkRequest {
        queryString {
            value
            key
        }
    }
`;

export default QueryParamsFragment;
