import { CreatorPresetBase } from "./presets-base";
import { CreatorPresetToolbox, ICreatorPresetToolboxItem } from "./presets-toolbox";
import { CreatorPresetTabs } from "./presets-tabs";
import { CreatorPresetPropertyGrid } from "./presets-properties";
import { IToolboxCategoryDefinition } from "../toolbox";
import { ISurveyPropertyGridDefinition } from "../question-editor/definition";
import { SurveyModel } from "survey-core";

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
  protected setupPresets(): void {
    this.addPresets(new CreatorPresetTabs(), new CreatorPresetToolbox(),
      new CreatorPresetPropertyGrid());
  }
  public createEditModel(): SurveyModel {
    const model = new SurveyModel(this.getEditModelJson());
    model.data = this.getEditModelData();
    return model;
  }
  private getPageNames(): Array<string> {
    return ["tabs", "toolbox", "propertyGrid"];
  }
  private getEditModelJson(): any {
    const modelJson = { pages: [], showTOC: true };
    this.getPageNames().forEach(name => {
      modelJson.pages.push(this.createPageElements(name));
    });
    return modelJson;
  }
  private createPageElements(name: string): any {
    const pageJson = { name: name, elements: [] };
    const boolName = "show_" + name;
    const bolEl = { name: boolName, type: "boolean" };
    const editEl = { name: name, type: "editpreset_" + name, visibleIf: "'{" + boolName + "} = true'" };
    pageJson.elements = [bolEl, editEl];
    return pageJson;
  }
  private getEditModelData(): any {
    return this.json;
  }
}