import graphql from 'babel-plugin-relay/macro';

const EnvironmentDetailsFragment = graphql`
    fragment EnvironmentDetailsFragment on TestExecution {
        at
        summaryEnvironmentDetails: testRun {
            id
            testCodeRevision {
                ... on GitHubRevision {
                    author {
                        name
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
