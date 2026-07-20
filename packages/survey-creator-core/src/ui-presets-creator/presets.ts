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

/**
 * A base interface for the [`IPresetListItem`](/survey-creator/documentation/api-reference/IPresetListItem) and [`IPreset`](/survey-creator/documentation/api-reference/IPreset) interfaces.
 * @since 3.0.0
 */
export interface IPresetBase {
  /**
   * The preset's unique name.
   * @since 3.0.0
   */
  name: string;
  /**
   * Specifies whether the preset is visible in the preset list.
   * @since 3.0.0
   */
  visible?: boolean;
}

/**
 * Describes a UI preset configuration.
 *
 * A preset configuration specifies whether a preset is visible in the preset list and contains a JSON object that defines how the preset customizes the Survey Creator UI.
 * @since 3.0.0
 */
export interface IPreset extends IPresetBase {
  /**
   * Survey Creator UI configuration associated with the preset.
   * @since 3.0.0
   */
  json?: ICreatorPresetData | any;
}

export const PredefinedCreatorPresets: string[] = [];
export const defaultCreatorPresetsOrder = ["basic", "advanced", "expert"];

/**
 * Registers UI presets to make them available for customization in the UI Preset Editor.
 *
 * [How to Register Predefined Presets](https://surveyjs.io/survey-creator/documentation/ui-preset-editor#register-predefined-presets (linkStyle))
 * @param presets One or more UI preset configuations separated by commas, or an object containing multiple configurations.
 * @since 3.0.0
 */
export function registerUIPreset(...presets: Array<ConfigsHash<IPreset> | IPreset>) {
  const importedPresetNames: string[] = [];
  registerConfig((preset: IPreset) => {
    CreatorPresets[preset.name] = preset;
    importedPresetNames.push(preset.name);
  }, ...presets);
  sortDefaultConfigs(defaultCreatorPresetsOrder, importedPresetNames, PredefinedCreatorPresets);
}
/**
 * A class that instantiates a UI preset using an [`IPreset`](https://surveyjs.io/survey-creator/documentation/api-reference/uipreset) JSON configuration and provides an API to apply it.
 *
 * [How to Apply a UI Preset](https://surveyjs.io/survey-creator/documentation/ui-preset-editor#apply-a-ui-preset (linkStyle))
 * @since 3.0.0
 */
export class UIPreset extends CreatorPresetBase {
  public constructor(data: ICreatorPresetData | IPreset) {
    super();
    if ((data?.hasOwnProperty("json"))) {
      this.setJson((data as IPreset).json);
      this.name = (data as IPreset).name || "";
    } else {
      this.setJson(data as ICreatorPresetData);
    }
  }
  public name = "";
  public getPath(): string { return ""; }
  public getJson(): ICreatorPresetData {
    return <ICreatorPresetData>this.json;
  }
  /**
   * Applies the preset to a Survey Creator instance.
   *
   * [How to Apply a UI Preset](https://surveyjs.io/survey-creator/documentation/ui-preset-editor#apply-a-ui-preset (linkStyle))
   * @param creator A [`SurveyCreatorModel`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator) instance to which the preset is applied.
   * @since 3.0.0
   */
  public applyTo(creator: SurveyCreatorModel): void {
    super.apply(creator, false);
    if (this.name && !!creator) {
      creator.activePresetName = this.name;
    }
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

export const CreatorPresets: { [index: string]: IPreset } = {};