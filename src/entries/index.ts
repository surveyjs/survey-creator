// styles
import "../utils/custom-checkbox.scss";
import "../utils/custom-select.scss";
import "../utils/ddmenu.scss";
import "../main.scss";

export let Version: string;
Version = `${process.env.VERSION}`;

export { DragDropHelper } from "../dragdrophelper";
export {
  SurveyPropertyEditorBase
} from "../propertyEditors/propertyEditorBase";
export {
  SurveyPropertyCustomEditor
} from "../propertyEditors/propertyCustomEditor";
export {
  SurveyPropertyEditorFactory
} from "../propertyEditors/propertyEditorFactory";
export {
  SurveyStringPropertyEditor,
  SurveyDropdownPropertyEditor,
  SurveyBooleanPropertyEditor,
  SurveyNumberPropertyEditor
} from "../propertyEditors/propertyEditorFactory";
export {
  SurveyPropertyTextItemsEditor
} from "../propertyEditors/propertyTextItemsEditor";
export {
  SurveyPropertyItemsEditor
} from "../propertyEditors/propertyItemsEditor";
export {
  SurveyPropertyItemValuesEditor
} from "../propertyEditors/propertyItemValuesEditor";
export {
  SurveyPropertyMultipleValuesEditor
} from "../propertyEditors/propertyMultipleValuesEditor";
export {
  SurveyNestedPropertyEditor,
  SurveyNestedPropertyEditorItem
} from "../propertyEditors/propertyNestedPropertyEditor";
export {
  SurveyPropertyDropdownColumnsEditor,
  SurveyPropertyMatrixDropdownColumnsItem
} from "../propertyEditors/propertyMatrixDropdownColumnsEditor";
export {
  SurveyPropertyModalEditor
} from "../propertyEditors/propertyModalEditor";
export {
  SurveyPropertyTextEditor
} from "../propertyEditors/propertyModalEditor";
export {
  SurveyPropertyConditionEditor
} from "../propertyEditors/propertyConditionEditor";
export {
  SurveyPropertyResultfullEditor
} from "../propertyEditors/propertyRestfullEditor";
export {
  SurveyPropertyDefaultValueEditor
} from "../propertyEditors/propertyDefaultValueEditor";
export {
  SurveyPropertyTriggersEditor
} from "../propertyEditors/propertyTriggersEditor";
export {
  SurveyPropertyValidatorsEditor
} from "../propertyEditors/propertyValidatorsEditor";
export { SurveyObjects } from "../surveyObjects";

export { editorLocalization, defaultStrings } from "../editorLocalization";

export {
  SurveyQuestionEditorProperties,
  SurveyQuestionEditorRow,
  SurveyQuestionEditorProperty
} from "../questionEditors/questionEditorProperties";
export {
  SurveyQuestionEditorDefinition
} from "../questionEditors/questionEditorDefinition";
export {
  SurveyPropertyEditorShowWindow,
  SurveyQuestionEditor,
  SurveyQuestionEditorTab
} from "../questionEditors/questionEditor";

export { QuestionToolbox } from "../questionToolbox";
export { SurveyObjectProperty } from "../objectProperty";
export { SurveyObjectEditor } from "../objectEditor";
export { SurveyPagesEditor } from "../pagesEditor";
export { SurveyTextWorker } from "../textWorker";
export { ObjType, SurveyHelper } from "../surveyHelper";
export { SurveyLiveTester } from "../surveylive";
export { SurveyEmbedingWindow } from "../surveyEmbedingWindow";
export { QuestionConverter } from "../questionconverter";
export { SurveyUndoRedo, UndoRedoItem } from "../undoredo";
export {
  SurveyForDesigner,
  registerAdorner,
  removeAdorners
} from "../surveyjsObjects";
export { Extentions } from "../extentions";
export { SurveyEditor } from "../editor";

export { SurveysManager } from "../manage";

//editorLocalization
import "../localization/french";
import "../localization/spanish";
import "../localization/portuguese";
import "../localization/italian";
import "../localization/simplified-chinese";
import "../localization/persian";
import "../localization/polish";

//adorners
export { titleAdorner } from "../adorners/title-editor";
export { itemAdorner } from "../adorners/item-editor";
export { questionActionsAdorner } from "../adorners/question-actions";
