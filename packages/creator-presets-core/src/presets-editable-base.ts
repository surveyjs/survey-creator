import { Helpers, SurveyModel } from "survey-core";
import { SurveyCreatorModel, CreatorPresetBase, ICreatorOptions } from "survey-creator-core";

export interface ICreatorPresetEditorSetup {
  creator: SurveyCreatorModel;
  createCreator(options: ICreatorOptions): SurveyCreatorModel;
}

export class CreatorPresetEditableBase {
  public parent: CreatorPresetEditableBase;
  public children: Array<CreatorPresetEditableBase> = [];
  public constructor(public preset: CreatorPresetBase) {
  }
  public get path() { return this.preset.getPath(); }
  protected getJsonPath(model: SurveyModel): string { return this.path; }
  public get fullPath() {
    let prefix = this.parent ? this.parent.fullPath : "";
    if(this.path && prefix) {
      prefix += "_";
    }
    return prefix + this.path;
  }
  public get pageName(): string { return "page_" + this.fullPath; }
  public createPages(): Array<any> {
    const res = [];
    const mainPage = this.createMainPage();
    if(mainPage) {
      res.push(mainPage);
    }
    this.children.forEach(item => {
      const pages = item.createPages();
      if(Array.isArray(pages)) {
        pages.forEach(page => res.push(page));
      }
    });
    return res;
  }
  public validate(model: SurveyModel): boolean {
    if(!this.validateCore(model)) return false;
    for(let i = 0; i < this.children.length; i ++) {
      if(!this.children[i].validate(model)) return false;
    }
    return true;
  }
  protected validateCore(model: SurveyModel): boolean {
    return true;
  }
  protected createMainPage(): any {
    const res = this.createMainPageCore();
    if(res) {
      res.name = this.pageName;
    }
    return res;
  }
  protected getBoolVisibleIf(name: string, isTrue: boolean = true): string { return "{" + name + "}=" + (isTrue ? "true" : "false"); }
  protected getTextVisibleIf(name: string, val: string): string { return "{" + name + "}='" + val +"'"; }
  protected getNotEmptyVisibleIf(name: string): string { return "{" + name + "} notempty"; }
  protected createMainPageCore(): any { return undefined; }
  public getJsonValue(model: SurveyModel, creator: SurveyCreatorModel): any {
    const page = model.getPageByName(this.pageName);
    const core = page && page.isVisible ? this.getJsonValueCore(model, creator) : undefined;
    let hasValue = !!core;
    const res = hasValue ? core : {};
    this.children.forEach(item => {
      const val = item.getJsonValue(model, creator);
      if(!!val) {
        hasValue = true;
        res[item.getJsonPath(model)] = val;
      }
    });
    return hasValue ? res : undefined;
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
  public setupOnCurrentPage(model: SurveyModel, creator: SurveyCreatorModel): void {
    if(model.currentPage.name === this.pageName) {
      this.setupOnCurrentPageCore(model, creator);
    }
    this.children.forEach(item => {
      item.setupOnCurrentPage(model, creator);
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
  public setupQuestionsValue(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    this.setupQuestionsValueCore(model, json, creator);
    this.children.forEach(item => {
      item.setupQuestionsValue(model, !!json ? json[item.path]: undefined, creator);
    });
  }
  public onLocaleChanged(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    this.onLocaleChangedCore(model, json, creator);
    this.children.forEach(item => {
      item.setupQuestionsValue(model, !!json ? json[item.path]: undefined, creator);
    });
  }
  protected setupQuestionsCore(model: SurveyModel, creatorSetup: ICreatorPresetEditorSetup): void { }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {}
  protected onLocaleChangedCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {}
  protected getJsonValueCore(model: SurveyModel, creator: SurveyCreatorModel): any { return undefined; }
  protected setJsonLocalizationStringsCore(model: SurveyModel, locStrs: any): void {}
  protected updateJsonLocalizationStringsCore(locStrs: any): void {}
  protected disposeCore(): void {}
  protected setupOnCurrentPageCore(model: SurveyModel, creator: SurveyCreatorModel): void {}
  protected updateOnValueChangedCore(model: SurveyModel, name: string): void {}
  protected updateOnMatrixDetailPanelVisibleChangedCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {}
  protected copyJson(json: any): any {
    return Helpers.getUnbindValue(json);
  }
}