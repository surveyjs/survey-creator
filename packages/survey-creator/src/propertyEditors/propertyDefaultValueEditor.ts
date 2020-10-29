import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyModalEditor } from "./propertyModalEditor";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions
} from "./propertyEditorBase";
import { editorLocalization } from "../editorLocalization";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { EditableObject } from "./editableObject";

export class SurveyPropertyDefaultValueEditor extends SurveyPropertyModalEditor {
  public static defaultQuestionName = "question";
  public static createJsonFromQuestion(obj: any, readOnly: boolean): any {
    var qjson = new Survey.JsonObject().toJsonObject(obj);
    qjson.name = SurveyPropertyDefaultValueEditor.defaultQuestionName;
    qjson.type = obj.getType();
    if (qjson.type == "expression") {
      qjson.type = "text";
    }
    qjson.titleLocation = "hidden";
    //qjson.showClearButton = true;
    qjson.readOnly = readOnly;
    return qjson;
  }
  private static deleteConditionProperties(json: any) {
    delete json["visible"];
    delete json["visibleIf"];
    delete json["enable"];
    delete json["enableIf"];
    delete json["valueName"];
  }
  public static updateQuestionJson(questionJson: any) {
    questionJson.storeOthersAsComment = false;
    SurveyPropertyDefaultValueEditor.deleteConditionProperties(questionJson);
    if (!!questionJson.choices) {
      for (var i = 0; i < questionJson.choices.length; i++) {
        SurveyPropertyDefaultValueEditor.deleteConditionProperties(
          questionJson.choices[i]
        );
      }
    }
  }
  public static createSurveyFromJsonQuestion(
    questionJson: any,
    options: ISurveyObjectEditorOptions,
    surveyName: string
  ): Survey.Survey {
    var json = {
      questions: [],
      showNavigationButtons: false,
      showQuestionNumbers: "off",
      textUpdateMode: "onTyping"
    };
    this.updateQuestionJson(questionJson);
    json.questions.push(questionJson);
    var survey = !!options
      ? options.createSurvey(json, surveyName)
      : new Survey.Survey(json);
    SurveyPropertyDefaultValueEditor.updateSurveyStyle(survey);
    return survey;
  }
  public static updateSurveyStyle(survey: Survey.Survey) {
    survey.css.body += " svd-property-editor-survey";
    survey.css.page.root += " svd-property-editor-survey-page";
    if (!!survey.css.question) {
      survey.css.question.mainRoot += " svd-survey-nopadding";
    }
  }
  public survey: Survey.Survey;
  koSurvey: any;
  protected currentObject: any;

  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.koSurvey = ko.observable(
      !!this.options && this.options.createSurvey({}, "defaultValueEditor")
    );
  }
  public resetText(): string {
    return editorLocalization.getString("pe.reset");
  }
  public refreshText(): string {
    return editorLocalization.getString("pe.refresh");
  }
  public resetValue(model: SurveyPropertyDefaultValueEditor) {
    model
      .koSurvey()
      .clearValue(SurveyPropertyDefaultValueEditor.defaultQuestionName);
  }
  public refreshSurvey(model: SurveyPropertyDefaultValueEditor) {
    model.createSurvey();
  }
  public getValueText(value: any): string {
    if (!value) return editorLocalization.getString("pe.empty");
    return JSON.stringify(value);
  }
  public beforeShowCore() {
    super.beforeShowCore();
    this.createSurvey();
  }
  public get editorType(): string {
    return "default-value";
  }
  protected createSurvey() {
    var json = this.buildQuestionJson();
    if (!!json) {
      this.survey = SurveyPropertyDefaultValueEditor.createSurveyFromJsonQuestion(
        json,
        this.options,
        "defaultValueEditor"
      );

      this.survey.setValue(
        SurveyPropertyDefaultValueEditor.defaultQuestionName,
        this.getSurveyInitialValue()
      );
      var self = this;
      this.survey.onValueChanged.add(function(sender: any, options: any) {
        self.koValue(self.getSurveyResult());
      });
    } else {
      this.survey = null;
    }
    this.koSurvey(this.survey);
  }
  protected buildQuestionJson(): any {
    this.currentObject = this.getObject();
    if (!this.currentObject) return null;
    return SurveyPropertyDefaultValueEditor.createJsonFromQuestion(
      this.currentObject,
      this.readOnly()
    );
  }
  protected getObject(): any {
    return this.object;
  }
  protected getSurveyInitialValue(): any {
    return this.koValue();
  }
  protected getSurveyResult(): any {
    return this.survey.getValue(
      SurveyPropertyDefaultValueEditor.defaultQuestionName
    );
  }
}

