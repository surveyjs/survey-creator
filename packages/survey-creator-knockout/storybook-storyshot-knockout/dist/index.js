"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.snapshot = exports.shallowSnapshot = exports.renderWithOptions = exports.renderOnly = exports.multiSnapshotWithOptions = exports.snapshotWithOptions = void 0;
var api_1 = __importDefault(require("./api"));
var test_bodies_1 = require("./test-bodies");
Object.defineProperty(exports, "snapshotWithOptions", { enumerable: true, get: function () { return test_bodies_1.snapshotWithOptions; } });
Object.defineProperty(exports, "multiSnapshotWithOptions", { enumerable: true, get: function () { return test_bodies_1.multiSnapshotWithOptions; } });
Object.defineProperty(exports, "renderOnly", { enumerable: true, get: function () { return test_bodies_1.renderOnly; } });
Object.defineProperty(exports, "renderWithOptions", { enumerable: true, get: function () { return test_bodies_1.renderWithOptions; } });
Object.defineProperty(exports, "shallowSnapshot", { enumerable: true, get: function () { return test_bodies_1.shallowSnapshot; } });
Object.defineProperty(exports, "snapshot", { enumerable: true, get: function () { return test_bodies_1.snapshot; } });
__exportStar(require("./Stories2SnapsConverter"), exports);
__exportStar(require("./frameworks"), exports);
exports.default = api_1.default;
