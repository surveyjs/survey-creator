import {
  Base, ConditionRunner, ItemValue, MatrixDropdownColumn, PanelModelBase, Question,
  Serializer, SurveyVariablePresets, surveyLocalization,
  buildExpressionSystemPrompt as buildCoreExpressionSystemPrompt, describeExpressionQuestion, expressionGuideVersion,
  expressionItemScope, expressionPanelScope, expressionRowScope, getExpressionFunctions, getExpressionOperators,
  getExpressionPageName, getExpressionScopePrefix, getExpressionValueType, toExpressionChoices,
  IExpressionContext, IExpressionVariable,
} from "survey-core";
import { ISurveyLintOptions } from "survey-core/linter";
import { SurveyCreatorModel } from "../creator-base";
import { settings } from "../creator-settings";
import { editorLocalization } from "../editorLocalization";
import { buildConditionQuestionList, ConditionEditor, getConditionVariableNames } from "../property-grid/condition-survey";
import { getConditionQuestionKey } from "../utils/data-path";
import { IExpressionSite } from "./expression-check";
import { LintPathResolver } from "./lint-paths";

// Functions Survey Creator registers for its own editors. They are no part of the survey a user
// builds, so the AI never hears of them. tests/expression-assistant/expression-context.tests.ts scans
// the sources for registrations and fails when one is missing here.
export const creatorInternalFunctions: Array<string> = [
  "questionValueVisibleIf", "propertyVisibleIf", "propertyEnableIf", "logicTypeVisibleIf", "localeEnableIf",
  "searchItem", "validateToolboxJson",
];

// Item-level conditions run once per item of the owner, with {item} set.
const itemConditionProperties = ["choicesvisibleif", "choicesenableif", "rowsvisibleif", "columnsvisibleif"];

function isArrayContainer(question: any): boolean {
  return !!question && typeof question.isDescendantOf === "function" &&
    (question.isDescendantOf("matrixdropdownbase") || question.isDescendantOf("paneldynamic"));
}

// The matrix or dynamic panel at the survey level that holds a condition entry: "items[0].quantity"
// and "row.quantity" (the matrix), "kids[0].kidAge" (the template question of kids). A nested one
// answers through its outer container, so the outermost is taken.
function getEntryContainer(question: any): Question {
  let res: any = isArrayContainer(question) ? question : undefined;
  if (!res && isArrayContainer(question?.parentQuestion)) res = question.parentQuestion;
  for (let i = 0; !!res && isArrayContainer(res.parentQuestion) && i < 100; i++) res = res.parentQuestion;
  return res;
}

// A matrix condition entry ("items[0].quantity", "budget.row1.quantity", "row.quantity") carries the
// matrix as its question; the entry holds one cell, so it is described by its column's cell question
// (or the detail panel question) instead.
function getMatrixEntryCellQuestion(matrix: any, name: string): Question {
  if (!matrix.isDescendantOf("matrixdropdownbase")) return undefined;
  if (name.toLowerCase() === (getConditionQuestionKey(matrix) || "").toLowerCase()) return undefined;
  const key = name.toLowerCase();
  const rowElements: Array<any> = [].concat(matrix.columns);
  if (matrix.detailPanelMode !== "none" && !!matrix.detailPanel) rowElements.push(...matrix.detailPanel.questions);
  let found: any = undefined;
  rowElements.forEach(el => {
    const suffix = "." + (el.name || "").toLowerCase();
    if (key.length > suffix.length && key.substring(key.length - suffix.length) === suffix && (!found || el.name.length > found.name.length)) {
      found = el;
    }
  });
  if (!found) return undefined;
  return found instanceof MatrixDropdownColumn ? found.templateQuestion : found;
}

function describeMatrixEntry(variable: IExpressionVariable, matrix: any, cellQuestion: Question): void {
  describeExpressionQuestion(variable, cellQuestion);
  // a select column without choices of its own shows the matrix's choices
  if (!variable.choices && Serializer.isDescendantOf(cellQuestion.getType(), "selectbase") && Array.isArray(matrix.choices) && matrix.choices.length > 0) {
    variable.choices = toExpressionChoices(matrix.choices);
  }
  const page = getExpressionPageName(matrix);
  if (!!page) variable.page = page; else delete variable.page;
}

