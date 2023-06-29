module.exports = {
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '\\.(scss)$': '<rootDir>/cypress/__mocks__/styleMock.js',
        '^src/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['./src/setupTests.ts'],
};
