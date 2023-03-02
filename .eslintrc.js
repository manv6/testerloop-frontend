module.exports = {
    root: true,
    env: { browser: true },
    ignorePatterns: ['src/data/*', '*/__generated__/*', '/.eslintrc.js', '*/node_modules/*'],
    extends: [
        'react-app',
        'react-app/jest',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json'],
      },
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        '@typescript-eslint/no-unnecessary-condition': ['error'],
        '@typescript-eslint/no-empty-function': ['off'],
        'no-trailing-spaces': ['error'],
        camelcase: ['error'],
        'eol-last': ['error', 'always'],
        'no-unneeded-ternary': ['error'],
        'no-nested-ternary': ['error'],
        'react/prop-types': ['off'],
        'react/jsx-wrap-multilines': [
            'error',
            {
                declaration: 'parens',
                assignment: 'parens',
                return: 'parens',
                arrow: 'parens',
                condition: 'parens',
                logical: 'parens',
                prop: 'parens',
            },
        ],
        'operator-linebreak': [
            'error',
            'after',
            {
                overrides: {
                    '?': 'before',
                    ':': 'before',
                },
            },
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
            {
                selector: 'variableLike',
                format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            },
            {
                selector: 'enumMember',
                format: ['UPPER_CASE'],
            },
        ],
        'prettier/prettier': ['warn'],
    },
};