// A row entry of a single-choice matrix ("quality.durability") holds the answer in that row: one
// column value, or several for cellType "checkbox". Described as the select question it amounts to,
// the way survey-core builds one for the row (QuestionMatrixModel: isMultiSelect ? "checkbox" : "radiogroup").
function isMatrixRowEntry(matrix: any, name: string): boolean {
  if (!matrix || matrix.getType() !== "matrix") return false;
  const prefix = (getConditionQuestionKey(matrix) || "").toLowerCase() + ".";
  const key = name.toLowerCase();
  return key.indexOf(prefix) === 0 && key.length > prefix.length;
}

function describeMatrixRowEntry(variable: IExpressionVariable, matrix: any): void {
  // the entry's title as QuestionMatrixModel.addConditionObjectsByContext spells it, whatever the
  // editor shows (settings.logic.showTitlesInExpressions)
  const rowKey = variable.name.substring(getConditionQuestionKey(matrix).length + 1).toLowerCase();
  const row: any = (matrix.rows || []).filter((item: ItemValue) => String(item.value).toLowerCase() === rowKey)[0];
  if (!!row) {
    const title = matrix.processedTitle + "." + row.calculatedText;
    if (title !== variable.name) variable.title = title;
  }
  const columns: Array<ItemValue> = matrix.columns || [];
  variable.type = matrix.isMultiSelect ? "checkbox" : "radiogroup";
  const isNumeric = columns.length > 0 && columns.every(col => typeof col.value === "number");
  variable.valueType = matrix.isMultiSelect ? "array" : isNumeric ? "number" : "string";
  const page = getExpressionPageName(matrix);
  if (!!page) variable.page = page;
  const choices = toExpressionChoices(columns);
  if (!!choices && choices.length > 0) variable.choices = choices;
}

type ExpressionScope = IExpressionContext["scopes"][0];
type ExpressionContainer = IExpressionContext["target"]["container"];

// What a site's object runs in, innermost first: an item frame, a dynamic panel entry (the panel),
// a matrix row (the matrix).
function getScopeFrames(site: IExpressionSite): Array<{ kind: "item" | "panel" | "row", question?: any }> {
  const res: Array<{ kind: "item" | "panel" | "row", question?: any }> = [];
  if (!site || !site.obj) return res;
  const obj: any = site.obj;
  if (obj instanceof ItemValue || itemConditionProperties.indexOf((site.propertyName || "").toLowerCase()) > -1) {
    res.push({ kind: "item" });
  }
  // templateVisibleIf & co. sit on the dynamic panel and run inside its template
  if (obj.getType && obj.getType() === "paneldynamic" && (site.propertyName || "").indexOf("template") === 0) {
    res.push({ kind: "panel", question: obj });
  }
  if (obj instanceof MatrixDropdownColumn) {
    res.push({ kind: "row", question: obj.colOwner });
  }
  let el: any = obj instanceof ItemValue ? obj.locOwner : obj;
  for (let i = 0; !!el && i < 100; i++) {
    const parent: PanelModelBase = el.parent;
    if (!parent) break;
    const owner: any = (<any>parent).selectedElementInDesign;
    const parentQuestion: any = el.parentQuestion;
    if (!!parentQuestion && parentQuestion.getType && parentQuestion.getType() === "paneldynamic" && parentQuestion.template === parent) {
      res.push({ kind: "panel", question: parentQuestion });
      el = parentQuestion;
      continue;
    }
    if (!!owner && owner !== parent && owner.isDescendantOf && owner.isDescendantOf("matrixdropdownbase") && owner.detailPanel === parent) {
      res.push({ kind: "row", question: owner });
      el = owner;
      continue;
    }
    el = parent;
  }
  return res;
}

function getFrameScopes(frames: Array<{ kind: "item" | "panel" | "row", question?: any }>): Array<ExpressionScope> {
  const res: Array<ExpressionScope> = [];
  const add = (table: Array<{ key: string, meaning: string, hasNames?: boolean }>, names: Array<string>) => {
    table.forEach(entry => {
      const item: ExpressionScope = { prefix: getExpressionScopePrefix(entry.key), meaning: entry.meaning };
      if (entry.hasNames && !!names) item.names = names;
      res.push(item);
    });
  };
  frames.forEach(frame => {
    if (frame.kind === "item") add(expressionItemScope, undefined);
    if (frame.kind === "panel") add(expressionPanelScope, frame.question.template.questions.map((q: Question) => q.name));
    if (frame.kind === "row") add(expressionRowScope, frame.question.columns.map((col: MatrixDropdownColumn) => col.name));
  });
  return res;
}

