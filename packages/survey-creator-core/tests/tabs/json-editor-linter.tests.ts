import { getRules, SurveyLintHintReasons, SurveyLintReasons } from "survey-core/linter";
import { TextareaJsonEditorModel, TabJsonEditorTextareaPlugin } from "../../src/components/tabs/json-editor-textarea";
import { formatNamed, JsonEditorLinterModel } from "../../src/components/tabs/json-editor-linter";
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
  expect(editor.linter.isWaitingForValidJson).toBeFalsy();
  expect(editor.linter.findings).toHaveLength(1);
  const finding = editor.linter.findings[0];
  expect(finding.ruleId).toBe("reference/unknown");
  expect(finding.severity).toBe("error");
  expect(finding.isFixable).toBeFalsy();
});

test("Linter findings are merged into the error list after the JSON errors", () => {
  const text = JSON.stringify({
    elements: [
      { type: "text", name: "q1", incorrectProp: "abc" },
      { type: "text", name: "q2", visibleIf: "{frut} = 'apple'" }
    ]
  }, null, 2);
  const editor = createEditor(text);
  expect(editor.hasErrors).toBeTruthy();
  const actions = editor.errorList.actions;
  expect(actions).toHaveLength(2);
  expect(actions[0].id.indexOf("error_")).toBe(0);
  expect(actions[1].id.indexOf("linterfinding_")).toBe(0);
  expect(actions[1].data.showFixButton).toBeFalsy();
});

test("A linter finding shows as a warning whatever its severity is", () => {
  const editor = createEditor(badReference);
  const action = editor.errorList.actions[0];
  expect(editor.linter.findings[0].severity).toBe("error");
  expect(action.iconName).toBe("icon-warning-24x24");
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
  const previousList = editor.linter.checkList.actions.length;
  editor.text = "{ elements: [";
  editor.processErrors(editor.text);
  // the panel keeps its previous result, the error list drops the stale positions
  expect(editor.linter.findings).toHaveLength(1);
  expect(editor.linter.checkList.actions).toHaveLength(previousList);
  const actions = editor.errorList.actions;
  expect(actions.filter(a => a.id.indexOf("linterfinding_") === 0)).toHaveLength(0);
  expect(actions.filter(a => a.id.indexOf("error_") === 0).length).toBeGreaterThan(0);
});

test("A linter finding never blocks leaving the tab", () => {
  const creator = new CreatorTester({ showJSONEditorTab: true });
  const plugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("json");
  creator.activeTab = "json";
  plugin.model.text = badReference;
  plugin.model.processErrors(plugin.model.text);
  expect(plugin.model.linter.findings).toHaveLength(1);
  expect(plugin.model.allowingDeactivate()).toBeTruthy();
  expect(plugin.defaultAllowingDeactivate()).toBeTruthy();
  expect(creator.switchTab("designer")).toBeTruthy();
  expect(creator.activeTab).toBe("designer");
});

test("showLinterPanel false does not run the linter and shows no sidebar page", () => {
  const creator = new CreatorTester({ showJSONEditorTab: true, showLinterPanel: false });
  const plugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("json");
  creator.activeTab = "json";
  plugin.model.text = badReference;
  plugin.model.processErrors(plugin.model.text);
  expect(plugin.model.linter.findings).toHaveLength(0);
  expect(plugin.model.linter.isWaitingForValidJson).toBeTruthy();
  expect(plugin.model.errorList.actions).toHaveLength(0);
  const page = creator.sidebar.getPageById("linter");
  expect(page).toBeDefined();
  expect(page.visible).toBeFalsy();
});

test("The sidebar page holds the check list while the JSON tab is active", () => {
  const creator = new CreatorTester({ showJSONEditorTab: true });
  const plugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("json");
  creator.activeTab = "json";
  const page = creator.sidebar.getPageById("linter");
  expect(page.visible).toBeTruthy();
  expect(creator.sidebar.activePage).toBe("linter");
  expect(page.componentName).toBe("svc-component-container");
  const elements = page.componentData.elements;
  expect(elements).toHaveLength(1);
  expect(elements[0].componentName).toBe("sv-list");
  expect(elements[0].componentData.model).toBe(plugin.model.linter.checkList);
  creator.activeTab = "designer";
  expect(page.visible).toBeFalsy();
});

test("The check list holds a row per rule, its findings and a summary", () => {
  const editor = createEditor(badReference);
  const actions = editor.linter.checkList.actions;
  const ruleCount = getRules().length;
  // one row per rule + one finding row + the summary
  expect(actions).toHaveLength(ruleCount + 2);
  const failed = actions.filter(a => a.id === "linter-rule-reference/unknown")[0];
  expect(failed.title).toBe("Unknown references (1)");
  expect(failed.iconName).toBe("icon-error-16x16");
  expect(failed.css).toBe("svc-json-linter__rule svc-json-linter__rule--error");
  const passed = actions.filter(a => a.id === "linter-rule-page/empty")[0];
  expect(passed.title).toBe("Empty pages and panels");
  expect(passed.iconName).toBe("icon-check-16x16");
  expect(passed.css).toBe("svc-json-linter__rule svc-json-linter__rule--passed");
  const finding = actions.filter(a => a.id.indexOf("linter-finding-") === 0)[0];
  expect(finding.component).toBe("json-error-item");
  expect(finding.css).toBe(
    "svc-json-linter__finding svc-json-linter__finding--error svc-json-linter__finding--navigable");
  expect(actions[actions.length - 1].id).toBe("linter-summary");
  expect(actions[actions.length - 1].title).toBe("1 issues found");
});

