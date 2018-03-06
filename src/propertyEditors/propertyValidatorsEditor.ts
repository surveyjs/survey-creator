import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyObjectEditor } from "../objectEditor";
import { editorLocalization } from "../editorLocalization";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";

export class SurveyPropertyValidatorsEditor extends SurveyPropertyItemsEditor {
  private selectedObjectEditor: SurveyObjectEditor;
  public koSelected: any;
  public koValidators: any;
  public availableValidators: Array<string> = [];
  private validatorClasses: Array<Survey.JsonMetadataClass> = [];
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    var self = this;
    this.selectedObjectEditor = new SurveyObjectEditor();
    this.selectedObjectEditor.onPropertyValueChanged.add((sender, options) => {
      self.onPropertyValueChanged(
        options.property,
        options.object,
        options.newValue
      );
    });
    this.koSelected = ko.observable(null);
    this.koSelected.subscribe(function(newValue) {
      self.selectedObjectEditor.selectedObject =
        newValue != null ? newValue.validator : null;
    });
    this.validatorClasses = Survey.JsonObject.metaData.getChildrenClasses(
      "surveyvalidator",
      true
    );
    this.availableValidators = this.getAvailableValidators();
    this.koValidators = ko.observableArray(this.getLocalizedValidators());
    this.onDeleteClick = function() {
      self.koItems.remove(self.koSelected());
    };
    this.onAddClick = function(item) {
      self.addItem(item.value);
    };
  }
  public get editorType(): string {
    return "validators";
  }
  protected onValueChanged() {
    super.onValueChanged();
    if (this.koSelected) {
      this.koSelected(this.koItems().length > 0 ? this.koItems()[0] : null);
    }
  }
  protected createEditorItem(item: any) {
    var jsonObj = new Survey.JsonObject();
    var validator = Survey.JsonObject.metaData.createClass(item.getType());
    jsonObj.toObject(item, validator);
    validator.locOwner = this;
    return new SurveyPropertyValidatorItem(validator);
  }
  protected createItemFromEditorItem(editorItem: any) {
    var item = <SurveyPropertyValidatorItem>editorItem;
    return item.validator;
  }
  private addItem(validatorType: string) {
    var newValidator = new SurveyPropertyValidatorItem(
      Survey.JsonObject.metaData.createClass(validatorType)
    );
    newValidator["locOwner"] = this;
    this.koItems.push(newValidator);
    this.koSelected(newValidator);
  }
  private getLocalizedValidators(): Array<any> {
    var res = [];
    for (var i = 0; i < this.availableValidators.length; i++) {
      var name = this.availableValidators[i];
      res.push({
        value: name,
        text: editorLocalization.getValidatorName(name)
      });
    }
    return res;
  }
  private getAvailableValidators(): Array<string> {
    var res = [];
    for (var i = 0; i < this.validatorClasses.length; i++) {
      res.push(this.validatorClasses[i].name);
    }
    return res;
  }
  private onPropertyValueChanged(
    property: Survey.JsonObjectProperty,
    obj: any,
    newValue: any
  ) {
    if (this.koSelected() == null) return;
    this.koSelected().validator[property.name] = newValue;
  }
}

export class SurveyPropertyValidatorItem {
  public text: string;
  constructor(public validator: Survey.SurveyValidator) {
    this.text = editorLocalization.getValidatorName(validator.getType());
  }
}

SurveyPropertyEditorFactory.registerEditor("validators", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyValidatorsEditor(property);
});