function describeContainer(question: any): ExpressionContainer {
  const type: ExpressionContainer["type"] = question.isDescendantOf("paneldynamic") ? "paneldynamic"
    : question.isDescendantOf("matrixdynamic") ? "matrixdynamic" : "matrixdropdown";
  const res: ExpressionContainer = { type: type, name: question.name };
  if (typeof question.title === "string" && !!question.title && question.title !== question.name) res.title = question.title;
  // the name its whole value is read by ({kids}), when it is not the question's name
  const valueName = getConditionQuestionKey(question);
  if (!!valueName && valueName !== question.name) res.valueName = valueName;
  return res;
}

// The scopes every site runs in, and the innermost container they all share. Sites with different
// scopes (a Logic rule over a template question and a top-level question) get only the scopes they
// have in common and no container.
function getSitesScope(sites: Array<IExpressionSite>): { scopes: Array<ExpressionScope>, container: any, isMixed: boolean } {
  const perSite = sites.map(site => {
    const frames = getScopeFrames(site);
    const container = frames.filter(frame => !!frame.question)[0];
    return { scopes: getFrameScopes(frames).map(scope => JSON.stringify(scope)), container: !!container ? container.question : undefined };
  });
  if (perSite.length === 0) return { scopes: [], container: undefined, isMixed: false };
  const first = perSite[0];
  const isMixed = perSite.some(item => item.container !== first.container ||
    item.scopes.length !== first.scopes.length || item.scopes.some((scope, index) => scope !== first.scopes[index]));
  const scopes = first.scopes.filter(scope => perSite.every(item => item.scopes.indexOf(scope) > -1)).map(scope => JSON.parse(scope));
  return { scopes: scopes, container: isMixed ? undefined : first.container, isMixed: isMixed };
}

function getResultType(site: IExpressionSite, isCondition: boolean): string {
  if (isCondition) return "boolean";
  if (!site || !site.obj) return undefined;
  const obj: any = site.obj;
  const question: Question = obj instanceof MatrixDropdownColumn ? obj.templateQuestion : obj;
  const name = site.propertyName;
  if (name === "minValueExpression" || name === "maxValueExpression") {
    return getExpressionValueType(question) === "date" ? "date" : "number";
  }
  if (name === "defaultValueExpression" || name === "setValueExpression") return getExpressionValueType(question);
  return undefined;
}

function isConditionProperty(site: IExpressionSite): boolean {
  if (!site || !site.obj) return false;
  const prop = Serializer.findProperty(site.obj.getType(), site.propertyName);
  return !!prop && prop.type === "condition";
}

// The names the check will accept as runtime variables: the definition's and knownVariables after
// onLintSurvey. A host that removes a name there removes it from what the AI is told, too.
function getLintKnownVariables(creator: SurveyCreatorModel, lintOptions: ISurveyLintOptions): Array<string> {
  if (!lintOptions) return undefined;
  if (!!lintOptions.rules && lintOptions.rules["reference/unknown"] === "off") return undefined;
  const res: Array<string> = [].concat(lintOptions.knownVariables || []);
  if (!!lintOptions.variableDefinitionModel || !!lintOptions.variablePresets) {
    const isOwn = lintOptions.variablePresets === creator.variablePresets && !lintOptions.variableDefinitionModel;
    const model = isOwn ? creator.variablePresetsModel
      : new SurveyVariablePresets(lintOptions.variablePresets, { definitionModel: lintOptions.variableDefinitionModel });
    model.getVariableNames().forEach(name => res.push(name));
    if (!isOwn) model.dispose();
  }
  return res.map(name => name.toLowerCase());
}

function getReferencedNames(expression: string): Array<string> {
  if (!expression) return [];
  try {
    return new ConditionRunner(expression).getVariables().map(name => name.toLowerCase());
  } catch{
    return [];
  }
}

function isReferenced(name: string, referenced: Array<string>): boolean {
  const key = name.toLowerCase();
  return referenced.some(ref => ref === key || ref.indexOf(key + ".") === 0 || ref.indexOf(key + "-") === 0 || ref.indexOf(key + "[") === 0);
}

