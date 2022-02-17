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
export * from "../toolbox/Toolbox";
export * from "../toolbox/AdaptiveToolbox";
export * from "../TabbedMenu";
export * from "../Notifier";
export * from "../Navigation";
export * from "../SideBar";
export * from "../tabs/TranslationLineSkeleton";
export * from "../ActionButton";

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