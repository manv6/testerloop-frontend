import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
    schema: ['https://otf.overloop.io/api'],
    generates: {
        'src/relay/schema.gql': {
            plugins: ['schema-ast']
        }
    }
};

export default config;
