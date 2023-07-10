import { SurveyModel, JsonError, Base } from "survey-core";
import { SurveyJSON5 } from "./json5";

class SurveyForTextWorker extends SurveyModel {
  constructor(jsonObj: any) {
    super();
    this.setDesignMode(true);
    this.fromJSON(jsonObj);
  }
}

export abstract class SurveyTextWorkerError {
  public rowAt: number = -1;
  public columnAt: number = -1;
  public constructor(public at: number, public text: string) {
  }
  public abstract getErrorType(): string;
}

export class SurveyTextWorkerParserError extends SurveyTextWorkerError {
  public getErrorType(): string { return "parseerror"; }
}

export class SurveyTextWorkerJsonError extends SurveyTextWorkerError {
  public elementStart: number;
  public elementEnd: number;
  //private element: Base;
  private errorType: string;
  private propertyName: string;
  public constructor(jsonError: JsonError) {
    super(<number>jsonError.at, jsonError.getFullDescription());
    this.elementStart = <number>jsonError.at;
    this.elementEnd = <number>jsonError.end;
    //this.element = jsonError.element;
    this.errorType = jsonError.type;
    this.propertyName = jsonError["propertyName"];
  }
  public getErrorType(): string { return this.errorType; }
  public correctAt(text: string): void {
    if(this.at < 0) return;
    if(this.propertyName && this.errorType === "unknownproperty") {
      this.at = this.getCorrectAtForUnknowProperty(text);
    }
    if(this.errorType === "duplicatename") {
      this.at = this.getCorrectAtForDuplicateName(text);
    }
  }
  private getCorrectAtForUnknowProperty(text: string): number {
    const newAt = this.getNewIndex(text, this.propertyName);
    return newAt > -1 ? newAt : this.at;
  }
  private getCorrectAtForDuplicateName(text: string): number {
    let newAt = this.getNewIndex(text, "name:");
    if(newAt < 0) {
      newAt = this.getNewIndex(text, "\"name\":");
    }
    return newAt > -1 ? newAt : this.at;

  }
  private getNewIndex(text: string, findText: string): number {
    const index = text.indexOf(findText, this.at);
    if(index > -1 && (this.elementEnd < 0 || index < this.elementEnd)) {
      return index;
    }
    return -1;
  }
}

export class SurveyTextWorker {
  public static newLineChar: string;
  public errors: Array<SurveyTextWorkerError>;
  private surveyValue: SurveyModel;
  private jsonValue: any;

  constructor(public text: string) {
    if (!this.text || this.text.trim() == "") {
      this.text = "{}";
    }
    this.errors = [];
    this.process();
  }
  public get survey(): SurveyModel {
    return this.surveyValue;
  }
  public get isJsonCorrect(): boolean {
    return this.errors.length === 0 && this.surveyValue !== null;
  }
  protected process() {
    try {
      this.jsonValue = new SurveyJSON5(1).parse(this.text);
    } catch (error) {
      this.errors.push(new SurveyTextWorkerParserError(error.at, error.message));
    }
    if (this.jsonValue != null) {
      this.updateJsonPositions(this.jsonValue);
      this.surveyValue = new SurveyForTextWorker(this.jsonValue);
      const jsonErrors = this.surveyValue.jsonErrors;
      if (Array.isArray(jsonErrors)) {
        for (var i = 0; i < jsonErrors.length; i++) {
          const error = new SurveyTextWorkerJsonError(jsonErrors[i]);
          error.correctAt(this.text);
          this.errors.push(error);
        }
      }
      this.getDuplicatedNamesErrors().forEach(error => this.errors.push(error));
    }
    this.setErrorsPositionByChartAt();
  }
  private updateJsonPositions(jsonObj: any) {
    jsonObj["pos"]["self"] = jsonObj;
    for (var key in jsonObj) {
      var obj = jsonObj[key];
      if (obj && obj["pos"]) {
        jsonObj["pos"][key] = obj["pos"];
        this.updateJsonPositions(obj);
      }
    }
  }
  private setErrorsPositionByChartAt() {
    if(this.errors.length === 0) return;
    this.errors.sort((el1, el2) => {
      if (el1.at > el2.at) return 1;
      if (el1.at < el2.at) return -1;
      return 0;
    });
    var position = { row: 0, column: 0 };
    var startAt: number = 0;
    for (var i = 0; i < this.errors.length; i++) {
      let at = this.errors[i].at;
      position = this.getPostionByChartAt(position, startAt, at);
      var error = this.errors[i];
      if (at == error.at) {
        error.columnAt = position.column;
        error.rowAt = position.row;
      }
      startAt = at;
    }
  }
  private getPostionByChartAt(
    startPosition: any,
    startAt: number,
    at: number
  ): any {
    var result = { row: startPosition.row, column: startPosition.column };
    var curChar = startAt;
    while (curChar < at) {
      if (this.text.charAt(curChar) == SurveyTextWorker.newLineChar) {
        result.row++;
        result.column = 0;
      } else {
        result.column++;
      }
      curChar++;
    }
    return result;
  }
  private getDuplicatedNamesErrors(): Array<SurveyTextWorkerJsonError> {
    const res = [];
    this.getDuplicatedElements().forEach(el => {
      const error = new SurveyTextWorkerJsonError(this.createDuplicatedError(el));
      error.correctAt(this.text);
      if(error) res.push(error);
    });

    return res;
  }
  private getDuplicatedElements(): Array<Base> {
    const res = [];
    const names = {};
    this.survey.pages.forEach(p=> this.checkDuplicatedElement(p, names, res));
    this.survey.getAllPanels().forEach(p=> this.checkDuplicatedElement(p, names, res));
    this.survey.getAllQuestions().forEach(q=> this.checkDuplicatedElement(q, names, res));
    return res;
  }
  private checkDuplicatedElement(el: any, names: any, duplicates: Array<Base>): void {
    const name = el["name"];
    if(names[name]) {
      duplicates.push(el);
    } else {
      names[name] = true;
    }
  }
  private createDuplicatedError(el: Base): JsonError {
    const pos = el["pos"];
    if(!pos) return undefined;
    const error = new JsonError("duplicatename", "The name: '" + el["name"] + "' is duplicated.");
    error.at = pos.start;
    error.end = pos.end;
    error.element = el;
    return error;
  }
}
export class JsonDuplicateNameError extends JsonError {
  constructor(el: Base) {
    super("duplicatename", "The name: '" + el["name"] + "' is duplicated.");
    this.element = el;
  }
}
