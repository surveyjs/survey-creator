import {
  Base, ILocalizableString, ItemValue, LocalizableString, Serializer, SurveyModel, property
} from "survey-core";
import { ISurveyCreatorOptions } from "../../creator-settings";
import { editableStringRendererName } from "../../creator-base";
import { IUndoRedoAction, UndoRedoLocaleTextAction } from "../../plugins/undo-redo/undo-redo-manager";
import { Translation, TranslationGroup, TranslationItem } from "./translation";

// The scoped survey-level strings grid shown for the synthetic "Survey Strings" entry.
// Routes its matrix edits through the owner's locale-aware undoable action instead of a direct write.
export class TranslationSurveyStrings extends Translation {
  constructor(survey: SurveyModel, options: ISurveyCreatorOptions, private owner: TranslationSideBySide) {
    super(survey, options, true);
  }
  protected setItemLocText(item: TranslationItem, locale: string, text: string): void {
    this.owner.performItemLocTextAction(item, locale, text);
  }
}

export class TranslationSideBySide extends Translation {
  public static readonly surveyStringsPageId = "svc:survey-strings";
  @property() sourceLocale: string;
  @property() destinationLocale: string;
  @property() selectedPageName: string;
  @property({ defaultValue: false }) showSurveyStrings: boolean;
  @property() sourceSurvey: SurveyModel;
  @property() destinationSurvey: SurveyModel;
  // Wired by TabTranslationPlugin to record the action in the creator's undo/redo stack.
  public doUndoableAction: (action: IUndoRedoAction, title: string) => void = (action) => action.apply();

  private surveyStringsTranslationValue: TranslationSurveyStrings;
  private byDstLocStr = new Map<ILocalizableString, TranslationItem>();
  private byRealLocStr = new Map<ILocalizableString, Array<ILocalizableString>>();
  private _syncing: boolean = false;

  constructor(survey: SurveyModel, options: ISurveyCreatorOptions = null) {
    super(survey, options, false);
    this.showAllStrings = true;
  }
  public get isSideBySide(): boolean {
    return true;
  }
  public get surveyStringsTranslation(): Translation {
    if (!this.surveyStringsTranslationValue) {
      this.surveyStringsTranslationValue = this.createSurveyStringsTranslation();
    }
    return this.surveyStringsTranslationValue;
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "sourceLocale" || name === "destinationLocale") {
      this.updateInstanceLocales();
      this.applySurveyStringsLocales();
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
      if (!!this.surveyStringsTranslationValue && this.surveyStringsTranslationValue.survey !== this.survey) {
        this.surveyStringsTranslationValue.dispose();
        this.surveyStringsTranslationValue = undefined;
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
  // undo/redo rollbacks, survey-level strings grid edits, or any external modification.
  public onCreatorSurveyPropertyChanged(obj: Base, propName: string): void {
    if (this._syncing || this.isDisposed || !this.destinationSurvey) return;
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
      if (!!this.surveyStringsTranslationValue) {
        this.surveyStringsTranslationValue.updateStringsSurveyData();
      }
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
  public dispose(): void {
    this.disposeInstances();
    if (!!this.surveyStringsTranslationValue) {
      this.surveyStringsTranslationValue.dispose();
      this.surveyStringsTranslationValue = undefined;
    }
    this.doUndoableAction = undefined;
    super.dispose();
  }
  private createInstance(json: any, reason: string): SurveyModel {
    return this.options.createSurvey(json, reason, this, (survey: SurveyModel): void => {
      this.makeSurveyIdSpaceUnique(survey);
      survey.setDesignMode(true);
      survey.lazyRenderEnabled = true;
    });
  }
  private setupSourceSurvey(survey: SurveyModel): void {
    // No renderer at all: suppresses the built-in design-mode string editor, the source pane is read-only.
    survey.getRendererForString = (): string => undefined;
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
      survey.dispose();
    });
    this.sourceSurvey = undefined;
    this.destinationSurvey = undefined;
    this.byDstLocStr = new Map<ILocalizableString, TranslationItem>();
    this.byRealLocStr = new Map<ILocalizableString, Array<ILocalizableString>>();
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
  private getLocStrByName(obj: Base, name: string): ILocalizableString {
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
  private createSurveyStringsTranslation(): TranslationSurveyStrings {
    const res = new TranslationSurveyStrings(this.survey, this.options, this);
    res.readOnly = this.readOnly;
    res.translationStringVisibilityCallback = (obj: Base, propertyName: string, visible: boolean): boolean => {
      // Scope the grid to survey-level strings: hide everything that belongs to pages and their content.
      if (obj !== this.survey) return false;
      const callback = this.translationStringVisibilityCallback;
      return !!callback ? callback(obj, propertyName, visible) : visible;
    };
    res.showAllStrings = true;
    this.applySurveyStringsLocales(res);
    return res;
  }
  // Shows exactly two locale columns - source and destination - in the survey-level strings grid.
  private applySurveyStringsLocales(target?: TranslationSurveyStrings): void {
    const translation = target || this.surveyStringsTranslationValue;
    if (!translation || !translation.localesQuestion) return;
    const source = this.sourceLocale || "";
    const destination = this.destinationLocale || "";
    const locales = source === destination ? [source] : [source, destination];
    translation.localesQuestion.value = locales.map(loc => {
      return { isSelected: true, name: loc, displayName: translation.getLocaleName(loc) };
    });
  }
}
