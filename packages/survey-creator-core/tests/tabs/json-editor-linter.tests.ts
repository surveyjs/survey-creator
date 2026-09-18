import {
  getRules, SurveyLintFixReasons, SurveyLintHintReasons, SurveyLintReasons,
} from "survey-core/linter";
import { TextareaJsonEditorModel, TabJsonEditorTextareaPlugin } from "../../src/components/tabs/json-editor-textarea";
import { formatNamed, getCreatorLintOptions, getFindingSeverityKind } from "../../src/components/tabs/json-editor-linter";
import { CreatorTester } from "../creator-tester";
import { SurveyTextWorker } from "../../src/textWorker";
import { editorLocalization } from "../../src/editorLocalization";

function createEditor(text: string, options?: any): TextareaJsonEditorModel {
  const creator = new CreatorTester(options);
  const editor = new TextareaJsonEditorModel(creator);
  editor.text = text;
  editor.processErrors(editor.text);
  return editor;
}

const badReference = JSON.stringify({
  elements: [
    { type: "text", name: "q1" },
    { type: "text", name: "q2", visibleIf: "{frut} = 'apple'" }
  ]
}, null, 2);

test("Linter runs on valid JSON and reports the finding", () => {
  const editor = createEditor(badReference);
  expect(editor.linter.findings).toHaveLength(1);
  const finding = editor.linter.findings[0];
  expect(finding.ruleId).toBe("reference/unknown");
  expect(finding.severity).toBe("error");
  expect(finding.isFixable).toBeFalsy();
});

test("The error list holds the findings in the order of the text", () => {
  const text = JSON.stringify({
    elements: [
      { type: "text", name: "q1", incorrectProp: "abc" },
      { type: "text", name: "q2", visibleIf: "{frut} = 'apple'" }
    ]
  }, null, 2);
  const editor = createEditor(text);
  expect(editor.hasErrors).toBeTruthy();
  const actions = editor.errorList.actions;
  // the unknown property first, the unknown reference second - one list, sorted by line
  expect(actions).toHaveLength(2);
  expect(actions.map(a => a.data.error.ruleId)).toEqual(["property/unknown", "reference/unknown"]);
  actions.forEach(action => {
    expect(action.id.indexOf("linterfinding_")).toBe(0);
  });
  // a key the deserializer drops can be dropped in the text too; a name that resolves to nothing
  // and reads like nothing else has no repair to offer
  expect(actions[0].data.showFixButton).toBeTruthy();
  expect(actions[1].data.showFixButton).toBeFalsy();
});

test("A parse error is listed as an error and nothing else is", () => {
  const editor = createEditor("{ elements: [");
  const actions = editor.errorList.actions;
  expect(actions).toHaveLength(1);
  expect(actions[0].id.indexOf("error_")).toBe(0);
  expect(actions[0].iconName).toBe("icon-error");
  expect(actions[0].data.error.getErrorType()).toBe("parseerror");
});

test("An error finding gets the error look in the error list", () => {
  const editor = createEditor(badReference);
  expect(editor.linter.findings[0].severity).toBe("error");
  const listed = editor.errorList.actions[0];
  expect(listed.iconName).toBe("icon-error");
  expect(listed.css).toBeUndefined();
});

test("A warning finding keeps the warning look in the error list", () => {
  const editor = createEditor(JSON.stringify({
    pages: [{ name: "p1", elements: [{ type: "text", name: "q1" }] }, { name: "p2" }]
  }, null, 2));
  const finding = editor.linter.findings.filter(f => f.ruleId === "page/empty")[0];
  expect(finding.severity).toBe("warning");
  const listed = editor.errorList.actions.filter(
    a => a.data.error === finding)[0];
  expect(listed.iconName).toBe("icon-warning-24x24");
  expect(listed.css).toBe("svc-json-errors__item--warning");
});

test("getFindingSeverityKind gives info the warning look", () => {
  expect(getFindingSeverityKind("error")).toBe("error");
  expect(getFindingSeverityKind("warning")).toBe("warning");
  // the icon set has no separate info icon, and a severity this version does not know
  // is advisory until proven otherwise
  expect(getFindingSeverityKind("info")).toBe("warning");
  expect(getFindingSeverityKind(undefined)).toBe("warning");
});

test("The error list is cleared once the JSON is fixed", () => {
  const editor = createEditor(badReference);
  expect(editor.errorList.actions).toHaveLength(1);
  editor.text = JSON.stringify({
    elements: [
      { type: "text", name: "frut" },
      { type: "text", name: "q2", visibleIf: "{frut} = 'apple'" }
    ]
  }, null, 2);
  editor.processErrors(editor.text);
  expect(editor.linter.findings).toHaveLength(0);
  expect(editor.errorList.actions).toHaveLength(0);
  expect(editor.hasErrors).toBeFalsy();
});

test("The linter does not run while the JSON has a syntax error", () => {
  const editor = createEditor(badReference);
  expect(editor.linter.findings).toHaveLength(1);
  editor.text = "{ elements: [";
  editor.processErrors(editor.text);
  // nothing to analyse without a parsed JSON: the error list holds the parse error alone
  expect(editor.linter.findings).toHaveLength(0);
  const actions = editor.errorList.actions;
  expect(actions.filter(a => a.id.indexOf("linterfinding_") === 0)).toHaveLength(0);
  expect(actions.filter(a => a.id.indexOf("error_") === 0).length).toBeGreaterThan(0);
});

test("An error finding blocks leaving the tab until onActiveTabChanging allows it", () => {
  const creator = new CreatorTester({ showJSONEditorTab: true });
  const plugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("json");
  creator.activeTab = "json";
  plugin.model.text = badReference;
  plugin.model.processErrors(plugin.model.text);
  expect(plugin.model.linter.findings).toHaveLength(1);
  expect(plugin.model.linter.findings[0].severity).toBe("error");
  // false, not undefined: the JSON parses, so the application may still let the author out
  expect(plugin.model.allowingDeactivate()).toBe(false);
  expect(plugin.defaultAllowingDeactivate()).toBe(false);
  expect(creator.switchTab("designer")).toBeFalsy();
  expect(creator.activeTab).toBe("json");
  creator.onActiveTabChanging.add((sender, options) => { options.allow = true; });
  expect(creator.switchTab("designer")).toBeTruthy();
  expect(creator.activeTab).toBe("designer");
});

test("A warning finding does not block leaving the tab", () => {
  const creator = new CreatorTester({ showJSONEditorTab: true });
  const plugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("json");
  creator.activeTab = "json";
  plugin.model.text = JSON.stringify({
    pages: [{ name: "p1", elements: [{ type: "text", name: "q1" }] }, { name: "p2" }]
  }, null, 2);
  plugin.model.processErrors(plugin.model.text);
  expect(plugin.model.linter.findings.map(f => f.ruleId)).toEqual(["page/empty"]);
  expect(plugin.model.hasErrors).toBeTruthy();
  expect(plugin.model.allowingDeactivate()).toBe(true);
  expect(creator.switchTab("designer")).toBeTruthy();
  expect(creator.activeTab).toBe("designer");
});

