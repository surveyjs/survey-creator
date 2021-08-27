export let Version: string;
Version = `${process.env.VERSION}`;

export * from "../components/button";
export * from "../components/creator";
export * from "../components/tabs/designer";
export * from "../components/tabs/embed";
export * from "../components/tabs/json-editor-ace";
export * from "../components/tabs/json-editor-textarea";
export * from "../components/tabs/logic";
export * from "../components/tabs/translation";

export * from "../components/page";
export * from "../components/row";
export * from "../components/question";
export * from "../components/question-dropdown";
export * from "../components/question-link-value";
export * from "../components/question-embedded-survey";
export * from "../components/question-image";
export * from "../components/question-rating";
export * from "../components/item-value";
export * from "../components/image-item-value";
export * from "../components/panel";
export * from "../components/matrix-cell";
export * from "../components/question-editor-content";
export * from "../components/cell-question";
export * from "../components/cell-question-dropdown";

export * from "../components/page-navigator/page-navigator";
export * from "../components/page-navigator/page-navigator-item";
export * from "../components/property-panel/object-selector";
export * from "../components/property-panel/property-panel";
export * from "../components/results";
export * from "../components/simulator";
export * from "../components/survey-renderers/dropdown";
export * from "../components/tabs/test";
export * from "../components/tabbed-menu/tabbed-menu";
export * from "../components/tabbed-menu/tabbed-menu-item";
export * from "../components/toolbox/toolbox";
export * from "../components/toolbox/toolbox-item";
export * from "../components/toolbox/toolbox-tool";
export * from "../components/header/logo-image";
export * from "../components/notifier";
export * from "../utils/survey-widget";
export * from "../utils/utils";

export * from "../creator";
export * as core from "@survey/creator";
export {
  editorLocalization,
  editorLocalization as localization,
  settings,
  SurveyLogicUI,
  SurveyLogic,
  SurveyQuestionEditorDefinition,
  ISurveyCreatorOptions,
  IPropertyGridEditor,
  PropertyGridEditorCollection
} from "@survey/creator";
//Obsolete
export { StylesManager } from "@survey/creator";

import "@survey/creator/survey-creator-core.css";

// export * from "@survey/creator/tabs/embed";

// export * from "@survey/creator/property-grid";
// export * from "@survey/creator/property-grid/condition";
// export * from "@survey/creator/property-grid/matrices";
// //export * from "../property-grid/modal-action";
// export * from "@survey/creator/property-grid/restfull";
// export * from "@survey/creator/property-grid/values";
