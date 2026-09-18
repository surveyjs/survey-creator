import { Base } from "survey-core";
import { ILintFinding, ISurveyLintOptions, ISurveyLintResult, LintSeverity } from "survey-core/linter";
import { SurveyCreatorModel } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import {
  SurveyTextWorker, SurveyTextWorkerError, SurveyTextWorkerLinterFinding,
} from "../../textWorker";
import { SurveyHelper } from "../../survey-helper";

export function getLinterString(name: string): string {
  return editorLocalization.getString("linter." + name);
}

// The options the JSON tab lints with. The rules that report what the deserializer used to
// report - an unknown key, a missing required property, a value the property cannot hold, an
// element or a trigger or a validator the serializer cannot build - are raised to "error", so
// they keep blocking the way out of the tab the way the deserializer errors did.
// The linter knows only the English words for a new element. The creator has the one its user
// works in, and names a dragged question with it too, so a repaired one reads the same.
function newElementName(nameKind: string, taken: Array<string>): string {
  const key = nameKind === "page" ? "ed.newPageName"
    : nameKind === "panel" ? "ed.newPanelName" : "ed.newQuestionName";
  return SurveyHelper.getNewName(taken.map(name => ({ name: name })),
    editorLocalization.getString(key));
}

export function getCreatorLintOptions(creator: SurveyCreatorModel): ISurveyLintOptions {
  const rules: { [ruleId: string]: LintSeverity } = {
    "property/unknown": "error",
    "property/required": "error",
    "property/not-an-array": "error",
    "element/unknown-type": "error",
    "trigger/unknown-type": "error",
    "validator/unknown-type": "error",
    "property/invalid-value": creator.validateJsonPropertyValues ? "error" : "off",
  };
  const options = {
    lintOptions: <ISurveyLintOptions>{ rules: rules, newElementName: newElementName },
  };
  // the application has the last word
  creator.onLintSurvey.fire(creator, options);
  return options.lintOptions;
}

// What the button offers to do, by the (ruleId, fix.reason) pair the linter names a repair by.
// A repair this version has no wording for keeps the general title rather than a made-up one.
export function getFixTitle(error: SurveyTextWorkerError): string {
  const fallback = getLocString("ed.jsonFixError");
  if (!(error instanceof SurveyTextWorkerLinterFinding)) return fallback;
  const finding = <SurveyTextWorkerLinterFinding>error;
  const fix = finding.finding.fix;
  if (!fix) return fallback;
  const res = editorLocalization.getJsonValue("linter.fixes." + finding.ruleId + "." + fix.reason);
  return res === undefined ? fallback : res;
}

// How a finding looks in the error list of the editor. Info shares the warning look, as the icon
// set has no separate info icon.
export function getFindingSeverityKind(severity: string): string {
  return severity === "error" ? "error" : "warning";
}

// Undefined when the key is missing, instead of the last path segment getString falls back to.
// Not usable for the terms: a term whose text equals its key ("page": "page") reads as missing.
function getTemplate(name: string): string {
  return editorLocalization.getJsonValue("linter." + name);
}

function formatTemplate(name: string, ...args: Array<any>): string {
  const str = getTemplate(name);
  if (str === undefined) return undefined;
  return args.length > 0 ? (<any>str)["format"].apply(str, args) : str;
}

// The linter reports its facts in a named dictionary, so the templates take named placeholders.
export function formatNamed(template: string, data: { [key: string]: any }): string {
  if (!template) return template;
  return template.replace(/\{([^{}]+)\}/g, (match: string, key: string) => {
    const value = !!data ? data[key] : undefined;
    if (value === undefined || value === null) return match;
    // a list of plain values reads as a list; a structured one is composed into a string before
    // it gets here, and anything that slips through stays an unsubstituted placeholder rather
    // than "[object Object]"
    if (Array.isArray(value)) {
      return value.every(item => item === null || typeof item !== "object")
        ? value.join(", ")
        : match;
    }
    if (typeof value === "object") return match;
    return String(value);
  });
}

// The text the worker lints carries a "pos" marker on every object literal (SurveyJSON5), which
// is no part of what the author wrote.
function withoutPositions(value: any): any {
  if (Array.isArray(value)) return value.map(withoutPositions);
  if (!value || typeof value !== "object") return value;
  const res: { [key: string]: any } = {};
  Object.keys(value).forEach(key => { if (key !== "pos") res[key] = withoutPositions(value[key]); });
  return res;
}

// The JSON form, like quoteValue in the core: the string "5" and the number 5 are different
// answers to "which values are allowed", and printing both as 5 hides the very defect.
function quoteValue(value: any): string {
  const res = JSON.stringify(withoutPositions(value));
  return res === undefined ? String(value) : res;
}

