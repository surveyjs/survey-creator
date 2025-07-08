import type { App } from "vue";
import { SurveyComponent, ComponentFactory } from "survey-vue3-ui";
import SurveyCreatorComponent from "./Creator.vue";

import TabbedMenu from "./tabbed-menu/TabbedMenu.vue";
import TabbedMenuItemWrapper from "./tabbed-menu/TabbedMenuItemWrapper.vue";
import TabbedMenuItem from "./tabbed-menu/TabbedMenuItem.vue";
import SideBar from "./side-bar/SideBar.vue";
import SideBarDefaultHeader from "./side-bar/SideBarDefaultHeader.vue";
import SideBarPage from "./side-bar/SideBarPage.vue";
import ObjectSelector from "./side-bar/ObjectSelector.vue";
import PropertyGrid from "./side-bar/PropertyGrid.vue";
import Tabs from "./side-bar/Tabs.vue";
import TabControl from "./side-bar/TabControl.vue";
import TabButton from "./side-bar/TabButton.vue";
import Placeholder from "./side-bar/PropertyGridPlaceholder.vue";
import SideBarHeader from "./side-bar/SideBarHeader.vue";
import SideBarPropertyGridHeader from "./side-bar/SideBarPropertyGridHeader.vue";

import QuestionError from "./components/QuestionError.vue";
import ActionButton from "./components/ActionButton.vue";
import Switcher from "./components/Switcher.vue";
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
import BooleanSwitch from "./custom-questions/BooleanSwitch.vue";
import { editableStringRendererName } from "survey-creator-core";

import StringEditor from "./StringEditor.vue";
import AdaptiveToolbox from "./toolbox/AdaptiveToolbox.vue";
import ToolboxTool from "./toolbox/ToolboxTool.vue";
import ToolboxItem from "./toolbox/ToolboxItem.vue";
import ToolboxItemGroup from "./toolbox/ToolboxItemGroup.vue";
import ToolboxCategory from "./toolbox/ToolboxCategory.vue";
import ToolboxList from "./toolbox/ToolboxList.vue";

import Designer from "./tabs/designer/Designer.vue";
import Page from "./tabs/designer/Page.vue";
import AddQuestion from "./tabs/designer/AddQuestion.vue";
import AddQuestionTypeSelector from "./tabs/designer/AddQuestionTypeSelector.vue";
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
import Search from "./components/Search.vue";
import PageNavigator from "./page-navigator/PageNavigator.vue";
import PageNavigatorItem from "./page-navigator/PageNavigatorItem.vue";
import Dropdown from "./adorners/Dropdown.vue";
import QuestionDropdown from "./adorners/QuestionDropdown.vue";
import CellQuestionDropdownVue from "./adorners/CellQuestionDropdown.vue";
import CustomWidget from "./adorners/CustomWidget.vue";
import QuestionBanner from "./adorners/QuestionBanner.vue";

function registerComponentWithFunction(
  registerFunc: (name: string, component: any) => void,
  name: string,
  component: any
) {
  registerFunc(name, component);
}

