// styles
import "../main.scss";

export let Version: string;
Version = `${process.env.VERSION}`;

import * as jQuery from "jquery";
global["jQuery"] = jQuery;
import "bootstrap";

export {DragDropHelper} from "../dragdrophelper";
export {
    SurveyPropertyEditorBase, SurveyStringPropertyEditor,
    SurveyDropdownPropertyEditor, SurveyBooleanPropertyEditor, SurveyNumberPropertyEditor
} from "../propertyEditors/propertyEditorBase";
export {SurveyPropertyTextItemsEditor} from "../propertyEditors/propertyTextItemsEditor";
export {SurveyPropertyItemsEditor} from "../propertyEditors/propertyItemsEditor";
export {SurveyPropertyItemValuesEditor} from "../propertyEditors/propertyItemValuesEditor";
export {SurveyPropertyDropdownColumnsEditor, SurveyPropertyMatrixDropdownColumnsItem}
    from "../propertyEditors/propertyMatrixDropdownColumnsEditor";
export {SurveyPropertyModalEditor} from "../propertyEditors/propertyModalEditor";
export {SurveyPropertyResultfullEditor} from "../propertyEditors/propertyRestfullEditor";
export {SurveyPropertyTriggersEditor} from "../propertyEditors/propertyTriggersEditor";
export {SurveyPropertyValidatorsEditor} from "../propertyEditors/propertyValidatorsEditor";
export {SurveyObjects} from "../surveyObjects";

export {editorLocalization} from "../editorLocalization";

export {SurveyQuestionEditorGeneralProperties, SurveyQuestionEditorGeneralRow, SurveyQuestionEditorGeneralProperty} from "../questionEditors/questionEditorGeneralProperties";
export {SurveyQuestionEditorDefinition} from "../questionEditors/questionEditorDefinition";
export {SurveyPropertyEditorShowWindow, SurveyQuestionEditor, SurveyQuestionEditorTabGeneral, SurveyQuestionEditorTabProperty} from "../questionEditors/questionEditor";

export {QuestionToolbox} from "../questionToolbox";
export {SurveyObjectProperty} from "../objectProperty";
export {SurveyObjectEditor} from "../objectEditor";
export {SurveyPagesEditor} from "../pagesEditor";
export {SurveyTextWorker} from "../textWorker";
export {ObjType, SurveyHelper} from "../surveyHelper";
export {SurveyEmbedingWindow} from "../surveyEmbedingWindow";
export {SurveyVerbs, SurveyVerbItem, SurveyVerbChangeTypeItem, SurveyVerbChangePageItem} from "../objectVerbs";
export {SurveyUndoRedo, UndoRedoItem} from "../undoredo";
export {SurveyEditor} from "../editor";

//editorLocalization
import '../localization/french';