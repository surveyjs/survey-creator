import { Action, IAction } from "survey-core";
import type { ISurveyLintResult } from "survey-core/linter";
import type { SurveyCreatorModel } from "../creator-base";
import type { SurveySavingEvent } from "../creator-events-api";
import { showConfirmDialog } from "../utils/confirm-dialog";
import { getLinterString } from "./linter-messages";

function format(name: string, ...args: Array<any>): string {
  const str = getLinterString(name);
  return args.length > 0 ? (<any>str)["format"].apply(str, args) : str;
}

// "3 errors, 5 warnings", degrading to one half of it: nobody should have to read "0 warnings".
export function getIssuesSummaryText(result: ISurveyLintResult): string {
  if (!result) return "";
  const errors = result.errorCount;
  const warnings = result.warningCount;
  if (errors > 0 && warnings > 0) return format("issuesSummary", errors, warnings);
  if (errors > 0) return format("issuesSummaryErrors", errors);
  if (warnings > 0) return format("issuesSummaryWarnings", warnings);
  return format("issuesSummaryInfo", result.infoCount);
}

// What the save was refused over. With errors present the warnings are not what blocked it,
// so they stay out of the sentence; a host that blocks on warnings alone still gets named.
function getBlockingSummaryText(result: ISurveyLintResult): string {
  if (!result) return "";
  if (result.errorCount > 0) return format("issuesSummaryErrors", result.errorCount);
  return getIssuesSummaryText(result);
}

function createReviewAction(creator: SurveyCreatorModel): IAction {
  return new Action({
    id: "linter-review-issues",
    title: getLinterString("reviewIssues"),
    action: () => {
      creator.notifier.active = false;
      creator.showLintIssues();
    }
  });
}

function createDismissAction(creator: SurveyCreatorModel): IAction {
  return new Action({
    id: "linter-dismiss",
    title: getLinterString("dismiss"),
    action: () => { creator.notifier.active = false; }
  });
}

// The save went through and the linter had something to say. Info findings alone are not worth
// a message: they are the panel's business, not an interruption of a save.
export function reportSavedWithIssues(creator: SurveyCreatorModel,
  options: SurveySavingEvent): void {
  const result = options.lintResult;
  if (!result || result.errorCount + result.warningCount === 0) return;
  const message = format("savedWithIssues", getIssuesSummaryText(result));
  // errors that were saved anyway must not vanish in two seconds; warnings may
  const hasErrors = result.errorCount > 0;
  const actions: Array<IAction> = [createReviewAction(creator)];
  // a persistent toast has no close button of its own
  if (hasErrors) actions.push(createDismissAction(creator));
  creator.notify(message, hasErrors ? "error" : "info",
    { persistent: hasErrors, actions: actions });
}

// The save did not happen. A modal is right here and only here: the user pressed Save, nothing
// was saved, and there is a genuine either/or.
export function reportCancelledSave(creator: SurveyCreatorModel,
  options: SurveySavingEvent): void {
  // an auto-save the host cancels is a policy decision the user did not ask for; interrupting
  // them mid-typing with a dialog is exactly what auto-save must never do
  if (options.reason === "auto") return;
  // a handler that put its own message on the options has already been notified with it
  if (!!options.message) return;
  const summary = getBlockingSummaryText(options.lintResult);
  const allowOverride = options.allowOverride !== false;
  showConfirmDialog(creator, {
    title: getLinterString("saveBlockedTitle"),
    message: !!summary
      ? format("saveBlockedText", summary)
      : getLinterString("saveBlockedTextNoDetails"),
    iconName: "icon-warning-24x24",
    category: "warning",
    showCloseButton: true,
    applyText: getLinterString("reviewIssues"),
    cancelText: allowOverride ? getLinterString("saveAnyway") : getLinterString("closeDialog"),
    onApply: () => {
      creator.showLintIssues();
      return true;
    },
    onCancel: () => {
      if (allowOverride) creator.saveSurveyAnyway();
    }
  });
}
