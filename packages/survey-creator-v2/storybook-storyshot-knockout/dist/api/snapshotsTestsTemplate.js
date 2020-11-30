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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable jest/no-export */
/* eslint-disable jest/expect-expect */
var global_1 = require("global");
var jest_specific_snapshot_1 = require("jest-specific-snapshot");
function snapshotTest(_a) {
    var item = _a.item, asyncJest = _a.asyncJest, framework = _a.framework, testMethod = _a.testMethod, testMethodParams = _a.testMethodParams;
    var name = item.name;
    var context = __assign(__assign({}, item), { framework: framework });
    if (asyncJest === true) {
        global_1.it(name, function () {
            return new Promise(function (done) {
                return testMethod(__assign({ done: done, story: item, context: context }, testMethodParams));
            });
        }, testMethod.timeout);
    }
    else {
        global_1.it(name, function () {
            return testMethod(__assign({ story: item, context: context }, testMethodParams));
        }, testMethod.timeout);
    }
}
function snapshotTestSuite(_a) {
    var item = _a.item, suite = _a.suite, restParams = __rest(_a, ["item", "suite"]);
    var kind = item.kind, children = item.children;
    global_1.describe(suite, function () {
        global_1.describe(kind, function () {
            children.forEach(function (c) {
                snapshotTest(__assign({ item: c }, restParams));
            });
        });
    });
}
function snapshotsTests(_a) {
    var data = _a.data, snapshotSerializers = _a.snapshotSerializers, restParams = __rest(_a, ["data", "snapshotSerializers"]);
    if (snapshotSerializers) {
        snapshotSerializers.forEach(function (serializer) {
            jest_specific_snapshot_1.addSerializer(serializer);
            expect.addSnapshotSerializer(serializer);
        });
    }
    data.forEach(function (item) {
        snapshotTestSuite(__assign({ item: item }, restParams));
    });
}
exports.default = snapshotsTests;
