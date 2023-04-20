import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: ['http://otf.overloop.io/api'],
    generates: {
        'src/gql/schema.gql': {
            plugins: ['schema-ast'],
        },
    },
};

export default config;
