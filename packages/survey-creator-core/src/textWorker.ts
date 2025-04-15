import { SurveyModel, JsonError, Base, ISurveyElement, ISurveyData, ISurvey } from "survey-core";
import { SurveyHelper } from "./survey-helper";
import { SurveyJSON5 } from "./json5";
import { settings } from "./creator-settings";

class SurveyForTextWorker extends SurveyModel {
  private isRunEndLoadingFromJson: boolean;
  constructor(jsonObj: any) {
    super();
    this.setDesignMode(true);
    this.fromJSON(jsonObj);
  }
  //Run endLoading before fixing issues with unique names
  public runEndLoadingFromJson(): void {
    if (this.isRunEndLoadingFromJson) return;
    this.isRunEndLoadingFromJson = true;
    super.endLoadingFromJson();
  }
  //Do nothing on end loading
  endLoadingFromJson(): void {}
  getSurveyData(): ISurveyData { return null; }
}

class SurveyTextWorkerJsonErrorFixerBase {
  public getCorrectAt(text: string, at: number, end: number): number {
    return at;
  }
  public get isFixable(): boolean { return false; }
  public fixError(text: string, start: number, end: number): string { return text; }
}

export abstract class SurveyTextWorkerError {
  public rowAt: number = -1;
  public columnAt: number = -1;
  private fixerValue: SurveyTextWorkerJsonErrorFixerBase;
  public constructor(public at: number, public text: string) {
  }
  public abstract getErrorType(): string;
  public get isFixable(): boolean { return this.fixer.isFixable; }
  public fixError(text: string): string { return text; }
  protected get fixer(): SurveyTextWorkerJsonErrorFixerBase {
    if (!this.fixerValue) {
      this.fixerValue = this.createFixer();
    }
    return this.fixerValue;
  }
  protected createFixer(): SurveyTextWorkerJsonErrorFixerBase {
    return new SurveyTextWorkerJsonErrorFixerBase();
  }
}

export class SurveyTextWorkerParserError extends SurveyTextWorkerError {
  public getErrorType(): string { return "parseerror"; }
}

class SurveyTextWorkerJsonErrorFixer extends SurveyTextWorkerJsonErrorFixerBase {
  public constructor(protected element: Base, protected jsonObj: any) {
    super();
  }
  protected getNewIndex(text: string, findText: string, at: number, end: number): number {
    const index = text.indexOf(findText, at);
    if (index > -1 && (end < 0 || index < end)) {
      return index;
    }
    return -1;
  }
  public fixError(text: string, start: number, end: number): string {
    const content = text.substring(start, end + 1);
    const json = JSON.parse(content);
    this.updatedJsonObjOnFix(json);
    return this.replaceJson(text, start, end, json);
  }
  protected updatedJsonObjOnFix(json: any): void {
  }
  protected replaceJson(text: string, start: number, end: number, json: any): string {
    let newContent = JSON.stringify(json, null, settings.jsonEditor.indentation);
    newContent = this.addLeftIndentIntoContent(text, newContent, start - 1);
    return text.substring(0, start) + newContent + text.substring(end + 1);
  }
  private addLeftIndentIntoContent(text: string, content: string, index: number): string {
    if (index <= 0) return content;
    let indent = "";
    while(index > 0 && (text[index] === " " || text[index] === "\t")) {
      indent += text[index];
      index --;
    }
    if (!indent) return content;
    const lines = content.split("\n");
    for (let i = 1; i < lines.length; i++) {
      lines[i] = indent + lines[i];
    }
    return lines.join("\n");
  }
}

class SurveyTextWorkerJsonUnknownPropertyErrorFixer extends SurveyTextWorkerJsonErrorFixer {
  public constructor(protected element: Base, protected jsonObj: any, protected propertyName: string) {
    super(element, jsonObj);
  }
  public getCorrectAt(text: string, at: number, end: number): number {
    const propName = this.propertyName;
    if (!propName) return at;
    return this.getNewIndex(text, this.propertyName, at, end);
  }
}
class SurveyTextWorkerJsonArrayPropertyErrorFixer extends SurveyTextWorkerJsonUnknownPropertyErrorFixer {
  public constructor(protected element: Base, protected jsonObj: any, protected propertyName: string) {
    super(element, jsonObj, propertyName);
  }
  public get isFixable(): boolean { return true; }
  protected updatedJsonObjOnFix(json: any): void {
    const obj = json[this.propertyName];
    if (obj && !Array.isArray(obj)) {
      json[this.propertyName] = [obj];
    }
  }
}
class SurveyTextWorkerJsonDuplicateNameErrorFixer extends SurveyTextWorkerJsonErrorFixer {
  public get isFixable(): boolean { return true; }
  public getCorrectAt(text: string, at: number, end: number): number {
    let newAt = this.getNewIndex(text, "name:", at, end);
    if (newAt > at) return newAt;
    return this.getNewIndex(text, "\"name\":", at, end);
  }
  protected updatedJsonObjOnFix(json: any): void {
    const el: any = this.element;
    if (el.survey?.runEndLoadingFromJson) {
      el.survey.runEndLoadingFromJson();
    }
    json["name"] = SurveyHelper.getNewElementName(el);
  }
}
class SurveyTextWorkerJsonRequiredPropertyErrorFixer extends SurveyTextWorkerJsonErrorFixer {
  public constructor(protected element: Base, protected jsonObj: any, private propertyName: string) {
    super(element, jsonObj);
  }
  public get isFixable(): boolean { return this.propertyName === "name"; }
  protected updatedJsonObjOnFix(json: any): void {
    let name = this.element["name"];
    if (!name) name = SurveyHelper.getNewElementName(<ISurveyElement><any>this.element);
    json["name"] = name;
  }
}