function registerComponents(
  registerFunc: (name: string, component: any) => void
) {
  const registerComponent = registerComponentWithFunction.bind(
    undefined,
    registerFunc
  );
  registerComponent("svc-tabbed-menu", TabbedMenu);
  registerComponent("svc-tabbed-menu-item-wrapper", TabbedMenuItemWrapper);
  registerComponent("svc-tabbed-menu-item", TabbedMenuItem);

  registerComponent("svc-side-bar", SideBar);
  registerComponent("svc-side-bar-default-header", SideBarDefaultHeader);
  registerComponent("svc-side-bar-page", SideBarPage);
  registerComponent("svc-tabs", Tabs);
  registerComponent("svc-tab-control", TabControl);
  registerComponent("svc-tab-button", TabButton);
  registerComponent("svc-property-grid-placeholder", Placeholder);
  registerComponent("svc-side-bar-header", SideBarHeader);
  registerComponent("svc-side-bar-property-grid-header", SideBarPropertyGridHeader);

  registerComponent("svc-property-grid", PropertyGrid);
  registerComponent("svc-object-selector", ObjectSelector);
  registerComponent("svc-search", Search);
  registerComponent("svc-switcher", Switcher);

  registerComponent("svc-action-button", ActionButton);
  registerComponent("svc-question-error", QuestionError);

  registerComponent("survey-embeddedsurvey", EmbeddedSurvey);
  registerComponent("sv-logic-operator", LogicOperator);
  registerComponent("survey-linkvalue", LinkValue);

  registerComponent("survey-color", Color);
  registerComponent("color-item", ColorItem);
  registerComponent("sv-boolean-switch", BooleanSwitch);
  registerComponent("survey-fileedit", File);
  registerComponent("survey-spinedit", SpinEditor);
  registerComponent("survey-textwithreset", TextWithReset);
  registerComponent("survey-commentwithreset", TextWithReset);
  registerComponent("survey-widget", SurveyComponent);
  registerComponent("survey-simulator", Simulator);
  registerComponent("svc-tab-preview", Test);
  registerComponent("svc-complete-page", TestAgain);
  registerComponent("survey-results", SurveyResults);
  registerComponent("survey-results-table-row", SurveyResultsRow);

  registerComponent("json-error-item", JsonEditorErrorItem);
  registerComponent("svc-tab-json-editor-textarea", JsonEditorTextArea);
  registerComponent("svc-tab-json-editor-ace", JsonEditorAce);

  registerComponent("svc-tab-translation", Translation);
  registerComponent("sd-translation-line-skeleton", TranslationLineSkeleton);
  registerComponent("svc-translate-from-action", TranslateFromAction);

  registerComponent("svc-tab-logic", Logic);

  registerComponent("svc-tab-theme", Theme);

  registerComponent("svc-toolbox", AdaptiveToolbox);
  registerComponent("svc-toolbox-list", ToolboxList);
  registerComponent("svc-toolbox-category", ToolboxCategory);
  registerComponent("svc-toolbox-tool", ToolboxTool);
  registerComponent("svc-toolbox-item", ToolboxItem);
  registerComponent("svc-toolbox-item-group", ToolboxItemGroup);

  registerComponent(editableStringRendererName, StringEditor);

  registerComponent("svc-tab-designer", Designer);
  registerComponent("svc-page-navigator", PageNavigator);
  registerComponent("svc-page-navigator-item", PageNavigatorItem);
  registerComponent("svc-page", Page);
  registerComponent("svc-row", Row);
  registerComponent("svc-add-new-question-btn", AddQuestion);
  registerComponent("svc-add-question-type-selector", AddQuestionTypeSelector);
  registerComponent("svc-question", QuestionAdorner);
  registerComponent("svc-rating-question", QuestionAdorner);
  registerComponent("svc-rating-question-content", RatingAdorner);
  registerComponent("svc-image-question", QuestionImageAdorner);
  registerComponent("svc-image-question-adorner", ImageAdorner);
  registerComponent("svc-matrix-cell", MatrixCell);
  registerComponent("svc-cell-question", CellQuestion);
  registerComponent("svc-cell-dropdown-question", CellQuestionDropdownVue);
  registerComponent("svc-question-editor-content", QuestionEditor);
  registerComponent("svc-logo-image", Logo);
  registerComponent("svc-panel", Panel);
  registerComponent("svc-item-value", ItemValue);
  registerComponent("svc-image-item-value", ImageItemValue);
  registerComponent("svc-dropdown-question", QuestionDropdown);
  registerComponent("svc-dropdown-question-adorner", Dropdown);
  registerComponent("svc-widget-question", CustomWidget);
  registerComponent("svc-question-banner", QuestionBanner);
}

registerComponents((name, component) =>
  ComponentFactory.Instance.registerComponent(name, component)
);

export { SurveyCreatorComponent };

export const surveyCreatorPlugin = {
  install(app: App) {
    app.component("SurveyCreatorComponent", SurveyCreatorComponent);
    registerComponents((name, component) => {
      app.component(name, component);
      ComponentFactory.Instance.registerComponent(name, name);
    });
  },
};
