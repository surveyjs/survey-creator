import * as fs from "fs";
import * as path from "path";
import {
  ConditionsParser, FunctionFactory, QuestionCheckboxModel, QuestionMatrixDynamicModel, QuestionPanelDynamicModel,
  SurveyModel, settings as surveySettings,
} from "survey-core";
import { CreatorTester } from "../creator-tester";
import { TabLogicPlugin } from "../../src/components/tabs/logic-plugin";
import { ConditionEditor } from "../../src/property-grid/condition-survey";
import { settings } from "../../src/creator-settings";
import { buildExpressionContext, buildExpressionSystemPrompt, creatorInternalFunctions, IExpressionContext } from "../../src/expression-assistant/expression-context";
import { checkExpression, getExpressionLintOptions, IExpressionSite } from "../../src/expression-assistant/expression-check";

export * from "../../src/components/link-value";

function createCreator(json: any, options?: any): CreatorTester {
  const creator = new CreatorTester(options);
  creator.JSON = json;
  return creator;
}
function contextFor(creator: CreatorTester, sites: Array<IExpressionSite>, expression: string = "", editor?: ConditionEditor): IExpressionContext {
  return buildExpressionContext(creator, sites, expression, editor, getExpressionLintOptions(creator)).context;
}
function questionSite(creator: CreatorTester, name: string, propertyName: string = "visibleIf"): IExpressionSite {
  return { obj: creator.survey.getQuestionByName(name), propertyName: propertyName };
}
function names(context: IExpressionContext): Array<string> {
  return context.variables.map(v => v.name);
}
function prefixes(context: IExpressionContext): Array<string> {
  return context.scopes.map(s => s.prefix);
}

