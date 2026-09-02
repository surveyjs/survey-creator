import { Base, property } from "survey-core";
import { applyEdits, modify } from "jsonc-parser";
import { getSuiteTests } from "../core/stepInfo";
import { testerText } from "../localization";
import type { ITesterRecorderOptions } from "./testerHost";
import type { ITesterNewTestParams } from "./runnerApi";

// The recorder, as much of it as prompt 03 needs and not one line more.
//
// Prompt 04 replaces this class with the real one - the session as a model instead of a React hook, the
// two-signal capture, the prefix replay, the checks that come from the tester. What is here is the
// surface the widget's state machine talks to, so that the machine can be complete, tested and finished
// before the screen it hands over to exists. Every transition of the machine is real; what happens
// behind open() is a placeholder that says so.
//
// Two things are genuinely implemented rather than stubbed, because the state machine is not testable
// without them:
//
// eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
//   * createTest writes the test. "New test → Create" is the act of starting to record, and a
//     transition onto a test that is not in the document would trip the vanished-test fallback the
//     moment it landed. The write is a modify+applyEdits at "tests[-1]", which is the same mechanism
//     caseEdit.appendTest uses in prompt 04 - that function replaces this one, and the validation
//     below moves into it unchanged.
//   * close() flushes before it detaches, and flush() is counted. The run-start transition is specified
//     as "flush the capture, then close the session", and prompt 03's tests assert that order against
//     this object; prompt 04 makes the flush mean something.

export interface ITesterRecorderHost {
  getTestsText(): string;
  setTestsText(text: string): void;
  getSurveyJson(): any;
}

export class TesterRecorderModel extends Base {
  @property({ defaultValue: false }) isOpen!: boolean;
  @property() testName!: string | undefined;
  @property({ defaultValue: 0 }) cursor!: number;
  @property({ defaultValue: "" }) blockedReason!: string;
  @property({ defaultValue: "" }) notice!: string;

  public options: ITesterRecorderOptions = {};
  // How many times the capture has been asked to settle what a person was half-way through typing.
  // Prompt 04 makes it a real flush; until then it is what the state machine's tests count.
  public flushCount = 0;

  private host: ITesterRecorderHost;

  constructor(host: ITesterRecorderHost) {
    super();
    this.host = host;
  }
  public getType(): string { return "svt-recorder"; }

  // What the screen says while the recorder is a stub. It is a person-readable string like any other,
  // so it lives in the table with the rest.
  public get placeholderText(): string { return testerText("recorder.placeholder"); }

  // A session opens at the end of the case unless it is being restored, and then it opens where it was
  // left. The cursor is an argument rather than something the caller writes afterwards because open()
  // is where it belongs: prompt 04 replays the prefix *to* the cursor, so a cursor set after the open
  // would be a cursor the replay never saw.
  public open(testName: string, cursor?: number): Promise<void> {
    this.testName = testName;
    this.isOpen = true;
    this.notice = "";
    const count = this.getStepCount(testName);
    this.cursor = cursor === undefined ? count : Math.max(0, Math.min(cursor, count));
    return Promise.resolve();
  }

  // Flushes before it detaches: a value that is still settling when the session closes is recorded, not
  // dropped.
  public close(): void {
    if (!this.isOpen) return;
    this.flush();
    this.isOpen = false;
    this.testName = undefined;
    this.cursor = 0;
  }

  public flush(): void { this.flushCount += 1; }

  // Refused before the document is touched, and the refusal is the sentence the form shows. Prompt 04
  // moves this whole body into caseEdit.appendTest plus the recorder's own parsing of the four optional
  // fields; the three refusals below are already its refusals, word for word.
  public createTest(params: ITesterNewTestParams): string | undefined {
    const name = (params.name || "").trim();
    if (!name) return testerText("recorder.nameRequired");
    const text = this.host.getTestsText();
    const suite = parseSuite(text);
    if (!suite || !Array.isArray(suite.tests)) return testerText("recorder.noSuite");
    if (getSuiteTests(suite).some(test => !!test && test.name === name)) {
      return testerText("recorder.nameTaken", name);
    }
    const test: any = { name: name, steps: [] };
    if (!!params.description) test.description = params.description;
    // The options, the variables and the start of ITesterNewTestParams are parsed and validated by the
    // recorder of prompt 04, which owns the shapes they take. A stub that guessed at them would be a
    // second answer to that question, so it takes the name and the description and leaves the rest.
    const edits = modify(text, ["tests", suite.tests.length], test,
      { formattingOptions: { tabSize: 2, insertSpaces: true } });
    this.host.setTestsText(applyEdits(text, edits));
    return undefined;
  }

  // Called from SurveyTesterModel.updateFromHost: the document changed underneath a session. Prompt 04
  // clamps the cursor to what still matches and re-replays; the vanished-test half of the rule lives in
  // the widget root, because that half is a transition and transitions are the root's.
  public reconcile(): void {
    if (!this.isOpen || !this.testName) return;
    const count = this.getStepCount(this.testName);
    if (this.cursor > count)this.cursor = count;
  }

  public getState(): { cursor?: number, options?: ITesterRecorderOptions } {
    return { cursor: this.cursor, options: this.options };
  }
  public setState(state: { cursor?: number, options?: ITesterRecorderOptions } | undefined): void {
    if (!state) return;
    if (typeof state.cursor === "number")this.cursor = state.cursor;
    if (!!state.options)this.options = state.options;
  }

  public dispose(): void {
    this.isOpen = false;
    super.dispose();
  }

  private getStepCount(testName: string): number {
    const test = getSuiteTests(parseSuite(this.host.getTestsText()))
      .find(one => !!one && one.name === testName);
    return !!test && Array.isArray(test.steps) ? test.steps.length : 0;
  }
}

function parseSuite(text: string): any {
  try {
    return JSON.parse(text);
  } catch{
    return undefined;
  }
}
