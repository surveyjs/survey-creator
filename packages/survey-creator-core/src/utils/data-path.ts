import { Base, Question, SurveyModel } from "survey-core";

// Nested data (survey-library #12233): a panel or a page with a data key stores its questions' values in an
// object, and expressions read them by a data path: {address.street} from the root, or a path relative to an
// enclosing container ({street} inside address). A bare name read at the root finds no inner question: a name is
// unique only inside its scope. survey-core resolves the variables (getQuestionByVariable,
// getExpressionScopePaths); these helpers add the Creator's policy on top.

function getDataPath(el: any): Array<string> {
  return !!el && typeof el.getDataPath === "function" ? el.getDataPath() : [];
}
// A question whose value lives inside a nesting container: its value name is no key of the survey data.
export function isInnerQuestion(question: Base): boolean {
  return getDataPath(question).length > 1;
}
// The name the condition editor lists a question by: the variable survey-core names it by
// (SurveyModel.getQuestionVariableName). An inner question's data path ({address.town} for city with valueName
// "town"), which resolves at the root and inside its container; its name for one no root variable reaches (inside
// a container of a record); else its value name, as before.
export function getConditionQuestionKey(question: Question): string {
  if (!question) return "";
  const survey = <SurveyModel><any>question.survey;
  return !!survey ? survey.getQuestionVariableName(question) : question.getValueName();
}
export interface IInnerQuestionInfo {
  question: Question;
  // the variable as the condition editor lists it: the question's key (getConditionQuestionKey) and the rest of
  // the path ("address.street", "address.m.r1"), whichever form the expression used
  entryName: string;
  // the part of the variable after the question: "" when the variable is the question's value itself
  rest: string;
}
// survey-core starts a lookup from anything with getValueGetterContext() (a question, a panel, a page, a matrix
// column); anything else (a trigger, a validator) resolves from the root, as at runtime.
function getLookupContext(el: Base): Base {
  return !!el && typeof (<any>el).getValueGetterContext === "function" ? el : undefined;
}
// The inner question an expression variable names, as survey-core resolves it from el without values
// (getQuestionByVariable): a data path from the root or from an enclosing container ({address.street},
// {page1.address.street}, {st} inside its container). A sub-entry gives its owner and the rest ({address.m.r1}: m
// and ".r1"). Top-level questions, comment keys and postfixed names are not returned: the callers keep their own
// lookups for them.
export function findInnerQuestion(survey: SurveyModel, name: string, el?: Base): IInnerQuestionInfo {
  if (!survey || !name) return null;
  const info = survey.getQuestionByVariable(name, getLookupContext(el));
  if (!info || info.isComment || info.isUnwrapped || !isInnerQuestion(info.question)) return null;
  return { question: info.question, entryName: getConditionQuestionKey(info.question) + info.rest, rest: info.rest };
}
// The question whose whole value an expression variable of el names: an inner question as findInnerQuestion
// resolves it (first, so a key inside a container reads its own question, as at runtime), else a top-level
// question by its value name. null for a sub-entry ({address.m.r1}) and for any other name.
export function getQuestionByVariableName(survey: SurveyModel, name: string, el?: Base): Question {
  if (!survey || !name) return null;
  const info = findInnerQuestion(survey, name, el);
  if (!!info) return !info.rest ? info.question : null;
  return <Question>survey.getQuestionByValueName(name) || null;
}
// The element whose scopes an expression of el resolves in: a choice's or a validator's question (they have no
// scope of their own), else el.
export function getExpressionOwner(el: Base): Base {
  const res: any = el;
  if (!res || typeof res.isDescendantOf !== "function") return el;
  if (res.isDescendantOf("itemvalue") && !!res.locOwner) return res.locOwner;
  if (res.isDescendantOf("surveyvalidator") && !!res.errorOwner) return res.errorOwner;
  return el;
}
// The data paths an expression of el resolves names in, innermost first, ending with the root ([]). The paths
// relative to a record (a template element, a column) are left out: a rename rewrites paths from the survey data.
export function getExpressionScopePaths(survey: SurveyModel, el: Base): Array<Array<string>> {
  return survey.getExpressionScopePaths(el).filter(item => !item.record).map(item => item.path);
}
// The record (a dynamic panel, a matrix) whose rows an element's expressions run in: a template's element, a
// detail panel's, a column. null for any other element.
export function getExpressionRecord(survey: SurveyModel, el: Base): Base {
  if (!survey || !el) return null;
  const first = survey.getExpressionScopePaths(el)[0];
  return !!first && !!first.record ? first.record : null;
}
// Whether a bare name resolves in scopes (survey-library #12233, O3): a container of the survey holds data now.
// In "none", and while no container nests, the survey has one scope, and a rename rewrites the text as on master.
// isDataScopeUsed() alone is not enough: it stays true once a container has nested.
export function isScopedNamesSurvey(survey: SurveyModel): boolean {
  if (!survey || survey.dataNesting === "none" || !survey.isDataScopeUsed()) return false;
  return survey.pages.some(page => page.isDataNesting) || survey.getAllPanels(false, false).some((panel: any) => panel.isDataNesting);
}

