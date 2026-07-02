import type { ISyncMessage } from "./undo-redo-serializer";

/**
 * The refresh work the Translations tab needs after a remote sync message was
 * applied to the live survey:
 *   - "rebuild": a structural change rebuild the whole tab model (`reset()`).
 *   - "update": the message is purely locale-text edits. `newLocales` are
 *     locales the receiver does not list yet and should be added as *unchecked*
 *     rows (so the strings-table columns stay unchanged). The executor always
 *     also refreshes the snapshot data.
 */
export type TranslationRefreshPlan =
    | { kind: "rebuild" }
    | { kind: "update", newLocales: string[] };

/**
 * Decide the cheapest correct refresh for a freshly-applied remote message.
 *
 * Kept pure (no survey-core import) so it is trivially unit-testable: the caller
 * passes the locales the receiver already lists and the registered locale codes.
 *
 * @param visible     locales already in the language list (checked or not;
 *                    excludes the "" default).
 * @param localeCodes registered locale codes (`surveyLocalization.getLocales()`).
 */
export function planTranslationRefresh(
  message: ISyncMessage,
  ctx: {
        visible: ReadonlySet<string>,
        localeCodes: ReadonlySet<string>,
    }
): TranslationRefreshPlan {
  // undo/redo carry no action payload ({kind,id} only), so we can't tell a
  // value revert from a structural one rebuild to stay correct. These are
  // far rarer than edits.
  if (message.kind !== "transaction") return { kind: "rebuild" };
  const newLocales = new Set<string>();
  for (const action of message.actions) {
    // Array insert/delete adds or removes a translatable element -> a row.
    if (action.kind === "array") return { kind: "rebuild" };
    // Localizable edits encode the locale as the final locator segment
    // ("default" stands for the default locale). Anything else is a
    // non-string property change (e.g. a `name` rename that relabels rows).
    const seg = action.locator.split("/").pop() || "";
    const isLocaleSeg = seg === "default" || ctx.localeCodes.has(seg);
    if (!isLocaleSeg) return { kind: "rebuild" };
    const locale = seg === "default" ? "" : seg;
    // Not the default and not already listed -> add it as an unchecked row.
    if (locale !== "" && !ctx.visible.has(locale)) newLocales.add(locale);
  }
  // Array.from (not [...set]) so the es5 build target does not require
  // --downlevelIteration for iterating the Set.
  return { kind: "update", newLocales: Array.from(newLocales) };
}

/**
 * Apply a plan to a live `Translation` model. Extracted (and exported) so it can
 * be exercised by a jsdom integration test against a real model.
 */
export function applyTranslationRefresh(model: any, plan: TranslationRefreshPlan): void {
  if (plan.kind === "rebuild") {
    model.reset?.();
    return;
  }
  if (plan.newLocales.length > 0) {
    // Add as unchecked rows: the language shows in the list but is not a
    // column, so the strings table columns are untouched.
    const visible: string[] = model.getVisibleLocales?.() ?? [];
    model.setVisibleLocales?.([...visible, ...plan.newLocales]);
  }
  // Keep the snapshot data in sync with the LocalizableStrings for ALL locales
  // (shown, unchecked, or brand-new), so a later checkbox-tick of a locale
  // surfaces its already-synced translations instead of an empty column.
  model.updateStringsSurveyData?.();
}
