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
var global_1 = __importDefault(require("global"));
var configure_1 = __importDefault(require("../configure"));
var hasDependency_1 = __importDefault(require("../hasDependency"));
function test(options) {
    return options.framework === 'rax' || (!options.framework && hasDependency_1.default('@storybook/rax'));
}
function load(options) {
    global_1.default.STORYBOOK_ENV = 'rax';
    var storybook = jest.requireActual('@storybook/rax');
    configure_1.default(__assign(__assign({}, options), { storybook: storybook }));
    return {
        framework: 'rax',
        renderTree: jest.requireActual('./renderTree').default,
        renderShallowTree: function () {
            throw new Error('Shallow renderer is not supported for rax');
        },
        storybook: storybook,
    };
}
var raxLoader = {
    load: load,
    test: test,
};
exports.default = raxLoader;
