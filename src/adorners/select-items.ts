import { renderDisplayMode } from "../adorners/select-items-display";
import { renderEditableItems} from "../adorners/select-items-editor";
import { registerAdorner } from "../surveyjsObjects";

import "./select-items-editor.scss";

export var selectItemsAdorner = {
  getMarkerClass: model => {
    return !!model.parent && !!model.choices  ? "select_items_common" : "";
  },
  getElementName: model => "selectWrapper",
  afterRender: renderEditableItems,
  renderReadOnly:  renderDisplayMode,
  isExpanded: true
};
registerAdorner("select-choices", selectItemsAdorner);
