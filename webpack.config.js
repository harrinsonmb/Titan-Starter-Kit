'use strict';

module.exports = {
    entry: __dirname + '/src/main.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist/js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts']
    },
    module: {
        loaders: [
            { loader: 'ts-loader' }
        ]
    }
};