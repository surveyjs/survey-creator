import { Helpers, SurveyModel } from "survey-core";
import { SurveyCreatorModel, editorLocalization, CreatorPresetBase, ICreatorOptions, getLocString } from "survey-creator-core";

export interface ICreatorPresetEditorSetup {
  creator: SurveyCreatorModel;
  createCreator(options: ICreatorOptions): SurveyCreatorModel;
}

export class CreatorPresetEditableBase {
  public parent: CreatorPresetEditableBase;
  protected get navigationPanelName(): string { return this.path + "_navigation"; }
  public children: Array<CreatorPresetEditableBase> = [];
  public constructor(public preset: CreatorPresetBase) {
  }
  public get path() { return this.preset.getPath(); }
  protected getJsonPath(model: SurveyModel): string { return this.path; }
  public get fullPath() {
    let prefix = this.parent ? this.parent.fullPath : "";
    if (this.path && prefix) {
      prefix += "_";
    }
    return prefix + this.path;
  }
  public get pageName(): string { return "page_" + this.fullPath; }
  public getPageTitle(model: SurveyModel): string { return model.getPageByName(this.pageName).title; }
  public getPageShortTitle(model: SurveyModel): string { return model.getPageByName(this.pageName).navigationTitle; }
  protected get mainPanelName() { return this.path + "_mainPanel"; }
  public getMainElementNames() : any { return [this.mainPanelName]; }
  public getMainPanelName() : any { return this.mainPanelName; }
  public createPages(): Array<any> {
    const res = [];
    const mainPage = this.createMainPage();
    if (mainPage) {
      res.push(mainPage);
    }
    this.children.forEach(item => {
      const pages = item.createPages();
      if (Array.isArray(pages)) {
        pages.forEach(page => res.push(page));
      }
    });
    return res;
  }
  public get questionNames(): string[] { return []; }
  public notifyCallback = (message: string) => {};
  public validate(model: SurveyModel): boolean {
    if (!this.validateCore(model)) return false;
    for (let i = 0; i < this.children.length; i ++) {
      if (!this.children[i].validate(model)) return false;
    }
    return true;
  }
  protected validateCore(model: SurveyModel): boolean {
    return true;
  }
  protected createMainPage(): any {
    const res = this.createMainPageCore();
    if (res) {
      res.name = this.pageName;
    }
    return res;
  }
  protected getBoolVisibleIf(name: string, isTrue: boolean = true): string { return "{" + name + "}=" + (isTrue ? "true" : "false"); }
  protected getTextVisibleIf(name: string, val: string): string { return "{" + name + "}='" + val + "'"; }
  protected getNotEmptyVisibleIf(name: string): string { return "{" + name + "} notempty"; }
  protected createMainPageCore(): any { return undefined; }
  public getNavigationElementName() : any { return this.navigationPanelName; }
  public getJsonValue(model: SurveyModel, creator: SurveyCreatorModel, defaultJson?: any): any {
    const page = model.getPageByName(this.pageName);
    const core = page && page.isVisible ? this.getJsonValueCore(model, creator, defaultJson) : undefined;
    let hasValue = !!core;
    const res = hasValue ? core : {};
    this.children.forEach(item => {
      const val = item.getJsonValue(model, creator);
      if (!!val) {
        hasValue = true;
        res[item.getJsonPath(model)] = val;
      }
    });
    return hasValue ? res : undefined;
  }
  public getDefaultJsonValue(creator: SurveyCreatorModel) {
    const json = this.getDefaultJsonValueCore(creator);
    this.children.forEach(item => json[item.path] = item.getDefaultJsonValueCore(creator));
    return json;
  }
  public setJsonLocalizationStrings(model: SurveyModel, locStrs: any): void {
    this.setJsonLocalizationStringsCore(model, locStrs);
    this.children.forEach(item => item.setJsonLocalizationStrings(model, locStrs));
  }
  public updateJsonLocalizationStrings(locStrs: any): void {
    this.updateJsonLocalizationStringsCore(locStrs);
    this.children.forEach(item => item.updateJsonLocalizationStrings(locStrs));
  }
  public dispose(): void {
    this.disposeCore();
    this.children.forEach(item => item.dispose());
  }
  public setupQuestions(model: SurveyModel, creatorSetup: ICreatorPresetEditorSetup): void {
    this.setupQuestionsCore(model, creatorSetup);
    this.children.forEach(item => {
      item.setupQuestions(model, creatorSetup);
    });
  }
  public resetToDefaults(model: SurveyModel, notify = true): void {
    this.restoreValuesFromDefault(model);
    this.notifyCallback(this.getPageTitle(model) + " " + getLocString("presets.editor.resoredToDefault"));
    this.children.forEach(item => {
      item.resetToDefaults(model, notify);
    });
  }
  public setupOnCurrentPage(model: SurveyModel, creator: SurveyCreatorModel, active: boolean): void {
    this.setupOnCurrentPageCore(model, creator, active);
    this.children.forEach(item => {
      item.setupOnCurrentPage(model, creator, active);
    });
  }
  public updateOnValueChanged(model: SurveyModel, name: string): void {
    this.updateOnValueChangedCore(model, name);
    this.children.forEach(item => {
      item.updateOnValueChanged(model, name);
    });
  }
  public updateOnMatrixDetailPanelVisibleChanged(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    this.updateOnMatrixDetailPanelVisibleChangedCore(model, creator, options);
    this.children.forEach(item => {
      item.updateOnMatrixDetailPanelVisibleChanged(model, creator, options);
    });
  }
  public onGetMatrixRowActions(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    this.onGetMatrixRowActionsCore(model, creator, options);
    this.children.forEach(item => {
      item.onGetMatrixRowActions(model, creator, options);
    });
  }
  public onMatrixRowDragOver(model: SurveyModel, creator: SurveyCreatorModel, options: any): void { }
  public onMatrixRowRemoving(model: SurveyModel, creator: SurveyCreatorModel, options: any): void { }
  public onMatrixRowAdded(model: SurveyModel, creator: SurveyCreatorModel, options: any): void { }
  public onMatrixCellValueChanged(model: SurveyModel, creator: SurveyCreatorModel, options: any): void { }
  public setupQuestionsValue(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    this.setupQuestionsValueCore(model, json, creator);
    this.saveValuesAsDefault(model);
    this.children.forEach(item => {
      item.setupQuestionsValue(model, !!json ? json[item.path] : undefined, creator);
    });
  }
  public onLocaleChanged(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    this.onLocaleChangedCore(model, json, creator);
    this.children.forEach(item => {
      item.setupQuestionsValue(model, !!json ? json[item.path] : undefined, creator);
    });
  }