describe("The AI context of an expression (ai-expressions)", () => {
  test("a page question: variables, no scope, a condition target", () => {
    const creator = createCreator({
      pages: [
        { name: "p1", elements: [{ type: "radiogroup", name: "fruit", title: "Fruit", choices: [{ value: "apple", text: "Apple" }, "banana"], showOtherItem: true }] },
        { name: "p2", elements: [{ type: "text", name: "age", inputType: "number" }, { type: "text", name: "q2" }] },
      ],
      calculatedValues: [{ name: "total", expression: "{age} + 1" }],
    });
    const context = contextFor(creator, [questionSite(creator, "q2")]);
    expect(context.target).toEqual({
      isCondition: true, resultType: "boolean",
      objects: [{ type: "text", name: "q2", path: "pages[1].elements[1]", propertyName: "visibleIf" }],
    });
    expect(context.scopes).toEqual([]);
    expect(names(context).sort()).toEqual(["age", "fruit", "total"]);
    const fruit = context.variables.filter(v => v.name === "fruit")[0];
    expect(fruit).toEqual({
      name: "fruit", kind: "question", type: "radiogroup", valueType: "string", page: "p1",
      choices: [{ value: "apple", text: "Apple" }, { value: "banana", text: "banana" }, { value: "other", text: "Other (describe)" }],
    });
    const age = context.variables.filter(v => v.name === "age")[0];
    expect(age.valueType).toBe("number");
    expect(context.variables.filter(v => v.name === "total")[0].kind).toBe("calculatedValue");
    expect(context.locales).toEqual({ creator: "en", survey: "en" });
    expect(context.truncated).toEqual({ variables: false, choices: false, examples: false });
  });
  test("an element of a panel is checked at the survey level", () => {
    const creator = createCreator({ elements: [{ type: "panel", name: "pnl", elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] }] });
    const context = contextFor(creator, [questionSite(creator, "q2")]);
    expect(context.scopes).toEqual([]);
    expect(names(context)).toContain("q1");
  });
  test("an element of a dynamic panel template gets the panel prefixes with the template names", () => {
    const creator = createCreator({
      elements: [{ type: "paneldynamic", name: "dp", templateElements: [{ type: "text", name: "t1" }, { type: "text", name: "t2" }] }],
    });
    const dp = <QuestionPanelDynamicModel>creator.survey.getQuestionByName("dp");
    const context = contextFor(creator, [{ obj: dp.template.getQuestionByName("t2"), propertyName: "visibleIf" }]);
    expect(prefixes(context)).toEqual(["panel", "prevPanel", "nextPanel", "parentPanel", "panelIndex", "visiblePanelIndex"]);
    expect(context.scopes[0].names).toEqual(["t1", "t2"]);
    expect(names(context)).toContain("panel.t1");
    // the template condition of the dynamic panel itself runs inside its template
    expect(prefixes(contextFor(creator, [{ obj: dp, propertyName: "templateVisibleIf" }]))[0]).toBe("panel");
  });
  test("a matrix column and a detail element get the row prefixes with the column names", () => {
    const creator = createCreator({
      elements: [{
        type: "matrixdynamic", name: "m", detailPanelMode: "underRow",
        columns: [{ name: "col1" }, { name: "col2" }], detailElements: [{ type: "text", name: "d1" }],
      }],
    });
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("m");
    const column = contextFor(creator, [{ obj: matrix.columns[1], propertyName: "visibleIf" }]);
    expect(prefixes(column)[0]).toBe("row");
    expect(column.scopes[0].names).toEqual(["col1", "col2"]);
    expect(names(column)).toContain("row.col1");
    const detail = contextFor(creator, [{ obj: matrix.detailPanel.getQuestionByName("d1"), propertyName: "visibleIf" }]);
    expect(prefixes(detail)[0]).toBe("row");
  });
  test("an item condition and a choice get {item}", () => {
    const creator = createCreator({ elements: [{ type: "checkbox", name: "q1", choices: ["a", "b"] }, { type: "text", name: "q2" }] });
    const q1 = <QuestionCheckboxModel>creator.survey.getQuestionByName("q1");
    expect(prefixes(contextFor(creator, [{ obj: q1, propertyName: "choicesVisibleIf" }]))).toEqual(["item"]);
    const choice = contextFor(creator, [{ obj: q1.choices[1], propertyName: "visibleIf" }]);
    expect(prefixes(choice)).toEqual(["item"]);
    expect(choice.target.objects[0].path).toBe("pages[0].elements[0].choices[1]");
  });
  test("a calculated value, a trigger and value expressions: what the result must be", () => {
    const creator = createCreator({
      elements: [
        { type: "text", name: "n", inputType: "number" }, { type: "text", name: "d", inputType: "date" },
        { type: "checkbox", name: "c", choices: ["a"] },
      ],
      calculatedValues: [{ name: "cv", expression: "1" }],
      triggers: [{ type: "complete", expression: "{n} = 1" }],
    });
    const cv = contextFor(creator, [{ obj: creator.survey.calculatedValues[0], propertyName: "expression" }]);
    expect(cv.target.isCondition).toBe(false);
    expect(cv.target.resultType).toBeUndefined();
    expect(cv.target.objects[0]).toEqual({ type: "calculatedvalue", name: "cv", path: "calculatedValues[0]", propertyName: "expression" });
    const trigger = contextFor(creator, [{ obj: creator.survey.triggers[0], propertyName: "expression" }]);
    expect(trigger.target.isCondition).toBe(true);
    expect(trigger.target.objects[0].path).toBe("triggers[0]");
    expect(contextFor(creator, [questionSite(creator, "n", "minValueExpression")]).target.resultType).toBe("number");
    expect(contextFor(creator, [questionSite(creator, "d", "maxValueExpression")]).target.resultType).toBe("date");
    expect(contextFor(creator, [questionSite(creator, "c", "defaultValueExpression")]).target.resultType).toBe("array");
  });
  test("a Logic tab rule with several actions, through the rule's own editor", () => {
    surveySettings.animationEnabled = false;
    const creator = createCreator({
      elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2", visibleIf: "{q1} = 1" }, { type: "text", name: "q3", enableIf: "{q1} = 1" }],
    }, { showLogicTab: true });
    const plugin = <TabLogicPlugin>creator.getPlugin("logic");
    plugin.activate();
    const logic = plugin.model;
    logic.editItem(logic.items[0]);
    const input = logic.itemEditor.getExpressionCheckInput();
    const context = contextFor(creator, input.sites, logic.expressionEditor.text, logic.expressionEditor);
    expect(context.target.objects.map(o => o.name + "." + o.propertyName)).toEqual(["q2.visibleIf", "q3.enableIf"]);
    expect(names(context).sort()).toEqual(["q1", "q2", "q3"]);
  });
});