export interface IVariableRename {
  oldName: string;
  newName: string;
}
function isPathPrefix(prefix: Array<string>, path: Array<string>): boolean {
  if (prefix.length > path.length) return false;
  for (let i = 0; i < prefix.length; i++) {
    if (prefix[i].toLowerCase() !== path[i].toLowerCase()) return false;
  }
  return true;
}
// The data keys each scope of the survey holds, letter case ignored: a question by its value name, a nesting
// container by its key. Elements inside a record (a template) are left out: their keys live in the records.
class DataScopeKeys {
  private counts: { [entry: string]: number } = {};
  public static create(survey: SurveyModel): DataScopeKeys {
    const res = new DataScopeKeys();
    const add = (el: any): void => {
      const path = getDataPath(el);
      if (path.length > 0) res.add(path.slice(0, path.length - 1), path[path.length - 1], !!el.isQuestion, 1);
    };
    survey.getAllQuestions(false, false).forEach(add);
    survey.getAllPanels(false, false).forEach(add);
    survey.pages.forEach(add);
    return res;
  }
  public clone(): DataScopeKeys {
    const res = new DataScopeKeys();
    res.counts = Object.assign({}, this.counts);
    return res;
  }
  public add(scope: Array<string>, key: string, isQuestion: boolean, delta: number): void {
    const entry = DataScopeKeys.getEntry(scope, key, isQuestion);
    this.counts[entry] = (this.counts[entry] || 0) + delta;
  }
  public has(scope: Array<string>, key: string, isQuestion: boolean): boolean {
    return this.counts[DataScopeKeys.getEntry(scope, key, isQuestion)] > 0;
  }
  private static getEntry(scope: Array<string>, key: string, isQuestion: boolean): string {
    return (isQuestion ? "q" : "c") + "\u0000" + scope.concat([key]).join("\u0000").toLowerCase();
  }
}
// Whether the keys of path after scopes[index] (the scopes an expression resolves in, innermost first) read
// the element at path, as the runtime walks them (PanelDataScopeValueGetterContext): the innermost scope that
// holds the first key answers; at each level a question goes before a container of the same key.
function readsDataPath(keys: DataScopeKeys, scopes: Array<Array<string>>, index: number, path: Array<string>, isQuestion: boolean): boolean {
  const scope = scopes[index];
  if (scope.length >= path.length || !isPathPrefix(scope, path)) return false;
  const first = path[scope.length];
  for (let i = 0; i < index; i++) {
    if (keys.has(scopes[i], first, true) || keys.has(scopes[i], first, false)) return false;
  }
  for (let level = scope.length; level < path.length; level++) {
    const at = path.slice(0, level);
    const hasQuestion = keys.has(at, path[level], true);
    if (level === path.length - 1 && isQuestion) return hasQuestion;
    if (hasQuestion || !keys.has(at, path[level], false)) return false;
  }
  return true;
}
// Nested data (survey-library #12233, scoped names, CS1): the data key at the end of oldPath (a question's value
// name, a container's key) became newKey. A variable is rewritten when it read the element before the change,
// to the text that reads it after: from the same scope, or, when an inner scope now holds the new key, from the
// next scope outwards that reaches it. A variable that read another element, or nothing, keeps its text.
// The change runs before the rewrite, so the state before it is rebuilt: only the element's own key differs.
export class DataKeyRename {
  private oldPath: Array<string>;
  private newPath: Array<string>;
  private before: DataScopeKeys;
  private after: DataScopeKeys;
  private isCaseChange: boolean;
  constructor(private survey: SurveyModel, oldPath: Array<string>, newKey: string, private isQuestion: boolean) {
    this.oldPath = oldPath;
    this.newPath = oldPath.slice(0, oldPath.length - 1).concat([newKey]);
    this.isCaseChange = oldPath[oldPath.length - 1].toLowerCase() === newKey.toLowerCase();
  }
  // built on the first rule that names the old key: one walk of the survey's elements
  private createKeys(): void {
    if (!!this.after) return;
    const scope = this.oldPath.slice(0, this.oldPath.length - 1);
    this.after = DataScopeKeys.create(this.survey);
    this.before = this.after.clone();
    this.before.add(scope, this.newPath[this.newPath.length - 1], this.isQuestion, -1);
    this.before.add(scope, this.oldPath[this.oldPath.length - 1], this.isQuestion, 1);
  }
  // scopes: getExpressionScopePaths of the expression's owner
  public getRenames(scopes: Array<Array<string>>): Array<IVariableRename> {
    this.createKeys();
    const res: Array<IVariableRename> = [];
    scopes.forEach((scope, index) => {
      if (!readsDataPath(this.before, scopes, index, this.oldPath, this.isQuestion)) return;
      // another element still holds the old key there (a shared value name): the text still reads it
      if (!this.isCaseChange && readsDataPath(this.after, scopes, index, this.oldPath, this.isQuestion)) return;
      const oldName = this.oldPath.slice(scope.length).join(".");
      let newName = this.newPath.slice(scope.length).join(".");
      for (let i = index; i < scopes.length; i++) {
        if (readsDataPath(this.after, scopes, i, this.newPath, this.isQuestion)) {
          newName = this.newPath.slice(scopes[i].length).join(".");
          break;
        }
      }
      if (oldName !== newName && !res.some(item => item.oldName.toLowerCase() === oldName.toLowerCase())) {
        res.push({ oldName: oldName, newName: newName });
      }
    });
    return res;
  }
}
// An object variable's value as JSON writes it ({ users: { tier } }): a plain object, not a Date or a class
// instance, whose keys are fields of the variable.
export function isPlainRecord(val: any): boolean {
  if (!val || typeof val !== "object" || Array.isArray(val)) return false;
  const proto = Object.getPrototypeOf(val);
  return proto === Object.prototype || proto === null;
}
// A copy of the plain objects and arrays in val; any other value is kept by reference.
export function copyPlainValue(val: any): any {
  if (Array.isArray(val)) return val.map(item => copyPlainValue(item));
  if (!isPlainRecord(val)) return val;
  const res: any = {};
  // "__proto__" would replace the copy's prototype; survey-core ignores a variable of that name too
  Object.keys(val).forEach(key => { if (key !== "__proto__") res[key] = copyPlainValue(val[key]); });
  return res;
}
