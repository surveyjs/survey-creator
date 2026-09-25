// The JSON screen: the bench the suite document is repaired on. It is deliberately humble - a text
// surface, the validator's issue list and a reveal - so what is worth pinning is that its issues are
// the runner's own, that its offsets land on the node they name, and that a format keeps the comments
// a hand-written suite carries.
import { afterEach, describe, expect, it } from "vitest";
import { validateSuite } from "../../src/tester/core/validate";
import { SurveyTesterModel } from "../../src/tester/model/testerModel";
import { formatSuite, TesterHostStub } from "./testerHostStub";

const surveyJson = { pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }] }] };

const suite = {
  name: "suite",
  tests: [
    { name: "one", steps: [{ set: { q1: "a" } }] },
    { name: "two", steps: [{ set: { q1: "b" } }] },
  ],
};

let open: Array<SurveyTesterModel> = [];
function build(text: string): { model: SurveyTesterModel, host: TesterHostStub } {
  const host = new TesterHostStub(surveyJson, text);
  const model = new SurveyTesterModel(host);
  open.push(model);
  return { model, host };
}
afterEach(() => {
  open.forEach(model => model.dispose());
  open = [];
});

describe("the issue list", () => {
  // The same validator and the same offsets that block a run: what is pointed at here is exactly what
  // stops the runner, by construction, because both read core/validate.ts.
  it("is core/validate's own answer, row for row", () => {
    const broken = {
      name: "suite",
      tests: [
        { name: "no steps at all" },
        { name: "one", steps: [{ set: { q1: "a" } }] },
      ],
    };
    const { model } = build(formatSuite(broken));
    const expected = validateSuite(broken);
    expect(expected.length).toBeGreaterThan(0);
    expect(model.json.issues.map(row => row.code)).toEqual(expected.map(issue => issue.code));
    expect(model.json.issues.map(row => row.message)).toEqual(expected.map(issue => issue.message));
    expect(model.json.issues.map(row => row.path)).toEqual(expected.map(issue => issue.path));
  });

  // A row is clickable when its path resolves to a node, and pressing it reveals that node - the same
  // journey the "in the case" link of a runner issue line makes.
  it("reveals the node a row names", () => {
    const broken = {
      name: "suite",
      tests: [
        { name: "one", steps: [{ set: { q1: "a" } }] },
        { name: "no steps at all" },
      ],
    };
    const text = formatSuite(broken);
    const { model } = build(text);
    const row = model.json.issues.find(one => one.path === "tests[1]");
    expect(row, "no issue was pathed into the second test").toBeTruthy();
    // The offset is the start of that node in the text, which is what turns an issue into a marker.
    expect((row as any).offset).toBe(text.indexOf("{\n      \"name\": \"no steps at all\""));
    const before = model.json.revealNonce;
    model.json.revealIssue(row as any);
    expect(model.json.revealNonce).toBe(before + 1);
    expect(model.json.revealOffset).toBe((row as any).offset);
  });

  // The rows are reassigned only when they differ, because update() runs on every document change and a
  // fresh array every time would be a property write every time. So "differ" has to mean every field a
  // row carries: the suggestion is the validator's closest-name hint, it moves independently of the
  // message it sits beside, and a row held back by an equality check that ignored it would go on
  // offering a name the document no longer holds.
  //
  // Pushed in directly rather than provoked through the validator: what is under test is the
  // reconciliation, and a suite contrived to move a suggestion while leaving the code, the message, the
  // path and the byte offset alone would be testing the validator instead.
  it("notices a changed suggestion, with everything else about the row the same", () => {
    const { model } = build(formatSuite(suite));
    const issue = (suggestion: string): any => ({
      severity: "error", code: "unknownStart", message: "The start \"declinde\" is not declared.",
      path: "tests[0]", suggestion: suggestion,
    });
    model.json.update({ text: model.json.text, issues: [issue("declined")] });
    expect(model.json.issues[0].suggestion).toBe("declined");

    model.json.update({ text: model.json.text, issues: [issue("declining")] });
    expect(model.json.issues[0].suggestion, "the row kept the suggestion it was built with")
      .toBe("declining");

    // And an update that really did change nothing still assigns nothing.
    const held = model.json.issues;
    model.json.update({ text: model.json.text, issues: [issue("declining")] });
    expect(model.json.issues).toBe(held);
  });

  // A parse error never disables the screen: the list shows it and the text stays editable.
  it("stays open and editable on a document that does not parse", () => {
    const { model } = build("{ \"tests\": [ ");
    model.openJson(undefined);
    expect(model.screen).toBe("json");
    expect(model.json.parseError.indexOf("The document does not parse:")).toBe(0);
    expect(model.json.text).toBe("{ \"tests\": [ ");
    expect(model.canRun).toBe(false);
  });
});

describe("the reveal", () => {
  it("resolves tests[i] on entry, once, and not again on a re-parse", () => {
    const { model } = build(formatSuite(suite));
    model.openJson("two");
    expect(model.json.revealNonce).toBe(1);
    const offset = model.json.revealOffset;
    expect(model.json.text.substring(offset).indexOf("\"name\": \"two\"")).toBeGreaterThan(0);
    // The caret is the author's from now on: a document that re-parses must not drag it back mid-edit.
    model.updateFromHost();
    model.updateFromHost();
    expect(model.json.revealNonce).toBe(1);
  });

  it("skips the reveal for a name the document no longer holds", () => {
    const { model } = build(formatSuite(suite));
    model.openJson("gone");
    expect(model.screen).toBe("json");
    expect(model.json.revealNonce).toBe(0);
    // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
    expect(model.json.headerText).toBe("gone · not in the suite as it stands");
  });
});

describe("the verbs", () => {
  // Format goes through jsonc-parser, so a hand-written suite keeps its comments. JSON.parse plus
  // JSON.stringify would have thrown them away - and would have refused the document rather than
  // tidying it.
  it("reformats the whole document and keeps the comments", () => {
    const commented = "{\n// the suite this project ships\n\"name\":\"suite\",\n" +
      "     \"tests\":[{\"name\":\"one\", /* the only one */ \"steps\":[]}]\n}";
    const { model, host } = build(commented);
    model.json.format();
    expect(host.writes.length).toBe(1);
    expect(model.json.text.indexOf("// the suite this project ships")).toBeGreaterThan(0);
    expect(model.json.text.indexOf("/* the only one */")).toBeGreaterThan(0);
    // And it is a reformat: the ragged indentation is gone.
    expect(model.json.text.indexOf("     \"tests\"")).toBe(-1);
    expect(model.json.text.indexOf("  \"tests\"")).toBeGreaterThan(0);
  });

  it("sends every edit to the host exactly once, and nothing when nothing changed", () => {
    const text = formatSuite(suite);
    const { model, host } = build(text);
    model.json.setText(text.replace("\"one\"", "\"first\""));
    expect(host.writes.length).toBe(1);
    expect(JSON.parse(host.text).tests[0].name).toBe("first");
    // The one code path: the widget's own edit came back through updateFromHost, so the runner's rows
    // already know about it.
    expect(model.runner.rowModelList.map(row => row.name)).toEqual(["first", "two"]);

    model.json.setText(host.text);
    expect(host.writes.length).toBe(1);
  });

  it("copies and goes back through its own action bar", () => {
    const { model } = build(formatSuite(suite));
    model.openJson("one");
    expect(model.json.head.actions.map(action => action.id)).toEqual(["back", "format", "copy"]);
    (model.json.head.getActionById("back") as any).action();
    expect(model.screen).toBe("runner");
  });
});
