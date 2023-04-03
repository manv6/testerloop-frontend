import graphql from 'babel-plugin-relay/macro';

const NetworkErrorCountFragment = graphql`
    fragment NetworkErrorCountFragment on TestExecution {
        summaryNetworkErrors: events(
            filter: { type: NETWORK, networkFilter: { status: { gte: 400 } } }
        ) {
            totalCount
        }
    }
`;

export default NetworkErrorCountFragment;
