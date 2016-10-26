'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = function(options) {
    var babelConfig =  {
        presets: [
            [require.resolve('babel-preset-es2015'), { loose: true }],
            require.resolve('babel-preset-react')
        ]
    };

    var config = {
        resolveLoader: {root: path.join(__dirname, 'node_modules')},
        resolve: {
            extensions: ['', '.js', '.ts', '.jsx', '.tsx']
        },
        entry: {},
        output: {
            filename: '[name].js',
            library: 'SurveyEditor',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        externals: {
            'knockout': {
                root: 'ko',
                commonjs2: 'knockout',
                commonjs: 'knockout',
                amd: 'knockout'
            },
            'survey-knockout': {
                root: 'Survey',
                commonjs2: 'survey-knockout',
                commonjs: 'survey-knockout',
                amd: 'survey-knockout'
            }
        },
        module: {
            preLoaders: [
                { test: /\.(js|jsx)$/, loader: "source-map-loader" }
            ],
            loaders: [
                {
                    test: /\.(ts|tsx)$/,
                    loaders:[
                        require.resolve('babel-loader') + '?' + JSON.stringify(babelConfig), // TODO why do we need it
                        require.resolve('ts-loader')
                    ]
                },
                {
                    test: /\.(js|jsx)$/,
                    loader: require.resolve('babel-loader'),
                    query: babelConfig
                }
            ]
        },
        debug: true,
        plugins: [
            new webpack.NoErrorsPlugin()
        ],
        devtool: 'inline-source-map'
    };

    config.entry[options.bundleName] = path.resolve(__dirname, options.entryPoint);

    return config;
};