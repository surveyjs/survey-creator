import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyModalEditor } from "./propertyModalEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { editorLocalization } from "../editorLocalization";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";

export class SurveyPropertyResultfullEditor extends SurveyPropertyModalEditor {
  koItems: any;
  public survey: Survey.Survey;
  public question: Survey.QuestionDropdown;
  private items: Array<SurveyPropertyResultfullEditorItem> = [];

  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.koItems = ko.observableArray();
    this.createSurvey();
  }
  public get editorType(): string {
    return "restfull";
  }
  public get restfullValue() {
    if (this.editingObject) return this.editingObject[this.property.name];
    if (this.editingValue) return this.editingValue;
    return null;
  }
  public getValueText(value: any): string {
    if (!value || !value.url) return editorLocalization.getString("pe.empty");
    var str = value.url;
    if (str.length > 20) {
      str = str.substr(0, 20) + "...";
    }
    return str;
  }
  private addItem(propName: string, val: any) {
    var self = this;
    this.items.push(
      new SurveyPropertyResultfullEditorItem(
        propName,
        val ? val[propName] : "",
        function (item) {
          self.onItemValueChanged(item);
        }
      )
    );
  }
  private onItemValueChanged(item: SurveyPropertyResultfullEditorItem) {
    this.question.choicesByUrl[item.name] = item.koValue();
    this.run();
  }
  protected onValueChanged() {
    var val = this.restfullValue;
    this.items = [];
    this.addItem("url", val);
    this.addItem("path", val);
    this.addItem("valueName", val);
    this.addItem("titleName", val);
    if (val && val["getCustomPropertiesNames"]) {
      var customProperties = val["getCustomPropertiesNames"]();
      for (var i = 0; i < customProperties.length; i++) {
        var propName = customProperties[i];
        if (propName === "visibleIfName") continue; //TODO remove later
        this.addItem(propName, val);
      }
    }
    this.koItems(this.items);
  }
  protected onBeforeApply() {
    var val = new Survey.ChoicesRestfull();
    val["owner"] = this.editingObject;
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];
      val[item.name] = item.koValue();
    }
    this.setValueCore(val);
  }
  private run() {
    this.question.choicesByUrl.run();
  }
  private createSurvey() {
    this.survey = !!this.options ? this.options.createSurvey({}, "restfulEditor") : new Survey.Survey();
    this.survey.showNavigationButtons = false;
    this.survey.showQuestionNumbers = "off";
    var page = this.survey.addNewPage("page1");
    this.question = <Survey.QuestionDropdown>page.addNewQuestion(
      "dropdown",
      "q1"
    );
    this.question.title = editorLocalization.getString("pe.testService");
    this.question.choices = [];
  }
}

export class SurveyPropertyResultfullEditorItem {
  public koValue: any;
  private isSetttingValue: boolean = false;
  constructor(
    public name: string,
    val: string,
    public onValueChanged: (item: SurveyPropertyResultfullEditorItem) => any
  ) {
    this.koValue = ko.observable(val ? val : "");
    var self = this;
    this.koValue.subscribe(function (newValue) {
      if (!self.isSetttingValue) {
        self.onValueChanged(self);
      }
    });
  }
  public setValue(val: string) {
    this.isSetttingValue = true;
    this.koValue(val);
    this.isSetttingValue = false;
  }
}

SurveyPropertyEditorFactory.registerEditor("restfull", function (
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyResultfullEditor(property);
});
