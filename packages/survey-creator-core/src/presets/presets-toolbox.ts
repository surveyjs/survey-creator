import { CreatorPresetBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";
import { IQuestionToolboxItem, IToolboxCategoryDefinition } from "../toolbox";

export interface ICreatorPresetToolboxItem {
  name: string;
  iconName?: string;
  json?: any;
  title?: string;
  tooltip?: string;
}

export class CreatorPresetToolbox extends CreatorPresetBase {
  public getPath(): string { return "toolbox"; }
  protected applyCore(creator: SurveyCreatorModel): void {
    super.applyCore(creator);
    this.applyDefinition(creator, this.json["definition"]);
    this.applyItems(creator, this.json["categories"], this.json["items"]);
  }
  private applyDefinition(creator: SurveyCreatorModel, defintion: Array<ICreatorPresetToolboxItem>): void {
    if(!Array.isArray(defintion)) return;
    const tb = creator.toolbox;
    defintion.forEach(item => {
      if(typeof item === "object" && !!item.name) {
        const action = tb.getItemByName(item.name);
        if(action) {
          for(let key in item) {
            action[key] = item[key];
          }
        } else {
          if(!!item.json) {
            tb.addItem(<IQuestionToolboxItem>item);
          }
        }
      }
    });
  }
  private applyItems(creator: SurveyCreatorModel, categories: Array<IToolboxCategoryDefinition>, items: Array<string>): void {
    if(!Array.isArray(items) && !Array.isArray(categories)) return;
    if(!Array.isArray(categories)) categories = [];
    if(Array.isArray(items)) {
      categories.unshift({ category: "general", items: items });
    }
    creator.toolbox.defineCategories(categories);
    creator.toolbox.hasCategories = categories.length > 1;
  }
}
