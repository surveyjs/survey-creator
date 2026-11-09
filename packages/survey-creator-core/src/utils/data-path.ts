import { Base, Question, SurveyModel } from "survey-core";

// Nested data (survey-library #12233): a panel or a page with a data key stores its questions' values in an
// object, and expressions read them as {street} (the inner question's name, resolved anywhere) or as a data
// path, {address.street} from the root or a path relative to an enclosing container. survey-core resolves both
// (getQuestionByVariable, getExpressionScopePaths); these helpers add the Creator's policy on top.

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
export interface IInnerQuestionInfo {
  question: Question;
  // the variable as the condition editor lists it: the question's name and the rest of the path
  // ("street", "m.r1")
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
// {page1.address.street}, {st} inside its container), else the question's name ({street}). A sub-entry gives its
// owner and the rest ({m.r1}: m and ".r1"). Top-level questions, comment keys and postfixed names are not
// returned: the callers keep their own lookups for them.
export function findInnerQuestion(survey: SurveyModel, name: string, el?: Base): IInnerQuestionInfo {
  if (!survey || !name) return null;
  const info = survey.getQuestionByVariable(name, getLookupContext(el));
  if (!info || info.isComment || info.isUnwrapped || !isInnerQuestion(info.question)) return null;
  return { question: info.question, entryName: info.question.name + info.rest, rest: info.rest };
}
// The data paths an expression of el resolves names in, innermost first, ending with the root ([]). The paths
// relative to a record (a template element, a column) are left out: a rename rewrites paths from the survey data.
export function getExpressionScopePaths(survey: SurveyModel, el: Base): Array<Array<string>> {
  return survey.getExpressionScopePaths(el).filter(item => !item.record).map(item => item.path);
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
