import { SurveyHelper } from "./survey-helper";
import { SurveyJSON5 } from "./json5";
import { settings } from "./creator-settings";
import { levenshteinDistance } from "./utils/utils";
import { editorLocalization } from "./editorLocalization";
import { ILintFinding, ISurveyLintOptions, ISurveyLintResult, lintSurvey } from "survey-core/linter";

export interface ISurveyTextWorkerOptions {
  // false parses only - the way the creator reads the text when it applies it
  lint?: boolean;
  lintOptions?: ISurveyLintOptions;
}

export interface ISurveyTextWorkerNode {
  node: any;
  parent: any;
  key: string | number;
}

function isPlainObject(value: any): boolean {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

export abstract class SurveyTextWorkerError {
  public rowAt: number = -1;
  public columnAt: number = -1;
  public constructor(public at: number, public text: string) {
  }
  public abstract getErrorType(): string;
  // whether the error keeps the author from leaving the JSON tab
  public get isBlocking(): boolean { return true; }
  public get isFixable(): boolean { return false; }
  public fixError(text: string): string { return text; }
}

export class SurveyTextWorkerParserError extends SurveyTextWorkerError {
  public getErrorType(): string { return "parseerror"; }
}

// A finding of survey-core/linter. One at "error" severity blocks leaving the tab, a warning or
// an info is advice; the findings of a few rules can be fixed in the text.
export class SurveyTextWorkerLinterFinding extends SurveyTextWorkerError {
  public constructor(at: number, text: string, public finding: ILintFinding,
    private fixer?: SurveyTextWorkerFixer) {
    super(at, text);
  }
  public getErrorType(): string { return "linterfinding"; }
  public get severity(): string { return this.finding.severity; }
  public get ruleId(): string { return this.finding.ruleId; }
  public get reason(): string { return this.finding.reason; }
  public get isBlocking(): boolean { return this.finding.severity === "error"; }
  public get isFixable(): boolean { return !!this.fixer && this.fixer.isFixable; }
  public fixError(text: string): string {
    return !!this.fixer ? this.fixer.fixError(text) : text;
  }
}

// "page" for a page, "panel" for a panel, "question" for everything else - a column or an item
// gets a question name, the way the JSON tab always named them
function elementKindOf(type: string): string {
  const lower = (type || "").toLowerCase();
  if (lower === "page") return "page";
  if (lower === "panel" || lower === "flowpanel") return "panel";
  return "question";
}

// "pages[0].elements" -> { parent: "pages[0]", key: "elements" }
function splitLastKey(path: string): { parent: string, key: string } {
  const dot = path.lastIndexOf(".");
  if (dot < 0) return { parent: "", key: path };
  return { parent: path.substring(0, dot), key: path.substring(dot + 1) };
}

// Rewrites one object literal of the text: the slice the parser marked is parsed again on its
// own, changed, and written back with the editor's indentation.
abstract class SurveyTextWorkerFixer {
  public constructor(protected worker: SurveyTextWorker, protected finding: ILintFinding) {
  }
  public abstract get isFixable(): boolean;
  // the path of the object literal that is rewritten
  protected abstract getTargetPath(): string;
  protected abstract update(json: any): void;
  public fixError(text: string): string {
    const target = this.worker.getNodeByPath(this.getTargetPath());
    const pos = !!target && isPlainObject(target.node) ? target.node["pos"] : undefined;
    if (!pos || typeof pos.start !== "number" || typeof pos.end !== "number") return text;
    const json = new SurveyJSON5().parse(text.substring(pos.start, pos.end + 1));
    this.update(json);
    return this.replaceJson(text, pos.start, pos.end, json);
  }
  protected get data(): { [key: string]: any } {
    return this.finding.messageData || {};
  }
  protected newElementName(kind: string): string {
    const key = kind === "page" ? "ed.newPageName" : kind === "panel" ? "ed.newPanelName" : "ed.newQuestionName";
    const taken = this.worker.getAllNames().map(name => ({ name: name }));
    return SurveyHelper.getNewName(taken, editorLocalization.getString(key));
  }
  private replaceJson(text: string, start: number, end: number, json: any): string {
    let newContent = JSON.stringify(json, null, settings.jsonEditor.indentation);
    newContent = this.addLeftIndentIntoContent(text, newContent, start - 1);
    return text.substring(0, start) + newContent + text.substring(end + 1);
  }
  private addLeftIndentIntoContent(text: string, content: string, index: number): string {
    if (index <= 0) return content;
    let indent = "";
    while(index > 0 && (text[index] === " " || text[index] === "\t")) {
      indent += text[index];
      index--;
    }
    if (!indent) return content;
    const lines = content.split("\n");
    for (let i = 1; i < lines.length; i++) {
      lines[i] = indent + lines[i];
    }
    return lines.join("\n");
  }
}

// name/duplicate: the later element gets a fresh name of its own kind
class SurveyTextWorkerDuplicateNameFixer extends SurveyTextWorkerFixer {
  public get isFixable(): boolean { return this.finding.reason === "elementNames"; }
  protected getTargetPath(): string { return this.finding.path; }
  protected update(json: any): void {
    json["name"] = this.newElementName(elementKindOf(this.finding.elementType));
  }
}

// property/required: only a missing name can be made up
class SurveyTextWorkerRequiredNameFixer extends SurveyTextWorkerFixer {
  public get isFixable(): boolean { return this.data.key === "name"; }
  protected getTargetPath(): string { return this.finding.path; }
  protected update(json: any): void {
    json["name"] = this.newElementName(elementKindOf(this.data.className));
  }
}

// property/not-an-array: the value becomes the one item of the array
class SurveyTextWorkerNotAnArrayFixer extends SurveyTextWorkerFixer {
  public get isFixable(): boolean { return true; }
  protected getTargetPath(): string { return splitLastKey(this.finding.path).parent; }
  protected update(json: any): void {
    const key = splitLastKey(this.finding.path).key;
    const value = json[key];
    if (value !== undefined && !Array.isArray(value)) {
      json[key] = [value];
    }
  }
}

// property/invalid-value: the allowed value the author most likely meant
class SurveyTextWorkerInvalidValueFixer extends SurveyTextWorkerFixer {
  public get isFixable(): boolean {
    return this.finding.reason === "notInChoices" && Array.isArray(this.data.allowed) && this.data.allowed.length > 0;
  }
  protected getTargetPath(): string { return splitLastKey(this.finding.path).parent; }
  protected update(json: any): void {
    const key = splitLastKey(this.finding.path).key;
    json[key] = this.pickValue(json[key]);
  }
  private pickValue(value: any): any {
    const allowed: Array<any> = this.data.allowed;
    // the linter's suggestion is the spelling that works, as a string - the allowed value keeps its type
    if (!!this.finding.suggestion) {
      const suggested = allowed.filter(item => String(item) === this.finding.suggestion);
      if (suggested.length > 0) return suggested[0];
    }
    return this.getClosestValue(String(value), allowed) ?? allowed[0];
  }
  private getClosestValue(needle: string, allowed: Array<any>): any {
    let closest = { value: undefined, distance: needle.length };
    needle = needle.toUpperCase();
    for (const item of allowed) {
      const distance = levenshteinDistance(needle, String(item).toUpperCase());
      if (distance === 0) return item;
      if (distance < closest.distance) {
        closest = { value: item, distance: distance };
      }
    }
    return closest.value;
  }
}

export class SurveyTextWorker {
  public static onProcessJson: ((json: any) => void) | undefined;
  public static newLineChar: string = "\n";
  // parser errors and linter findings alike, sorted by their position in the text
  public errors: Array<SurveyTextWorkerError> = [];
  public findings: Array<SurveyTextWorkerLinterFinding> = [];
  // undefined while the text does not parse, or when the worker was asked not to lint
  public lintResult: ISurveyLintResult;
  private jsonValue: any;

  constructor(public text: string, private options?: ISurveyTextWorkerOptions) {
    if (!this.text || this.text.trim() == "") {
      this.text = "{}";
    }
    this.process();
  }
  // The JSON as authored, with the SurveyJSON5 position markers on every object literal.
  // Undefined while the text does not parse into an object.
  public get json(): any {
    return this.jsonValue;
  }
  public get isJsonCorrect(): boolean {
    return !!this.jsonValue;
  }
  public get isJsonHasErrors(): boolean {
    return !this.isJsonCorrect || this.errors.some(error => error.isBlocking);
  }
  protected process(): void {
    let parsed: any = undefined;
    try {
      parsed = new SurveyJSON5(1).parse(this.text);
    } catch(error) {
      this.errors.push(new SurveyTextWorkerParserError(error.at, error.message));
    }
    if (this.errors.length === 0) {
      if (!isPlainObject(parsed)) {
        // the linter takes an object, and so does the survey
        this.errors.push(new SurveyTextWorkerParserError(0, editorLocalization.getString("ed.jsonRootNotObject")));
      } else {
        this.jsonValue = parsed;
        this.updateJsonPositions(this.jsonValue);
        if (!!SurveyTextWorker.onProcessJson) {
          SurveyTextWorker.onProcessJson(this.jsonValue);
        }
        if (!this.options || this.options.lint !== false) {
          this.lint();
        }
      }
    }
    this.setErrorsPositionByChartAt();
  }
  private lint(): void {
    this.lintResult = lintSurvey(this.jsonValue, !!this.options ? this.options.lintOptions : undefined);
    this.findings = this.lintResult.findings.map(finding => {
      const position = this.getFindingPosition(finding);
      const item = new SurveyTextWorkerLinterFinding(position.at, finding.message, finding, this.createFixer(finding));
      item.rowAt = position.rowAt;
      item.columnAt = position.columnAt;
      return item;
    });
    this.findings.forEach(finding => this.errors.push(finding));
  }
  private createFixer(finding: ILintFinding): SurveyTextWorkerFixer {
    if (finding.ruleId === "name/duplicate") return new SurveyTextWorkerDuplicateNameFixer(this, finding);
    if (finding.ruleId === "property/required") return new SurveyTextWorkerRequiredNameFixer(this, finding);
    if (finding.ruleId === "property/not-an-array") return new SurveyTextWorkerNotAnArrayFixer(this, finding);
    if (finding.ruleId === "property/invalid-value") return new SurveyTextWorkerInvalidValueFixer(this, finding);
    return undefined;
  }
  // Where a finding is shown: a duplicate name at its "name" key, a property at the key itself
  // (the bare name, past the quote, the way the deserializer errors were anchored), everything
  // else at the start of what the path names.
  private getFindingPosition(finding: ILintFinding): { at: number, rowAt: number, columnAt: number } {
    if (finding.ruleId === "name/duplicate" && finding.reason === "elementNames") {
      return this.getPositionByPath(finding.path + ".name");
    }
    if (finding.ruleId === "property/unknown" || finding.ruleId === "property/not-an-array") {
      const parts = splitLastKey(finding.path);
      const res = this.getKeyPosition(parts.parent, parts.key);
      if (res.at > -1) return res;
    }
    return this.getPositionByPath(finding.path);
  }
  // The key of a property inside the object literal that owns it, past the opening quote when
  // the key is quoted. The value may be an object of its own, which getPositionByPath would
  // point at instead of the key.
  private getKeyPosition(ownerPath: string, key: string): { at: number, rowAt: number, columnAt: number } {
    const notFound = { at: -1, rowAt: -1, columnAt: -1 };
    const owner = this.getNodeByPath(ownerPath);
    const pos = !!owner && isPlainObject(owner.node) ? owner.node["pos"] : undefined;
    if (!pos || typeof pos.start !== "number") return notFound;
    const end = typeof pos.end === "number" ? pos.end : -1;
    let at = this.getIndexInRange("\"" + key + "\"", pos.start, end);
    if (at > -1) {
      at++;
    } else {
      at = this.getIndexInRange(key + ":", pos.start, end);
    }
    if (at < 0) return notFound;
    const position = this.getPostionByChartAt({ row: 0, column: 0 }, 0, at);
    return { at: at, rowAt: position.row, columnAt: position.column };
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
  // Every "name" written in the text, in document order - the pool a fixer picks a fresh name from
  public getAllNames(): Array<string> {
    const res: Array<string> = [];
    const visit = (obj: any) => {
      if (!obj || typeof obj !== "object") return;
      if (Array.isArray(obj)) {
        obj.forEach(visit);
        return;
      }
      if (typeof obj["name"] === "string") res.push(obj["name"]);
      Object.keys(obj).forEach(key => {
        if (key !== "pos") visit(obj[key]);
      });
    };
    visit(this.jsonValue);
    return res;
  }
  // The parsed value a linter path names, with its parent and the key it sits under. An index
  // on an object that is no array addresses the object itself: the linter walks a single object
  // written where an array belongs as its one element, and the text has no index for it.
  public getNodeByPath(path: string): ISurveyTextWorkerNode | undefined {
    if (!this.jsonValue || path === undefined || path === null) return undefined;
    let node: any = this.jsonValue;
    let parent: any = undefined;
    let key: string | number = undefined;
    const segments = this.parsePath(path);
    for (let i = 0; i < segments.length; i++) {
      if (node === null || typeof node !== "object") return undefined;
      const segment = segments[i];
      if (typeof segment === "number" && !Array.isArray(node)) {
        if (segment !== 0) return undefined;
        continue;
      }
      const next = node[segment];
      if (next === undefined) return undefined;
      parent = node;
      key = segment;
      node = next;
    }
    return { node: node, parent: parent, key: key };
  }
  // Resolves a linter path ("pages[0].elements[1].visibleIf") to a position in the text.
  // SurveyJSON5(1) marks every object literal with { start, end }, so the object the path names
  // is found by walking it; arrays carry no marker of their own, but their object items do.
  // The last segment is usually a property, not an object - it is located by searching for its
  // key inside the owning object's range.
  public getPositionByPath(path: string): { at: number, rowAt: number, columnAt: number } {
    const notFound = { at: -1, rowAt: -1, columnAt: -1 };
    if (!path || !this.jsonValue) return notFound;
    const segments = this.parsePath(path);
    if (segments.length === 0) return notFound;
    let obj: any = this.jsonValue;
    let owner: any = this.jsonValue;
    let lastKey: string = undefined;
    let resolved: number = 0;
    for (let i = 0; i < segments.length; i++) {
      // a path may address something the text has no place of its own for - the condition an
      // inArray function carries inside an expression, for one. The deepest segment that did
      // resolve is still where the author looks for it, so the walk stops instead of giving up.
      if (obj === null || typeof obj !== "object") break;
      const segment = segments[i];
      const next = obj[segment];
      if (next === undefined) break;
      resolved++;
      if (next !== null && typeof next === "object") {
        if (!Array.isArray(next) && !!next["pos"]) {
          owner = next;
          lastKey = undefined;
        }
      } else {
        // a primitive: the owning object is where its key is searched for
        lastKey = typeof segment === "string" ? segment : undefined;
      }
      obj = next;
    }
    // a path whose very first segment names nothing addresses another survey, not this text
    if (resolved === 0) return notFound;
    const pos = owner["pos"];
    if (!pos || typeof pos.start !== "number") return notFound;
    let at = pos.start;
    if (!!lastKey) {
      // JSON5 allows an unquoted key, so try both forms
      const end = typeof pos.end === "number" ? pos.end : -1;
      let keyAt = this.getIndexInRange("\"" + lastKey + "\"", at, end);
      if (keyAt < 0) keyAt = this.getIndexInRange(lastKey + ":", at, end);
      if (keyAt > -1) at = keyAt;
    }
    const position = this.getPostionByChartAt({ row: 0, column: 0 }, 0, at);
    return { at: at, rowAt: position.row, columnAt: position.column };
  }
  private getIndexInRange(findText: string, at: number, end: number): number {
    const index = this.text.indexOf(findText, at);
    if (index > -1 && (end < 0 || index < end)) return index;
    return -1;
  }
  // "pages[0].elements[1].visibleIf" -> ["pages", 0, "elements", 1, "visibleIf"]
  private parsePath(path: string): Array<string | number> {
    const res: Array<string | number> = [];
    path.split(".").forEach(part => {
      if (!part) return;
      const bracket = part.indexOf("[");
      if (bracket < 0) {
        res.push(part);
        return;
      }
      const name = part.substring(0, bracket);
      if (!!name) res.push(name);
      const indexes = part.substring(bracket).match(/\[(\d+)\]/g) || [];
      indexes.forEach(entry => res.push(parseInt(entry.substring(1, entry.length - 1), 10)));
    });
    return res;
  }
  // Sorts the errors by position - one whose path resolved to no place in the text goes last -
  // and computes the line and column of each from its offset.
  private setErrorsPositionByChartAt() {
    if (this.errors.length === 0) return;
    this.errors.sort((el1, el2) => {
      if (el1.at === el2.at) return 0;
      if (el1.at < 0) return 1;
      if (el2.at < 0) return -1;
      return el1.at < el2.at ? -1 : 1;
    });
    let position = { row: 0, column: 0 };
    let startAt: number = 0;
    for (let i = 0; i < this.errors.length; i++) {
      const error = this.errors[i];
      if (error.at < 0) break;
      position = this.getPostionByChartAt(position, startAt, error.at);
      error.rowAt = position.row;
      error.columnAt = position.column;
      startAt = error.at;
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
}
