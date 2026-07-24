import { Serializer, surveyLocalization } from "survey-core";
import { IJournalPropertyChangedPayload, IJournalRecord, JournalOp } from "./journal-record";
import { resolveLocator, splitPointer } from "./journal-locator";

/**
 * The refresh work the Translations tab needs after remote journal records were
 * applied to the live survey:
 *   - "rebuild": a structural change - rebuild the whole tab model (`reset()`).
 *   - "update": the records are purely locale-text edits. `newLocales` are
 *     locales the receiver does not list yet and should be added as *unchecked*
 *     rows (so the strings-table columns stay unchanged). The executor always
 *     also refreshes the snapshot data.
 */
export type TranslationRefreshPlan =
  | { kind: "rebuild" }
  | { kind: "update", newLocales: string[] };

/**
 * Decide the cheapest correct refresh for freshly-applied journal records.
 *
 * Kept pure (no survey access) so it is trivially unit-testable: the caller
 * passes the locales the receiver already lists, the registered locale codes
 * and a callback that says whether a propertyChanged target is a localizable
 * property (a default-locale text edit).
 *
 * @param ctx.visible             locales already in the language list (checked
 *                                or not; excludes the "" default).
 * @param ctx.localeCodes         registered locale codes (`surveyLocalization.getLocales()`).
 * @param ctx.isLocalizableTarget whether the propertyChanged target addresses a
 *                                localizable property (default-locale edit).
 */
export function planTranslationRefresh(
  records: Array<IJournalRecord>,
  ctx: {
    visible: ReadonlySet<string>,
    localeCodes: ReadonlySet<string>,
    isLocalizableTarget: (target: string) => boolean,
  }
): TranslationRefreshPlan {
  const newLocales = new Set<string>();
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    // Array insert/delete adds or removes a translatable element (a row);
    // remove/reorder/convert/fullSnapshot restructure the survey - rebuild.
    if (record.op !== JournalOp.PropertyChanged) return { kind: "rebuild" };
    const target = (<IJournalPropertyChangedPayload>record.payload).target;
    // Per-locale localizable edits encode the locale as the final locator
    // segment - ".../title/de", or ".../title/default" for the default locale
    // (that is how the Translation tab commits cells). A programmatic
    // default-locale edit addresses the localizable property itself
    // (".../title"). Anything else is a non-string property change (e.g. a
    // `name` rename that relabels rows).
    const seg = target.split("/").pop() || "";
    if (seg === "default" || ctx.localeCodes.has(seg)) {
      // Not the default and not already listed -> add it as an unchecked row.
      if (seg !== "default" && !ctx.visible.has(seg)) newLocales.add(seg);
    } else if (!ctx.isLocalizableTarget(target)) {
      return { kind: "rebuild" };
    }
  }
  // Array.from (not [...set]) so the es5 build target does not require
  // --downlevelIteration for iterating the Set.
  return { kind: "update", newLocales: Array.from(newLocales) };
}

/**
 * Apply a plan to a live `Translation` model. Extracted (and exported) so it
 * can be exercised by an integration test against a real model.
 */
export function applyTranslationRefresh(model: any, plan: TranslationRefreshPlan): void {
  if (plan.kind === "rebuild") {
    model.reset?.();
    return;
  }
  if (plan.newLocales.length > 0) {
    // Add as unchecked rows: the language shows in the list but is not a
    // column, so the strings table columns are untouched.
    const visible: Array<string> = model.getVisibleLocales?.() ?? [];
    model.setVisibleLocales?.(visible.concat(plan.newLocales));
  }
  softUpdateStringsSurveyData(model);
}

/**
 * Re-read the strings-table snapshot from the LocalizableStrings, writing ONLY
 * the cells whose text actually changed.
 *
 * The model's own `updateStringsSurveyData()` assigns the whole
 * `stringsSurvey.data`, which re-renders every cell - stealing focus from (and
 * wiping the uncommitted text of) the cell the local user is editing when a
 * peer's edit arrives. A per-cell diff touches only the changed cells, so the
 * cell mid-edit keeps its DOM state.
 */
function softUpdateStringsSurveyData(model: any): void {
  const survey = model.stringsSurvey;
  if (!survey || typeof survey.getAllQuestions !== "function") {
    model.updateStringsSurveyData?.();
    return;
  }
  try {
    survey.getAllQuestions().forEach((matrix: any) => {
      // Each row's ItemValue carries its TranslationItem (see the Translation
      // model's getStringsQuestionData); toJSON() keys are the column names
      // ("default" or the locale code).
      const itemByRow: { [rowValue: string]: any } = {};
      (matrix.rows ?? []).forEach((iv: any) => { itemByRow[iv.value] = iv["translationData"]; });
      (matrix.visibleRows ?? []).forEach((row: any) => {
        const item = itemByRow[row.rowName];
        if (!item || typeof item.toJSON !== "function") return;
        let json = item.toJSON();
        if (typeof json === "string") json = { default: json };
        if (!json) json = {};
        (row.cells ?? []).forEach((cell: any) => {
          const colName = cell?.column?.name;
          const question = cell?.question;
          if (!colName || !question) return;
          const next = json[colName];
          if ((question.value ?? "") !== (next ?? "")) question.value = next;
        });
      });
    });
  } catch(e) {
    // The strings survey did not look like we expect - fall back to the
    // model's own (focus-destroying but always-correct) full refresh.
    model.updateStringsSurveyData?.();
  }
}

