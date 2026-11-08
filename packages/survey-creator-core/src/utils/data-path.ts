import { Base, PanelModelBase, Question, SurveyModel } from "survey-core";

// Nested data (survey-library #12233): a panel or a page with a data key stores its questions' values in an
// object, and expressions read them as {street} (the inner question's name, resolved anywhere) or as a data
// path, {address.street} from the root or a path relative to an enclosing container. These helpers map an
// expression variable back to its question by the element's data path (getDataPath()) and give the data path
// scopes an expression is resolved in.

function getDataPath(el: any): Array<string> {
  return !!el && typeof el.getDataPath === "function" ? el.getDataPath() : [];
}
// A question whose value lives inside a nesting container: its value name is no key of the survey data.
export function isInnerQuestion(question: Base): boolean {
  return getDataPath(question).length > 1;
}
// The name the condition editor lists a question by: an inner question's name ({street}, {city} for a question
// with valueName "town"), which resolves at the root and inside its container; else its value name, as before.
export function getConditionQuestionKey(question: Question): string {
  if (!question) return "";
  return isInnerQuestion(question) ? question.name : question.getValueName();
}
// The element whose data scope an expression of el runs in: el itself, or the outermost matrix or dynamic
// panel el sits in (a column, a template question). Their records never nest (survey-library N5).
function getScopeOwner(el: any): any {
  let res: any = el;
  let cur: any = el;
  for (let i = 0; !!cur && i < 1000; i++) {
    const owner = cur.parentQuestion || cur.colOwner;
    if (!!owner) res = owner;
    cur = owner || cur.parent;
  }
  return res;
}
// The data paths of the nesting containers an expression of el is resolved in, innermost first, ending with the
// root ([]): the prefixes of the data path of el's value scope (survey-core getValueScope()). An element's
// expression runs in its parent's data scope and falls back to the outer ones.
export function getExpressionScopePaths(el: any): Array<Array<string>> {
  const owner = getScopeOwner(el);
  const scope: any = !!owner && typeof owner.getValueScope === "function" ? owner.getValueScope() : null;
  const path: Array<string> = !!scope && typeof scope.getDataPath === "function" ? scope.getDataPath() : [];
  const res: Array<Array<string>> = [];
  for (let i = path.length; i >= 0; i--) res.push(path.slice(0, i));
  return res;
}
function getSegmentKey(segment: string): string {
  const index = segment.indexOf("[");
  return index > -1 ? segment.substring(0, index) : segment;
}
// The text after the first "count" segments of a variable name: "[0].q1" or ".row1" or "".
function getNameRest(name: string, segments: Array<string>, count: number): string {
  let pos = 0;
  for (let i = 0; i < count - 1; i++) pos += segments[i].length + 1;
  pos += getSegmentKey(segments[count - 1]).length;
  return name.substring(pos);
}
export interface IInnerQuestionInfo {
  question: Question;
  // the variable as the condition editor lists it: the question's name and the rest of the path
  // ("street", "m.r1")
  entryName: string;
  // the part of the variable after the question: "" when the variable is the question's value itself
  rest: string;
}
// The data scope an expression of el runs in (survey-core getValueScope(): its parent's nesting container,
// or the survey), and the scope that holds a scope's own key.
function getExpressionScope(survey: SurveyModel, el: any): any {
  const owner = getScopeOwner(el);
  const scope = !!owner && owner !== survey && typeof owner.getValueScope === "function" ? owner.getValueScope() : null;
  return scope || survey;
}
function getParentScope(scope: any): any {
  const owner = !!scope ? scope.owner : null;
  return !!owner && typeof owner.getValueScope === "function" ? owner.getValueScope() : null;
}
// The question a variable names inside a scope, through survey-core's data key indexes, as
// PanelDataScopeValueGetterContext resolves it: a key is a question's value name, else a container's key to go
// down. The number of segments the question took, or null.
function findQuestionInScope(scope: any, segments: Array<string>): { question: Question, count: number } {
  let scopes: Array<any> = [scope];
  for (let i = 0; i < segments.length; i++) {
    const key = getSegmentKey(segments[i]);
    for (let j = 0; j < scopes.length; j++) {
      const questions = scopes[j].getDataKeyIndex().getQuestions(key, true);
      if (questions.length > 0) return { question: questions[0], count: i + 1 };
    }
    const next: Array<any> = [];
    scopes.forEach(item => next.push(...item.getDataKeyIndex().getScopes(key, true)));
    if (next.length === 0) return null;
    scopes = next;
  }
  return null;
}
// The inner question an expression variable names, from el's data scope outward to the survey (survey-core's
// order): by a data path from the root or from an enclosing container ({address.street}, {page1.address.street},
// {st} inside its container), else by the question's name ({street}). A sub-entry gives its owner and the rest
// ({m.r1}: m and ".r1"). survey-core's ValueGetter is not used: it answers by values, and an empty matrix
// ({address.m}) is not found there. Top-level questions are not returned: the callers keep their own lookups.
export function findInnerQuestion(survey: SurveyModel, name: string, el?: Base): IInnerQuestionInfo {
  if (!survey || !name) return null;
  const segments = name.split(".");
  const createInfo = (question: Question, count: number): IInnerQuestionInfo => {
    if (!isInnerQuestion(question)) return null;
    const rest = getNameRest(name, segments, count);
    return { question: question, entryName: question.name + rest, rest: rest };
  };
  for (let scope = getExpressionScope(survey, el); !!scope; scope = getParentScope(scope)) {
    const res = findQuestionInScope(scope, segments);
    if (!!res) return createInfo(res.question, res.count);
  }
  const byName = <Question>survey.getQuestionByName(getSegmentKey(segments[0]), true);
  return !!byName ? createInfo(byName, 1) : null;
}
// The key a panel or a page stores its questions' values under for the given valueName and name: the
// dataNesting table (survey-library decisions N3), "" when it does not nest. survey-core keeps the table
// (getDataNestingKey) private; the container's kind is its own (getDataNestingKind: "panel", "page", or ""
// for the single-page container, which never nests).
export function getContainerDataKey(panel: PanelModelBase, valueName: string, name: string): string {
  const survey: any = panel.survey;
  const dataNesting: string = !!survey ? survey.dataNesting : undefined;
  const kind: string = typeof (<any>panel).getDataNestingKind === "function" ? (<any>panel).getDataNestingKind() : (panel.isPage ? "page" : "panel");
  if (dataNesting === "none" || !kind || panel.isInsideRecord()) return "";
  if (!!valueName) return valueName;
  const modes = kind === "page" ? ["page", "panelAndPage"] : ["panel", "panelAndPage"];
  return modes.indexOf(dataNesting) > -1 ? name || "" : "";
}
