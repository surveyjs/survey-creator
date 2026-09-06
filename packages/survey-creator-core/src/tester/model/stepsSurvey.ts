import { Base, SurveyModel, property } from "survey-core";
import type { ISurveyTestOptions, ISurveyTestStep } from "survey-core/tester";
import { STEP_GRID_ID_PREFIX, applyElementIdPrefix } from "../core/elementIds";
import { getStepCommandName, getStepTargets } from "../core/stepInfo";
import { testerText } from "../localization";
import { autoStepName } from "../recorder/options";
import type { RecorderOptions } from "../recorder/options";
import { describeStep } from "../recorder/stepText";

// The step list is a survey, and the case is what fills it.
//
// It is the prototype's StepGrid.tsx with React taken out of it: one `matrixdynamic` with expression
// columns, a detail panel under each row, and the two option panels under the list. What React held -
// a `handlers` ref, a `filling` ref and five effects - is a field, a guard object and one update()
// here.
//
// **Why the handlers ref dissolved.** The prototype builds the survey once in a `useMemo`, so every
// action stored on the model closed over the props of the render that built it and went stale within
// one edit; every action on the screen was therefore routed through a ref that was rewritten on each
// render (NOTES-test-tab.md section 6). In this layer the handlers *are* methods of the model that owns
// the survey, and a model does not have renders - so the survey is built over the owner directly and
// the workaround is not ported. That is the reason the model layer owns the survey at all.
//
// Two more renderer lessons of NOTES-test-tab.md are kept where they bit:
//
//   * the matrix carries a real title. `onGetQuestionTitleActions` pushes into the *title bar*, and a
//     question declared `titleLocation: "hidden"` has no title bar - so the action is accepted, never
//     rendered, and nothing anywhere reports it (section 5). The way out of the recorder is such an
//     action, so the question owns its own header and the card around it repeats nothing.
//   * the list is frozen and never made read-only. `readOnly` stops survey-core evaluating a
//     question's conditions, so the expression cells - which are everything on a row that is read
//     rather than typed, and both lines of the panel under it - would lose their values on the next
//     fill (section 7). The decision lives here and on the session as `stepsLocked`; `inert` on the
//     wrapper is what a view does with it.
//
// The list is a view over `tests[i].steps` and holds no step state of its own: every edit made in it
// is written into the document and comes back as a new steps array, which is what the matrix is then
// filled from. The numbers are positions in that array, computed on every fill and never written down.

// What each row of the State column says. "new" is what this session captured; the rest is what the
// last Verify found. A step that was in the case before the session started and has not been run since
// says "saved", because "new" would be a lie and nothing would be worse than an empty cell.
export type TesterRowState = "new" | "ok" | "failed" | "errored" | "saved";

// The row classes the state cell writes onto its own <tr>. Listed, because removing a class needs the
// name of the one that was there before - and keyed by the state's own code rather than by the word it
// prints, so a translated table cannot rename a class.
const ROW_STATES: Array<TesterRowState> = ["new", "ok", "failed", "errored", "saved"];
const STATE_CLASSES = ROW_STATES.map(state => "svt-steps__row--" + state);
const CURSOR_CLASSES = ["svt-steps__row--cursor"];

// The two option panels under the matrix, told apart by the question name: a member of
// ISurveyTestOptions is written into the test, a member of RecorderOptions stays in this widget.
export const TEST_OPTION_NAMES = [
  "locale", "now", "randomSeed", "clearInvisibleValues", "checkErrorsMode", "stopOnFirstFailure",
  "asyncTimeout",
];
// Everything else the test carries besides its name and its steps. These are siblings of "options" and
// not members of it - section 4 of the tester README is exact about why - so they are written at
// tests[i][field] and are told apart from the options by the same rule: the question's name.
export const TEST_FIELD_NAMES = ["description", "start", "variables"];
export const RECORDER_OPTION_NAMES = [
  "coalesceSets", "coalesceIdleMs", "mergeAdjacentSets", "autoCheckAfterCommand",
];
// The members that are numbers. Their inputs hand back what was typed, and a suite with "5000" where
// 5000 belongs is a suite that fails a strict reader.
const NUMBER_OPTION_NAMES = ["randomSeed", "asyncTimeout", "coalesceIdleMs"];
// The test's boolean override. It is three-valued in the document - inherited, true, false - so its
// input is a dropdown over two words with "(inherited)" as the empty choice, never a checkbox: a
// checkbox has two states and would leave no way back to "no override" once it had been pressed.
// The words are what the input holds; the document holds the booleans.
const TEST_BOOLEAN_OPTION_NAMES = ["stopOnFirstFailure"];
const TRUE_TEXT = "true";
const FALSE_TEXT = "false";

