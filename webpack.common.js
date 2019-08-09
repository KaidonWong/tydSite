const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: {
        solution: './entry/solution.js',
        aboutus: './entry/aboutus.js',
        home: './entry/home.js',
        product: './entry/product.js',
        news: './entry/news.js',
        zhao: './entry/zhao.js',
        newsshow: './entry/newsshow.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     chunks: ['app'],
        //     template: 'html/template.html',
        //     filename: 'chunk-app.html',
        // }),
        new HtmlWebpackPlugin({
            chunks: ['solution'],
            template: 'html/solution.html',
            filename: 'solution.html',
        }),
        new HtmlWebpackPlugin({
            chunks: ['aboutus'],
            template: 'html/aboutus.html',
            filename: 'aboutus.html',
        }),
        // new HtmlWebpackPlugin({
        //     chunks: ['shouye'],
        //     template: 'html/shouye.html',
        //     filename: 'shouye.html',
        // }),
        new HtmlWebpackPlugin({
            chunks: ['home'],
            template: 'html/home.html',
            filename: 'home.html',
        }),
        new HtmlWebpackPlugin({
            chunks: ['product'],
            template: 'html/product.html',
            filename: 'product.html',
        }),
        new HtmlWebpackPlugin({
            chunks: ['news'],
            template: 'html/news.html',
            filename: 'news.html',
        }),
        new HtmlWebpackPlugin({
            chunks: ['zhao'],
            template: 'html/zhao.html',
            filename: 'zhao.html',
        }),
        new HtmlWebpackPlugin({
            chunks: ['newsshow'],
            template: 'html/newsshow.html',
            filename: 'newsshow.html',
        }),
    ],
};