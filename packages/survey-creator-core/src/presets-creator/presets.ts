import { CreatorPresetBase, ICreatorPreset } from "./presets-base";
import { CreatorPresetToolbox, ICreatorPresetToolboxItem } from "./presets-toolbox";
import { CreatorPresetLanguages } from "./presets-languages";
import { CreatorPresetTabs, ICreatorPresetTab } from "./presets-tabs";
import { CreatorPresetPropertyGrid } from "./presets-properties";
import { IToolboxCategoryDefinition } from "../toolbox";
import { ISurveyPropertyGridDefinition } from "../question-editor/definition";
import { SurveyCreatorModel } from "../creator-base";
import { editorLocalization } from "../editorLocalization";

export interface ICreatorPresetData {
  languages?: {
    creator?: string,
    surveyLocales?: Array<string>,
    useEnglishNames?: boolean,
  };
  propertyGrid?: {
    definition?: ISurveyPropertyGridDefinition,
  };
  tabs?: {
    items?: Array<ICreatorPresetTab>,
    activeTab?: string,
  };
  toolbox?: {
    definition?: Array<ICreatorPresetToolboxItem>,
    categories?: Array<IToolboxCategoryDefinition>,
    showCategoryTitles?: boolean,
  };
  localization?: any;
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
  public apply(creator?: SurveyCreatorModel): void {
    super.apply(creator);
    this.applyLocalization();
    if (!!creator) {
      creator.updateLocalizedStrings();
    }
  }
  protected applyLocalization(): void {
    const strs = this.json?.localization;
    if (!!strs) {
      editorLocalization.presetStrings = JSON.parse(JSON.stringify(strs));
    } else {
      editorLocalization.presetStrings = undefined;
    }
  }
  protected createPresets(): Array<ICreatorPreset> {
    return [new CreatorPresetLanguages(), new CreatorPresetTabs(), new CreatorPresetToolbox(),
      new CreatorPresetPropertyGrid()];
  }
}