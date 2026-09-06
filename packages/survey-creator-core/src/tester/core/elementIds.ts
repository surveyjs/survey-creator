import type { SurveyModel } from "survey-core";

// Every SurveyModel this application puts on the screen carries an elementIdPrefix, and this file is the
// one place that says which. Without it two models rendered at once emit the same HTML ids: the id
// generator is per-survey (Base.getIdGeneratorBySurvey), so every model starts again at sq_0/sp_0 and the
// collision between two of them is guaranteed rather than merely likely.
//
// There are two prefixes and not one per model, because what matters is what can be on screen together:
//
//   * The model under test is created by the tester, one per test, and it is always rendered in the same
//     place - the Runner tab's left pane, or the recorder's form pane. They are never on screen together,
//     so they share a prefix. A model per test with a prefix per test would make the ids of the pane
//     change under a person watching a suite run, for nothing.
//   * The recorder's step matrix is a survey of this application's own, and RecordStep renders it beside
//     the form pane - see RecordStep.tsx:131 and :163. Those two are on screen at the same time, so they
//     are the two that must differ.
//
// What this does not cover, and it is survey-core's to fix rather than this application's: the question
// and panel root <div>s emit the raw id, not the prefixed one. reactquestion.tsx:152 and panel.tsx:56
// write question.id and panelBase.id where every derived id - inputId, contentId, ariaTitleId,
// ariaDescriptionId, the comment id, "_errors" - correctly goes through renderedId. So a question here
// renders as <div id="sq_0"> holding <div id="tr_tested_sq_0_errors">, and two models still agree on the
// root. Setting the prefix narrows the collision to the roots; it does not close it. Do not work around
// that here by writing ids into the DOM after render - it would fight the renderer on every update.

// The two values are the ones recorderTab.test.tsx already asserts - it was written before anything set
// them - so they are the application's own names and not new ones. "rec" is where the pair was named,
// because the recorder screen is where two surveys are visible at once and the only place the collision
// could be seen. The model under test keeps that name everywhere it is rendered, the Runner tab
// included: it is one model in one place at a time, and a second name for it would only mean the ids of
// that pane changed depending on which tab reached it.

// The model a test runs on, whoever built it: the tester's own two-step creation, the demo
// server-validation factory, or a model held from the previous segment and handed back.
export const TESTED_MODEL_ID_PREFIX = "recform-";

// The recorder's step matrix - this application's own survey, and the only one that shares a screen with
// the model under test.
export const STEP_GRID_ID_PREFIX = "recsteps-";

// eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
// The Setup tab, which is a survey of this application's own since PROMPT-runner-model.md §6. It has a
// prefix of its own for the reason the note above gives, not because anything can be seen going wrong
// today: the Setup tab is a whole tab and it is never mounted beside the model under test or beside the
// step matrix. It is a third prefix rather than a shared one because the rule of this file is "what can
// be on screen together must differ", and a tab that is on its own is trivially covered either way -
// so the cheap answer is the one that stays true if the Setup form is ever put beside anything.
export const SETUP_SURVEY_ID_PREFIX = "setup-";

// Assigning it is a plain property set, but it has to happen before the model is rendered: the ids are
// composed when they are read, so a prefix set afterwards changes them under markup that has already been
// written. Every caller here assigns it at creation, which is the moment the property's documentation
// asks for.
export function applyElementIdPrefix(survey: SurveyModel | undefined, prefix: string): void {
  if (!survey) return;
  survey.elementIdPrefix = prefix;
}