test("The summary reports a clean survey and the waiting state", () => {
  const clean = createEditor(JSON.stringify({ elements: [{ type: "text", name: "q1" }] }, null, 2));
  const cleanActions = clean.linter.checkList.actions;
  expect(cleanActions[cleanActions.length - 1].title).toBe("All checks passed");
  const broken = createEditor("{ elements: [");
  const brokenActions = broken.linter.checkList.actions;
  expect(brokenActions[brokenActions.length - 1].title).toBe("Waiting for valid JSON");
});

test("A rule row carries no status icon and no status class before the first run", () => {
  const creator = new CreatorTester();
  const linter = new JsonEditorLinterModel(creator, () => {});
  const actions = linter.checkList.actions;
  expect(actions[0].iconName).toBeFalsy();
  expect(actions[0].css).toBe("svc-json-linter__rule");
  expect(actions[actions.length - 1].title).toBe("Waiting for valid JSON");
});

test("A rule whose findings are warnings gets the warning status", () => {
  const editor = createEditor(JSON.stringify({
    elements: [
      { type: "dropdown", name: "fruit", choices: ["apple", "banana"] },
      { type: "text", name: "q2", visibleIf: "{fruit} = 'zzz'" }
    ]
  }, null, 2));
  const actions = editor.linter.checkList.actions;
  const rule = actions.filter(a => a.id === "linter-rule-expression/unknown-choice")[0];
  expect(rule.iconName).toBe("icon-warning-24x24");
  expect(rule.css).toBe("svc-json-linter__rule svc-json-linter__rule--warning");
  const finding = actions.filter(a => a.id.indexOf("linter-finding-expression/unknown-choice") === 0)[0];
  expect(finding.css).toContain("svc-json-linter__finding--warning");
});

test("A finding whose path did not resolve does not look clickable", () => {
  const editor = createEditor(badReference);
  const finding = editor.linter.findings[0];
  // the path resolves here, so the row is navigable
  expect(finding.at).toBeGreaterThan(-1);
  const navigable = editor.linter.checkList.actions
    .filter(a => a.id.indexOf("linter-finding-") === 0)[0];
  expect(navigable.css).toContain("svc-json-linter__finding--navigable");
  // an unresolvable path leaves at at -1, and then the class is absent
  const unresolved = Object.assign(
    Object.create(Object.getPrototypeOf(finding)), finding, { at: -1 });
  const action = (<any>editor.linter)["createFindingAction"](
    { id: "reference/unknown", defaultSeverity: "error" }, unresolved, 0);
  expect(action.css).not.toContain("svc-json-linter__finding--navigable");
});

test("The check list gives the icon a class, so it is sized by CSS", () => {
  const editor = createEditor(badReference);
  expect(editor.linter.checkList.cssClasses.itemIcon).toBe("svc-json-linter__icon");
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

test("getPositionByPath reports -1 for a path it cannot resolve", () => {
  const worker = new SurveyTextWorker("{ \"elements\": [{ \"type\": \"text\", \"name\": \"q1\" }] }");
  expect(worker.getPositionByPath("elements[0].nosuchprop").at).toBe(-1);
  expect(worker.getPositionByPath("nosuch[3].path").at).toBe(-1);
  expect(worker.getPositionByPath("").at).toBe(-1);
  expect(worker.getPositionByPath(undefined).at).toBe(-1);
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

test("The new rules appear in the check list", () => {
  const editor = createEditor(JSON.stringify({
    elements: [{ type: "text", name: "q1", visibleIf: "1 = 2" }]
  }, null, 2));
  const actions = editor.linter.checkList.actions;
  const contradiction = actions.filter(a => a.id === "linter-rule-expression/contradiction")[0];
  expect(contradiction).toBeDefined();
  expect(contradiction.title).toBe("Contradictory conditions (1)");
  const meaningless = actions
    .filter(a => a.id === "linter-rule-expression/meaningless-condition")[0];
  expect(meaningless).toBeDefined();
  expect(meaningless.iconName).toBe("icon-check-16x16");
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

test("Every rule has a localized name, a description and a message per reason", () => {
  const missing: Array<string> = [];
  getRules().forEach(rule => {
    if (editorLocalization.getJsonValue("linter.rules." + rule.id) === undefined) {
      missing.push("rules." + rule.id);
    }
    if (editorLocalization.getJsonValue("linter.ruleDescriptions." + rule.id) === undefined) {
      missing.push("ruleDescriptions." + rule.id);
    }
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