/**
 * The refresh work the Logic tab needs after remote records were applied:
 *   - "rebuild": rebuild the whole tab model now (`model.update()`).
 *   - "defer": the local user is currently inside the modal logic-item editor
 *     (mode !== "view"). A `model.update()` would destroy their in-progress
 *     (unsaved) rule, so we postpone the rebuild until they return to the list.
 *
 * Unlike the Translations tab (an always-live inline matrix with a public
 * soft-refresh) the Logic tab edits ONE item at a time in a detail editor and
 * exposes only the full `update()`. So the "don't clobber the local edit"
 * invariant is satisfied by deferring the rebuild, not by a soft merge.
 *
 * Correctness over cheapness: any applied record can change the rules the tab
 * lists or their display text, so in view mode we always rebuild. We
 * deliberately do NOT filter by locator - an incomplete allowlist would leave
 * the list stale (worse than a redundant rebuild).
 */
export type LogicRefreshPlan =
  | { kind: "rebuild" }
  | { kind: "defer" };

export function planLogicRefresh(ctx: { isEditing: boolean }): LogicRefreshPlan {
  return ctx.isEditing ? { kind: "defer" } : { kind: "rebuild" };
}

/**
 * Apply a plan to a live `SurveyLogicUI` model. Returns `true` when the rebuild
 * was deferred, so the caller can remember to flush it once the user leaves the
 * editor (mode -> "view").
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
 * user LEAVES the detail editor - whether they SAVE the rule (Done) or CANCEL
 * it (collapse the panel). Returns an unbind function.
 *
 * Why not just the public `onLogicItemSaved` event? It fires on save only.
 * Consider the case this exists for: A starts a *new* rule (mode "new"), a
 * remote insert from B arrives and is deferred, then A *cancels*. No save event
 * ever fires, so a flush bound to `onLogicItemSaved` alone would never run and
 * B's rule would stay missing from A's list until the tab is re-activated.
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

// Minimal structural view of the creator the refresher needs; the real
// SurveyCreatorModel satisfies it.
export interface IRefreshableCreator {
  activeTab: string;
  survey: any;
  getPlugin(name: string, create?: boolean): any;
}

/**
 * Keeps the Translation and Logic tab snapshot models in sync after remote
 * journal records were applied to the live survey in place.
 *
 * The Designer and Preview tabs bind to `creator.survey` directly and react to
 * in-place mutations on their own. Translation and Logic, by contrast, build a
 * private snapshot model (a TranslationGroup tree + a `stringsSurvey` matrix;
 * a list of logic rules) only on activation, so they must be refreshed
 * explicitly when a peer's edit lands underneath them.
 *
 * Owned by `JournalPlugin`, which calls `refresh()` after every `apply()`.
 */
export class JournalTabRefresher {
  // A remote refresh that arrived while the Logic tab's detail editor was open
  // is deferred; this remembers to rebuild once the user returns to the list.
  private pendingLogicRebuild = false;
  // The Logic model our deferred-rebuild flush is bound to, plus the unbind
  // function for those bindings. The creator recreates the model whenever it
  // rebuilds the survey (e.g. `creator.JSON = ...`), so we re-bind when it
  // changes.
  private logicWatchedModel: any = null;
  private logicUnbind: (() => void) | null = null;

  constructor(private creator: IRefreshableCreator) { }

  public refresh(records: Array<IJournalRecord>): void {
    if (!records.length) return;
    this.refreshTranslation(records);
    this.refreshLogic();
  }

  public dispose(): void {
    if (!!this.logicUnbind)this.logicUnbind();
    this.logicUnbind = null;
    this.logicWatchedModel = null;
    this.pendingLogicRebuild = false;
  }

  private refreshTranslation(records: Array<IJournalRecord>): void {
    if (this.creator.activeTab !== "translation") return;
    const model = this.creator.getPlugin("translation", false)?.model;
    if (!model) return;
    const plan = planTranslationRefresh(records, {
      visible: new Set<string>(model.getVisibleLocales?.() ?? []),
      localeCodes: new Set<string>(surveyLocalization.getLocales()),
      isLocalizableTarget: (target) => this.isLocalizableTarget(target)
    });
    applyTranslationRefresh(model, plan);
  }

  /** Does the propertyChanged target address a localizable property (a default-locale text edit)? */
  private isLocalizableTarget(target: string): boolean {
    const outer = splitPointer(target);
    const obj: any = resolveLocator(outer.container, this.creator.survey);
    if (!obj || typeof obj.getType !== "function") return false;
    const prop = Serializer.getOriginalProperty(obj, outer.key);
    return !!prop && prop.isLocalizable;
  }

  private refreshLogic(): void {
    if (this.creator.activeTab !== "logic") return;
    const model = this.creator.getPlugin("logic", false)?.model;
    if (!model) return;

    // (Re)bind the flush to the current model. We only swap when the model
    // instance itself changed (it is recreated on JSON reset).
    if (this.logicWatchedModel !== model) {
      if (!!this.logicUnbind)this.logicUnbind();

      // Idempotent: clears the pending flag, so a double-fire (save triggers
      // both onLogicItemSaved and onEndEditing) is harmless.
      const flush = (): void => {
        if (!this.pendingLogicRebuild) return;
        this.pendingLogicRebuild = false;
        model.update?.();
      };

      model.onLogicItemSaved?.add?.(flush);
      const unbindEnd = bindLogicEditEndFlush(model, flush);
      this.logicUnbind = (): void => {
        model.onLogicItemSaved?.remove?.(flush);
        unbindEnd();
      };
      this.logicWatchedModel = model;
    }

    const plan = planLogicRefresh({ isEditing: model.mode !== "view" });
    const deferred = applyLogicRefresh(model, plan);
    if (deferred)this.pendingLogicRebuild = true;
  }
}
