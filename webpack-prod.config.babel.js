// NPM Packages
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { optimize } from 'webpack';

// Config Imports
import baseConfig from './webpack-common.config.babel';

const prodConfig = baseConfig;

// Overwrite css-loader configuration to support minification
const cssRules = prodConfig.module.rules[1];
const hasCssRules = cssRules && /css/.test(cssRules.test);
const cssLoaderConfig = hasCssRules && cssRules.use[1];
const hasCssLoaderConfig = cssLoaderConfig && /css-loader/.test(cssLoaderConfig.loader);

if (hasCssLoaderConfig) {
    prodConfig.module.rules[1].use[1].options = {
        importLoaders: 1,
        minimize: {
            discardComments: {
                removeAll: true,
            },
        },
    };
}

prodConfig.plugins = [
    ...prodConfig.plugins,

    // Generates an overview of the bundles produced via commonsChunkPlugin
    new BundleAnalyzerPlugin({
        analyzerMode: 'static',
    }),

    // Removes comments from JS and minifies it down without mangling
    new optimize.UglifyJsPlugin({
        parallel: true,
        comments: false,
        uglifyOptions: {
            warnings: false,
        },
    }),
];

export default prodConfig;
