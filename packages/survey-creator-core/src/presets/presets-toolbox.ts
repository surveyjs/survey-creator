import { Question, SurveyModel } from "survey-core";
import { ICreatorPreset, CreatorPresetBase, CreatorPresetEditableBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";
import { IQuestionToolboxItem, IToolboxCategoryDefinition } from "../toolbox";

export interface ICreatorPresetToolboxItem {
  name: string;
  iconName?: string;
  json?: any;
  title?: string;
  tooltip?: string;
}

export class CreatorPresetEditableToolboxDefinition extends CreatorPresetEditableBase {
  public createMainPageCore(): any {
    const parent = <CreatorPresetEditableToolbox>this.parent;
    return {
      visibleIf: this.getBoolVisibleIf(parent.nameDefinitionShow),
      elements: [
        {
          type: "matrixdynamic",
          name: this.nameMatrix,
          columns: [
            { cellType: "text", name: "name", isUnique: true, isRequired: true },
            { cellType: "text", name: "iconName" },
            { cellType: "text", name: "title" }
          ],
        }
      ]
    };
  }
  public setJsonValue(model: SurveyModel, res: any) {
  }
  public setupEditableQuestionValue(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    json = json || {};
  }
  private get nameMatrix() { return this.fullPath + "_matrix"; }
}

export class CreatorPresetToolboxDefinition extends CreatorPresetBase {
  public getPath(): string { return "definition"; }
  protected applyCore(creator: SurveyCreatorModel): void {
    super.applyCore(creator);
    this.applyDefinition(creator, this.json);
  }
  public createEditable(): CreatorPresetEditableBase { return new CreatorPresetEditableToolboxDefinition(this); }
  private applyDefinition(creator: SurveyCreatorModel, defintion: Array<ICreatorPresetToolboxItem>): void {
    if (!Array.isArray(defintion)) return;
    const tb = creator.toolbox;
    defintion.forEach(item => {
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
export class CreatorPresetToolboxCategories extends CreatorPresetBase {
  public getPath(): string { return "categories"; }
  protected applyCore(creator: SurveyCreatorModel): void {
    super.applyCore(creator);
    this.applyItems(creator, this.json);
  }
  private applyItems(creator: SurveyCreatorModel, categories: Array<IToolboxCategoryDefinition>): void {
    if (!Array.isArray(categories)) return;
    creator.toolbox.defineCategories(categories);
    creator.toolbox.hasCategories = true;
  }
}
export class CreatorPresetToolboxItems extends CreatorPresetBase {
  public getPath(): string { return "items"; }
  protected applyCore(creator: SurveyCreatorModel): void {
    super.applyCore(creator);
    this.applyItems(creator, this.json);
  }
  private applyItems(creator: SurveyCreatorModel, items: Array<string>): void {
    if (!Array.isArray(items)) return;
    creator.toolbox.defineCategories([{ category: "general", items: items }]);
    creator.toolbox.hasCategories = false;
  }
}

export class CreatorPresetEditableToolbox extends CreatorPresetEditableBase {
  public createMainPageCore(): any {
    return {
      elements: [
        {
          type: "boolean",
          name: this.nameDefinitionShow,
        },
        {
          name: this.nameSetupCategoriesShow,
          type: "boolean"
        },
        {
          name: this.nameCategoriesMode,
          type: "buttongroup",
          defaultValue: "categories",
          choices: ["categories", "items"],
          visibleIf: this.getBoolVisibleIf(this.nameSetupCategoriesShow)
        }
      ]
    };
  }
  public setJsonValue(model: SurveyModel, res: any) {
  }
  public setupEditableQuestionValue(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    json = json || {};
  }
  public get nameDefinitionShow() { return this.path + "_definition_show"; }
  private get nameSetupCategoriesShow() { return this.path + "_categories_show"; }
  public get nameCategoriesMode() { return this.path + "_categories_mode"; }
}

export class CreatorPresetToolbox extends CreatorPresetBase {
  public getPath(): string { return "toolbox"; }
  public createEditable(): CreatorPresetEditableBase { return new CreatorPresetEditableToolbox(this); }
  protected createPresets(): Array<ICreatorPreset> {
    return [new CreatorPresetToolboxDefinition(), new CreatorPresetToolboxItems(),
      new CreatorPresetToolboxCategories()];
  }
}
