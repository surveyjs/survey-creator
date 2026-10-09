import { PanelModel, settings as surveySettings } from "survey-core";
import { CreatorTester } from "../creator-tester";
import { TabLogicPlugin } from "../../src/components/tabs/logic-plugin";
import { SurveyLogicUI } from "../../src/components/tabs/logic-ui";
import { LogicActionModelBase } from "../../src/components/tabs/logic-actions-model";
import {
  buildExpressionCheckJson, checkExpression, IExpressionCheckResult,
} from "../../src/expression-assistant/expression-check";

export * from "../../src/components/link-value";
export * from "../../src/property-grid/condition-survey";

function openLogic(json: any): { creator: CreatorTester, logic: SurveyLogicUI } {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester({ showLogicTab: true });
  creator.JSON = json;
  const plugin = <TabLogicPlugin>creator.getPlugin("logic");
  plugin.activate();
  return { creator: creator, logic: plugin.model };
}
function check(creator: CreatorTester, logic: SurveyLogicUI, expression: string): IExpressionCheckResult {
  const input = logic.itemEditor.getExpressionCheckInput();
  return checkExpression(creator, expression, input.sites, input.pending);
}
// The candidate the check lints is the survey that saving the rule produces; the check itself
// changes nothing and records no undo step.
function expectCandidateIsSaveResult(creator: CreatorTester, logic: SurveyLogicUI, expression: string, undoRestoresAll: boolean = true): void {
  const before = creator.survey.toJSON();
  const canUndo = creator.undoRedoManager.canUndo();
  const input = logic.itemEditor.getExpressionCheckInput();
  const docs = buildExpressionCheckJson(creator, expression, input.sites, input.pending);
  expect(docs.unaddressedSites).toHaveLength(0);
  checkExpression(creator, expression, input.sites, input.pending);
  expect(creator.survey.toJSON()).toEqual(before);
  expect(creator.undoRedoManager.canUndo()).toBe(canUndo);
  logic.expressionEditor.text = expression;
  expect(logic.saveEditableItem()).toBeTruthy();
  expect(creator.survey.toJSON()).toEqual(docs.candidate);
  creator.undo();
  if (undoRestoresAll) {
    expect(creator.survey.toJSON()).toEqual(before);
  }
}
function getModel(logic: SurveyLogicUI, index: number): LogicActionModelBase {
  return logic.itemEditor.getActionModelByPanel(logic.itemEditor.panels[index]);
}

