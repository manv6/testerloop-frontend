import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: ['http://localhost:8080/api'],
    generates: {
        'src/gql/schema.gql': {
            plugins: ['schema-ast']
        }
    }
};

export default config;
