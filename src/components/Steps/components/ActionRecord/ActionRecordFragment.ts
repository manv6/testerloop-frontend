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
            location {
                line {
                    line
                    url
                    file {
                        path
                    }
                }
                column
            }
        }
    }
`;

export default ActionRecordFragment;
