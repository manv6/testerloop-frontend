import graphql from 'babel-plugin-relay/macro';

const DomPreviewFragment = graphql`
    fragment DomPreviewFragment on TestExecution {
        ...DomPreviewRendererFragment @defer
    }
`;

export default DomPreviewFragment;
