"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line: no-var-requires
var packageJson = require('../../package.json');
exports.default = {
    packageJson: packageJson,
    framework: 'knockout',
    frameworkPresets: [require.resolve('./framework-preset-knockout.js')],
};
