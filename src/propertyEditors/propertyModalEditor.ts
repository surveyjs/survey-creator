import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { editorLocalization } from "../editorLocalization";
import { focusFirstControl } from "../utils/utils";
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
          ["format"](editorLocalization.getPropertyName(this.property.name))
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
      self.apply();
      if (!self.koHasError()) self.onHideModal();
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
        focus: false
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
  public setup() {
    super.setup();
    this.beforeShow();
  }
  public get isModal(): boolean {
    return true;
  }
  public get isBeforeShowCalled(): boolean {
    return this.isBeforeShowCalledValue;
  }
  public beforeShow() {
    this.isBeforeShowCalledValue = true;
    this.updateValue();
  }
  protected getOrigionalValue(): any {
    if (!!this.modalEditableObject) {
      return this.modalEditableObject.editableObj[this.property.name];
    }
    return super.getOrigionalValue();
  }
  protected performApply() {
    if (!!this.modalEditableObject) {
      this.modalEditableObject.apply(this.property.name);
    } else {
      super.performApply();
    }
  }
  protected beforeShowModal() {
    this.modalEditableObject = null;
    if (!!this.origionalValue) {
      this.modalEditableObject = new EditableObject(this.object);
    }
    this.koIsShowingModal(true);
  }
  protected beforeCloseModal() {
    this.modalEditableObject = null;
    this.isBeforeShowCalledValue = false;
    this.koIsShowingModal(false);
  }
  protected onOptionsChanged() {
    this.koShowApplyButton = ko.observable(
      !this.options || this.options.showApplyButtonInEditors
    );
  }
  public setObject(value: any) {
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
      var el = this.GetFirstNonTextElement(elements);
      var tEl = elements[0];
      if (tEl.nodeName == "#text") tEl.data = "";
      tEl = elements[elements.length - 1];
      if (tEl.nodeName == "#text") tEl.data = "";
      customWidget.afterRender(this, el);
    }
    focusFirstControl(elements);
  }
  private GetFirstNonTextElement(elements: any) {
    if (!elements || !elements.length) return;
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].nodeName != "#text" && elements[i].nodeName != "#comment")
        return elements[i];
    }
    return null;
  }
}

export class SurveyPropertyTextEditor extends SurveyPropertyModalEditor {
  public koTextValue: any;

  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.koTextValue = ko.observable();
    var self = this;
    this.koTextValue.subscribe(function(newValue) {
      self.onkoTextValueChanged(newValue);
    });
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
  protected onkoTextValueChanged(newValue) {}
  protected onValueChanged() {
    this.koTextValue(this.editingValue);
  }
  protected onBeforeApply() {
    this.setValueCore(this.koTextValue());
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
