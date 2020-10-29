"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var configure_1 = __importDefault(require("../configure"));
var hasDependency_1 = __importDefault(require("../hasDependency"));
function test(options) {
    return options.framework === 'react' || (!options.framework && hasDependency_1.default('@storybook/react'));
}
function load(options) {
    var storybook = jest.requireActual('@storybook/react');
    configure_1.default(__assign(__assign({}, options), { storybook: storybook }));
    return {
        framework: 'react',
        renderTree: jest.requireActual('./renderTree').default,
        renderShallowTree: jest.requireActual('./renderShallowTree').default,
        storybook: storybook,
    };
}
var reactLoader = {
    load: load,
    test: test,
};
exports.default = reactLoader;
