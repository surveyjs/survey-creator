import { SurveyJSON5 } from "./json5";
import { settings } from "./creator-settings";
import { editorLocalization } from "./editorLocalization";
import {
  ILintFinding, ILintFix, ILintFixEdit, ISurveyLintOptions, ISurveyLintResult, lintSurvey,
} from "survey-core/linter";

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

// "pages[0].elements" -> { parent: "pages[0]", key: "elements" }
function splitLastKey(path: string): { parent: string, key: string } {
  const dot = path.lastIndexOf(".");
  if (dot < 0) return { parent: "", key: path };
  return { parent: path.substring(0, dot), key: path.substring(dot + 1) };
}

// "pages[0].elements[1].visibleIf" -> ["pages", 0, "elements", 1, "visibleIf"]
function parsePath(path: string): Array<string | number> {
  const res: Array<string | number> = [];
  if (!path) return res;
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

function parseJson(text: string, parseType: number): any {
  try {
    return new SurveyJSON5(parseType).parse(text);
  } catch(e) {
    return undefined;
  }
}

// The object literal an edit is rewritten inside, and the way from it down to what the edit
// names. Only an object literal carries a position marker, so an edit on an array item is
// written by rewriting the object that holds the array.
function findOwner(root: any, segments: Array<string | number>):
  { json: any, rest: Array<string | number> } | undefined {
  if (!isPlainObject(root) || !root["pos"]) return undefined;
  let owner: any = root;
  let rest: Array<string | number> = [];
  let node: any = root;
  for (let i = 0; i < segments.length; i++) {
    const key = segments[i];
    // the linter reads a single object written where an array belongs as its one element, and
    // the text has no index for it
    if (typeof key === "number" && !Array.isArray(node)) {
      if (key !== 0) return undefined;
      continue;
    }
    if (typeof key === "string" && Array.isArray(node)) return undefined;
    rest.push(key);
    // the last segment names what the edit changes, not a step of the way to it
    if (i === segments.length - 1) break;
    const next = node[key];
    if (next === null || typeof next !== "object") return undefined;
    node = next;
    if (isPlainObject(next) && !!next["pos"]) {
      owner = next;
      rest = [];
    }
  }
  return rest.length > 0 ? { json: owner, rest: rest } : undefined;
}

// The key keeps its place: deleting it to add it back under another name would move it to the end
function renameKeyInPlace(node: any, key: string, newKey: string): void {
  const keys = Object.keys(node);
  const values: { [name: string]: any } = {};
  keys.forEach(name => {
    values[name] = node[name];
    delete node[name];
  });
  keys.forEach(name => {
    if (name === key) node[newKey] = values[key];
    else node[name] = values[name];
  });
}

function applyOp(node: any, key: string | number, edit: ILintFixEdit): boolean {
  const has = Array.isArray(node)
    ? typeof key === "number" && key >= 0 && key < node.length
    : Object.prototype.hasOwnProperty.call(node, key);
  if (edit.op === "set") {
    // the one op that may name a key the object does not have yet: a required property is
    // missing exactly because nobody wrote it
    if (Array.isArray(node) && !has) return false;
    node[key] = edit.value;
    return true;
  }
  if (!has) return false;
  if (edit.op === "wrap") {
    node[key] = [node[key]];
    return true;
  }
  if (edit.op === "remove") {
    if (Array.isArray(node)) {
      node.splice(<number>key, 1);
    } else {
      delete node[key];
    }
    return true;
  }
  if (edit.op === "rename") {
    if (Array.isArray(node) || !edit.key) return false;
    renameKeyInPlace(node, <string>key, edit.key);
    return true;
  }
  return false;
}

function applyEditToJson(root: any, segments: Array<string | number>, edit: ILintFixEdit): boolean {
  let node: any = root;
  for (let i = 0; i < segments.length; i++) {
    const key = segments[i];
    if (typeof key === "number" && !Array.isArray(node)) {
      if (key !== 0) return false;
      continue;
    }
    if (typeof key === "string" && Array.isArray(node)) return false;
    if (i === segments.length - 1) return applyOp(node, key, edit);
    const next = node[key];
    if (next === null || typeof next !== "object") return false;
    node = next;
  }
  return false;
}

function addLeftIndentIntoContent(text: string, content: string, index: number): string {
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

function replaceJson(text: string, start: number, end: number, json: any): string {
  let newContent = JSON.stringify(json, null, settings.jsonEditor.indentation);
  newContent = addLeftIndentIntoContent(text, newContent, start - 1);
  return text.substring(0, start) + newContent + text.substring(end + 1);
}

// Applies the edits a finding carries. Which rule found what is no longer the business of this
// file: the linter decides what to change and names it by a path into the JSON, and the object
// literal that holds it is located here, parsed on its own, changed, and written back with the
// editor indentation.
class SurveyTextWorkerFixer {
  public constructor(private fix: ILintFix) { }
  public get isFixable(): boolean {
    return !!this.fix && Array.isArray(this.fix.edits) && this.fix.edits.length > 0;
  }
  public fixError(text: string): string {
    if (!this.isFixable) return text;
    let res = text;
    for (let i = 0; i < this.fix.edits.length; i++) {
      const next = this.applyEdit(res, this.fix.edits[i]);
      // an edit that does not apply undoes the whole repair: half of one is worse than none
      if (next === undefined) return text;
      res = next;
    }
    return res;
  }
  private applyEdit(text: string, edit: ILintFixEdit): string | undefined {
    const parsed = parseJson(text, 1);
    if (!isPlainObject(parsed)) return undefined;
    const owner = findOwner(parsed, parsePath(edit.path));
    if (!owner) return undefined;
    const pos = owner.json["pos"];
    if (!pos || typeof pos.start !== "number" || typeof pos.end !== "number") return undefined;
    const json = parseJson(text.substring(pos.start, pos.end + 1), 0);
    if (!isPlainObject(json) || !applyEditToJson(json, owner.rest, edit)) return undefined;
    return replaceJson(text, pos.start, pos.end, json);
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
    return !!finding.fix ? new SurveyTextWorkerFixer(finding.fix) : undefined;
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
    const segments = parsePath(path);
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
    const segments = parsePath(path);
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
