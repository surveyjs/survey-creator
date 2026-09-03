/* eslint-disable surveyjs/eslint-plugin-i18n/only-english-or-code */
// The whole file is exempted from the ASCII rule: what it pins is the typography of the list itself -
// the cursor mark, the start-here glyph and the separator in a step summary - character for character,
// which is the same reason localization/english.ts carries the exemption (creator-tester-notes.md
// entry 3). Changing any of them here would be changing the behaviour rather than testing it.
// The step list is a survey of one dynamic matrix, and the things a person can do to a case are events
// on that model. What is tested here is the wiring: the matrix is driven the way the renderer drives it
// - a row dragged, the remove button pressed, a name typed, a row action invoked - and what has to come
// out is one call on the session, with the position the row was at.
//
// The prototype routed every one of those through a `handlers` ref, because its survey was built in a
// useMemo and any handler stored on it closed over one render's props. Here the owner is the session
// itself, so the ref is gone and the fake below is what a session looks like from the list's side.
import { afterEach, describe, expect, it } from "vitest";
import type { ISurveyTestStep } from "survey-core/tester";
import {
  buildStepRows, createStepsSurvey, cursorNoteHtml, fillMatrix, fillOptionValues, fillTestFields,
  findMove, TesterStepsModel,
} from "../../src/tester/model/stepsSurvey";
import type { ITesterStepsOwner, TesterRowState } from "../../src/tester/model/stepsSurvey";
import { SurveyTesterModel } from "../../src/tester/model/testerModel";
import { sample as conditional } from "../samples/01-conditional-visibility";
import { formatSuite, TesterHostStub } from "./testerHostStub";

const steps: Array<ISurveyTestStep> = [
  { name: "set-who", set: { who: "Ann" } } as any,
  { name: "expect-greeting", expect: { greeting: { title: "Hello, Ann!" } } } as any,
  { nextPage: { survey: true } } as any,
];
const states: Array<TesterRowState> = ["saved", "failed", "new"];

interface Calls {
  moved: Array<{ from: number, to: number }>;
  openedJson: Array<number>;
  deleted: Array<number>;
  startedFrom: Array<number>;
  renamed: Array<{ index: number, name: string }>;
  testOptions: Array<{ name: string, value: any }>;
  recorderOptions: Array<{ name: string, value: any }>;
  testFields: Array<{ name: string, value: any }>;
  wentToRunner: number;
}

function emptyCalls(): Calls {
  return {
    moved: [], openedJson: [], deleted: [], startedFrom: [], renamed: [], testOptions: [],
    recorderOptions: [], testFields: [], wentToRunner: 0,
  };
}

function build(cursor = steps.length, locked = false): {
  survey: any, matrix: any, calls: Calls, filling: { current: boolean },
} {
  const calls = emptyCalls();
  const owner: ITesterStepsOwner = {
    stepsLocked: locked,
    cursor: cursor,
    stepCount: steps.length,
    canOpenStepJson: true,
    moveStepTo: (from, to) => calls.moved.push({ from: from, to: to }),
    deleteStep: index => calls.deleted.push(index),
    startFrom: index => calls.startedFrom.push(index),
    renameStep: (index, name) => calls.renamed.push({ index: index, name: name }),
    goToRunner: () => { calls.wentToRunner += 1; },
    openStepJson: index => calls.openedJson.push(index),
    setTestOption: (name, value) => calls.testOptions.push({ name: name, value: value }),
    setTestField: (field, value) => calls.testFields.push({ name: field, value: value }),
    setRecorderOption: (name, value) => calls.recorderOptions.push({ name: name, value: value }),
  };
  const filling = { current: false };
  const survey = createStepsSurvey(owner, filling);
  const matrix: any = survey.getQuestionByName("steps");
  fillMatrix(matrix, buildStepRows(steps, states, cursor), filling);
  return { survey: survey, matrix: matrix, calls: calls, filling: filling };
}

function rowActions(matrix: any, rowIndex: number): Array<any> {
  const found: Array<any> = [];
  const rendered: Array<any> = matrix.renderedTable.rows;
  const row = matrix.visibleRows[rowIndex];
  rendered.forEach(renderedRow => {
    if (renderedRow.row !== row) return;
    (renderedRow.cells || []).forEach((cell: any) => {
      if (!cell.isActionsCell) return;
      (cell.item.value.actions || []).forEach((action: any) => found.push(action));
    });
  });
  return found;
}

