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
  public getJson(): ICreatorPresetData {
    return <ICreatorPresetData>this.json;
  }
  protected createPresets(): Array<ICreatorPreset> {
    return [new CreatorPresetTabs(), new CreatorPresetToolbox(),
      new CreatorPresetPropertyGrid()];
  }
  public createEditModel(creator?: SurveyCreatorModel): SurveyModel {
    const editablePresets = this.createEditablePresets();
    const model = new SurveyModel(this.getEditModelJson(editablePresets));
    model.editablePresets = editablePresets;
    model.showCompleteButton = false;
    model.keepIncorrectValues = true;
    const editingCreator = !!creator ? creator : new SurveyCreatorModel({});
    model.addNavigationItem({
      id: "preset_save",
      title: "Save", //TODO
      action: () => {
        this.applyFromSurveyModel(model, creator);
      }
    });
    editablePresets.forEach(item => item.setupQuestions(model, editingCreator));
    const json = this.json ? this.json : {};
    editablePresets.forEach(item => item.setupQuestionsValue(model, json[item.path], editingCreator));
    model.onCurrentPageChanged.add((sender, options) => {
      editablePresets.forEach(item => item.setupOnCurrentPage(model, editingCreator));
    });
    model.onValueChanged.add((sender, options) => {
      editablePresets.forEach(item => item.updateOnValueChanged(model, editingCreator, options.name));
    });
    model.onMatrixDetailPanelVisibleChanged.add((sender, options) => {
      editablePresets.forEach(item => item.updateOnMatrixDetailPanelVisibleChanged(model, editingCreator, options));
    });
    return model;
  }
  public applyFromSurveyModel(model: SurveyModel, creator?: SurveyCreatorModel): boolean {
    if(!this.validatEditableModel(model)) return false;
    this.setJson(this.getJsonFromSurveyModel(model));
    model.setValue("json_result", JSON.stringify(this.getJson(), null, 2));
    if (creator) {
      this.apply(creator);
    }
    return true;
  }
  private validatEditableModel(model: SurveyModel): boolean {
    if(!model.validate(true, true)) return false;
    const editablePresets = model.editablePresets;
    for(let i = 0; i < editablePresets.length; i ++) {
      if(!editablePresets[i].validate(model)) return false;
    }
    return true;
  }
  public getJsonFromSurveyModel(model: SurveyModel): any {
    const res: any = {};
    model.editablePresets.forEach(preset => {
      const val = preset.getJsonValue(model);
      if(!!val) {
        res[preset.path] = val;
      }
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
    modelJson.pages.push({
      name: "page_result",
      title: "Preset JSON result",
      elements: [
        { type: "comment", rows: 40, name: "json_result", titleLocation: "hidden", placeholder: "Please click on the 'Save' button" }
      ]
    });
    return modelJson;
  }
}