describe("The AI context and onConditionGetQuestionList (ai-expressions)", () => {
  test("a handler removing an entry removes it, and sees the editor only when there is one", () => {
    const creator = createCreator({ elements: [{ type: "text", name: "q1" }, { type: "text", name: "secret" }, { type: "text", name: "q3" }] });
    const editors: Array<any> = [];
    creator.onConditionGetQuestionList.add((_, options) => {
      editors.push(options.editor);
      options.list = options.list.filter(item => item.name !== "secret");
    });
    const site = questionSite(creator, "q3");
    expect(names(contextFor(creator, [site]))).toEqual(["q1"]);
    expect(editors).toEqual([undefined]);
    const editor = new ConditionEditor(creator.survey, site.obj, creator, "visibleIf");
    editors.length = 0;
    expect(names(contextFor(creator, [site], "", editor))).toEqual(["q1"]);
    expect(editors).toEqual([editor]);
    // a name hidden from the list is still accepted by the check: the survey holds it
    expect(checkExpression(creator, "{secret} = 1", [site]).findings).toHaveLength(0);
  });
});

describe("Host variables in the AI context (ai-expressions)", () => {
  const json = { elements: [{ type: "text", name: "q1" }] };
  test("a definition variable comes with its title and choices", () => {
    const creator = createCreator(json);
    creator.variablePresets = {
      definition: { elements: [{ type: "dropdown", name: "tier", title: "Customer tier", choices: ["gold", "silver"] }] },
      presets: [],
    };
    const tier = contextFor(creator, [questionSite(creator, "q1")]).variables.filter(v => v.name === "tier")[0];
    expect(tier).toEqual({
      name: "tier", kind: "hostVariable", type: "dropdown", valueType: "string", title: "Customer tier",
      choices: [{ value: "gold", text: "gold" }, { value: "silver", text: "silver" }],
    });
  });
  test("with presets and no definition, the preset keys", () => {
    const creator = createCreator(json);
    creator.variablePresets = { presets: [{ name: "p1", variables: { tier: "gold", years: 3 } }] };
    const context = contextFor(creator, [questionSite(creator, "q1")]);
    expect(context.variables.filter(v => v.kind === "hostVariable").map(v => v.name)).toEqual(["tier", "years"]);
  });
  test("the context and the check agree on every runtime variable", () => {
    const creator = createCreator(json);
    creator.variablePresets = {
      definition: { elements: [{ type: "text", name: "defined" }] },
      presets: [{ name: "p1", variables: { defined: "x" } }],
    };
    creator.survey.setVariable("designer", 1);
    const site = questionSite(creator, "q1");
    const options = getExpressionLintOptions(creator);
    const context = buildExpressionContext(creator, [site], "", undefined, options).context;
    ["defined", "designer"].forEach(name => {
      expect(names(context), name).toContain(name);
      const res = checkExpression(creator, "{" + name + "} = 'x'", [site], undefined, options);
      expect(res.findings.filter(f => f.ruleId === "reference/unknown"), name).toHaveLength(0);
    });
    const presetOnly = createCreator(json);
    presetOnly.variablePresets = { presets: [{ name: "p1", variables: { tier: "gold" } }] };
    const presetSite = questionSite(presetOnly, "q1");
    expect(names(contextFor(presetOnly, [presetSite]))).toContain("tier");
    expect(checkExpression(presetOnly, "{tier} = 'x'", [presetSite]).findings).toHaveLength(0);
  });
  test("a name a host removes from knownVariables in onLintSurvey is in neither", () => {
    const creator = createCreator(json);
    creator.variablePresets = { presets: [{ name: "p1", variables: { tier: "gold", keep: 1 } }] };
    creator.onLintSurvey.add((_, options) => {
      options.lintOptions.knownVariables = (options.lintOptions.knownVariables || []).filter(name => name !== "tier");
    });
    const site = questionSite(creator, "q1");
    const options = getExpressionLintOptions(creator);
    const context = buildExpressionContext(creator, [site], "", undefined, options).context;
    expect(names(context)).not.toContain("tier");
    expect(names(context)).toContain("keep");
    expect(checkExpression(creator, "{tier} = 'x'", [site], undefined, options).findings.map(f => f.ruleId)).toEqual(["reference/unknown"]);
  });
});

