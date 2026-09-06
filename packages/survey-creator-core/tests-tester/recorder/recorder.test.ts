// The parts of the Recorder that decide what a case says: the target a model object is addressed by, the
// model the tester hands back for a prefix, the expected value a confirming run produces, and the edits
// that go into the Tests JSON buffer. The UI is not tested here; these are the places where being wrong
// produces a case that runs differently from what the person did.
import { describe, expect, it } from "vitest";
import type { ISurveyTestStep } from "survey-core/tester";
import { defaultTestOptions } from "../../src/tester/core/hostOptions";
import {
  deleteStep, deleteTest, insertStep, moveStep, replaceStep, setStepName, setTestName,
} from "../../src/tester/recorder/caseEdit";
import {
  getCheckOffers, getProvisionalExpected, getVisibleChoiceTexts, getVisibleChoiceValues, hasChoiceTextPiping,
  hasPiping, isValidPayload,
} from "../../src/tester/recorder/checks";
import {
  getPageTargetName, getPanelTargetName, getQuestionTargetName, targetContextOf,
} from "../../src/tester/recorder/targetName";
import { getBlockingIssues, silentRun } from "../../src/tester/recorder/silentRun";

const surveyJson = {
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "who" },
        { type: "dropdown", name: "country", choices: ["us", { value: "eu", text: "Europe, {who}" }] },
        { type: "text", name: "greeting", title: "Hello, {who}!" },
        {
          type: "matrixdynamic", name: "items", rowCount: 1,
          columns: [{ name: "quantity", cellType: "text" }],
        },
        {
          type: "matrixdropdown", name: "grid", rows: ["row1"],
          columns: [{ name: "column1", cellType: "text" }],
          detailPanelMode: "underRow", detailElements: [{ type: "text", name: "note" }],
        },
        {
          type: "paneldynamic", name: "contacts", panelCount: 2,
          templateElements: [
            { type: "text", name: "phone" },
            { type: "panel", name: "address", elements: [{ type: "text", name: "city" }] },
          ],
        },
      ],
    },
    { name: "page2", elements: [{ type: "text", name: "note" }] },
  ],
};

const suite = { name: "recorder", tests: [] as Array<any> };
const test = { name: "recording", steps: [] as Array<ISurveyTestStep> };

async function run(steps: Array<ISurveyTestStep>) {
  return await silentRun({
    surveyJson: surveyJson,
    suite: suite,
    test: test,
    steps: steps,
    testOptions: defaultTestOptions,
    attachServerValidation: false,
  });
}

describe("the model the recorder records on", () => {
  it("is built by the tester even when nothing has been recorded yet", async() => {
    const outcome = await run([]);
    // An empty "steps" array is a valid test and the tester runs it: the model is built, the start
    // state is applied and the model is handed over, with no step of this app's own invention in it.
    expect(outcome.survey).toBeTruthy();
    expect(outcome.testResult?.status).toBe("passed");
    expect(outcome.testResult?.steps).toEqual([]);
    expect(getBlockingIssues(outcome)).toEqual([]);
  });

  it("stays usable after the test finished, with its clock still pinned", async() => {
    const outcome = await run([{ set: { who: "Ann" } } as any]);
    const survey: any = outcome.survey;
    expect(survey).toBeTruthy();
    // teardown() detaches the tester's diagnostics and leaves the model alone: this is the dependency the
    // whole session rests on (NOTES-tester-contract.md section 5).
    survey.setValue("note", "typed after the run");
    expect(survey.getQuestionByName("note").value).toBe("typed after the run");
    // renderedHtml is what resolves the locale and the piping, and it is what the "title" check reads.
    expect(survey.getQuestionByName("greeting").locTitle.renderedHtml).toBe("Hello, Ann!");
  });

  it("reports a case error of the prefix as blocking", async() => {
    const outcome = await run([{ set: { nosuchquestion: 1 } } as any]);
    const blocking = getBlockingIssues(outcome);
    expect(blocking.length).toBeGreaterThan(0);
    expect(blocking[0].code).toBe("unknownTarget");
  });
});

