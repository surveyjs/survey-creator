"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable global-require,import/no-dynamic-require */
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var loaderScriptName = 'loader.js';
var isDirectory = function (source) { return fs_1.default.lstatSync(source).isDirectory(); };
function getLoaders() {
    return fs_1.default
        .readdirSync(__dirname)
        .map(function (name) { return path_1.default.join(__dirname, name); })
        .filter(isDirectory)
        .map(function (framework) { return path_1.default.join(framework, loaderScriptName); })
        .filter(fs_1.default.existsSync)
        .map(function (loader) { return require(loader).default; });
}
function loadFramework(options) {
    var loaders = getLoaders();
    var loader = loaders.find(function (frameworkLoader) { return frameworkLoader.test(options); });
    if (!loader) {
        throw new Error("Couldn't find an appropriate framework loader -- do you need to set the `framework` option?");
    }
    return loader.load(options);
}
exports.default = loadFramework;
