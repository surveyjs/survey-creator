import { ILintFinding } from "survey-core/linter";
import { CreatorTester } from "../creator-tester";
import {
  buildExpressionCheckJson, checkExpression, getExpressionFix, getExpressionLintOptions, isSameLintFinding,
} from "../../src/expression-assistant/expression-check";
import { getCreatorLintOptions } from "../../src/components/tabs/json-editor-linter";

export * from "../../src/property-grid/condition-survey";

function createCreator(json: any, options?: any): CreatorTester {
  const creator = new CreatorTester(options);
  creator.JSON = json;
  return creator;
}
function checkQuestion(creator: CreatorTester, name: string, propertyName: string, expression: string) {
  const question = creator.survey.getQuestionByName(name);
  return checkExpression(creator, expression, [{ obj: question, propertyName: propertyName }]);
}
function ruleIds(res: { findings: Array<{ ruleId: string }> }): Array<string> {
  return res.findings.map(f => f.ruleId);
}

describe("Checking a candidate expression (ai-expressions)", () => {
  test("a clean candidate reports nothing and changes nothing", () => {
    const creator = createCreator({
      elements: [{ type: "radiogroup", name: "fruit", choices: ["apple", "banana"] }, { type: "text", name: "q2" }],
    });
    const before = creator.survey.toJSON();
    const canUndo = creator.undoRedoManager.canUndo();
    const res = checkQuestion(creator, "q2", "visibleIf", "{fruit} = 'apple'");
    expect(res.expression).toBe("{fruit} = 'apple'");
    expect(res.findings).toHaveLength(0);
    expect(res.errorCount + res.warningCount + res.infoCount).toBe(0);
    expect(res.isComplete).toBeTruthy();
    expect(creator.survey.toJSON()).toEqual(before);
    expect(creator.survey.getQuestionByName("q2").visibleIf).toBeFalsy();
    expect(creator.undoRedoManager.canUndo()).toBe(canUndo);
  });
  test("findings carry the localized text, the English text and the severity counts", () => {
    const creator = createCreator({
      elements: [{ type: "radiogroup", name: "fruit", choices: ["apple", "banana"] }, { type: "text", name: "q2" }],
    });
    const res = checkQuestion(creator, "q2", "visibleIf", "{frut} = 'apple' and {fruit} = 'aple'");
    expect(ruleIds(res).sort()).toEqual(["expression/unknown-choice", "reference/unknown"]);
    expect(res.errorCount).toBe(1);
    expect(res.warningCount).toBe(1);
    const unknown = res.findings.filter(f => f.ruleId === "reference/unknown")[0];
    expect(unknown.severity).toBe("error");
    expect(unknown.reason).toBe("notFound");
    expect(unknown.path).toBe("pages[0].elements[1].visibleIf");
    expect(unknown.englishText.indexOf("\"frut\" is not found")).toBe(0);
    expect(unknown.text).toBeTruthy();
    expect(unknown.site.obj).toBe(creator.survey.getQuestionByName("q2"));
  });
  test("an unchanged invalid expression still reports its error", () => {
    const creator = createCreator({
      elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2", visibleIf: "{missing} = 1" }],
    });
    const res = checkQuestion(creator, "q2", "visibleIf", "{missing} = 1");
    expect(ruleIds(res)).toEqual(["reference/unknown"]);
  });
  test("a candidate keeping one defect and fixing another reports exactly the kept one", () => {
    const creator = createCreator({
      elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2", visibleIf: "{missing} = 1 and {q11} = 2" }],
    });
    const res = checkQuestion(creator, "q2", "visibleIf", "{missing} = 1 and {q1} = 2");
    expect(res.findings).toHaveLength(1);
    expect(res.findings[0].ruleId).toBe("reference/unknown");
    expect(res.findings[0].englishText.indexOf("\"missing\"")).toBe(0);
  });
  test("a defect elsewhere is not reported", () => {
    const creator = createCreator({
      elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }, { type: "text", name: "q3", visibleIf: "{zzz} = 1" }],
    });
    expect(checkQuestion(creator, "q2", "visibleIf", "{q1} = 1").findings).toHaveLength(0);
  });
  test("a defect the candidate causes elsewhere is reported", () => {
    // hiding the only question of a page empties it
    const creator = createCreator({
      pages: [{ name: "p1", elements: [{ type: "text", name: "q1" }] }, { name: "p2", elements: [{ type: "text", name: "q2" }] }],
    });
    const res2 = checkQuestion(creator, "q2", "visibleIf", "{q1} = 1 and {q1} = 2");
    expect(ruleIds(res2)).toContain("expression/contradiction");
    expect(ruleIds(res2)).toContain("page/empty");
    const pageEmpty = res2.findings.filter(f => f.ruleId === "page/empty")[0];
    expect(pageEmpty.site).toBeUndefined();
    expect(pageEmpty.path).toBe("pages[1]");
  });
  test("a candidate closing a cycle reports it", () => {
    const creator = createCreator({
      elements: [{ type: "text", name: "q1" }],
      calculatedValues: [{ name: "a", expression: "{b}" }, { name: "b", expression: "1" }],
    });
    const res = checkExpression(creator, "{a} + 1", [{ obj: creator.survey.calculatedValues[1], propertyName: "expression" }]);
    expect(ruleIds(res)).toEqual(["cycle/calculated-value"]);
    expect(res.findings[0].path).toBe("calculatedValues[0].expression");
    expect(res.findings[0].site.obj).toBe(creator.survey.calculatedValues[1]);
  });
  test("an unchanged member of an existing loop reports it", () => {
    const creator = createCreator({
      elements: [{ type: "text", name: "q1" }],
      calculatedValues: [{ name: "a", expression: "{b}" }, { name: "b", expression: "{a}" }],
    });
    const res = checkExpression(creator, "{a}", [{ obj: creator.survey.calculatedValues[1], propertyName: "expression" }]);
    expect(ruleIds(res)).toEqual(["cycle/calculated-value"]);
    expect(res.findings[0].path).toBe("calculatedValues[0].expression");
  });
  test("an unchanged member of a trigger loop reports it", () => {
    const creator = createCreator({
      elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }],
      triggers: [
        { type: "setvalue", expression: "{q1} = 1", setToName: "q2", setValue: 1 },
        { type: "setvalue", expression: "{q2} = 1", setToName: "q1", setValue: 1 },
      ],
    });
    const res = checkExpression(creator, "{q2} = 1", [{ obj: creator.survey.triggers[1], propertyName: "expression" }]);
    expect(ruleIds(res)).toEqual(["cycle/trigger"]);
    expect(res.findings[0].path).toBe("triggers[0]");
  });
  test("an unchanged setValueIf / setValueExpression writer in a value-write loop reports it", () => {
    const creator = createCreator({
      elements: [
        { type: "text", name: "q1", setValueIf: "{q2} notempty", setValueExpression: "{q2}" },
        { type: "text", name: "q2", defaultValueExpression: "{q1}" },
      ],
    });
    const lint = (propertyName: string, expression: string) => checkQuestion(creator, "q1", propertyName, expression);
    const viaCondition = lint("setValueIf", "{q2} notempty");
    const viaValue = lint("setValueExpression", "{q2}");
    expect(ruleIds(viaCondition)).toEqual(["cycle/value-write"]);
    expect(ruleIds(viaValue)).toEqual(["cycle/value-write"]);
    // the linter lists the writer as setValueIf only, so the setValueExpression site claims the
    // loop through the write group
    expect(viaCondition.findings[0].path).toBe("pages[0].elements[0].setValueIf");
    expect(viaValue.findings[0].path).toBe("pages[0].elements[0].setValueIf");
    expect(viaValue.findings[0].site.propertyName).toBe("setValueExpression");
  });
  test("a visibleIf candidate does not inherit a loop through its question's defaultValueExpression", () => {
    const creator = createCreator({
      elements: [
        { type: "text", name: "q1", defaultValueExpression: "{q2}" },
        { type: "text", name: "q2", defaultValueExpression: "{q1}" },
        { type: "text", name: "q3" },
      ],
    });
    expect(checkQuestion(creator, "q1", "visibleIf", "{q3} = 1").findings).toHaveLength(0);
    // the loop itself is a finding of the property that is part of it
    expect(ruleIds(checkQuestion(creator, "q1", "defaultValueExpression", "{q2}"))).toEqual(["cycle/value-write"]);
  });
  test("onLintSurvey switching a rule off silences it", () => {
    const creator = createCreator({ elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] });
    expect(ruleIds(checkQuestion(creator, "q2", "visibleIf", "{zzz} = 1"))).toEqual(["reference/unknown"]);
    creator.onLintSurvey.add((_, options) => { options.lintOptions.rules["reference/unknown"] = "off"; });
    expect(checkQuestion(creator, "q2", "visibleIf", "{zzz} = 1").findings).toHaveLength(0);
  });
  test("lint options passed in are used as they are: onLintSurvey is not fired again", () => {
    const creator = createCreator({ elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] });
    let counter = 0;
    creator.onLintSurvey.add(() => { counter++; });
    const options = getExpressionLintOptions(creator);
    expect(counter).toBe(1);
    const q2 = creator.survey.getQuestionByName("q2");
    checkExpression(creator, "{q1} = 1", [{ obj: q2, propertyName: "visibleIf" }], undefined, options);
    checkExpression(creator, "{q1} = 2", [{ obj: q2, propertyName: "visibleIf" }], undefined, options);
    expect(counter).toBe(1);
    checkExpression(creator, "{q1} = 2", [{ obj: q2, propertyName: "visibleIf" }]);
    expect(counter).toBe(2);
  });
  test("findings of the two runs match on everything but the English text", () => {
    const a: ILintFinding = {
      ruleId: "element/never-visible", severity: "warning", reason: "dependsOnDeadValue", path: "pages[0].elements[2].visibleIf",
      message: "\"q3\" can never become visible ... (in \"{q2} = 1\")", messageData: { name: "q3", dependsOn: ["q2"] },
    };
    const b: ILintFinding = { ...a, message: "\"q3\" can never become visible ... (in \"{q2} = 2\")" };
    expect(isSameLintFinding(a, b)).toBeTruthy();
    expect(isSameLintFinding(a, { ...b, messageData: { name: "q3", dependsOn: ["q1"] } })).toBeFalsy();
    expect(isSameLintFinding(a, { ...b, path: "pages[0].elements[3].visibleIf" })).toBeFalsy();
    expect(isSameLintFinding(a, { ...b, reason: "other" })).toBeFalsy();
  });
  test("the JSON tab's lint options get no extra variable names", () => {
    const creator = createCreator({ elements: [{ type: "text", name: "q1" }] });
    creator.survey.setVariable("tier", "gold");
    expect(getCreatorLintOptions(creator).knownVariables).toBeUndefined();
    expect(getExpressionLintOptions(creator).knownVariables).toEqual(["tier"]);
  });
});

