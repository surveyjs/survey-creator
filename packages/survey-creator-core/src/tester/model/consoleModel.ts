import { Action, ActionContainer, Base, property } from "survey-core";
import type { ConsoleRow } from "../core/consoleLog";
import { formatRowsAsText, formatTimestamp } from "../core/consoleLog";
import { copyToClipboard, download } from "../core/json";
import { testerText } from "../localization";
import { runnerActionBarCss } from "./runnerCss";

// The console is a transcript of the event stream: one row per event, in the order the runner emitted
// them. Rows are never merged or reordered - the order is the information.
//
// It is the one pane of this application no library model covers: nothing in survey-core renders a
// searchable transcript with expandable event JSON, so the pane itself is markup. That is exactly why
// this model carries everything the pane shows - the search, the filter, the rows behind it and the
// count in the footer are decisions, and none of them belong in a template.

// Not a person-readable string: it is the name the browser saves the file under, and a translated one
// would break whatever reads it back.
const TRANSCRIPT_FILE_NAME = "tester-transcript.json";

export class TesterConsoleModel extends Base {
  // Named "searchValue" and not "searchText": Base already declares searchText(text, founded) as a
  // method, and a property of that name would be a different thing under the same name.
  @property({ defaultValue: "" }) searchValue!: string;
  @property({ defaultValue: false }) failuresOnly!: boolean;
  @property({ defaultValue: true }) autoScroll!: boolean;
  // The one row whose raw event is open.
  @property() expandedRowId!: number | undefined;
  // Bumped when the rows behind the filter change, so a view that watches this model repaints without
  // the row array itself having to be a property of it.
  @property({ defaultValue: 0 }) version!: number;

  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // clear · copy · download - three verbs, drawn by the stock action bar.
  public readonly head: ActionContainer;

  private rowsValue: Array<ConsoleRow> = [];
  private onClear: () => void;
  private transcript: () => string;

  constructor(handlers: { onClear(): void, getTranscript(): string }) {
    super();
    this.onClear = handlers.onClear;
    this.transcript = handlers.getTranscript;
    this.head = new ActionContainer();
    this.head.setCssClasses(runnerActionBarCss, false);
    this.head.setItems([
      new Action({
        id: "clear", title: testerText("console.clear"), css: "svt-console__verb", innerCss: "svt-link",
        enabled: true, action: () => this.clear(),
      }),
      new Action({
        id: "copy", title: testerText("console.copy"), css: "svt-console__verb", innerCss: "svt-link",
        enabled: true, action: () => copyToClipboard(formatRowsAsText(this.rowsValue)),
      }),
      new Action({
        id: "download", title: testerText("console.download"), css: "svt-console__verb",
        innerCss: "svt-link", enabled: true,
        action: () => download(TRANSCRIPT_FILE_NAME, this.getTranscript()),
      }),
    ]);
  }
  public getType(): string { return "svt-console"; }

  public get rows(): Array<ConsoleRow> { return this.rowsValue; }
  public setRows(rows: Array<ConsoleRow>): void {
    if (this.rowsValue === rows) return;
    this.rowsValue = rows;
    this.version += 1;
  }

  // The search and the failures filter, applied here and nowhere else.
  public get visibleRows(): Array<ConsoleRow> {
    const search = this.searchValue;
    const failuresOnly = this.failuresOnly;
    if (!search && !failuresOnly) return this.rowsValue;
    const needle = search.toLowerCase();
    return this.rowsValue.filter(row => {
      if (failuresOnly && row.level !== "fail" && row.level !== "error" && row.level !== "warn") return false;
      if (!needle) return true;
      return row.text.toLowerCase().indexOf(needle) > -1 ||
        (!!row.detail && row.detail.toLowerCase().indexOf(needle) > -1);
    });
  }

  // "48 rows" / "48 rows, 12 shown".
  public get footText(): string {
    return testerText("console.foot", this.rowsValue.length, this.visibleRows.length);
  }
  // "hasNoRows" and not "isEmpty": Base declares isEmpty() as a method.
  public get hasNoRows(): boolean { return !this.visibleRows.length; }

  // The pane's own chrome. The three verbs are Actions and the stock bar draws them; these are the
  // heading, the two inputs and the line a filtered-out transcript leaves behind - and they are
  // here for the same reason every other sentence is on a model: a view that spelled them would be
  // three views spelling them, and none of the three could be translated.
  public get title(): string { return testerText("console.title"); }
  public get searchPlaceholder(): string {
    return testerText("console.searchPlaceholder");
  }
  public get failuresLabel(): string { return testerText("console.failures"); }
  public get emptyText(): string { return testerText("console.empty"); }
  // What the button behind one row's raw event says, which depends on that row and not on the pane.
  public rawToggleText(rowId: number): string {
    return this.isRawOpen(rowId) ? testerText("console.hideRaw") : testerText("console.raw");
  }
  // The class on a transcript line: its level and how deep the event was nested. Both are facts
  // about the row, so they are said here rather than assembled in a template.
  public rowCss(row: ConsoleRow): string {
    return "svt-console-row svt-console-row--" + row.level + " svt-console-row--indent" + row.indent;
  }
  public timeText(row: ConsoleRow): string { return formatTimestamp(row.atMs); }
  // The event behind a row, as the text the pane opens under it. surveyCreated carries a live
  // SurveyModel, which is circular and is not data, so it is named rather than serialised.
  public rawJson(row: ConsoleRow): string { return stringifyEvent(row.event); }

  public clear(): void { this.onClear(); }
  public getTranscript(): string { return this.transcript(); }
  public toggleRaw(rowId: number): void {
    this.expandedRowId = this.expandedRowId === rowId ? undefined : rowId;
  }
  public isRawOpen(rowId: number): boolean { return this.expandedRowId === rowId; }

  public dispose(): void {
    this.head.dispose();
    super.dispose();
  }
}

// surveyCreated carries a live SurveyModel, which is circular and is not data: it is named rather than
// serialised.
export function stringifyEvent(event: any): string {
  try {
    return JSON.stringify(event, (key, value) => key === "survey" ? "[SurveyModel]" : value, 2);
  } catch{
    return String(event);
  }
}
