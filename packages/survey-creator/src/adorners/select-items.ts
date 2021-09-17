import { Serializer } from "survey-knockout";
import { renderDisplayMode } from "../adorners/select-items-display";
import { renderEditableItems } from "../adorners/select-items-editor";
import { SurveyHelper } from "../surveyHelper";
import { registerAdorner } from "../surveyjsObjects";

import "./select-items-editor.scss";

export var selectItemsAdorner = {
  getMarkerClass: model => {
    return !!model.parent && !!model.choices ? "select_items_common" : "";
  },
  getElementName: model => "selectWrapper",
  afterRender: (elements, model, editor) => {
    if(SurveyHelper.isCanModifyProperty(model, "choices", editor))
      renderEditableItems(elements, model, editor);
    else
      renderDisplayMode(elements, model, editor);
  },
  renderReadOnly: renderDisplayMode,
  isExpanded: true
};
registerAdorner("select-choices", selectItemsAdorner);
