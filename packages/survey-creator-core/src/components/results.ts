import { editorLocalization } from "../editorLocalization";
import * as Survey from "survey-core";
import { Base, property, propertyArray } from "survey-core";

import "./results.scss";

export class SurveyResultsItemModel extends Base {
  @property({ defaultValue: true }) collapsed: boolean;
  @property({ defaultValue: 0 }) lvl: number;
  @property() items: Array<any>;

  // questions: what SurveyResultsModel passes, the questions this row's level is resolved among, by id.
  constructor(private survey: Survey.SurveyModel, private _data: any, private _lvl: number, questions?: Map<any, Survey.Question>) {
    super();
    if (!questions) {
      // Built from plain data without ids: the row looks its question up by name, as it always did.
      this.question = typeof this.name === "string" ? survey.getQuestionByName(this.name) : null;
    } else {
      this.question = getRowQuestion(survey, _data, questions, _lvl === 0);
      questions = getSubRowQuestions(_data, this.question, questions, _lvl === 0);
    }
    this.items = addCollapsed(survey, _data.data, _lvl + 1, questions);
    this.lvl = _lvl;
  }

  public question: Survey.Question;

  get data(): Array<any> {
    return this.items;
  }

  public toggle = () => {
    this.collapsed = !this.collapsed;
  };
  public get isNode(): boolean {
    return this._data.isNode;
  }
  public get name(): string {
    return this._data.name;
  }
  public get title(): string {
    return this._data.title;
  }
  public get value(): any {
    return this._data.value;
  }
  public get displayValue(): string {
    return this._data.displayValue;
  }
  public getString(data: any): string {
    return this._data.getString(data);
  }

  private markerWidth: number = 16;
  public get markerMargin(): string {
    return (1.5 + this.lvl) * this.markerWidth + "px";
  }
  public get textMargin(): string {
    return (2.75 + this.lvl) * this.markerWidth + "px";
  }
}

function addCollapsed(survey: Survey.SurveyModel, items: any[] = [], initLvl: number, questions: Map<any, Survey.Question>) {
  return items.filter((item) => !!item).map((item: any) => {
    return new SurveyResultsItemModel(survey, item, initLvl, questions);
  });
}

// A row finds its question by the id the plain data carries (see SurveyResultsModel), not by its name: in a nesting
// mode a bare name finds only the survey's own elements, and a sub-row's name (a matrix row, a cell, an index) can be
// another question's name.
function getQuestionsById(questions: Array<Survey.Question>): Map<any, Survey.Question> {
  const res = new Map<any, Survey.Question>();
  questions.forEach((q) => res.set(q.id, q));
  return res;
}
// A choice carries its ItemValue's id and a matrix row its answered column's, which is the value, and a value can
// equal a question's id: the names must match too. A comment row has no id; a matrix row (srow_) and a dynamic panel's
// panel (sp_) have ids no question has.
function getRowQuestion(survey: Survey.SurveyModel, data: any, questions: Map<any, Survey.Question>, isTopLevel: boolean): Survey.Question {
  if (data.id === undefined) {
    // A top-level row without an id is an extra data key. A question that survey.getAllQuestions() does not list, such
    // as one in a choice's panel, can store it: it is that question only if it stores its value under the key.
    if (!isTopLevel || typeof data.name !== "string") return null;
    const question = survey.getQuestionByName(data.name);
    return !!question && question.getValueName() === data.name ? question : null;
  }
  const question = questions.get(data.id);
  return !!question && question.name === data.name ? question : null;
}
// The questions a row's sub-rows are resolved among: those nested in the top-level row's question. Only the questions
// listed in the plain data are walked, and getPlainData has built their rows and panels already: a survey-wide walk
// (getAllQuestions with includeNested) renders every page, and that writes the default rows of a matrix on a page that
// was never shown into the data.
function getSubRowQuestions(data: any, question: Survey.Question, questions: Map<any, Survey.Question>, isTopLevel: boolean): Map<any, Survey.Question> {
  if (!Array.isArray(data.data) || data.data.length === 0) return questions;
  // A record without an object (a paged matrix's record off its page) has no id. Its cell questions are built for
  // getPlainData without a survey and disposed: their ids come from another generator and can equal any question's.
  if (data.id === undefined) return new Map<any, Survey.Question>();
  if (!isTopLevel) return questions;
  return getQuestionsById(!!question ? question.getNestedQuestions(false, true, true) : []);
}

export class SurveyResultsModel extends Base {
  constructor(private survey: Survey.SurveyModel) {
    super();
    this.resultText = JSON.stringify(survey.data, null, 4);
    // The "id" calculation copies each question's id onto its item: getRowQuestion reads it, the renderers do not.
    var plainData = survey.getPlainData({ includeEmpty: false, includeValues: true, calculations: [{ propertyName: "id" }] });
    this.resultData = addCollapsed(survey, plainData, 0, getQuestionsById(survey.getAllQuestions()));
  }

  @property({ defaultValue: "table" }) resultViewType: string;
  @property({ defaultValue: "" }) resultText: string;
  @propertyArray() resultData: Array<any>;

  public getLocString(name: string) {
    return editorLocalization.getString(name);
  }
  public get surveyResultsText() {
    return this.getLocString("ed.surveyResults");
  }
  public get surveyResultsTableText() {
    return this.getLocString("ed.surveyResultsTable");
  }
  public get surveyResultsJsonText() {
    return this.getLocString("ed.surveyResultsJson");
  }
  public get resultsTitle() {
    return this.getLocString("ed.resultsTitle");
  }
  public get resultsName() {
    return this.getLocString("ed.resultsName");
  }
  public get resultsValue() {
    return this.getLocString("ed.resultsValue");
  }
  public get resultsDisplayValue() {
    return this.getLocString("ed.resultsDisplayValue");
  }
  public get isTableSelected() {
    return this.resultViewType === "table";
  }
  public get isJsonSelected() {
    return this.resultViewType === "text";
  }

  public selectTableClick = () => {
    this.resultViewType = "table";
  };
  public selectJsonClick = () => {
    this.resultViewType = "text";
  };
}