describe("Functions and operators in the AI context (ai-expressions)", () => {
  test("built-ins carry signatures; custom functions with and without metadata; no creator-internal one", () => {
    FunctionFactory.Instance.register("aiexPlain", () => 1);
    FunctionFactory.Instance.register({
      name: "aiexDescribed", func: () => 1, description: "Returns one",
      parameters: [{ name: "value", type: "number", optional: true }], returnType: "number",
    });
    try {
      const creator = createCreator({ elements: [{ type: "text", name: "q1" }] });
      const context = contextFor(creator, [questionSite(creator, "q1")]);
      const byName = (name: string) => context.functions.filter(f => f.name === name)[0];
      expect(byName("iif")).toEqual({
        name: "iif", isCustom: false, isAsync: false,
        signature: "iif(condition: condition, valueIfTrue: any, valueIfFalse: any): any",
        description: "Returns the second argument when the condition holds, otherwise the third.",
      });
      expect(byName("sum").signature).toBe("sum(...values: number|array): number");
      expect(byName("displayValue").isAsync).toBe(true);
      expect(byName("aiexPlain")).toEqual({ name: "aiexPlain", isCustom: true, isAsync: false });
      expect(byName("aiexDescribed")).toEqual({
        name: "aiexDescribed", isCustom: true, isAsync: false, signature: "aiexDescribed(value?: number): number", description: "Returns one",
      });
      creatorInternalFunctions.forEach(name => expect(byName(name), name).toBeUndefined());
      expect(context.functions.filter(f => !f.isCustom && !f.signature).map(f => f.name)).toEqual([]);
    } finally {
      FunctionFactory.Instance.unregister("aiexPlain");
      FunctionFactory.Instance.unregister("aiexDescribed");
    }
  });
  test("every function creator registers is on the internal list", () => {
    const registered: Array<string> = [];
    const walk = (dir: string) => fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(full);
      if (!/\.tsx?$/.test(entry.name)) return;
      const text = fs.readFileSync(full, "utf8");
      const re = /(?:FunctionFactory\.Instance\.register|registerFunction)\(\s*(?:\{\s*name:\s*)?"(\w+)"/g;
      let match: RegExpExecArray;
      while((match = re.exec(text)) !== null) registered.push(match[1]);
    });
    walk(path.resolve(__dirname, "../../src"));
    expect(registered.length).toBeGreaterThan(3);
    expect(registered.filter(name => creatorInternalFunctions.indexOf(name) < 0)).toEqual([]);
  });
  test("every operator spelling parses to its operator, and the questionTypes follow the settings", () => {
    const creator = createCreator({ elements: [{ type: "text", name: "q1" }] });
    const context = contextFor(creator, [questionSite(creator, "q1")]);
    const parser = new ConditionsParser();
    const failed: Array<string> = [];
    context.operators.forEach(op => op.spellings.forEach(sp => {
      let text = "{a} " + sp + " {b}";
      if (op.name === "empty" || op.name === "notempty") text = "{a} " + sp;
      if (op.name === "negate") text = sp === "!" ? "!{a}" : sp + " {a}";
      const operand: any = parser.parseExpression(text);
      if (!operand || operand.operator !== op.name) failed.push(op.name + ": " + text);
    }));
    expect(failed).toEqual([]);
    expect(context.operators.filter(op => op.name === "allof")[0].questionTypes).toEqual(["checkbox"]);
    const saved = surveySettings.logic.operators.allof;
    surveySettings.logic.operators.allof = ["checkbox", "tagbox"];
    try {
      expect(contextFor(creator, [questionSite(creator, "q1")]).operators.filter(op => op.name === "allof")[0].questionTypes).toEqual(["checkbox", "tagbox"]);
    } finally {
      surveySettings.logic.operators.allof = saved;
    }
    expect(context.operators.map(op => op.name)).toContain("and");
    expect(context.operators.filter(op => op.name === "negate")[0].spellings).toEqual(["!", "negate"]);
  });
});

