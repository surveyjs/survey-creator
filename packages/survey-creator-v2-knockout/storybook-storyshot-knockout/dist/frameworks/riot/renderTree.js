"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = require("global");
var riotForStorybook = jest.requireActual('@storybook/riot');
function bootstrapADocumentAndReturnANode() {
    var rootElement = global_1.document.createElement('div');
    rootElement.id = 'root';
    global_1.document.body = global_1.document.createElement('body');
    global_1.document.body.appendChild(rootElement);
    return rootElement;
}
function makeSureThatResultIsRenderedSomehow(_a) {
    var context = _a.context, result = _a.result, rootElement = _a.rootElement;
    if (!rootElement.firstChild) {
        var kind = context.kind, name_1 = context.name;
        riotForStorybook.render({
            storyFn: function () { return result; },
            kind: kind,
            name: name_1,
        });
    }
}
function getRenderedTree(story, context) {
    var rootElement = bootstrapADocumentAndReturnANode();
    var result = story.render();
    makeSureThatResultIsRenderedSomehow({ context: context, result: result, rootElement: rootElement });
    return rootElement;
}
exports.default = getRenderedTree;