describe("Variables known to the check (ai-expressions)", () => {
  const json = { elements: [{ type: "text", name: "q1" }] };
  test("a variable of the definition", () => {
    const creator = createCreator(json);
    creator.variablePresets = { definition: { elements: [{ type: "dropdown", name: "tier", choices: ["gold", "silver"] }] }, presets: [] };
    expect(checkQuestion(creator, "q1", "visibleIf", "{tier} = 'gold'").findings).toHaveLength(0);
    expect(ruleIds(checkQuestion(creator, "q1", "visibleIf", "{teir} = 'gold'"))).toEqual(["reference/unknown"]);
  });
  test("a key of a preset, with no definition", () => {
    const creator = createCreator(json);
    creator.variablePresets = { presets: [{ name: "p1", variables: { tier: "gold" } }] };
    expect(checkQuestion(creator, "q1", "visibleIf", "{tier} = 'gold'").findings).toHaveLength(0);
  });
  test("a variable set on the designer survey", () => {
    const creator = createCreator(json);
    expect(ruleIds(checkQuestion(creator, "q1", "visibleIf", "{tier} = 'gold'"))).toEqual(["reference/unknown"]);
    creator.survey.setVariable("tier", "gold");
    expect(checkQuestion(creator, "q1", "visibleIf", "{tier} = 'gold'").findings).toHaveLength(0);
  });
  test("a host removing a name in onLintSurvey makes it unknown again", () => {
    const creator = createCreator(json);
    creator.variablePresets = { presets: [{ name: "p1", variables: { tier: "gold" } }] };
    creator.onLintSurvey.add((_, options) => {
      options.lintOptions.knownVariables = (options.lintOptions.knownVariables || []).filter(name => name !== "tier");
    });
    expect(ruleIds(checkQuestion(creator, "q1", "visibleIf", "{tier} = 'gold'"))).toEqual(["reference/unknown"]);
  });
});