test("A text that does not parse blocks leaving the tab and nothing can allow it", () => {
  const creator = new CreatorTester({ showJSONEditorTab: true });
  const plugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("json");
  creator.activeTab = "json";
  creator.onActiveTabChanging.add((sender, options) => { options.allow = true; });
  plugin.model.text = "{ elements: [";
  expect(plugin.model.allowingDeactivate()).toBeUndefined();
  expect(creator.switchTab("designer")).toBeFalsy();
  expect(creator.activeTab).toBe("json");
});

test("The linter validates the text of the active JSON tab", () => {
  const creator = new CreatorTester({ showJSONEditorTab: true });
  const plugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("json");
  creator.activeTab = "json";
  plugin.model.text = badReference;
  plugin.model.processErrors(plugin.model.text);
  expect(plugin.model.linter.findings).toHaveLength(1);
  expect(plugin.model.errorList.actions).toHaveLength(1);
  expect(plugin.model.allowingDeactivate()).toBe(false);
});

test("The JSON tab adds no sidebar page", () => {
  const creator = new CreatorTester({ showJSONEditorTab: true });
  creator.activeTab = "json";
  expect(creator.sidebar.getPageById("linter")).toBeUndefined();
});

test("Clicking a finding navigates to its line", () => {
  const editor = createEditor(badReference);
  const finding = editor.linter.findings[0];
  // "visibleIf" of the second element, 0-based row
  expect(finding.rowAt).toBe(9);
  expect(editor.errorList.actions[0].title.indexOf("Line: 10.")).toBe(0);
});

test("getPositionByPath walks arrays and refines to the property key", () => {
  const text = "{\n \"pages\": [\n  {\n   \"elements\": [\n    { \"type\": \"text\", \"name\": \"q1\", \"visibleIf\": \"{a} = 1\" }\n   ]\n  }\n ]\n}";
  const worker = new SurveyTextWorker(text);
  expect(worker.isJsonCorrect).toBeTruthy();
  const prop = worker.getPositionByPath("pages[0].elements[0].visibleIf");
  expect(prop.rowAt).toBe(4);
  expect(text.substring(prop.at, prop.at + 11)).toBe("\"visibleIf\"");
  const element = worker.getPositionByPath("pages[0].elements[0]");
  expect(text.charAt(element.at)).toBe("{");
  expect(element.rowAt).toBe(4);
});

test("getPositionByPath reports -1 for a path that resolves to nothing at all", () => {
  const worker = new SurveyTextWorker("{ \"elements\": [{ \"type\": \"text\", \"name\": \"q1\" }] }");
  expect(worker.getPositionByPath("nosuch[3].path").at).toBe(-1);
  expect(worker.getPositionByPath("").at).toBe(-1);
  expect(worker.getPositionByPath(undefined).at).toBe(-1);
});

test("getPositionByPath falls back to the deepest segment it did resolve", () => {
  const text = "{ \"elements\": [{ \"type\": \"text\", \"name\": \"q1\", \"visibleIf\": \"{q2} = 1\" }] }";
  const worker = new SurveyTextWorker(text);
  // the condition of an inArray call is a site of its own, and the text has no place for it
  const inArray = worker.getPositionByPath("elements[0].visibleIf.inArray[0]");
  expect(text.substring(inArray.at, inArray.at + 11)).toBe("\"visibleIf\"");
  // a property the JSON does not state at all still points at the element it belongs to
  const element = worker.getPositionByPath("elements[0].nosuchprop");
  expect(text.charAt(element.at)).toBe("{");
  expect(element.at).toBeGreaterThan(0);
});

test("A message is composed from (ruleId, reason) and messageData, not from the English text", () => {
  const editor = createEditor(badReference);
  const finding = editor.linter.findings[0];
  expect(finding.finding.reason).toBe(SurveyLintReasons["reference/unknown"].notFound);
  expect(finding.text).toBe(
    "\"frut\" is not found - no question, panel, page, calculated value, or variable with that name exists." +
    " In expression: {frut} = 'apple'");
});

test("The didYouMean clause is appended when the linter suggests a name", () => {
  const editor = createEditor(JSON.stringify({
    elements: [
      { type: "text", name: "fruit" },
      { type: "text", name: "q2", visibleIf: "{frut} = 'apple'" }
    ]
  }, null, 2));
  expect(editor.linter.findings).toHaveLength(1);
  expect(editor.linter.findings[0].text).toContain("Did you mean \"fruit\"?");
});

test("A localized message follows the creator locale", () => {
  const editor = createEditor(badReference);
  const deStrings: any = { linter: { messages: { "reference/unknown": { notFound: "DE {name}" } } } };
  editorLocalization.setupLocale("zz", deStrings);
  const prevLocale = editorLocalization.currentLocale;
  try {
    editorLocalization.currentLocale = "zz";
    expect(editor.linter.composeMessage(editor.linter.findings[0].finding).indexOf("DE frut")).toBe(0);
  } finally {
    editorLocalization.currentLocale = prevLocale;
  }
});

test("A finding without a reason falls back to the English message of the linter", () => {
  const editor = createEditor(badReference);
  const finding = editor.linter.findings[0].finding;
  const withoutReason = Object.assign({}, finding, { reason: undefined });
  expect(editor.linter.composeMessage(<any>withoutReason)).toBe(finding.message);
  const unknownReason = Object.assign({}, finding, { reason: "nosuchreason" });
  expect(editor.linter.composeMessage(<any>unknownReason)).toBe(finding.message);
});

test("The scope hint is appended to a localized message", () => {
  const editor = createEditor(JSON.stringify({
    elements: [{ type: "text", name: "q1", visibleIf: "{row.col1} = 1" }]
  }, null, 2));
  expect(editor.linter.findings).toHaveLength(1);
  const finding = editor.linter.findings[0].finding;
  expect(finding.hint.reason).toBe(SurveyLintHintReasons.rowScopePrefix);
  expect(editor.linter.findings[0].text).toContain(
    "\"row.\" references are only available inside a matrix cell or a matrix detail panel.");
});

test("A raw code identifier is rendered through the term table", () => {
  const editor = createEditor(JSON.stringify({
    pages: [{ name: "page1", elements: [] }]
  }, null, 2));
  const finding = editor.linter.findings.filter(f => f.ruleId === "page/empty")[0];
  expect(finding).toBeDefined();
  expect(finding.finding.reason).toBe(SurveyLintReasons["page/empty"].noElements);
  expect(finding.text).toBe("The page \"page1\" has no elements.");
});

test("A duplicate name is reported without a count and a list of kinds", () => {
  const editor = createEditor(JSON.stringify({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q1" },
      { type: "text", name: "q1" }
    ]
  }, null, 2));
  const findings = editor.linter.findings.filter(f => f.ruleId === "name/duplicate");
  expect(findings).toHaveLength(2);
  expect(findings[0].finding.reason).toBe(SurveyLintReasons["name/duplicate"].elementNames);
  expect(findings[0].text).toBe("The name \"q1\" is duplicated.");
});

