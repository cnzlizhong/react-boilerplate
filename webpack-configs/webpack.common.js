const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
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
                    test: /\.(ts|js)x?$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                ['@babel/preset-react', { runtime: 'automatic' }],
                                '@babel/preset-typescript',
                            ],
                            // Enable fast refresh on development mode.
                            plugins: [isEnvDevelopment && ReactFreshBabelPlugin].filter(Boolean),
                        },
                    },
                },
                {
                    test: /\.(woff|woff2|eot|ttf|svg)$/,
                    type: 'asset',
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    type: 'asset/resource',
                },
                {
                    test: /\.css$/i,
                    exclude: /\.module\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
                },
                // Enable CSS module for *.module.css fiels.
                {
                    test: /\.module\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
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
            // Check ts types when building
            new ForkTsCheckerWebpackPlugin({
                async: false, // Make sure build only emits code after ts checking finishes.
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
