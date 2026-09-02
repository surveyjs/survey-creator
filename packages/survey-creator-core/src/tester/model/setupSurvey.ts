import { Base, SurveyModel, property } from "survey-core";
import type { ISurveyTestOptions } from "survey-core/tester";
import { SETUP_SURVEY_ID_PREFIX } from "../core/elementIds";
import type { HostOptions } from "../core/hostOptions";
import { toRunnerOptions } from "../core/hostOptions";

// The Setup tab is a survey, and it is the only one this application owns besides the model under test.
//
// Host options - render the model, highlight the target, autoscroll, delay and its granularity,
// verbosity - are a form: questions with answers, wanting defaults and validation, and nothing about
// them is a command. So is ISurveyTestOptions, which is the serialisable run configuration of the test
// format, one control per member and nothing else. Both are here, as JSON, and what draws them is one
// <Survey> tag - in place of the two hundred and sixty lines of hand-written inputs they replaced.
//
// What is deliberately not here: the samples. A card that says what a suite produces and has a Load
// button is a gallery of verbs, not a form, and turning it into a survey would mean inventing a
// question type for "press this".

// The two option objects, member for member. A question is named for the member it edits, so the
// mapping is these two lists and nothing else - there is no table of "which control writes what".
const TEST_KEYS: Array<keyof ISurveyTestOptions> = [
  "locale", "now", "randomSeed", "clearInvisibleValues", "checkErrorsMode", "stopOnFirstFailure",
  "asyncTimeout",
];
const HOST_KEYS: Array<keyof HostOptions> = [
  "stepDelayMs", "delayGranularity", "pauseOnFailure", "renderSurvey", "highlightTarget",
  "keepLastModel", "verbosity", "autoScrollConsole", "attachServerValidation",
];

// Which members are numbers. A text question hands back what was typed, and "5000" is not 5000 to the
// runner - it would travel into the suite result as a string.
const NUMBER_KEYS = ["randomSeed", "asyncTimeout", "stepDelayMs"];

export const SETUP_SURVEY_JSON = {
  showQuestionNumbers: "off",
  showNavigationButtons: "none",
  showCompletedPage: false,
  widthMode: "responsive",
  elements: [
    {
      type: "panel",
      name: "testOptions",
      title: "Test options",
      description: "This is ISurveyTestOptions — the serialisable run configuration of the test format," + // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
        " one control per member and nothing else. These are the root options: a suite's own options and" +
        " a test's own options merge over them per key, and the runner reports the resolved set on every" +
        " test result. Several samples pin what they need in their own suite, so they run the same" +
        " whatever is set here.",
      elements: [
        {
          type: "text", name: "locale", title: "Locale", placeholder: "(default)",
          description: "Empty means the library default. Sent to the runner only when it is set.",
        },
        {
          type: "text", name: "now", title: "Now", placeholder: "2024-01-01T00:00:00",
          description: "The clock every test reads: today(), currentDate(), currentYear() and age()." +
            " Default 2024-01-01T00:00:00. Explicit dates a survey writes are never touched.",
        },
        {
          type: "text", name: "randomSeed", title: "Random seed", inputType: "number",
          description: "Default 1.",
        },
        {
          type: "dropdown", name: "clearInvisibleValues", title: "Clear invisible values",
          choices: ["onComplete", "onHidden", "onHiddenContainer", "none"],
          allowClear: false,
          description: "Decides whether a hidden answer survives into the result data.",
        },
        {
          type: "dropdown", name: "checkErrorsMode", title: "Check errors mode",
          choices: ["onNextPage", "onValueChanged", "onComplete"],
          allowClear: false,
          description: "When the survey computes its errors.",
        },
        {
          type: "boolean", name: "stopOnFirstFailure", title: "Stop on first failure",
          renderAs: "checkbox", titleLocation: "hidden", label: "Stop on first failure",
          description: "Ends the test at its first failing check. A suite run never stops at one.",
        },
        {
          type: "text", name: "asyncTimeout", title: "Async timeout (ms)", inputType: "number",
          min: 0, step: 100,
          description: "How long a step waits for an asynchronous survey operation — server validation," + // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
            " an async validator or expression, a navigation handler holding its callback. Default 5000," +
            " per operation. Zero waits for nothing.",
        },
      ],
    },
    {
      type: "panel",
      name: "hostOptions",
      title: "Host options",
      startWithNewLine: false,
      description: "These are not part of the test format and they exist only in this application. The" +
        " tester has no delay, no animation, no console and no notion of a UI: the host owns the pace, so" +
        " every wait below happens inside the execution observer and never inside survey-core.",
      elements: [
        {
          type: "text", name: "stepDelayMs", title: "Step delay (ms)", inputType: "range",
          min: 0, max: 3000, step: 50,
          description: "Awaited in the observer. 0 runs at full speed, exactly as CI does.",
        },
        {
          type: "dropdown", name: "delayGranularity", title: "Delay granularity",
          allowClear: false,
          choices: [
            { value: "step", text: "each step" },
            { value: "target", text: "each target of a step" },
            { value: "check", text: "each target and each check" },
          ],
          description: "One command may address several targets; each of them is announced separately.",
        },
        {
          type: "boolean", name: "pauseOnFailure", title: "Pause on a failing check",
          renderAs: "checkbox", titleLocation: "hidden", label: "Pause on a failing check",
          description: "Holds the run until Resume or Stop — a host wait like any other.", // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
        },
        {
          type: "boolean", name: "renderSurvey", title: "Render the survey",
          renderAs: "checkbox", titleLocation: "hidden", label: "Render the survey",
          description: "The model of surveyCreated is the one the commands run on.",
        },
        {
          type: "boolean", name: "highlightTarget", title: "Highlight the current target",
          renderAs: "checkbox", titleLocation: "hidden", label: "Highlight the current target",
          description: "Outlines the question of targetStarted and puts its input into focus, before the" +
            " command writes to it.",
        },
        {
          type: "boolean", name: "keepLastModel", title: "Keep the last model on screen",
          renderAs: "checkbox", titleLocation: "hidden", label: "Keep the last model on screen",
          description: "Its clock stays pinned to the now of the test that ran on it.",
        },
        {
          type: "dropdown", name: "verbosity", title: "Console verbosity",
          allowClear: false,
          choices: [
            { value: "all", text: "all events" },
            { value: "steps", text: "steps, checks and issues" },
            { value: "failures", text: "failures and issues only" },
          ],
        },
        {
          type: "boolean", name: "autoScrollConsole", title: "Auto-scroll the console",
          renderAs: "checkbox", titleLocation: "hidden", label: "Auto-scroll the console",
        },
        {
          type: "boolean", name: "attachServerValidation",
          title: "Attach the demo server-validation handler",
          renderAs: "checkbox", titleLocation: "hidden",
          label: "Attach the demo server-validation handler",
          description: "Installs an onServerValidateQuestions handler through the createSurvey execution" +
            " option: it answers after 800 ms and rejects taken@example.com. Required by the asynchronous" +
            " sample and by nothing else. With it off, the tester's own default factory is used.",
        },
      ],
    },
  ],
};

