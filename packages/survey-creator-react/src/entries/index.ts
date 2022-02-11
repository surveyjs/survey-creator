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

export * from "../components/header/LogoImage";
export * from "../components/QuestionLinkValue";
export * from "../components/QuestionEmbeddedSurvey";
export * from "../components/QuestionEditorContent";
export * from "../components/ItemValueWrapper";
export * from "../components/ImageItemValueWrapper";
export * from "../components/MatrixCellWrapper";
export * from "../components/Results";
export * from "../components/toolbox/ToolboxItem";
export * from "../components/toolbox/Toolbox";
export * from "../components/toolbox/AdaptiveToolbox";
export * from "../components/TabbedMenu";
export * from "../components/Notifier";
export * from "../components/Navigation";
export * from "../components/SideBar";
export * from "../components/tabs/TranslationLineSkeleton";
export * from "../components/ActionButton";

export * from "../components/tabs/Designer";
export * from "../components/tabs/Embed";
export * from "../components/tabs/JsonEditorAce";
export * from "../components/tabs/JsonEditorTextarea";
export * from "../components/tabs/Logic";
export * from "../components/tabs/Preview";
export * from "../components/tabs/Translation";
export * from "../components/tabs/SurveySimulator";

export * from "../events";
export * from "../ObjectSelector";
export * from "../PropertyGrid";

import * as core from "survey-creator-core";
export const localization = core.editorLocalization;
export const settings = core.settings;
export const svgBundle = core.svgBundle;
export const SurveyLogicUI = core.SurveyLogicUI;
export const SurveyLogic = core.SurveyLogic;
export const SurveyQuestionEditorDefinition = core.SurveyQuestionEditorDefinition;
// export const ISurveyCreatorOptions = core.ISurveyCreatorOptions;
// export const IPropertyGridEditor = core.IPropertyGridEditor;
export const ToolboxToolViewModel = core.ToolboxToolViewModel;
export const PropertyGridEditorCollection = core.PropertyGridEditorCollection;
export const StylesManager = core.StylesManager;