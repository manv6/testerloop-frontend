import graphql from 'babel-plugin-relay/macro';

const AppQuery = graphql`
    query AppQuery {
        ...TimelineControlsFragment
        ...NetworkPanelFragment
        ...SummaryFragment
        ...StepsFragment
    }
`;

export default AppQuery;