// The sentinel a "start" of "the answers the form holds now" is asked for by. It is declared here
// because this panel is what offers it, and re-exported by the session, which is what resolves it: the
// panel cannot write the data itself, since the model that holds it is the session's.
export const TESTER_INLINE_START = "@inline";

// The three fields as the panel reads them. `start` is a name, an object the case inlines, or nothing;
// `variables` is an object or nothing. Neither is a scalar, which is exactly why they are not options.
export interface ITesterTestFields {
  description?: string;
  start?: any;
  variables?: any;
}

// One row of the matrix. Only "name" is written by the person reading it; the four text fields are what
// the step says, and "idx" is the position the row came from - the one thing that survives a drag and
// tells the reorder where the step was taken from. "stateCode" and "atCursor" are the same two facts
// the row's classes are decided by, carried as data rather than read back out of the words a cell
// prints: a translated State column must not rename a class.
export interface ITesterStepRow {
  idx: number;
  numText: string;
  name: string;
  autoName: string;
  actionText: string;
  targetText: string;
  stateText: string;
  stateCode: TesterRowState;
  atCursor: boolean;
}

// Who a press in the list reaches. It is the recording session: everything a row action means - the
// replay behind a moved cursor, the document edit behind a delete, the transition behind the way out -
// belongs to the session and never to the list.
export interface ITesterStepsOwner {
  readonly stepsLocked: boolean;
  readonly cursor: number;
  readonly stepCount: number;
  // Whether there is a JSON screen to be sent to at all. A verb that is not given is not rendered -
  // the same rule the runner's row verbs follow.
  readonly canOpenStepJson: boolean;
  moveStepTo(from: number, to: number): void;
  deleteStep(index: number): void;
  startFrom(index: number): void;
  renameStep(index: number, name: string): void;
  goToRunner(): void;
  // Reveals tests[i].steps[j] in the JSON screen. The step knows its position; which test it is in is
  // the session's business, and the reveal itself is the widget root's.
  openStepJson(index: number): void;
  setTestOption(name: string, value: any): void;
  setTestField(field: string, value: any): void;
  setRecorderOption(name: string, value: any): void;
}

// What the list is filled from. All of it is read out of the document or off the session; none of it is
// kept here.
export interface ITesterStepsState {
  steps: Array<ISurveyTestStep>;
  states: Array<TesterRowState>;
  cursor: number;
  recording: boolean;
  testOptions: ISurveyTestOptions;
  testFields: ITesterTestFields;
  startNames: Array<string>;
  recorderOptions: RecorderOptions;
}

export class TesterStepsModel extends Base {
  // The freeze-while-replaying decision. `inert` is a view concern; this is the fact behind it.
  @property({ defaultValue: false }) locked!: boolean;
  // Whether the cursor stands at the end of the case, which is the one thing about the list as a whole
  // that a stylesheet reads rather than a row.
  @property({ defaultValue: true }) atEnd!: boolean;

  public readonly survey: SurveyModel;

  private owner: ITesterStepsOwner;
  // Raised for the whole of a fill, because everything the model reports while it is being filled is
  // this model's own writing coming back, and acting on it would be a loop.
  private filling = { current: false };
  private filled: Array<ITesterStepRow> = [];

  constructor(owner: ITesterStepsOwner) {
    super();
    this.owner = owner;
    this.survey = createStepsSurvey(owner, this.filling);
  }
  public getType(): string { return "svt-steps"; }

  public get matrix(): any { return this.survey.getQuestionByName("steps"); }