describe("the step list", () => {
  it("shows one row per step, in the words the grid used", () => {
    const { matrix } = build(1);
    expect(matrix.rowCount).toBe(3);
    const value = matrix.value;
    expect(value.length).toBe(3);
    expect(value[0].name).toBe("set-who");
    expect(value[0].actionText).toBe("Set answer · \"Ann\"");
    expect(value[0].targetText).toBe("who");
    expect(value[0].stateText).toBe("saved");
    expect(value[1].stateText).toBe("failed");
    expect(value[2].stateText).toBe("new");
    // The cursor is a position between steps, so it is marked on the step it stands in front of.
    expect(value[0].numText).toBe("1");
    expect(value[1].numText).toBe("▸2");
    // And the two facts a row's classes are decided by travel as data, not as the words a cell prints:
    // a translated State column must not rename a class.
    expect(value[1].atCursor).toBe(true);
    expect(value[0].atCursor).toBe(false);
    expect(value[1].stateCode).toBe("failed");
    // A step written without a name still shows the one it would have been given.
    expect(value[2].name).toBeUndefined();
    expect(matrix.visibleRows[2].getQuestionByName("name").placeholder).toBe("nextPage-survey");
    // The row is the number, the name and the state; what the step does is under it. Every row has a
    // detail panel to open, and what it holds is read-only by construction - an expression question has
    // nothing to type into.
    expect(matrix.detailPanelMode).toBe("underRow");
    expect(matrix.visibleRows[0].hasPanel).toBe(true);
    expect(matrix.columns.map((column: any) => column.name)).toEqual(["num", "name", "state"]);
    matrix.visibleRows[0].showDetailPanel();
    expect(matrix.visibleRows[0].getQuestionByName("action").getType()).toBe("expression");
    expect(matrix.visibleRows[0].getQuestionByName("action").value).toBe("Set answer · \"Ann\"");
    expect(matrix.visibleRows[0].getQuestionByName("target").value).toBe("who");
    // And every row has the handle the reorder is dragged by.
    const dragged = matrix.renderedTable.rows
      .filter((row: any) => (row.cells || []).some((cell: any) => cell.isDragHandlerCell));
    expect(dragged.length).toBe(3);
  });

  // The way out of the recorder is a title action on the question the way out is about. It needs the
  // question to have a title - a hidden title bar has nothing to render an action into, and nothing
  // anywhere reports that (NOTES-test-tab.md section 5).
  it("offers the way to the Runner in the title bar of the list", () => {
    const { survey, calls } = build();
    const matrix: any = survey.getQuestionByName("steps");
    expect(matrix.title).toBe("Steps");
    expect(matrix.titleLocation).not.toBe("hidden");
    const actions: Array<any> = matrix.getTitleActions();
    const go = actions.filter(action => action.id === "go-to-runner")[0];
    expect(go, "the Steps question has no \"Go to Runner\" title action").toBeTruthy();
    expect(go.title).toBe("Go to Runner");
    expect(go.showTitle).toBe(true);
    go.action();
    expect(calls.wentToRunner).toBe(1);
  });

  it("declines the way out while the list is frozen", () => {
    const { survey, calls } = build(steps.length, true);
    const matrix: any = survey.getQuestionByName("steps");
    matrix.getTitleActions().filter((action: any) => action.id === "go-to-runner")[0].action();
    expect(calls.wentToRunner).toBe(0);
  });

  it("turns a dragged row into one move of the case", () => {
    const { matrix, calls } = build();
    // What survey-core's drag and drop does when a row is dropped.
    matrix.moveRowByIndex(2, 0);
    expect(calls.moved).toEqual([{ from: 2, to: 0 }]);
    // The case is the document's, not the matrix's: nothing else was reported.
    expect(calls.deleted).toEqual([]);
    expect(calls.renamed).toEqual([]);
  });

  it("deletes the step rather than the row", () => {
    const { matrix, calls } = build();
    matrix.removeRowUI(matrix.visibleRows[1]);
    expect(calls.deleted).toEqual([1]);
    // The row is still there. It goes when the case comes back without the step, and not before: a row
    // removed here as well would take the step out twice.
    expect(matrix.rowCount).toBe(3);
  });

  it("moves the cursor from the row it was pressed on", () => {
    const { matrix, calls } = build(1);
    const startOf = (rowIndex: number): any =>
      rowActions(matrix, rowIndex).filter(action => action.id === "start-here")[0];
    const start = startOf(2);
    expect(start, "the row has no \"Start here\" action").toBeTruthy();
    // At the start of the row, next to the handle it is dragged by - and it is the runner's own button:
    // the mark that runs everything above the step, with the sentence about it in the tooltip.
    expect(start.location).toBe("start");
    expect(start.title).toBe("▶");
    expect(start.tooltip).toContain("Start here");
    start.action();
    expect(calls.startedFrom).toEqual([2]);
    // The row the cursor already stands in front of declines: replaying the same prefix would be a
    // press with nothing behind it.
    startOf(1).action();
    expect(calls.startedFrom).toEqual([2]);
  });

  // The row's other verb: the step as the suite holds it, revealed in the JSON screen. A host that has
  // no JSON screen gives no callback, and then the verb is not on the row at all.
  it("opens the step in the document from the row it belongs to", () => {
    const { matrix, calls } = build(0);
    const json = rowActions(matrix, 1).filter(action => action.id === "step-json")[0];
    expect(json, "the row has no way into the document").toBeTruthy();
    expect(json.location).toBe("end");
    json.action();
    expect(calls.openedJson).toEqual([1]);
  });

  // The Add Row button of the question bar, standing under the table. It adds no row: the case grows by
  // recording, and what the press means is the counterpart of "Start here" on a row.
  it("sends the cursor to the end from the button under the list", () => {
    const { matrix, calls } = build(0);
    expect(matrix.addRowText).toBe("Record at the end");
    expect(matrix.getShowToolbar("bottom")).toBe(true);
    matrix.addRowUI();
    expect(calls.startedFrom).toEqual([steps.length]);
    // And no row was added: the matrix is still the case.
    expect(matrix.rowCount).toBe(3);
  });

  it("declines the button when the cursor is already at the end", () => {
    const { matrix, calls } = build(steps.length);
    matrix.addRowUI();
    expect(calls.startedFrom).toEqual([]);
    expect(matrix.rowCount).toBe(3);
  });

  it("renames the step the edited cell belongs to", () => {
    const { matrix, calls } = build();
    matrix.visibleRows[1].getQuestionByName("name").value = "the greeting holds";
    expect(calls.renamed).toEqual([{ index: 1, name: "the greeting holds" }]);
  });

  // Every display cell is an expression cell, in the row and in the panel under it, and a fill hands
  // the matrix a row value that does not hold their keys - they are computed from it. Anything that
  // stops those expressions from running empties the list on the next fill, which is what "start here"
  // does every time - and it is why the list is frozen with `inert` and never made read-only.
  it("keeps the display cells across a fill", () => {
    const { matrix, filling } = build(3);
    matrix.visibleRows[0].showDetailPanel();
    const read = (row: number, column: string): any =>
      matrix.visibleRows[row].getQuestionByName(column).value;
    expect(read(0, "action")).toBe("Set answer · \"Ann\"");
    fillMatrix(matrix, buildStepRows(steps, states, 0), filling);
    expect(read(0, "num")).toBe("▸1");
    expect(read(0, "action")).toBe("Set answer · \"Ann\"");
    expect(read(0, "target")).toBe("who");
    expect(read(1, "state")).toBe("failed");
    expect(read(2, "num")).toBe(3);
  });

  it("reports nothing while it is being filled", () => {
    const { matrix, calls, filling } = build();
    fillMatrix(matrix, buildStepRows(steps.slice(0, 2), states, 0), filling);
    expect(matrix.rowCount).toBe(2);
    expect(calls).toEqual(emptyCalls());
    fillMatrix(matrix, [], filling);
    expect(matrix.rowCount).toBe(0);
    expect(calls.deleted).toEqual([]);
  });

  it("declines every edit while the list is frozen", () => {
    const { survey, matrix, calls } = build(steps.length, true);
    matrix.moveRowByIndex(2, 0);
    matrix.removeRowUI(matrix.visibleRows[1]);
    survey.setValue("now", "2030-01-01T00:00:00");
    expect(calls.moved).toEqual([]);
    expect(calls.deleted).toEqual([]);
    expect(calls.testOptions).toEqual([]);
  });

  // Where the next step lands is said by an html question of the same survey, standing right under the
  // matrix and above the option panels.
  it("says where the next step lands, under the matrix", () => {
    const { survey } = build();
    const note: any = survey.getQuestionByName("cursorNote");
    expect(note, "the cursor note is not a question of the survey").toBeTruthy();
    expect(note.getType()).toBe("html");
    const names: Array<string> = survey.pages[0].elements.map((element: any) => element.name);
    expect(names.indexOf("cursorNote")).toBe(names.indexOf("steps") + 1);
    expect(names.indexOf("cursorNote")).toBeLessThan(names.indexOf("testOptions"));
    // The cursor is a position between steps: at the end it appends, anywhere else it inserts above the
    // marked row, and while recording the note says so.
    expect(cursorNoteHtml(false, 3, 3)).toContain("The next step is added at the end.");
    expect(cursorNoteHtml(true, 1, 3))
      .toContain("Recording. The next step is inserted into position 2, above the step marked ▸.");
  });

  // The two panels under the list, told apart by the question name: a member of ISurveyTestOptions goes
  // to the document, a member of the recorder's own settings stays in the widget - and a fill, as
  // always, reports nothing.
  it("routes an option edit to its owner, in the member's own type", () => {
    const { survey, calls, filling } = build();
    expect(survey.getPanelByName("testOptions").state).toBe("collapsed");
    expect(survey.getPanelByName("recorderOptions").state).toBe("collapsed");

    fillOptionValues(survey, ["now", "randomSeed"], { now: "2024-01-01T00:00:00" }, filling);
    expect(survey.getValue("now")).toBe("2024-01-01T00:00:00");
    expect(calls.testOptions).toEqual([]);

    survey.setValue("now", "2030-06-15T00:00:00");
    expect(calls.testOptions).toEqual([{ name: "now", value: "2030-06-15T00:00:00" }]);
    // A numeric member is a number in the format, whatever the input handed back.
    survey.setValue("randomSeed", "7");
    expect(calls.testOptions[1]).toEqual({ name: "randomSeed", value: 7 });
    // And an emptied input means "no override", not an override of the empty string.
    survey.setValue("locale", "de");
    expect(calls.testOptions[2]).toEqual({ name: "locale", value: "de" });
    survey.setValue("locale", "");
    expect(calls.testOptions[3]).toEqual({ name: "locale", value: undefined });

    survey.setValue("coalesceSets", false);
    expect(calls.recorderOptions).toEqual([{ name: "coalesceSets", value: false }]);
    expect(calls.testOptions.length).toBe(4);

    // The boolean override is three-valued in the document - inherited, true, false - so it is not a
    // checkbox: a checkbox has no way back to "no override" once it has been pressed.
    const stop: any = survey.getQuestionByName("stopOnFirstFailure");
    expect(stop.getType()).toBe("dropdown");
    expect(stop.choices.map((choice: any) => choice.value)).toEqual(["true", "false"]);
    survey.setValue("stopOnFirstFailure", "true");
    expect(calls.testOptions[4]).toEqual({ name: "stopOnFirstFailure", value: true });
    survey.setValue("stopOnFirstFailure", "false");
    expect(calls.testOptions[5]).toEqual({ name: "stopOnFirstFailure", value: false });
    survey.setValue("stopOnFirstFailure", "");
    expect(calls.testOptions[6]).toEqual({ name: "stopOnFirstFailure", value: undefined });
    // And a fill turns the document's boolean back into the word the input holds.
    fillOptionValues(survey, ["stopOnFirstFailure"], { stopOnFirstFailure: false }, filling);
    expect(survey.getValue("stopOnFirstFailure")).toBe("false");
    fillOptionValues(survey, ["stopOnFirstFailure"], {}, filling);
    expect(survey.getValue("stopOnFirstFailure")).toBeUndefined();
    expect(calls.testOptions.length).toBe(7);
  });

  // The three things a test carries that are not options - they are siblings of "options" in the
  // document, not members of it, and section 4 of the tester README is exact about why. They sit in the
  // same panel and are told apart by the same rule: the question's name.
  it("routes the test's own fields to tests[i][field], each in its own shape", () => {
    const { survey, calls, filling } = build();
    const names: Array<string> = survey.getPanelByName("testOptions").elements
      .map((element: any) => element.name);
    expect(names.slice(0, 3), "the three fields are not at the top of the Test options panel")
      .toEqual(["description", "start", "variables"]);

    // A description is its text, and an emptied box takes the field out rather than writing "".
    survey.setValue("description", "  proves the provider question hides  ");
    expect(calls.testFields[0])
      .toEqual({ name: "description", value: "proves the provider question hides" });
    survey.setValue("description", "");
    expect(calls.testFields[1]).toEqual({ name: "description", value: undefined });

    // A start is the name of one of the suite's, or the sentinel that means "the answers on screen
    // now". The sentinel is not resolved here: the model that holds those answers belongs to the
    // session.
    survey.setValue("start", "declined");
    expect(calls.testFields[2]).toEqual({ name: "start", value: "declined" });
    survey.setValue("start", "@inline");
    expect(calls.testFields[3]).toEqual({ name: "start", value: "@inline" });
    survey.setValue("start", "");
    expect(calls.testFields[4]).toEqual({ name: "start", value: undefined });

    // Variables are an object. What parses is written as the object it parses to.
    survey.setValue("variables", "{ \"region\": \"us\" }");
    expect(calls.testFields[5]).toEqual({ name: "variables", value: { region: "us" } });

    // What does not parse is not written at all: a suite with half an object in it fails its next
    // reader, and the person is still typing. The question keeps the text and says what is wrong.
    const variables: any = survey.getQuestionByName("variables");
    survey.setValue("variables", "{ \"region\": ");
    expect(calls.testFields.length, "a half-typed object was written into the suite").toBe(6);
    expect(variables.errors.length).toBe(1);
    expect(variables.errors[0].getText()).toContain("Not valid JSON");

    // Nor is an array, which parses but is not a name-to-value map.
    survey.setValue("variables", "[1, 2]");
    expect(calls.testFields.length).toBe(6);
    expect(variables.errors[0].getText()).toContain("JSON object");

    // An emptied box takes the field out, and clears what was said about it.
    survey.setValue("variables", "");
    expect(calls.testFields[6]).toEqual({ name: "variables", value: undefined });
    expect(variables.errors.length).toBe(0);

    // A fill reports nothing, here as everywhere: it is this model's own writing coming back.
    fillTestFields(survey, { description: "read back", start: { data: {} }, variables: { a: 1 } },
      filling);
    expect(calls.testFields.length).toBe(7);
    expect(survey.getValue("description")).toBe("read back");
    // An inlined start has no name to show, so it reads as the sentinel that produced it.
    expect(survey.getValue("start")).toBe("@inline");
    expect(survey.getValue("variables")).toBe("{\n  \"a\": 1\n}");
  });

  it("finds the one move a drag can have made", () => {
    expect(findMove([0, 1, 2])).toBeUndefined();
    expect(findMove([2, 0, 1])).toEqual({ from: 2, to: 0 });
    expect(findMove([1, 2, 0])).toEqual({ from: 0, to: 2 });
    expect(findMove([0, 2, 1])).toEqual({ from: 2, to: 1 });
    expect(findMove([1, 0])).toEqual({ from: 1, to: 0 });
    // Not a reorder of the same rows: a fill, a row gone, a value that is not a permutation.
    expect(findMove([0, 1])).toBeUndefined();
    expect(findMove([0])).toBeUndefined();
    expect(findMove([0, 0, 1])).toBeUndefined();
    expect(findMove([0, 1, 5])).toBeUndefined();
  });

  // The model around the survey: what a fill is asked for, and what it decides on its own.
  it("freezes with the session and says where the cursor stands", () => {
    let locked = false;
    const owner: ITesterStepsOwner = {
      get stepsLocked(): boolean { return locked; },
      cursor: 1,
      stepCount: steps.length,
      canOpenStepJson: false,
      moveStepTo: () => undefined,
      deleteStep: () => undefined,
      startFrom: () => undefined,
      renameStep: () => undefined,
      goToRunner: () => undefined,
      openStepJson: () => undefined,
      setTestOption: () => undefined,
      setTestField: () => undefined,
      setRecorderOption: () => undefined,
    };
    const model = new TesterStepsModel(owner);
    try {
      const state = {
        steps: steps, states: states, cursor: 1, recording: true,
        testOptions: {}, testFields: {}, startNames: ["declined"],
        recorderOptions: {
          coalesceSets: true, coalesceIdleMs: 700, mergeAdjacentSets: false,
          autoCheckAfterCommand: false,
        },
      };
      model.update(state);
      expect(model.locked).toBe(false);
      expect(model.atEnd).toBe(false);
      expect(model.matrix.rowCount).toBe(3);
      // The suite's starts, plus the one this test can inline.
      const start: any = model.survey.getQuestionByName("start");
      expect(start.choices.map((choice: any) => choice.value)).toEqual(["declined", "@inline"]);

      locked = true;
      model.update({ ...state, cursor: steps.length });
      expect(model.locked).toBe(true);
      expect(model.atEnd).toBe(true);
    } finally {
      model.dispose();
    }
  });
});