describe("Caps, examples and the system prompt (ai-expressions)", () => {
  const caps = { ...settings.expressionAssistant };
  afterEach(() => { Object.assign(settings.expressionAssistant, caps); });

  test("choices are cut at the cap", () => {
    settings.expressionAssistant.maxChoicesPerQuestion = 3;
    const creator = createCreator({ elements: [{ type: "dropdown", name: "q1", choices: [1, 2, 3, 4, 5] }, { type: "text", name: "q2" }] });
    const context = contextFor(creator, [questionSite(creator, "q2")]);
    expect(context.variables.filter(v => v.name === "q1")[0].choices.map(c => c.value)).toEqual([1, 2, 3]);
    expect(context.truncated.choices).toBe(true);
  });
  test("with 400 questions the referenced ones and the target page survive the cut", () => {
    const pages = [];
    for (let p = 0; p < 10; p++) {
      const elements = [];
      for (let i = 0; i < 40; i++) elements.push({ type: "text", name: "q" + (p * 40 + i + 1) });
      pages.push({ name: "page" + (p + 1), elements: elements });
    }
    const creator = createCreator({ pages: pages, calculatedValues: [{ name: "cv", expression: "1" }] });
    settings.expressionAssistant.maxVariables = 50;
    const context = contextFor(creator, [questionSite(creator, "q395")], "{q1} = 1 and {q200} = 2");
    const list = names(context);
    expect(context.truncated.variables).toBe(true);
    // the cap counts the referenced questions too; they are kept even beyond it
    expect(list.length).toBe(50);
    expect(list).toContain("q1");
    expect(list).toContain("q200");
    for (let i = 361; i <= 400; i++) {
      if (i !== 395) expect(list, "q" + i).toContain("q" + i);
    }
    expect(list).toContain("cv");
  });
  test("examples: the same property first, capped, never the target itself", () => {
    settings.expressionAssistant.maxExamples = 2;
    const creator = createCreator({
      elements: [
        { type: "text", name: "q1", enableIf: "{q2} = 1" },
        { type: "text", name: "q2", visibleIf: "{q1} = 1" },
        { type: "text", name: "q3", visibleIf: "{q1} = 2" },
        { type: "text", name: "q4", visibleIf: "{q1} = 3" },
      ],
    });
    const context = contextFor(creator, [questionSite(creator, "q2")]);
    expect(context.examples).toEqual([
      { path: "pages[0].elements[2]", propertyName: "visibleIf", expression: "{q1} = 2" },
      { path: "pages[0].elements[3]", propertyName: "visibleIf", expression: "{q1} = 3" },
    ]);
    expect(context.truncated.examples).toBe(true);
  });
  test("the system prompt holds the guide, the context and the rules, and is deterministic", () => {
    const json = {
      elements: [{ type: "radiogroup", name: "fruit", choices: ["apple", "banana"] }, { type: "text", name: "q2", visibleIf: "{fruit} = 'apple'" }],
    };
    const other = createCreator(json);
    const first = buildExpressionContext(other, [questionSite(other, "q2")], "{fruit} = 'apple'").systemPrompt;
    const creator = createCreator(json);
    const res = buildExpressionContext(creator, [questionSite(creator, "q2")], "{fruit} = 'apple'");
    expect(buildExpressionContext(creator, [questionSite(creator, "q2")], "{fruit} = 'apple'").systemPrompt).toBe(res.systemPrompt);
    expect(res.systemPrompt).toBe(first);
    expect(res.systemPrompt.indexOf("SurveyJS expression syntax (guide version " + res.context.guideVersion + ")")).toBeGreaterThan(-1);
    expect(res.systemPrompt.indexOf(JSON.stringify(res.context, null, 2))).toBeGreaterThan(-1);
    expect(res.systemPrompt.indexOf("{\"expression\": \"...\", \"explanation\": \"...\"}")).toBeGreaterThan(-1);
    expect(res.systemPrompt.indexOf("must evaluate to true or false")).toBeGreaterThan(-1);
  });
  test("the system prompt names the language of the explanation: the Creator UI locale", () => {
    const creator = createCreator({ elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] });
    const res = buildExpressionContext(creator, [questionSite(creator, "q2")], "");
    expect(res.systemPrompt.indexOf("Write the explanation in English (locale code \"en\")")).toBeGreaterThan(-1);
    expect(res.systemPrompt.indexOf("the language the author wrote in")).toBe(-1);
    // a locale survey-core has no name for is named by its code
    res.context.locales.creator = "zz";
    expect(buildExpressionSystemPrompt(res.context).indexOf("Write the explanation in the language with locale code \"zz\"")).toBeGreaterThan(-1);
  });
});

