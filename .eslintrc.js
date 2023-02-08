module.exports = {
    root: true,
    env: { browser: true },
    ignorePatterns: ['src/data/*'],
    extends: [
        'react-app',
        'react-app/jest',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        '@typescript-eslint/no-empty-function': ['off'],
        'no-trailing-spaces': ['error'],
        'camelcase': ['error'],
        'indent': ['error', 4],
        'eol-last': ['error', 'always']
    },
};
