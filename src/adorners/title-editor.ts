import * as ko from "knockout";
import { registerAdorner } from "../surveyjsObjects";
import { editorLocalization } from "../editorLocalization";

import "./title-editor.scss";
import * as Survey from "survey-knockout";
import { SurveyCreator } from "../editor";
import { createKey2click } from '../utils/utils';
var templateHtml = require("html-loader?interpolate!val-loader!./title-editor.html");

const FRIENDLY_PADDING = 42;
function resizeInput(target) {
  if (!target.style) return;
  let computedStyle = window.getComputedStyle(target);
  target.style.width =
    getTextWidth(
      target.value,
      computedStyle.fontSize + " " + computedStyle.fontFamily
    ) +
    FRIENDLY_PADDING +
    "px";
}

/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 *
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 *
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
let cachedCanvas;
function getTextWidth(text, font) {
  // re-use canvas object for better performance
  var canvas =
    cachedCanvas || (cachedCanvas = document.createElement("canvas"));
  var context = canvas.getContext("2d");
  context.font = font;
  var metrics = context.measureText(text);
  return metrics.width;
}

export class TitleInplaceEditor {
  private _valueSubscription: ko.Computed;
  property: Survey.JsonObjectProperty;
  editingName = ko.observable<string>();
  prevName = ko.observable<string>();
  isEditing = ko.observable<boolean>(false);

  private _needSelectTargetOnStartEdit = false;

  protected forNeibours(func: (el: HTMLElement, index?: number) => void) {
    if (
      !this.rootElement ||
      !this.rootElement.parentElement ||
      !this.rootElement.parentElement.parentElement
    )
      return;
    var holder = this.rootElement.parentElement.parentElement;
    for (var i = 0; i < holder.children.length - 1; i++) {
      var element = holder.children[i];
      if (element.className.indexOf("svda-custom-content") === -1) {
        func(element, i);
      }
    }
  }

  private onValidateSelectedElement = (creator, options) => {
    if (this.hasErrors()) {
      options.errors.push(this.error());
    }
  };

  getInputElement() {
    return this.rootElement.getElementsByTagName("input")[0];
  }

  constructor(
    protected target: any,
    protected name: string,
    protected rootElement,
    public placeholder: string = "",
    public editor: SurveyCreator
  ) {
    if (typeof target.getType === "function") {
      this.property = Survey.Serializer.findProperty(target.getType(), name);
      this._needSelectTargetOnStartEdit = target.getType() === "survey";
    }

    this._valueSubscription = ko.computed(() => {
      //TO REVIEW THIS CRUTCH
      if (
        this.property.serializationProperty !== this.property.name &&
        !!target[this.property.serializationProperty]
      ) {
        ko.unwrap(target[this.property.serializationProperty].koRenderedHtml);
      }
      this.prevName(ko.unwrap(target[name]));
      this.editingName(ko.unwrap(target[name]));
    });

    if (!!editor && !!editor.onValidateSelectedElement) {
      editor.onValidateSelectedElement.add(this.onValidateSelectedElement);
    }

    this.forNeibours(
      (element, index) =>
        {
          element.tabIndex = 0;
          element.onkeyup = createKey2click(element);
          element.setAttribute('aria-label', this.getLocString('pe.titleKeyboardAdornerTip'));
          element.setAttribute('role', 'textbox');
          element.onclick = (e) => {
            this.startEdit(this, e);
            e.preventDefault();
          }
        }
    );
  }

  get maxLength() {
    return (!!this.property && this.property.maxLength) || "";
  }

  get readOnly() {
    return !!this.property && this.property.readOnly;
  }

  valueChanged: (newVal: any) => string;

  public getLocString(str: string) {
    return editorLocalization.getString(str);
  }

  protected updatePrevName() {
    this.prevName(this.target[this.name]);
  }

  error = ko.observable("");
  public hasErrors(): boolean {
    var errorText = "";
    var newValue = this.editingName();
    if (this.property.isRequired && !newValue) {
      errorText = editorLocalization.getString("pe.propertyIsEmpty");
    }
    if (
      !errorText &&
      !!this.editor &&
      !!this.editor.onGetErrorTextOnValidationCallback
    ) {
      errorText = this.editor.onGetErrorTextOnValidationCallback(
        this.property.name,
        this.target,
        newValue
      );
    }
    this.error(errorText);
    return !!errorText;
  }