describe("the target a model object is addressed by", () => {
  it("names a plain question, a matrix cell, a named row and a panel of a dynamic panel", async() => {
    const outcome = await run([{ addRow: { items: 1 } } as any]);
    const survey: any = outcome.survey;
    const items = survey.getQuestionByName("items");
    const grid = survey.getQuestionByName("grid");
    const contacts = survey.getQuestionByName("contacts");

    expect(getQuestionTargetName(survey.getQuestionByName("who"))).toBe("who");
    expect(getQuestionTargetName(items.visibleRows[1].cells[0].question)).toBe("items[1].quantity");
    // The row context a matrix renderer event carries: the same name, and the pair the tester falls back
    // to when the cell alone cannot say which row it sits in.
    expect(getQuestionTargetName(items.visibleRows[0].cells[0].question,
      targetContextOf(items, items.visibleRows[0]))).toBe("items[0].quantity");
    // A matrix with declared rows is addressed by the row name: there the definition fixes it.
    expect(getQuestionTargetName(grid.visibleRows[0].cells[0].question)).toBe("grid.row1.column1");
    // A question of a detail panel is reached through the row as well. The panel exists once it is open,
    // which is also the only moment the renderer hands one of its cells over.
    grid.visibleRows[0].showHideDetailPanelClick();
    expect(getQuestionTargetName(grid.visibleRows[0].getQuestionByName("note"),
      targetContextOf(grid, grid.visibleRows[0]))).toBe("grid.row1.note");
    expect(getQuestionTargetName(contacts.panels[1].questions[0])).toBe("contacts[1].phone");
  });

  it("names a page and a panel, and refuses what the grammar cannot address", async() => {
    const outcome = await run([]);
    const survey: any = outcome.survey;
    const contacts = survey.getQuestionByName("contacts");

    expect(getPageTargetName(survey.pages[1])).toBe("page2");
    // A panel of a dynamic panel is addressed by the index of the panel, so it does carry a target.
    expect(getPanelTargetName(contacts.panels[1])).toBe("contacts[1]");
    // A static panel inside that panel is the case the grammar has no name for.
    expect(getPanelTargetName(contacts.panels[1].getElementByName("address"))).toBe(undefined);
    // And an object of another survey is not addressed by a name of this one.
    expect(getQuestionTargetName(survey.getQuestionByName("who"), targetContextOf(undefined, undefined)))
      .toBe("who");
  });

  it("produces names the tester itself resolves", async() => {
    // The round trip is the real assertion: a name this app derives has to be one the tester's own
    // resolution accepts, or a recorded step ends the case with unknownTarget.
    const outcome = await run([
      { set: { "items[0].quantity": "2" } },
      { set: { "grid.row1.column1": "x" } },
      { set: { "contacts[1].phone": "555" } },
      { expect: { "items[0].quantity": { value: "2" }, "contacts[1].phone": { value: "555" } } },
    ] as Array<ISurveyTestStep>);
    expect(getBlockingIssues(outcome)).toEqual([]);
    expect(outcome.testResult?.status).toBe("passed");
  });
});

describe("the expected value of a recorded check", () => {
  it("comes back as the actual of a confirming run, piping and all", async() => {
    const provisional = getProvisionalExpected("string");
    const outcome = await run([
      { set: { who: "Ann" } },
      { expect: { greeting: { title: provisional } } },
    ] as Array<ISurveyTestStep>);
    const steps = outcome.testResult?.steps || [];
    const checks = steps[steps.length - 1].checks;
    expect(checks.length).toBe(1);
    expect(checks[0].passed).toBe(false);
    // What this app writes into the case is this, and never a title it read off the model itself.
    expect(checks[0].actual).toBe("Hello, Ann!");
  });

  it("is reported per key for the map checks", async() => {
    const outcome = await run([
      { set: { who: "Ann" } },
      { expect: { survey: { values: { who: getProvisionalExpected("string") } } } },
    ] as Array<ISurveyTestStep>);
    const steps = outcome.testResult?.steps || [];
    const checks = steps[steps.length - 1].checks;
    expect(checks.length).toBe(1);
    expect(checks[0].details.key).toBe("who");
    expect(checks[0].actual).toBe("Ann");
  });

  it("holds when it is written back", async() => {
    const outcome = await run([
      { set: { who: "Ann" } },
      { expect: { greeting: { title: "Hello, Ann!" } } },
      { expect: { survey: { values: { who: "Ann" } } } },
    ] as Array<ISurveyTestStep>);
    expect(outcome.testResult?.status).toBe("passed");
  });

  it("refuses a payload the tester would reject", () => {
    expect(isValidPayload("string", undefined)).toBe(false);
    expect(isValidPayload("value", undefined)).toBe(false);
    expect(isValidPayload("value", null)).toBe(true);
    expect(isValidPayload("number", -1)).toBe(true);
    expect(isValidPayload("stringArray", ["a"])).toBe(true);
    expect(isValidPayload("stringArray", [1])).toBe(false);
  });
});

