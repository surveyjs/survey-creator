import { Question, Base } from "survey-core";
import { PropertyEditorSetupValue } from "./index";
import { ISurveyCreatorOptions } from "../settings";

export class DefaultValueEditor extends PropertyEditorSetupValue {
  constructor(
    public editQuestion: Question,
    protected propertyName: string,
    options: ISurveyCreatorOptions = null
  ) {
    super(options, false);
    this.setupSurvey();
    this.question.value = this.getQuestionValue();
  }
  public get question(): Question {
    return this.editSurvey.getQuestionByName("question");
  }
  protected getSurveyJSON(): any {
    return {
      elements: [this.getQuestionJSON()],
    };
  }
  protected getQuestionJSON(): any {
    var json = this.editQuestion.toJSON();
    json.name = "question";
    json.type = this.editQuestion.getType();
    if (json.type == "expression") {
      json.type = "text";
    }
    json.titleLocation = "hidden";
    delete json["cellType"];
    delete json["width"];
    delete json["minWidth"];
    delete json["maxWidth"];
    return json;
  }
  protected getQuestionValue() {
    return this.editQuestion[this.propertyName];
  }
  protected getEditValue() {
    return this.question.value;
  }
  protected getSurveyCreationReason(): string {
    return "default-value";
  }
  public apply() {
    this.editQuestion[this.propertyName] = this.getEditValue();
  }
}

export class DefaultArrayValueEditor extends DefaultValueEditor {
  constructor(
    public editQuestion: Question,
    protected propertyName: string,
    options: ISurveyCreatorOptions = null
  ) {
    super(editQuestion, propertyName, options);
  }
  protected getQuestionValue(): any {
    var res = super.getQuestionValue();
    if (!res) return res;
    if (!Array.isArray(res)) {
      res = [res];
    }
    return res;
  }
  protected getEditValue(): any {
    var res = super.getEditValue();
    if (res && Array.isArray(res)) {
      if (res.length == 0) return null;
      return res[0];
    }
    return res;
  }
}
export class DefaultMatrixRowValueEditor extends DefaultArrayValueEditor {
  constructor(
    public editQuestion: Question,
    protected propertyName: string,
    options: ISurveyCreatorOptions = null
  ) {
    super(editQuestion, propertyName, options);
  }
  protected getQuestionJSON(): any {
    var json = super.getQuestionJSON();
    json.type = "matrixdynamic";
    json.rowCount = 1;
    json.minRowCount = 1;
    json.maxRowCount = 1;
    json.columnsLocation = "vertical";
    return json;
  }
}
export class DefaultPanelDynamicPanelValueEditor extends DefaultArrayValueEditor {
  constructor(
    public editQuestion: Question,
    protected propertyName: string,
    options: ISurveyCreatorOptions = null
  ) {
    super(editQuestion, propertyName, options);
  }
  protected getQuestionJSON(): any {
    var json = super.getQuestionJSON();
    json.panelCount = 1;
    json.minPanelCount = 1;
    json.maxPanelCount = 1;
    return json;
  }
}
export class TriggerValueEditor extends DefaultValueEditor {
  constructor(
    public editQuestion: Question,
    public editObj: Base,
    protected propertyName: string,
    options: ISurveyCreatorOptions = null
  ) {
    super(editQuestion, propertyName, options);
    this.question.value = this.getQuestionValue();
  }
  protected getQuestionValue(): any {
    return !!this.editObj ? this.editObj[this.propertyName] : null;
  }
  public apply() {
    this.editObj[this.propertyName] = this.question.value;
  }
}