test("A duplicate name inside a namespace keeps the scope clause", () => {
  const editor = createEditor(JSON.stringify({
    elements: [{
      type: "matrixdynamic", name: "m1",
      columns: [{ name: "col1" }, { name: "col1" }]
    }]
  }, null, 2));
  const findings = editor.linter.findings.filter(f => f.ruleId === "name/duplicate");
  expect(findings).toHaveLength(1);
  expect(findings[0].text).toBe("The name \"col1\" is duplicated. Inside: matrix \"m1\".");
});

test("The prose suggestion of type-mismatch is localized through its reason", () => {
  const editor = createEditor(JSON.stringify({
    elements: [
      { type: "checkbox", name: "tags", choices: ["a", "b"] },
      { type: "text", name: "q2", visibleIf: "{tags} = 'a'" }
    ]
  }, null, 2));
  const finding = editor.linter.findings.filter(f => f.ruleId === "expression/type-mismatch")[0];
  expect(finding).toBeDefined();
  expect(finding.text).toContain("Use \"contains\" or \"anyof\" for multi-select values.");
});

test("formatNamed leaves an unknown placeholder alone and joins an array", () => {
  expect(formatNamed("a {x} b {y}", { x: 1 })).toBe("a 1 b {y}");
  expect(formatNamed("{list}", { list: ["a", "b"] })).toBe("a, b");
  expect(formatNamed(undefined, {})).toBeUndefined();
});

test("A contradiction finding is localized, not taken from the core", () => {
  const editor = createEditor(JSON.stringify({
    elements: [{ type: "text", name: "q1", visibleIf: "1 = 2" }]
  }, null, 2));
  const finding = editor.linter.findings.filter(f => f.ruleId === "expression/contradiction")[0];
  expect(finding).toBeDefined();
  expect(finding.finding.reason).toBe("alwaysFalse");
  expect(finding.text).toBe(
    "The visibleIf \"1 = 2\" is always false, so \"q1\" is never shown.");
});

test("The meaningless-condition reasons each get their own text", () => {
  const editor = createEditor(JSON.stringify({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "1 = 1" },
      { type: "text", name: "q3", visibleIf: "{q1} + 1" },
      { type: "text", name: "q4", visibleIf: "{q1} = {q1}" }
    ]
  }, null, 2));
  const byReason: { [reason: string]: string } = {};
  editor.linter.findings
    .filter(f => f.ruleId === "expression/meaningless-condition")
    .forEach(f => byReason[f.finding.reason] = f.text);
  expect(Object.keys(byReason).sort())
    .toEqual(["alwaysTrue", "meaninglessFragment", "notABoolean"]);
  expect(byReason.alwaysTrue).toBe(
    "The visibleIf \"1 = 1\" is always true, so it decides nothing.");
  expect(byReason.notABoolean).toBe(
    "The visibleIf \"{q1} + 1\" is arithmetic, not a comparison, so it never gives a yes or no.");
  expect(byReason.meaninglessFragment).toBe(
    "Part of the visibleIf \"{q1} = {q1}\" has a result that is known upfront.");
});

// --- the mechanisms survey-core added on top of the constant condition -------------------

const rating = { type: "rating", name: "rate", rateMin: 1, rateMax: 5 };
const pick = { type: "dropdown", name: "pick", choices: ["a", "b"] };

function textOf(json: any, ruleId: string): string {
  const editor = createEditor(JSON.stringify(json, null, 2));
  const found = editor.linter.findings.filter(f => f.ruleId === ruleId);
  expect(found).toHaveLength(1);
  return found[0].text;
}

// One question guarded by the condition under test, next to the questions it can refer to.
function guarded(condition: string, extra?: any): any {
  return Object.assign({
    pages: [{ name: "p1", elements: [rating, pick, { type: "text", name: "x", visibleIf: condition }] }]
  }, extra || {});
}

const constantCv = { calculatedValues: [{ name: "cv", expression: "1 + 1" }] };

test("A contradiction proved through a reference names the constant", () => {
  expect(textOf(guarded("{cv} = 5", constantCv), "expression/contradiction")).toBe(
    "The visibleIf \"{cv} = 5\" never holds, because {cv} is always 2.");
});

test("A comparison outside the range of a question names the bounds", () => {
  expect(textOf(guarded("{rate} > 10"), "expression/contradiction")).toBe(
    "The visibleIf \"{rate} > 10\" never holds - no allowed value satisfies it:" +
    " {rate} is at least 1 and at most 5.");
});

test("A self-contradicting condition names the conflict", () => {
  expect(textOf(guarded("{pick} = 'a' and {pick} = 'b'"), "expression/contradiction")).toBe(
    "The visibleIf \"{pick} = 'a' and {pick} = 'b'\" contradicts itself:" +
    " {pick} cannot be both \"a\" and \"b\".");
});

test("A condition that always holds through a reference is meaningless", () => {
  expect(textOf(guarded("{cv} = 2", constantCv), "expression/meaningless-condition")).toBe(
    "The visibleIf \"{cv} = 2\" always holds, because {cv} is always 2 - it decides nothing.");
});

test("Every fact is shown, not only the one the reason is named after", () => {
  // the reason names the most concrete mechanism, but the core reports the other facts too and
  // dropping them would lose half of the explanation
  const condition = "{rate} = 3 and {rate} = 4 and {rate} > 10";
  const editor = createEditor(JSON.stringify(guarded(condition), null, 2));
  const finding = editor.linter.findings.filter(f => f.ruleId === "expression/contradiction")[0];
  expect(finding.finding.reason).toBe("unsatisfiable");
  expect(Object.keys(finding.finding.messageData)).toContain("ranges");
  expect(finding.text).toBe(
    "The visibleIf \"" + condition + "\" contradicts itself:" +
    " {rate} cannot be both 3 and 4, {rate} is at least 1 and at most 5.");
});

test("Each kind of conflict has its own wording", () => {
  const cases: Array<{ condition: string, fact: string }> = [
    { condition: "{pick} = 'a' and {pick} = 'b'", fact: "{pick} cannot be both \"a\" and \"b\"" },
    { condition: "{pick} = 'a' and {pick} <> 'a'", fact: "{pick} cannot be \"a\" and not be it" },
    { condition: "{pick} empty and {pick} = 'a'", fact: "{pick} cannot be empty and be \"a\"" },
    { condition: "{pick} empty and {pick} notempty", fact: "{pick} cannot be empty and not empty" },
    { condition: "{rate} > 4 and {rate} < 2", fact: "{rate} cannot be above 4 and below 2" },
    { condition: "{pick} anyof [] and {pick} notempty", fact: "{pick} is asked to be one of no value at all" },
  ];
  cases.forEach(entry => {
    expect(textOf(guarded(entry.condition), "expression/contradiction"))
      .toBe("The visibleIf \"" + entry.condition + "\" contradicts itself: " + entry.fact + ".");
  });
});

