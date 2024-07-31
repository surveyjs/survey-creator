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
import Switcher from "./components/Switcher.vue";
import QuestionError from "./components/QuestionError.vue";
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
import TranslateFromAction from "./tabs/translation/TranslateFromAction.vue";

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
import ToolboxItemGroup from "./toolbox/ToolboxItemGroup.vue";
import ToolboxCategory from "./toolbox/ToolboxCategory.vue";
import Toolbox from "./toolbox/Toolbox.vue";
import ToolboxList from "./toolbox/ToolboxList.vue";

import Designer from "./tabs/designer/Designer.vue";
import Page from "./tabs/designer/Page.vue";
import PageAddQuestion from "./tabs/designer/PageAddQuestion.vue";
import Row from "./tabs/designer/Row.vue";
import QuestionAdorner from "./adorners/Question.vue";
import QuestionImageAdorner from "./adorners/QuestionImage.vue";
import ImageAdorner from "./adorners/Image.vue";
import RatingAdorner from "./adorners/Rating.vue";
import MatrixCell from "./adorners/MatrixCell.vue";
import CellQuestion from "./adorners/CellQuestion.vue";
import Panel from "./adorners/Panel.vue";
import ItemValue from "./adorners/ItemValue.vue";
import ImageItemValue from "./adorners/ImageItemValue.vue";
import QuestionEditor from "./QuestionEditor.vue";
import Logo from "./header/Logo.vue";
import Search from "./property-panel/Search.vue";
import PageNavigator from "./page-navigator/PageNavigator.vue";
import PageNavigatorItem from "./page-navigator/PageNavigatorItem.vue";
import Dropdown from "./adorners/Dropdown.vue";
import QuestionDropdown from "./adorners/QuestionDropdown.vue";
import CellQuestionDropdownVue from "./adorners/CellQuestionDropdown.vue";
import CustomWidget from "./adorners/CustomWidget.vue";
import QuestionBanner from "./adorners/QuestionBanner.vue";

function registerComponents(app: App) {
  app.component("SurveyCreatorComponent", SurveyCreatorComponent);
  app.component("svc-tabbed-menu", TabbedMenu);
  app.component("svc-tabbed-menu-item-wrapper", TabbedMenuItemWrapper);
  app.component("svc-tabbed-menu-item", TabbedMenuItem);

  app.component("svc-side-bar", SideBar);
  app.component("svc-side-bar-tab", SideBarTab);

  app.component("svc-property-grid", PropertyGrid);
  app.component("svc-object-selector", ObjectSelector);
  app.component("svc-search", Search);
  app.component("svc-switcher", Switcher);

  app.component("svc-action-button", ActionButton);
  app.component("svc-question-error", QuestionError);

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
  app.component("svc-complete-page", TestAgain);
  app.component("survey-results", SurveyResults);
  app.component("survey-results-table-row", SurveyResultsRow);

  app.component("json-error-item", JsonEditorErrorItem);
  app.component("svc-tab-json-editor-textarea", JsonEditorTextArea);
  app.component("svc-tab-json-editor-ace", JsonEditorAce);

  app.component("svc-tab-translation", Translation);
  app.component("sd-translation-line-skeleton", TranslationLineSkeleton);
  app.component("svc-translate-from-action", TranslateFromAction);

  app.component("svc-tab-logic", Logic);

  app.component("svc-tab-theme", Theme);

  app.component("svc-adaptive-toolbox", AdaptiveToolbox);
  app.component("svc-toolbox", Toolbox);
  app.component("svc-toolbox-list", ToolboxList);
  app.component("svc-toolbox-category", ToolboxCategory);
  app.component("svc-toolbox-tool", ToolboxTool);
  app.component("svc-toolbox-item", ToolboxItem);
  app.component("svc-toolbox-item-group", ToolboxItemGroup);

  app.component(editableStringRendererName, StringEditor);

  app.component("svc-tab-designer", Designer);
  app.component("svc-page-navigator", PageNavigator);
  app.component("svc-page-navigator-item", PageNavigatorItem);
  app.component("svc-page", Page);
  app.component("svc-row", Row);
  app.component("svc-add-new-question-btn", PageAddQuestion);
  app.component("svc-question", QuestionAdorner);
  app.component("svc-rating-question", QuestionAdorner);
  app.component("svc-rating-question-content", RatingAdorner);
  app.component("svc-image-question", QuestionImageAdorner);
  app.component("svc-image-question-adorner", ImageAdorner);
  app.component("svc-matrix-cell", MatrixCell);
  app.component("svc-cell-question", CellQuestion);
  app.component("svc-cell-dropdown-question", CellQuestionDropdownVue);
  app.component("svc-question-editor-content", QuestionEditor);
  app.component("svc-logo-image", Logo);
  app.component("svc-panel", Panel);
  app.component("svc-item-value", ItemValue);
  app.component("svc-image-item-value", ImageItemValue);
  app.component("svc-dropdown-question", QuestionDropdown);
  app.component("svc-dropdown-question-adorner", Dropdown);
  app.component("svc-widget-question", CustomWidget);
  app.component("svc-question-banner", QuestionBanner);
}

export const surveyCreatorPlugin = {
  install(app: any) {
    registerComponents(app);
  },
};