  // Everything the list shows, pushed in on the change that produced it. The rows are compared before
  // they are written: a fill that changes nothing would still rebuild every cell of the matrix.
  public update(state: ITesterStepsState): void {
    this.locked = this.owner.stepsLocked;
    this.atEnd = state.cursor >= state.steps.length;
    const rows = buildStepRows(state.steps, state.states, state.cursor);
    if (!sameRows(this.filled, rows)) {
      this.filled = rows;
      fillMatrix(this.matrix, rows, this.filling);
    }
    const note: any = this.survey.getQuestionByName("cursorNote");
    if (!!note) {
      const html = cursorNoteHtml(state.recording, state.cursor, state.steps.length);
      if (note.html !== html) note.html = html;
    }
    // The starts the suite offers, plus the one this test can inline. Filled rather than declared,
    // because the choices are a fact about the document and the model is built once.
    const start: any = this.survey.getQuestionByName("start");
    if (!!start) {
      start.choices = state.startNames.map(name => ({ value: name, text: name }))
        .concat([{ value: TESTER_INLINE_START, text: testerText("recorder.testPanel.startInline") }] as any);
    }
    fillOptionValues(this.survey, TEST_OPTION_NAMES, state.testOptions, this.filling);
    fillOptionValues(this.survey, RECORDER_OPTION_NAMES, state.recorderOptions, this.filling);
    fillTestFields(this.survey, state.testFields, this.filling);
  }

  public dispose(): void {
    this.survey.dispose();
    super.dispose();
  }
}

// The sentence of the cursor note. The words are the table's; the tag around them carries a class this
// widget owns, and there is nothing in either that would need escaping.
export function cursorNoteHtml(recording: boolean, cursor: number, count: number): string {
  const text = cursor >= count
    ? testerText("recorder.steps.cursorAtEnd")
    : testerText("recorder.steps.cursorInsert", cursor + 1);
  return "<p class=\"svt-steps__cursor\">" +
    (recording ? testerText("recorder.steps.cursorRecording", text) : text) + "</p>";
}

// Putting the case into the matrix. The flag is raised for the whole of it, because everything the
// model reports while it is being filled is this widget's own writing coming back.
export function fillMatrix(matrix: any, rows: Array<ITesterStepRow>,
  filling: { current: boolean }): void {
  filling.current = true;
  try {
    if (!rows.length) {
      matrix.value = undefined;
      matrix.rowCount = 0;
    } else {
      matrix.value = rows.map(row => ({ ...row }));
    }
    // The name a step would have been given if it had none. It belongs to the row rather than to the
    // column, so it is put on the cell question after every fill instead of into the JSON.
    const visible: Array<any> = matrix.visibleRows || [];
    visible.forEach((row, index) => {
      const cell = row.getQuestionByName("name");
      if (!!cell) cell.placeholder = (rows[index] || { autoName: "" }).autoName || "";
    });
  } finally {
    filling.current = false;
  }
}

// Putting option values into their panel. The same rule as the matrix: everything the model reports
// while it is being filled is this widget's own writing coming back.
export function fillOptionValues(survey: SurveyModel, names: Array<string>, values: any,
  filling: { current: boolean }): void {
  filling.current = true;
  try {
    names.forEach(name => {
      const question = survey.getQuestionByName(name);
      if (!question) return;
      const value = toInputValue(name, !!values ? values[name] : undefined);
      if (!sameOptionValue(question.value, value)) question.value = value;
    });
  } finally {
    filling.current = false;
  }
}

// Putting the three non-option fields into their questions. Each one is shown as what it is: a
// description is its text, a start is the name it references or the mark that says it is inlined, and
// variables are the JSON of the object, laid out so it can be read and edited.
export function fillTestFields(survey: SurveyModel, fields: ITesterTestFields,
  filling: { current: boolean }): void {
  filling.current = true;
  try {
    const description: any = survey.getQuestionByName("description");
    if (!!description) description.value = fields.description || undefined;

    const start: any = survey.getQuestionByName("start");
    if (!!start) {
      start.value = typeof fields.start === "string"
        ? fields.start
        : !!fields.start && typeof fields.start === "object" ? TESTER_INLINE_START : undefined;
    }

    const variables: any = survey.getQuestionByName("variables");
    if (!!variables) {
      const text = stringifyObject(fields.variables);
      // Only when it differs as text: reserialising while a person is typing would move their caret.
      if (String(variables.value || "") !== text) variables.value = text || undefined;
    }
  } finally {
    filling.current = false;
  }
}

