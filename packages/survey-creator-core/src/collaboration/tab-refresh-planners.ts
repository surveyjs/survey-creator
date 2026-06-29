import type { ISyncMessage } from "./undo-redo-serializer";

// Pure tab-refresh planners for the collaborative undo/redo feature.
//
// IMPORTANT: this module MUST stay survey-core-free. It imports ONLY the
// `ISyncMessage` *type* (erased at compile time), so its unit tests run
// without loading the survey-core / undo-redo-manager / creator-base graph.
// Do NOT add a runtime `import ... from "survey-core"` here, or those fast
// unit tests will start pulling in the whole survey-core graph.
//
// The orchestrator that actually drives these planners against live tab
// models, `TabSyncRefresher` (which DOES touch survey-core via
// `surveyLocalization`), lives in undo-redo-sync-plugin.ts.

// ===========================================================================
// Translation tab
// ===========================================================================

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

// ===========================================================================
// Logic tab
// ===========================================================================

/**
 * The refresh work the Logic tab needs after a remote sync message was applied
 * to the live survey:
 *   - "rebuild": rebuild the whole tab model now (`model.update()`).
 *   - "defer": the local user is currently inside the modal logic-item editor
 *     (mode !== "view"). A `model.update()` would destroy their in-progress
 *     (unsaved) rule, so we postpone the rebuild until they return to the list.
 *
 * Unlike the Translations tab an always-live inline matrix with a public
 * soft-refresh (`updateStringsSurveyData`) the Logic tab edits ONE item at a
 * time in a detail editor and exposes only the full `update()`. So the "don't
 * clobber the local edit" invariant is satisfied by deferring the rebuild, not
 * by a soft merge.
 */
export type LogicRefreshPlan =
    | { kind: "rebuild" }
    | { kind: "defer" };

/**
 * Decide the refresh for a freshly-applied remote message.
 *
 * Kept pure (no survey-core import) so it is trivially unit-testable: the caller
 * passes whether the local user is mid-edit.
 *
 * Correctness over cheapness (as in the Translations planner: "rebuild to stay
 * correct"). Any applied message property edit, array insert/delete, or
 * undo/redo can change the rules the tab lists or their display text, so in
 * view mode we always rebuild. We deliberately do NOT filter by locator: an
 * incomplete allowlist would leave the list stale (worse than a redundant
 * rebuild).
 *
 * @param ctx.isEditing the local model's `mode` is not "view" (a logic item is
 *                       open in the detail editor).
 */
export function planLogicRefresh(
  _message: ISyncMessage,
  ctx: { isEditing: boolean }
): LogicRefreshPlan {
  return ctx.isEditing ? { kind: "defer" } : { kind: "rebuild" };
}

/**
 * Apply a plan to a live `SurveyLogicUI` model. Extracted (and exported) so it
 * can be exercised by a jsdom integration test against a real model.
 *
 * Returns `true` when the rebuild was deferred, so the caller can remember to
 * flush it once the user leaves the editor (mode -> "view").
 */
export function applyLogicRefresh(model: any, plan: LogicRefreshPlan): boolean {
  if (plan.kind === "rebuild") {
    model.update?.();
    return false;
  }
  return true; // deferred
}

/**
 * Wire a "flush the deferred rebuild" trigger that fires the moment the local
 * user LEAVES the detail editor whether they SAVE the rule (Done) or CANCEL it
 * (collapse the panel). Returns an unbind function.
 *
 * Why not just the public `onLogicItemSaved` event? It fires on save only.
 * Consider the case this exists for: A starts a *new* rule (mode "new"), a remote
 * insert from B arrives and is deferred, then A *cancels*. No save event ever
 * fires, so a flush bound to `onLogicItemSaved` alone would never run and B's
 * rule would stay missing from A's list until the tab is re-activated.
 *
 * The one model signal common to BOTH exits is the `mode -> "view"` transition.
 * `mode` bypasses survey-core's property tracking (its setter writes a backing
 * field directly), so it cannot be observed via
 * registerFunctionOnPropertyValueChanged. The setter does, however, call the
 * model's `onEndEditing()` on every new|edit -> view transition. We wrap that
 * method: run the model's own teardown first, then our flush. By then `mode` is
 * already "view" and (on save) the new item is already committed to `items`, so
 * a `model.update()` inside the flush rebuilds a consistent list and is
 * re-entrancy-safe because update()'s own `mode = "view"` is a guarded no-op
 * (view -> view) at that point.
 *
 * `flush` MUST be idempotent: on save it can be invoked twice (once by the
 * caller's `onLogicItemSaved` handler, once here), so it should clear its own
 * "pending" flag and no-op when nothing is pending.
 */
export function bindLogicEditEndFlush(model: any, flush: () => void): () => void {
  const original: (() => void) | undefined =
        typeof model?.onEndEditing === "function" ? model.onEndEditing.bind(model) : undefined;
  const patched = function patchedOnEndEditing(this: unknown): void {
    original?.();
    flush();
  };
  model.onEndEditing = patched;
  return () => {
    // Only unbind if a later binding hasn't already replaced ours. Deleting
    // the own property restores the prototype method.
    if (model.onEndEditing === patched) {
      delete model.onEndEditing;
    }
  };
}
