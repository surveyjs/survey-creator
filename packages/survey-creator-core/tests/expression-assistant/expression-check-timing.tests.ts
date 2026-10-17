import { CreatorTester } from "../creator-tester";
import { checkExpression, getExpressionLintOptions } from "../../src/expression-assistant/expression-check";

export * from "../../src/property-grid/condition-survey";

// ~300 questions on 10 pages, ~50 conditions, a matrix, a dynamic panel, calculated values and two
// triggers.
function createLargeSurveyJson(): any {
  const pages = [];
  let index = 0;
  for (let p = 0; p < 10; p++) {
    const elements = [];
    for (let i = 0; i < 30; i++) {
      index++;
      const q: any = index % 3 === 0
        ? { type: "radiogroup", name: "q" + index, choices: ["a", "b", "c", "d"] }
        : { type: "text", name: "q" + index, inputType: index % 3 === 1 ? "number" : "text" };
      if (index % 6 === 0 && index > 3) q.visibleIf = "{q" + (index - 3) + "} = 'a' or {q" + (index - 2) + "} > 5";
      elements.push(q);
    }
    pages.push({ name: "page" + (p + 1), elements: elements });
  }
  pages[0].elements.push({
    type: "matrixdynamic", name: "matrix", columns: [{ name: "c1", cellType: "text" }, { name: "c2", cellType: "dropdown", choices: [1, 2] }],
  });
  pages[1].elements.push({
    type: "paneldynamic", name: "dp", templateElements: [{ type: "text", name: "t1" }, { type: "text", name: "t2", visibleIf: "{panel.t1} notempty" }],
  });
  return {
    pages: pages,
    calculatedValues: [{ name: "total", expression: "{q1} + {q4}" }, { name: "double", expression: "{total} * 2" }],
    triggers: [
      { type: "complete", expression: "{q2} = 'x'" },
      { type: "setvalue", expression: "{q4} > 10", setToName: "q7", setValue: 1 },
    ],
  };
}

// Measures the check on a large survey. Kept skipped: run it by hand with
//   npx vitest run tests/expression-assistant/expression-check-timing.tests.ts
// after changing test.skip to test, and read the console output.
test.skip("Timing of checkExpression on a ~300-question survey (ai-expressions)", () => {
  const creator = new CreatorTester();
  creator.JSON = createLargeSurveyJson();
  const site = { obj: creator.survey.getQuestionByName("q290"), propertyName: "visibleIf" };
  const options = getExpressionLintOptions(creator);
  for (let i = 0; i < 3; i++) checkExpression(creator, "{q3} = 'a'", [site], undefined, options);
  const times: Array<number> = [];
  for (let i = 0; i < 20; i++) {
    const start = performance.now();
    checkExpression(creator, "{q3} = 'b' and {total} > " + i, [site], undefined, options);
    times.push(performance.now() - start);
  }
  times.sort((a, b) => a - b);
  // eslint-disable-next-line no-console
  console.log("checkExpression: median " + times[10].toFixed(1) + " ms, max " + times[19].toFixed(1) + " ms, " +
    creator.survey.getAllQuestions().length + " questions");
  expect(times.length).toBe(20);
});
