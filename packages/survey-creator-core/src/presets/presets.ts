import { CreatorPresetBase, ICreatorPreset } from "./presets-base";
import { CreatorPresetToolbox, ICreatorPresetToolboxItem } from "./presets-toolbox";
import { CreatorPresetTabs } from "./presets-tabs";
import { CreatorPresetPropertyGrid } from "./presets-properties";
import { IToolboxCategoryDefinition } from "../toolbox";
import { ISurveyPropertyGridDefinition } from "../question-editor/definition";
import { SurveyModel } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";

export interface ICreatorPresetData {
  propertyGrid?: {
    definition?: ISurveyPropertyGridDefinition,
  };
  tabs?: {
    items?: Array<string>,
    activeTab?: string,
  };
  toolbox?: {
    definition?: Array<ICreatorPresetToolboxItem>,
    categories?: Array<IToolboxCategoryDefinition>,
    items?: Array<string>,
  };
}

export class CreatorPreset extends CreatorPresetBase {
  public constructor(json: ICreatorPresetData) {
    super();
    this.setJson(json);
  }
  public getPath(): string { return ""; }
  protected createPresets(): Array<ICreatorPreset> {
    return [new CreatorPresetTabs(), new CreatorPresetToolbox(),
    new CreatorPresetPropertyGrid()];
  }
  public createEditModel(creator?: SurveyCreatorModel): SurveyModel {
    const model = new SurveyModel(this.getEditModelJson());
    model.showCompleteButton = false;
    const editingCreator = !!creator ? creator : new SurveyCreatorModel({});
    model.addNavigationItem({
      id: "preset_save",
      title: "Save", //TODO
      action: () => {
        this.applyFromSurveyModel(model, creator);
      }
    });
    this.children.forEach(preset => {
      const q = model.getQuestionByName(preset.getPath());
      if (!!q) {
        preset.setupEditableQuestion(q, editingCreator);
      }
    });
    model.data = this.getEditModelData();
    this.children.forEach(preset => {
      const q = model.getQuestionByName(preset.getPath());
      if (!!q) {
        preset.setupEditableQuestionValue(q, editingCreator);
      }
    });
    return model;
  }
  public applyFromSurveyModel(model: SurveyModel, creator: SurveyCreatorModel): void {
    this.setJson(this.getJsonFromSurveyModel(model));
    if (creator) {
      this.apply(creator);
    }
  }
  public getJsonFromSurveyModel(model: SurveyModel): any {
    const res: any = {};
    this.children.forEach(preset => {
      const name = preset.getPath();
      const q = model.getQuestionByName(name);
      const boolQ = model.getQuestionByName(this.getShowQuestionName(name));
      if (!!q && !q.isEmpty() && boolQ.value) {
        res[name] = JSON.parse(JSON.stringify(q.value));
      }
    });
    return res;
  }
  private getEditModelJson(): any {
    const modelJson = { pages: [], showTOC: true, showQuestionNumbers: false };
    this.children.forEach(preset => {
      modelJson.pages.push(this.createPageElements(preset));
    });
    return modelJson;
  }
  private createPageElements(preset: ICreatorPreset): any {
    const name = preset.getPath();
    const pageJson = { name: "page_" + name, elements: [] };
    const boolName = this.getShowQuestionName(name);
    const bolEl = { name: boolName, type: "boolean" };
    const qJson = preset.getEditableQuestionJson();
    if (!!qJson) {
      qJson.name = name;
      qJson.clearIfInvisible = "none";
      qJson.visibleIf = "{" + boolName + "} = true";
    }
    pageJson.elements = [bolEl];
    if (!!qJson) {
      pageJson.elements.push(qJson);
    }
    return pageJson;
  }
  private getShowQuestionName(name: string): string {
    return "show_" + name;
  }
  private getEditModelData(): any {
    return this.json;
  }
}