describe("Matrices and dynamic panels in the AI context (ai-expressions)", () => {
  const orderJson = {
    elements: [
      { type: "dropdown", name: "country", choices: ["us", "de"] },
      {
        type: "matrixdynamic", name: "items", title: "Order items", rowCount: 1, cellType: "dropdown", choices: ["s", "m", "l"],
        columns: [
          { name: "product", cellType: "dropdown", choices: ["pen", "book"] },
          { name: "quantity", cellType: "text", inputType: "number" },
          { name: "giftWrap", cellType: "boolean" },
          { name: "size" },
        ],
      },
      { type: "paneldynamic", name: "kids", templateElements: [{ type: "text", name: "kidAge", inputType: "number" }] },
      { type: "expression", name: "total" },
      { type: "text", name: "note" },
    ],
  };
  const fixedJson = {
    elements: [
      {
        type: "matrixdropdown", name: "budget", rows: ["row1", "row2"],
        columns: [{ name: "quantity", cellType: "text", inputType: "number" }, { name: "kind", cellType: "radiogroup", choices: ["a", "b"] }],
      },
      { type: "expression", name: "total" },
    ],
  };
  function variable(context: IExpressionContext, name: string): any {
    return context.variables.filter(v => v.name === name)[0];
  }
  function totalSite(creator: CreatorTester): IExpressionSite {
    return { obj: creator.survey.getQuestionByName("total"), propertyName: "expression" };
  }

  test("a dynamic matrix: its value next to its row entries; each entry is described by its column", () => {
    const creator = createCreator(orderJson);
    const context = contextFor(creator, [questionSite(creator, "note")]);
    expect(names(context)).toEqual([
      "country",
      // the editor's order: sorted (settings.logic.questionSortOrder), the matrix value before its first entry
      "items", "items[0].giftWrap", "items[0].product", "items[0].quantity", "items[0].size",
      "kids", "kids[0].kidAge",
      "total",
    ]);
    expect(variable(context, "items")).toEqual({
      name: "items", title: "Order items", kind: "question", type: "matrixdynamic", valueType: "array", page: "page1",
      columns: [
        { name: "product", title: "product", cellType: "dropdown" },
        { name: "quantity", title: "quantity", cellType: "text" },
        { name: "giftWrap", title: "giftWrap", cellType: "boolean" },
        { name: "size", title: "size", cellType: "default" },
      ],
    });
    const quantity = variable(context, "items[0].quantity");
    expect(quantity.kind).toBe("question");
    expect(quantity.type).toBe("text");
    expect(quantity.valueType).toBe("number");
    expect(quantity.page).toBe("page1");
    expect(quantity.columns).toBeUndefined();
    expect(variable(context, "items[0].product").choices).toEqual([{ value: "pen", text: "pen" }, { value: "book", text: "book" }]);
    expect(variable(context, "items[0].giftWrap").type).toBe("boolean");
    expect(variable(context, "items[0].giftWrap").valueType).toBe("boolean");
    // cellType "default": the matrix's cell type, and the matrix's choices for a column with none
    expect(variable(context, "items[0].size").type).toBe("dropdown");
    expect(variable(context, "items[0].size").choices.map(c => c.value)).toEqual(["s", "m", "l"]);
  });
  test("a dynamic panel: its value is listed; its entries stay described by their template question", () => {
    const creator = createCreator(orderJson);
    const context = contextFor(creator, [questionSite(creator, "note")]);
    expect(variable(context, "kids")).toEqual({
      name: "kids", kind: "question", type: "paneldynamic", valueType: "array", page: "page1",
      columns: [{ name: "kidAge", title: "kidAge", cellType: "text" }],
    });
    const kidAge = variable(context, "kids[0].kidAge");
    expect(kidAge.type).toBe("text");
    expect(kidAge.valueType).toBe("number");
  });
  test("a matrix with fixed rows: an object keyed by row, entries described by their column", () => {
    const creator = createCreator(fixedJson);
    const context = contextFor(creator, [totalSite(creator)]);
    expect(names(context)).toEqual(["budget", "budget.row1.kind", "budget.row1.quantity", "budget.row2.kind", "budget.row2.quantity"]);
    expect(variable(context, "budget")).toEqual({
      name: "budget", kind: "question", type: "matrixdropdown", valueType: "object", page: "page1",
      rows: [{ value: "row1", text: "row1" }, { value: "row2", text: "row2" }],
      columns: [{ name: "quantity", title: "quantity", cellType: "text" }, { name: "kind", title: "kind", cellType: "radiogroup" }],
    });
    const quantity = variable(context, "budget.row1.quantity");
    expect(quantity.type).toBe("text");
    expect(quantity.valueType).toBe("number");
    expect(quantity.rows).toBeUndefined();
    expect(variable(context, "budget.row2.kind").choices.map(c => c.value)).toEqual(["a", "b"]);
  });
  test("the row prefix entries of a column are described by their column too", () => {
    const creator = createCreator(orderJson);
    const matrix = <QuestionMatrixDynamicModel>creator.survey.getQuestionByName("items");
    const context = contextFor(creator, [{ obj: matrix.columns[0], propertyName: "visibleIf" }]);
    const rowQuantity = variable(context, "row.quantity");
    expect(rowQuantity.type).toBe("text");
    expect(rowQuantity.valueType).toBe("number");
    expect(names(context)).toContain("items");
  });
  test("a host that hides every entry of a matrix hides its value too", () => {
    const creator = createCreator(orderJson);
    creator.onConditionGetQuestionList.add((_, options) => {
      options.list = options.list.filter(item => item.name.indexOf("items[") !== 0 && item.name !== "kids[0].kidAge");
    });
    const list = names(contextFor(creator, [questionSite(creator, "note")]));
    expect(list).not.toContain("items");
    expect(list).not.toContain("kids");
    const partial = createCreator(orderJson);
    partial.onConditionGetQuestionList.add((_, options) => {
      options.list = options.list.filter(item => item.name !== "items[0].product");
    });
    expect(names(contextFor(partial, [questionSite(partial, "note")]))).toContain("items");
  });
  test("a complex question the condition editor lists itself is not listed twice", () => {
    const saved = settings.logic.includeComplexQuestions;
    settings.logic.includeComplexQuestions = true;
    try {
      const creator = createCreator(orderJson);
      const list = names(contextFor(creator, [questionSite(creator, "note")]));
      expect(list.filter(name => name === "items")).toHaveLength(1);
      expect(list.filter(name => name === "kids")).toHaveLength(1);
    } finally {
      settings.logic.includeComplexQuestions = saved;
    }
  });
  test("a matrix value the expression reads survives the cut", () => {
    const caps = { ...settings.expressionAssistant };
    try {
      settings.expressionAssistant.maxVariables = 1;
      const creator = createCreator(orderJson);
      const context = contextFor(creator, [totalSite(creator)], "sumInArray({items}, 'quantity')");
      expect(names(context)).toContain("items");
      expect(context.truncated.variables).toBe(true);
    } finally {
      Object.assign(settings.expressionAssistant, caps);
    }
  });
  test("the check accepts sumInArray over a dynamic and a fixed-row matrix, and the runtime sums both", () => {
    const order = createCreator(orderJson);
    expect(checkExpression(order, "sumInArray({items}, 'quantity')", [totalSite(order)]).findings).toEqual([]);
    expect(checkExpression(order, "sumInArray({kids}, 'kidAge') > 10", [questionSite(order, "note")]).findings).toEqual([]);
    const fixed = createCreator(fixedJson);
    expect(checkExpression(fixed, "sumInArray({budget}, 'quantity')", [totalSite(fixed)]).findings).toEqual([]);

    const orderSurvey = new SurveyModel({ elements: [orderJson.elements[1], { type: "expression", name: "total", expression: "sumInArray({items}, 'quantity')" }] });
    orderSurvey.data = { items: [{ quantity: 2 }, { quantity: 5 }] };
    expect(orderSurvey.getValue("total")).toBe(7);
    const fixedSurvey = new SurveyModel({ elements: [fixedJson.elements[0], { type: "expression", name: "total", expression: "sumInArray({budget}, 'quantity')" }] });
    fixedSurvey.data = { budget: { row1: { quantity: 3 }, row2: { quantity: 4 } } };
    expect(fixedSurvey.getValue("total")).toBe(7);
  });
});

