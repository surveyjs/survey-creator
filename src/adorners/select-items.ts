import { selectItemsDisplayAfterRender } from "../adorners/select-items-display";
import { selectItemsEditorAfterRender } from "../adorners/select-items-editor";
import { registerAdorner } from "../surveyjsObjects";

import "./select-items-editor.scss";
import { QuestionSelectBase } from "survey-knockout";

export var selectItemsAdorner = {
  getMarkerClass: model => {
    return !!model.parent && !!model.choices  ? "select_items_common" : "";
  },
  getElementName: model => "selectWrapper",
  afterRender: (elements: HTMLElement[], model: QuestionSelectBase, editor) => {
    return editor.readOnly
      ? selectItemsDisplayAfterRender(elements, model, editor)
      : selectItemsEditorAfterRender(elements, model, editor);
  },
  isExpanded: true
};
registerAdorner("select-choices", selectItemsAdorner);
