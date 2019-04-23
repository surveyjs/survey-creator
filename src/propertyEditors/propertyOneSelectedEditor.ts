import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import { SurveyQuestionEditor } from "../questionEditors/questionEditor";

export class SurveyPropertyOneSelectedEditor extends SurveyPropertyItemsEditor {
  public selectedObjectEditor: any;
  public koSelected: any;
  public koAvailableClasses: any;
  private currentObjClassName: string;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    var self = this;
    this.koAvailableClasses = ko.observableArray(this.getAvailableClasses());
    this.selectedObjectEditor = ko.observable(null);
    this.koSelected = ko.observable(null);
    this.koSelected.subscribe(function(newValue) {
      if (!!self.selectedObjectEditor()) {
        self.selectedObjectEditor().apply();
      }
      var editor =
        newValue != null
          ? new SurveyQuestionEditor(newValue.obj, null, null, self.options)
          : null;
      self.selectedObjectEditor(editor);
    });
    this.onDeleteClick = function() {
      self.koItems.remove(self.koSelected());
    };
    this.onAddClick = function(item: any) {
      self.addNewItem(!!item ? item.value : null);
    };
  }
  public get editorTypeTemplate(): string {
    return "oneselected";
  }
  public get editorType(): string {
    return "oneselected";
  }
  protected createOneSelectedItem(obj: any): SurveyPropertyOneSelectedItem {
    return new SurveyPropertyOneSelectedItem(obj);
  }
  protected getObjClassName() {
    return this.currentObjClassName;
  }
  protected getAvailableClasses(): Array<any> {
    return [];
  }
  protected addNewItem(className: string) {
    this.currentObjClassName = className;
    this.AddItem();
    this.koSelected(this.koItems()[this.koItems().length - 1]);
  }
  protected onValueChanged() {
    super.onValueChanged();
    if (this.koSelected) {
      this.koSelected(this.koItems().length > 0 ? this.koItems()[0] : null);
    }
  }
  protected createEditorItem(item: any) {
    var jsonObj = new Survey.JsonObject();
    var newItem = Survey.JsonObject.metaData.createClass(item.getType());
    jsonObj.toObject(item, newItem);
    this.setItemProperties(newItem);
    return this.createOneSelectedItem(newItem);
  }
  protected createNewEditorItem(): any {
    return this.createEditorItem(
      Survey.JsonObject.metaData.createClass(this.getObjClassName())
    );
  }
  protected createItemFromEditorItem(editorItem: any) {
    var item = <SurveyPropertyOneSelectedItem>editorItem;
    delete item.obj["survey"];
    return item.obj;
  }
  private setItemProperties(obj: any) {
    if (this.object) {
      obj["survey"] =
        this.object.getType() == "survey" ? this.object : this.object.survey;
    }
    obj.locOwner = this;
  }
}

export class SurveyPropertyOneSelectedItem {
  public koText: any;
  constructor(public obj: Survey.Base) {
    this.koText = ko.observable(this.getText());
  }
  public getText() {
    return "";
  }
  public objectChanged() {
    this.koText(this.getText());
  }
}
