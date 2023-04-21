import graphql from 'babel-plugin-relay/macro';

const SeekerFragment = graphql`
    fragment SeekerFragment on TestExecution {
        screenshots: events(filter: { type: SCREENSHOT }) {
            edges {
                node {
                    ... on TestExecutionScreenshot {
                        at
                        url {
                            url
                        }
                    }
                }
            }
        }
    }
`;

export default SeekerFragment;
