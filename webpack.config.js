'use strict';

module.exports = {
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
    }
};