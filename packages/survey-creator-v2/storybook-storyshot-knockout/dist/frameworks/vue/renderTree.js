"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line import/no-extraneous-dependencies
var vue_1 = __importDefault(require("vue"));
// this is defined in @storybook/vue but not exported,
// and we need it to inject args into the story component's props
var VALUES = 'STORYBOOK_VALUES';
function getRenderedTree(story) {
    var component = story.render();
    var vm = new vue_1.default({
        render: function (h) {
            return h(component);
        },
    });
    // @ts-ignore
    vm[VALUES] = story.args;
    return vm.$mount().$el;
}
exports.default = getRenderedTree;
