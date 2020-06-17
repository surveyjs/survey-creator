import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { editorLocalization } from "../editorLocalization";
import { focusFirstControl, getFirstNonTextElement } from "../utils/utils";
import RModal from "rmodal";
import { EditableObject } from "./editableObject";

export class SurveyPropertyModalEditorCustomWidget {
  private static customWidgetId = 1;
  private static customWidgetName = "modalEditorCustomWidget";
  constructor(public json: any) {}
  public afterRender(editor: SurveyPropertyModalEditor, el: HTMLElement) {
    if (this.json && this.json.afterRender) {
      if (!el.id) {
        el.id =
          SurveyPropertyModalEditorCustomWidget.customWidgetName +
          SurveyPropertyModalEditorCustomWidget.customWidgetId;
        SurveyPropertyModalEditorCustomWidget.customWidgetId++;
      }
      this.json.afterRender(editor, el);
      if (this.json.destroy) {
        var self = this;
        ko.utils.domNodeDisposal.addDisposeCallback(el, function() {
          self.destroy(editor, el);
        });
      }
    }
  }
  public destroy(editor: SurveyPropertyModalEditor, el: HTMLElement) {
    if (this.json && this.json.destroy) {
      this.json.destroy(editor, el);
    }
  }
}

export class SurveyPropertyModalEditor extends SurveyPropertyEditorBase {
  private static customWidgets;
  public static registerCustomWidget(editorType: string, json: any) {
    if (!SurveyPropertyModalEditor.customWidgets)
      SurveyPropertyModalEditor.customWidgets = {};
    SurveyPropertyModalEditor.customWidgets[
      editorType
    ] = new SurveyPropertyModalEditorCustomWidget(json);
  }
  protected static idCounter = 1;
  public static getCustomWidget(
    editorType: string
  ): SurveyPropertyModalEditorCustomWidget {
    if (!SurveyPropertyModalEditor.customWidgets) return null;
    return SurveyPropertyModalEditor.customWidgets[editorType];
  }
  private isBeforeShowCalledValue: boolean = false;
  private elements: HTMLElement[];
  private modalEditableObject: EditableObject;
  public editingObject: any;
  public onApplyClick: any;
  public onOkClick: any;
  public onResetClick: any;
  public onShowModal: any;
  public onHideModal: any;
  public modalName: string;
  public modalNameTarget: string;
  koShowApplyButton: any;
  koTitleCaption: any;
  koAfterRender: any;
  koHtmlTop: any;
  koHtmlBottom: any;
  koIsShowingModal: any;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.koTitleCaption = ko.observable("");
    this.koHtmlTop = ko.observable("");
    this.koHtmlBottom = ko.observable("");
    if (this.property) {
      this.koTitleCaption(
        editorLocalization
          .getString("pe.editProperty")
          ["format"](
            editorLocalization.getPropertyName(
              this.property.name,
              this.property.displayName
            )
          )
      );
    }
    this.modalName =
      "modelEditor" + this.editorType + SurveyPropertyModalEditor.idCounter;
    SurveyPropertyModalEditor.idCounter++;
    this.modalNameTarget = "#" + this.modalName;
    var self = this;
    this.koShowApplyButton = ko.observable(true);
    this.koIsShowingModal = ko.observable(false);