function buildVariables(creator: SurveyCreatorModel, sites: Array<IExpressionSite>, currentExpression: string,
  editor: ConditionEditor, lintOptions: ISurveyLintOptions, truncated: { variables: boolean, choices: boolean }): Array<IExpressionVariable> {
  const survey = creator.survey;
  const site = sites[0];
  // the very list the condition editor shows: from the editor itself when the request comes from one
  // (the modal, the Logic tab with the rule's context question), else for the first site
  const object = !!editor ? editor.object : site?.obj;
  const propertyName = !!editor ? editor.propertyName : site?.propertyName;
  const context = !!editor ? editor.context : null;
  const hash: { [name: string]: Question } = {};
  const hostModel = creator.variablePresetsModel;
  const entries = buildConditionQuestionList(survey, object, propertyName, context, creator, editor, hash,
    (name: string) => hostModel?.getVariableQuestion(name));
  const surveyVariables = survey.getVariableNames().map(name => name.toLowerCase());
  const calculatedValues = survey.calculatedValues.map(cv => cv.name.toLowerCase());
  const runtimeNames = getConditionVariableNames(survey, hostModel).map(name => name.toLowerCase());
  const lintKnown = getLintKnownVariables(creator, lintOptions);
  // Note the asymmetry: onConditionGetQuestionList hiding a name narrows what the AI is told, but the
  // check still accepts the name - the survey still holds it.
  const variables: Array<IExpressionVariable> = [];
  // The whole value of a matrix or a dynamic panel ({items}, read by the inArray functions) is no
  // entry of the condition editor. It is listed before the first entry of it that survived
  // onConditionGetQuestionList, so a host that hides all of them hides the value too. A complex
  // question the editor lists itself (settings.logic.includeComplexQuestions) is not added twice.
  const listedNames = entries.map(entry => (entry.value || "").toLowerCase());
  const addedContainers: Array<Question> = [];
  const addContainer = (container: Question): void => {
    if (!container || addedContainers.indexOf(container) > -1) return;
    addedContainers.push(container);
    const name = getConditionQuestionKey(container);
    if (listedNames.indexOf(name.toLowerCase()) > -1) return;
    const variable: IExpressionVariable = { name: name, kind: "question" };
    if (!!container.title && container.title !== container.name) variable.title = container.title;
    describeExpressionQuestion(variable, container);
    variables.push(variable);
  };
  entries.forEach(entry => {
    const name: string = entry.value;
    if (!name) return;
    const key = name.toLowerCase();
    let kind: IExpressionVariable["kind"] = "question";
    if (calculatedValues.indexOf(key) > -1) kind = "calculatedValue";
    else if (runtimeNames.indexOf(key) > -1) kind = surveyVariables.indexOf(key) > -1 ? "variable" : "hostVariable";
    if ((kind === "variable" || kind === "hostVariable") && !!lintKnown && lintKnown.indexOf(key) < 0) return;
    if (kind === "question") addContainer(getEntryContainer(entry.question));
    const variable: IExpressionVariable = { name: name, kind: kind };
    if (!!entry.text && entry.text !== name) variable.title = entry.text;
    if (kind === "question") {
      const cellQuestion = !!entry.question ? getMatrixEntryCellQuestion(entry.question, name) : undefined;
      if (!!cellQuestion) describeMatrixEntry(variable, entry.question, cellQuestion);
      else if (isMatrixRowEntry(entry.question, name)) describeMatrixRowEntry(variable, entry.question);
      else describeExpressionQuestion(variable, entry.question);
    }
    if (kind === "hostVariable") {
      // the definition question says what the variable is: its title, its type and its choices
      const hostQuestion = hostModel?.getVariableQuestion(name);
      describeExpressionQuestion(variable, hostQuestion);
      delete variable.page;
      if (!!hostQuestion && !!hostQuestion.title && hostQuestion.title !== hostQuestion.name) variable.title = hostQuestion.title;
    }
    variables.push(variable);
  });
  // what survives a cut: what the expression reads, the target's page, calculated values and
  // variables, then the rest in survey order
  const caps = settings.expressionAssistant;
  const referenced = getReferencedNames(currentExpression);
  const targetPage = getExpressionPageName(site?.obj instanceof ItemValue ? (<any>site.obj).locOwner : site?.obj);
  const rank = (v: IExpressionVariable): number => {
    if (isReferenced(v.name, referenced)) return 0;
    if (v.kind === "question" && !!targetPage && v.page === targetPage) return 1;
    if (v.kind !== "question") return 2;
    return 3;
  };
  const ordered = variables.map((v, index) => ({ v: v, index: index, rank: rank(v) }))
    .sort((a, b) => a.rank !== b.rank ? a.rank - b.rank : a.index - b.index);
  const max = Math.max(0, caps.maxVariables);
  const kept = ordered.filter((item, i) => item.rank === 0 || i < max);
  truncated.variables = kept.length < ordered.length;
  // back to the order the editor lists them in
  const res = kept.sort((a, b) => a.index - b.index).map(item => item.v);
  res.forEach(v => {
    if (Array.isArray(v.choices) && v.choices.length > caps.maxChoicesPerQuestion) {
      v.choices = v.choices.slice(0, Math.max(0, caps.maxChoicesPerQuestion));
      truncated.choices = true;
    }
  });
  return res;
}