describe("Fixes the check offers (ai-expressions)", () => {
  test("a respelled reference is offered as the fixed expression", () => {
    const creator = createCreator({
      elements: [{ type: "radiogroup", name: "fruit", choices: ["apple", "banana"] }, { type: "text", name: "q2" }],
    });
    const res = checkQuestion(creator, "q2", "visibleIf", "{frut} = 'apple'");
    expect(res.findings).toHaveLength(1);
    expect(res.findings[0].fix.expression).toBe("{fruit} = 'apple'");
    expect(res.findings[0].fix.title).toBeTruthy();
  });
  test("a respelled function is offered as the fixed expression", () => {
    const creator = createCreator({ elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] });
    const res = checkQuestion(creator, "q2", "visibleIf", "iff({q1} = 1, true, false)");
    const finding = res.findings.filter(f => f.ruleId === "expression/unknown-function")[0];
    expect(finding.fix.expression).toBe("iif({q1} = 1, true, false)");
  });
  test("a fix editing anything but the expression is not offered", () => {
    const creator = createCreator({ elements: [{ type: "radiogroup", name: "q1", choices: ["a", "a"] }, { type: "text", name: "q2" }] });
    const q2 = creator.survey.getQuestionByName("q2");
    const docs = buildExpressionCheckJson(creator, "{q1} = 'a'", [{ obj: q2, propertyName: "visibleIf" }]);
    const choiceFix: ILintFinding = {
      ruleId: "choices/duplicate", severity: "warning", reason: "duplicateValue", path: "pages[0].elements[0].choices[1]", message: "", messageData: {},
      fix: { reason: "removeDuplicate", edits: [{ op: "remove", path: "pages[0].elements[0].choices[1]" }] },
    };
    expect(getExpressionFix(choiceFix, docs.candidate, docs.sites)).toBeUndefined();
    const mixedFix: ILintFinding = { ...choiceFix, fix: { reason: "x", edits: [
      { op: "set", path: "pages[0].elements[1].visibleIf", value: "{q1} = 'b'" }, { op: "set", path: "pages[0].elements[0].name", value: "q9" }] } };
    expect(getExpressionFix(mixedFix, docs.candidate, docs.sites)).toBeUndefined();
    const siteFix: ILintFinding = { ...choiceFix, fix: { reason: "x", edits: [{ op: "set", path: "pages[0].elements[1].visibleIf", value: "{q1} = 'b'" }] } };
    expect(getExpressionFix(siteFix, docs.candidate, docs.sites).expression).toBe("{q1} = 'b'");
  });
});
