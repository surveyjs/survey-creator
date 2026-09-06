import { Action, ActionContainer, Base, property, propertyArray } from "survey-core";
import { applyEdits, format } from "jsonc-parser";
import type { ISurveyTestIssue } from "survey-core/tester";
import { copyToClipboard } from "../core/json";
import { getSuiteTests } from "../core/stepInfo";
import { findJsonRange } from "../core/validate";
import { testerText } from "../localization";
import { runnerActionBarCss } from "./runnerCss";

// Screen 2, as a model. The prototype's JsonScreen and TestsJsonEditor reduced to what a view reads:
// a text surface, the validator's issue list, and a reveal.
//
// Deliberately humble, and it was the prototype's own choice - "an editor that also had an opinion
// would be a second answer to the same question". It is the right one here for a second reason: the
// widget must not drag ace or monaco into a bundle that ships from survey-creator-core. A <textarea>
// is a fine bench.
//
// It edits the whole suite document and never an extracted per-test fragment. The text is the source of
// truth, it carries the author's formatting and comments, and a screen that handed back a re-serialised
// sub-object would lose them on every visit. The screen is scoped by what it reveals, not by what it
// holds - which is also why nothing here holds a test: activeTestName is read once, on entry, and let
// go of. Renaming or deleting the very test you arrived from cannot close this screen, and it must not
// be able to: this is where such a disappearance is being typed.
//
// And it is never blocked. A document that does not parse shows its error here and stays editable; the
// other screens carry a "Fix it in the JSON" action that leads to this one.

export interface ITesterJsonIssueRow {
  key: string;
  severity: string;
  code: string;
  message: string;
  suggestion?: string;
  // The node of the case document the issue is about, as the tester writes it ("tests[0].steps[2]").
  path?: string;
  // Where that node starts in the text, when the path resolves to one. Undefined means the row is not
  // clickable - there is nowhere to go.
  offset?: number;
  css: string;
}

export interface ITesterJsonHost {
  setTestsText(text: string): void;
}

export class TesterJsonModel extends Base {
  // Mirrors the host document. Every edit made here goes out through setText, immediately.
  @property({ defaultValue: "" }) text!: string;
  // "Scroll to here", as an offset plus a nonce - because the same offset asked for twice is two
  // requests, and a property that did not change would raise nothing the second time.
  @property({ defaultValue: 0 }) revealOffset!: number;
  @property({ defaultValue: 0 }) revealNonce!: number;
  @property({ defaultValue: "" }) parseError!: string;
  // A snapshot taken on entry: the test's name and step count when the screen was opened from a row.
  // It is not a binding - see the note at the top of this file.
  @property({ defaultValue: "" }) headerText!: string;
  @propertyArray() issues!: Array<ITesterJsonIssueRow>;

  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // Back to tests · Format · Copy. No Download: the widget has no file identity, the host does.
  public readonly head: ActionContainer;

  private host: ITesterJsonHost;
  private onBack: () => void;
  // True while this screen is the one writing, so updateFromHost does not push the text back into the
  // box a person is typing in and move their caret.
  private writing = false;

  constructor(host: ITesterJsonHost, handlers: { onBack(): void }) {
    super();
    this.host = host;
    this.onBack = handlers.onBack;
    this.headerText = testerText("json.headerSuite");
    this.head = new ActionContainer();
    this.head.setCssClasses(runnerActionBarCss, false);
    this.head.setItems([
      new Action({
        id: "back", title: testerText("json.back"), css: "svt-tests__action", innerCss: "svt-button",
        enabled: true, action: () => this.back(),
      }),
      new Action({
        id: "format", title: testerText("json.format"), css: "svt-tests__action", innerCss: "svt-button",
        enabled: true, action: () => this.format(),
      }),
      new Action({
        id: "copy", title: testerText("json.copy"), css: "svt-tests__action", innerCss: "svt-button",
        enabled: true, action: () => this.copy(),
      }),
    ]);
  }
  public getType(): string { return "svt-json"; }

  public get ariaLabel(): string { return testerText("json.ariaLabel"); }
  public get hasIssues(): boolean { return !!this.issues.length || !!this.parseError; }
  public get issueCountText(): string {
    const errors = this.issues.filter(row => row.severity === "error").length;
    return testerText("json.issueCount", errors, this.issues.length - errors);
  }
  // What the validator makes of the document as it stands, in three words and a colour. It is the
  // same verdict the other screens' blocked banner is about, said once here rather than assembled
  // from the issue list by whichever renderer is drawing the toolbar.
  public get badgeText(): string {
    if (!!this.parseError) return testerText("json.badgeNotValid");
    const errors = this.issues.filter(row => row.severity === "error").length;
    return testerText("json.badgeCounts", errors, this.issues.length - errors);
  }
  public get badgeCss(): string {
    if (!!this.parseError) return "svt-badge svt-badge--error";
    const errors = this.issues.filter(row => row.severity === "error").length;
    if (errors > 0) return "svt-badge svt-badge--error";
    return this.issues.length > 0 ? "svt-badge svt-badge--warning" : "svt-badge svt-badge--ok";
  }