export class SurveyPropertyTriggerValueEditor extends SurveyPropertyDefaultValueEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorTypeTemplate(): string {
    return "default-value";
  }
  public updateDynamicProperties() {
    super.updateDynamicProperties();
    if (this.currentObject != this.getObject()) {
      this.createSurvey();
    }
  }
  protected getObject(): any {
    var survey = EditableObject.getSurvey(this.object);
    if (!survey || !this.property) return null;
    var propName = this.getDependOnPropName();
    if (!propName) return null;
    var questionName = this.object[propName];
    return !!questionName ? survey.getQuestionByName(questionName) : null;
  }
  private getDependOnPropName(): string {
    var properties = Survey.Serializer.getPropertiesByObj(this.object);
    for (var i = 0; i < properties.length; i++) {
      var dps = properties[i].getDependedProperties();
      if (!!dps && dps.indexOf(this.property.name) > -1)
        return properties[i].name;
    }
    return "";
  }
}

export class SurveyPropertyDefaultRowValueEditorBase extends SurveyPropertyDefaultValueEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorTypeTemplate(): string {
    return "default-value";
  }
  public get editorType(): string {
    return "triggervalue";
  }
  protected getSurveyInitialValue(): any {
    var res = this.koValue();
    if (!res) return res;
    if (!Array.isArray(res)) {
      res = [res];
    }
    return res;
  }
  protected getSurveyResult(): any {
    var res = super.getSurveyResult();
    if (res && Array.isArray(res)) {
      if (res.length == 0) return null;
      return res[0];
    }
    return res;
  }
}

export class SurveyPropertyDefaultRowValueEditor extends SurveyPropertyDefaultRowValueEditorBase {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  protected buildQuestionJson(): any {
    var qjson = super.buildQuestionJson();
    qjson.rowCount = 1;
    qjson.minRowCount = 1;
    qjson.maxRowCount = 1;
    qjson.columnsLocation = "vertical";
    return qjson;
  }
  public get editorType(): string {
    return "rowvalue";
  }
}

export class SurveyPropertyDefaultPanelValueEditor extends SurveyPropertyDefaultRowValueEditorBase {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  protected buildQuestionJson(): any {
    var qjson = super.buildQuestionJson();
    qjson.panelCount = 1;
    qjson.minPanelCount = 1;
    qjson.maxPanelCount = 1;
    return qjson;
  }
  public get editorType(): string {
    return "panelvalue";
  }
}

export class SurveyPropertySetEditor extends SurveyPropertyDefaultValueEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "set";
  }
  public get editorTypeTemplate(): string {
    return "default-value";
  }
  protected getSurveyInitialValue(): any {
    var res = this.koValue();
    if (!res) return res;
    if (!Array.isArray(res)) {
      res = [res];
    }
    return res;
  }
  protected buildQuestionJson(): any {
    var question = new Survey.QuestionCheckbox("q1");
    var hasTagbox = !!Survey.Serializer.findClass("tagbox");
    question.hasSelectAll = !hasTagbox;
    if (!!this.property) {
      question.choices = this.getPropertyChoices();
    }
    var json = SurveyPropertyDefaultValueEditor.createJsonFromQuestion(
      question,
      this.readOnly()
    );
    if (hasTagbox) {
      json.type = "tagbox";
    }
    return json;
  }
  private setChoices(choices: Array<any>) {
    var survey = this.koSurvey();
    if (!survey || survey.getAllQuestions().length > 1) return;
    survey.getAllQuestions()[0].choices = choices;
  }
  private getPropertyChoices(): Array<any> {
    if (!this.property) return [];
    var self = this;
    return this.property.getChoices(this.object, function(choices: any) {
      self.setChoices(choices);
    });
  }
}

SurveyPropertyEditorFactory.registerEditor("value", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyDefaultValueEditor(property);
});

SurveyPropertyEditorFactory.registerEditor("triggervalue", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyTriggerValueEditor(property);
});

SurveyPropertyEditorFactory.registerEditor("rowvalue", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyDefaultRowValueEditor(property);
});

SurveyPropertyEditorFactory.registerEditor("panelvalue", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyDefaultPanelValueEditor(property);
});

SurveyPropertyEditorFactory.registerEditor("set", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertySetEditor(property);
});