function quoteList(values: Array<any>): string {
  if (!Array.isArray(values)) return undefined;
  return values.map(quoteValue).join(", ");
}

// Whether a term is a key of the group at all. Asked of the English dictionary, which defines
// the key set: a locale that has not translated the term still resolves through the fallback.
function hasTerm(group: string, key: string): boolean {
  if (key === undefined || key === null) return false;
  const en: any = editorLocalization.getLocaleStrings("en");
  const terms = !!en && !!en.linter ? en.linter.terms : undefined;
  const table = !!terms ? terms[group] : undefined;
  return !!table && table[key] !== undefined;
}

// The facts a finding of expression/contradiction or expression/meaningless-condition rests on.
// The reason names only the most concrete mechanism, while the core reports every fact it used
// and joins them all - dropping the rest would lose half of the explanation.
function joinFacts(parts: Array<string>): string {
  const separator = getTemplate("facts.separator");
  return parts.filter(part => !!part).join(separator !== undefined ? separator : ", ");
}

function conflictFact(conflict: any): string {
  if (!conflict || !conflict.kind) return undefined;
  const values: Array<any> = Array.isArray(conflict.values) ? conflict.values : [];
  const ref = "{" + conflict.name + "}";
  const and = getTemplate("facts.and");
  const params: { [key: string]: any } = { ref: ref };
  params.values = values.map(quoteValue).join(and !== undefined ? and : " and ");
  params.value = values.length > 0 ? quoteValue(values[0]) : undefined;
  params.min = values.length > 0 ? quoteValue(values[0]) : undefined;
  params.max = values.length > 1 ? quoteValue(values[1]) : undefined;
  // a kind this version does not know is left out rather than printed raw
  const template = getTemplate("facts.conflict." + conflict.kind);
  return template === undefined ? undefined : formatNamed(template, params);
}

function rangeFact(range: any): string {
  if (!range) return undefined;
  const bounds: Array<string> = [];
  if (range.min !== undefined) bounds.push(formatTemplate("facts.atLeast", quoteValue(range.min)));
  if (range.max !== undefined) bounds.push(formatTemplate("facts.atMost", quoteValue(range.max)));
  if (bounds.length === 0) return undefined;
  const and = getTemplate("facts.and");
  return formatNamed(getTemplate("facts.range"), {
    ref: "{" + range.name + "}",
    bounds: bounds.filter(bound => !!bound).join(and !== undefined ? and : " and "),
  });
}

function buildFacts(data: { [key: string]: any }): string {
  const parts: Array<string> = [];
  // the core's order: what conflicts, then what bounds ruled it out, then what is constant
  const conflicts: Array<any> = Array.isArray(data.conflicts) ? data.conflicts : [];
  parts.push(joinFacts(conflicts.map(conflictFact)));
  const ranges: Array<any> = Array.isArray(data.ranges) ? data.ranges : [];
  parts.push(joinFacts(ranges.map(rangeFact)));
  const constants = data.constants;
  if (!!constants && typeof constants === "object") {
    const template = getTemplate("facts.constant");
    parts.push(joinFacts(Object.keys(constants).map(name => formatNamed(template, {
      ref: "{" + name + "}", value: quoteValue(constants[name]),
    }))));
  }
  return joinFacts(parts);
}

// getString, not getTemplate: a term legitimately reads the same as its key ("page": "page"),
// which getJsonValue cannot tell from a missing key.
function getTerm(group: string, key: string): string {
  return getLinterString("terms." + group + "." + (hasTerm(group, key) ? key : "default"));
}

// The owner of a property, the way the core's own message names it: a named element by its
// name, the survey and a nameless element by their class.
function getOwnerText(name: string, className: string): string {
  if (!!name) return "\"" + name + "\"";
  if (className === "survey") return getLinterString("terms.owner.survey");
  return formatTemplate("terms.owner.className", className);
}

// The allowed range of a property, written the way the core writes it: "0..100", "1..", "..10".
function getRangeText(min: any, max: any): string {
  return (typeof min === "number" ? min : "") + ".." + (typeof max === "number" ? max : "");
}

// The container level an unknown trigger-target segment belongs to. matrixdropdown addresses
// a row first and a column second, so its noun depends on how deep the segment is.
function getSegmentNoun(containerType: string, segmentIndex: number): string {
  if (containerType === "matrixdropdown") {
    return getTerm("segmentNoun", segmentIndex === 2 ? "matrixdropdownColumn" : "matrixdropdownRow");
  }
  return getTerm("segmentNoun", containerType);
}

export class JsonEditorLinterModel extends Base {
  public result: ISurveyLintResult;
  public findings: Array<SurveyTextWorkerLinterFinding> = [];