    self.onHideModal = function() {};
    self.onApplyClick = function() {
      self.apply();
    };
    self.onOkClick = function() {
      var res = self.apply();
      if (res) self.onHideModal();
    };
    self.onResetClick = function() {
      self.updateValue();
      self.onHideModal();
    };
    self.onShowModal = function() {
      self.beforeShowModal();
      self.beforeShow();
      var modal = new RModal(document.querySelector(self.modalNameTarget), {
        bodyClass: "",
        closeTimeout: 100,
        dialogOpenClass: "animated fadeInDown",
        focus: false,
      });
      modal.open();

      document.addEventListener(
        "keydown",
        function(ev) {
          modal.keydown(ev);
        },
        false
      );

      self.onHideModal = function() {
        self.beforeCloseModal();
        modal.close();
      };
      if (!!this.elements) {
        focusFirstControl(this.elements);
      }
    };
    self.koAfterRender = function(el, con) {
      return self.afterRender(el, con);
    };
  }
  protected get isModal(): boolean {
    return true;
  }
  public get isBeforeShowCalled(): boolean {
    return this.isBeforeShowCalledValue;
  }
  public beforeShow() {
    if (this.isBeforeShowCalledValue === true) return;
    this.isBeforeShowCalledValue = true;
    this.beforeShowCore();
  }
  protected beforeShowCore() {
    this.updateValue();
  }
  public updatePropertyValue(newValue: any) {
    var obj = this.object;
    if (!!this.modalEditableObject) {
      obj = this.modalEditableObject.editableObj;
    }
    obj[this.property.name] = newValue;
  }
  protected getOriginalValue(): any {
    if (!!this.modalEditableObject) {
      return this.modalEditableObject.editableObj[this.property.name];
    }
    return super.getOriginalValue();
  }
  protected performApply() {
    if (!!this.modalEditableObject) {
      this.modalEditableObject.apply(this.property.name);
    } else {
      super.performApply();
    }
  }
  protected beforeShowModal() {
    this.modalEditableObject = new EditableObject(this.object);
    this.koIsShowingModal(true);
  }
  protected isShowingModal(): boolean {
    return this.koIsShowingModal();
  }
  protected beforeCloseModal() {
    this.isBeforeShowCalledValue = false;
    this.koIsShowingModal(false);
    if (!!this.modalEditableObject) {
      this.modalEditableObject.reset();
    }
    this.modalEditableObject = null;
  }
  protected onOptionsChanged() {
    this.koShowApplyButton = ko.observable(
      !this.options || this.options.showApplyButtonInEditors
    );
  }
  public setObject(value: any) {
    this.isBeforeShowCalledValue = false;
    this.editingObject = value;
    super.setObject(value);
    if (this.options && this.property) {
      var html = this.options.onPropertyEditorModalShowDescriptionCallback(
        this.property.name,
        value
      );
      if (html) {
        if (html.top) this.koHtmlTop(html.top);
        if (html.bottom) this.koHtmlBottom(html.bottom);
      }
    }
  }
  public get isEditable(): boolean {
    return false;
  }
  protected afterRender(elements, con) {
    this.elements = elements;
    var customWidget = SurveyPropertyModalEditor.getCustomWidget(
      this.editorType
    );
    if (!!customWidget) {
      var el = getFirstNonTextElement(elements);
      var tEl = elements[0];
      if (tEl.nodeName == "#text") tEl.data = "";
      tEl = elements[elements.length - 1];
      if (tEl.nodeName == "#text") tEl.data = "";
      customWidget.afterRender(this, el);
    }
    focusFirstControl(elements);
  }
}

export class SurveyPropertyTextEditor extends SurveyPropertyModalEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "text";
  }
  public get isEditable(): boolean {
    return true;
  }
  public getValueText(value: any): string {
    if (!value) return null;
    var str = value;
    if (str.length > 20) {
      str = str.substr(0, 20) + "...";
    }
    return str;
  }
  public onFocus = () => {
    this.options["undoRedoManager"].startTransaction(
      "textarea property editor transaction"
    );
  };
  public onBlur = () => {
    this.options["undoRedoManager"].stopTransaction();
  }
}

export class SurveyPropertyHtmlEditor extends SurveyPropertyTextEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "html";
  }
}

SurveyPropertyEditorFactory.registerEditor("text", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyTextEditor(property);
});
SurveyPropertyEditorFactory.registerEditor("html", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyHtmlEditor(property);
});
SurveyPropertyEditorFactory.registerTypeForCellEditing("text", "string");
SurveyPropertyEditorFactory.registerTypeForCellEditing("html", "string");
