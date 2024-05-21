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
  private applyDefinition(creator: SurveyCreatorModel, defintion: Array<ICreatorPresetToolboxItem>): void {
    if (!Array.isArray(defintion)) return;
    const tb = creator.toolbox;
    const def: Array<ICreatorPresetToolboxItem> = JSON.parse(JSON.stringify(defintion));
    def.forEach(item => {
      if (typeof item === "object" && !!item.name) {
        const action = tb.getItemByName(item.name);
        if (action) {
          for (let key in item) {
            action[key] = item[key];
          }
        } else {
          if (!!item.json) {
            tb.addItem(<IQuestionToolboxItem>item);
          }
        }
      }
    });
  }
}

export class CreatorPresetToolboxConfigurator extends CreatorPresetBase {
  public getPath(): string { return ""; }
  protected applyCore(creator: SurveyCreatorModel): void {
    if(!this.json) return;
    super.applyCore(creator);
    this.applyItems(creator, this.json["items"]);
    this.applyCategories(creator, this.json["categories"]);
  }
  private applyItems(creator: SurveyCreatorModel, items: Array<string>): void {
    if (!Array.isArray(items)) return;
    creator.toolbox.defineCategories([{ category: "general", items: items }]);
    creator.toolbox.hasCategories = false;
  }
  private applyCategories(creator: SurveyCreatorModel, categories: Array<IToolboxCategoryDefinition>): void {
    if (!Array.isArray(categories)) return;
    creator.toolbox.defineCategories(categories);
    creator.toolbox.hasCategories = true;
  }
}
export class CreatorPresetToolbox extends CreatorPresetBase {
  public getPath(): string { return "toolbox"; }
  protected createPresets(): Array<ICreatorPreset> {
    return [new CreatorPresetToolboxDefinition(), new CreatorPresetToolboxConfigurator()];
  }
}
