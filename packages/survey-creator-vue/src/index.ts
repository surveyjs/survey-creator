import type { App } from "vue";
import { SurveyComponent, ComponentFactory } from "survey-vue3-ui";
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

function registerComponents() {
  ComponentFactory.Instance.registerComponent("svc-tabbed-menu", TabbedMenu);
  ComponentFactory.Instance.registerComponent(
    "svc-tabbed-menu-item-wrapper",
    TabbedMenuItemWrapper
  );
  ComponentFactory.Instance.registerComponent(
    "svc-tabbed-menu-item",
    TabbedMenuItem
  );

  ComponentFactory.Instance.registerComponent("svc-side-bar", SideBar);
  ComponentFactory.Instance.registerComponent("svc-side-bar-tab", SideBarTab);

  ComponentFactory.Instance.registerComponent(
    "svc-property-grid",
    PropertyGrid
  );
  ComponentFactory.Instance.registerComponent(
    "svc-object-selector",
    ObjectSelector
  );
  ComponentFactory.Instance.registerComponent("svc-search", Search);
  ComponentFactory.Instance.registerComponent("svc-switcher", Switcher);

  ComponentFactory.Instance.registerComponent(
    "svc-action-button",
    ActionButton
  );

  ComponentFactory.Instance.registerComponent(
    "survey-embeddedsurvey",
    EmbeddedSurvey
  );
  ComponentFactory.Instance.registerComponent(
    "sv-logic-operator",
    LogicOperator
  );
  ComponentFactory.Instance.registerComponent("survey-linkvalue", LinkValue);

  ComponentFactory.Instance.registerComponent("survey-color", Color);
  ComponentFactory.Instance.registerComponent("color-item", ColorItem);
  ComponentFactory.Instance.registerComponent("survey-fileedit", File);
  ComponentFactory.Instance.registerComponent("survey-spinedit", SpinEditor);
  ComponentFactory.Instance.registerComponent(
    "survey-textwithreset",
    TextWithReset
  );
  ComponentFactory.Instance.registerComponent(
    "survey-commentwithreset",
    TextWithReset
  );
  ComponentFactory.Instance.registerComponent("survey-widget", SurveyComponent);
  ComponentFactory.Instance.registerComponent("survey-simulator", Simulator);
  ComponentFactory.Instance.registerComponent("svc-tab-test", Test);
  ComponentFactory.Instance.registerComponent("svc-complete-page", TestAgain);
  ComponentFactory.Instance.registerComponent("survey-results", SurveyResults);
  ComponentFactory.Instance.registerComponent(
    "survey-results-table-row",
    SurveyResultsRow
  );

  ComponentFactory.Instance.registerComponent(
    "json-error-item",
    JsonEditorErrorItem
  );
  ComponentFactory.Instance.registerComponent(
    "svc-tab-json-editor-textarea",
    JsonEditorTextArea
  );
  ComponentFactory.Instance.registerComponent(
    "svc-tab-json-editor-ace",
    JsonEditorAce
  );

  ComponentFactory.Instance.registerComponent(
    "svc-tab-translation",
    Translation
  );
  ComponentFactory.Instance.registerComponent(
    "sd-translation-line-skeleton",
    TranslationLineSkeleton
  );
  ComponentFactory.Instance.registerComponent(
    "svc-translate-from-action",
    TranslateFromAction
  );

  ComponentFactory.Instance.registerComponent("svc-tab-logic", Logic);

  ComponentFactory.Instance.registerComponent("svc-tab-theme", Theme);

  ComponentFactory.Instance.registerComponent(
    "svc-adaptive-toolbox",
    AdaptiveToolbox
  );
  ComponentFactory.Instance.registerComponent("svc-toolbox", Toolbox);
  ComponentFactory.Instance.registerComponent("svc-toolbox-list", ToolboxList);
  ComponentFactory.Instance.registerComponent(
    "svc-toolbox-category",
    ToolboxCategory
  );
  ComponentFactory.Instance.registerComponent("svc-toolbox-tool", ToolboxTool);
  ComponentFactory.Instance.registerComponent("svc-toolbox-item", ToolboxItem);
  ComponentFactory.Instance.registerComponent(
    "svc-toolbox-item-group",
    ToolboxItemGroup
  );

  ComponentFactory.Instance.registerComponent(
    editableStringRendererName,
    StringEditor
  );

  ComponentFactory.Instance.registerComponent("svc-tab-designer", Designer);
  ComponentFactory.Instance.registerComponent(
    "svc-page-navigator",
    PageNavigator
  );
  ComponentFactory.Instance.registerComponent(
    "svc-page-navigator-item",
    PageNavigatorItem
  );
  ComponentFactory.Instance.registerComponent("svc-page", Page);
  ComponentFactory.Instance.registerComponent("svc-row", Row);
  ComponentFactory.Instance.registerComponent(
    "svc-add-new-question-btn",
    PageAddQuestion
  );
  ComponentFactory.Instance.registerComponent("svc-question", QuestionAdorner);
  ComponentFactory.Instance.registerComponent(
    "svc-rating-question",
    QuestionAdorner
  );
  ComponentFactory.Instance.registerComponent(
    "svc-rating-question-content",
    RatingAdorner
  );
  ComponentFactory.Instance.registerComponent(
    "svc-image-question",
    QuestionImageAdorner
  );
  ComponentFactory.Instance.registerComponent(
    "svc-image-question-adorner",
    ImageAdorner
  );
  ComponentFactory.Instance.registerComponent("svc-matrix-cell", MatrixCell);
  ComponentFactory.Instance.registerComponent(
    "svc-cell-question",
    CellQuestion
  );
  ComponentFactory.Instance.registerComponent(
    "svc-cell-dropdown-question",
    CellQuestionDropdownVue
  );
  ComponentFactory.Instance.registerComponent(
    "svc-question-editor-content",
    QuestionEditor
  );
  ComponentFactory.Instance.registerComponent("svc-logo-image", Logo);
  ComponentFactory.Instance.registerComponent("svc-panel", Panel);
  ComponentFactory.Instance.registerComponent("svc-item-value", ItemValue);
  ComponentFactory.Instance.registerComponent(
    "svc-image-item-value",
    ImageItemValue
  );
  ComponentFactory.Instance.registerComponent(
    "svc-dropdown-question",
    QuestionDropdown
  );
  ComponentFactory.Instance.registerComponent(
    "svc-dropdown-question-adorner",
    Dropdown
  );
  ComponentFactory.Instance.registerComponent(
    "svc-widget-question",
    CustomWidget
  );
  ComponentFactory.Instance.registerComponent(
    "svc-question-banner",
    QuestionBanner
  );
}
registerComponents();

export { SurveyCreatorComponent };

export const surveyCreatorPlugin = {
  install(app: App) {
    app.component("SurveyCreatorComponent", SurveyCreatorComponent);
  },
};
