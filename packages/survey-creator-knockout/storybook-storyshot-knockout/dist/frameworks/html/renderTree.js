"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = require("global");
function getRenderedTree(story) {
    var component = story.render();
    if (component instanceof global_1.Node) {
        return component;
    }
    var section = global_1.document.createElement('section');
    section.innerHTML = component;
    if (section.childElementCount > 1) {
        return section;
    }
    return section.firstChild;
}
exports.default = getRenderedTree;
