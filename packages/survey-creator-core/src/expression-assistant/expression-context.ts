import {
  Base, ConditionRunner, FunctionFactory, IFunctionRegistration, ItemValue, MatrixDropdownColumn, PanelModelBase, Question,
  Serializer, SurveyModel, SurveyVariablePresets, getConditionOperatorNames,
  settings as surveySettings, surveyLocalization,
} from "survey-core";
import { ISurveyLintOptions } from "survey-core/linter";
import { SurveyCreatorModel } from "../creator-base";
import { settings } from "../creator-settings";
import { editorLocalization } from "../editorLocalization";
import { buildConditionQuestionList, ConditionEditor, getConditionVariableNames } from "../property-grid/condition-survey";
import { IExpressionSite } from "./expression-check";
import { LintPathResolver } from "./lint-paths";
import { expressionGuideVersion, getExpressionGuideText } from "./expression-guide";

export interface IExpressionContextChoice { value: any, text: string }
export interface IExpressionVariable {
  name: string;
  title?: string;
  kind: "question" | "calculatedValue" | "hostVariable" | "variable";
  type?: string;
  valueType?: string;
  page?: string;
  choices?: Array<IExpressionContextChoice>;
  rows?: Array<IExpressionContextChoice>;
  columns?: Array<{ name: string, title?: string, cellType?: string }>;
}
export interface IExpressionContextFunction {
  name: string;
  isCustom: boolean;
  isAsync: boolean;
  signature?: string;
  description?: string;
}
export interface IExpressionContextOperator {
  name: string;
  spellings: Array<string>;
  // the question types a condition editor offers the operator for; empty: every type
  questionTypes: Array<string>;
}
export interface IExpressionContext {
  guideVersion: string;
  target: {
    isCondition: boolean,
    resultType?: string,
    objects: Array<{ type: string, name?: string, path?: string, propertyName: string }>,
  };
  variables: Array<IExpressionVariable>;
  scopes: Array<{ prefix: string, meaning: string, names?: Array<string> }>;
  functions: Array<IExpressionContextFunction>;
  operators: Array<IExpressionContextOperator>;
  examples: Array<{ path: string, propertyName: string, expression: string }>;
  locales: { creator: string, survey: string };
  truncated: { variables: boolean, choices: boolean, examples: boolean };
}

// Functions Survey Creator registers for its own editors. They are no part of the survey a user
// builds, so the AI never hears of them. tests/expression-assistant/expression-context.tests.ts scans
// the sources for registrations and fails when one is missing here.
export const creatorInternalFunctions: Array<string> = [
  "questionValueVisibleIf", "propertyVisibleIf", "propertyEnableIf", "logicTypeVisibleIf", "localeEnableIf",
  "searchItem", "validateToolboxJson",
];

// The functions registered by the time this module loads are survey-core's own; whatever an
// application registers later is a custom function.
const builtInFunctions: Array<string> = FunctionFactory.Instance.getAll();

// Every spelling the grammar (survey-core expressions/grammar.pegjs) accepts per operator. Not
// OperandMaker.signs, which is a display table. A test parses each spelling to its operator.
export const expressionOperatorSpellings: { [name: string]: Array<string> } = {
  empty: ["empty"],
  notempty: ["notempty"],
  equal: ["=", "==", "equal"],
  notequal: ["!=", "<>", "notequal"],
  contains: ["contains", "contain", "*="],
  notcontains: ["notcontains", "notcontain"],
  anyof: ["anyof"],
  noneof: ["noneof"],
  allof: ["allof"],
  greater: [">", "greater"],
  less: ["<", "less"],
  greaterorequal: [">=", "greaterorequal"],
  lessorequal: ["<=", "lessorequal"],
  and: ["and", "&&"],
  or: ["or", "||"],
  negate: ["!", "negate"],
  plus: ["+"],
  minus: ["-"],
  mul: ["*"],
  div: ["/"],
  mod: ["%"],
  power: ["^", "power"],
};
const nonConditionOperators = ["and", "or", "negate", "plus", "minus", "mul", "div", "mod", "power"];