test("A conflict kind the creator does not know is left out, not printed raw", () => {
  const editor = createEditor(JSON.stringify(guarded("{pick} = 'a' and {pick} = 'b'"), null, 2));
  const finding = editor.linter.findings.filter(f => f.ruleId === "expression/contradiction")[0];
  const unknown = Object.assign({}, finding.finding, {
    messageData: Object.assign({}, finding.finding.messageData, {
      conflicts: [{ name: "pick", kind: "nosuchkind", values: ["a"] }]
    })
  });
  const text = editor.linter.composeMessage(<any>unknown);
  expect(text).not.toContain("nosuchkind");
  expect(text).not.toContain("[object Object]");
  // nothing left to name, so the whole English sentence of the core is shown instead of a
  // localized one with a hole in it
  expect(text).toBe(unknown.message);
});

test("An unknown fact among known ones is dropped, the rest still renders", () => {
  const editor = createEditor(JSON.stringify(guarded("{pick} = 'a' and {pick} = 'b'"), null, 2));
  const finding = editor.linter.findings.filter(f => f.ruleId === "expression/contradiction")[0];
  const mixed = Object.assign({}, finding.finding, {
    messageData: Object.assign({}, finding.finding.messageData, {
      conflicts: [
        { name: "pick", kind: "nosuchkind", values: ["a"] },
        { name: "pick", kind: "emptyAndNotEmpty" },
      ]
    })
  });
  expect(editor.linter.composeMessage(<any>mixed)).toBe(
    "The visibleIf \"{pick} = 'a' and {pick} = 'b'\" contradicts itself:" +
    " {pick} cannot be empty and not empty.");
});

test("A structured value that reaches a placeholder is not printed raw", () => {
  expect(formatNamed("a {list} b", { list: [{ x: 1 }] })).toBe("a {list} b");
  expect(formatNamed("a {map} b", { map: { x: 1 } })).toBe("a {map} b");
  // a list of plain values still reads as a list
  expect(formatNamed("a {list} b", { list: ["x", 2] })).toBe("a x, 2 b");
});

test("A value the question can never hold is reported per property", () => {
  const json = {
    pages: [{ name: "p1", elements: [
      Object.assign({}, pick, { defaultValue: "zzz" }),
      { type: "dropdown", name: "quiz", choices: ["a", "b"], correctAnswer: "zzz" }
    ] }],
    triggers: [{ type: "setvalue", expression: "{quiz} notempty", setToName: "pick", setValue: "zzz" }]
  };
  const editor = createEditor(JSON.stringify(json, null, 2));
  const byReason: { [reason: string]: string } = {};
  editor.linter.findings
    .filter(f => f.ruleId === "value/not-a-choice")
    .forEach(f => byReason[f.finding.reason] = f.text);
  expect(Object.keys(byReason).sort())
    .toEqual(["correctAnswer", "defaultValue", "triggerSetValue"]);
  expect(byReason.defaultValue).toBe(
    "The default value of \"pick\" is \"zzz\", which it can never hold. Allowed: \"a\", \"b\".");
  expect(byReason.correctAnswer).toBe(
    "The correct answer of \"quiz\" is \"zzz\", which it can never hold. Allowed: \"a\", \"b\".");
  expect(byReason.triggerSetValue).toBe(
    "The trigger sets \"pick\" to \"zzz\", which it can never hold. Allowed: \"a\", \"b\".");
});

test("A value list keeps the type visible: a number is bare, a string is quoted", () => {
  // "1" against the choice 1 is NOT alien - runtimeEquals is the runtime equality, which converts
  // - so the alien value here is one no conversion reaches
  const json = {
    pages: [{ name: "p1", elements: [
      { type: "dropdown", name: "num", choices: [1, 2], defaultValue: "zzz" }
    ] }]
  };
  const text = textOf(json, "value/not-a-choice");
  expect(text).toBe(
    "The default value of \"num\" is \"zzz\", which it can never hold. Allowed: 1, 2.");
});

test("A value a conversion reaches is not reported at all", () => {
  const json = {
    pages: [{ name: "p1", elements: [
      { type: "dropdown", name: "num", choices: [1, 2], defaultValue: "1" }
    ] }]
  };
  const editor = createEditor(JSON.stringify(json, null, 2));
  expect(editor.linter.findings.filter(f => f.ruleId === "value/not-a-choice")).toHaveLength(0);
});

// --- the rules survey-core added after the first version of the panel ---------------------

test("Row and panel counts that contradict their own limits name both properties", () => {
  expect(textOf({
    pages: [{ name: "p1", elements: [
      { type: "matrixdynamic", name: "m1", minRowCount: 5, maxRowCount: 2, columns: [{ name: "c1" }] }
    ] }]
  }, "element/count-contradiction")).toBe(
    "The minRowCount of \"m1\" is 5, above its maxRowCount of 2" +
    " - the run time silently adjusts one of them.");
});

test("A count outside its bounds says which side it falls off", () => {
  expect(textOf({
    pages: [{ name: "p1", elements: [
      { type: "matrixdynamic", name: "m1", rowCount: 1, minRowCount: 3, columns: [{ name: "c1" }] }
    ] }]
  }, "element/count-contradiction")).toBe(
    "The rowCount of \"m1\" is 1, below its minRowCount of 3 - the run time clamps it.");
  expect(textOf({
    pages: [{ name: "p1", elements: [
      { type: "paneldynamic", name: "pd", panelCount: 9, maxPanelCount: 4,
        templateElements: [{ type: "text", name: "t1" }] }
    ] }]
  }, "element/count-contradiction")).toBe(
    "The panelCount of \"pd\" is 9, above its maxPanelCount of 4 - the run time clamps it.");
});

test("An expression that writes the value it reads names the properties it is built from", () => {
  expect(textOf({
    pages: [{ name: "p1", elements: [
      { type: "text", name: "q1", setValueIf: "{q1} = 1", setValueExpression: "{q1} + 1" }
    ] }]
  }, "cycle/value-write")).toBe(
    "The q1.setValueIf/setValueExpression reads the value it writes itself" +
    " - it runs only when another value changes, so it never runs at all.");
});

test("A write loop across domains lists its members in order", () => {
  expect(textOf({
    calculatedValues: [{ name: "cv", expression: "{q1} + 1" }],
    pages: [{ name: "p1", elements: [
      { type: "text", name: "q1", setValueIf: "{cv} > 0", setValueExpression: "{cv} + 1" }
    ] }]
  }, "cycle/value-write")).toBe(
    "Values are written in a loop: calculatedValue \"cv\" -> q1.setValueIf/setValueExpression." +
    " Each write reruns the expressions that read it, so the final values depend on the order" +
    " the questions are answered in.");
});

test("A loop through a defaultValueExpression says how long it applies", () => {
  expect(textOf({
    calculatedValues: [{ name: "cv", expression: "{q1} + 1" }],
    pages: [{ name: "p1", elements: [
      { type: "text", name: "q1", defaultValueExpression: "{cv} + 1" }
    ] }]
  }, "cycle/value-write")).toBe(
    "Values are written in a loop: calculatedValue \"cv\" -> q1.defaultValueExpression." +
    " Each write reruns the expressions that read it, so the final values depend on the order" +
    " the questions are answered in." +
    " A defaultValueExpression applies only until its question is answered.");
});

