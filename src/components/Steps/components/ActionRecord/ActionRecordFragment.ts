import graphql from 'babel-plugin-relay/macro';

const ActionRecordFragment = graphql`
    fragment ActionRecordFragment on CommandEvent {
        id
        at
        until
        status
        name
        description
        error {
            stackTrace
            url
            urlText
        }
    }
`;

export default ActionRecordFragment;
