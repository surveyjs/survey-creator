import { ItemValue, MatrixDropdownRowModelBase, Question, QuestionMatrixDynamicModel, QuestionRankingModel, Serializer, SurveyModel } from "survey-core";
import { ICreatorPreset, CreatorPresetBase, CreatorPresetEditableBase } from "./presets-base";
import { SurveyCreatorModel } from "../creator-base";
import { IQuestionToolboxItem, IToolboxCategoryDefinition } from "../toolbox";
import { SurveyJSON5 } from "../json5";

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
      title: "Toolbox items definition",
      visibleIf: this.getBoolVisibleIf(parent.nameDefinitionShow),
      elements: [
        {
          type: "matrixdynamic",
          name: this.nameMatrix,
          title: "Define items definition",
          rowCount: 0,
          addRowText: "Add New Item Defintion",
          columns: [
            { cellType: "text", name: "name", title: "Name", isUnique: true, isRequired: true },
            { cellType: "text", name: "iconName", title: "Icon Name" },
            { cellType: "text", name: "title", title: "Title" }
          ],
          detailPanelMode: "underRow",
          detailElements: [
            { type: "text", name: "tooltip", title: "Tooltip" },
            { type: "comment", name: "json", title: "JSON that will be used on clicking item", rows: 15 }
          ]
        }
      ]
    };
  }
  protected setupQuestionsCore(model: SurveyModel, creator: SurveyCreatorModel): void {
    const matrix = this.getMatrix(model);
    const nameColumn = matrix.getColumnByName("name");
    const iconNameColumn = matrix.getColumnByName("iconName");
    const names = [];
    const iconNames = [];
    creator.toolbox.getDefaultItems([], false, true, true).forEach(item => {
      names.push(item.id);
      iconNames.push(item.iconName || ("icon-" + item.id));
    });
    names.sort();
    iconNames.sort();
    nameColumn["dataList"] = names;
    iconNameColumn["dataList"] = iconNames;
  }
  protected validateCore(model: SurveyModel): boolean {
    const matrix = this.getMatrix(model);
    const val = matrix.value;
    if(!Array.isArray(val)) return true;
    for(let rowIndex = 0; rowIndex < val.length; rowIndex ++) {
      const json = val[rowIndex]["json"];
      if(!!json) {
        if(!this.validateJson(json)) {
          const row = matrix.visibleRows[rowIndex];
          row.showDetailPanel();
          const jsonQuestion = row.getQuestionByName("json");
          jsonQuestion.addError("The json is invalid"); //
          jsonQuestion.focus();
          return false;
        }
      }
    }
    return true;
  }
  public getJsonValueCore(model: SurveyModel): any {
    const matrix = this.getMatrix(model);
    const value = matrix.value;
    if(!Array.isArray(value) || value.length === 0) return undefined;
    const res = [];
    for(let i = 0; i < value.length; i ++) {
      const val = {};
      const item = value[i];
      for(let key in item) {
        const itemVal = key === "json" ? this.parseJson(item[key]) : item[key];
        if(!!itemVal) {
          val[key] = itemVal;
        }
      }
      res.push(val);
    }
    return res;
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    json = json || [];
    const question = this.getMatrix(model);
    const value = [];
    json.forEach(item => {
      const val = {};
      for(let key in item) {
        val[key] = key === "json" ? JSON.stringify(item[key], null, 2) : item[key];
      }
      value.push(val);
    });
    question.value = value;
  }
  private getMatrix(model: SurveyModel): QuestionMatrixDynamicModel {
    return <QuestionMatrixDynamicModel>model.getQuestionByName(this.nameMatrix);
  }
  private get nameMatrix() { return this.fullPath + "_matrix"; }
  private validateJson(text: string): boolean {
    text = text.trim();
    if(!text) return true;
    const json = this.parseJson(text);
    if(!json || !json.type) return false;
    const obj = Serializer.createClass(json.type, json);
    return !!obj;
  }
  private parseJson(text: string): any {
    try {
      const res = new SurveyJSON5().parse(text);
      return res;
    } catch(e) {
      return undefined;
    }
  }
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
export class CreatorPresetEditableToolboxItemsCore extends CreatorPresetEditableBase {
  getPageVisibleIf(): string {
    const parent = <CreatorPresetEditableToolbox>this.parent;
    return this.getBoolVisibleIf(parent.nameCategoriesShow) + " and " + this.getTextVisibleIf(parent.nameCategoriesMode, this.path);
  }
  public getDefaultToolboxItems(model: SurveyModel, creator: SurveyCreatorModel): ItemValue[] {
    const items = {};
    creator.toolbox.getDefaultItems([], false, true, true).forEach(item => {
      items[item.id] = item.title;
    });
    const definitionVal = model.getValue("toolbox_definition_matrix");
    if(Array.isArray(definitionVal)) {
      definitionVal.forEach(item => {
        const key = item.name;
        if(!!key && !items[key] || !!item.title) {
          items[key] = item.title || key;
        }
      });
    }
    const res = [];
    for(let key in items) {
      res.push(new ItemValue(key, items[key]));
    }

    return res;
  }
}
export class CreatorPresetEditableToolboxCategories extends CreatorPresetEditableToolboxItemsCore {
  private defaultItems: ItemValue[];
  public createMainPageCore(): any {
    return {
      title: "Setup toolbox categories",
      visibleIf: this.getPageVisibleIf(),
      elements: [
        {
          type: "matrixdynamic",
          name: this.nameMatrix,
          minRowCount: 1,
          allowRowsDragAndDrop: true,
          showHeader: false,
          columns: [
            { cellType: "text", name: "name", title: "Category Name", isUnique: true, isRequired: true },
            { cellType: "expression", name: "count", title: "Number of items in category", expression: "{row.items.length}" }
          ],
          detailPanelMode: "underRowSingle",
          detailElements: [
            {
              type: "ranking",
              name: "items",
              titleLocation: "hidden",
              selectToRankEnabled: true,
              minSelectedChoices: 1,
              selectToRankAreasLayout: "horizontal"
            }
          ]
        }
      ]
    };
  }
  public getJsonValueCore(model: SurveyModel): any {
    const res = model.getValue(this.nameMatrix);
    if(!Array.isArray(res) || res.length === 0) return undefined;
    res.forEach(item => {
      delete item["count"];
    });
    return res;
  }
  protected updateOnMatrixRowAddedCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    if(options.question.name === this.nameMatrix) {
      options.row.onDetailPanelShowingChanged = () => {
        this.onDetailPanelShowingChanged(options.row);
      };
    }
  }
  protected setupOnCurrentPageCore(model: SurveyModel, creator: SurveyCreatorModel): void {
    this.defaultItems = this.getDefaultToolboxItems(model, creator);
  }
  protected setupQuestionsCore(model: SurveyModel, creator: SurveyCreatorModel): void {
    this.defaultItems = this.getDefaultToolboxItems(model, creator);
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    const nameCategories = {};
    const categories = [];
    creator.toolbox.items.forEach(item => {
      const category = item.category;
      if(!!category) {
        if(!nameCategories[category]) {
          const row = { name: category, items: [item.name] };
          nameCategories[category] = row;
          categories.push(row);
        } else {
          nameCategories[category].items.push(item.name);
        }
      }
    });
    model.setValue(this.nameMatrix, categories);
    this.getMatrix(model).visibleRows.forEach(row => {
      row.onDetailPanelShowingChanged = () => {
        this.onDetailPanelShowingChanged(row);
      };
    });
  }
  private getMatrix(model: SurveyModel): QuestionMatrixDynamicModel { return <QuestionMatrixDynamicModel>model.getQuestionByName(this.nameMatrix); }
  private get nameMatrix() { return this.fullPath + "_matrix"; }
  private onDetailPanelShowingChanged(row: MatrixDropdownRowModelBase): void {
    if(!row.isDetailPanelShowing) return;
    row.getQuestionByName("items").choices = this.getRankingChoices(row);
  }
  private getRankingChoices(row: MatrixDropdownRowModelBase): Array<ItemValue> {
    const res = [];
    const model = <SurveyModel>row.getSurvey();
    const matrix = this.getMatrix(<SurveyModel>model);
    if(!Array.isArray(this.defaultItems)) return res;
    const val = model.getValue(this.nameMatrix);
    const usedItems = {};
    if(Array.isArray(val)) {
      const rowIndex = matrix.visibleRows.indexOf(row);
      for(let i = 0; i < val.length; i ++) {
        if(i !== rowIndex && Array.isArray(val[i].items)) {
          val[i].items.forEach(v => usedItems[v] = true);
        }
      }
    }
    this.defaultItems.forEach(item => {
      if(!usedItems[item.id]) {
        res.push(new ItemValue(item.id, item.title));
      }
    });
    return res;
  }
}
export class CreatorPresetToolboxCategories extends CreatorPresetBase {
  public getPath(): string { return "categories"; }
  public createEditable(): CreatorPresetEditableBase { return new CreatorPresetEditableToolboxCategories(this); }
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
export class CreatorPresetEditableToolboxItems extends CreatorPresetEditableToolboxItemsCore {
  public createMainPageCore(): any {
    const parent = <CreatorPresetEditableToolbox>this.parent;
    return {
      title: "Setup toolbox items",
      visibleIf: this.getPageVisibleIf(),
      elements: [
        {
          type: "ranking",
          name: this.name,
          titleLocation: "hidden",
          selectToRankEnabled: true,
          minSelectedChoices: 1,
          selectToRankAreasLayout: "horizontal",
        }
      ]
    };
  }
  public getJsonValueCore(model: SurveyModel): any {
    return model.getValue(this.name);
  }
  protected setupQuestionsCore(model: SurveyModel, creator: SurveyCreatorModel): void {
    this.getQuestion(model).choices = this.getDefaultToolboxItems(model, creator);
  }
  protected setupOnCurrentPageCore(model: SurveyModel, creator: SurveyCreatorModel): void {
    this.getQuestion(model).choices = this.getDefaultToolboxItems(model, creator);
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    const val = [];
    creator.toolbox.items.forEach(item => val.push(item.id));
    this.getQuestion(model).value = val;
  }
  private getQuestion(model: SurveyModel): QuestionRankingModel {
    return <QuestionRankingModel>model.getQuestionByName(this.name);
  }
  private get name() { return this.fullPath + "_name"; }
}
export class CreatorPresetToolboxItems extends CreatorPresetBase {
  public getPath(): string { return "items"; }
  public createEditable(): CreatorPresetEditableBase { return new CreatorPresetEditableToolboxItems(this); }
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
      title: "Setup toolbox",
      elements: [
        {
          type: "boolean",
          name: this.nameDefinitionShow,
          title: "Update existing toolbox items and create new items"
        },
        {
          type: "boolean",
          name: this.nameCategoriesShow,
          title: "Setup toolbox items and categories"
        },
        {
          type: "buttongroup",
          name: this.nameCategoriesMode,
          title: "Do you want to have categories or plain items",
          defaultValue: "categories",
          choices: [{ value: "categories", text: "Categories" }, { value: "items", text: "No categories" }],
          visibleIf: this.getBoolVisibleIf(this.nameCategoriesShow)
        }
      ]
    };
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    json = json || {};
    if(json["definition"]) {
      model.setValue(this.nameDefinitionShow, true);
    }
  }
  public get nameDefinitionShow() { return this.path + "_definition_show"; }
  public get nameCategoriesShow() { return this.path + "_categories_show"; }
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