  // Takes over the findings the worker collected and gives each its localized text. While the
  // text does not parse the worker has nothing to analyse, and there are none.
  public update(textWorker: SurveyTextWorker): void {
    this.result = textWorker.lintResult;
    this.findings = textWorker.findings;
    this.findings.forEach(item => { item.text = this.composeMessage(item.finding); });
  }

  // The English "message" of a finding is composed from a base sentence plus optional clauses.
  // The same composition is done here from (ruleId, reason) and messageData, so the whole text
  // is localized. Falls back to the English message when the finding carries no reason - the
  // creator and survey-core are versioned separately.
  public composeMessage(finding: ILintFinding): string {
    if (!finding.reason) return finding.message;
    const template = getTemplate("messages." + finding.ruleId + "." + finding.reason);
    if (template === undefined) return finding.message;
    const params = this.getMessageParams(finding);
    // a sentence built around the facts needs them: a newer core reporting a fact this version
    // cannot name would otherwise read as "contradicts itself: ." - the English of the core is
    // a worse language but a whole sentence
    if (template.indexOf("{facts}") > -1 && !params.facts) return finding.message;
    const parts = [formatNamed(template, params)];
    this.getSuffixes(finding, template).forEach(suffix => { if (!!suffix) parts.push(suffix); });
    return parts.join(" ");
  }

  private getMessageParams(finding: ILintFinding): { [key: string]: any } {
    const data = finding.messageData || {};
    const params: { [key: string]: any } = {};
    for (const key in data) params[key] = data[key];
    // a nameless finding is addressed by its element, and a nameless element by its path
    if (!params.name) params.name = finding.elementName || finding.path;
    ["values", "available", "names", "setRoots"].forEach(key => {
      if (Array.isArray(data[key])) params[key] = quoteList(data[key]);
    });
    if (finding.ruleId === "expression/type-mismatch") {
      params.valueShapeText = getTerm("valueShape", data.valueShape);
    }
    if (finding.ruleId === "choices/dead-source") {
      params.fieldNoun = getTerm("sourceField", data.sourceType);
    }
    if (finding.ruleId === "trigger/unknown-target") {
      params.segmentNoun = getSegmentNoun(data.containerType, data.segmentIndex);
      params.kindText = getTerm("targetKind", data.kind);
      params.verb = getTerm("triggerVerb", data.prop);
    }
    if (finding.ruleId === "page/empty") {
      params.kindText = getTerm("containerKind", data.kind);
    }
    // a keyName names a column of a matrix or a question of a dynamic panel template
    if (finding.reason === "keyNameNotFound") {
      params.keyNoun = getTerm("segmentNoun", data.questionType);
    }
    // only the count reasons have a direction; the bound and step ones carry no count at all
    if (finding.reason === "countOutOfBounds") {
      params.direction = getLinterString(
        "terms.countDirection." + (data.count < data.bound ? "below" : "above"));
    }
    if (finding.ruleId === "property/unknown" || finding.ruleId === "property/dead" ||
      finding.ruleId === "property/invalid-value" || finding.ruleId === "property/required" ||
      finding.ruleId === "property/not-an-array") {
      params.ownerText = getOwnerText(data.name, data.className);
    }
    // the JSON form, the way the core prints it: an object would otherwise leave the placeholder
    if (finding.ruleId === "property/required") {
      params.valueText = quoteValue(data.value);
    }
    if (finding.ruleId === "property/invalid-value") {
      params.valueText = quoteValue(data.value);
      params.allowedText = quoteList(data.allowed);
      params.rangeText = getRangeText(data.min, data.max);
      if (typeof data.valueName === "string") {
        params.rootKey = data.valueName.split(".")[0];
      }
    }
    if (finding.ruleId === "name/shadowing") {
      params.nameKindText = getTerm("nameKind", data.nameKind);
      // a calculated value is not an element, and its elementType is a serializer class name
      params.ownerText = data.nameKind === "calculatedValue"
        ? getTerm("nameOwner", "calculatedValue")
        : (finding.elementType || getTerm("nameOwner", undefined));
    }
    if (finding.ruleId === "choices/duplicate") {
      params.valueText = quoteValue(data.value);
      // an item this version has no word for is named by its own key rather than mislabelled
      params.specialItemText = hasTerm("specialItem", data.specialItem)
        ? getTerm("specialItem", data.specialItem)
        : data.specialItem;
    }
    if (finding.ruleId === "validator/dead") {
      params.effectText = getTerm("deadValidatorEffect", data.effect);
      params.causeText = getTerm("deadValidatorCause", data.cause);
    }
    if (finding.ruleId === "element/never-visible") {
      const dependsOn: Array<string> = Array.isArray(data.dependsOn) ? data.dependsOn : [];
      params.reads = dependsOn.map(name => "{" + name + "}").join(", ");
      params.deadClause = getLinterString(
        "terms.deadValueClause." + (dependsOn.length > 1 ? "many" : "one"));
    }
    if (finding.ruleId === "cycle/value-write") {
      const labels: Array<string> = Array.isArray(data.labels) ? data.labels : [];
      params.label = labels[0];
      params.chain = labels.join(" -> ");
    }
    if (finding.ruleId === "expression/contradiction" ||
      finding.ruleId === "expression/meaningless-condition") {
      params.facts = buildFacts(data);
    }
    if (finding.ruleId === "value/not-a-choice") {
      params.valuesText = quoteList(data.values);
      params.availableText = quoteList(data.available);
      params.sourceValuesText = quoteList(data.sourceValues);
      params.sourceShapeText = getTerm("copyShape", data.sourceShape);
      params.targetShapeText = getTerm("copyShape", data.targetShape);
    }
    return params;
  }

