import { ConditionsParser, FunctionFactory } from "survey-core";
import {
  expressionGuideSections, expressionGuideVersion, getExpressionGuideText,
} from "../../src/expression-assistant/expression-guide";

describe("Expression syntax guide (ai-expressions)", () => {
  const examples = [];
  expressionGuideSections.forEach(section => section.examples.forEach(ex => examples.push(ex)));

  test("every example the guide shows as valid parses", () => {
    const parser = new ConditionsParser();
    const failed = examples.filter(ex => ex.isValid && !parser.parseExpression(ex.expression)).map(ex => ex.expression);
    expect(failed).toEqual([]);
  });
  test("every example the guide shows as invalid does not parse, and says why", () => {
    const parser = new ConditionsParser();
    const invalid = examples.filter(ex => !ex.isValid);
    expect(invalid.length).toBeGreaterThan(0);
    expect(invalid.filter(ex => !!parser.parseExpression(ex.expression)).map(ex => ex.expression)).toEqual([]);
    expect(invalid.filter(ex => !ex.note).map(ex => ex.expression)).toEqual([]);
  });
  test("the guide forbids what the grammar rejects and keeps what it accepts", () => {
    const parser = new ConditionsParser();
    ["not {q}", "{q} === 1", "{{q} = 1}"].forEach(x => expect(parser.parseExpression(x), x).toBeFalsy());
    ["{a} && {b}", "{a} || {b}", "!{a}", "negate {a}", "{a} <> 1", "{a} == 1"].forEach(x => expect(parser.parseExpression(x), x).toBeTruthy());
    const shown = examples.map(ex => ex.expression);
    expect(shown.some(x => x.indexOf("&&") > -1)).toBe(true);
    expect(shown.some(x => x.indexOf("||") > -1)).toBe(true);
    expect(shown.some(x => x.indexOf("<>") > -1)).toBe(true);
  });
  test("the text holds every section and every example, and names its version", () => {
    const text = getExpressionGuideText();
    expect(text.indexOf("guide version " + expressionGuideVersion)).toBeGreaterThan(-1);
    expressionGuideSections.forEach(section => {
      expect(text.indexOf("## " + section.title)).toBeGreaterThan(-1);
      section.examples.forEach(ex => expect(text.indexOf(ex.expression), ex.expression).toBeGreaterThan(-1));
    });
    expect(getExpressionGuideText()).toBe(text);
  });
  test("the functions the guide calls are registered", () => {
    const parser = new ConditionsParser();
    const names: Array<string> = [];
    examples.filter(ex => ex.isValid).forEach(ex => {
      expect(parser.parseExpression(ex.expression), ex.expression).toBeTruthy();
      (ex.expression.match(/([A-Za-z]+)\(/g) || []).forEach(m => {
        const name = m.substring(0, m.length - 1);
        if (names.indexOf(name) < 0) names.push(name);
      });
    });
    expect(names.length).toBeGreaterThan(5);
    expect(names.filter(name => !FunctionFactory.Instance.hasFunction(name))).toEqual([]);
  });
});
