"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var read_pkg_up_1 = __importDefault(require("read-pkg-up"));
var _a = (read_pkg_up_1.default.sync() || {}).packageJson, _b = _a === void 0 ? {
    dependencies: undefined,
    devDependencies: undefined,
} : _a, dependencies = _b.dependencies, devDependencies = _b.devDependencies;
function hasDependency(name) {
    return Boolean((devDependencies && devDependencies[name]) ||
        (dependencies && dependencies[name]) ||
        fs_1.default.existsSync(path_1.default.join('node_modules', name, 'package.json')));
}
exports.default = hasDependency;
