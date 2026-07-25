import {
  Base, ILocalizableString, ItemValue, LocalizableString,
  Serializer, SurveyModel, property, surveyLocalization
} from "survey-core";
import { ISurveyCreatorOptions } from "../../creator-settings";
import { editableStringRendererName } from "../../creator-base";
import { IUndoRedoAction, UndoRedoLocaleTextAction } from "../../plugins/undo-redo/undo-redo-manager";
import { Translation, TranslationGroup, TranslationItem } from "./translation";

export class TranslationSideBySide extends Translation {
  @property() selectedPageName: string;
  @property() sourceSurvey: SurveyModel;
  @property() destinationSurvey: SurveyModel;
  // Wired by TabTranslationPlugin to record the action in the creator's undo/redo stack.
  public doUndoableAction: (action: IUndoRedoAction, title: string) => void = (action) => action.apply();

  private byDstLocStr = new Map<ILocalizableString, TranslationItem>();
  private byRealLocStr = new Map<ILocalizableString, Array<ILocalizableString>>();
  protected _syncing: boolean = false;

  constructor(survey: SurveyModel, options: ISurveyCreatorOptions = null, hasUI: boolean = false) {
    super(survey, options, hasUI);
    // The forms view maps every localizable string of the survey copies; the grid view keeps
    // the default ("used strings only") and lets the user switch via the toolbar dropdown.
    if (!this.isSideBySideGrid) {
      this.showAllStrings = true;
    }
  }
  public get isSideBySide(): boolean {
    return true;
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "sourceLocale" || name === "destinationLocale") {
      if (name === "destinationLocale") {
        this.updateSurveyLocale();
      }
      this.updateInstanceLocales();
    }
    if (name === "selectedPageName") {
      this.updateInstancePages();
    }
  }
  public rebuildInstances(): void {
    if (this.isDisposed) return;
    const wasSyncing = this._syncing;
    this._syncing = true;
    try {
      this.disposeInstances();
      if (!this.root) {
        this.reset();
      }
      const json = this.survey.toJSON();
      this.sourceSurvey = this.createInstance(json, "translation_source");
      this.destinationSurvey = this.createInstance(json, "translation_target");
      this.setupSourceSurvey(this.sourceSurvey);
      this.setupDestinationSurvey(this.destinationSurvey);
      this.buildMappings();
      this.updateInstanceLocales();
      this.updateInstancePages();
    } finally {
      this._syncing = wasSyncing;
    }
  }
  // Called (through the plugin's onDesignerSurveyPropertyChanged hook) when the real survey changes:
  // undo/redo rollbacks or any external modification.
  public onCreatorSurveyPropertyChanged(obj: Base, propName: string): void {
    if (this._syncing || this.isDisposed || !this.destinationSurvey) return;
    if (obj === this.survey && propName === "locale") {
      this.followSurveyLocale();
      return;
    }
    const realLocStr = this.getLocStrByName(obj, propName);
    const copies = !!realLocStr ? this.byRealLocStr.get(realLocStr) : undefined;
    if (!copies) {
      // Not a mapped localizable string - a structural change (element added/removed, etc.).
      this.rebuildInstances();
      return;
    }
    this._syncing = true;
    try {
      this.mirrorLocStrIntoCopies(realLocStr, copies);
    } finally {
      this._syncing = false;
    }
  }
  // The destination copy's onPropertyValueChangedCallback: forwards inline edits to the real survey.
  public forwardDestinationChange(name: string, sender: Base): void {
    if (this._syncing || this.isDisposed) return;
    const copyLocStr = this.getLocStrByName(sender, name);
    if (!copyLocStr) return;
    const item = this.byDstLocStr.get(copyLocStr);
    const locale = this.destinationLocale || "";
    if (!item) {
      // An editable string the mapping does not know about - the trees drifted, self-heal.
      // The value typed into the copy cannot be forwarded reliably, so it is dropped with the rebuild.
      this.rebuildInstances();
      return;
    }
    const stored = copyLocStr.getLocaleText(locale) || "";
    const processed = this.getProcessedTranslationItemText(locale, item.locString, stored, item.context) || "";
    const current = item.locString.getLocaleText(locale) || "";
    if (processed === current) return;
    this._syncing = true;
    try {
      this.doUndoableAction(new UndoRedoLocaleTextAction(item, locale, processed), "translation changed");
      if (processed !== stored) {
        // The options hook rewrote the text - reflect the processed value back into the copies.
        const copies = this.byRealLocStr.get(item.locString);
        if (!!copies)this.mirrorLocStrIntoCopies(item.locString, copies);
      }
    } finally {
      this._syncing = false;
    }
  }
  // Routes a translation item edit on the real survey through the locale-aware undoable action.
  public performItemLocTextAction(item: TranslationItem, locale: string, newText: string): void {
    const current = item.locString.getLocaleText(locale) || "";
    if ((newText || "") === current) return;
    this.doUndoableAction(new UndoRedoLocaleTextAction(item, locale, newText), "translation changed");
  }
  // Keeps the vertical scrollbars of the two panes in sync. The UI components pass their
  // scrollable containers here; passing null/undefined (on unmount) detaches the listener.
  public setSourceScrollElement(element: HTMLElement): void {
    this.setScrollElement(0, element);
  }
  public setDestinationScrollElement(element: HTMLElement): void {
    this.setScrollElement(1, element);
  }
  private scrollElements: Array<HTMLElement> = [undefined, undefined];
  private scrollHandlers: Array<() => void> = [undefined, undefined];
  private setScrollElement(index: number, element: HTMLElement): void {
    const prev = this.scrollElements[index];
    if (prev === element) return;
    if (!!prev) prev.removeEventListener("scroll", this.scrollHandlers[index]);
    this.scrollElements[index] = element || undefined;
    this.scrollHandlers[index] = undefined;
    if (!element) return;
    const handler = (): void => this.syncScroll(index);
    this.scrollHandlers[index] = handler;
    element.addEventListener("scroll", handler);
  }
  // Mirrors scrollTop into the other pane. The mirrored pane's echo scroll event finds the
  // values already equal and stops, so no re-entrancy flag is needed.
  private syncScroll(index: number): void {
    const from = this.scrollElements[index];
    const to = this.scrollElements[1 - index];
    if (!from || !to || to.scrollTop === from.scrollTop) return;
    to.scrollTop = from.scrollTop;
  }
  public dispose(): void {
    this.setSourceScrollElement(undefined);
    this.setDestinationScrollElement(undefined);
    this.disposeInstances();
    this.doUndoableAction = undefined;
    super.dispose();
  }
  private createInstance(json: any, reason: string): SurveyModel {
    return this.options.createSurvey(json, reason, this, (survey: SurveyModel): void => {
      this.makeSurveyIdSpaceUnique(survey);
      survey.setDesignMode(true);
      survey.lazyRenderEnabled = true;
      // The panes show the navigation buttons the runtime survey would show: the callback
      // gets the final say over the design-mode guard.
      survey.isNavigationButtonsShowingCallback = (show: string): string => show;
      // Required questions must not block Next while navigating the panes.
      survey.validationEnabled = false;
    });
  }
  private setupSourceSurvey(survey: SurveyModel): void {
    // No renderer at all: suppresses the built-in design-mode string editor, the source pane is read-only.
    survey.getRendererForString = (): string => undefined;
    // Completing or previewing the copy would swap the pane away from the translation surface.
    this.suppressNavigationActions(survey, ["sv-nav-preview", "sv-nav-complete"]);
    // Prev/Next/Start navigate the source copy for real; the destination pane and the page
    // dropdown follow through the selectedPageName observer.
    survey.onCurrentPageChanged.add((sender: SurveyModel): void => {
      if (this.isDisposed || !sender.currentPage) return;
      this.selectedPageName = sender.currentPage.name;
    });
  }
  private setupDestinationSurvey(survey: SurveyModel): void {
    const creator = this.creatorModel;
    if (!!creator) {
      survey.getRendererForString = (element: Base, name: string, item?: ItemValue): string => {
        return creator.isStringInplacelyEditable(element, name, item) ? editableStringRendererName : undefined;
      };
      survey.getRendererContextForString = (element: Base, locStr: LocalizableString, item?: ItemValue): any => {
        if (creator.isStringInplacelyEditable(element, locStr.name, item)) {
          return { creator: creator, element: element, locStr: locStr };
        }
        return <any>locStr;
      };
    }
    survey.onPropertyValueChangedCallback = (name: string, oldValue: any, newValue: any, sender: Base): void => {
      this.forwardDestinationChange(name, sender);
    };
    // Clicking a destination nav button means "edit this caption" - it must never navigate,
    // preview or complete. Page changes reach this pane only through selectedPageName.
    this.suppressNavigationActions(survey,
      ["sv-nav-start", "sv-nav-prev", "sv-nav-next", "sv-nav-preview", "sv-nav-complete"]);
  }
  private suppressNavigationActions(survey: SurveyModel, ids: Array<string>): void {
    ids.forEach(id => {
      const action = survey.navigationBar.getActionById(id);
      if (!!action) action.action = (): void => {};
    });
  }
  // The creator instance when the model is created by the translation plugin. The options object
  // is checked structurally so the model stays constructible with EmptySurveyCreatorOptions in tests.
  private get creatorModel(): any {
    const options = <any>this.options;
    return !!options && typeof options.isStringInplacelyEditable === "function" ? options : undefined;
  }
  private disposeInstances(): void {
    [this.sourceSurvey, this.destinationSurvey].forEach(survey => {
      if (!survey) return;
      survey.getRendererForString = undefined;
      survey.getRendererContextForString = undefined;
      survey.onPropertyValueChangedCallback = undefined;
      survey.isNavigationButtonsShowingCallback = undefined;
      survey.dispose();
    });
    this.sourceSurvey = undefined;
    this.destinationSurvey = undefined;
    this.byDstLocStr = new Map<ILocalizableString, TranslationItem>();
    this.byRealLocStr = new Map<ILocalizableString, Array<ILocalizableString>>();
  }
  // Keeps the real survey's locale in sync with the language being translated. An empty
  // destination means the default language; an explicit default-locale name on the survey
  // ("en") is the same language, so it is left untouched in that case.
  private updateSurveyLocale(): void {
    if (!this.survey || this.isDisposed) return;
    const locale = this.destinationLocale || "";
    const current = this.survey.locale || "";
    if (current === locale || (!locale && current === surveyLocalization.defaultLocale)) return;
    const wasSyncing = this._syncing;
    this._syncing = true;
    try {
      this.survey.locale = locale;
    } finally {
      this._syncing = wasSyncing;
    }
  }
  private updateInstanceLocales(): void {
    const wasSyncing = this._syncing;
    // Changing the locale fires strChanged on every localizable string of the copy;
    // the flag keeps that cascade out of forwardDestinationChange.
    this._syncing = true;
    try {
      if (!!this.sourceSurvey)this.sourceSurvey.locale = this.sourceLocale || "";
      if (!!this.destinationSurvey)this.destinationSurvey.locale = this.destinationLocale || "";
    } finally {
      this._syncing = wasSyncing;
    }
  }
  private updateInstancePages(): void {
    const name = this.selectedPageName;
    if (!name) return;
    [this.sourceSurvey, this.destinationSurvey].forEach(survey => {
      if (!survey) return;
      const page = survey.getPageByName(name);
      if (!!page) survey.currentPage = page;
    });
  }
  private buildMappings(): void {
    this.byDstLocStr = new Map<ILocalizableString, TranslationItem>();
    this.byRealLocStr = new Map<ILocalizableString, Array<ILocalizableString>>();
    const realItems = this.collectItems(this.root, new Map<string, TranslationItem>());
    const dstItems = this.collectItems(this.createCopyRoot(this.destinationSurvey), new Map<string, TranslationItem>());
    const srcItems = this.collectItems(this.createCopyRoot(this.sourceSurvey), new Map<string, TranslationItem>());
    realItems.forEach((item: TranslationItem, key: string) => {
      const copies = new Array<ILocalizableString>();
      const dstItem = dstItems.get(key);
      if (!!dstItem) {
        this.byDstLocStr.set(dstItem.locString, item);
        copies.push(dstItem.locString);
      }
      const srcItem = srcItems.get(key);
      if (!!srcItem) {
        copies.push(srcItem.locString);
      }
      if (copies.length > 0) {
        this.byRealLocStr.set(item.locString, copies);
      }
    });
  }
  private createCopyRoot(survey: SurveyModel): TranslationGroup {
    const root = new TranslationGroup("survey", survey, this);
    root.setAsRoot();
    root.reset();
    return root;
  }
  private collectItems(group: TranslationGroup, items: Map<string, TranslationItem>): Map<string, TranslationItem> {
    group.locItems.forEach(item => items.set(group.fullName + "." + item.name, item));
    group.groups.forEach(child => this.collectItems(child, items));
    return items;
  }
  // Resolves the localizable string a property change refers to. Some objects report the change
  // themselves while the string lives on a nested object (a matrix column's title is stored on its
  // template question), so the serialization metadata is used when the own-strings hash has no entry.
  // An external survey.locale change (an undo/redo rollback) - follow it instead of rebuilding.
  protected followSurveyLocale(): void {
    const locale = this.survey.locale;
    this.destinationLocale = !!locale && locale !== surveyLocalization.defaultLocale ? locale : "";
  }
  protected getLocStrByName(obj: Base, name: string): ILocalizableString {
    if (!obj) return undefined;
    if (typeof (<any>obj).getLocalizableString === "function") {
      const res = (<any>obj).getLocalizableString(name);
      if (!!res) return res;
    }
    if (typeof obj.getType !== "function") return undefined;
    const prop = Serializer.findProperty(obj.getType(), name);
    if (!!prop && !!prop.serializationProperty) {
      return <ILocalizableString>(<any>obj)[prop.serializationProperty];
    }
    return undefined;
  }
  private mirrorLocStrIntoCopies(realLocStr: ILocalizableString, copies: Array<ILocalizableString>): void {
    const json = (<LocalizableString>realLocStr).getJson();
    copies.forEach(copy => {
      (<LocalizableString>copy).setJson(json);
      (<LocalizableString>copy).strChanged();
    });
  }
}