// What each scope prefix means, keyed by its settings.expressionVariables entry; the prefix itself
// is read from the settings at call time, so a renamed prefix is what the AI is told.
const panelScope: Array<{ key: string, meaning: string, hasNames?: boolean }> = [
  { key: "panel", meaning: "a question of the same dynamic panel entry: {panel.name}", hasNames: true },
  { key: "prevPanel", meaning: "a question of the previous dynamic panel entry: {prevPanel.name}", hasNames: true },
  { key: "nextPanel", meaning: "a question of the next dynamic panel entry: {nextPanel.name}", hasNames: true },
  { key: "parentPanel", meaning: "a question of the entry of the outer dynamic panel: {parentPanel.name}" },
  { key: "panelIndex", meaning: "the zero-based index of the dynamic panel entry: {panelIndex}" },
  { key: "visiblePanelIndex", meaning: "the zero-based index of the entry among the visible ones: {visiblePanelIndex}" },
];
const rowScope: Array<{ key: string, meaning: string, hasNames?: boolean }> = [
  { key: "row", meaning: "a cell of the same matrix row: {row.columnName}", hasNames: true },
  { key: "prevRow", meaning: "a cell of the previous row: {prevRow.columnName}", hasNames: true },
  { key: "nextRow", meaning: "a cell of the next row: {nextRow.columnName}", hasNames: true },
  { key: "totalRow", meaning: "a cell of the total row: {totalRow.columnName}", hasNames: true },
  { key: "rowIndex", meaning: "the zero-based index of the row: {rowIndex}" },
  { key: "visibleRowIndex", meaning: "the zero-based index of the row among the visible ones: {visibleRowIndex}" },
  { key: "rowValue", meaning: "the value (name) of the row of a matrix with fixed rows: {rowValue}" },
];
const itemScope: Array<{ key: string, meaning: string, hasNames?: boolean }> = [
  { key: "item", meaning: "the value of the choice, row or column being tested: {item}" },
];
// Item-level conditions run once per item of the owner, with {item} set.
const itemConditionProperties = ["choicesvisibleif", "choicesenableif", "rowsvisibleif", "columnsvisibleif"];

function getPrefix(key: string): string {
  const res = (<any>surveySettings.expressionVariables)[key];
  return typeof res === "string" && !!res ? res : key;
}

function getValueType(question: Question): string {
  if (!question || !question.getType) return undefined;
  const type = question.getType();
  const is = (name: string) => Serializer.isDescendantOf(type, name);
  if (is("checkbox") || is("ranking") || is("tagbox") || is("imagepicker") && (<any>question).multiSelect) return "array";
  if (is("matrixdynamic") || is("paneldynamic") || is("file")) return "array";
  if (is("matrix") || is("matrixdropdown") || is("multipletext")) return "object";
  if (is("boolean")) return "boolean";
  if (is("rating") || is("slider")) return "number";
  if (is("text")) {
    const inputType = (<any>question).inputType;
    if (inputType === "number" || inputType === "range") return "number";
    if (inputType === "date" || inputType === "datetime-local" || inputType === "month" || inputType === "week") return "date";
    return "string";
  }
  if (is("comment") || is("dropdown") || is("radiogroup") || is("imagepicker") || is("buttongroup")) return "string";
  return undefined;
}

function toChoices(items: Array<ItemValue>): Array<IExpressionContextChoice> {
  if (!Array.isArray(items)) return undefined;
  return items.map(item => ({ value: item.value, text: item.text }));
}

// The values a question can hold, as a condition compares them: the listed choices plus the
// built-in items it shows (none, other, ...).
function getChoices(question: Question): Array<IExpressionContextChoice> {
  if (!question || !question.getType) return undefined;
  const q: any = question;
  const type = question.getType();
  if (Serializer.isDescendantOf(type, "selectbase")) {
    const items: Array<ItemValue> = [].concat(q.choices || []);
    [["showNoneItem", "noneItem"], ["showOtherItem", "otherItem"], ["showRefuseItem", "refuseItem"], ["showDontKnowItem", "dontKnowItem"]]
      .forEach(([flag, item]) => { if (!!q[flag] && !!q[item]) items.push(q[item]); });
    return items.length > 0 ? toChoices(items) : undefined;
  }
  if (type === "rating" && Array.isArray(q.visibleRateValues)) return toChoices(q.visibleRateValues);
  if (type === "boolean") {
    return [
      { value: q.getValueTrue ? q.getValueTrue() : true, text: q.labelTrue || q.locLabelTrue?.renderedHtml },
      { value: q.getValueFalse ? q.getValueFalse() : false, text: q.labelFalse || q.locLabelFalse?.renderedHtml },
    ];
  }
  if (type === "matrix") return toChoices(q.columns);
  return undefined;
}

function getPageName(obj: any): string {
  let page = obj?.page;
  if (!page && !!obj?.colOwner) page = obj.colOwner.page;
  return !!page ? page.name : undefined;
}

