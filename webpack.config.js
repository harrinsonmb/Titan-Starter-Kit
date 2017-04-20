'use strict';

const webpack = require('webpack');

module.exports = {
    cache: true,
    entry: __dirname + '/src/main.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist/js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'node-static',
            filename: 'node-static.js',
            minChunks(module) {
                const context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
        }),
    ]
};