// The two things about the list that only a real session can show: the marker follows the cursor the
// session replayed to, and an edit made outside the widget rebuilds the rows without moving the cursor
// off a case that still matches.
describe("the step list over a real session", () => {
  let open: Array<SurveyTesterModel> = [];
  afterEach(() => {
    open.forEach(model => model.dispose());
    open = [];
  });

  function suiteText(): string {
    return formatSuite({
      name: "recorded",
      options: { clearInvisibleValues: "onComplete" },
      tests: [{
        name: "declines",
        steps: [
          { name: "set-hasInsurance", set: { hasInsurance: "no" } },
          { name: "expect-insuranceProvider", expect: { insuranceProvider: { visible: false } } },
          { name: "complete-survey", complete: { survey: true } },
        ],
      }],
    });
  }

  function numbers(model: SurveyTesterModel): Array<string> {
    return (model.recorder.steps.matrix.value || []).map((row: any) => String(row.numText));
  }

  it("follows the cursor and rebuilds on an edit made outside it", async() => {
    const host = new TesterHostStub(conditional.surveyJson, suiteText());
    const model = new SurveyTesterModel(host);
    open.push(model);
    await model.openRecorder("declines");
    expect(model.screen).toBe("recorder");

    // Opened at the end of the case: the cursor is a position past the last step, so no row is marked.
    expect(model.recorder.cursor).toBe(3);
    expect(numbers(model)).toEqual(["1", "2", "3"]);
    expect(model.recorder.steps.atEnd).toBe(true);

    // Rewound: the marker is on the step the cursor stands in front of, and nowhere else.
    await model.recorder.setCursor(1);
    expect(numbers(model)).toEqual(["1", "▸2", "3"]);
    expect(model.recorder.steps.atEnd).toBe(false);

    // An edit made outside the session. The step count changed, so the cursor clamps to the end of the
    // case - the rule of PROMPT-recorder.md section 7 - and the rows are rebuilt from the document.
    const edited = JSON.parse(host.text);
    edited.tests[0].steps.push({ name: "expect-survey", expect: { survey: { state: "completed" } } });
    host.setTestsText(formatSuite(edited));
    model.updateFromHost();
    await new Promise<void>(resolve => setTimeout(resolve, 300));
    expect(model.recorder.cursor).toBe(4);
    expect(numbers(model)).toEqual(["1", "2", "3", "4"]);
    // The list never holds step state of its own: what it shows is the document, targets and all.
    const targets = (model.recorder.steps.matrix.value || []).map((row: any) => row.targetText);
    expect(targets).toEqual(["hasInsurance", "insuranceProvider", "survey", "survey"]);
  }, 60000);
});
