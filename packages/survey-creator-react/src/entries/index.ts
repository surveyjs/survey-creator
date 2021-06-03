export let Version: string;
Version = `${process.env.VERSION}`;

import "@survey/creator/survey-creator-core.css";

export * from "../SurveyCreator";
export * from "../components/RowWrapper";
export * from "../components/Question";
export * from "../components/QuestionDropdown";
export * from "../components/QuestionImage";
export * from "../components/ItemValueWrapper";
export * from "../components/ImageItemValueWrapper";
export * from "../components/tabs/Designer";
export * from "../components/tabs/Embed";
export * from "../components/tabs/JsonEditorAce";
export * from "../components/tabs/JsonEditorTextarea";
export * from "../components/tabs/Logic";
export * from "../components/tabs/Preview";
export * from "../components/tabs/Translation";
export * from "../components/toolbox/Toolbox";
export * from "../events";

export {
  editorLocalization,
  editorLocalization as localization,
  settings,
  LogicModel,
  SurveyQuestionEditorDefinition,
  ISurveyCreatorOptions,
  IPropertyGridEditor,
  PropertyGridEditorCollection
} from "@survey/creator";

//Obsolete
export { StylesManager } from "@survey/creator";
