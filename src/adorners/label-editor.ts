import * as ko from "knockout";
import { registerAdorner } from "../surveyjsObjects";
import { TitleInplaceEditor } from "./title-editor";

import "./label-editor.scss";

export var labelAdorner = {
  getMarkerClass: model => {
    if (model.getType() === "boolean") {
      return "label_editable";
    }
    return "";
  },
  getElementName: model => "label",
  afterRender: (elements: HTMLElement[], model, editor) => {
    var decoration = document.createElement("span");
    decoration.innerHTML =
      "<title-editor params='name: \"title\", model: model, editor: editor'></title-editor>";
    elements[0].onclick = e => e.preventDefault();
    elements[0].appendChild(decoration);
    ko.applyBindings({ model: model, editor: editor }, decoration);
    ko.tasks.runEarly();
    editor.onAdornerRenderedCallback(model, "label", decoration);
  }
};

registerAdorner("label", labelAdorner);
