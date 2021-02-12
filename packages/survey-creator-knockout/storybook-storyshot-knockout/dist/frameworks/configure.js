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
exports.getMainFile = exports.getPreviewFile = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var server_1 = require("@storybook/core/server");
var register_1 = __importDefault(require("babel-plugin-require-context-hook/register"));
var global_1 = __importDefault(require("global"));
register_1.default();
var isFile = function (file) {
    try {
        return fs_1.default.lstatSync(file).isFile();
    }
    catch (e) {
        return false;
    }
};
var supportedExtensions = ['ts', 'tsx', 'js', 'jsx'];
var resolveFile = function (configDir, supportedFilenames) {
    return supportedFilenames
        .flatMap(function (filename) {
        return supportedExtensions.map(function (ext) { return path_1.default.join(configDir, filename + "." + ext); });
    })
        .find(isFile) || false;
};
exports.getPreviewFile = function (configDir) {
    return resolveFile(configDir, ['preview', 'config']);
};
exports.getMainFile = function (configDir) { return resolveFile(configDir, ['main']); };
function getConfigPathParts(input) {
    var configDir = path_1.default.resolve(input);
    if (fs_1.default.lstatSync(configDir).isDirectory()) {
        var output = {};
        var preview = exports.getPreviewFile(configDir);
        var main = exports.getMainFile(configDir);
        if (preview) {
            output.preview = preview;
        }
        if (main) {
            var _a = jest.requireActual(main).stories, stories = _a === void 0 ? [] : _a;
            output.stories = stories.map(function (pattern) {
                var _a = server_1.toRequireContext(pattern), basePath = _a.path, recursive = _a.recursive, match = _a.match;
                var regex = new RegExp(match);
                // eslint-disable-next-line no-underscore-dangle
                return global_1.default.__requireContext(configDir, basePath, recursive, regex);
            });
        }
        return output;
    }
    return { preview: configDir };
}
function configure(options) {
    var _a = options.configPath, configPath = _a === void 0 ? '.storybook' : _a, config = options.config, storybook = options.storybook;
    if (config && typeof config === 'function') {
        config(storybook);
        return;
    }
    var _b = getConfigPathParts(configPath), preview = _b.preview, stories = _b.stories;
    if (preview) {
        // This is essentially the same code as lib/core/src/server/preview/virtualModuleEntry.template
        var _c = jest.requireActual(preview), parameters = _c.parameters, decorators = _c.decorators, globals = _c.globals, globalTypes = _c.globalTypes, argTypesEnhancers = _c.argTypesEnhancers;
        if (decorators) {
            decorators.forEach(function (decorator) { return storybook.addDecorator(decorator); });
        }
        if (parameters || globals || globalTypes) {
            storybook.addParameters(__assign(__assign({}, parameters), { globals: globals, globalTypes: globalTypes }));
        }
        if (argTypesEnhancers) {
            argTypesEnhancers.forEach(function (enhancer) {
                return storybook.addArgTypesEnhancer(enhancer);
            });
        }
    }
    if (stories && stories.length) {
        storybook.configure(stories, false, false);
    }
}
exports.default = configure;
