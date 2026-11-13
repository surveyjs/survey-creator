import {
  Base, ComponentCollection, ItemValue, MatrixDropdownColumn, QuestionCheckboxModel, QuestionCompositeModel,
  QuestionMatrixDropdownModel, QuestionMatrixDynamicModel, QuestionMultipleTextModel, QuestionPanelDynamicModel,
  QuestionRatingModel, QuestionMatrixModel, PanelModel,
} from "survey-core";
import { CreatorTester } from "../creator-tester";
import { getLintPath } from "../../src/expression-assistant/lint-paths";
import { buildExpressionCheckJson, checkExpression } from "../../src/expression-assistant/expression-check";

export * from "../../src/property-grid/condition-survey";

// Every row of the object -> path table is proven by a defect: the linter reports an unknown name
// written there at exactly that path, so the path is the linter's own and not only the one this
// code computes.
function expectPath(creator: CreatorTester, obj: Base, propertyName: string, path: string): void {
  expect(getLintPath(obj)).toBe(path);
  const res = checkExpression(creator, "{nosuch} = 1", [{ obj: obj, propertyName: propertyName }]);
  expect(res.unaddressedSites).toHaveLength(0);
  expect(res.isComplete).toBeTruthy();
  const findings = res.findings.filter(f => f.ruleId === "reference/unknown");
  expect(findings.map(f => f.path)).toEqual([path + "." + propertyName]);
  expect(findings[0].site.obj).toBe(obj);
}

