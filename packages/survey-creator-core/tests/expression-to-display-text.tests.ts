import { SurveyModel } from "survey-core";
import { ExpressionToDisplayText } from "../src/expressionToDisplayText";

// ExpressionToDisplayText renders through survey-core's Operand.toString hooks (IOperandToStringContext)
const json = {
  elements: [
    { type: "dropdown", name: "q1", title: "Question 1", choices: [{ value: "a", text: "Item A" }, { value: "b", text: "Item B" }, { value: 1, text: "One" }] },
    { type: "text", name: "q2", title: "Question 2" },
    { type: "checkbox", name: "q3", valueName: "val3", title: "Question 3", choices: [{ value: "x", text: "Item X" }] },
    { type: "text", name: "q4" }
  ]
};
const toText = (expression: string, options: any): string =>
  new ExpressionToDisplayText(new SurveyModel(json), options).toDisplayText(expression);

test("ExpressionToDisplayText: names, operators and brackets without titles", () => {
  const options = { useElementTitles: false };
  expect(toText("{q1} = 'a'", options)).toBe("{q1} == 'a'");
  expect(toText("'a' = {q1}", options)).toBe("'a' == {q1}");
  expect(toText("{q1} != 'b' and {q2} > 5", options)).toBe("({q1} != 'b') and ({q2} > 5)");
  expect(toText("({q1} = 'a' or {q1} = 'b') and {q2} notempty", options)).toBe("(({q1} == 'a') or ({q1} == 'b')) and {q2} Not empty");
  expect(toText("{q1} empty", options)).toBe("{q1} Empty");
  expect(toText("!({q1} = 'a')", options)).toBe("! ({q1} == 'a')");
  expect(toText("{val3} anyof ['x', 'y']", options)).toBe("{val3} Any of ['x', 'y']");
  expect(toText("{q2} + 1 > {q4} * 2", options)).toBe("({q2} + 1) > ({q4} * 2)");
  expect(toText("iif({q1} = 'a', 'b', 'c')", options)).toBe("iif(({q1} == 'a'), 'b', 'c')");
  expect(toText("{q1} = iif(true, 'a', 'b')", options)).toBe("{q1} == iif(true, 'a', 'b')");
  expect(toText("{q1} allof ['a', 1] or {val3} noneof ['x']", options)).toBe("({q1} All of ['a', 1]) or ({val3} None of ['x'])");
  expect(toText("sum({q2}, 2) - 1", options)).toBe("sum({q2}, 2) - 1");
  expect(toText("{q1}", options)).toBe("{q1}");
});

test("ExpressionToDisplayText: titles and choice texts with useElementTitles", () => {
  const options = { useElementTitles: true };
  expect(toText("{q1} = 'a'", options)).toBe("{Question 1} == Item A");
  expect(toText("'a' = {q1}", options)).toBe("Item A == {Question 1}");
  expect(toText("{q1} = 1", options)).toBe("{Question 1} == One");
  expect(toText("{q1} contains 'b'", options)).toBe("{Question 1} Contains Item B");
  expect(toText("{q1} != 'b' and {q2} > 5", options)).toBe("({Question 1} != Item B) and ({Question 2} > 5)");
  expect(toText("!({q1} = 'a')", options)).toBe("! ({Question 1} == Item A)");
  expect(toText("{val3} anyof ['x', 'y']", options)).toBe("{Question 3} Any of [Item X, y]");
  expect(toText("{q1} allof ['a', 1] or {val3} noneof ['x']", options)).toBe("({Question 1} All of [Item A, One]) or ({Question 3} None of [Item X])");
  expect(toText("{q1} = 'a' and ({q2} = 1 or {q4} notempty)", options)).toBe("({Question 1} == Item A) and (({Question 2} == 1) or {q4} Not empty)");
  expect(toText("{q1} empty or {q2} = ''", options)).toBe("{Question 1} Empty or ({Question 2} == '')");
  expect(toText("{q2} + 1 > {q4} * 2", options)).toBe("({Question 2} + 1) > ({q4} * 2)");
  expect(toText("{q4} = 'a'", options)).toBe("{q4} == a");
  expect(toText("age({q2}) >= 18", options)).toBe("age({Question 2}) >= 18");
  expect(toText("{q1} = 'a' and iif(true, 'b', 'a') = 'b'", options)).toBe("({Question 1} == Item A) and (iif(true, 'b', 'a') == 'b')");
  // a variable that is not a question, or a question name that differs from its valueName, stays as written
  expect(toText("{unknown} = 'a'", options)).toBe("{unknown} == 'a'");
  expect(toText("{q3} contains 'x'", options)).toBe("{q3} Contains 'x'");
});

test("ExpressionToDisplayText: a constant inside a function keeps its own text", () => {
  // Before survey-core's toString hooks, the Creator kept the last compared question while rendering, so these
  // constants were shown as that question's choice texts: "iif(One, Item A, Item B)", "Item B, c" and "a, b"
  const options = { useElementTitles: true };
  expect(toText("{q1} = iif(true, 'a', 'b')", options)).toBe("{Question 1} == iif(true, 'a', 'b')");
  expect(toText("iif({q1} = 'a', 'b', 'c')", options)).toBe("iif(({Question 1} == Item A), 'b', 'c')");
  expect(toText("{q1} = iif({q2} > 1, 'a', 'b')", options)).toBe("{Question 1} == iif(({Question 2} > 1), 'a', 'b')");
});

test("ExpressionToDisplayText: getObjectDisplayName changes a question's text", () => {
  const options = {
    useElementTitles: true,
    getObjectDisplayName: (obj: any, area: string, reason: string, text: string): string => {
      expect(area).toBe("logic-tab:rule-condition");
      expect(reason).toBe("condition");
      return obj.name === "q2" ? "Custom" : text;
    }
  };
  expect(toText("{q1} != 'b' and {q2} > 5", options)).toBe("({Question 1} != Item B) and ({Custom} > 5)");
  expect(toText("sum({q2}, 2) - 1", options)).toBe("sum({Custom}, 2) - 1");
});

test("ExpressionToDisplayText: one instance renders several expressions", () => {
  const conv = new ExpressionToDisplayText(new SurveyModel(json), { useElementTitles: true });
  expect(conv.toDisplayText("{q1} = 'a' or {q2} = 'a'")).toBe("({Question 1} == Item A) or ({Question 2} == a)");
  expect(conv.toDisplayText("{q1} = 'b'")).toBe("{Question 1} == Item B");
});