  // ---- what the widget root pushes in ---------------------------------------------------------------

  // The document and what the validator made of it. Called from SurveyTesterModel.updateFromHost, on
  // every change of either - including the ones this screen itself made, which is why the text is left
  // alone while this screen is the writer.
  public update(source: { text: string, issues: Array<ISurveyTestIssue>, parseError?: string }): void {
    if (!this.writing && this.text !== source.text)this.text = source.text;
    this.parseError = !source.parseError ? "" : testerText("json.parseError", source.parseError);
    const rows = source.issues.map((issue, at) => this.toRow(issue, String(at)));
    if (!sameRows(this.issues, rows))this.issues = rows;
  }

  // The entry gesture, and the only use this screen makes of the widget's activeTestName: it opens on
  // the test the row was about instead of at the top of the file. Exactly once - the caret is the
  // author's from then on, and a reveal that fired whenever the document re-parsed would drag it back
  // mid-edit.
  public enter(testName: string | undefined, suite: any): void {
    if (!testName) {
      this.headerText = testerText("json.headerSuite");
      return;
    }
    const index = getSuiteTests(suite).findIndex(test => !!test && test.name === testName);
    if (index < 0) {
      this.headerText = testerText("json.headerMissing", testName);
      return;
    }
    const steps = getSuiteTests(suite)[index].steps;
    this.headerText = testerText("json.headerTest", testName,
      Array.isArray(steps) ? steps.length : 0, index);
    this.revealPath("tests[" + index + "]");
  }

  // ---- the verbs -----------------------------------------------------------------------------------

  public setText(next: string): void {
    if (this.text === next) return;
    this.text = next;
    this.writing = true;
    try {
      this.host.setTestsText(next);
    } finally {
      this.writing = false;
    }
  }

  // A whole-document reformat that keeps the comments: jsonc-parser produces the edits and applyEdits
  // makes them, so a suite with a header comment comes back with the header comment. JSON.parse plus
  // JSON.stringify would have thrown both away, and would have refused a document with a trailing comma
  // instead of tidying it.
  public format(): void {
    const edits = format(this.text, undefined, { tabSize: 2, insertSpaces: true });
    if (!edits.length) return;
    this.setText(applyEdits(this.text, edits));
  }

  public copy(): void { copyToClipboard(this.text); }
  public back(): void { this.onBack(); }

  // An issue row is clickable when its path resolves to a node. It is the same validator and the same
  // offsets that block a run: what is pointed at here is exactly what stops the runner, by construction.
  public revealIssue(row: ITesterJsonIssueRow): void {
    if (row.offset === undefined) return;
    this.reveal(row.offset);
  }

  public revealPath(path: string): void {
    const range = findJsonRange(this.text, path);
    if (!range) return;
    this.reveal(range.offset);
  }

  public dispose(): void {
    this.head.dispose();
    super.dispose();
  }

  private reveal(offset: number): void {
    this.revealOffset = offset;
    this.revealNonce += 1;
  }

  private toRow(issue: ISurveyTestIssue, key: string): ITesterJsonIssueRow {
    const range = !issue.path ? undefined : findJsonRange(this.text, issue.path);
    return {
      key: key,
      severity: issue.severity,
      code: issue.code,
      message: issue.message,
      suggestion: issue.suggestion,
      path: issue.path,
      offset: !range ? undefined : range.offset,
      css: "svt-diff svt-diff--" + (issue.severity === "error" ? "error" : "warning"),
    };
  }
}

// Assigned only when the contents differ: update() runs on every document change, and a fresh array
// every time would be a property write every time.
//
// Every field of a row is compared, and a field added to ITesterJsonIssueRow has to be added here too:
// one left out is a change the screen cannot see. "suggestion" is the one that shows why - it is the
// validator's closest-name hint, it moves independently of the message it sits beside, and a row left
// stale by it would go on offering a name the document no longer holds.
function sameRows(current: Array<ITesterJsonIssueRow>, next: Array<ITesterJsonIssueRow>): boolean {
  if (current.length !== next.length) return false;
  return current.every((row, at) => row.code === next[at].code && row.message === next[at].message &&
    row.path === next[at].path && row.offset === next[at].offset &&
    row.severity === next[at].severity && row.suggestion === next[at].suggestion);
}
