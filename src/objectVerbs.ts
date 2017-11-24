import * as ko from "knockout";
import { editorLocalization } from "./editorLocalization";
import { SurveyHelper, ObjType } from "./surveyHelper";
import * as Survey from "survey-knockout";

export class SurveyVerbs {
  private surveyValue: Survey.Survey;
  private objValue: any;
  private choicesClasses: Array<string>;
  koVerbs: any;
  koHasVerbs: any;
  constructor(public onModifiedCallback: () => any) {
    this.koVerbs = ko.observableArray();
    this.koHasVerbs = ko.observable();
    var classes = Survey.JsonObject.metaData.getChildrenClasses(
      "selectbase",
      true
    );
    this.choicesClasses = [];
    for (var i = 0; i < classes.length; i++) {
      this.choicesClasses.push(classes[i].name);
    }
  }
  public get survey(): Survey.Survey {
    return this.surveyValue;
  }
  public set survey(value: Survey.Survey) {
    if (this.survey == value) return;
    this.surveyValue = value;
  }
  public get obj(): any {
    return this.objValue;
  }
  public set obj(value: any) {
    if (this.objValue == value) return;
    this.objValue = value;
    this.buildVerbs();
  }
  private buildVerbs() {
    var array = [];
    var objType = SurveyHelper.getObjectType(this.obj);
    if (objType == ObjType.Question) {
      var question = <Survey.QuestionBase>this.obj;
      if (
        this.survey.pages.length > 1 &&
        this.survey.getPageByQuestion(question)
      ) {
        array.push(
          new SurveyVerbChangePageItem(
            this.survey,
            question,
            this.onModifiedCallback
          )
        );
      }
    }
    this.koVerbs(array);
    this.koHasVerbs(array.length > 0);
  }
}
export class SurveyVerbItem {
  koItems: any;
  koSelectedItem: any;
  constructor(
    public survey: Survey.Survey,
    public question: Survey.QuestionBase,
    public onModifiedCallback: () => any
  ) {
    this.koItems = ko.observableArray();
    this.koSelectedItem = ko.observable();
  }
  public get text(): string {
    return "";
  }
}
export class SurveyVerbChangePageItem extends SurveyVerbItem {
  private prevPage: Survey.Page;
  constructor(
    public survey: Survey.Survey,
    public question: Survey.QuestionBase,
    public onModifiedCallback: () => any
  ) {
    super(survey, question, onModifiedCallback);
    this.prevPage = <Survey.Page>this.survey.getPageByQuestion(question);
    if (!this.prevPage) return;
    var array = [];
    for (var i = 0; i < this.survey.pages.length; i++) {
      var page = this.survey.pages[i];
      array.push({ value: page, text: SurveyHelper.getObjectName(page) });
    }
    this.koItems(array);
    this.prevPage = <Survey.Page>this.survey.getPageByQuestion(question);
    this.koSelectedItem(this.prevPage);
    var self = this;
    this.koSelectedItem.subscribe(function(newValue) {
      self.changePage(newValue);
    });
  }
  public get text(): string {
    return editorLocalization.getString("pe.verbChangePage");
  }
  private changePage(newPage: Survey.Page) {
    if (!newPage || !newPage || newPage == this.prevPage) return;
    this.prevPage.removeQuestion(this.question);
    newPage.addQuestion(this.question);
    if (this.onModifiedCallback) this.onModifiedCallback();
  }
}
