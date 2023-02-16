import graphql from 'babel-plugin-relay/macro';

const NetworkPanelFragment = graphql`
    fragment NetworkPanelFragment on TestExecution {
        id
    }
`;

export default NetworkPanelFragment;
