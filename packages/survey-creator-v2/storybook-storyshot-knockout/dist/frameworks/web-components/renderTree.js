"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRenderedTree(story) {
    var component = story.render();
    return component.getHTML ? component.getHTML() : component;
}
exports.default = getRenderedTree;
