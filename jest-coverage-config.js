module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '**/src/**/*.js',
        '!**/*.spec.js',
    ],
    testMatch: [
        '**/src/**/*.spec.js',
    ],
    setupFiles: ['./testSetup.js'],
};