describe("reading a question for the menu", () => {
  it("finds the piping that makes a title worth checking, and the choices as they are now", async() => {
    const outcome = await run([{ set: { who: "Ann" } } as any]);
    const survey: any = outcome.survey;
    expect(hasPiping(survey.getQuestionByName("greeting"), "locTitle")).toBe(true);
    expect(hasPiping(survey.getQuestionByName("who"), "locTitle")).toBe(false);
    expect(getVisibleChoiceValues(survey.getQuestionByName("country"))).toEqual(["us", "eu"]);
    // A choice carries its text in locText, and both halves of the list are checkable: the values
    // through "choices", the rendered texts through "choiceTexts".
    const items = getVisibleChoiceTexts(survey.getQuestionByName("country"));
    expect(items.map(item => item.value)).toEqual(["us", "eu"]);
    expect(items.map(item => item.text)).toEqual(["us", "Europe, Ann"]);
    expect(hasChoiceTextPiping(survey.getQuestionByName("country"))).toBe(true);
  });

  it("offers every check the tester registers, and nothing this application invented", async() => {
    const outcome = await run([{ set: { who: "Ann" } } as any]);
    const survey: any = outcome.survey;
    const country = survey.getQuestionByName("country");
    const offers = getCheckOffers("question", "country", country);
    const named = (name: string) => offers.filter(offer => offer.name === name)[0];
    // Both were once rows this application had to fake or refuse; the tester registers them now.
    expect(named("description"), "the description check comes from the registry").toBeTruthy();
    expect(named("description")?.disabled).toBeFalsy();
    expect(named("choiceTexts"), "and so does the one that reads the piped texts").toBeTruthy();
    expect(named("choiceTexts")?.piping, "a piped choice text is offered first").toBe(true);
    expect(named("choices")?.piping).toBeFalsy();
    // A title with no piping in it is offered, just not promoted.
    expect(named("title")?.piping).toBeFalsy();
    expect(offers.some(offer => offer.disabled && !offer.reason), "a disabled row always says why")
      .toBe(false);
  });
});