export class SurveyTextWorkerJsonError extends SurveyTextWorkerError {
  public elementStart: number;
  public elementEnd: number;
  private element: Base;
  private errorType: string;
  private propertyName: string;
  private jsonObj: any;
  public constructor(jsonError: JsonError) {
    super(<number>jsonError.at, jsonError.getFullDescription());
    this.elementStart = <number>jsonError.at;
    this.elementEnd = <number>jsonError.end;
    this.element = jsonError.element;
    this.errorType = jsonError.type;
    this.propertyName = jsonError["propertyName"];
    this.jsonObj = jsonError.jsonObj;
  }
  protected createFixer(): SurveyTextWorkerJsonErrorFixerBase {
    if (this.errorType === "unknownproperty")
      return new SurveyTextWorkerJsonUnknownPropertyErrorFixer(this.element, this.jsonObj, this.propertyName);
    if (this.errorType === "arrayproperty")
      return new SurveyTextWorkerJsonArrayPropertyErrorFixer(this.element, this.jsonObj, this.propertyName);
    if (this.errorType === "duplicatename")
      return new SurveyTextWorkerJsonDuplicateNameErrorFixer(this.element, this.jsonObj);
    if (this.errorType === "requiredproperty")
      return new SurveyTextWorkerJsonRequiredPropertyErrorFixer(this.element, this.jsonObj, this.propertyName);
    return super.createFixer();
  }
  public getErrorType(): string { return this.errorType; }
  public get isFixable(): boolean { return this.fixer.isFixable && this.elementStart > -1 && this.elementEnd > this.elementStart; }
  public correctAt(text: string): void {
    const newAt = this.fixer.getCorrectAt(text, this.at, this.elementEnd);
    if (newAt > -1) {
      this.at = newAt;
    }
  }
  public fixError(text: string): string {
    return this.fixer.fixError(text, this.elementStart, this.elementEnd);
  }
}

export class SurveyTextWorker {
  public static onProcessJson: ((json: any) => void) | undefined;
  public static newLineChar: string = "\n";
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
    return !!this.surveyValue;
  }
  public get isJsonHasErrors(): boolean {
    return this.errors.length > 0 || !this.isJsonCorrect;
  }
  protected process() {
    try {
      this.jsonValue = new SurveyJSON5(1).parse(this.text);
    } catch(error) {
      this.errors.push(new SurveyTextWorkerParserError(error.at, error.message));
    }
    if (this.jsonValue != null) {
      this.updateJsonPositions(this.jsonValue);
      if (!!SurveyTextWorker.onProcessJson) {
        SurveyTextWorker.onProcessJson(this.jsonValue);
      }
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
    if (this.errors.length === 0) return;
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
    while(curChar < at) {
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
      if (error) res.push(error);
    });

    return res;
  }
  private getDuplicatedElements(): Array<Base> {
    const res = [];
    const names = {};
    this.survey.pages.forEach(p=> this.checkDuplicatedElement(p, names, res));
    SurveyHelper.getAllElements(this.survey, true).forEach(p=> this.checkDuplicatedElement(p, names, res));
    SurveyHelper.getAllElements(this.survey, false).forEach(q=> this.checkDuplicatedElement(q, names, res));
    return res;
  }
  private checkDuplicatedElement(el: any, names: any, duplicates: Array<Base>): void {
    const name = el["name"];
    if (names[name]) {
      duplicates.push(el);
    } else {
      names[name] = true;
    }
  }
  private createDuplicatedError(el: Base): JsonError {
    const pos = el["pos"];
    if (!pos) return undefined;
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
