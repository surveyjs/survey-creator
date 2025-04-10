import { editorLocalization } from "../editorLocalization";
import * as Survey from "survey-core";
import { Base, property, propertyArray } from "survey-core";

import "./results.scss";

export class SurveyResultsItemModel extends Base {
  @property({ defaultValue: true }) collapsed: boolean;
  @property({ defaultValue: 0 }) lvl: number;
  @property() items: Array<any>;

  constructor(private survey: Survey.SurveyModel, private _data: any, private _lvl: number) {
    super();
    this.question = survey.getQuestionByName(this.name);
    this.items = addCollapsed(survey, _data.data, _lvl + 1);
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

function addCollapsed(survey: Survey.SurveyModel, items: any[] = [], initLvl: number) {
  return items.filter((item) => !!item).map((item: any) => {
    return new SurveyResultsItemModel(survey, item, initLvl);
  });
}

export class SurveyResultsModel extends Base {
  constructor(private survey: Survey.SurveyModel) {
    super();
    this.resultText = JSON.stringify(survey.data, null, 4);
    var plainData = survey.getPlainData({ includeEmpty: false, includeValues: true });
    this.resultData = addCollapsed(survey, plainData, 0);
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
