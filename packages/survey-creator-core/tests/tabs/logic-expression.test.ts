import { SurveyLogicExpressionUpdater, updateLogicExpression } from "../../src/components/tabs/logic-expression";

test("Rename choices for questions", () => {
  expect(updateLogicExpression("{q1} = 1", "q1", 1, 2)).toEqual("{q1} = 2");
  expect(updateLogicExpression("{q1} = \"item1\"", "q1", "item1", "Item 1")).toEqual("{q1} = 'Item 1'");
  expect(updateLogicExpression("{q1} = 'item1'", "q1", "item1", "Item 1")).toEqual("{q1} = 'Item 1'");
  expect(updateLogicExpression("{q1} = [2, 'item1', 'item2']", "q1", "item1", "Item 1")).toEqual("{q1} = [2, 'Item 1', 'item2']");
  expect(updateLogicExpression("{q2} = 1 and {q1} = 1", "q1", 1, 2)).toEqual("({q2} = 1) and ({q1} = 2)");
});

test("iif works incorrect Bug#7297", () => {

  const updater = new SurveyLogicExpressionUpdater("iif({q1} = 1, 'Yes', 'No')");
  expect(updater.toString()).toEqual("iif(({q1} = 1), 'Yes', 'No')");

  const updater2 = new SurveyLogicExpressionUpdater("iif({q1} = 'dog', {q2}, '') anyof['Dog', 'Cat']");
  expect(updater2.toString()).toEqual("iif(({q1} = 'dog'), {q2}, '') anyof ['Dog', 'Cat']");
});