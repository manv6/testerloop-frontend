import graphql from 'babel-plugin-relay/macro';

const NetworkPanelFragment = graphql`
    fragment NetworkPanelFragment on Query {
        test
    }
`;

export default NetworkPanelFragment;
