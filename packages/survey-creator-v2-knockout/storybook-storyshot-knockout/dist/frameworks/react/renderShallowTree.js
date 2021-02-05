"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-extraneous-dependencies
var shallow_1 = __importDefault(require("react-test-renderer/shallow"));
function getRenderedTree(story, context, _a) {
    var renderer = _a.renderer, serializer = _a.serializer;
    var storyElement = story.render();
    var shallowRenderer = renderer || shallow_1.default.createRenderer();
    var tree = shallowRenderer.render(storyElement);
    return serializer ? serializer(tree) : tree;
}
exports.default = getRenderedTree;
