import { CreatorPresetBase, ICreatorPreset } from "./presets-base";
import { CreatorPresetToolbox, ICreatorPresetToolboxItem } from "./presets-toolbox";
import { CreatorPresetLanguages } from "./presets-languages";
import { CreatorPresetOptions } from "./presets-options";
import { CreatorPresetTabs, ICreatorPresetTab } from "./presets-tabs";
import { CreatorPresetPropertyGrid } from "./presets-properties";
import { IToolboxCategoryDefinition } from "../toolbox";
import { ISurveyPropertyGridDefinition } from "../question-editor/definition";
import { SurveyCreatorModel } from "../creator-base";
import { editorLocalization } from "../editorLocalization";
import { registerConfig, sortDefaultConfigs, ConfigsHash } from "../utils/configs";

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
  options?: any;
  localization?: any;
}

export interface ICreatorPresetConfig {
  presetName: string;
  json?: ICreatorPresetData;
}

type PresetsHash<T> = ConfigsHash<T>;

export const PredefinedCreatorPresets: string[] = [];
export const defaultCreatorPresetsOrder = ["basic", "advanced", "expert"];

export function registerUIPreset(...presets: Array<PresetsHash<ICreatorPresetConfig> | ICreatorPresetConfig>) {
  const importedPresetNames: string[] = [];
  registerConfig((preset: ICreatorPresetConfig) => {
    CreatorPresets[preset.presetName] = preset;
    importedPresetNames.push(preset.presetName);
  }, ...presets);
  sortDefaultConfigs(defaultCreatorPresetsOrder, importedPresetNames, PredefinedCreatorPresets);
}

export class UIPreset extends CreatorPresetBase {
  public constructor(json: ICreatorPresetData) {
    super();
    this.setJson(json);
  }
  public getPath(): string { return ""; }
  public getJson(): ICreatorPresetData {
    return <ICreatorPresetData>this.json;
  }
  /**
   * A method that applies the preset to the Creator instance.
   *
   * Parameters:
   *
   * - `creator`: `SurveyCreatorModel`\
   * A `SurveyCreatorModel` instance that the preset is applied to.
   */
  public applyTo(creator: SurveyCreatorModel): void {
    super.apply(creator, false);
  }
  public apply(creator: SurveyCreatorModel, internal = false): void {
    super.apply(creator, internal);
    this.applyLocalization();
    if (!!creator) {
      creator.updateLocalizedStrings(!internal);
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
      new CreatorPresetPropertyGrid(), new CreatorPresetOptions()];
  }
}

export const CreatorPresets: { [index: string]: ICreatorPresetConfig } = { };