export let Version: string;
Version = `${process.env.VERSION}`;

//should be loaded before other styles for easier override 
require("../utils/context-button.scss");

export { enStrings } from "../localization/english";
export { editorLocalization, defaultStrings } from "../editorLocalization";
export { editorLocalization as localization } from "../editorLocalization";
export * from "../creator-settings";
export { ICreatorOptions } from "../creator-options";

export * from "../creator-events-api";
export * from "../creator-base";
export * from "../creator-responsivity-manager";

export * from "../components/tabs/json-editor-ace";
export * from "../components/tabs/json-editor-plugin";
export * from "../components/tabs/json-editor-textarea";
export * from "../components/tabs/test";
export * from "../components/tabs/test-plugin";
export * from "../components/tabs/theme-custom-questions/color-alpha";
export * from "../components/tabs/theme-custom-questions/shadow-effects";
export * from "../components/tabs/theme-custom-questions/font-settings";
export * from "../components/tabs/theme-custom-questions/background-corner-radius";
export * from "../components/tabs/themes";
export * from "../components/tabs/theme-builder";
export * from "../components/tabs/theme-plugin";
export * from "../components/tabs/theme-model-definition";
export * from "../components/tabs/logic";
export * from "../components/tabs/translation";
export * from "../components/tabs/translation-theme";
export * from "../components/tabs/translation-plugin";
export * from "../components/tabs/designer";
export * from "../components/tabs/designer-plugin";
export * from "../components/tabs/logic-ui";
export * from "../components/tabs/logic-plugin";
export * from "../components/tabs/logic-theme";

export * from "../components/toolbox/toolbox-tool";
export * from "../components/page-navigator/page-navigator";
export * from "../components/page";
export * from "../components/row";
export * from "../components/question";
export * from "../components/question-dropdown";
export * from "../components/question-image";
export * from "../components/question-rating";
export * from "../components/item-value";
export * from "../components/image-item-value";
export * from "../components/matrix-cell";
export * from "../components/simulator";
export * from "../components/results";
export * from "../components/header/logo-image";
export * from "../components/string-editor";
export * from "../components/embedded-survey";
export * from "../components/link-value";
export * from "../editorLocalization";
export * from "../json5";

//custom questions for property grid
export * from "../custom-questions/question-spin-editor";
export * from "../custom-questions/question-color";
export * from "../custom-questions/question-file";
export * from "../custom-questions/question-text-with-reset";

export * from "../property-grid";
export * from "../property-grid/condition";
export * from "../property-grid/matrices";
export * from "../property-grid/bindings";
export * from "../property-grid/property-grid-view-model";
export * from "../property-grid/object-selector";
export * from "../property-grid/restfull";
export * from "../property-grid/theme-settings";
export * from "../property-grid/values";
export * from "../property-grid/search-manager";
export * from "../property-grid/maskSettings";
export * from "../property-grid/header-settings";
export { propertyGridCss } from "../property-grid-theme/property-grid";
export * from "../questionconverter";
export * from "../svgbundle";
export * from "../textWorker";
export * from "../toolbox";
export * from "../components/side-bar/side-bar-model";
export * from "../components/side-bar/side-bar-tab-model";
export * from "../components/switcher/switcher";
export * from "../utils/events";
export * from "../utils/utils";
export * from "../question-editor/definition";
export * from "../question-editor/properties";
export * from "../survey-helper";
export * from "../utils/resizer";
export * from "../plugins/undo-redo";
export * from "../plugins/undo-redo/undo-redo-manager";
export * from "../pages-controller";
export * from "../presets/presets-base";
export * from "../presets/presets";
export * from "../presets/presets-properties";
export * from "../presets/presets-tabs";
export * from "../presets/presets-toolbox";

require("../components/property-panel/property-panel-item.scss");
require("../components/property-panel/property-panel.scss");
require("../components/tabbed-menu/tabbed-menu-item.scss");
require("../components/tabbed-menu/tabbed-menu.scss");
require("../components/toolbox/toolbox-tool.scss");
require("../components/question-dropdown.scss");
require("../components/toolbox/toolbox.scss");
require("../components/side-bar/side-bar.scss");
require("../property-grid-theme/property-grid.scss");
require("../utils/design.scss");
require("../utils/layout.scss");

import { settings, checkLibraryVersion } from "survey-core";
settings.supportCreatorV2 = true;

checkLibraryVersion(`${process.env.VERSION}`, "survey-creator-core");