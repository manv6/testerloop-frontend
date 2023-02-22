import graphql from 'babel-plugin-relay/macro';

const TimelineControlsFragment = graphql`
    fragment TimelineControlsFragment on TestExecution {
        id
    }
`;

export default TimelineControlsFragment;