// What a change in one of the three non-option fields means for the document. Each takes a different
// shape, so each is read differently - and the one that can be typed wrongly says so on its own
// question instead of writing something the next run would choke on.
function writeTestField(question: any, field: string, value: any, owner: ITesterStepsOwner): void {
  if (!!question && typeof question.clearErrors === "function") question.clearErrors();

  if (field === "description") {
    const text = typeof value === "string" ? value.trim() : "";
    owner.setTestField(field, text || undefined);
    return;
  }

  if (field === "start") {
    // TESTER_INLINE_START is not a value: it is an instruction to take the answers the form holds now,
    // and the model that holds them belongs to the session. The session resolves it, exactly as
    // createTest does.
    owner.setTestField(field, !value ? undefined : value);
    return;
  }

  const text = typeof value === "string" ? value.trim() : "";
  if (!text) {
    owner.setTestField(field, undefined);
    return;
  }
  let parsed: any;
  try {
    parsed = JSON.parse(text);
  } catch(error) {
    // Not written: a suite with half an object in it is a suite that fails its next reader, and the
    // person is still typing. The question keeps what was typed and says what is wrong with it.
    if (!!question) {
      question.addError(testerText("recorder.testPanel.notValidJson", describeParseError(error)));
    }
    return;
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    if (!!question) question.addError(testerText("recorder.testPanel.variablesNotMap"));
    return;
  }
  owner.setTestField(field, parsed);
}

function describeParseError(error: any): string {
  return !!error && !!error.message ? String(error.message) : String(error);
}

function stringifyObject(value: any): string {
  if (value === undefined || value === null) return "";
  try {
    return JSON.stringify(value, null, 2);
  } catch{
    return "";
  }
}

// Scalars only - every member of both option sets is one. An empty input and an absent member are the
// same fact, so a fill does not turn one into the other.
function sameOptionValue(a: any, b: any): boolean {
  const emptyA = a === undefined || a === null || a === "";
  const emptyB = b === undefined || b === null || b === "";
  return emptyA || emptyB ? emptyA === emptyB : a === b;
}

// What an option input hands back, made into the member's own type. Empty means "no override", and the
// numeric members are numbers in the format, whatever the input returned.
function normalizeOptionValue(name: string, value: any): any {
  if (value === undefined || value === null || value === "") return undefined;
  if (NUMBER_OPTION_NAMES.indexOf(name) >= 0) {
    const num = Number(value);
    return isNaN(num) ? undefined : num;
  }
  if (TEST_BOOLEAN_OPTION_NAMES.indexOf(name) >= 0) {
    return value === true || value === TRUE_TEXT ? true
      : value === false || value === FALSE_TEXT ? false : undefined;
  }
  return value;
}

// The member's own value, made into what its input holds: the two words of the boolean dropdown, and
// everything else as it is.
function toInputValue(name: string, value: any): any {
  if (TEST_BOOLEAN_OPTION_NAMES.indexOf(name) >= 0) {
    return value === true ? TRUE_TEXT : value === false ? FALSE_TEXT : undefined;
  }
  return value;
}