test("An element dead through the cascade names the questions it waits for", () => {
  expect(textOf({
    pages: [{ name: "p1", elements: [
      { type: "text", name: "q1", visibleIf: "1 = 2" },
      { type: "text", name: "q2", visibleIf: "{q1} = 'a'" }
    ] }]
  }, "element/never-visible")).toBe(
    "\"q2\" can never become visible: its visibleIf reads {q1}, which is never visible and" +
    " never receives a value, so the condition never holds. In expression: {q1} = 'a'");
});

test("Several dead dependencies read as a plural", () => {
  expect(textOf({
    pages: [{ name: "p1", elements: [
      { type: "text", name: "q1", visibleIf: "1 = 2" },
      { type: "text", name: "qb", visibleIf: "1 = 2" },
      { type: "text", name: "q2", visibleIf: "{q1} = 'a' and {qb} = 'b'" }
    ] }]
  }, "element/never-visible")).toBe(
    "\"q2\" can never become visible: its visibleIf reads {q1}, {qb}, which are never visible" +
    " and never receive a value, so the condition never holds." +
    " In expression: {q1} = 'a' and {qb} = 'b'");
});

test("A keyName naming nothing takes its noun from the container type", () => {
  expect(textOf({
    pages: [{ name: "p1", elements: [
      { type: "matrixdynamic", name: "m1", keyName: "colum1",
        columns: [{ name: "column1" }, { name: "other" }] }
    ] }]
  }, "reference/unknown")).toBe(
    "The keyName of \"m1\" names \"colum1\" - \"m1\" has no column with that name," +
    " so duplicate-key validation never runs. Did you mean \"column1\"?");
  expect(textOf({
    pages: [{ name: "p1", elements: [
      { type: "paneldynamic", name: "pd", keyName: "zzz",
        templateElements: [{ type: "text", name: "t1" }] }
    ] }]
  }, "reference/unknown")).toBe(
    "The keyName of \"pd\" names \"zzz\" - \"pd\" has no template question with that name," +
    " so duplicate-key validation never runs.");
});

test("A row or panel default outside the allowed set names the cell it fills", () => {
  expect(textOf({
    pages: [{ name: "p1", elements: [
      { type: "matrixdynamic", name: "m1", defaultRowValue: { c1: "zzz" },
        columns: [{ name: "c1", cellType: "dropdown", choices: ["a", "b"] }] }
    ] }]
  }, "value/not-a-choice")).toBe(
    "The default row value sets \"c1\" to \"zzz\", which it can never hold. Allowed: \"a\", \"b\".");
  expect(textOf({
    pages: [{ name: "p1", elements: [
      { type: "paneldynamic", name: "pd", defaultPanelValue: { t1: "zzz" },
        templateElements: [{ type: "dropdown", name: "t1", choices: ["a", "b"] }] }
    ] }]
  }, "value/not-a-choice")).toBe(
    "The default panel value sets \"t1\" to \"zzz\", which it can never hold." +
    " Allowed: \"a\", \"b\".");
});

test("A composite default naming no row, column or template question says which is missing", () => {
  expect(textOf({
    pages: [{ name: "p1", elements: [
      { type: "matrixdynamic", name: "m1", defaultRowValue: { cc: "a" },
        columns: [{ name: "c1", cellType: "dropdown", choices: ["a", "b"] }] }
    ] }]
  }, "value/not-a-choice")).toBe(
    "The defaultRowValue of \"m1\" names \"cc\" - no such column. Available: \"c1\"." +
    " Did you mean \"c1\"?");
  expect(textOf({
    pages: [{ name: "p1", elements: [
      { type: "matrixdropdown", name: "md", defaultValue: { rowX: { c1: "a" } },
        rows: ["row1", "row2"],
        columns: [{ name: "c1", cellType: "dropdown", choices: ["a", "b"] }] }
    ] }]
  }, "value/not-a-choice")).toBe(
    "The defaultValue of \"md\" names \"rowX\" - no such row. Available: \"row1\", \"row2\"." +
    " Did you mean \"row1\"?");
  expect(textOf({
    pages: [{ name: "p1", elements: [
      { type: "paneldynamic", name: "pd", defaultPanelValue: { nope: 1 },
        templateElements: [{ type: "dropdown", name: "t1", choices: ["a", "b"] }] }
    ] }]
  }, "value/not-a-choice")).toBe(
    "The defaultPanelValue of \"pd\" names \"nope\" - no such template question." +
    " Available: \"t1\".");
});

test("A copyvalue trigger between incompatible ends says what each side holds", () => {
  expect(textOf({
    pages: [{ name: "p1", elements: [
      { type: "checkbox", name: "multi", choices: ["a", "b"] },
      { type: "dropdown", name: "single", choices: ["a", "b"] }
    ] }],
    triggers: [{ type: "copyvalue", expression: "{multi} notempty", fromName: "multi", setToName: "single" }]
  }, "value/not-a-choice")).toBe(
    "The copyvalue trigger copies \"multi\" into \"single\", but \"multi\" holds an array of" +
    " selected values and \"single\" holds a single value.");
  expect(textOf({
    pages: [{ name: "p1", elements: [
      { type: "dropdown", name: "src", choices: ["a", "b"] },
      { type: "dropdown", name: "dst", choices: ["x", "y"] }
    ] }],
    triggers: [{ type: "copyvalue", expression: "{src} notempty", fromName: "src", setToName: "dst" }]
  }, "value/not-a-choice")).toBe(
    "The copyvalue trigger copies \"src\" into \"dst\", but no value of \"src\" is among the" +
    " values \"dst\" can hold. Allowed: \"x\", \"y\".");
});

test("Detail elements left behind a default detailPanelMode are reported", () => {
  expect(textOf({
    pages: [{ name: "p1", elements: [
      { type: "matrixdropdown", name: "md", rows: ["r1"], columns: [{ name: "c1" }],
        detailElements: [{ type: "text", name: "d1" }] }
    ] }]
  }, "page/empty")).toBe(
    "The detail elements of \"md\" are never shown: its detailPanelMode is \"none\"," +
    " which is the default.");
});

test("A name the survey answers itself says which built-in wins", () => {
  expect(textOf({ elements: [{ type: "text", name: "pageno" }] }, "name/shadowing")).toBe(
    "The name \"pageno\" of this text is also the built-in survey variable {pageno}" +
    " - the survey answers {pageno} first, so this one is unreachable in expressions.");
  expect(textOf({
    elements: [{ type: "text", name: "q1" }],
    calculatedValues: [{ name: "locale", expression: "1" }]
  }, "name/shadowing")).toBe(
    "The name \"locale\" of this calculated value is also the built-in survey variable {locale}" +
    " - the survey answers {locale} first, so this one is unreachable in expressions.");
});

