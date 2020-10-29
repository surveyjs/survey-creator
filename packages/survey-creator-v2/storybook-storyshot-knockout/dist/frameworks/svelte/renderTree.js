"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = require("global");
/**
 * Provides functionality to convert your raw story to the resulting markup.
 *
 * Storybook snapshots need the rendered markup that svelte outputs,
 * but since we only have the story config data ({ Component, data }) in
 * the Svelte stories, we need to mount the component, and then return the
 * resulting HTML.
 *
 * If we don't render to HTML, we will get a snapshot of the raw story
 * i.e. ({ Component, data }).
 */
function getRenderedTree(story) {
    var _a = story.render(), Component = _a.Component, props = _a.props;
    var DefaultCompatComponent = Component.default || Component;
    // We need to create a target to mount onto.
    var target = global_1.document.createElement('section');
    new DefaultCompatComponent({ target: target, props: props }); // eslint-disable-line
    // Classify the target so that it is clear where the markup
    // originates from, and that it is specific for snapshot tests.
    target.className = 'storybook-snapshot-container';
    return target;
}
exports.default = getRenderedTree;
