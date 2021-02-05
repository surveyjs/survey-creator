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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_bodies_1 = require("../test-bodies");
var Stories2SnapsConverter_1 = require("../Stories2SnapsConverter");
var ignore = ['**/node_modules/**'];
var defaultStories2SnapsConverter = new Stories2SnapsConverter_1.Stories2SnapsConverter();
function getIntegrityOptions(_a) {
    var integrityOptions = _a.integrityOptions;
    if (integrityOptions === false) {
        return false;
    }
    if (typeof integrityOptions !== 'object') {
        return false;
    }
    var ignoreOption = Array.isArray(integrityOptions.ignore)
        ? integrityOptions.ignore
        : [];
    return __assign(__assign({}, integrityOptions), { ignore: __spreadArrays(ignore, ignoreOption), absolute: true });
}
// @ts-ignore
function ensureOptionsDefaults(options) {
    var _a = options.suite, suite = _a === void 0 ? 'Storyshots' : _a, asyncJest = options.asyncJest, storyNameRegex = options.storyNameRegex, storyKindRegex = options.storyKindRegex, renderer = options.renderer, serializer = options.serializer, snapshotSerializers = options.snapshotSerializers, _b = options.stories2snapsConverter, stories2snapsConverter = _b === void 0 ? defaultStories2SnapsConverter : _b, _c = options.test, testMethod = _c === void 0 ? test_bodies_1.snapshotWithOptions({ renderer: renderer, serializer: serializer }) : _c;
    var integrityOptions = getIntegrityOptions(options);
    return {
        asyncJest: asyncJest,
        suite: suite,
        storyNameRegex: storyNameRegex,
        storyKindRegex: storyKindRegex,
        stories2snapsConverter: stories2snapsConverter,
        testMethod: testMethod,
        snapshotSerializers: snapshotSerializers,
        integrityOptions: integrityOptions,
    };
}
exports.default = ensureOptionsDefaults;
