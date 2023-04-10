import graphql from 'babel-plugin-relay/macro';

const EnvironmentDetailsFragment = graphql`
    fragment EnvironmentDetailsFragment on TestExecution {
        until
        summaryEnvironmentDetails: testRun {
            id
            testCodeRevision {
                ... on GitHubRevision {
                    author {
                        email
                        user {
                            name
                            avatar
                            url
                        }
                    }
                    commitId(type: SHORT)
                    url
                    branch {
                        name
                        url
                    }
                }
            }
        }
    }
`;

export default EnvironmentDetailsFragment;
