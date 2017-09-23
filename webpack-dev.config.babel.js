// NPM Modules
import { HotModuleReplacementPlugin } from 'webpack';

// Base config
import baseConfig from './webpack-common.config.babel';

const devConfig = baseConfig;

devConfig.devtool = 'inline-source-map';

// The following configuration settings are what makes hot reloading possible
devConfig.devServer = {
    hot: true,
};

devConfig.plugins = [
    ...devConfig.plugins,
    new HotModuleReplacementPlugin(),
];

export default devConfig;
