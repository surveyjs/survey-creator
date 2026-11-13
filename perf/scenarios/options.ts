import type { PerfContext } from "../harness/scenario.ts";

// The one creator setup of every scenario, core and browser (00, Measurement rules), from the huge-json-perf probes.
// It is part of every scenario's rev hash: each names createCreator in `uses`.
export const creatorOptions = { showLogicTab: true, showTranslationTab: true, showThemeTab: true };

// Added to the options of 00 (Andrew, 2026-11-12): survey-core's Notifier hides the creator's "modified" / "saved"
// toast after settings.notifications.lifetime (2000 ms), and the settle waits for that timer after every edit, 2 s
// per sample. 1 ms keeps the timer, so the settle still sees it, and ends it at once. The Notifier reads the setting
// when it is created, so it is set before the creator.
export const notificationLifetimeMs = 1;

export function createCreator(ctx: PerfContext): any {
  const notifications = ctx.Survey.settings && ctx.Survey.settings.notifications;
  if (notifications) notifications.lifetime = notificationLifetimeMs;
  const creator = new ctx.Creator.SurveyCreatorModel(Object.assign({}, creatorOptions));
  // A @property of master; a build without it keeps its own default.
  if ("expandCollapseButtonVisibility" in creator) creator.expandCollapseButtonVisibility = "always";
  creator.autoSaveDelay = 0;
  creator.animationEnabled = false;
  creator.allowZoom = false;
  if (ctx.platform === "browser") creator.tabResponsivenessMode = "menu";
  return creator;
}