// The model, built once. Everything that follows is an event on it: the matrix is the whole of the
// view, and the things a person can do to a case are the handlers below - each of them a method of the
// session, called directly, because there are no renders for one to go stale between.
export function createStepsSurvey(owner: ITesterStepsOwner,
  filling: { current: boolean }): SurveyModel {
  const survey = new SurveyModel({
    showNavigationButtons: "none",
    showQuestionNumbers: "off",
    showProgressBar: "off",
    focusFirstQuestionAutomatic: false,
    widthMode: "responsive",
    elements: [{
      type: "matrixdynamic",
      name: "steps",
      // The title is not decoration: a title action renders in the title bar, and the way out of the
      // recorder is one. See the note at the top of this file.
      title: testerText("recorder.steps.title"),
      // The reorder. survey-core does the drag and writes the new order back into the value; what this
      // widget does with it is one moveStep on the case, and the row that comes back is the document's,
      // not the matrix's.
      allowRowReorder: true,
      // The Add Row button of the question bar, doing the one thing adding a row here could mean: the
      // cursor goes to the end, so the next thing recorded becomes the last step. No empty row is ever
      // added - a step is recorded by using the form.
      allowAddRows: true,
      addRowText: testerText("recorder.steps.addRow"),
      addRowButtonLocation: "bottom",
      allowRemoveRows: true,
      removeRowText: testerText("recorder.steps.removeRow"),
      confirmDelete: false,
      rowCount: 0,
      minRowCount: 0,
      hideColumnsIfEmpty: true,
      noRowsText: testerText("recorder.steps.noRows"),
      columns: [
        // 22px is what the runner gives the same number, and a cell width in this theme is the content
        // box - the padding is added to it. Wide enough for the cursor mark and three digits; anything
        // wider is dead space in front of every row, because the number is right-aligned and the mark
        // it made room for is on one row at a time.
        {
          name: "num", title: testerText("recorder.steps.columnNum"), cellType: "expression",
          expression: "{row.numText}", width: "22px", minWidth: "22px",
        },
        {
          name: "name", title: testerText("recorder.steps.columnName"), cellType: "text",
          minWidth: "140px",
        },
        // The longest word this column ever holds is six characters of the 12px mono face - and the
        // width is the content box, so the padding is added to it. The name field takes the width this
        // gives back.
        {
          name: "state", title: testerText("recorder.steps.columnState"), cellType: "expression",
          expression: "{row.stateText}", width: "44px", minWidth: "44px",
        },
      ],
      // What the step does is under the row rather than in it. A line of a case is read by its number,
      // its name and what the last run made of it; the command and the targets are what a person opens
      // a step to check, and holding two columns open for them made every row as wide as its longest
      // one. The chevron that opens them is survey-core's own row action, next to "Start here".
      detailPanelMode: "underRow",
      detailElements: [
        {
          type: "expression", name: "action", title: testerText("recorder.steps.detailAction"),
          titleLocation: "left", expression: "{row.actionText}",
        },
        {
          type: "expression", name: "target", title: testerText("recorder.steps.detailTarget"),
          titleLocation: "left", expression: "{row.targetText}",
        },
      ],
    },
    // Where the next recorded step lands, said once, right under the list it is about. A question of
    // the same survey rather than markup outside it, so it stands between the matrix and the panels.
    { type: "html", name: "cursorNote", html: "" },
    // Everything the test carries besides its name and its steps, under the list of those steps. All
    // of it is written into the test and travels with the suite: the three fields at tests[i][field],
    // and the seven options at tests[i].options, merged over the suite options per key, where empty
    // means "no override". One question per member, in the format's own vocabulary.
    {
      type: "panel",
      name: "testOptions",
      title: testerText("recorder.testPanel.title"),
      description: testerText("recorder.testPanel.description"),
      state: "collapsed",
      elements: [
        // The three that are not options. They are asked for here rather than when the test is
        // created, because a test has nothing to describe and nothing to start from until it has
        // steps.
        {
          type: "text", name: "description", title: testerText("recorder.testPanel.descriptionTitle"),
          placeholder: testerText("recorder.testPanel.descriptionPlaceholder"),
          description: testerText("recorder.testPanel.descriptionNote"),
        },
        {
          type: "dropdown", name: "start", title: testerText("recorder.testPanel.startTitle"),
          placeholder: testerText("recorder.testPanel.startPlaceholder"),
          description: testerText("recorder.testPanel.startNote"),
          choices: [],
        },
        {
          type: "comment", name: "variables", title: testerText("recorder.testPanel.variablesTitle"),
          rows: 2,
          placeholder: testerText("recorder.testPanel.variablesPlaceholder"),
          description: testerText("recorder.testPanel.variablesNote"),
        },
        {
          type: "text", name: "locale", title: testerText("recorder.testPanel.localeTitle"),
          placeholder: testerText("recorder.testPanel.localePlaceholder"),
          description: testerText("recorder.testPanel.localeNote"),
        },
        {
          type: "text", name: "now", title: testerText("recorder.testPanel.nowTitle"),
          placeholder: testerText("recorder.testPanel.nowPlaceholder"),
          description: testerText("recorder.testPanel.nowNote"),
        },
        {
          type: "text", name: "randomSeed", title: testerText("recorder.testPanel.randomSeedTitle"),
          inputType: "number", placeholder: testerText("recorder.testPanel.randomSeedPlaceholder"),
          description: testerText("recorder.testPanel.randomSeedNote"),
        },
        {
          type: "dropdown", name: "clearInvisibleValues",
          title: testerText("recorder.testPanel.clearInvisibleValuesTitle"),
          placeholder: testerText("recorder.testPanel.inherited"),
          choices: ["onComplete", "onHidden", "onHiddenContainer", "none"],
          description: testerText("recorder.testPanel.clearInvisibleValuesNote"),
        },
        {
          type: "dropdown", name: "checkErrorsMode",
          title: testerText("recorder.testPanel.checkErrorsModeTitle"),
          placeholder: testerText("recorder.testPanel.inherited"),
          choices: ["onNextPage", "onValueChanged", "onComplete"],
          description: testerText("recorder.testPanel.checkErrorsModeNote"),
        },
        {
          type: "dropdown", name: "stopOnFirstFailure",
          title: testerText("recorder.testPanel.stopOnFirstFailureTitle"),
          placeholder: testerText("recorder.testPanel.inherited"),
          choices: [
            { value: TRUE_TEXT, text: testerText("recorder.testPanel.booleanTrue") },
            { value: FALSE_TEXT, text: testerText("recorder.testPanel.booleanFalse") },
          ],
          description: testerText("recorder.testPanel.stopOnFirstFailureNote"),
        },
        {
          type: "text", name: "asyncTimeout", title: testerText("recorder.testPanel.asyncTimeoutTitle"),
          inputType: "number", placeholder: testerText("recorder.testPanel.asyncTimeoutPlaceholder"),
          description: testerText("recorder.testPanel.asyncTimeoutNote"),
        },
      ],
    },
    // The recorder's own settings, under the test's. The tester has no notion of a keystroke or an
    // adorner: none of this travels with a suite, which is why the panel says so in its description.
    // The options menu of the session bar offers the three toggles as one press each; both write
    // through the session, so there is one owner of them and two ways to reach it.
    {
      type: "panel",
      name: "recorderOptions",
      title: testerText("recorder.optionsPanel.title"),
      description: testerText("recorder.optionsPanel.description"),
      state: "collapsed",
      elements: [
        {
          type: "boolean", name: "coalesceSets", title: testerText("recorder.option.coalesceSets"),
          displayMode: "checkbox", description: testerText("recorder.option.coalesceSetsNote"),
        },
        {
          type: "text", name: "coalesceIdleMs", title: testerText("recorder.option.coalesceIdleMs"),
          inputType: "number", min: 100, max: 5000,
          description: testerText("recorder.option.coalesceIdleMsNote"),
        },
        {
          type: "boolean", name: "mergeAdjacentSets",
          title: testerText("recorder.option.mergeAdjacentSets"), displayMode: "checkbox",
          description: testerText("recorder.option.mergeAdjacentSetsNote"),
        },
        {
          type: "boolean", name: "autoCheckAfterCommand",
          title: testerText("recorder.option.autoCheckAfterCommand"), displayMode: "checkbox",
          description: testerText("recorder.option.autoCheckAfterCommandNote"),
        },
      ],
    }],
  });

  // A drag lands here: the value is the same rows in a different order, and "idx" says where each one
  // came from. One row moved is the only thing a drag can produce, so the pair it moved between is what
  // is looked for - anything else is this model's own fill and is left alone.
  // The option panels land here too, told apart by the question name: a member of the test's options
  // goes to the document, a member of the recorder's own settings stays in the widget.
  survey.onValueChanged.add((_, options) => {
    if (filling.current) return;
    if (options.name === "steps") {
      const value: Array<any> = Array.isArray(options.value) ? options.value : [];
      const move = findMove(value.map(row => Number((row || {}).idx)));
      if (!move || owner.stepsLocked) return;
      owner.moveStepTo(move.from, move.to);
      return;
    }
    if (owner.stepsLocked) return;
    if (TEST_OPTION_NAMES.indexOf(options.name) >= 0) {
      owner.setTestOption(options.name, normalizeOptionValue(options.name, options.value));
      return;
    }
    if (TEST_FIELD_NAMES.indexOf(options.name) >= 0) {
      writeTestField(options.question, options.name, options.value, owner);
      return;
    }
    if (RECORDER_OPTION_NAMES.indexOf(options.name) >= 0) {
      owner.setRecorderOption(options.name, options.value);
    }
  });

  // The button under the list. The row is never added - the case grows by recording, not by pressing a
  // button - so what the press means is the counterpart of "Start here" on a row: the cursor goes to
  // the end of the case, and the next step recorded is the last one. Pressing it when the cursor is
  // already there declines, as a row's own "Start here" does.
  survey.onMatrixRowAdding.add((_, options) => {
    options.allow = false;
    if (filling.current || owner.stepsLocked) return;
    const end = owner.stepCount;
    if (owner.cursor !== end) owner.startFrom(end);
  });

  // Delete. The row is not taken out of the matrix: the step is taken out of the case, and the matrix
  // is filled again from what the document then holds. Removing it here as well would delete it twice.
  survey.onMatrixRowRemoving.add((_, options) => {
    options.allow = false;
    if (filling.current || owner.stepsLocked) return;
    owner.deleteStep(options.rowIndex);
  });

  survey.onMatrixCellValueChanged.add((_, options) => {
    if (filling.current || options.columnName !== "name") return;
    const index = rowIndexOf(options.question, options.row);
    if (index < 0) return;
    owner.renameStep(index, typeof options.value === "string" ? options.value : "");
  });

  // The way out of the recorder, in the title bar of the list of what was recorded - the natural next
  // press after the last step is the run that watches it. It calls the root model's transition, which
  // flushes the capture, closes the session and lands on the runner with this test selected.
  survey.onGetQuestionTitleActions.add((_, options) => {
    if (options.question.name !== "steps") return;
    options.actions.push({
      id: "go-to-runner",
      title: testerText("recorder.steps.goToRunner"),
      showTitle: true,
      action: () => {
        if (owner.stepsLocked) return;
        owner.goToRunner();
      },
    });
  });

  // At the start of the row, next to the handle it is dragged by: it is about where the next step goes,
  // which is a position in the list and not something done to this step. The row the cursor already
  // stands in front of declines - it is marked as the selected row instead, and pressing it again would
  // replay the same prefix for nothing.
  survey.onGetMatrixRowActions.add((_, options) => {
    options.actions.push({
      id: "start-here",
      title: testerText("recorder.steps.startHere"),
      tooltip: testerText("recorder.steps.startHereTooltip"),
      showTitle: true,
      location: "start",
      css: "svt-steps__start",
      action: () => {
        if (owner.stepsLocked) return;
        const index = rowIndexOf(options.question, options.row);
        if (index >= 0 && index !== owner.cursor) owner.startFrom(index);
      },
    });
    // And the way into the document at the end of the row: the step as the suite holds it, revealed in
    // the JSON screen. It is the one row verb that is about reading rather than about editing, which is
    // why it is at the other end of the line from "Start here".
    if (!owner.canOpenStepJson) return;
    options.actions.push({
      id: "step-json",
      title: testerText("recorder.steps.openJson"),
      tooltip: testerText("recorder.steps.openJsonTooltip"),
      showTitle: true,
      location: "end",
      css: "svt-steps__json",
      action: () => {
        const index = rowIndexOf(options.question, options.row);
        if (index >= 0) owner.openStepJson(index);
      },
    });
  });

  // Two things about a row are read off the row's own data: what the last run made of the step, and
  // whether the cursor stands in front of it. Neither is read out of the words a cell prints - those
  // belong to the string table, and a class named after a translated word is a class no stylesheet
  // holds.
  decorateRow(survey, "state", STATE_CLASSES,
    row => "svt-steps__row--" + (readRow(row).stateCode || "saved"));
  decorateRow(survey, "num", CURSOR_CLASSES,
    row => readRow(row).atCursor === true ? CURSOR_CLASSES[0] : "");

  // And every cell says which column it is in, so the stylesheet can say something about one of them
  // without counting <td>s: the cells before the first column come and go with the row's own buttons.
  markCells(survey);

  // The recorder screen renders this survey beside the model under test, so this is the one survey of
  // the widget that shares a screen with it - see core/elementIds.ts. It is set here rather than in the
  // JSON above because elementIdPrefix is not a serialized property: fromJSON would drop it without a
  // word.
  applyElementIdPrefix(survey, STEP_GRID_ID_PREFIX);

  return survey;
}

