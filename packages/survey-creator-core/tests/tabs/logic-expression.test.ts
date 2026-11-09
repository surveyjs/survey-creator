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

test("SurveyLogicExpressionUpdater renders through survey-core's toString hooks", () => {
  const toStr = (expression: string): string => new SurveyLogicExpressionUpdater(expression).toString();
  expect(toStr("{q1} = 'a'")).toEqual("{q1} = 'a'");
  expect(toStr("({q1} = 'a' or {q1} = 'b') and {q2} notempty")).toEqual("(({q1} = 'a') or ({q1} = 'b')) and {q2} notempty");
  expect(toStr("!({q1} = 'a')")).toEqual("! ({q1} = 'a')");
  expect(toStr("{q1} empty or {q2} = ''")).toEqual("{q1} empty or ({q2} = '')");
  expect(toStr("{q2} + 1 > {q4} * 2")).toEqual("({q2} + 1) > ({q4} * 2)");
  expect(toStr("{q1} allof ['a', 1] or {val3} noneof ['x']")).toEqual("({q1} allof ['a', 1]) or ({val3} noneof ['x'])");
  expect(toStr("{q1} = iif({q2} > 1, 'a', 'b')")).toEqual("{q1} = iif(({q2} > 1), 'a', 'b')");
  expect(toStr("sum({q2}, 2) - 1")).toEqual("sum({q2}, 2) - 1");
  expect(updateLogicExpression("({q1} = 'a' or {q2} > 1 + 2) and {q1} anyof ['a', 'b']", "q1", "a", "z"))
    .toEqual("(({q1} = 'z') or ({q2} > (1 + 2))) and ({q1} anyof ['z', 'b'])");
  expect(updateLogicExpression("'a' = {q1} and {q1} contains 'a'", "q1", "a", "z")).toEqual("('z' = {q1}) and ({q1} contains 'z')");
});