test("A data key two elements write says what collides with what", () => {
  expect(textOf({
    elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2", valueName: "q1" }]
  }, "name/shadowing")).toBe(
    "The valueName \"q1\" of \"q2\" is also the name of question \"q1\"" +
    " - both store their answer under the data key \"q1\".");
  expect(textOf({
    elements: [
      { type: "text", name: "q1", showCommentArea: true },
      { type: "text", name: "q1-Comment" }
    ]
  }, "name/shadowing")).toBe(
    "The data key \"q1-Comment\" is also the comment key of \"q1\" (its data key plus" +
    " \"-Comment\") - one write silently overwrites the other.");
  // the element is named only where a valueName made it something else than the data key
  expect(textOf({
    elements: [
      { type: "text", name: "q1", showCommentArea: true },
      { type: "text", name: "q2", valueName: "q1-Comment" }
    ]
  }, "name/shadowing")).toBe(
    "The data key \"q1-Comment\" is also the comment key of \"q1\" (its data key plus" +
    " \"-Comment\") - one write silently overwrites the other. It is the data key of \"q2\".");
  expect(textOf({
    elements: [
      {
        type: "matrixdynamic", name: "m1",
        columns: [{ name: "c1", cellType: "text", inputType: "number", totalType: "sum" }]
      },
      { type: "text", name: "m1-total" }
    ]
  }, "name/shadowing")).toBe(
    "The data key \"m1-total\" is also the totals key of \"m1\" (its data key plus \"-total\")" +
    " - one write silently overwrites the other.");
  expect(textOf({
    elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }],
    triggers: [{
      type: "setvalue", expression: "{q2} notempty", setToName: "q1", isVariable: true, setValue: 1
    }]
  }, "name/shadowing")).toBe(
    "The setvalue trigger sets the variable \"q1\", which is also the data key of question" +
    " \"q1\" - the variable answers {q1} from then on, not the question.");
});

test("A key that matches no property names the class it was written on", () => {
  expect(textOf({ elements: [{ type: "text", name: "q1", nosuchprop: 1 }] }, "property/unknown")).toBe(
    "\"nosuchprop\" is not a property of \"q1\" (text)." +
    " The deserializer drops a key it does not know.");
  // a nameless owner is named by its class, and the survey by itself
  expect(textOf({ nosuchprop: 1, elements: [{ type: "text", name: "q1" }] }, "property/unknown")).toBe(
    "\"nosuchprop\" is not a property of the survey (survey)." +
    " The deserializer drops a key it does not know.");
  // a misspelling carries the closest property instead of the hint
  expect(textOf({ elements: [{ type: "text", name: "q1", titl: "a" }] }, "property/unknown")).toBe(
    "\"titl\" is not a property of \"q1\" (text). Did you mean \"title\"?");
});

test("A property the run time does not keep says what happens to it", () => {
  expect(textOf({ mode: "display", elements: [{ type: "text", name: "q1" }] }, "property/dead")).toBe(
    "\"mode\" of the survey is not serializable - it takes effect on load, and is dropped" +
    " from the JSON whenever the survey is saved again.");
  expect(textOf({
    elements: [{ type: "checkbox", name: "q1", choices: ["a"], showOtherItem: true, hasOther: false }]
  }, "property/dead")).toBe(
    "\"showOtherItem\" and \"hasOther\" of \"q1\" are two names of one property - the run time" +
    " applies them in the order the JSON writes them, so \"hasOther\" wins.");
  expect(textOf({ elements: [{ type: "text", name: "q1", min: 1 }] }, "property/dead")).toBe(
    "\"min\" is set on \"q1\", but inputType \"text\" has no bounds - the run time ignores it.");
});

test("A value the property cannot hold lists what it can", () => {
  expect(textOf({
    elements: [{ type: "text", name: "q1", titleLocation: "nosuch" }]
  }, "property/invalid-value")).toBe(
    "The titleLocation of \"q1\" is \"nosuch\" - not one of the allowed values" +
    " (\"default\", \"top\", \"bottom\", \"left\", \"hidden\").");
  expect(textOf({
    backgroundOpacity: 5, elements: [{ type: "text", name: "q1" }]
  }, "property/invalid-value")).toBe(
    "The backgroundOpacity of the survey is 5, outside its allowed range 0..1.");
  expect(textOf({
    elements: [{ type: "text", name: "q1", valueName: "a.b" }]
  }, "property/invalid-value")).toBe(
    "The valueName \"a.b\" of \"q1\" contains a \".\" - expressions read {a.b} as a path into" +
    " \"a\", so the data key itself can never be addressed.");
});

test("A duplicate choice item says which array it is in", () => {
  expect(textOf({
    elements: [{ type: "dropdown", name: "q1", choices: ["a", "a"] }]
  }, "choices/duplicate")).toBe(
    "Another item of the choices of \"q1\" already has the value \"a\"" +
    " - the run time keeps both items.");
  expect(textOf({
    elements: [{ type: "dropdown", name: "q1", choices: ["a", "none"], showNoneItem: true }]
  }, "choices/duplicate")).toBe(
    "The choices of \"q1\" contain \"none\" while showNoneItem is on - it collides with the" +
    " built-in None item.");
});

test("A validator the deserializer drops says that nothing validates", () => {
  expect(textOf({
    elements: [{ type: "text", name: "q1", validators: [{ type: "nosuch" }] }]
  }, "validator/unknown-type")).toBe(
    "The validator type \"nosuch\" of \"q1\" is not known. The deserializer drops a validator" +
    " it cannot resolve, so nothing validates.");
  expect(textOf({
    elements: [{ type: "text", name: "q1", validators: [{ minValue: 1 }] }]
  }, "validator/unknown-type")).toBe(
    "A validator of \"q1\" has no type. The deserializer drops a validator it cannot resolve," +
    " so nothing validates.");
});

test("A dead validator says what the answer's shape does to it", () => {
  expect(textOf({
    elements: [{
      type: "text", name: "q1", inputType: "number", validators: [{ type: "text", minLength: 2 }]
    }]
  }, "validator/dead")).toBe(
    "The text validator of \"q1\" never fires: a length is read off a text value, and this" +
    " answer has none (text). The inputType is \"number\".");
  expect(textOf({
    elements: [{
      type: "radiogroup", name: "q1", choices: ["a"],
      validators: [{ type: "answercount", minCount: 1 }]
    }]
  }, "validator/dead")).toBe(
    "The answercount validator of \"q1\" never fires: the answer is not a list of values" +
    " (radiogroup).");
  expect(textOf({
    elements: [{
      type: "text", name: "q1", inputType: "number",
      validators: [{ type: "numeric", minValue: 100, maxValue: 10 }]
    }]
  }, "validator/dead")).toBe(
    "The numeric validator of \"q1\" requires at least 100 and at most 10" +
    " - no answer satisfies it.");
  expect(textOf({
    elements: [{
      type: "checkbox", name: "q1", choices: ["a", "b"],
      validators: [{ type: "answercount", minCount: 3 }]
    }]
  }, "validator/dead")).toBe(
    "The answercount validator of \"q1\" requires at least 3 answers, above the 2 choices that" +
    " can be selected together.");
  expect(textOf({
    elements: [{ type: "text", name: "q1", validators: [{ type: "expression" }] }]
  }, "validator/dead")).toBe(
    "The expression validator of \"q1\" has no expression, so it always passes.");
});