// A class on the <tr>, decided by the row's own data. Neither of the two facts it carries rebuilds the
// row - a Verify rewrites every state and moves nothing, and the cursor moves without the case changing
// - so the class cannot be settled when the cell is first rendered. It is written when the cell renders
// and rewritten whenever that cell's value changes; the key makes the subscription idempotent, so a
// cell rendered into a second element replaces its handler instead of accumulating one.
//
// This is the one place the model layer touches an element, and it touches only the one survey-core
// handed it: no document, no window, no measurement. See the acceptance of prompt 05.
function decorateRow(survey: SurveyModel, columnName: string, owned: Array<string>,
  classOf: (row: any) => string): void {
  survey.onMatrixAfterCellRender.add((_, options) => {
    const column: any = options.column;
    const element: any = options.htmlElement;
    if (!column || column.name !== columnName || !element || typeof element.closest !== "function") return;
    const rowNode: HTMLElement | null = element.closest("tr");
    if (!rowNode) return;
    const cell = options.cellQuestion;
    const row = options.row;
    const apply = (): void => {
      owned.forEach(name => rowNode.classList.remove(name));
      const name = classOf(row);
      if (!!name) rowNode.classList.add(name);
    };
    apply();
    cell.registerFunctionOnPropertyValueChanged("value", apply, "svt-steps-" + columnName);
  });
}