function describeQuestion(variable: IExpressionVariable, question: Question): void {
  if (!question || !question.getType) return;
  const q: any = question;
  const type = question.getType();
  variable.type = type;
  const valueType = getValueType(question);
  if (!!valueType) variable.valueType = valueType;
  const page = getPageName(question);
  if (!!page) variable.page = page;
  const choices = getChoices(question);
  if (!!choices) variable.choices = choices;
  if (type === "matrix" || type === "matrixdropdown") variable.rows = toChoices(q.rows);
  if (Serializer.isDescendantOf(type, "matrixdropdownbase")) {
    variable.columns = q.columns.map((col: MatrixDropdownColumn) => ({ name: col.name, title: col.title, cellType: col.cellType }));
  }
  if (type === "paneldynamic") {
    variable.columns = q.template.questions.map((tq: Question) => ({ name: tq.name, title: tq.title, cellType: tq.getType() }));
  }
  if (type === "multipletext") {
    variable.columns = q.items.map((item: any) => ({ name: item.name, title: item.title, cellType: item.inputType }));
  }
}

function getSignature(reg: IFunctionRegistration): string {
  if (!Array.isArray(reg.parameters)) return undefined;
  const params = reg.parameters.map(p => (p.isRest ? "..." : "") + p.name + (p.optional ? "?" : "") + (!!p.type ? ": " + p.type : ""));
  return reg.name + "(" + params.join(", ") + ")" + (!!reg.returnType ? ": " + reg.returnType : "");
}

function getFunctions(): Array<IExpressionContextFunction> {
  return FunctionFactory.Instance.getRegistrations()
    .filter(reg => creatorInternalFunctions.indexOf(reg.name) < 0)
    .map(reg => {
      const res: IExpressionContextFunction = {
        name: reg.name, isCustom: builtInFunctions.indexOf(reg.name) < 0, isAsync: !!reg.isAsync,
      };
      const signature = getSignature(reg);
      if (!!signature) res.signature = signature;
      if (!!reg.description) res.description = reg.description;
      return res;
    });
}

function getOperators(): Array<IExpressionContextOperator> {
  const table: { [name: string]: Array<string> } = surveySettings.logic.operators;
  const res: Array<IExpressionContextOperator> = getConditionOperatorNames().map(name => ({
    name: name, spellings: (expressionOperatorSpellings[name] || [name]).slice(),
    questionTypes: Array.isArray(table[name]) ? table[name].slice() : [],
  }));
  nonConditionOperators.forEach(name => res.push({ name: name, spellings: expressionOperatorSpellings[name].slice(), questionTypes: [] }));
  return res;
}

// The scopes the first site's object runs in: a dynamic panel template, a matrix row, an item frame.
function getScopes(site: IExpressionSite): Array<{ prefix: string, meaning: string, names?: Array<string> }> {
  const res: Array<{ prefix: string, meaning: string, names?: Array<string> }> = [];
  const add = (table: Array<{ key: string, meaning: string, hasNames?: boolean }>, names: Array<string>) => {
    table.forEach(entry => {
      const item: { prefix: string, meaning: string, names?: Array<string> } = { prefix: getPrefix(entry.key), meaning: entry.meaning };
      if (entry.hasNames && !!names) item.names = names;
      res.push(item);
    });
  };
  if (!site || !site.obj) return res;
  const obj: any = site.obj;
  if (obj instanceof ItemValue || itemConditionProperties.indexOf((site.propertyName || "").toLowerCase()) > -1) {
    add(itemScope, undefined);
  }
  // templateVisibleIf & co. sit on the dynamic panel and run inside its template
  if (obj.getType && obj.getType() === "paneldynamic" && (site.propertyName || "").indexOf("template") === 0) {
    add(panelScope, obj.template.questions.map((q: Question) => q.name));
  }
  if (obj instanceof MatrixDropdownColumn) {
    add(rowScope, (<any>obj.colOwner).columns.map((col: MatrixDropdownColumn) => col.name));
  }
  let el: any = obj instanceof ItemValue ? obj.locOwner : obj;
  for (let i = 0; !!el && i < 100; i++) {
    const parent: PanelModelBase = el.parent;
    if (!parent) break;
    const owner: any = (<any>parent).selectedElementInDesign;
    const parentQuestion: any = el.parentQuestion;
    if (!!parentQuestion && parentQuestion.getType && parentQuestion.getType() === "paneldynamic" && parentQuestion.template === parent) {
      add(panelScope, parentQuestion.template.questions.map((q: Question) => q.name));
      el = parentQuestion;
      continue;
    }
    if (!!owner && owner !== parent && owner.isDescendantOf && owner.isDescendantOf("matrixdropdownbase") && owner.detailPanel === parent) {
      add(rowScope, owner.columns.map((col: MatrixDropdownColumn) => col.name));
      el = owner;
      continue;
    }
    el = parent;
  }
  return res;
}

