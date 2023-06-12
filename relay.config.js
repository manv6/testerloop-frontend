module.exports = {
    src: './src',
    language: 'typescript',
    schema: './src/gql/schema.gql',
    exclude: ['**/node_modules/**', 'src/gql/**/*'],
    persistConfig: {
        file: './src/gql/__generated__/persistedQueries.json',
        algorithm: 'SHA256',
    }
};