function buildExamples(creator: SurveyCreatorModel, sites: Array<IExpressionSite>, truncated: { examples: boolean })
  : Array<{ path: string, propertyName: string, expression: string }> {
  const resolver = new LintPathResolver(creator.survey);
  const site = sites[0];
  const targetPage = getExpressionPageName(site?.obj);
  const isTarget = (obj: Base, propertyName: string) =>
    sites.some(s => (s.obj === obj || s.replaces === obj) && s.propertyName === propertyName);
  const found: Array<{ path: string, propertyName: string, expression: string, rank: number, index: number }> = [];
  resolver.forEachObject((obj, path) => {
    Serializer.getPropertiesByObj(obj).forEach(prop => {
      if (!prop.isExpression) return;
      const expression = (<any>obj)[prop.name];
      if (typeof expression !== "string" || !expression || isTarget(obj, prop.name)) return;
      let rank = 2;
      if (!!site && prop.name === site.propertyName) rank = 0;
      else if (!!targetPage && getExpressionPageName(obj) === targetPage) rank = 1;
      found.push({ path: path, propertyName: prop.name, expression: expression, rank: rank, index: found.length });
    });
  });
  const max = Math.max(0, settings.expressionAssistant.maxExamples);
  truncated.examples = found.length > max;
  return found.sort((a, b) => a.rank !== b.rank ? a.rank - b.rank : a.index - b.index).slice(0, max)
    .map(item => ({ path: item.path, propertyName: item.propertyName, expression: item.expression }));
}

// The context the AI receives about the place being edited, and a ready system prompt built from
// it. Both are plain data: a host adjusts them in the request event before sending them.
// Pass the lint options the check of the same request uses (getExpressionLintOptions), so the AI is
// never offered a runtime variable the check rejects.
export function buildExpressionContext(creator: SurveyCreatorModel, sites: Array<IExpressionSite>, currentExpression: string,
  editor?: ConditionEditor, lintOptions?: ISurveyLintOptions): { context: IExpressionContext, systemPrompt: string } {
  sites = sites || [];
  const site = sites[0];
  const resolver = new LintPathResolver(creator.survey);
  const isCondition = isConditionProperty(site);
  const truncated = { variables: false, choices: false, examples: false };
  const target: IExpressionContext["target"] = {
    isCondition: isCondition,
    objects: sites.map(s => {
      const obj: any = s.obj;
      const item: IExpressionContext["target"]["objects"][0] = { type: obj.getType(), propertyName: s.propertyName };
      if (typeof obj.name === "string" && !!obj.name) item.name = obj.name;
      // "Your discount (%)" says the value is a percentage; a question, a panel, a page and a
      // matrix column have a title, a calculated value or a trigger has none
      if (!(obj instanceof ItemValue) && typeof obj.title === "string" && !!obj.title && obj.title !== obj.name) item.title = obj.title;
      const path = resolver.getPath(!!s.replaces ? s.replaces : obj);
      if (path !== undefined) item.path = path;
      return item;
    }),
  };
  const resultType = getResultType(site, isCondition);
  if (!!resultType) target.resultType = resultType;
  const scope = getSitesScope(sites);
  if (!!scope.container) target.container = describeContainer(scope.container);
  if (scope.isMixed) target.mixedScopes = true;
  const variables = buildVariables(creator, sites, currentExpression, editor, lintOptions, truncated);
  const context: IExpressionContext = {
    guideVersion: expressionGuideVersion,
    target: target,
    variables: variables,
    scopes: scope.scopes,
    functions: getExpressionFunctions(creatorInternalFunctions),
    operators: getExpressionOperators(),
    examples: buildExamples(creator, sites, truncated),
    locales: {
      creator: editorLocalization.currentLocale || "en",
      survey: creator.survey.locale || surveyLocalization.defaultLocale || "en",
    },
    truncated: truncated,
  };
  return { context: context, systemPrompt: buildExpressionSystemPrompt(context) };
}

// survey-core's system prompt with the texts that name Survey Creator: the author, the Creator UI
// and the Creator's locale names. Same context in, byte-identical prompt out: a host may cache it.
export function buildExpressionSystemPrompt(context: IExpressionContext): string {
  return buildCoreExpressionSystemPrompt(context, {
    intro: "You write SurveyJS expressions for an author who builds a form in Survey Creator. The author describes in words what the expression must do; you answer with one expression.",
    uiLanguage: "the language of the Survey Creator UI",
    getLocaleName: locale => editorLocalization.getLocaleName(locale, null, true),
  });
}
