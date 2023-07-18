const merge = require('webpack-merge');
const path = require('path');
const root = path.resolve(__dirname);

const common = require('./webpack.common.config.js');

module.exports = (env) => merge(common(env), {
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        contentBase: path.resolve(root, 'build'),
        publicPath: '/',
        compress: true,
        writeToDisk: true,
        hot: true,
        historyApiFallback: true,
        open: true
    }
});