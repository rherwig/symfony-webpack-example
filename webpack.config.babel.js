import { HotModuleReplacementPlugin } from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { join } from 'path';

export default {
    entry: [
        'webpack-dev-server/client?http://localhost:9000',
        'webpack/hot/only-dev-server',
        join(__dirname, 'web', 'js', 'index')
    ],
    output: {
        filename: 'bundle.js',
        path: 'web/assets/',
        publicPath: '/assets/'
    },
    devServer: {
        contentBase: join(__dirname, 'web'),
        host: '0.0.0.0',
        port: 9000,
        stats: {
            colors: true
        }
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css')
    ]
}