describe("Checking a Logic tab rule (ai-expressions)", () => {
  test("a question action and a column action are checked in their own scopes", () => {
    const { creator, logic } = openLogic({
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2", visibleIf: "{q1} = 1" },
        { type: "matrixdropdown", name: "m", rows: ["r1"], columns: [{ name: "col1" }, { name: "col2" }] },
      ],
    });
    expect(logic.items).toHaveLength(1);
    logic.editItem(logic.items[0]);
    logic.itemEditor.panel.addPanel();
    const panel = logic.itemEditor.panels[1];
    panel.getQuestionByName("logicTypeName").value = "column_visibility";
    panel.getQuestionByName("elementSelector").value = "m.col2";
    const input = logic.itemEditor.getExpressionCheckInput();
    expect(input.sites.map(site => site.propertyName)).toEqual(["visibleIf", "visibleIf"]);
    const res = check(creator, logic, "{row.col1} = 1");
    expect(res.isComplete).toBeTruthy();
    expect(res.findings).toHaveLength(1);
    expect(res.findings[0].ruleId).toBe("reference/unknown");
    expect(res.findings[0].site.obj).toBe(creator.survey.getQuestionByName("q2"));
    expect((<LogicActionModelBase>res.findings[0].site.tag).logicType.name).toBe("question_visibility");
    expectCandidateIsSaveResult(creator, logic, "{q1} = 2");
  });
  test("an action added in the editor and not saved yet", () => {
    const { creator, logic } = openLogic({
      elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2", visibleIf: "{q1} = 1" }, { type: "text", name: "q3" }],
    });
    logic.editItem(logic.items[0]);
    logic.itemEditor.panel.addPanel();
    const panel = logic.itemEditor.panels[1];
    panel.getQuestionByName("logicTypeName").value = "question_visibility";
    panel.getQuestionByName("elementSelector").value = "q3";
    const res = check(creator, logic, "{nosuch} = 1");
    expect(res.findings.map(f => f.site.obj)).toEqual([creator.survey.getQuestionByName("q2"), creator.survey.getQuestionByName("q3")]);
    expect(res.findings[1].site.tag).toBe(getModel(logic, 1));
    expectCandidateIsSaveResult(creator, logic, "{q1} = 3");
  });
  test("a new setvalue trigger: its finding is mapped to the action", () => {
    const { creator, logic } = openLogic({
      elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2", visibleIf: "{q1} = 1" }, { type: "text", name: "q3" }],
    });
    logic.editItem(logic.items[0]);
    logic.itemEditor.panel.addPanel();
    const panel = logic.itemEditor.panels[1];
    panel.getQuestionByName("logicTypeName").value = "trigger_setvalue";
    // no target yet: the draft's own defect is in the baseline too and is not reported
    let res = check(creator, logic, "{nosuch} = 1");
    expect(res.findings.map(f => f.path)).toEqual(["pages[0].elements[1].visibleIf", "triggers[0].expression"]);
    expect(res.findings[1].site.tag).toBe(getModel(logic, 1));
    expect((<LogicActionModelBase>res.findings[1].site.tag).logicType.name).toBe("trigger_setvalue");
    expect(creator.survey.triggers).toHaveLength(0);
    (<PanelModel>panel.getElementByName("triggerQuestionsPanel")).getQuestionByName("setToName").value = "q3";
    res = check(creator, logic, "{q1} = 1");
    expect(res.findings).toHaveLength(0);
    expectCandidateIsSaveResult(creator, logic, "{q1} = 4");
    expect(creator.survey.triggers).toHaveLength(0);
  });
  test("an existing trigger edited in the panel", () => {
    const { creator, logic } = openLogic({
      elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }, { type: "text", name: "q3" }],
      triggers: [{ type: "runexpression", expression: "{q1} = 1", runExpression: "{q2} + 1", setToName: "q2" }],
    });
    logic.editItem(logic.items[0]);
    const panel = logic.itemEditor.panels[0];
    (<PanelModel>panel.getElementByName("triggerEditorPanel")).getQuestionByName("runExpression").value = "{q2} - 10";
    (<PanelModel>panel.getElementByName("triggerQuestionsPanel")).getQuestionByName("setToName").value = "q3";
    const input = logic.itemEditor.getExpressionCheckInput();
    expect(input.sites).toHaveLength(1);
    expect(input.sites[0].replaces).toBe(creator.survey.triggers[0]);
    // the panel edits a copy: the trigger itself is untouched until the rule is saved
    expect(creator.survey.triggers[0].toJSON().runExpression).toBe("{q2} + 1");
    const res = check(creator, logic, "{nosuch} = 1");
    expect(res.findings.map(f => f.path)).toEqual(["triggers[0].expression"]);
    // the loop runs through the edited target, not through what the survey holds now
    expect(check(creator, logic, "{q3} = 1").findings.map(f => [f.ruleId, f.path])).toEqual([["cycle/trigger", "triggers[0]"]]);
    expect(check(creator, logic, "{q2} = 1").findings).toHaveLength(0);
    expect(creator.survey.triggers[0].toJSON().runExpression).toBe("{q2} + 1");
    // undo restores the trigger's expression but not the properties the panel copied into it - a
    // limitation of saving a trigger in the Logic tab, outside what the check is about
    expectCandidateIsSaveResult(creator, logic, "{q1} = 5", false);
  });
  test("a set-value action whose pending setValueExpression closes a value-write loop", () => {
    const { creator, logic } = openLogic({
      elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }, { type: "text", name: "q3", defaultValueExpression: "{q2}" }],
    });
    logic.addNew();
    const panel = logic.itemEditor.panels[0];
    panel.getQuestionByName("logicTypeName").value = "question_setValue";
    panel.getQuestionByName("elementSelector").value = "q2";
    panel.getQuestionByName("setValueExpression").value = "{q3}";
    const input = logic.itemEditor.getExpressionCheckInput();
    expect(input.sites[0].siblings).toEqual({ setValueExpression: "{q3}" });
    const res = check(creator, logic, "{q1} notempty");
    expect(res.findings.map(f => f.ruleId)).toEqual(["cycle/value-write"]);
    expect(res.findings[0].site.obj).toBe(creator.survey.getQuestionByName("q2"));
    expect(creator.survey.getQuestionByName("q2").setValueExpression).toBeFalsy();
    expectCandidateIsSaveResult(creator, logic, "{q1} notempty");
  });
  test("an action removed, one retargeted and a trigger removed before a kept one", () => {
    const { creator, logic } = openLogic({
      elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2", visibleIf: "{q1} = 1" },
        { type: "text", name: "q3", visibleIf: "{q1} = 1" }, { type: "text", name: "q4" }, { type: "text", name: "q5" }],
      triggers: [
        { type: "complete", expression: "{q1} = 1" },
        { type: "setvalue", expression: "{q1} = 1", setToName: "q5", setValue: 2 },
      ],
    });
    logic.editItem(logic.items[0]);
    const editor = logic.itemEditor;
    const typeOf = (i: number) => editor.panels[i].getQuestionByName("logicTypeName").value;
    const indexOf = (type: string) => editor.panels.map((_, i) => typeOf(i)).indexOf(type);
    editor.panel.removePanel(indexOf("trigger_complete"));
    const q3Panel = editor.panels.filter(p => p.getQuestionByName("elementSelector").value === "q3")[0];
    editor.panel.removePanel(editor.panels.indexOf(q3Panel));
    const q2Panel = editor.panels.filter(p => p.getQuestionByName("elementSelector").value === "q2")[0];
    q2Panel.getQuestionByName("elementSelector").value = "q4";
    const input = editor.getExpressionCheckInput();
    expect(input.pending.removed).toEqual([creator.survey.triggers[0]]);
    expect(input.pending.cleared.map(site => site.obj).sort((a: any, b: any) => a.name < b.name ? -1 : 1))
      .toEqual([creator.survey.getQuestionByName("q2"), creator.survey.getQuestionByName("q3")]);
    const res = check(creator, logic, "{nosuch} = 1");
    // the kept trigger moved up past the removed one
    expect(res.findings.map(f => f.path).sort()).toEqual(["pages[0].elements[3].visibleIf", "triggers[0].expression"]);
    expectCandidateIsSaveResult(creator, logic, "{q1} = 6");
  });
  test("a rule with no action yet cannot be checked", () => {
    const { creator, logic } = openLogic({ elements: [{ type: "text", name: "q1" }] });
    logic.addNew();
    const input = logic.itemEditor.getExpressionCheckInput();
    expect(input.sites).toHaveLength(0);
    const res = check(creator, logic, "{nosuch} = 1");
    expect(res.isComplete).toBeFalsy();
    expect(res.findings).toHaveLength(0);
    expect(res.unaddressedSites).toHaveLength(0);
  });
});
