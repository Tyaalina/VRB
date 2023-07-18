const path = require('path');
const webpack = require('webpack');
const root = path.resolve(__dirname);
const cacheDir = path.resolve(root, 'node_modules', '.cache');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv');
const fs = require('fs');

module.exports = (env) => {
    const basePath = root + '/.env';

    const envPath = basePath + '.' + env.NODE_ENV;

    const finalPath = fs.existsSync(envPath) ? envPath : basePath;

    const fileEnv = dotenv.config({ path: finalPath }).parsed;

    const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
        return prev;
    }, {});

    return {
        entry: {
            app: ["./src/index.tsx"]
        },
        context: root,
        output: {
            filename: 'bundle.js',
            path: path.resolve(root, 'build'),
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
            alias: {
                "../../theme.config$": path.join(__dirname, "src/semantic-ui/theme.config"),
                "../semantic-ui/site": path.join(__dirname, "src/semantic-ui/site")
            }
        },
        module: {
            rules: [
                { test: /\.json$/, loader: 'json-loader' },
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: {
                                useCache: true,
                                cacheDirectory: path.resolve(cacheDir, 'awcache'),
                            },
                        },
                    ],
                },
                {
                    test: /\.(scss|less|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                        'less-loader'
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|eot|woff|woff2|ttf)$/,
                    exclude: [
                        path.resolve(__dirname, "src", "assets")
                    ],
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'react-svg-loader'
                        },
                    ]
                },
            ]
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebPackPlugin({
                template: 'public/index.html',
                filename: 'index.html',
            }),
            new MiniCssExtractPlugin(),
            new webpack.DefinePlugin(envKeys),
        ]
    };
}