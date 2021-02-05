"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raw = exports.forceReRender = exports.getStorybook = exports.configure = exports.addParameters = exports.addDecorator = exports.setAddon = exports.storiesOf = void 0;
var preview_1 = require("./preview");
Object.defineProperty(exports, "storiesOf", { enumerable: true, get: function () { return preview_1.storiesOf; } });
Object.defineProperty(exports, "setAddon", { enumerable: true, get: function () { return preview_1.setAddon; } });
Object.defineProperty(exports, "addDecorator", { enumerable: true, get: function () { return preview_1.addDecorator; } });
Object.defineProperty(exports, "addParameters", { enumerable: true, get: function () { return preview_1.addParameters; } });
Object.defineProperty(exports, "configure", { enumerable: true, get: function () { return preview_1.configure; } });
Object.defineProperty(exports, "getStorybook", { enumerable: true, get: function () { return preview_1.getStorybook; } });
Object.defineProperty(exports, "forceReRender", { enumerable: true, get: function () { return preview_1.forceReRender; } });
Object.defineProperty(exports, "raw", { enumerable: true, get: function () { return preview_1.raw; } });
if (module && module.hot && module.hot.decline) {
    module.hot.decline();
}
