import type { App } from "vue";
import { surveyPlugin } from "survey-vue3-ui";
import SurveyCreatorComponent from "./Creator.vue";

import TabbedMenu from "./tabbed-menu/TabbedMenu.vue";
import TabbedMenuItemWrapper from "./tabbed-menu/TabbedMenuItemWrapper.vue";
import TabbedMenuItem from "./tabbed-menu/TabbedMenuItem.vue";
import SideBar from "./side-bar/SideBar.vue";
import SideBarTab from "./side-bar/SideBarTab.vue";
import ObjectSelector from "./property-panel/ObjectSelector.vue";
import PropertyGrid from "./property-panel/PropertyGrid.vue";

import ActionButton from "./components/ActionButton.vue";
import SvgBundle from "./SvgBundle.vue";
import Simulator from "./tabs/preview/Simulator.vue";
import Test from "./tabs/preview/Test.vue";

import TestAgain from "./tabs/preview/TestAgain.vue";
import SurveyResults from "./tabs/preview/SurveyResults.vue";
import SurveyResultsRow from "./tabs/preview/SurveyResultsRow.vue";

import JsonEditorAce from "./tabs/json/JsonEditorAce.vue";
import JsonEditorTextArea from "./tabs/json/JsonEditorTextArea.vue";
import JsonEditorErrorItem from "./tabs/json/JsonEditorErrorItem.vue";

import Logic from "./tabs/logic/Logic.vue";

import LogicOperator from "./questions/LogicOperator.vue";
import EmbeddedSurvey from "./questions/EmbeddedSurvey.vue";
import LinkValue from "./questions/LinkValue.vue";

import Translation from "./tabs/translation/Translation.vue";
import TranslationLineSkeleton from "./tabs/translation/TranslationLineSkeleton.vue";

import Theme from "./tabs/theme/Theme.vue";
import Color from "./custom-questions/Color.vue";
import ColorItem from "./custom-questions/ColorItem.vue";
import File from "./custom-questions/File.vue";
import SpinEditor from "./custom-questions/SpinEditor.vue";
import TextWithReset from "./custom-questions/TextWithReset.vue";
import { editableStringRendererName } from "survey-creator-core";

import StringEditor from "./StringEditor.vue";
import AdaptiveToolbox from "./toolbox/AdaptiveToolbox.vue";
import ToolboxTool from "./toolbox/ToolboxTool.vue";
import ToolboxItem from "./toolbox/ToolboxItem.vue";
import ToolboxCategory from "./toolbox/ToolboxCategory.vue";
import Toolbox from "./toolbox/Toolbox.vue";

function registerComponents(app: App) {
  app.use(surveyPlugin);
  app.component("SurveyCreatorComponent", SurveyCreatorComponent);
  app.component("svc-svg-bundle", SvgBundle);

  app.component("svc-tabbed-menu", TabbedMenu);
  app.component("svc-tabbed-menu-item-wrapper", TabbedMenuItemWrapper);
  app.component("svc-tabbed-menu-item", TabbedMenuItem);

  app.component("svc-side-bar", SideBar);
  app.component("svc-side-bar-tab", SideBarTab);

  app.component("svc-property-grid", PropertyGrid);
  app.component("svc-object-selector", ObjectSelector);

  app.component("svc-action-button", ActionButton);

  app.component("survey-embeddedsurvey", EmbeddedSurvey);
  app.component("sv-logic-operator", LogicOperator);
  app.component("survey-linkvalue", LinkValue);

  app.component("survey-color", Color);
  app.component("color-item", ColorItem);
  app.component("survey-fileedit", File);
  app.component("survey-spinedit", SpinEditor);
  app.component("survey-textwithreset", TextWithReset);
  app.component("survey-commentwithreset", TextWithReset);
  app.component("survey-widget", app._context.components["SurveyComponent"]);
  app.component("survey-simulator", Simulator);
  app.component("svc-tab-test", Test);
  app.component("survey-test-again", TestAgain);
  app.component("survey-results", SurveyResults);
  app.component("survey-results-table-row", SurveyResultsRow);

  app.component("json-error-item", JsonEditorErrorItem);
  app.component("svc-tab-json-editor-textarea", JsonEditorTextArea);
  app.component("svc-tab-json-editor-ace", JsonEditorAce);

  app.component("svc-tab-translation", Translation);
  app.component("sd-translation-line-skeleton", TranslationLineSkeleton);

  app.component("svc-tab-logic", Logic);

  app.component("svc-tab-theme", Theme);

  app.component("svc-adaptive-toolbox", AdaptiveToolbox);
  app.component("svc-toolbox", Toolbox);
  app.component("svc-toolbox-category", ToolboxCategory);
  app.component("svc-toolbox-tool", ToolboxTool);
  app.component("svc-toolbox-item", ToolboxItem);

  app.component(editableStringRendererName, StringEditor);
}

export const surveyCreatorPlugin = {
  install(app: any) {
    registerComponents(app);
  },
};
