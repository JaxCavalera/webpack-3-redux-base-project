module.exports = {
    testMatch: [
        '**/src/**/*.spec.js',
    ],
    setupFiles: ['./testSetup.js'],
    setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',
};

