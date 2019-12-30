// styles
import "../utils/custom-checkbox.scss";
import "../utils/custom-select.scss";
import "../utils/ddmenu.scss";
import "../main.scss";

export let Version: string;
Version = `${process.env.VERSION}`;

export { enStrings } from "../localization/english";
export { editorLocalization, defaultStrings } from "../editorLocalization";
export { editorLocalization as localization } from "../editorLocalization";

export { DragDropHelper } from "../dragdrophelper";
export { EditableObject } from "../propertyEditors/editableObject";
export { SurveyElementSelector } from "../propertyEditors/surveyElementSelector";
export { SurveyPropertyEditorBase } from "../propertyEditors/propertyEditorBase";
export { SurveyPropertyCustomEditor } from "../propertyEditors/propertyCustomEditor";
export { SurveyPropertyEditorFactory } from "../propertyEditors/propertyEditorFactory";
export {
  SurveyStringPropertyEditor,
  SurveyDropdownPropertyEditor,
  SurveyBooleanPropertyEditor,
  SurveyNumberPropertyEditor
} from "../propertyEditors/propertyEditorFactory";
export { SurveyPropertyTextItemsEditor } from "../propertyEditors/propertyTextItemsEditor";
export { SurveyPropertyItemsEditor } from "../propertyEditors/propertyItemsEditor";
export { SurveyPropertyItemValuesEditor } from "../propertyEditors/propertyItemValuesEditor";
export { SurveyPropertyMultipleValuesEditor } from "../propertyEditors/propertyMultipleValuesEditor";
export {
  SurveyNestedPropertyEditor,
  SurveyNestedPropertyEditorItem
} from "../propertyEditors/propertyNestedPropertyEditor";
export { SurveyPropertyDropdownColumnsEditor } from "../propertyEditors/propertyMatrixDropdownColumnsEditor";
export { SurveyPropertyModalEditor } from "../propertyEditors/propertyModalEditor";
export {
  SurveyPropertyTextEditor,
  SurveyPropertyHtmlEditor
} from "../propertyEditors/propertyModalEditor";
export { SurveyPropertyConditionEditor } from "../propertyEditors/propertyConditionEditor";
export { SurveyPropertyResultfullEditor } from "../propertyEditors/propertyRestfullEditor";
export {
  SurveyPropertyDefaultValueEditor,
  SurveyPropertyDefaultRowValueEditor,
  SurveyPropertyDefaultPanelValueEditor,
  SurveyPropertySetEditor
} from "../propertyEditors/propertyDefaultValueEditor";
export { SurveyPropertyTriggersEditor } from "../propertyEditors/propertyTriggersEditor";
export { SurveyPropertyHtmlConditionEditor } from "../propertyEditors/propertyHtmlConditionEditor";
export { SurveyPropertyCalculatedValueEditor } from "../propertyEditors/propertyCalculatedValues";
export { SurveyPropertyValidatorsEditor } from "../propertyEditors/propertyValidatorsEditor";
export { SurveyPropertyCellsEditor } from "../propertyEditors/propertyCellsEditor";
export { SurveyObjects } from "../surveyObjects";

export { SurveyQuestionEditorProperties } from "../questionEditors/questionEditorProperties";
export { SurveyQuestionEditorDefinition } from "../questionEditors/questionEditorDefinition";
export {
  SurveyPropertyEditorShowWindow,
  SurveyQuestionEditor,
  SurveyQuestionEditorTab
} from "../questionEditors/questionEditor";

export { QuestionToolbox } from "../questionToolbox";
export { SurveyObjectProperty } from "../objectProperty";
export { PagesEditor } from "../pagesEditor";
export { SurveyTextWorker } from "../textWorker";
export { ObjType, SurveyHelper } from "../surveyHelper";
export { SurveyLiveTester } from "../surveylive";
export { SurveyEmbedingWindow } from "../surveyEmbedingWindow";
export { QuestionConverter } from "../questionconverter";
export { SurveyUndoRedo, UndoRedoItem } from "../undoredo";
export { SurveyLogic } from "../logic";
export {
  SurveyForDesigner,
  registerAdorner,
  removeAdorners
} from "../surveyjsObjects";
export { Extentions } from "../extentions";
export { SurveyEditor } from "../editor";
export { SurveyCreator } from "../editor";

export { SurveysManager } from "../manage";

export { StylesManager } from "../stylesmanager";

//localization
import "../localization/danish";
import "../localization/french";
import "../localization/german";
import "../localization/italian";
import "../localization/indonesian";
import "../localization/korean";
import "../localization/persian";
import "../localization/polish";
import "../localization/portuguese";
import "../localization/simplified-chinese";
import "../localization/spanish";
import "../localization/traditional-chinese";
import "../localization/norwegian";
import "../localization/hungarian";

export {
  Translation,
  TranslationGroup,
  TranslationItem,
  TranslationItemBase
} from "../translation";

//adorners
export { titleAdorner } from "../adorners/title-editor";
export { itemAdorner } from "../adorners/item-editor";
export { labelAdorner } from "../adorners/label-editor";
export { questionActionsAdorner } from "../adorners/question-actions";
export { selectItemsAdorner } from "../adorners/select-items";

// export
export { ratingItemAdorner } from "../adorners/rating-item-editor";
export { imageItemsAdorner } from "../adorners/image-items";
export { flowpanelActionsAdorner } from "../adorners/flowpanel-actions";

export {
  IAccordionItemData,
  AccordionItemModel,
  AccordionModel
} from "../utils/accordion";

export { SplitterComponentViewModel } from "../utils/splitter";
export { DesignerContainerModel } from "../utils/designer-container";

export { SurveyPropertyOneSelectedEditor } from "../propertyEditors/propertyOneSelectedEditor";
