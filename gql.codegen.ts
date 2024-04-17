import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: ['https://testerloop.theorchard.io/api'],
    generates: {
        'src/gql/schema.gql': {
            plugins: ['schema-ast'],
        },
    },
};

export default config;
