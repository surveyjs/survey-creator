export let Version: string;
Version = `${process.env.VERSION}`;

import "@survey/creator/survey-creator-core.css";

export * from "../SurveyCreator";
export * from "../components/header/LogoImage";
export * from "../components/RowWrapper";
export * from "../components/Question";
export * from "../components/QuestionDropdown";
export * from "../components/QuestionImage";
export * from "../components/QuestionLinkValue";
export * from "../components/QuestionEmbeddedSurvey";
export * from "../components/QuestionRating";
export * from "../components/CellQuestion";
export * from "../components/CellQuestionDropdown";
export * from "../components/QuestionEditorContent";
export * from "../components/ItemValueWrapper";
export * from "../components/ImageItemValueWrapper";
export * from "../components/MatrixCellWrapper";
export * from "../components/Results";
export * from "../components/tabs/Designer";
export * from "../components/tabs/Embed";
export * from "../components/tabs/JsonEditorAce";
export * from "../components/tabs/JsonEditorTextarea";
export * from "../components/tabs/Logic";
export * from "../components/tabs/Preview";
export * from "../components/tabs/Translation";
export * from "../components/tabs/SurveySimulator";
export * from "../components/toolbox/Toolbox";
export * from "../components/toolbox/ToolboxItem";
export * from "../components/TabbedMenu";
export * from "../components/Notifier";
export * from "../components/Navigation";
export * from "../events";
export * from "../ObjectSelector";
export * from "../PropertyGrid";

export {
  editorLocalization,
  editorLocalization as localization,
  settings,
  SurveyLogic,
  SurveyLogicUI,
  SurveyQuestionEditorDefinition,
  ISurveyCreatorOptions,
  IPropertyGridEditor,
  PropertyGridEditorCollection
} from "@survey/creator";

//Obsolete
export { StylesManager } from "@survey/creator";
