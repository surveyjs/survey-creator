import * as ko from "knockout";
import { registerAdorner } from "../surveyjsObjects";

import "./title-editor.scss";
var templateHtml = require("html-loader?interpolate!val-loader!./title-editor.html");

class NameEditorViewModel {
  editingName = ko.observable<string>();
  prevName = ko.observable<string>();
  isEditing = ko.observable<boolean>(false);

  constructor(name: string, private rootElement) {
    this.editingName(name);
    this.prevName(name);
  }

  valueChanged: (any) => void;

  startEdit = (model, event) => {
    this.editingName(this.prevName());
    this.isEditing(true);
    var holder = this.rootElement.parentElement.parentElement;
    for (var i = 0; i < holder.children.length - 1; i++) {
      var element = holder.children[i];
      element.style.display = "none";
    }
    this.rootElement.getElementsByTagName("input")[0].focus();
  };
  postEdit = () => {
    this.cancelEdit();
    this.prevName(this.editingName());
    !!this.valueChanged && this.valueChanged(this.editingName());
  };
  cancelEdit = () => {
    this.isEditing(false);
    var holder = this.rootElement.parentElement.parentElement;
    for (var i = 0; i < holder.children.length - 1; i++) {
      var element = holder.children[i];
      element.style.display = "";
    }
  };
  nameEditorKeypress = (model, event) => {
    if (event.keyCode === 13) {
      this.postEdit();
    } else if (event.keyCode === 27) {
      this.cancelEdit();
    }
  };
}

ko.components.register("title-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = new NameEditorViewModel(
        params.model[params.name],
        componentInfo.element
      );
      model.valueChanged = newValue => (params.model[params.name] = newValue);
      return model;
    }
  },
  template: templateHtml
});

export var titleAdorner = {
  getMarkerClass: model => {
    return "title_editable";
  },
  afterRender: (elements: HTMLElement[], model) => {
    var decoration = document.createElement("span");
    decoration.innerHTML =
      "<title-editor params='name: \"title\", model: $data'></title-editor>";
    elements[0].appendChild(decoration);
    ko.applyBindings(model, decoration);
  }
};

registerAdorner("title", titleAdorner);

export var itemAdorner = {
  getMarkerClass: model => {
    return !!model.choices ? "item_editable" : "";
  },
  afterRender: (elements: HTMLElement[], model) => {
    for (var i = 0; i < elements.length; i++) {
      var decoration = document.createElement("span");
      decoration.innerHTML =
        "<title-editor params='name: \"text\", model: $data'></title-editor>";
      elements[i].appendChild(decoration);
      ko.applyBindings(model.choices[i], decoration);
    }
  }
};

registerAdorner("item", itemAdorner);
