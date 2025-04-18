export let Version: string;
Version = `${process.env.VERSION}`;

// import "@survey/creator/survey-creator-core.css";

export { SurveyCreatorComponent } from "../SurveyCreator";

export * from "../adorners/Row";
export * from "../adorners/Question";
export * from "../adorners/QuestionHeader";
export * from "../adorners/QuestionFooter";
export * from "../adorners/QuestionBanner";
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
export * from "../toolbox/ToolboxItemGroup";
export * from "../toolbox/ToolboxCategory";
export * from "../toolbox/ToolboxList";
export * from "../toolbox/AdaptiveToolbox";
export * from "../TabbedMenu";
export * from "../Navigation";
export * from "../side-bar/TabControl";
export * from "../side-bar/TabButton";
export * from "../side-bar/SideBarDefaultHeader";
export * from "../side-bar/SideBarPropertyGridHeader";
export * from "../side-bar/SideBarHeader";
export * from "../side-bar/SideBar";
export * from "../tabs/translation/TranslationLineSkeleton";
export * from "../tabs/translation/TranslateFromAction";
export * from "../ActionButton";
export * from "../StringEditor";
export * from "../QuestionError";

export * from "../tabs/logic-operator";
export * from "../tabs/Designer";
export * from "../tabs/JsonEditorAce";
export * from "../tabs/JsonEditorTextarea";
export * from "../tabs/Logic";
export * from "../tabs/Preview";
export * from "../side-bar/PropertyGridPlaceholder";
export * from "../tabs/Theme";
export * from "../tabs/translation/Translation";
export * from "../tabs/SurveySimulator";

export * from "../events";
export * from "../side-bar/ObjectSelector";
export * from "../side-bar/PropertyGrid";
export * from "../components/Search";
export * from "../Switcher";

export * from "../tabs/JsonErrorItem";

//custom questions
export * from "../custom-questions/SpinEditor";
export * from "../custom-questions/ColorItem";
export * from "../custom-questions/ColorQuestion";
export * from "../custom-questions/FileEditQuestion";
export * from "../custom-questions/TextWithResetQuestion";
export * from "../custom-questions/BooleanSwitch";

export { editorLocalization, localization } from "survey-creator-core";
export { settings } from "survey-creator-core";
export { svgBundle } from "survey-creator-core";
export { SurveyLogic, SurveyLogicUI } from "survey-creator-core";
export { SurveyQuestionEditorDefinition } from "survey-creator-core";
export { ISurveyCreatorOptions, IPropertyGridEditor } from "survey-creator-core";
export { ToolboxToolViewModel, PropertyGridEditorCollection } from "survey-creator-core";

import { checkLibraryVersion } from "survey-core";
checkLibraryVersion(`${process.env.VERSION}`, "survey-creator-react");