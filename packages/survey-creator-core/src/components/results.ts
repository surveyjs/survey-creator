import { editorLocalization } from "../editorLocalization";
import * as Survey from "survey-core";
import { Base, property, propertyArray } from "survey-core";

import "./results.scss";

export class SurveyResultsItemModel extends Base {
  @property({ defaultValue: true }) collapsed: boolean;
  @property({ defaultValue: 0 }) lvl: number;
  @property() items: Array<any>;

  constructor(private _data: any, private _lvl: number) {
    super();
    this.items = addCollapsed(_data.data, _lvl + 1);
    this.lvl = _lvl;
  }

  get data(): Array<any> {
    return this.items;
  }

  public toggle = () => {
    this.collapsed = !this.collapsed;
  }
  public get isNode(): boolean {
    return this._data.isNode;
  }
  public get name(): boolean {
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
}

function addCollapsed(items: any[] = [], initLvl: number) {
  return items.filter((item) => !!item).map((item: any) => {
    return new SurveyResultsItemModel(item, initLvl);
  });
}

export class SurveyResultsModel extends Base {
  constructor(private survey: Survey.SurveyModel) {
    super();
    this.resultText = JSON.stringify(survey.data, null, 4);
    var plainData = survey.getPlainData({ includeEmpty: false });
    this.resultData = addCollapsed(plainData, 0);
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

  public selectTableClick(model: SurveyResultsModel) {
    model.resultViewType = "table";
  }
  public selectJsonClick(model: SurveyResultsModel) {
    model.resultViewType = "text";
  }
}