  private saveValuesAsDefault(model: SurveyModel) {
    this.questionNames.forEach(name => model.getQuestionByName(name).defaultValue = model.getValue(name) && JSON.parse(JSON.stringify(model.getValue(name))));
  }
  private restoreValuesFromDefault(model: SurveyModel) {
    this.questionNames.forEach(name => model.getQuestionByName(name).value = model.getQuestionByName(name).defaultValue && JSON.parse(JSON.stringify(model.getQuestionByName(name).defaultValue)));
  }

  protected setupQuestionsCore(model: SurveyModel, creatorSetup: ICreatorPresetEditorSetup): void { }
  protected resetToDefaultsCore(model: SurveyModel): void { }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {}
  protected onLocaleChangedCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {}
  protected getJsonValueCore(model: SurveyModel, creator: SurveyCreatorModel, defaultJson: any): any { return undefined; }
  protected getDefaultJsonValueCore(creator: SurveyCreatorModel): any { return {}; }
  protected setJsonLocalizationStringsCore(model: SurveyModel, locStrs: any): void {}
  protected updateJsonLocalizationStringsCore(locStrs: any): void {}
  protected disposeCore(): void {}
  protected setupOnCurrentPageCore(model: SurveyModel, creator: SurveyCreatorModel, active: boolean): void {}
  protected updateOnValueChangedCore(model: SurveyModel, name: string): void {}
  protected updateOnMatrixDetailPanelVisibleChangedCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {}
  protected onGetMatrixRowActionsCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {}
  protected copyJson(json: any): any {
    return Helpers.getUnbindValue(json);
  }

  public static updateModifiedText(locStrs: any, text: string, localizationName: string): void {
    if (!localizationName) return undefined;
    if (!text) return;
    const presetStrs = editorLocalization.presetStrings;
    editorLocalization.presetStrings = undefined;
    if (text !== editorLocalization.getString(localizationName)) {
      CreatorPresetEditableBase.saveTextInLocStrs(locStrs, text, localizationName);
    }
    editorLocalization.presetStrings = presetStrs;
  }
  private static saveTextInLocStrs(locStrs: any, text: string, localizationName: string): void {
    const paths = localizationName.split(".");
    for (let i = 0; i < paths.length - 1; i ++) {
      const path = paths[i];
      if (!locStrs[path]) {
        locStrs[path] = {};
      }
      locStrs = locStrs[path];
    }
    locStrs[paths[paths.length - 1]] = text;
  }
}