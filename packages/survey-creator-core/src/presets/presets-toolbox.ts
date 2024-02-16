import { CreatorPresetBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";
import { IToolboxCategoryDefinition } from "../toolbox";

export class CreatorToolboxPreset extends CreatorPresetBase {
  public getPath(): string { return "toolbox"; }
  protected applyCore(creator: SurveyCreatorModel): void {
    super.applyCore(creator);
    this.applyItems(creator, this.json["categories"], this.json["items"]);
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
