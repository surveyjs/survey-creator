import type { ISurveyTestOptions } from "survey-core/tester";

// Two kinds of settings, kept apart on purpose and in the UI as well.
//
// ISurveyTestOptions is the serialisable run configuration of the test format: it travels with a
// suite, it merges per key, and the runner reports the resolved set on every test result.
//
// HostOptions exists only in this application. The tester has no delay, no animation, no console and
// eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
// no notion of a UI: the host owns the pace (README §6, "Delaying execution"), so everything about
// pacing and presentation lives here and never leaks into the suite JSON.

export type DelayGranularity = "step" | "target" | "check";
// The same three, as a list. The picker beside the delay is built from it and localization.test.ts
// walks it, so a fourth granularity is one edit and not three.
export const DELAY_GRANULARITIES: Array<DelayGranularity> = ["step", "target", "check"];
export type ConsoleVerbosity = "all" | "steps" | "failures";

export interface HostOptions {
  // Awaited inside the execution observer, nowhere else.
  stepDelayMs: number;
  delayGranularity: DelayGranularity;
  // Holds the run on a failing check until Resume or Stop. A host wait like any other.
  pauseOnFailure: boolean;
  renderSurvey: boolean;
  highlightTarget: boolean;
  verbosity: ConsoleVerbosity;
  autoScrollConsole: boolean;
  // Installs the demo onServerValidateQuestions handler through the createSurvey execution option.
  attachServerValidation: boolean;
  // Keeps the model of the finished test on screen until the next one is created.
  keepLastModel: boolean;
}

// How a run is watched. "ui" drives the model on screen at the pace the host is set to; "console" is
// the same run with nothing to look at - no model rendered, no target marked and nothing waited for,
// which is what a unit-test run of this suite is. It is a host concept: the tester runs the same way
// either way, and the suite cannot tell the difference.
export type RunMode = "ui" | "console";

// How a run is started, as opposed to what it runs. `goToRun` is explicit and defaults to true: a run
// started from a keyboard shortcut has to put the person where the model is being watched, and one
// started from that very screen must not move anything. A caller that had to be guessed at from the
// active tab would be a rule nobody could read off the call.
export interface RunOptions {
  mode?: RunMode;
  goToRun?: boolean;
}

// The overrides one console run is started with. The Setup tab keeps whatever it was set to: a mode is
// not a settings change, and the next UI run has to find its pace where it left it.
export function toConsoleOptions(options: HostOptions): HostOptions {
  return {
    ...options,
    renderSurvey: false,
    highlightTarget: false,
    stepDelayMs: 0,
    pauseOnFailure: false,
  };
}

export const defaultTestOptions: ISurveyTestOptions = {
  locale: "",
  now: "2024-01-01T00:00:00",
  randomSeed: 1,
  clearInvisibleValues: "onComplete",
  checkErrorsMode: "onNextPage",
  stopOnFirstFailure: false,
  asyncTimeout: 5000,
};

export const defaultHostOptions: HostOptions = {
  stepDelayMs: 400,
  delayGranularity: "target",
  pauseOnFailure: false,
  renderSurvey: true,
  highlightTarget: true,
  verbosity: "steps",
  autoScrollConsole: true,
  attachServerValidation: false,
  keepLastModel: true,
};

// The options the runner is handed. An empty locale is dropped rather than sent as "": the option is
// absent by default, and "" is not the same statement.
export function toRunnerOptions(options: ISurveyTestOptions): ISurveyTestOptions {
  const res: ISurveyTestOptions = { ...options };
  if (!res.locale) delete res.locale;
  return res;
}
