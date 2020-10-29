"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = require("global");
function getRenderedTree(story) {
    var component = story.render();
    var ko = story.parameters.knockout.instance;
    if (component instanceof global_1.Node) {
        ko.applyBindings({}, component);
        ko.tasks.runEarly();
        return component;
    }
    var section = global_1.document.createElement('section');
    if (typeof component === 'string') {
        section.innerHTML = component;
        ko.applyBindings({}, section);
    }
    else {
        section.innerHTML = component.template;
        ko.applyBindings(component.context || {}, section);
    }
    ko.tasks.runEarly();
    if (section.childElementCount > 1) {
        return section;
    }
    return section.firstChild;
}
exports.default = getRenderedTree;
