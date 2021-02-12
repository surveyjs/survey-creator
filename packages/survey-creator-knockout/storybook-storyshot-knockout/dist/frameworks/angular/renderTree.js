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
// eslint-disable-next-line import/no-extraneous-dependencies
var AngularSnapshotSerializer_1 = __importDefault(require("jest-preset-angular/build/AngularSnapshotSerializer"));
// eslint-disable-next-line import/no-extraneous-dependencies
var HTMLCommentSerializer_1 = __importDefault(require("jest-preset-angular/build/HTMLCommentSerializer"));
// eslint-disable-next-line import/no-extraneous-dependencies
var testing_1 = require("@angular/core/testing");
// eslint-disable-next-line import/no-extraneous-dependencies
var testing_2 = require("@angular/platform-browser-dynamic/testing");
// eslint-disable-next-line import/no-extraneous-dependencies
var core_1 = require("@angular/core");
var jest_specific_snapshot_1 = require("jest-specific-snapshot");
var helpers_1 = require("./helpers");
jest_specific_snapshot_1.addSerializer(HTMLCommentSerializer_1.default);
jest_specific_snapshot_1.addSerializer(AngularSnapshotSerializer_1.default);
function getRenderedTree(story) {
    var currentStory = story.render();
    var _a = helpers_1.initModuleData(currentStory), moduleMeta = _a.moduleMeta, AppComponent = _a.AppComponent;
    testing_1.TestBed.configureTestingModule(
    // TODO: take a look at `bootstrap` because it looks it does not exists in TestModuleMetadata
    {
        imports: __spreadArrays(moduleMeta.imports),
        declarations: __spreadArrays(moduleMeta.declarations),
        providers: __spreadArrays(moduleMeta.providers),
        schemas: __spreadArrays([core_1.NO_ERRORS_SCHEMA], moduleMeta.schemas),
        bootstrap: __spreadArrays(moduleMeta.bootstrap),
    });
    testing_1.TestBed.overrideModule(testing_2.BrowserDynamicTestingModule, {
        set: {
            entryComponents: __spreadArrays(moduleMeta.entryComponents),
        },
    });
    return testing_1.TestBed.compileComponents().then(function () {
        var tree = testing_1.TestBed.createComponent(AppComponent);
        tree.detectChanges();
        return tree;
    });
}
exports.default = getRenderedTree;