export interface SetupHandlers {
  onTestOptions(next: ISurveyTestOptions): void;
  onHostOptions(next: HostOptions): void;
}

export class SetupModel extends Base {
  // "Resolved root options": what the runner is actually handed, which is not quite what is typed - an
  // empty locale is dropped rather than sent as "".
  @property({ defaultValue: "" }) resolvedText!: string;

  public readonly survey: SurveyModel;
  private handlers: SetupHandlers;
  private testOptions?: ISurveyTestOptions;
  private hostOptions?: HostOptions;
  // True while setOptions is writing the answers in. Without it every push from above would come
  // straight back out as an edit.
  private applying = false;

  constructor(handlers: SetupHandlers) {
    super();
    this.handlers = handlers;
    this.survey = new SurveyModel(SETUP_SURVEY_JSON);
    // Assigned at creation, before anything renders: the ids are composed when they are read, so a
    // prefix set afterwards changes them under markup that has already been written. See elementIds.ts.
    this.survey.elementIdPrefix = SETUP_SURVEY_ID_PREFIX;
    this.survey.onValueChanged.add((_sender, options) => this.onAnswer(options.name, options.value));
  }
  public getType(): string { return "svt-setup"; }

  // The two option objects, pushed in. The survey is the form; the application still owns the answers,
  // because they are persisted and because a sample that needs the server-validation handler switches
  // one of them on from somewhere else entirely.
  public setOptions(testOptions: ISurveyTestOptions, hostOptions: HostOptions): void {
    this.testOptions = testOptions;
    this.hostOptions = hostOptions;
    this.applying = true;
    try {
      this.survey.mergeData({
        locale: testOptions.locale ?? "",
        now: testOptions.now ?? "",
        randomSeed: testOptions.randomSeed ?? 1,
        clearInvisibleValues: testOptions.clearInvisibleValues ?? "onComplete",
        checkErrorsMode: testOptions.checkErrorsMode ?? "onNextPage",
        stopOnFirstFailure: testOptions.stopOnFirstFailure === true,
        asyncTimeout: testOptions.asyncTimeout ?? 5000,
        ...hostOptions,
      });
    } finally {
      this.applying = false;
    }
    this.resolvedText = stringify(toRunnerOptions(testOptions));
  }

  public dispose(): void {
    this.survey.dispose();
    super.dispose();
  }

  private onAnswer(name: string, value: any): void {
    if (this.applying || !this.testOptions || !this.hostOptions) return;
    const next = NUMBER_KEYS.indexOf(name) > -1 ? toNumber(value) : value;
    if (TEST_KEYS.indexOf(name as keyof ISurveyTestOptions) > -1) {
      this.handlers.onTestOptions({ ...this.testOptions, [name]: next });
    } else if (HOST_KEYS.indexOf(name as keyof HostOptions) > -1) {
      this.handlers.onHostOptions({ ...this.hostOptions, [name]: next });
    }
  }
}

function toNumber(value: any): number {
  const parsed = Number(value);
  return isFinite(parsed) ? parsed : 0;
}

function stringify(value: any): string {
  try {
    return JSON.stringify(value, null, 2);
  } catch{
    return String(value);
  }
}
