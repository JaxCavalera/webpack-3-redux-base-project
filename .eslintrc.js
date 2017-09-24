var path = require('path');

module.exports = {
    extends: [
        'airbnb-base',
        'plugin:fetch/recommended',
    ],
    parser: 'babel-eslint',
    settings: {
        'import/resolver': 'node',
    },
    globals: {
        fetch: false,
        shallow: false,
        render: false,
        mount: false,
    },
    env: {
        jest: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'arrow-body-style': 'off',
        'arrow-parens': 'off',
        'class-methods-use-this': 'off',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'import/prefer-default-export': 'off',
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": [
                    "**/*.test.js",
                    "**/*.spec.js",
                    "**/*.config.babel.js",
                ],
            },
        ],
        'linebreak-style': 'off',
        'max-len': [
            'error',
            150,
        ],
        'no-bitwise': 'off',
        'no-param-reassign': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    },
    plugins: [
        'react',
        'fetch',
    ],
};
