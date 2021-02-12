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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = __importStar(require("global"));
var addons_1 = __importStar(require("@storybook/addons"));
var ensureOptionsDefaults_1 = __importDefault(require("./ensureOptionsDefaults"));
var snapshotsTestsTemplate_1 = __importDefault(require("./snapshotsTestsTemplate"));
var integrityTestTemplate_1 = __importDefault(require("./integrityTestTemplate"));
var frameworkLoader_1 = __importDefault(require("../frameworks/frameworkLoader"));
global_1.default.STORYBOOK_REACT_CLASSES = global_1.default.STORYBOOK_REACT_CLASSES || {};
var methods = ['beforeAll', 'beforeEach', 'afterEach', 'afterAll'];
function callTestMethodGlobals(testMethod) {
    methods.forEach(function (method) {
        if (typeof testMethod[method] === 'function') {
            global_1.default[method](testMethod[method], testMethod[method].timeout);
        }
    });
}
var isDisabled = function (parameter) {
    return parameter === false || (parameter && parameter.disable === true);
};
function testStorySnapshots(options) {
    if (options === void 0) { options = {}; }
    if (typeof global_1.describe !== 'function') {
        throw new Error('testStorySnapshots is intended only to be used inside jest');
    }
    addons_1.default.setChannel(addons_1.mockChannel());
    var _a = frameworkLoader_1.default(options), storybook = _a.storybook, framework = _a.framework, renderTree = _a.renderTree, renderShallowTree = _a.renderShallowTree;
    var _b = ensureOptionsDefaults_1.default(options), asyncJest = _b.asyncJest, suite = _b.suite, storyNameRegex = _b.storyNameRegex, storyKindRegex = _b.storyKindRegex, stories2snapsConverter = _b.stories2snapsConverter, testMethod = _b.testMethod, integrityOptions = _b.integrityOptions, snapshotSerializers = _b.snapshotSerializers;
    var testMethodParams = {
        renderTree: renderTree,
        renderShallowTree: renderShallowTree,
        stories2snapsConverter: stories2snapsConverter,
    };
    var data = storybook
        .raw()
        .filter(function (_a) {
        var name = _a.name;
        return (storyNameRegex ? name.match(storyNameRegex) : true);
    })
        .filter(function (_a) {
        var kind = _a.kind;
        return (storyKindRegex ? kind.match(storyKindRegex) : true);
    })
        .reduce(function (acc, item) {
        var kind = item.kind, render = item.storyFn, parameters = item.parameters;
        var existing = acc.find(function (i) { return i.kind === kind; });
        var fileName = item.parameters.fileName;
        if (!isDisabled(parameters.storyshots)) {
            if (existing) {
                existing.children.push(__assign(__assign({}, item), { render: render, fileName: fileName }));
            }
            else {
                acc.push({
                    kind: kind,
                    children: [__assign(__assign({}, item), { render: render, fileName: fileName })],
                });
            }
        }
        return acc;
    }, []);
    if (data.length) {
        callTestMethodGlobals(testMethod);
        snapshotsTestsTemplate_1.default({
            data: data,
            asyncJest: asyncJest,
            suite: suite,
            framework: framework,
            testMethod: testMethod,
            testMethodParams: testMethodParams,
            snapshotSerializers: snapshotSerializers,
        });
        integrityTestTemplate_1.default(integrityOptions, stories2snapsConverter);
    }
    else {
        throw new Error('storyshots found 0 stories');
    }
}
exports.default = testStorySnapshots;