  hideEditor = () => {
    this.isEditing(false);
    this.forNeibours((element, index) => {
      if(index === 0 && typeof element.focus === "function") {
        element.focus();
      }
      element.style.display = element.dataset["sjsOldDisplay"];
    });
  };
  startEdit = (model: TitleInplaceEditor, event) => {
    if (this.readOnly) {
      return;
    }
    if(this._needSelectTargetOnStartEdit) {
      this.editor.selectedElement = this.target;
    }
    this.updatePrevName();
    this.editingName(this.prevName());
    this.isEditing(true);
    this.forNeibours((element) => {
      element.dataset["sjsOldDisplay"] = element.style.display;
      element.style.display = "none";
    });
    var inputElement = this.getInputElement();
    inputElement.onfocus = function () {
      const callback = model.editor.onTitleInplaceEditorStartEdit;
      if (!!callback) {
        callback(inputElement);
        return;
      }
      this.select();
    };
    resizeInput(inputElement);
    setTimeout(function () {
      inputElement.focus();
    }, 10);
  };
  postEdit = () => {
    this.error("");
    if (this.readOnly) {
      this.cancelEdit();
      return;
    }
    if (this.prevName() !== this.editingName()) {
      if (this.hasErrors()) {
        return;
      }
      if (!!this.valueChanged) {
        this.valueChanged(this.editingName());
      }
      this.prevName(this.editingName());
    }
    this.hideEditor();
  };
  cancelEdit = () => {
    this.editingName(this.prevName());
    this.hideEditor();
  };
  nameEditorKeypress = (model, event) => {
    resizeInput(event.target);
    switch (event.keyCode) {
      case 13:
        this.postEdit();
        event.stopPropagation();
        return false;
      case 27:
        this.cancelEdit();
        break;
      case 46:
        event.stopPropagation();
    }
  };
  nameEditorKeydown = (model, event) => {
    if (event.ctrlKey && (event.keyCode == 90 || event.keyCode == 89)) {
      event.stopPropagation();
    }
    return true;
  };
  dispose() {
    this.forNeibours((element) => {
      element.onclick = undefined;
      element.onkeyup = undefined;
    });
    this._valueSubscription.dispose();
    if (!!this.editor && !!this.editor.onValidateSelectedElement) {
      this.editor.onValidateSelectedElement.remove(
        this.onValidateSelectedElement
      );
    }
  }
}

ko.components.register("title-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = new TitleInplaceEditor(
        params.model,
        params.name,
        componentInfo.element,
        params.placeholder,
        params.editor
      );
      model.valueChanged = (newValue) => {
        var options = {
          propertyName: model.property.name,
          obj: params.model,
          value: newValue,
          newValue: null,
          doValidation: false,
        };
        params.editor.onValueChangingCallback(options);
        newValue = options.newValue === null ? options.value : options.newValue;
        var oldValue = params.model[params.name];
        params.model[params.name] = newValue;
        params.editor.onPropertyChanged(params.model, model.property, oldValue);
        params.editor.onPropertyValueChanged(
          model.property,
          params.model,
          newValue
        );
        return "";
      };

      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.valueChanged = undefined;
        model.dispose();
      });

      return model;
    },
  },
  template: templateHtml,
});

export var titleAdorner = {
  surveyTitleEditable: true,
  pageTitleEditable: true,
  getMarkerClass: (model) => {
    if (
      typeof model.getType === "function" &&
      ((model.getType() === "page" && !titleAdorner.pageTitleEditable) ||
        (model.getType() === "survey" && !titleAdorner.surveyTitleEditable) ||
        !Survey.Serializer.findProperty(model.getType(), "title"))
    ) {
      return "";
    }
    return "title_editable";
  },
  getElementName: (model) => "title",
  afterRender: (elements: HTMLElement[], model, editor) => {
    var placeholder = "";
    if (model.getType() === "survey") {
      placeholder = editorLocalization.getString("pe.surveyTitlePlaceholder");
    }
    if (model.getType() === "page") {
      placeholder = editorLocalization.getString("pe.pageTitlePlaceholder");
    }
    var decoration = document.createElement("span");
    decoration.innerHTML = `<title-editor params='name: \"title\", placeholder: "${placeholder.replace("'", "&#39;")}", model: model, editor: editor'></title-editor>`;
    elements[0].appendChild(decoration);
    ko.applyBindings({ model: model, editor: editor }, decoration);
    ko.tasks.runEarly();
    editor.onAdornerRenderedCallback(model, "title", decoration);
  },
};
registerAdorner("title", titleAdorner);

export var itemTitleAdorner = {
  getMarkerClass: (model) => {
    return !!model.items ? "item_title_editable title_editable" : "";
  },
  getElementName: (model) => "itemTitle",
  afterRender: (
    elements: HTMLElement[],
    model: Survey.QuestionMultipleText,
    editor
  ) => {
    for (var i = 0; i < elements.length; i++) {
      var decoration = document.createElement("span");
      decoration.innerHTML =
        "<title-editor params='name: \"title\", model: model, editor: editor'></title-editor>";
      elements[i].appendChild(decoration);
      ko.applyBindings({ model: model.items[i], editor: editor }, decoration);
      ko.tasks.runEarly();
      editor.onAdornerRenderedCallback(
        model,
        "item-title",
        decoration,
        model.items[i]
      );
    }
  },
};
registerAdorner("item-title", itemTitleAdorner);

export var descriptionAdorner = {
  getMarkerClass: (model) => {
    if (typeof model.getType === "function" && !Survey.Serializer.findProperty(model.getType(), "description")) {
      return "";
    }
    return "description_editable";
  },
  getElementName: (model) => "description",
  afterRender: (elements: HTMLElement[], model, editor) => {
    var placeholder = "";
    if (model.getType() === "survey") {
      placeholder = editorLocalization.getString(
        "pe.surveyDescriptionPlaceholder"
      );
    }
    if (model.getType() === "page") {
      placeholder = editorLocalization.getString(
        "pe.pageDescriptionPlaceholder"
      );
    }
    var decoration = document.createElement("span");
    decoration.innerHTML = `<title-editor params='name: \"description\", placeholder: "${placeholder.replace("'", "&#39;")}", model: model, editor: editor'></title-editor>`;
    elements[0].appendChild(decoration);
    ko.applyBindings({ model: model, editor: editor }, decoration);
    ko.tasks.runEarly();
    editor.onAdornerRenderedCallback(model, "description", decoration);
  },
};
registerAdorner("description", descriptionAdorner);
