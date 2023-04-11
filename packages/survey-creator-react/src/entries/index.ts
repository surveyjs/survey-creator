export let Version: string;
Version = `${process.env.VERSION}`;

// import "@survey/creator/survey-creator-core.css";

export * from "../SurveyCreator";

export * from "../adorners/Row";
export * from "../adorners/Question";
export * from "../adorners/QuestionHeader";
export * from "../adorners/QuestionFooter";
export * from "../adorners/QuestionDropdown";
export * from "../adorners/QuestionImage";
export * from "../adorners/QuestionRating";
export * from "../adorners/QuestionWidget";
export * from "../adorners/CellQuestion";
export * from "../adorners/CellQuestionDropdown";
export * from "../adorners/Page";
export * from "../adorners/Panel";

export * from "../LogoImage";
export * from "../QuestionLinkValue";
export * from "../QuestionEmbeddedSurvey";
export * from "../QuestionEditorContent";
export * from "../ItemValueWrapper";
export * from "../ImageItemValueWrapper";
export * from "../MatrixCellWrapper";
export * from "../Results";
export * from "../toolbox/ToolboxItem";
export * from "../toolbox/ToolboxCategory";
export * from "../toolbox/Toolbox";
export * from "../toolbox/AdaptiveToolbox";
export * from "../TabbedMenu";
export * from "../Navigation";
export * from "../SideBar";
export * from "../tabs/TranslationLineSkeleton";
export * from "../ActionButton";
export * from "../StringEditor";

export * from "../tabs/logic-operator";
export * from "../tabs/Designer";
export * from "../tabs/Embed";
export * from "../tabs/JsonEditorAce";
export * from "../tabs/JsonEditorTextarea";
export * from "../tabs/Logic";
export * from "../tabs/Preview";
export * from "../tabs/Translation";
export * from "../tabs/SurveySimulator";

export * from "../events";
export * from "../ObjectSelector";
export * from "../PropertyGrid";

//custom questions
export * from "../custom-questions/SpinEditor";
export * from "../custom-questions/ColorQuestion";

export { editorLocalization, localization } from "survey-creator-core";
export { settings } from "survey-creator-core";
export { svgBundle } from "survey-creator-core";
export { SurveyLogic, SurveyLogicUI } from "survey-creator-core";
export { SurveyQuestionEditorDefinition } from "survey-creator-core";
export { ISurveyCreatorOptions, IPropertyGridEditor } from "survey-creator-core";
export { ToolboxToolViewModel, PropertyGridEditorCollection } from "survey-creator-core";
export { StylesManager } from "survey-creator-core";

import { checkLibraryVersion } from "survey-core";
checkLibraryVersion(`${process.env.VERSION}`, "survey-creator-react");