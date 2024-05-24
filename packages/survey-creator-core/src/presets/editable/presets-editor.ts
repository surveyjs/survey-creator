import { SurveyCreatorModel } from "../../creator-base";
import { CreatorPreset, ICreatorPresetData } from "../presets";
import { ActionContainer, Base, ComputedUpdater, SurveyModel } from "survey-core";
import { CreatorPresetEditableBase } from "./presets-editable-base";
import { CreatorPresetEditableToolbox, CreatorPresetEditableToolboxConfigurator, CreatorPresetEditableToolboxDefinition } from "./presets-editable-toolbox";
import { CreatorPresetEditableTabs } from "./presets-editable-tabs";
import { CreatorEditablePresetPropertyGrid, CreatorPresetEditablePropertyGridDefinition } from "./presets-editable-properties";

export class CreatorPresetEditorModel extends Base {
  private presetValue: CreatorPreset;
  private creatorValue: SurveyCreatorModel;
  private modelValue: SurveyModel;
  private navigationBarValue: ActionContainer;
  constructor(json?: ICreatorPresetData, creator?: SurveyCreatorModel) {
    super();
    this.presetValue = new CreatorPreset(json);
    this.creatorValue = creator || this.createCreator();
    this.modelValue = this.createModel();
    this.navigationBarValue = new ActionContainer();
    this.addNavigationAction("preset", "Edit Preset");
    this.addNavigationAction("creator", "Review Creator");
    this.addNavigationAction("results", "Preset JSON");
    this.activeTab = this.navigationBar.actions[0].id;
  }
  public get preset(): CreatorPreset { return this.presetValue; }
  public get creator(): SurveyCreatorModel { return this.creatorValue; }
  public get model(): SurveyModel { return this.modelValue; }
  public get navigationBar(): ActionContainer { return this.navigationBarValue; }
  public get activeTab(): string {
    return this.getPropertyValue("activeTab");
  }
  public set activeTab(val: string) {
    this.setPropertyValue("activeTab", val);
  }
  public setActiveTab(val: string): boolean {
    if(this.activeTab === "preset" && !this.model.validate(true, true)) return false;
    this.activeTab = val;
    return true;
  }
  public get json(): ICreatorPresetData {
    return this.preset.getJson();
  }
  public set json(val: ICreatorPresetData) {
    this.preset.setJson(val);
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void {
    if(name === "activeTab" && oldValue === "preset") {
      this.applyFromSurveyModel();
    }
  }
  protected createCreator(): SurveyCreatorModel {
    return new SurveyCreatorModel({});
  }
  private addNavigationAction(id: string, title: string): void {
    const actionInfo = {
      id: id,
      title: title,
      active: <any>new ComputedUpdater<boolean>(() => this.activeTab === id),
      action: () => { this.setActiveTab(id); }
    };
    this.navigationBar.addAction(actionInfo);
  }
  protected createModel(): SurveyModel {
    const editablePresets = this.createEditablePresets();
    const model = new SurveyModel(this.getEditModelJson(editablePresets));
    model.editablePresets = editablePresets;
    model.keepIncorrectValues = true;
    model.showNavigationButtons = false;
    editablePresets.forEach(item => item.setupQuestions(model, this.creator));
    const json = this.preset.getJson() || {};
    editablePresets.forEach(item => item.setupQuestionsValue(model, json[item.path], this.creator));
    model.onCurrentPageChanged.add((sender, options) => {
      editablePresets.forEach(item => item.setupOnCurrentPage(model, this.creator));
    });
    model.onValueChanged.add((sender, options) => {
      editablePresets.forEach(item => item.updateOnValueChanged(model, this.creator, options.name));
    });
    model.onMatrixDetailPanelVisibleChanged.add((sender, options) => {
      editablePresets.forEach(item => item.updateOnMatrixDetailPanelVisibleChanged(model, this.creator, options));
    });
    return model;
  }
  public applyFromSurveyModel(): boolean {
    if(!this.validateEditableModel(this.model)) return false;
    this.preset.setJson(this.getJsonFromSurveyModel());
    this.model.setValue("json_result", JSON.stringify(this.preset.getJson(), null, 2));
    this.preset.apply(this.creator);
    return true;
  }
  public getJsonFromSurveyModel(): any {
    const res: any = {};
    this.model.editablePresets.forEach(preset => {
      const val = preset.getJsonValue(this.model);
      if(!!val) {
        res[preset.path] = val;
      }
    });
    return res;
  }
  private validateEditableModel(model: SurveyModel): boolean {
    if(!model.validate(true, true)) return false;
    const editablePresets = model.editablePresets;
    for(let i = 0; i < editablePresets.length; i ++) {
      if(!editablePresets[i].validate(model)) return false;
    }
    return true;
  }
  private createEditableCore(preset: CreatorPreset, fullPath: string): CreatorPresetEditableBase {
    if(fullPath === "tabs") return new CreatorPresetEditableTabs(preset);
    if(fullPath === "toolbox") return new CreatorPresetEditableToolbox(preset);
    if(fullPath === "toolbox_definition") return new CreatorPresetEditableToolboxDefinition(preset);
    if(fullPath === "toolbox_") return new CreatorPresetEditableToolboxConfigurator(preset);
    if(fullPath === "propertyGrid") return new CreatorEditablePresetPropertyGrid(preset);
    if(fullPath === "propertyGrid_definition") return new CreatorPresetEditablePropertyGridDefinition(preset);
    return undefined;
  }
  private createEditable(preset: CreatorPreset, parent: CreatorPresetEditableBase, fullPath: string): CreatorPresetEditableBase {
    const editable = this.createEditableCore(preset, fullPath);
    if(editable) {
      preset.children.forEach(item => {
        const child = this.createEditable(<CreatorPreset>item, editable, fullPath + "_" + item.getPath());
        if(child) {
          editable.children.push(child);
          child.parent = editable;
        }
      });
    }
    return editable;
  }
  private createEditablePresets(): Array<CreatorPresetEditableBase> {
    const res = [];
    this.preset.children.forEach(preset => {
      const editable = this.createEditable(<CreatorPreset>preset, undefined, preset.getPath());
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
}