// The name of the column, on the cell that stands in it. A <td> carries no such class of its own, and
// the position of a column is not one either: the drag handle, the chevron and the start button all
// render as cells in front of the first one. Written once per cell, when the cell is rendered - a
// column a cell is in is the one fact about it that cannot change.
function markCells(survey: SurveyModel): void {
  survey.onMatrixAfterCellRender.add((_, options) => {
    const column: any = options.column;
    const element: any = options.htmlElement;
    if (!column || !column.name || !element || typeof element.closest !== "function") return;
    const cellNode: HTMLElement | null = element.closest("td");
    if (!cellNode) return;
    cellNode.classList.add("svt-steps__cell--" + column.name);
  });
}

function readRow(row: any): any {
  const value = !!row ? row.value : undefined;
  return !!value && typeof value === "object" ? value : {};
}

function rowIndexOf(question: any, row: any): number {
  const rows: Array<any> = !!question && Array.isArray(question.visibleRows) ? question.visibleRows : [];
  return rows.indexOf(row);
}

export function buildStepRows(steps: Array<ISurveyTestStep>, states: Array<TesterRowState>,
  cursor: number): Array<ITesterStepRow> {
  const mark = testerText("marks.next");
  return steps.map((step, index) => {
    const line = describeStep(step);
    const command = getStepCommandName(step);
    const targets = getStepTargets(step, command);
    const state: TesterRowState = states[index] || "saved";
    const given = (step as any).name;
    const atCursor = cursor === index;
    return {
      idx: index,
      // The cursor is a position, not a step, so it is marked on the step it stands in front of. The
      // mark sits against the number with nothing between them, as it does in the runner's own list.
      numText: (atCursor ? mark : "") + (index + 1),
      name: typeof given === "string" ? given : "",
      autoName: autoStepName(command, targets[0] || testerText("recorder.steps.surveyTarget")),
      actionText: line.action +
        (!!line.detail ? testerText("recorder.steps.actionDetail", line.detail) : ""),
      targetText: line.targets.join(testerText("recorder.steps.targetJoin")),
      stateText: testerText("recorder.steps.state." + state),
      stateCode: state,
      atCursor: atCursor,
    };
  });
}

