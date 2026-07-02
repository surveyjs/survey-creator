import { surveyLocalization } from "survey-core";
import type { ISyncMessage } from "./undo-redo-serializer";
import { planTranslationRefresh, applyTranslationRefresh } from "./translation-refresh";
import { planLogicRefresh, applyLogicRefresh, bindLogicEditEndFlush } from "./logic-refresh";

// Minimal structural view of the creator the refresher needs. The real
// SurveyCreatorModel satisfies it; the headless server's duck-typed creator
// ({ undoRedoManager, survey }) does NOT, which is exactly why the plugin only
// builds a refresher when these members are present.
export interface IRefreshableCreator {
    activeTab: string;
    getPlugin(name: string, create?: boolean): any;
}

/**
 * Keeps the Translation and Logic tab snapshot models in sync after a remote
 * message was applied to the live survey in place.
 *
 * The Designer and Preview tabs bind to `creator.survey` directly and react to
 * in-place mutations on their own. Translation and Logic, by contrast, build a
 * private snapshot model (a TranslationGroup tree + a `stringsSurvey` matrix;
 * a list of logic rules) only on activation, so they must be refreshed
 * explicitly when a peer's edit lands underneath them.
 *
 * Owned by `UndoRedoSyncPlugin`, which calls `refresh()` at the end of every
 * `applySerialized()`. The state that used to live in the React client (the
 * deferred logic rebuild + its flush binding) now lives here.
 */
export class TabSyncRefresher {
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

  public refresh(message: ISyncMessage): void {
    this.refreshTranslation(message);
    this.refreshLogic(message);
  }

  public dispose(): void {
    this.logicUnbind?.();
    this.logicUnbind = null;
    this.logicWatchedModel = null;
    this.pendingLogicRebuild = false;
  }

  // Remote edits mutate `creator.survey` in place. The Translations tab keeps
  // its own snapshot model (a TranslationGroup tree + a `stringsSurvey` matrix)
  // that is only rebuilt on activation. So while that tab is active we refresh
  // it with the cheapest correct action (see translation-refresh.ts): a
  // structural change rebuilds; otherwise we re-read the snapshot data and
  // register any not-yet-listed locale as an unchecked row (columns unchanged).
  private refreshTranslation(message: ISyncMessage): void {
    if (this.creator.activeTab !== "translation") return;
    const model = this.creator.getPlugin("translation", false)?.model;
    if (!model) return;
    const plan = planTranslationRefresh(message, {
      visible: new Set<string>(model.getVisibleLocales?.() ?? []),
      localeCodes: new Set<string>(surveyLocalization.getLocales())
    });
    applyTranslationRefresh(model, plan);
  }

  // The Logic tab, like Translations, keeps its own snapshot model that does
  // not react to in-place survey mutations. We rebuild it while it is the
  // active tab. The catch: the Logic tab edits ONE rule at a time in a modal
  // detail editor and exposes only a full `model.update()` (no soft refresh).
  // Rebuilding mid-edit would discard the user's unsaved rule, so while a rule
  // is open (`mode !== "view"`) we DEFER the rebuild and flush it when the user
  // LEAVES the editor on Done (save) AND on Cancel (collapsing the panel).
  // The model's `mode` is a plain getter, not a tracked survey property, so we
  // hook both edit-end signals via `onLogicItemSaved` (save) and
  // `bindLogicEditEndFlush` (the `mode -> "view"` transition, which covers
  // cancel too). See logic-refresh.ts for why both are needed.
  private refreshLogic(message: ISyncMessage): void {
    if (this.creator.activeTab !== "logic") return;
    const model = this.creator.getPlugin("logic", false)?.model;
    if (!model) return;

    // (Re)bind the flush to the current model. We only swap when the model
    // instance itself changed (it is recreated on JSON reset).
    if (this.logicWatchedModel !== model) {
      this.logicUnbind?.();

      // Idempotent: clears the pending flag, so a double-fire (save
      // triggers both onLogicItemSaved and onEndEditing) is harmless.
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

    const plan = planLogicRefresh(message, { isEditing: model.mode !== "view" });
    const deferred = applyLogicRefresh(model, plan);
    if (deferred)this.pendingLogicRebuild = true;
  }
}