describe("Linter paths of creator objects (ai-expressions)", () => {
  test("page, question and an element of a panel", () => {
    const creator = new CreatorTester();
    creator.JSON = {
      pages: [
        { name: "p1", elements: [{ type: "text", name: "q1" }] },
        { name: "p2", elements: [{ type: "text", name: "q2" }, { type: "panel", name: "pnl", elements: [{ type: "text", name: "q3" }] }] },
      ],
    };
    const survey = creator.survey;
    expect(getLintPath(survey)).toBe("");
    expectPath(creator, survey.pages[1], "visibleIf", "pages[1]");
    expectPath(creator, survey.getQuestionByName("q2"), "visibleIf", "pages[1].elements[0]");
    expectPath(creator, survey.getPanelByName("pnl"), "enableIf", "pages[1].elements[1]");
    expectPath(creator, survey.getQuestionByName("q3"), "requiredIf", "pages[1].elements[1].elements[0]");
  });
  test("an element of a dynamic panel template resolves {panel.x}", () => {
    const creator = new CreatorTester();
    creator.JSON = {
      elements: [{ type: "paneldynamic", name: "dp", templateElements: [
        { type: "text", name: "t1" }, { type: "text", name: "t2" }] }],
    };
    const dp = <QuestionPanelDynamicModel>creator.survey.getQuestionByName("dp");
    const t2 = dp.template.getQuestionByName("t2");
    expectPath(creator, t2, "visibleIf", "pages[0].elements[0].templateElements[1]");
    const res = checkExpression(creator, "{panel.t1} = 1", [{ obj: t2, propertyName: "visibleIf" }]);
    expect(res.findings).toHaveLength(0);
    expect(res.isComplete).toBeTruthy();
    // templateVisibleIf sits on the dynamic panel itself
    expect(checkExpression(creator, "{panel.t1} = 1", [{ obj: dp, propertyName: "templateVisibleIf" }]).findings).toHaveLength(0);
  });
  test("a matrix column, a column choice and an element of a detail panel resolve {row.x}", () => {
    const creator = new CreatorTester();
    creator.JSON = {
      elements: [{
        type: "matrixdynamic", name: "m", detailPanelMode: "underRow",
        columns: [{ name: "col1" }, { name: "col2", cellType: "dropdown", choices: ["x", "y"] }],
        detailElements: [{ type: "text", name: "d1" }],
      }],
    };
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("m");
    const col2: MatrixDropdownColumn = matrix.columns[1];
    expectPath(creator, col2, "visibleIf", "pages[0].elements[0].columns[1]");
    expectPath(creator, col2.choices[1], "visibleIf", "pages[0].elements[0].columns[1].choices[1]");
    const d1 = matrix.detailPanel.getQuestionByName("d1");
    expectPath(creator, d1, "visibleIf", "pages[0].elements[0].detailElements[0]");
    expect(checkExpression(creator, "{row.col1} = 1", [{ obj: d1, propertyName: "visibleIf" }]).findings).toHaveLength(0);
    expect(checkExpression(creator, "{row.col1} = 1", [{ obj: col2, propertyName: "visibleIf" }]).findings).toHaveLength(0);
  });
  test("a multiple-text item and validators", () => {
    const creator = new CreatorTester();
    creator.JSON = {
      elements: [
        { type: "multipletext", name: "mt", items: [{ name: "i1" }, { name: "i2", validators: [{ type: "expression" }] }] },
        { type: "text", name: "q1", validators: [{ type: "numeric" }, { type: "expression" }] },
        { type: "matrixdropdown", name: "m", rows: ["r1"], columns: [{ name: "c1", validators: [{ type: "expression" }] }] },
      ],
    };
    const mt = <QuestionMultipleTextModel>creator.survey.getQuestionByName("mt");
    expect(getLintPath(mt.items[1])).toBe("pages[0].elements[0].items[1]");
    expectPath(creator, mt.items[1].validators[0], "expression", "pages[0].elements[0].items[1].validators[0]");
    const q1 = creator.survey.getQuestionByName("q1");
    expectPath(creator, q1.validators[1], "expression", "pages[0].elements[1].validators[1]");
    const matrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("m");
    expectPath(creator, matrix.columns[0].validators[0], "expression", "pages[0].elements[2].columns[0].validators[0]");
  });
  test("choices, a bare-value choice and choicesVisibleIf with {item}", () => {
    const creator = new CreatorTester();
    creator.JSON = {
      elements: [{ type: "checkbox", name: "q1", choices: ["a", { value: "b", text: "B" }, "c"] }],
    };
    const q1 = <QuestionCheckboxModel>creator.survey.getQuestionByName("q1");
    expectPath(creator, q1.choices[1], "visibleIf", "pages[0].elements[0].choices[1]");
    // "c" is written as the bare value: it becomes an object to take the property
    const bare: ItemValue = q1.choices[2];
    expectPath(creator, bare, "enableIf", "pages[0].elements[0].choices[2]");
    const docs = buildExpressionCheckJson(creator, "{q1} empty", [{ obj: bare, propertyName: "enableIf" }]);
    expect(docs.candidate.pages[0].elements[0].choices[2]).toEqual({ value: "c", enableIf: "{q1} empty" });
    expect(docs.baseline.pages[0].elements[0].choices[2]).toEqual({ value: "c", enableIf: "" });
    expect(checkExpression(creator, "{item} != 'a'", [{ obj: q1, propertyName: "choicesVisibleIf" }]).findings).toHaveLength(0);
  });
  test("matrix rows and columns, rating values", () => {
    const creator = new CreatorTester();
    creator.JSON = {
      elements: [
        { type: "matrix", name: "m", rows: ["r1", "r2"], columns: ["c1"] },
        { type: "rating", name: "r", rateValues: [1, 2, 3] },
      ],
    };
    const matrix = <QuestionMatrixModel>creator.survey.getQuestionByName("m");
    expectPath(creator, matrix.rows[1], "visibleIf", "pages[0].elements[0].rows[1]");
    expectPath(creator, matrix.columns[0], "visibleIf", "pages[0].elements[0].columns[0]");
    const rating = <QuestionRatingModel>creator.survey.getQuestionByName("r");
    expectPath(creator, rating.rateValues[2], "visibleIf", "pages[0].elements[1].rateValues[2]");
  });
  test("calculated values, triggers and survey condition items", () => {
    const creator = new CreatorTester();
    creator.JSON = {
      elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }],
      calculatedValues: [{ name: "c1", expression: "1" }, { name: "c2", expression: "2" }],
      triggers: [{ type: "complete", expression: "{q1} = 1" }, { type: "setvalue", expression: "{q1} = 2", setToName: "q2", setValue: 1 }],
      completedHtmlOnCondition: [{ expression: "{q1} = 1", html: "a" }],
      navigateToUrlOnCondition: [{ expression: "{q1} = 1", url: "a" }],
    };
    const survey = creator.survey;
    expectPath(creator, survey.calculatedValues[1], "expression", "calculatedValues[1]");
    expectPath(creator, survey.triggers[1], "expression", "triggers[1]");
    expectPath(creator, survey.completedHtmlOnCondition[0], "expression", "completedHtmlOnCondition[0]");
    expectPath(creator, survey.navigateToUrlOnCondition[0], "expression", "navigateToUrlOnCondition[0]");
  });
  test("the content of a custom component and a detached object have no path", () => {
    ComponentCollection.Instance.add({
      name: "ai_expr_comp",
      elementsJSON: [{ type: "text", name: "inner" }],
    });
    try {
      const creator = new CreatorTester();
      creator.JSON = { elements: [{ type: "ai_expr_comp", name: "comp" }, { type: "text", name: "q1" }] };
      const comp = <QuestionCompositeModel>creator.survey.getQuestionByName("comp");
      const inner = (<PanelModel>comp.contentPanel).getQuestionByName("inner");
      expect(getLintPath(comp)).toBe("pages[0].elements[0]");
      expect(getLintPath(inner)).toBeUndefined();
      const res = checkExpression(creator, "{q1} = 1", [{ obj: inner, propertyName: "visibleIf" }]);
      expect(res.unaddressedSites).toHaveLength(1);
      expect(res.isComplete).toBeFalsy();
      expect(res.findings).toHaveLength(0);
      const q1 = creator.survey.getQuestionByName("q1");
      const partial = checkExpression(creator, "{nosuch} = 1", [{ obj: inner, propertyName: "visibleIf" }, { obj: q1, propertyName: "visibleIf" }]);
      expect(partial.unaddressedSites.map(site => site.obj)).toEqual([inner]);
      expect(partial.isComplete).toBeFalsy();
      expect(partial.findings.map(f => f.path)).toEqual(["pages[0].elements[1].visibleIf"]);
      expect(getLintPath(new ItemValue("a"))).toBeUndefined();
    } finally {
      ComponentCollection.Instance.clear();
    }
  });
});
