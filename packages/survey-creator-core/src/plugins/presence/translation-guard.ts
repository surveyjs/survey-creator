import { SurveyCreatorModel } from "../../creator-base";
import { editorLocalization } from "../../editorLocalization";
import { showConfirmDialog } from "../../utils/confirm-dialog";
import { IPresencePeer } from "./presence-state";

// Guards the Translations-tab language list against deleting a locale that a
// remote participant is currently working on. A peer "works on" a locale when
// their presence claims it: the sticky `trLoc` while they stay on the
// Translations tab, or a live `tr` focus for older senders that predate the
// sticky field. On conflict the removal is vetoed and a danger dialog names
// the peers; confirming re-runs the removal through the regular pipeline
// (translation.ts row handlers -> deleteLocaleStrings -> undo transaction ->
// journal records), so nothing is duplicated here.
//
// Known gaps, both deliberate:
//  - `SurveyCreatorModel.deleteLocaleStrings` builds its own throwaway
//    Translation and never touches the language-list survey - programmatic
//    deletions bypass this guard.
//  - A peer typing into a cell of a locale that was deleted anyway re-creates
//    the locale with their next keystroke (journal records resurrect it) -
//    tracked as a separate task.
export class TranslationDeleteGuard {
  private bypass = false;

  constructor(private creator: SurveyCreatorModel,
    private getPeers: () => ReadonlyMap<string, IPresencePeer>) {
    creator.onSurveyInstanceCreated.add(this.onSurveyInstanceCreated);
  }

  public dispose(): void {
    this.creator.onSurveyInstanceCreated.remove(this.onSurveyInstanceCreated);
  }

  private onSurveyInstanceCreated = (_: unknown, options: any): void => {
    if (options?.area !== "translation-tab:language-list") return;
    options.survey?.onMatrixRowRemoving?.add(this.onRowRemoving);
  };

  private onRowRemoving = (_: unknown, options: any): void => {
    if (this.bypass || options?.question?.name !== "locales") return;
    // An empty name is the default locale - its remove button is suppressed
    // by the translation tab itself, so nothing to guard.
    const locale: string = options.question.value?.[options.rowIndex]?.name;
    if (!locale) return;
    const names = this.peerNamesWorkingOn(locale);
    if (names.length === 0) return;
    options.allow = false;
    this.confirm(names, locale, () => this.forceRemove(options.question, locale));
  };

  private peerNamesWorkingOn(locale: string): Array<string> {
    const names: Array<string> = [];
    this.getPeers().forEach((peer) => {
      const state: any = peer?.state;
      if (state?.tab !== "translation") return;
      const working = state.trLoc === locale ||
        (state.focus?.area === "tr" && state.focus.l === locale);
      if (working)names.push(peer.name || "?");
    });
    return names;
  }

  private forceRemove(matrix: any, locale: string): void {
    // Recompute the index - rows may have shifted while the dialog was open;
    // when the row is already gone there is nothing left to do.
    const value = Array.isArray(matrix?.value) ? matrix.value : [];
    const index = value.findIndex((row: any) => row?.name === locale);
    if (index < 0) return;
    this.bypass = true;
    try {
      // false: skip the generic confirmDelete - the danger dialog already asked.
      matrix.removeRow(index, false);
    } finally {
      this.bypass = false;
    }
  }

  private confirm(names: Array<string>, locale: string, onApply: () => void): void {
    const key = names.length > 1 ? "ed.translationDeleteLanguageInUseMany" : "ed.translationDeleteLanguageInUse";
    const message = editorLocalization.getString(key)["format"](
      names.join(", "), editorLocalization.getLocaleName(locale));
    showConfirmDialog(this.creator, {
      category: "danger",
      title: editorLocalization.getString("ed.translationDeleteLanguageInUseTitle"),
      message: message,
      applyText: editorLocalization.getString("ed.translationDeleteLanguageInUseConfirm"),
      cancelText: editorLocalization.getString("ed.translationDeleteLanguageInUseCancel"),
      iconName: "icon-warning-24x24",
      showCloseButton: false,
      onApply: () => { onApply(); return true; },
      onCancel: () => { return; }
    });
  }
}
