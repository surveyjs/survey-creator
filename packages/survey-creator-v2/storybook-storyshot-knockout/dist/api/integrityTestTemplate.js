"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable jest/no-export */
var fs_1 = __importDefault(require("fs"));
var glob_1 = __importDefault(require("glob"));
var global_1 = require("global");
var ts_dedent_1 = __importDefault(require("ts-dedent"));
expect.extend({
    notToBeAbandoned: function (storyshots, stories2snapsConverter) {
        var abandonedStoryshots = storyshots.filter(function (fileName) {
            var possibleStoriesFiles = stories2snapsConverter.getPossibleStoriesFiles(fileName);
            return !possibleStoriesFiles.some(fs_1.default.existsSync);
        });
        if (abandonedStoryshots.length === 0) {
            return { pass: true, message: function () { return ''; } };
        }
        var formattedList = abandonedStoryshots.join('\n  ');
        // See https://github.com/facebook/jest/issues/8732#issuecomment-516445064
        // eslint-disable-next-line no-underscore-dangle
        var isUpdate = expect.getState().snapshotState._updateSnapshot === 'all';
        if (isUpdate) {
            abandonedStoryshots.forEach(function (file) { return fs_1.default.unlinkSync(file); });
            // eslint-disable-next-line no-console
            console.log(ts_dedent_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        Removed abandoned storyshots:\n          ", "\n      "], ["\n        Removed abandoned storyshots:\n          ", "\n      "])), formattedList));
            return { pass: true, message: function () { return ''; } };
        }
        return {
            pass: false,
            message: function () { return ts_dedent_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          Found abandoned storyshots. Run jest with -u to remove them:\n            ", "\n        "], ["\n          Found abandoned storyshots. Run jest with -u to remove them:\n            ", "\n        "])), formattedList); },
        };
    },
});
function integrityTest(integrityOptions, stories2snapsConverter) {
    if (integrityOptions === false) {
        return;
    }
    global_1.describe('Storyshots Integrity', function () {
        global_1.it('Abandoned Storyshots', function () {
            var snapshotExtension = stories2snapsConverter.getSnapshotExtension();
            var storyshots = glob_1.default.sync("**/*" + snapshotExtension, integrityOptions);
            // @ts-ignore
            expect(storyshots).notToBeAbandoned(stories2snapsConverter);
        });
    });
}
exports.default = integrityTest;
var templateObject_1, templateObject_2;