describe("The target's title in the AI context (ai-expressions)", () => {
  test("a title that differs from the name is passed; a name-only object has none", () => {
    const creator = createCreator({
      pages: [{
        name: "p1", title: "Your order",
        elements: [
          { type: "text", name: "discount", title: "Your discount (%)", inputType: "number" },
          { type: "text", name: "plain" },
          { type: "panel", name: "pnl", title: "Delivery", elements: [{ type: "text", name: "q3" }] },
          { type: "matrixdynamic", name: "m", columns: [{ name: "col1", title: "Column one" }, { name: "col2" }] },
        ],
      }],
      calculatedValues: [{ name: "cv", expression: "1" }],
    });
    const survey = creator.survey;
    const target = (obj: any, propertyName: string) => contextFor(creator, [{ obj: obj, propertyName: propertyName }]).target.objects[0];
    expect(target(survey.getQuestionByName("discount"), "defaultValueExpression")).toEqual({
      type: "text", name: "discount", title: "Your discount (%)", path: "pages[0].elements[0]", propertyName: "defaultValueExpression",
    });
    expect(target(survey.getQuestionByName("plain"), "visibleIf").title).toBeUndefined();
    expect(target(survey.getPanelByName("pnl"), "visibleIf").title).toBe("Delivery");
    expect(target(survey.pages[0], "visibleIf").title).toBe("Your order");
    const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("m");
    expect(target(matrix.columns[0], "visibleIf").title).toBe("Column one");
    expect(target(matrix.columns[1], "visibleIf").title).toBeUndefined();
    expect(target(survey.calculatedValues[0], "expression").title).toBeUndefined();
  });
});
