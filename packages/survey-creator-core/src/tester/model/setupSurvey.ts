import type { ISurveyTestOptions } from "survey-core/tester";
import type { HostOptions } from "../core/hostOptions";
import { testerText } from "../localization";

// The Setup tab is a survey, and it is the only one this widget owns besides the model under test.
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
//
// The widget has no tab strip, so the form is not a tab: TesterSettingsModel (settingsModel.ts) opens
// it in a popup over the runner's toolbar. This file holds the definition and the two key lists, which
// is the part that is about the options rather than about where they are shown.

// The two option objects, member for member. A question is named for the member it edits, so the
// mapping is these two lists and nothing else - there is no table of "which control writes what".
export const TEST_KEYS: Array<keyof ISurveyTestOptions> = [
  "locale", "now", "randomSeed", "clearInvisibleValues", "checkErrorsMode", "stopOnFirstFailure",
  "asyncTimeout",
];
export const HOST_KEYS: Array<keyof HostOptions> = [
  "stepDelayMs", "delayGranularity", "pauseOnFailure", "renderSurvey", "highlightTarget",
  "keepLastModel", "verbosity", "autoScrollConsole", "attachServerValidation",
];

// Which members are numbers. A text question hands back what was typed, and "5000" is not 5000 to the
// runner - it would travel into the suite result as a string.
export const NUMBER_KEYS = ["randomSeed", "asyncTimeout", "stepDelayMs"];

// Built on demand rather than held as a constant: every title and description comes out of the string
// table, and a constant would have frozen the locale that was current when this module was loaded.
export function buildSetupSurveyJson(): any {
  return {
    showQuestionNumbers: "off",
    showNavigationButtons: "none",
    showCompletedPage: false,
    widthMode: "responsive",
    elements: [
      {
        type: "panel",
        name: "testOptions",
        title: testerText("setup.testPanelTitle"),
        description: testerText("setup.testPanelDescription"),
        elements: [
          {
            type: "text", name: "locale", title: testerText("setup.localeTitle"),
            placeholder: testerText("setup.localePlaceholder"),
            description: testerText("setup.localeDescription"),
          },
          {
            type: "text", name: "now", title: testerText("setup.nowTitle"),
            placeholder: testerText("setup.nowPlaceholder"),
            description: testerText("setup.nowDescription"),
          },
          {
            type: "text", name: "randomSeed", title: testerText("setup.randomSeedTitle"),
            inputType: "number",
            description: testerText("setup.randomSeedDescription"),
          },
          {
            type: "dropdown", name: "clearInvisibleValues",
            title: testerText("setup.clearInvisibleValuesTitle"),
            choices: ["onComplete", "onHidden", "onHiddenContainer", "none"],
            allowClear: false,
            description: testerText("setup.clearInvisibleValuesDescription"),
          },
          {
            type: "dropdown", name: "checkErrorsMode", title: testerText("setup.checkErrorsModeTitle"),
            choices: ["onNextPage", "onValueChanged", "onComplete"],
            allowClear: false,
            description: testerText("setup.checkErrorsModeDescription"),
          },
          {
            type: "boolean", name: "stopOnFirstFailure",
            title: testerText("setup.stopOnFirstFailureTitle"),
            renderAs: "checkbox", titleLocation: "hidden",
            label: testerText("setup.stopOnFirstFailureTitle"),
            description: testerText("setup.stopOnFirstFailureDescription"),
          },
          {
            type: "text", name: "asyncTimeout", title: testerText("setup.asyncTimeoutTitle"),
            inputType: "number", min: 0, step: 100,
            description: testerText("setup.asyncTimeoutDescription"),
          },
        ],
      },
      {
        type: "panel",
        name: "hostOptions",
        title: testerText("setup.hostPanelTitle"),
        startWithNewLine: false,
        description: testerText("setup.hostPanelDescription"),
        elements: [
          {
            type: "text", name: "stepDelayMs", title: testerText("setup.stepDelayMsTitle"),
            inputType: "range", min: 0, max: 3000, step: 50,
            description: testerText("setup.stepDelayMsDescription"),
          },
          {
            type: "dropdown", name: "delayGranularity",
            title: testerText("setup.delayGranularityTitle"),
            allowClear: false,
            choices: [
              { value: "step", text: testerText("setup.delayGranularityStep") },
              { value: "target", text: testerText("setup.delayGranularityTarget") },
              { value: "check", text: testerText("setup.delayGranularityCheck") },
            ],
            description: testerText("setup.delayGranularityDescription"),
          },
          {
            type: "boolean", name: "pauseOnFailure", title: testerText("setup.pauseOnFailureTitle"),
            renderAs: "checkbox", titleLocation: "hidden",
            label: testerText("setup.pauseOnFailureTitle"),
            description: testerText("setup.pauseOnFailureDescription"),
          },
          {
            type: "boolean", name: "renderSurvey", title: testerText("setup.renderSurveyTitle"),
            renderAs: "checkbox", titleLocation: "hidden",
            label: testerText("setup.renderSurveyTitle"),
            description: testerText("setup.renderSurveyDescription"),
          },
          {
            type: "boolean", name: "highlightTarget", title: testerText("setup.highlightTargetTitle"),
            renderAs: "checkbox", titleLocation: "hidden",
            label: testerText("setup.highlightTargetTitle"),
            description: testerText("setup.highlightTargetDescription"),
          },
          {
            type: "boolean", name: "keepLastModel", title: testerText("setup.keepLastModelTitle"),
            renderAs: "checkbox", titleLocation: "hidden",
            label: testerText("setup.keepLastModelTitle"),
            description: testerText("setup.keepLastModelDescription"),
          },
          {
            type: "dropdown", name: "verbosity", title: testerText("setup.verbosityTitle"),
            allowClear: false,
            choices: [
              { value: "all", text: testerText("setup.verbosityAll") },
              { value: "steps", text: testerText("setup.verbositySteps") },
              { value: "failures", text: testerText("setup.verbosityFailures") },
            ],
          },
          {
            type: "boolean", name: "autoScrollConsole",
            title: testerText("setup.autoScrollConsoleTitle"),
            renderAs: "checkbox", titleLocation: "hidden",
            label: testerText("setup.autoScrollConsoleTitle"),
          },
          {
            type: "boolean", name: "attachServerValidation",
            title: testerText("setup.attachServerValidationTitle"),
            renderAs: "checkbox", titleLocation: "hidden",
            label: testerText("setup.attachServerValidationTitle"),
            description: testerText("setup.attachServerValidationDescription"),
          },
        ],
      },
    ],
  };
}
