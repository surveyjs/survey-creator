import type { ISurveyTestOptions } from "survey-core/tester";
import type { HostOptions, RunMode } from "../core/hostOptions";

// The one contract a host implements, and the reason the Creator plugin tab will be an adapter instead
// of a rewrite.
//
// The widget owns no documents and no persistence (overview section 4). It reads the survey definition,
// it reads the suite as text, and every edit it makes goes straight back out through setTestsText -
// there is no Apply and no staging buffer. The text is the source of truth rather than a parsed object
// because a hand-formatted, commented suite has to survive being recorded into, and only the text
// carries the formatting and the comments.
//
// Standalone usage is `new SurveyTesterModel(host)` plus one framework component. The Creator tab, when
// it comes, implements this over creator.text and adds a tab; nothing here changes for it.

export interface ITesterHost {
  // The survey definition. Read-only to the widget, always: the recorder's "no survey editing" rule is
  // this method having no partner.
  getSurveyJson(): any;
  // The suite document, as text.
  getTestsText(): string;
  // Every widget edit, immediately. The widget calls updateFromHost() on itself afterwards, so the
  // reconciliation of an edit made here and one made outside take the same path.
  setTestsText(text: string): void;
  options?: ITesterOptions;
}

// The recorder's own options. A typed placeholder until prompt 04 fills it in: it is declared now so
// that ITesterOptions and ITesterState have their final shape before the recorder arrives, and a host
// written against this prompt does not have to change for the next one.
export interface ITesterRecorderOptions {
  [name: string]: any;
}

// What a host may set up front. Everything is a default: what a person changes afterwards belongs to
// the widget's state (getState / setState) and is never written back here.
export interface ITesterOptions {
  // The run options of core/hostOptions.ts - delay and its granularity, verbosity, render, highlight,
  // autoscroll, pause-on-failure, keep-last-model, the demo server-validation handler.
  hostOptions?: Partial<HostOptions>;
  // ISurveyTestOptions: the serialisable run configuration of the test format. Its own "locale" is the
  // locale the survey under test is run in, and it has nothing to do with the one below.
  testOptions?: Partial<ISurveyTestOptions>;
  recorderOptions?: ITesterRecorderOptions;
  // The locale the widget's own chrome speaks. See localization/index.ts; "" is english.
  locale?: string;
  // Which run mode the picker starts on.
  mode?: RunMode;
}

// The recorder's slot in the widget state. Prompt 04 fills it; it is declared here so that a host
// persisting state today persists the right shape.
export interface ITesterRecorderState {
  cursor?: number;
  options?: ITesterRecorderOptions;
}

// One serializable object, and persisting it is the host's business - the widget never touches
// localStorage. What it holds is what a reload has to bring back: where the person was, what the run
// button means, and the options they changed.
export interface ITesterState {
  screen?: "runner" | "json" | "recorder";
  activeTestName?: string;
  // undefined means every test, which is the same rule the run boundary uses.
  selectedTestNames?: Array<string>;
  mode?: RunMode;
  // Only the members a person actually changed. A host that later ships different defaults is then not
  // overruled by a state object that had repeated the old ones.
  hostOptions?: Partial<HostOptions>;
  testOptions?: Partial<ISurveyTestOptions>;
  recorder?: ITesterRecorderState;
}