// The grid alternative of the side-by-side mode: instead of two rendered survey panes it shows
// the strings grid of the base Translation class with a source and a destination locale column.
// Page filtering (filteredPage) and the all/used strings filter work as in the standard mode.
export class TranslationSideBySideGrid extends TranslationSideBySide {
  constructor(survey: SurveyModel, options: ISurveyCreatorOptions = null) {
    super(survey, options, true);
    this.useSourceDestinationColumns = true;
  }
  public get isSideBySideGrid(): boolean {
    return true;
  }
  // The grid view has no survey copies to rebuild - re-create the grid over the current survey,
  // dropping a page filter that no longer belongs to it (survey replaced, structural undo).
  public rebuildInstances(): void {
    if (this.isDisposed) return;
    if (!!this.filteredPage && this.survey.pages.indexOf(this.filteredPage) < 0) {
      this.filteredPage = null; // the property's onSet rebuilds the grid
      return;
    }
    this.reset();
  }
  public onCreatorSurveyPropertyChanged(obj: Base, propName: string): void {
    if (this._syncing || this.isDisposed) return;
    if (obj === this.survey && propName === "locale") {
      this.followSurveyLocale();
      return;
    }
    if (!this.getLocStrByName(obj, propName)) {
      // Not a localizable string - a structural change (element added/removed by undo/redo, etc.).
      this.rebuildInstances();
      return;
    }
    // A localizable string changed on the real survey (an undo/redo rollback or an external
    // edit): refresh the grid cells.
    this.updateStringsSurveyData();
  }
  // Routes grid edits through the creator's undo/redo stack - the base implementation writes
  // directly into the localizable string and would bypass it.
  protected setItemLocText(item: TranslationItem, locale: string, text: string): void {
    this._syncing = true;
    try {
      this.performItemLocTextAction(item, locale, text);
    } finally {
      this._syncing = false;
    }
  }
  // The grid can be scoped to a single page; CSV export must still cover the whole survey,
  // exactly like the forms view does.
  public exportToCSV(): string {
    const translation = new Translation(this.survey, this.options, false);
    translation.showAllStrings = true;
    translation.translationStringVisibilityCallback = this.translationStringVisibilityCallback;
    translation.localeInitialVisibleCallback = this.localeInitialVisibleCallback;
    try {
      return translation.exportToCSV();
    } finally {
      translation.dispose();
    }
  }
}
