import { SurveyCreatorModel } from "../../creator-base";
import { CreatorPreset, ICreatorPresetData } from "../presets";
import { ActionContainer, Base, ComputedUpdater, SurveyModel, createDropdownActionModel } from "survey-core";
import { CreatorPresetEditableBase, ICreatorPresetEditorSetup } from "./presets-editable-base";
import { CreatorPresetEditableToolbox, CreatorPresetEditableToolboxConfigurator, CreatorPresetEditableToolboxDefinition } from "./presets-editable-toolbox";
import { CreatorPresetEditableTabs } from "./presets-editable-tabs";
import { CreatorEditablePresetPropertyGrid, CreatorPresetEditablePropertyGridDefinition } from "./presets-editable-properties";
import { editorLocalization } from "../../editorLocalization";
import { ICreatorOptions } from "../../creator-options";

export class CreatorPresetEditorModel extends Base implements ICreatorPresetEditorSetup {
  private presetValue: CreatorPreset;
  private creatorValue: SurveyCreatorModel;
  private modelValue: SurveyModel;
  private navigationBarValue: ActionContainer;
  constructor(json?: ICreatorPresetData) {
    super();
    this.presetValue = new CreatorPreset(json);
    this.creatorValue = this.createCreator({});
    this.modelValue = this.createModel();
    this.locale = "en";
    this.navigationBarValue = new ActionContainer();
    this.addNavigationAction("preset", "Edit Preset");
    this.addNavigationAction("creator", "Review Creator");
    this.addNavigationAction("results", "Preset JSON");
    this.addLocaleDropdown();
    this.activeTab = this.navigationBar.actions[0].id;
  }
  public dispose(): void {
    super.dispose();
    this.creator.dispose();
    this.disposeModel();
  }
  private disposeModel(): void {
    this.model.editablePresets.forEach(preset => preset.dispose());
    this.model.dispose();
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
  public get locale(): string {
    return this.creator.locale;
  }
  public set locale(val: string) {
    this.applyFromSurveyModel(false);
    this.creator.locale = val;
    this.disposeModel();
    this.modelValue = this.createModel();
    this.model.locale = val;
    this.setPropertyValue("model", this.model);
  }
  public getLocale(): string { return this.locale || "en"; }
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
  public createCreator(options: ICreatorOptions): SurveyCreatorModel {
    return new SurveyCreatorModel(options);
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
  private addLocaleDropdown(): void {
    const locales = editorLocalization.getLocales();

    const items = locales.map((loc) => ({ id: loc || "en", title: editorLocalization.getLocaleName(loc || "en") }));
    const action = createDropdownActionModel({
      id: "locales",
      mode: "small",
      title: <any>new ComputedUpdater<string>(() => editorLocalization.getLocaleName(this.locale))
    }, {
      items: items,
      allowSelection: true,
      onSelectionChanged: (item: any) => { this.locale = item.id; },
    });
    this.navigationBar.addAction(action);
  }
  protected createModel(): SurveyModel {
    const editablePresets = this.createEditablePresets();
    const model = new SurveyModel(this.getEditModelJson(editablePresets));
    model.editablePresets = editablePresets;
    model.keepIncorrectValues = true;
    model.showNavigationButtons = false;
    editablePresets.forEach(item => item.setupQuestions(model, this));
    const json = this.preset.getJson() || {};
    editablePresets.forEach(item => item.setupQuestionsValue(model, json[item.path], this.creator));
    this.updateJsonLocalizationStrings(editablePresets);
    model.onCurrentPageChanged.add((sender, options) => {
      editablePresets.forEach(item => item.setupOnCurrentPage(model, this.creator));
    });
    model.onValueChanged.add((sender, options) => {
      editablePresets.forEach(item => item.updateOnValueChanged(model, options.name));
    });
    model.onMatrixDetailPanelVisibleChanged.add((sender, options) => {
      editablePresets.forEach(item => item.updateOnMatrixDetailPanelVisibleChanged(model, this.creator, options));
    });
    return model;
  }
  public applyFromSurveyModel(reCreateCretor: boolean = true): boolean {
    if(!this.validateEditableModel(this.model)) return false;
    this.preset.setJson(this.getJsonFromSurveyModel());
    this.model.setValue("json_result", JSON.stringify(this.preset.getJson(), null, 2));
    if(reCreateCretor) {
      this.creatorValue = this.createCreator({});
    }
    this.preset.apply(this.creator);
    return true;
  }
  public getJsonFromSurveyModel(): any {
    const res: ICreatorPresetData = {};
    this.model.editablePresets.forEach(preset => {
      const val = preset.getJsonValue(this.model);
      if(!!val) {
        res[preset.path] = val;
      }
    });
    this.getJsonLocalizationStrings(res);
    return res;
  }
  private getJsonLocalizationStrings(res: ICreatorPresetData): void {
    const locStrs: any = {};
    this.model.editablePresets.forEach(preset => {
      preset.setJsonLocalizationStrings(this.model, locStrs);
    });
    if(this.json && !!this.json.localization) {
      res.localization = JSON.parse(JSON.stringify(this.json.localization));
    }
    const locale = this.getLocale();
    if(Object.keys(locStrs).length > 0) {
      if(!res.localization) {
        res.localization = {};
      }
      res.localization[locale] = locStrs;
    } else {
      if(res.localization) {
        if(res.localization[locale]) {
          delete res.localization[locale];
        }
        if(Object.keys(res.localization).length === 0) {
          delete res.localization;
        }
      }
    }
  }
  private updateJsonLocalizationStrings(editablePresets: Array<CreatorPresetEditableBase>): void {
    const strs = this.json && !!this.json.localization ? JSON.parse(JSON.stringify(this.json.localization)) : {};
    const locale = this.getLocale();
    const locs = strs[locale] || {};
    editablePresets.forEach(preset => {
      preset.updateJsonLocalizationStrings(locs);
    });
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