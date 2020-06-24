// styles
import "../utils/custom-checkbox.scss";
import "../utils/custom-select.scss";
import "../utils/ddmenu.scss";
import "../main.scss";

import "../../vendor/knockout-sortable.js";

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
  SurveyNumberPropertyEditor,
} from "../propertyEditors/propertyEditorFactory";
export { SurveyPropertyTextItemsEditor } from "../propertyEditors/propertyTextItemsEditor";
export { SurveyPropertyItemsEditor } from "../propertyEditors/propertyItemsEditor";
export { SurveyPropertyItemValuesEditor } from "../propertyEditors/propertyItemValuesEditor";
export { SurveyPropertyMultipleValuesEditor } from "../propertyEditors/propertyMultipleValuesEditor";
export {
  SurveyNestedPropertyEditor,
  SurveyNestedPropertyEditorItem,
} from "../propertyEditors/propertyNestedPropertyEditor";
export { SurveyPropertyDropdownColumnsEditor } from "../propertyEditors/propertyMatrixDropdownColumnsEditor";
export { SurveyPropertyModalEditor } from "../propertyEditors/propertyModalEditor";
export {
  SurveyPropertyTextEditor,
  SurveyPropertyHtmlEditor,
} from "../propertyEditors/propertyModalEditor";
export { SurveyPropertyConditionEditor } from "../propertyEditors/propertyConditionEditor";
export { SurveyPropertyResultfullEditor } from "../propertyEditors/propertyRestfullEditor";
export {
  SurveyPropertyDefaultValueEditor,
  SurveyPropertyDefaultRowValueEditor,
  SurveyPropertyDefaultPanelValueEditor,
  SurveyPropertySetEditor,
} from "../propertyEditors/propertyDefaultValueEditor";
export { SurveyPropertyTriggersEditor } from "../propertyEditors/propertyTriggersEditor";
export { SurveyPropertyHtmlConditionEditor } from "../propertyEditors/propertyHtmlConditionEditor";
export { SurveyPropertyUrlConditionEditor } from "../propertyEditors/propertyUrlConditionEditor";
export { SurveyPropertyCalculatedValueEditor } from "../propertyEditors/propertyCalculatedValues";
export { SurveyPropertyValidatorsEditor } from "../propertyEditors/propertyValidatorsEditor";
export { SurveyPropertyCellsEditor } from "../propertyEditors/propertyCellsEditor";
export { SurveyObjects } from "../surveyObjects";
export { SurveyQuestionEditorDefinition } from "../questionEditors/questionEditorDefinition";
export {
  SurveyPropertyEditorShowWindow,
  SurveyQuestionEditor,
  SurveyElementEditorTabModel,
} from "../questionEditors/questionEditor";

export { QuestionToolbox } from "../components/toolbox";
export { SurveyObjectProperty } from "../objectProperty";
export { PagesEditorViewModel } from "../components/pages-editor";
export { Toolbar } from "../components/toolbar";
export { SurveyTextWorker } from "../textWorker";
export { ObjType, SurveyHelper } from "../surveyHelper";
export { SurveyLiveTester } from "../tabs/test";
export { SurveyEmbedingWindow } from "../tabs/embed";
export { QuestionConverter } from "../questionconverter";
export { SurveyJSONEditor } from "../tabs/json-editor";
export { SurveyLogic } from "../tabs/logic";
export {
  SurveyForDesigner,
  registerAdorner,
  removeAdorners,
} from "../surveyjsObjects";
export { Extentions } from "../extentions";
export { SurveyEditor } from "../editor";
export { SurveyCreator } from "../editor";
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
import "../localization/swedish";
import "../localization/traditional-chinese";
import "../localization/turkish";
import "../localization/norwegian";
import "../localization/hungarian";
import "../localization/russian";
import "../localization/tajik";

export {
  Translation,
  TranslationGroup,
  TranslationItem,
  TranslationItemBase,
} from "../tabs/translation";

//adorners
export {
  titleAdorner,
  itemTitleAdorner,
  descriptionAdorner,
} from "../adorners/title-editor";
export { itemAdorner, itemDraggableAdorner } from "../adorners/item-editor";
export { labelAdorner } from "../adorners/label-editor";
export {
  questionActionsAdorner,
  panelActionsAdorner,
} from "../adorners/question-actions";
export { selectItemsAdorner } from "../adorners/select-items";

// export
export { ratingItemAdorner } from "../adorners/rating-item-editor";
export { imageItemsAdorner } from "../adorners/image-items";
export { flowpanelActionsAdorner } from "../adorners/flowpanel-actions";
export { imageAdorner } from "../adorners/image";
export { titleImageAdorner } from "../adorners/title-image";
export { TitleActionsViewModel } from "../adorners/title-actions";

// ui components
export {
  IAccordionItemData,
  AccordionItemModel,
  AccordionModel,
} from "../utils/accordion";
export { ButtonViewModel } from "../utils/button";
export { DropdownViewModel } from "../utils/dropdown";
export { BooleanViewModel } from "../utils/boolean";

export { SplitterComponentViewModel } from "../utils/splitter";
export { DesignerContainerModel } from "../utils/designer-container";
export { DesignerHContainerModel } from "../utils/designer-h-container";

export { SurveyPropertyOneSelectedEditor } from "../propertyEditors/propertyOneSelectedEditor";

// property grid
export { PropertyGrid } from "../property-grid/property-grid";
export { ObjectEditor } from "../property-grid/object-editor";
export { ObjectEditorContent } from "../property-grid/object-editor-content";
export { ObjectEditorTab } from "../property-grid/object-editor-tab";
export { ObjectEditorOldTableContent } from "../property-grid/object-editor-old-table-content";

// property editors
export { PropertyEditor } from "../property-editors/property-editor";
export { PropertyEditorError } from "../property-editors/error";
export { PropertyEditorString } from "../property-editors/string";
export { PropertyEditorDropdown } from "../property-editors/dropdown";
export { PropertyEditorBoolean } from "../property-editors/boolean";
export { PropertyEditorSwitch } from "../property-editors/switch";
export { PropertyEditorNumber } from "../property-editors/number";
export { PropertyEditorColor } from "../property-editors/color";
export { PropertyEditorModal } from "../property-editors/modal";
export { PropertyEditorModalContent } from "../property-editors/modal-content";
export { PropertyEditorText } from "../property-editors/text";
export { PropertyEditorCondition } from "../property-editors/condition";
export { PropertyEditorCells } from "../property-editors/cells";
export { PropertyEditorExpression } from "../property-editors/expression";
export { PropertyEditorHTML } from "../property-editors/html-pe";
export { PropertyEditorItemValues } from "../property-editors/item-values";
export { PropertyEditorValue } from "../property-editors/default-value";
export { PropertyEditorOneSelected } from "../property-editors/one-selected";
export { PropertyEditorRestfull } from "../property-editors/restfull";
export { PropertyEditorMultipleValues } from "../property-editors/multiple-values";
export { PropertyEditorNestedItems } from "../property-editors/nested-items";
export { PropertyEditorNestedItem } from "../property-editors/nested-item";
export { PropertyEditorNested } from "../property-editors/nested";
