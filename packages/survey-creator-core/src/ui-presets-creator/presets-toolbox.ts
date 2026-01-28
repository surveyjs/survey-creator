import { ICreatorPreset, CreatorPresetBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";
import { IQuestionToolboxItem, IToolboxCategoryDefinition } from "../toolbox";

export interface ICreatorPresetToolboxItem {
  name: string;
  iconName?: string;
  json?: any;
  title?: string;
  tooltip?: string;
  subitems?: ICreatorPresetToolboxItem[];
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
        const tItem = toolbox.getItemByName(item.name);
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
    super.applyCore(creator);
    creator.toolbox.showCategoryTitles = this.json.showCategoryTitles;
    const items = this.json["definition"];
    const itemNames = items?.map(i => i.name);
    let categories = this.json["categories"];
    if (!categories) {
      categories = creator.toolbox.getDefaultCategories()
        .map(c => ({
          category: c.name,
          items: c.items?.map(i => i.name).filter(name => !itemNames || itemNames.indexOf(name) != -1)
        })).filter(c => c.items.length > 0);
    } else if (categories.length === 0) {
      const category = {
        category: "general",
        items: itemNames || creator.toolbox.itemNames
      };
      categories = [category];
    }
    creator.toolbox.defineCategories(categories);
    // TODO: check if defineCategories incorrectly resets subitems
    if (items) {
      items.forEach(item => {
        const tItem = creator.toolbox.getItemByName(item.name);
        if (tItem) {
          if (item.subitems) {
            if (item.subitems.length === 0) {
              tItem.clearSubitems();
              return;
            }
            tItem.items = [];
            item.subitems.forEach(si => tItem.addSubitem(si as any));
          }
        }
      });
    }
  }
}
export class CreatorPresetToolbox extends CreatorPresetBase {
  public getPath(): string { return "toolbox"; }
  protected createPresets(): Array<ICreatorPreset> {
    return [new CreatorPresetToolboxDefinition(), new CreatorPresetToolboxConfigurator()];
  }
}