function getResultType(site: IExpressionSite, isCondition: boolean): string {
  if (isCondition) return "boolean";
  if (!site || !site.obj) return undefined;
  const obj: any = site.obj;
  const question: Question = obj instanceof MatrixDropdownColumn ? obj.templateQuestion : obj;
  const name = site.propertyName;
  if (name === "minValueExpression" || name === "maxValueExpression") {
    return getValueType(question) === "date" ? "date" : "number";
  }
  if (name === "defaultValueExpression" || name === "setValueExpression") return getValueType(question);
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
  entries.forEach(entry => {
    const name: string = entry.value;
    if (!name) return;
    const key = name.toLowerCase();
    let kind: IExpressionVariable["kind"] = "question";
    if (calculatedValues.indexOf(key) > -1) kind = "calculatedValue";
    else if (runtimeNames.indexOf(key) > -1) kind = surveyVariables.indexOf(key) > -1 ? "variable" : "hostVariable";
    if ((kind === "variable" || kind === "hostVariable") && !!lintKnown && lintKnown.indexOf(key) < 0) return;
    const variable: IExpressionVariable = { name: name, kind: kind };
    if (!!entry.text && entry.text !== name) variable.title = entry.text;
    if (kind === "question") describeQuestion(variable, entry.question);
    if (kind === "hostVariable") {
      // the definition question says what the variable is: its title, its type and its choices
      const hostQuestion = hostModel?.getVariableQuestion(name);
      describeQuestion(variable, hostQuestion);
      delete variable.page;
      if (!!hostQuestion && !!hostQuestion.title && hostQuestion.title !== hostQuestion.name) variable.title = hostQuestion.title;
    }
    variables.push(variable);
  });
  // what survives a cut: what the expression reads, the target's page, calculated values and
  // variables, then the rest in survey order
  const caps = settings.expressionAssistant;
  const referenced = getReferencedNames(currentExpression);
  const targetPage = getPageName(site?.obj instanceof ItemValue ? (<any>site.obj).locOwner : site?.obj);
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
  const targetPage = getPageName(site?.obj);
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
      else if (!!targetPage && getPageName(obj) === targetPage) rank = 1;
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
      const item: { type: string, name?: string, path?: string, propertyName: string } = { type: obj.getType(), propertyName: s.propertyName };
      if (typeof obj.name === "string" && !!obj.name) item.name = obj.name;
      const path = resolver.getPath(!!s.replaces ? s.replaces : obj);
      if (path !== undefined) item.path = path;
      return item;
    }),
  };
  const resultType = getResultType(site, isCondition);
  if (!!resultType) target.resultType = resultType;
  const variables = buildVariables(creator, sites, currentExpression, editor, lintOptions, truncated);
  const context: IExpressionContext = {
    guideVersion: expressionGuideVersion,
    target: target,
    variables: variables,
    scopes: getScopes(site),
    functions: getFunctions(),
    operators: getOperators(),
    examples: buildExamples(creator, sites, truncated),
    locales: {
      creator: editorLocalization.currentLocale || "en",
      survey: creator.survey.locale || surveyLocalization.defaultLocale || "en",
    },
    truncated: truncated,
  };
  return { context: context, systemPrompt: buildExpressionSystemPrompt(context) };
}

// Same context in, byte-identical prompt out: a host may cache it.
export function buildExpressionSystemPrompt(context: IExpressionContext): string {
  const lines: Array<string> = [];
  lines.push("You write SurveyJS expressions for an author who builds a form in Survey Creator. The author describes in words what the expression must do; you answer with one expression.");
  lines.push("");
  lines.push(getExpressionGuideText());
  lines.push("");
  lines.push("## The place being edited and what the expression can use (JSON)");
  lines.push(JSON.stringify(context, null, 2));
  lines.push("");
  lines.push("## Rules");
  lines.push("- Use only the names listed under \"variables\" and only the functions listed under \"functions\".");
  lines.push("- Compare a question with the values of its choices, never with their texts.");
  lines.push(context.scopes.length > 0
    ? "- Use the scope prefixes listed under \"scopes\" and no others."
    : "- Use no scope prefix: this expression runs at the survey level.");
  if (context.target.isCondition) {
    lines.push("- The expression is a condition: it must evaluate to true or false.");
  } else if (!!context.target.resultType) {
    lines.push("- The expression must evaluate to a value of type " + context.target.resultType + ".");
  }
  const partial = Object.keys(context.truncated).filter(key => (<any>context.truncated)[key]);
  if (partial.length > 0) {
    lines.push("- Some lists are partial (" + partial.join(", ") + "): the survey has more than is shown.");
  }
  lines.push("- When the request cannot be expressed with what is listed, say so in the explanation and return an empty expression.");
  lines.push("");
  lines.push("## Answer");
  lines.push("Answer with JSON only, nothing around it: {\"expression\": \"...\", \"explanation\": \"...\"}. The explanation is one or two sentences in the language the author wrote in.");
  return lines.join("\n");
}
