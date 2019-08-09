const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        host: '0.0.0.0',
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

});