import { ICreatorPreset, CreatorPresetBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";
import { IQuestionToolboxItem, IToolboxCategoryDefinition } from "../toolbox";

export interface ICreatorPresetToolboxItem {
  name: string;
  iconName?: string;
  json?: any;
  title?: string;
  tooltip?: string;
}

export class CreatorPresetToolboxDefinition extends CreatorPresetBase {
  public getPath(): string { return "definition"; }
  protected applyCore(creator: SurveyCreatorModel): void {
    super.applyCore(creator);
    this.applyDefinition(creator, this.json);
  }
  private applyDefinition(creator: SurveyCreatorModel, definition: Array<ICreatorPresetToolboxItem>): void {
    const toolbox = creator.toolbox;
    toolbox.presetDefaultItems = this.getPresetDefaultItems(definition);
    if (Array.isArray(definition)) {
      definition.forEach(item => {
        const tItem = toolbox.getActionById(item.name);
        if (tItem) {
          ["iconName", "title", "tooltip", "json"].forEach(propName => {
            if (item[propName]) {
              tItem[propName] = item[propName];
            }
          });
        }
      });
    }
  }
  private getPresetDefaultItems(defintion: Array<ICreatorPresetToolboxItem>): Array<IQuestionToolboxItem> {
    if (!Array.isArray(defintion)) return undefined;
    const def: Array<ICreatorPresetToolboxItem> = JSON.parse(JSON.stringify(defintion));
    const res = new Array<IQuestionToolboxItem>();
    def.forEach(item => {
      if (typeof item === "object" && !!item.name) {
        res.push(<IQuestionToolboxItem>item);
      }
    });
    return res;
  }
}

export class CreatorPresetToolboxConfigurator extends CreatorPresetBase {
  public getPath(): string { return ""; }
  protected applyCore(creator: SurveyCreatorModel): void {
    if (!this.json) return;
    super.applyCore(creator);
    creator.toolbox.showCategoryTitles = this.json.showCategoryTitles;
    this.applyItems(creator, this.json["definition"]?.map(i => i.name));
    this.applyCategories(creator, this.json["categories"]);
  }
  private applyItems(creator: SurveyCreatorModel, items: Array<string>): void {
    if (!Array.isArray(items)) return;
    creator.toolbox.hasCategories = false;
    creator.toolbox.defineCategories([{ category: "general", items: items }]);
  }
  private applyCategories(creator: SurveyCreatorModel, categories: Array<IToolboxCategoryDefinition>): void {
    if (!Array.isArray(categories)) return;
    creator.toolbox.hasCategories = true;
    creator.toolbox.defineCategories(categories);
  }
}
export class CreatorPresetToolbox extends CreatorPresetBase {
  public getPath(): string { return "toolbox"; }
  protected createPresets(): Array<ICreatorPreset> {
    return [new CreatorPresetToolboxDefinition(), new CreatorPresetToolboxConfigurator()];
  }
}
