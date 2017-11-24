import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyQuestionEditor } from "../questionEditors/questionEditor";
import { SurveyPropertyItemValuesEditor } from "./propertyItemValuesEditor";
import { editorLocalization } from "../editorLocalization";

export class SurveyNestedPropertyEditor extends SurveyPropertyItemsEditor {
  koEditItem: any;
  koIsList: any;
  onEditItemClick: any;
  onCancelEditItemClick: any;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    var self = this;
    this.koEditItem = ko.observable(null);
    this.koIsList = ko.observable(true);
    this.koEditItem.subscribe(function(newValue) {
      self.koIsList(self.koEditItem() == null);
    });
    this.onEditItemClick = function(item) {
      self.koEditItem(item);
    };
    this.onCancelEditItemClick = function() {
      var editItem = self.koEditItem();
      if (editItem.itemEditor && editItem.itemEditor.hasError()) return;
      self.koEditItem(null);
    };
  }
  protected checkForErrors(): boolean {
    var result = false;
    for (var i = 0; i < this.koItems().length; i++) {
      result = result || this.koItems()[i].hasError();
    }
    return result;
  }
  protected onBeforeApply() {
    super.onBeforeApply();
    var internalItems = this.koItems();
    for (var i = 0; i < internalItems.length; i++) {
      internalItems[i].apply();
    }
  }
}

export class SurveyNestedPropertyEditorItem {
  private itemEditorValue: SurveyQuestionEditor;
  constructor() {}
  public get itemEditor(): SurveyQuestionEditor {
    if (!this.itemEditorValue)
      this.itemEditorValue = this.createSurveyQuestionEditor();
    return this.itemEditorValue;
  }
  public hasError(): boolean {
    if (this.itemEditorValue && this.itemEditorValue.hasError()) return true;
    return false;
  }
  protected createSurveyQuestionEditor() {
    return null;
  }
  public apply() {
    if (this.itemEditorValue) this.itemEditorValue.apply();
  }
}
