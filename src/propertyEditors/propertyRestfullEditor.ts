import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyModalEditor } from "./propertyModalEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { editorLocalization } from "../editorLocalization";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { SurveyElementEditorContent } from "../questionEditors/questionEditor";

export class SurveyPropertyResultfullEditor extends SurveyPropertyModalEditor {
  koContentEditor: any;
  public survey: Survey.Survey;
  private question: Survey.QuestionDropdown;

  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.koContentEditor = ko.observable(null);
    this.createSurvey();
  }
  public get editorType(): string {
    return "restfull";
  }
  public beforeShow() {
    super.beforeShow();
    this.setTestQuestionProperties();
    var contentEditor = new SurveyElementEditorContent(
      this.origionalValue,
      "",
      this.options
    );
    contentEditor.onPropertyChanged = (prop: Survey.JsonObjectProperty) => {
      this.changeChoicesByUrlProp(prop.name);
      this.options.onPropertyValueChanged(
        this.property,
        this.object,
        this.object[prop.name]
      );
    };
    this.koContentEditor(contentEditor);
  }
  public get contentEditor(): SurveyElementEditorContent {
    return this.koContentEditor();
  }
  public getValueText(value: any): string {
    if (!value || !value.url) return editorLocalization.getString("pe.empty");
    var str = value.url;
    if (str.length > 20) {
      str = str.substr(0, 20) + "...";
    }
    return str;
  }
  private changeChoicesByUrlProp(propName: string) {
    if (!this.question || !this.origionalValue) return;
    this.question.choicesByUrl[propName] = this.origionalValue[propName];
    this.question.choicesByUrl.run();
  }
  private setTestQuestionProperties() {
    if (!this.question || !this.origionalValue) return;
    var json = this.origionalValue.toJSON();
    new Survey.JsonObject().toObject(json, this.question.choicesByUrl);
  }
  private createSurvey() {
    this.survey = !!this.options
      ? this.options.createSurvey({}, "restfulEditor")
      : new Survey.Survey();
    this.survey.showNavigationButtons = false;
    this.survey.showQuestionNumbers = "off";
    var page = this.survey.addNewPage("page1");
    this.question = <Survey.QuestionDropdown>(
      page.addNewQuestion("dropdown", "q1")
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
    this.koValue.subscribe(function(newValue) {
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

SurveyPropertyEditorFactory.registerEditor("restfull", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyResultfullEditor(property);
});
