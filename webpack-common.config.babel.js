// NPM Modules
import path from 'path';
import { optimize } from 'webpack';

// Used to enable support for importing css files into other css files
import postcssImport from 'postcss-import';

// Provides support for things like variables, complex nesting, etc.
import precss from 'precss';

// Adds prefixes to css rules for specified target browsers
import autoprefixer from 'autoprefixer';

// Package.json
import pkg from './package.json';

const jsRules = {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',

    // These options override .babelrc to enable tree-shaking for React Hot Module Loading
    options: {
        babelrc: false,
        plugins: [
            'react-hot-loader/babel',
            'transform-object-rest-spread',
            'transform-runtime',
        ],
        presets: [
            [
                'env',
                {
                    targets: {

                        // Targets browsers with 3% or more market share,
                        // used when determining what polyfills to include in bundles
                        browsers: '> 3%',
                    },
                    modules: false,
                },
            ],
            'react',
        ],
    },
};

// The order of loaders executes the bottom loader first and is important
const cssRules = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
        {
            // Style loader was chosen over isomorphic-style-loader for compatibility with hot reloading
            loader: 'style-loader',
        },
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
            },
        },
        {
            loader: 'postcss-loader',
            options: {

                // Postcss plugins run in the order listed (postcssImport first) 
                plugins: loader => [
                    postcssImport({
                        root: loader.resourcePath,
                    }),
                    precss(),
                    autoprefixer({

                        // Targets browsers with 3% or more market share
                        browsers: '> 3%',
                    }),
                ],
            },
        },
    ],
};

// Selects all dependency packages except babel-runtime (which will go into app.js)
const vendorList = [
    ...Object.keys(pkg.dependencies).slice(1),
];

export default {
    entry: {
        app: ['react-hot-loader/patch', './src/index.js'],
        vendor: vendorList,
    },
    output: {
        path: path.resolve(__dirname, './build/assets/js'),
        publicPath: 'assets/js',

        // [name] dynamically references the entry properties (One namespaced bundle per entry)
        filename: '[name].js',
    },
    module: {
        rules: [
            jsRules,
            cssRules,
        ],
    },
    plugins: [
        new optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: 2,
        }),
    ],
};
