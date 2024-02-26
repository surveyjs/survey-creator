import { SurveyModel } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";

export class CreatorPresetEditableBase {
  public parent: CreatorPresetEditableBase;
  public children: Array<CreatorPresetEditableBase> = [];
  public constructor(public preset: CreatorPresetBase) {
    preset.children.forEach(item => {
      const editable = item.createEditable();
      if(!!editable) {
        editable.parent = this;
        this.children.push(editable);
      }
    });
  }
  public get path() { return this.preset.getPath(); }
  public get fullPath() {
    const prefix = this.parent ? this.parent.fullPath + "_" : "";
    return prefix + this.path;
  }
  public get pageName(): string { return "page_" + this.fullPath; }
  public createPages(): Array<any> {
    const res = [this.createMainPage()];
    this.children.forEach(item => {
      const pages = item.createPages();
      if(Array.isArray(pages)) {
        pages.forEach(page => res.push(page));
      }
    });
    return res;
  }
  public createMainPage(): any {
    const res = this.createMainPageCore();
    res.name = this.pageName;
    return res;
  }
  protected getBoolVisibleIf(name: string): string { return "{" + name + "}=true"; }
  protected createMainPageCore(): any { return {}; }
  public setJsonValue(model: SurveyModel, res: any) { }
  public getEditableQuestionJson(): any { return undefined; }
  public setupEditableQuestion(model: SurveyModel, creator: SurveyCreatorModel): void { }
  public setupEditableQuestionValue(model: SurveyModel, json: any, creator: SurveyCreatorModel): void { }
}

export interface ICreatorPreset {
  setJson(json: any): void;
  apply(creator: SurveyCreatorModel): void;
  getPath(): string;
  createEditable(): CreatorPresetEditableBase;
}

export abstract class CreatorPresetBase implements ICreatorPreset {
  public children: Array<ICreatorPreset> = [];
  protected json: any;
  public constructor() {
    this.setupPresets();
  }
  public setJson(json: any): void {
    this.json = json;
    this.children.forEach(item => item.setJson(this.json && item.getPath() ? this.json[item.getPath()] : this.json));
  }
  public apply(creator: SurveyCreatorModel): void {
    if (!this.json) return;
    this.applyCore(creator);
    this.children.forEach(item => item.apply(creator));
  }
  public abstract getPath(): string;
  public createEditable(): CreatorPresetEditableBase { return undefined; }
  protected applyCore(creator: SurveyCreatorModel): void { }
  protected createPresets(): Array<ICreatorPreset> {
    return [];
  }
  private setupPresets(): void {
    this.addPresets(this.createPresets());
  }
  private addPreset(preset: ICreatorPreset) {
    this.children.push(preset);
  }
  private addPresets(presets: ICreatorPreset[]): void {
    presets.forEach(preset => this.addPreset(preset));
  }
}