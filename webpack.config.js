'use strict';

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var GenerateJsonPlugin = require('generate-json-webpack-plugin');
var packageJson = require('./package.json');
var fs = require('fs');

var banner = [
    "surveyjs Editor v" + packageJson.version,
    "(c) Devsoft Baltic O� - http://surveyjs.io/",
    "Github - https://github.com/surveyjs/editor",
    "License: (http://editor.surveyjs.io/license.html)"
].join("\n");

var packagePlatformJson = {
    "name": "surveyjs-editor",
    "version": packageJson.version,
    "description": "Use surveyjs Editor to create or edit JSON for surveyjs library.",
    "keywords": [
        "Survey",
        "JavaScript",
        "Editor",
        "surveyjs"
    ],
    "homepage": "http://editor.surveyjs.io",
    "license": "http://editor.surveyjs.io/license.html",
    "files": [
        "dist/",
        "js/"
    ],
    "main": "./js/surveyeditor.min.js",
    "repository": {
        "type": "git",
        "url": "https://github.com/surveyjs/editor.git"
    },
    "engines": {
        "node": ">=0.10.0"
    },
    "dependencies": {
        "survey-knockout": "^0.10.0",
        "knockout": "^3.4.0",
        "bootstrap": "^3.3.6",
        "ace-builds": "^1.2.2"
    }
};

module.exports = function(options) {
    var packagePath = './package/';
    var extractCSS = new ExtractTextPlugin({ filename: packagePath + 'surveyeditor.css' });

    var percentage_handler = function handler(percentage, msg) {
        if ( 0 == percentage ) {
            console.log('Build started... good luck!');
        } else if ( 1 == percentage ) {
            fs.createReadStream('./npmREADME.md').pipe(fs.createWriteStream(packagePath + 'README.md'));
        }
    };

    var config = {
        entry: {
            'surveyeditor': path.resolve(__dirname, './src/entries/index.ts')
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.scss'],
            alias: {
                tslib:  path.join(__dirname, './src/entries/helpers.ts')
            }
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    loader: 'ts-loader'
                },
                {
                    test: /\.scss$/,
                    loader: extractCSS.extract({
                        fallbackLoader: 'style-loader',
                        loader: 'css-loader!sass-loader'
                    })
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    loader: 'file-loader',
                    options: {
                        name: packagePath + 'fonts/[name].[ext]'
                    }
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                }
            ]
        },
        output: {
            filename: packagePath + '[name]' + (options.buildType === 'prod' ? '.min': '') + '.js',
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
        plugins: [
            new webpack.ProgressPlugin(percentage_handler),
            extractCSS
        ],
        devtool: 'inline-source-map'
    };

    if (options.buildType === 'prod') {
        config.devtool = false;
        config.plugins = config.plugins.concat([
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.BannerPlugin(banner),
            new GenerateJsonPlugin(
                packagePath + 'package.json',
                packagePlatformJson,
                undefined,
                2
            )
        ]);
    }

    if (options.buildType === 'dev') {
        config.plugins = config.plugins.concat([
            new webpack.LoaderOptionsPlugin({ debug: true})
        ]);
    }

    return config;
};