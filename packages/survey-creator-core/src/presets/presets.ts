import { CreatorPresetBase, ICreatorPreset, CreatorPresetEditableBase } from "./presets-base";
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
    const editablePresets = this.createEditablePresets();
    const model = new SurveyModel(this.getEditModelJson(editablePresets));
    model.showCompleteButton = false;
    const editingCreator = !!creator ? creator : new SurveyCreatorModel({});
    model.addNavigationItem({
      id: "preset_save",
      title: "Save", //TODO
      action: () => {
        this.applyFromSurveyModel(model, creator);
      }
    });
    editablePresets.forEach(item => item.setupEditableQuestion(model, editingCreator));
    const json = this.json ? this.json : {};
    editablePresets.forEach(item => item.setupEditableQuestionValue(model, json[item.path], editingCreator));
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
    this.createEditablePresets().forEach(preset => {
      preset.setJsonValue(model, res);
    });
    return res;
  }
  private createEditablePresets(): Array<CreatorPresetEditableBase> {
    const res = [];
    this.children.forEach(preset => {
      const editable = preset.createEditable();
      if (editable) {
        res.push(editable);
      }
    });
    return res;
  }
  private getEditModelJson(editablePresets: Array<CreatorPresetEditableBase>): any {
    const modelJson = { pages: [], showTOC: true, showQuestionNumbers: false };
    editablePresets.forEach(preset => {
      const pages = preset.createPages();
      if (Array.isArray(pages)) {
        pages.forEach(page => modelJson.pages.push(page));
      }
    });
    return modelJson;
  }