test("A mask the run time resolves differently says what it does instead", () => {
  expect(textOf({ elements: [{ type: "text", name: "q1", maskType: "nosuch" }] }, "mask/mismatch")).toBe(
    "The maskType \"nosuch\" of \"q1\" is not a known mask - the run time falls back to no" +
    " mask at all.");
  expect(textOf({
    elements: [{ type: "text", name: "q1", maskType: "numeric", maskSettings: { nosuchkey: 1 } }]
  }, "mask/mismatch")).toBe(
    "The maskSettings of \"q1\" set \"nosuchkey\", which is not a property of the \"numeric\"" +
    " mask - the run time drops it silently.");
  expect(textOf({
    elements: [{ type: "text", name: "q1", maskSettings: { pattern: "999" } }]
  }, "mask/mismatch")).toBe(
    "The maskSettings of \"q1\" are set without a maskType - the run time keeps only" +
    " \"saveMaskedValue\" and drops the rest.");
  expect(textOf({
    elements: [{
      type: "text", name: "q1", inputType: "email", maskType: "pattern",
      maskSettings: { pattern: "999" }
    }]
  }, "mask/mismatch")).toBe(
    "The pattern mask of \"q1\" applies to no input: inputType \"email\" is masked only for" +
    " text and tel.");
  expect(textOf({
    elements: [{
      type: "text", name: "q1", maskType: "datetime",
      maskSettings: { min: "2020-01-01", max: "2021-01-01" }
    }]
  }, "mask/mismatch")).toBe(
    "The datetime mask of \"q1\" sets min/max without a pattern - the bounds apply to the" +
    " pattern's date parts, so without one they do nothing.");
  expect(textOf({
    elements: [{ type: "text", name: "q1", maskType: "numeric", maskSettings: { min: 10, max: 1 } }]
  }, "mask/mismatch")).toBe(
    "The numeric mask of \"q1\" allows at least 10 and at most 1 - no value satisfies it.");
});

// the JSON the linter is given is the one SurveyJSON5 parsed, which marks every object with
// its position in the text - a marker no rule may report as an authored setting
test("The position markers of the parsed JSON are not reported as properties", () => {
  const editor = createEditor(JSON.stringify({
    elements: [{
      type: "text", name: "q1", maskType: "numeric", maskSettings: { precision: 2 }
    }]
  }, null, 2));
  expect(editor.linter.findings).toHaveLength(0);
});

test("A step and a selection minimum wider than what they allow are reported", () => {
  expect(textOf({
    elements: [{ type: "rating", name: "r1", rateMin: 1, rateMax: 4, rateStep: 10 }]
  }, "element/count-contradiction")).toBe(
    "The rateStep of \"r1\" is 10, but the range it steps through (rateMin..rateMax) spans" +
    " only 3 - the run time clamps it.");
  expect(textOf({
    elements: [{ type: "checkbox", name: "q1", choices: ["a", "b"], minSelectedChoices: 5 }]
  }, "element/count-contradiction")).toBe(
    "The minSelectedChoices of \"q1\" is 5, above the 2 choices that can be selected together" +
    " - the question can never be answered.");
});

test("A name a function takes as a string says where the function reads it", () => {
  expect(textOf({
    elements: [
      { type: "matrixdynamic", name: "m", columns: [{ name: "col1", cellType: "text" }] },
      { type: "expression", name: "e1", expression: "sumInArray({m}, 'nosuchcol')" }
    ]
  }, "reference/unknown")).toBe(
    "\"nosuchcol\" is not found. sumInArray() reads that name from every entry of" +
    " matrixdynamic \"m\". In expression: sumInArray({m}, 'nosuchcol')");
});

test("A reference outside an expression says which text it was piped into", () => {
  expect(textOf({
    elements: [{ type: "text", name: "q1", title: "Hello {q9}" }]
  }, "reference/unknown")).toBe(
    "\"q9\" is not found - no question, panel, page, calculated value, or variable with that" +
    " name exists. Did you mean \"q1\"? Referenced in the \"title\" text.");
  expect(textOf({
    elements: [{ type: "dropdown", name: "q1", choicesByUrl: { url: "http://x/1", path: "{q9}" } }]
  }, "reference/unknown")).toBe(
    "\"q9\" is not found - no question, panel, page, calculated value, or variable with that" +
    " name exists. Did you mean \"q1\"? Referenced in the choicesByUrl path.");
});

test("getCreatorLintOptions raises the schema rules to error and follows validateJsonPropertyValues", () => {
  const creator = new CreatorTester();
  const rules = getCreatorLintOptions(creator).rules;
  ["property/unknown", "property/required", "property/not-an-array", "element/unknown-type",
    "trigger/unknown-type", "validator/unknown-type", "property/invalid-value"].forEach(id => {
    expect(rules[id]).toBe("error");
  });
  creator.validateJsonPropertyValues = false;
  expect(getCreatorLintOptions(creator).rules["property/invalid-value"]).toBe("off");
});

test("onLintSurvey lets the application tune the linter options", () => {
  const creator = new CreatorTester();
  creator.onLintSurvey.add((sender, options) => {
    expect(sender).toBe(creator);
    options.lintOptions.rules["reference/unknown"] = "off";
    options.lintOptions.knownVariables = ["tier"];
  });
  const editor = new TextareaJsonEditorModel(creator);
  editor.text = JSON.stringify({
    elements: [
      { type: "text", name: "q1", visibleIf: "{frut} = 'apple'" },
      { type: "text", name: "q2", enableIf: "{tier} = 'gold'" },
    ]
  }, null, 2);
  editor.processErrors(editor.text);
  expect(editor.linter.findings).toHaveLength(0);
  expect(editor.errorList.actions).toHaveLength(0);
  expect(editor.allowingDeactivate()).toBe(true);
});

test("onLintSurvey can lower a schema rule, and then it no longer blocks", () => {
  const creator = new CreatorTester();
  creator.onLintSurvey.add((sender, options) => {
    options.lintOptions.rules["property/unknown"] = "warning";
  });
  const editor = new TextareaJsonEditorModel(creator);
  editor.text = JSON.stringify({ elements: [{ type: "text", name: "q1", nosuch: 1 }] }, null, 2);
  editor.processErrors(editor.text);
  expect(editor.linter.findings.map(f => f.severity)).toEqual(["warning"]);
  expect(editor.allowingDeactivate()).toBe(true);
});

test("property/required names the owner the way the deserializer names it", () => {
  const editor = createEditor(JSON.stringify({
    elements: [{ type: "text" }, { type: "matrixdynamic", name: "m1", columns: [{ cellType: "text" }] }],
  }, null, 2));
  const texts = editor.linter.findings.filter(f => f.ruleId === "property/required").map(f => f.text);
  expect(texts).toEqual([
    "the text has no \"name\" - the property is required for a text.",
    // a nameless object is named by its class - there is no name to quote
    "the matrixdropdowncolumn has no \"name\" - the property is required for a matrixdropdowncolumn.",
  ]);
});

test("property/not-an-array names the key as written", () => {
  const editor = createEditor(JSON.stringify({
    pages: [{ name: "p1", questions: { type: "text", name: "q1" } }],
  }, null, 2));
  const finding = editor.linter.findings.filter(f => f.ruleId === "property/not-an-array")[0];
  expect(finding.text).toBe(
    "The \"questions\" of \"p1\" is not an array - the property holds a list, and the run time wraps the value into a one-item array.");
});

