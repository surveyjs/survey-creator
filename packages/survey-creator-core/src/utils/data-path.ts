import { Base, Question, SurveyModel, settings as surveyLibSettings } from "survey-core";

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
// survey-core finds nothing from a context without getValueGetterContext (no Base): that one reads from the root
function getVariableContext(el: Base): Base {
  return typeof (<any>el)?.getValueGetterContext === "function" ? el : undefined;
}
// The name the condition editor lists a question by: the variable survey-core names it by from context, the
// rule's owner (SurveyModel.getQuestionVariableName). An inner question's shortest text that reaches it ({street}
// inside address, {address.town} for city with valueName "town" elsewhere); without a context its data path from
// the root; its name for one no root variable reaches (inside a container of a record); else its value name.
export function getConditionQuestionKey(question: Question, context?: Base): string {
  if (!question) return "";
  const survey = <SurveyModel><any>question.survey;
  return !!survey ? survey.getQuestionVariableName(question, getVariableContext(context)) : question.getValueName();
}
// No text reaches question from context: the name it would be listed by reads a value at another data path
// there ({street} inside address reads the inner street, not a top-level street), or a container's object (a
// panel with valueName "street"). Questions that share a value name read one value and are not hidden.
export function isQuestionHidden(question: Question, context: Base): boolean {
  const survey = <SurveyModel><any>question?.survey;
  const ctx = getVariableContext(context);
  if (!ctx || !survey || !survey.hasDataNesting()) return false;
  const key = getConditionQuestionKey(question, ctx);
  const info = survey.getQuestionByVariable(key, ctx);
  // nothing found: hidden only when the root reads the question by that text (not a value name no variable reads)
  if (!info) return survey.getQuestionByVariable(key)?.question === question;
  return info.question !== question && info.question.getDataPath().join(".") !== question.getDataPath().join(".");
}
export interface IInnerQuestionInfo {
  question: Question;
  // the part of the variable after the question: "" when the variable is the question's value itself
  rest: string;
}
// The inner question an expression variable names, as survey-core resolves it from el without values
// (getQuestionByVariable): a data path from the root ({address.street}) or the shorter text from inside a
// container ({street} inside address). A sub-entry gives its owner and the rest ({address.m.r1}: m and ".r1").
// Top-level questions, comment keys and postfixed names are not returned: the callers keep their own lookups.
export function findInnerQuestion(survey: SurveyModel, name: string, el?: Base): IInnerQuestionInfo {
  if (!survey || !name) return null;
  const info = survey.getQuestionByVariable(name, getVariableContext(el));
  if (!info || info.isComment || info.isUnwrapped || !isInnerQuestion(info.question)) return null;
  return { question: info.question, rest: info.rest };
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
export function isScopedNamesSurvey(survey: SurveyModel): boolean {
  return !!survey && survey.hasDataNesting();
}

export interface IVariableRename {
  oldName: string;
  newName: string;
}
interface IDataKeyMatch {
  owner: Base;
  // the variable's text up to its question ("address.street" in {address.street.length}; "address" when it reads
  // the container itself), where the element's key is in it, and the text after it
  oldName: string;
  keyIndex: number;
  tail: string;
  // the question the text reads (the element, or one inside the container) and its data path before the change
  question: Question;
  path: string;
  // the container itself: the keys of the question inside it that the text was read through
  innerKeys: number;
  // a postfix follows the question's key ({address.street-comment})
  isPostfix: boolean;
}
// Nested data (survey-library #12233, scoped names, CS1): the data key of element (a question's value name, a
// container's key) changes from oldKey to newKey. Before the change (survey.onDataKeyChangingCallback) survey-core
// tells which variables read the element; after it, each of them is rewritten to a text that reads the element
// again: the same text with the new key, or, when an inner scope now holds that key, the name that reaches the
// question from the owner. A variable that read another element, or nothing, keeps its text.
export class DataKeyRename {
  private matches: Array<IDataKeyMatch> = [];
  private path: Array<string>;
  constructor(private survey: SurveyModel, public readonly element: Base, public readonly oldKey: string, public readonly newKey: string) {
    this.path = getDataPath(element);
  }
  // before the change: a variable (of an expression, or an action's question name) that owner reads
  public addVariable(owner: Base, name: string): void {
    if (name.toLowerCase().indexOf(this.oldKey.toLowerCase()) < 0) return;
    // a column total ({m-total.c1}) reads the matrix; renameVariablePrefix keeps the suffix
    let text = name.split(surveyLibSettings.matrix.totalsSuffix + ".").join(".");
    let info = this.survey.getQuestionByVariable(text, owner);
    let innerKeys = 0;
    if (!info && !this.element.isQuestion) {
      // the container's own value ({address}): a question inside it is read by the same text and its keys
      const inner = (<Array<Question>>(<any>this.element).questions).filter(q => getDataPath(q).length > this.path.length)[0];
      if (!inner) return;
      const keys = getDataPath(inner).slice(this.path.length);
      innerKeys = keys.length;
      text += "." + keys.join(".");
      info = this.survey.getQuestionByVariable(text, owner);
    }
    if (!info || info.question !== this.element && (this.element.isQuestion || !(<any>this.element).containsElement(info.question))) return;
    const head = text.substring(0, text.length - info.rest.length).split(".");
    const keyIndex = this.path.length - 1 - (getDataPath(info.question).length - head.length);
    const isPostfix = !!info.isComment || !!info.isUnwrapped;
    // the text does not name the key (read from inside the container), or a postfix follows it ({street-comment})
    if (keyIndex < 0 || keyIndex === head.length - 1 && isPostfix) return;
    const oldName = head.slice(0, head.length - innerKeys).join(".");
    if (this.matches.some(m => m.owner === owner && m.oldName.toLowerCase() === oldName.toLowerCase())) return;
    this.matches.push({ owner: owner, oldName: oldName, keyIndex: keyIndex, tail: text.substring(oldName.length), question: info.question,
      path: getDataPath(info.question).join(".").toLowerCase(), innerKeys: innerKeys, isPostfix: isPostfix });
  }
  // after the change: the texts to rewrite in what owner reads
  public getRenames(owner: Base): Array<IVariableRename> {
    const res: Array<IVariableRename> = [];
    this.matches.forEach(m => {
      if (m.owner !== owner) return;
      // another question holds the old key at the same place (a shared value name): the text still reads it. One
      // that a scope further out holds does not count: the text read the element before.
      const old = this.getQuestion(m.oldName + m.tail, owner);
      if (!!old && old !== m.question && getDataPath(old).join(".").toLowerCase() === m.path) return;
      const newName = this.getNewName(m);
      if (newName !== m.oldName) res.push({ oldName: m.oldName, newName: newName });
    });
    return res;
  }
  private getNewName(m: IDataKeyMatch): string {
    const keys = m.oldName.split(".");
    keys[m.keyIndex] = this.newKey;
    const res = keys.join(".");
    if (m.isPostfix || this.getQuestion(res + m.tail, m.owner) === m.question) return res;
    // an inner scope holds the new key: the name that reaches the question (without the keys inside the container)
    const parts = this.survey.getQuestionVariableName(m.question, m.owner).split(".");
    const name = parts.slice(0, parts.length - m.innerKeys).join(".");
    return !!name && this.getQuestion(name + m.tail, m.owner) === m.question ? name : res;
  }
  private getQuestion(text: string, owner: Base): Question {
    const info = this.survey.getQuestionByVariable(text, owner);
    return !!info ? info.question : null;
  }
}
