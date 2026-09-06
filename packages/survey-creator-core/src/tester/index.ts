// The public surface of survey-creator-core/tester, and it is a decision per line.
//
// The widget ships as a bundle of its own (rollup.tester.config.mjs) whose only external is
// survey-core and its survey-core/tester entry. survey-creator-core is deliberately NOT external
// here, because it is not a dependency: overview section 3 forbids the import, tests-tester/
// fences.test.ts asserts the other direction, and tests-tester/bundle.test.ts reads the built file to
// catch the rollup mistake neither of those can see.
//
// What is exported is what a host and a renderer need. Layer 0 is not exported wholesale - what a
// host legitimately needs from it is re-exported by name at the bottom of this file and the rest
// stays internal, so that a function of core/ or recorder/ can be moved, split or renamed without
// breaking anybody.

import { checkLibraryVersion } from "survey-core";

import "./theme/tester.scss";

// The root model and its host contract. `new SurveyTesterModel(host)` plus one framework component is
// the whole of standalone usage.
export { SurveyTesterModel } from "./model/testerModel";
export type { TesterScreen, TesterTransition } from "./model/testerModel";
export type {
  ITesterHost, ITesterOptions, ITesterState, ITesterRecorderOptions, ITesterRecorderState,
} from "./model/testerHost";

// The screen models a view subscribes to. One model per component (overview section 3.4), so this is
// also the list of things a renderer is allowed to be handed.
export { TesterRunnerModel } from "./model/runnerModel";
export { TesterRecorderModel } from "./model/recorderModel";
export { TesterJsonModel } from "./model/jsonModel";
export { TesterSettingsModel, SETTINGS_COMPONENT } from "./model/settingsModel";
export { TesterTestRowModel } from "./model/testRowModel";
export { TesterStepRowModel } from "./model/stepRowModel";
export { TesterConsoleModel } from "./model/consoleModel";
export { TesterStepsModel } from "./model/stepsSurvey";

// The recorder's own screens: the check menu an adorner opens, and the adorners themselves. Prompt 07
// renders these; rendersHeader is the one question about a survey element the DOM half has to ask.
export { TesterCheckMenuModel, TesterCheckRowModel } from "./model/checkMenuModel";
export { TesterAdornersModel, TesterAdornerModel, rendersHeader } from "./model/adornerModel";
// The four names a renderer registers a wrapper under. Which element gets which of them is decided
// in the model - TesterAdornersModel.attach installs the answer on the survey it is handed - so a
// renderer registers the four and draws each element's own markup inside the adorned box.
export {
  TESTER_ADORNED_QUESTION, TESTER_ADORNED_PANEL, TESTER_ADORNED_CELL, TESTER_ADORNED_PAGE,
} from "./model/adornerModel";

// What those models hand a view to loop over.
export type { ITesterNewTestParams, ITesterPanelTest, ITesterRowActions } from "./model/runnerApi";
export type { ITesterJsonIssueRow } from "./model/jsonModel";
export type { ITesterStaticField, ITesterStaticForm } from "./model/recorderModel";
export type { CheckView, IssueView, WhyLine, WhyNote, WhyPart } from "./model/checkView";
export type { ITesterCheckPickItem } from "./model/checkMenuModel";
export type { TesterAdornerPlace } from "./model/adornerModel";
export type { TesterRowState, ITesterStepRow, ITesterTestFields } from "./model/stepsSurvey";
export { TESTER_INLINE_START } from "./model/stepsSurvey";
export type {
  TesterReplayState, TesterStepState, ITesterIgnoredChange, ITesterCheckRequest, ITesterVerifyOutcome,
} from "./model/recorderModel";

// The css maps the reused survey-core chrome models are dressed with. A host that composes its own
// ActionContainer or ListModel beside the widget's dresses it with the same names and gets the same
// look out of the stylesheet below; a component that looks wrong is fixed by changing one of these,
// never by overriding a library selector.
export { runnerActionBarCss, runnerListCss, checkListCss, runnerMenuCss } from "./model/runnerCss";

// The widget's own string table. It shares not one line with editorLocalization, because rule 1
// forbids the import; it is shaped like it so that a translated bundle stays mechanical.
export {
  testerLocalization, testerText, registerTesterLocale, enTesterStrings, TesterLocalization,
} from "./localization";
export type { ITesterStrings, TesterStringValue } from "./localization";

// Layer 0, by name and no further. The validator is what a host that owns the suite document needs
// before it hands one over - the widget's own blocked banners are the same three calls - and the
// option shapes are what makes an ITesterOptions typeable at the call site.
export { validateSuite, getSuiteLevelErrors, getBrokenTestCount } from "./core/validate";
export { defaultHostOptions, defaultTestOptions } from "./core/hostOptions";
export { DELAY_GRANULARITIES } from "./core/hostOptions";
export type {
  HostOptions, RunMode, ConsoleVerbosity, DelayGranularity,
} from "./core/hostOptions";
export type { ConsoleRow, ConsoleLevel } from "./core/consoleLog";
export type { RunPhase, LiveStatus, LiveStep, LiveTest } from "./core/liveRun";
export { defaultRecorderOptions } from "./recorder/options";
export type { RecorderOptions } from "./recorder/options";

export let Version: string;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Version = `${process.env.VERSION}`;
checkLibraryVersion(Version, "survey-creator-core-tester");
