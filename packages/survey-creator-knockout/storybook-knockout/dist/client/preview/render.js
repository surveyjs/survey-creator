"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = require("global");
var ts_dedent_1 = __importDefault(require("ts-dedent"));
var ko = __importStar(require("knockout"));
var rootElement = global_1.document.getElementById('root');
function renderMain(_a) {
    var storyFn = _a.storyFn, selectedKind = _a.selectedKind, selectedStory = _a.selectedStory, showMain = _a.showMain, showError = _a.showError, forceRender = _a.forceRender, parameters = _a.parameters;
    var knockoutInstance = (!!parameters.knockout && parameters.knockout.instance) || ko;
    var storyContent = storyFn();
    showMain();
    if (typeof storyContent === 'string') {
        knockoutInstance.cleanNode(rootElement);
        rootElement.innerHTML = storyContent;
        knockoutInstance.applyBindings({}, rootElement);
    }
    else if (storyContent instanceof global_1.Node) {
        // Don't re-mount the element if it didn't change and neither did the story
        if (rootElement.firstChild === storyContent && forceRender === true) {
            return;
        }
        knockoutInstance.cleanNode(rootElement);
        rootElement.innerHTML = '';
        rootElement.appendChild(storyContent);
        knockoutInstance.applyBindings({}, rootElement);
    }
    else if ('template' in storyContent &&
        (typeof storyContent.template === 'string' || storyContent.template instanceof global_1.Node)) {
        knockoutInstance.cleanNode(rootElement);
        if (typeof storyContent.template === 'string') {
            rootElement.innerHTML = storyContent.template;
        }
        else {
            rootElement.innerHTML = '';
            rootElement.appendChild(storyContent);
        }
        knockoutInstance.applyBindings(storyContent.context || {}, rootElement);
    }
    else {
        showError({
            title: "Expecting an HTML snippet or DOM node from the story: \"" + selectedStory + "\" of \"" + selectedKind + "\".",
            description: ts_dedent_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        Did you forget to return the HTML snippet from the story?\n        Use \"() => <your snippet or node>\" or when defining the story.\n      "], ["\n        Did you forget to return the HTML snippet from the story?\n        Use \"() => <your snippet or node>\" or when defining the story.\n      "]))),
        });
    }
}
exports.default = renderMain;
var templateObject_1;
