import { Helpers, SurveyModel } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { CreatorPresetBase } from "../presets-base";

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
  protected getBoolVisibleIf(name: string): string { return "{" + name + "}=true"; }
  protected getTextVisibleIf(name: string, val: string): string { return "{" + name + "}='" + val +"'"; }
  protected getNotEmptyVisibleIf(name: string): string { return "{" + name + "} notempty"; }
  protected createMainPageCore(): any { return undefined; }
  public getJsonValue(model: SurveyModel): any {
    const page = model.getPageByName(this.pageName);
    const core = page && page.isVisible ? this.getJsonValueCore(model) : undefined;
    let hasValue = !!core;
    const res = hasValue ? core : {};
    this.children.forEach(item => {
      const val = item.getJsonValue(model);
      if(!!val) {
        hasValue = true;
        res[item.getJsonPath(model)] = val;
      }
    });
    return hasValue ? res : undefined;
  }
  public setJsonLocalizationStrings(model: SurveyModel, locStrs: any): any {
    this.setJsonLocalizationStringsCore(model, locStrs);
    this.children.forEach(item => item.setJsonLocalizationStrings(model, locStrs));
  }
  public setupQuestions(model: SurveyModel, creator: SurveyCreatorModel): void {
    this.setupQuestionsCore(model, creator);
    this.children.forEach(item => {
      item.setupQuestions(model, creator);
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
  public updateOnValueChanged(model: SurveyModel, creator: SurveyCreatorModel, name: string): void {
    this.updateOnValueChangedCore(model, creator, name);
    this.children.forEach(item => {
      item.updateOnValueChanged(model, creator, name);
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
  protected setupQuestionsCore(model: SurveyModel, creator: SurveyCreatorModel): void { }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {}
  protected getJsonValueCore(model: SurveyModel): any { return undefined; }
  protected setJsonLocalizationStringsCore(model: SurveyModel, locStrs: any): void {}
  protected setupOnCurrentPageCore(model: SurveyModel, creator: SurveyCreatorModel): void {}
  protected updateOnValueChangedCore(model: SurveyModel, creator: SurveyCreatorModel, name: string): void {}
  protected updateOnMatrixDetailPanelVisibleChangedCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {}
  protected copyJson(json: any): any {
    return Helpers.getUnbindValue(json);
  }
}