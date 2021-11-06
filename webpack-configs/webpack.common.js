const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReactFreshBabelPlugin = require('react-refresh/babel');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
    const isEnvDevelopment = env === 'development';
    const isProduction = env === 'production';
    return {
        module: {
            rules: [
                {
                    test: /\.(js)x?$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                ['@babel/preset-react', { runtime: 'automatic' }],
                            ],
                            // Enable fast refresh on development mode.
                            plugins: [isEnvDevelopment && ReactFreshBabelPlugin].filter(Boolean),
                        },
                    },
                },
                {
                    test: /\.(woff|woff2|eot|ttf|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            name: 'assets/[name].[hash:8].[ext]',
                            limit: 10000,
                        },
                    },
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[name].[hash:8].[ext]',
                    },
                },
                {
                    test: /\.less$/i,
                    exclude: /\.module\.less$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
                },
                // Enable CSS module for *.module.less fiels.
                {
                    test: /\.module\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                            },
                        },
                        'less-loader',
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.jsx', '.js'],
            alias: {
                process: 'process/browser',
            },
        },
        plugins: [
            // Make process and browser available in the app
            // so that can access env variables like process.env.NODE_ENV.
            new webpack.ProvidePlugin({
                process: 'process/browser',
            }),
            new HtmlWebpackPlugin({
                favicon: './src/assets/icons/react-icon.png',
                template: './src/index.html',
            }),
            new MiniCssExtractPlugin({
                filename: isProduction ? '[name].[contenthash:8].css' : '[name].css',
                chunkFilename: isProduction
                    ? '[name].[contenthash:8].chunk.css'
                    : '[name].chunk.css',
            }),
            new CopyWebpackPlugin({
                patterns: [{ from: 'src/assets/icons', to: 'assets' }],
            }),
            new ESLintPlugin({
                extensions: ['jsx', 'js'],
            }),
            new Dotenv({
                path: isEnvDevelopment ? './.env.development' : './.env.production',
            }),
        ],
    };
};
