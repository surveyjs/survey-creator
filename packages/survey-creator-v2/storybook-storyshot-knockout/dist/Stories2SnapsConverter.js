"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.Stories2SnapsConverter = void 0;
var path_1 = __importDefault(require("path"));
var ts_dedent_1 = __importDefault(require("ts-dedent"));
var defaultOptions = {
    snapshotsDirName: '__snapshots__',
    snapshotExtension: '.storyshot',
    storiesExtensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
};
var Stories2SnapsConverter = /** @class */ (function () {
    function Stories2SnapsConverter(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.getSnapshotExtension = function () { return _this.options.snapshotExtension; };
        this.options = __assign(__assign({}, defaultOptions), options);
    }
    Stories2SnapsConverter.prototype.getStoryshotFile = function (fileName) {
        var _a = path_1.default.parse(fileName), dir = _a.dir, name = _a.name;
        var _b = this.options, snapshotsDirName = _b.snapshotsDirName, snapshotExtension = _b.snapshotExtension;
        return path_1.default.format({ dir: path_1.default.join(dir, snapshotsDirName), name: name, ext: snapshotExtension });
    };
    Stories2SnapsConverter.prototype.getSnapshotFileName = function (context) {
        var fileName = context.fileName, kind = context.kind;
        if (!fileName) {
            // eslint-disable-next-line no-console
            console.warn(ts_dedent_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          Storybook was unable to detect filename for stories of kind \"", "\".\n          To fix it, add following to your jest.config.js:\n              transform: {\n                // should be above any other js transform like babel-jest\n                '^.+\\.stories\\.js$': '@storybook/addon-storyshots/injectFileName',\n              }\n        "], ["\n          Storybook was unable to detect filename for stories of kind \"", "\".\n          To fix it, add following to your jest.config.js:\n              transform: {\n                // should be above any other js transform like babel-jest\n                '^.+\\\\.stories\\\\.js$': '@storybook/addon-storyshots/injectFileName',\n              }\n        "])), kind));
            return null;
        }
        return this.getStoryshotFile(fileName);
    };
    Stories2SnapsConverter.prototype.getPossibleStoriesFiles = function (storyshotFile) {
        var _a = path_1.default.parse(storyshotFile), dir = _a.dir, name = _a.name;
        var storiesExtensions = this.options.storiesExtensions;
        return storiesExtensions.map(function (ext) {
            return path_1.default.format({
                dir: path_1.default.dirname(dir),
                name: name,
                ext: ext,
            });
        });
    };
    return Stories2SnapsConverter;
}());
exports.Stories2SnapsConverter = Stories2SnapsConverter;
var templateObject_1;