test("element/unknown-type without a type gets no component hint", () => {
  const editor = createEditor(JSON.stringify({
    elements: [{ name: "q1" }, { type: "nosuch", name: "q2" }],
  }, null, 2));
  const texts = editor.linter.findings.filter(f => f.ruleId === "element/unknown-type").map(f => f.text);
  expect(texts[0]).toBe("\"q1\" has no type - an element without a type is dropped.");
  expect(texts[1]).toContain("If it is a custom component");
});

test("Every rule has a localized message per reason, and every hint a text", () => {
  const missing: Array<string> = [];
  getRules().forEach(rule => {
    const reasons = SurveyLintReasons[rule.id];
    expect(reasons).toBeDefined();
    Object.keys(reasons).forEach(reason => {
      if (editorLocalization.getJsonValue("linter.messages." + rule.id + "." + reason) === undefined) {
        missing.push("messages." + rule.id + "." + reason);
      }
    });
  });
  Object.keys(SurveyLintHintReasons).forEach(reason => {
    if (editorLocalization.getJsonValue("linter.hints." + reason) === undefined) {
      missing.push("hints." + reason);
    }
  });
  expect(missing).toEqual([]);
});

test("A fix names a new element in the language the creator works in", () => {
  editorLocalization.setupLocale("zy", {
    ed: { newQuestionName: "frage", newPageName: "seite", newPanelName: "gruppe" },
  });
  const prevLocale = editorLocalization.currentLocale;
  try {
    // the locale goes on after the creator is built: building one resets it
    const creator = new CreatorTester();
    editorLocalization.currentLocale = "zy";
    const editor = new TextareaJsonEditorModel(creator);
    editor.text = JSON.stringify({
      elements: [{ type: "text", name: "q1" }, { type: "text", name: "q1" }],
    }, null, 2);
    editor.processErrors(editor.text);
    const finding = editor.linter.findings.filter(item => item.ruleId === "name/duplicate")[0];
    expect(finding.finding.fix.edits[0].value).toBe("frage1");
    editor.text = finding.fixError(editor.text);
    expect(JSON.parse(editor.text).elements[1].name).toBe("frage1");
  } finally {
    editorLocalization.currentLocale = prevLocale;
  }
});

test("getCreatorLintOptions hands the linter a way to name an element", () => {
  const creator = new CreatorTester();
  const options = getCreatorLintOptions(creator);
  expect(typeof options.newElementName).toBe("function");
  expect(options.newElementName("page", ["page1"])).toBe("page2");
  expect(options.newElementName("panel", [])).toBe("panel1");
  expect(options.newElementName("question", ["question1", "question2"])).toBe("question3");
});

test("The fix button says what the repair does", () => {
  const editor = createEditor(JSON.stringify({
    elements: [
      { type: "text", name: "q1", zzzzzzzzzz: 1 },
      { type: "dropdown", name: "q2", choices: ["a", "b", "a"] },
    ],
  }, null, 2));
  const titles = editor.errorList.actions
    .filter(action => action.data.showFixButton)
    .map(action => action.data.fixButtonTitle);
  expect(titles).toEqual(["Remove the property", "Remove the repeated item"]);
});

test("A repair this version has no wording for keeps the general title", () => {
  const editor = createEditor(JSON.stringify({
    elements: [{ type: "text", name: "q1", zzzzzzzzzz: 1 }],
  }, null, 2));
  const en: any = editorLocalization.getLocaleStrings("en");
  const kept = en.linter.fixes["property/unknown"];
  try {
    en.linter.fixes["property/unknown"] = {};
    editor.processErrors(editor.text);
    expect(editor.errorList.actions[0].data.fixButtonTitle).toBe("Fix error");
  } finally {
    en.linter.fixes["property/unknown"] = kept;
  }
});

test("Every fix reason the linter declares has a title", () => {
  const en: any = editorLocalization.getLocaleStrings("en");
  const missing: Array<string> = [];
  Object.keys(SurveyLintFixReasons).forEach(ruleId => {
    const table: any = (<any>SurveyLintFixReasons)[ruleId];
    Object.keys(table).forEach(key => {
      const group = en.linter.fixes[ruleId];
      if (!group || !group[table[key]]) missing.push(ruleId + "/" + table[key]);
    });
  });
  expect(missing).toEqual([]);
});

test("A reserved name is reported in the words of the creator, at its name key, and blocks the tab", () => {
  const editor = createEditor(JSON.stringify({
    elements: [
      { type: "text", name: "toString" },
      { type: "matrixdynamic", name: "m1", columns: [{ name: "constructor" }] },
      { type: "matrix", name: "m2", rows: ["r1", "valueOf"], columns: ["c1"] },
    ],
  }, null, 2));
  const findings = editor.linter.findings.filter(f => f.ruleId === "name/reserved");
  expect(findings.map(f => f.text)).toEqual([
    "The name \"toString\" is reserved - a member of Object.prototype.",
    "The column \"constructor\" of \"m1\" is reserved - a member of Object.prototype.",
    "The row \"valueOf\" of \"m2\" is reserved - a member of Object.prototype.",
  ]);
  // the finding sits at the name key, the way a duplicate name does
  expect(findings[0].at).toBeGreaterThan(-1);
  expect(editor.text.substr(findings[0].at, 6)).toBe("\"name\"");
  expect(findings.every(f => f.isBlocking)).toBe(true);
});

test("A reserved name is repaired with a free name, and the button says so", () => {
  const editor = createEditor(JSON.stringify({ elements: [{ type: "text", name: "toString" }] }, null, 2));
  const action = editor.errorList.actions[0];
  expect(action.data.showFixButton).toBeTruthy();
  expect(action.data.fixButtonTitle).toBe("Give the element a free name");
  editor.text = editor.linter.findings[0].fixError(editor.text);
  expect(JSON.parse(editor.text).elements[0].name).toBe("question1");
  editor.processErrors(editor.text);
  expect(editor.linter.findings).toHaveLength(0);
});

test("A name that is not a string is reported in the words of the creator, and spelled out by the fix", () => {
  const editor = createEditor(JSON.stringify({ elements: [{ type: "text", name: 5 }] }, null, 2));
  const finding = editor.linter.findings.filter(f => f.ruleId === "property/required")[0];
  expect(finding.text).toBe("The name of the text is 5, not a string - the survey cannot load it.");
  expect(finding.isBlocking).toBe(true);
  expect(editor.errorList.actions[0].data.fixButtonTitle).toBe("Give the element a name");
  editor.text = finding.fixError(editor.text);
  expect(JSON.parse(editor.text).elements[0].name).toBe("5");
});

test("A name that is an object is spelled out in the JSON form, not left as a placeholder", () => {
  const editor = createEditor(JSON.stringify({ elements: [{ type: "text", name: { a: 1 } }] }, null, 2));
  const finding = editor.linter.findings.filter(f => f.ruleId === "property/required")[0];
  expect(finding.text).toBe("The name of the text is {\"a\":1}, not a string - the survey cannot load it.");
  // an object written for a name means nothing in particular, so there is nothing to offer
  expect(editor.errorList.actions[0].data.showFixButton).toBeFalsy();
});