  private getSuffixes(finding: ILintFinding, template: string): Array<string> {
    const data = finding.messageData || {};
    const res: Array<string> = [];
    const suffix = (name: string, ...args: Array<any>): string =>
      formatTemplate.apply(undefined, ["suffixes." + name].concat(args));
    // one reason, two shapes: a name read from every entry of the container the call reads,
    // or one the function resolves against the survey
    if (finding.reason === "functionArgNotFound") {
      res.push(!!data.containerName
        ? suffix("functionArgInContainer", data.functionName, data.containerType, data.containerName)
        : suffix("functionArgStandalone", data.functionName));
    }
    if (finding.ruleId === "expression/syntax") {
      if (typeof data.at === "number") res.push(suffix("atPosition", data.at));
      if (data.synthesized) res.push(suffix("fromLegacyTrigger"));
    }
    if (finding.ruleId === "name/duplicate" && !!data.scope) {
      res.push(suffix("inScope", data.scope));
    }
    if (finding.ruleId === "cycle/trigger") res.push(suffix("loopMayBeUnreachable"));
    // a member of the loop is a defaultValueExpression: it stops applying once the question is
    // answered, so the loop may be shorter-lived than it reads
    if (finding.ruleId === "cycle/value-write" && Array.isArray(data.labels) &&
      data.labels.some((label: string) => label.indexOf("defaultValueExpression") > -1)) {
      res.push(suffix("defaultValueExpressionNote"));
    }
    if (!!finding.suggestion) {
      // for one rule the suggestion is prose rather than a name, and carries its own reason
      const suggestionReason = data.suggestionReason;
      if (!!suggestionReason) {
        res.push(formatTemplate("suggestions." + suggestionReason, data.recordName || data.name));
      } else {
        res.push(suffix("didYouMean", finding.suggestion));
      }
    } else {
      // an element with no type at all has no spelling a component definition could explain
      if (finding.ruleId === "element/unknown-type" && finding.reason === "unknownType") {
        res.push(suffix("customComponentHint"));
      }
      if (finding.ruleId === "expression/unknown-function") res.push(suffix("registerFunctionHint"));
      if (finding.ruleId === "trigger/unknown-type") res.push(suffix("triggerTypeDroppedHint"));
      if (finding.ruleId === "property/unknown") res.push(suffix("deserializerDropsKey"));
      if (finding.ruleId === "validator/unknown-type") res.push(suffix("validatorDroppedHint"));
    }
    // the element is worth naming only where it is not the data key itself, which it is
    // unless a valueName renamed it
    if ((finding.reason === "commentKeyCollision" || finding.reason === "totalKeyCollision") &&
      !!data.name && data.name !== data.dataName) {
      res.push(suffix("dataKeyOwner", data.name));
    }
    // the answer shape a dead validator was judged by depends on the inputType of a text question
    if (finding.ruleId === "validator/dead" && !!data.inputType) {
      res.push(suffix("validatorInputType", data.inputType));
    }
    if (finding.ruleId === "trigger/unknown-target" && data.kind === "questionvalue" &&
      finding.reason === "rootNotFound") {
      res.push(suffix("knownVariablesHint"));
    }
    if (!!finding.hint) {
      res.push(formatTemplate("hints." + finding.hint.reason, finding.hint.name));
    }
    if (finding.ruleId === "reference/unknown" && data.refKind === "binding") {
      res.push(suffix("inBindings"));
    } else if (finding.ruleId === "reference/unknown" && data.refKind === "choicesByUrlVariable") {
      res.push(suffix("inChoicesByUrl", data.prop));
    } else if (finding.ruleId === "reference/unknown" && data.refKind === "textPiping") {
      res.push(suffix("inText", data.prop));
    } else if (!!data.expression && template.indexOf("{expression}") < 0) {
      // a template that quotes the expression itself needs no trailing "In expression: ..."
      res.push(suffix("inExpression", data.expression));
    }
    return res;
  }
}
