"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable global-require */
var path_1 = __importDefault(require("path"));
var hasDependency_1 = __importDefault(require("../hasDependency"));
function test(options) {
    return (options.framework === 'react-native' ||
        (!options.framework && hasDependency_1.default('@storybook/react-native')));
}
function configure(options, storybook) {
    var _a = options.configPath, configPath = _a === void 0 ? 'storybook' : _a, config = options.config;
    if (config && typeof config === 'function') {
        config(storybook);
        return;
    }
    var resolvedConfigPath = path_1.default.resolve(configPath);
    jest.requireActual(resolvedConfigPath);
}
function load(options) {
    var storybook = jest.requireActual('@storybook/react-native');
    configure(options, storybook);
    return {
        renderTree: require('../react/renderTree').default,
        renderShallowTree: require('../react/renderShallowTree').default,
        framework: 'react-native',
        storybook: storybook,
    };
}
var reactNativeLoader = {
    load: load,
    test: test,
};
exports.default = reactNativeLoader;