describe("writing into the Tests JSON buffer", () => {
  const untouched = [
    "    {",
    "      \"name\": \"two\",",
    "      \"description\": \"laid out by hand\",",
    "      \"steps\": [ { \"complete\": { \"survey\": true } } ]",
    "    }",
  ].join("\n");
  const document = [
    "{",
    "  \"name\": \"suite\",",
    "  \"tests\": [",
    "    {",
    "      \"name\": \"one\",",
    "      \"steps\": [",
    "        { \"set\": { \"who\": \"Ann\" } }",
    "      ]",
    "    },",
    untouched,
    "  ]",
    "}",
    "",
  ].join("\n");

  // The same suite an author would have written: a comment above the list, a comment between the tests,
  // a description before the steps, and a test laid out on one line. Nothing here is exotic - it is
  // exactly what "the document is the state" costs the moment a rename or a delete reserialises.
  const commented = [
    "{",
    "  // the suite the whole file is about",
    "  \"name\": \"suite\",",
    "  \"tests\": [",
    "    {",
    "      \"name\": \"one\",",
    "      \"description\": \"the first one\",",
    "      \"steps\": [",
    "        { \"set\": { \"who\": \"Ann\" } }",
    "      ]",
    "    },",
    "    /* the middle one is the one that goes */",
    "    { \"name\": \"middle\", \"steps\": [] },",
    untouched,
    "  ]",
    "}",
    "",
  ].join("\n");

  // jsonc-parser keeps the comments; JSON.parse does not read them.
  const stripComments = (text: string): string =>
    text.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");

  it("inserts, replaces, renames, moves and deletes a step", () => {
    let text = insertStep(document, 0, 1, { expect: { who: { value: "Ann" } } } as any);
    expect(JSON.parse(text).tests[0].steps).toEqual([
      { set: { who: "Ann" } },
      { expect: { who: { value: "Ann" } } },
    ]);

    text = replaceStep(text, 0, 0, { set: { who: "Bob" } } as any);
    expect(JSON.parse(text).tests[0].steps[0]).toEqual({ set: { who: "Bob" } });

    text = setStepName(text, 0, 0, "answers who");
    expect(JSON.parse(text).tests[0].steps[0].name).toBe("answers who");

    const steps = JSON.parse(text).tests[0].steps;
    text = moveStep(text, 0, 1, 0, steps[1]);
    expect(JSON.parse(text).tests[0].steps[0]).toEqual({ expect: { who: { value: "Ann" } } });

    text = deleteStep(text, 0, 0);
    expect(JSON.parse(text).tests[0].steps.length).toBe(1);
  });

  // A rename and a delete are edits of the same document through the same path, and the thing that has
  // to survive them is the thing an author would lose by reserialising: the comments, the hand-made
  // layout, the key order and every test the edit was not about.
  it("renames a test without touching the document around it", () => {
    const text = setTestName(commented, 0, "renamed");
    const suite = JSON.parse(stripComments(text));
    expect(suite.tests[0].name).toBe("renamed");
    // The step it already held, and its position, are what they were.
    expect(suite.tests[0].steps).toEqual([{ set: { who: "Ann" } }]);
    expect(suite.tests.map((test: any) => test.name)).toEqual(["renamed", "middle", "two"]);
    expect(text.indexOf("// the suite the whole file is about")).toBeGreaterThan(0);
    expect(text.indexOf("/* the middle one is the one that goes */")).toBeGreaterThan(0);
    expect(text.indexOf("{ \"name\": \"middle\", \"steps\": [] }")).toBeGreaterThan(0);
    expect(text.indexOf(untouched)).toBeGreaterThan(0);
    // The key order of the renamed test is the author's, not a serialiser's: only the value moved.
    expect(text.indexOf("\"description\"")).toBeGreaterThan(text.indexOf("\"renamed\""));
  });

  it("deletes a test without touching the document around it", () => {
    const text = deleteTest(commented, 1);
    const suite = JSON.parse(stripComments(text));
    expect(suite.tests.map((test: any) => test.name)).toEqual(["one", "two"]);
    expect(suite.name).toBe("suite");
    expect(text.indexOf("// the suite the whole file is about")).toBeGreaterThan(0);
    expect(text.indexOf(untouched)).toBeGreaterThan(0);
    // The test that went is gone whole - no empty object and no stray comma left in the array.
    expect(text.indexOf("\"middle\"")).toBe(-1);
    expect(JSON.parse(stripComments(text)).tests[0].steps).toEqual([{ set: { who: "Ann" } }]);
    // A comment written above a test is not part of that test's node, so it stays where the author put
    // it. Nothing else can be true without guessing which comment belonged to what.
    expect(text.indexOf("/* the middle one is the one that goes */")).toBeGreaterThan(0);
  });

  it("rewrites only the step array it edits", () => {
    const text = insertStep(document, 0, 1, { complete: { survey: true } } as any);
    expect(JSON.parse(text).tests[0].steps.length).toBe(2);
    // The suite's own keys and every test the recording did not touch are the bytes they were, comments,
    // one-line steps and all. Only the edited container is laid out again.
    expect(text.indexOf("\"name\": \"suite\"")).toBeGreaterThan(0);
    expect(text.indexOf(untouched)).toBeGreaterThan(0);
  });
});
