"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.raw = exports.getStorybook = exports.forceReRender = exports.setAddon = exports.clearDecorators = exports.addParameters = exports.addDecorator = exports.configure = exports.storiesOf = void 0;
/* eslint-disable prefer-destructuring */
var client_1 = require("@storybook/core/client");
require("./globals");
var render_1 = __importDefault(require("./render"));
var framework = 'knockout';
var api = client_1.start(render_1.default);
exports.storiesOf = function (kind, m) {
    return api.clientApi.storiesOf(kind, m).addParameters({
        framework: framework,
    });
};
exports.configure = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return api.configure.apply(api, __spreadArrays([framework], args));
};
exports.addDecorator = api.clientApi.addDecorator;
exports.addParameters = api.clientApi.addParameters;
exports.clearDecorators = api.clientApi.clearDecorators;
exports.setAddon = api.clientApi.setAddon;
exports.forceReRender = api.forceReRender;
exports.getStorybook = api.clientApi.getStorybook;
exports.raw = api.clientApi.raw;