function sameRows(a: Array<ITesterStepRow>, b: Array<ITesterStepRow>): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    const x = a[i];
    const y = b[i];
    if (x.idx !== y.idx || x.numText !== y.numText || x.name !== y.name || x.autoName !== y.autoName ||
      x.actionText !== y.actionText || x.targetText !== y.targetText ||
      x.stateText !== y.stateText || x.atCursor !== y.atCursor) return false;
  }
  return true;
}

// The one move a drag can have made. The order is the positions the rows came from: the row that moved
// is the one whose removal leaves the rest ascending, and where it now sits is where it was dropped.
// Anything that is not a single move of a full set of rows - a fill, a rename, a length that no longer
// matches - is not a drag and produces nothing.
export function findMove(order: Array<number>): { from: number, to: number } | undefined {
  const count = order.length;
  if (count < 2) return undefined;
  const seen: { [index: number]: boolean } = {};
  let identity = true;
  for (let i = 0; i < count; i++) {
    const value = order[i];
    if (!(value >= 0) || value >= count || seen[value]) return undefined;
    seen[value] = true;
    if (value !== i) identity = false;
  }
  if (identity) return undefined;
  for (let to = 0; to < count; to++) {
    if (order[to] === to) continue;
    let ascending = true;
    let previous = -1;
    for (let i = 0; i < count && ascending; i++) {
      if (i === to) continue;
      if (order[i] < previous) ascending = false;
      previous = order[i];
    }
    if (ascending) return { from: order[to], to: to };
  }
  return undefined;
}
