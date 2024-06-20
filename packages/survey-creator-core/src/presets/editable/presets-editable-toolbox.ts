import { ItemValue, MatrixDropdownRowModelBase, QuestionMatrixDynamicModel, QuestionRankingModel, Serializer, SurveyModel } from "survey-core";
import { CreatorPresetEditableBase, ICreatorPresetEditorSetup } from "./presets-editable-base";
import { SurveyCreatorModel } from "../../creator-base";
import { SurveyJSON5 } from "../../json5";
import { PresetItemValue, QuestionPresetRankingModel } from "./preset-question-ranking";
import { editorLocalization } from "../../editorLocalization";

export class CreatorPresetEditableToolboxDefinition extends CreatorPresetEditableBase {
  public createMainPageCore(): any {
    return {
      title: "Toolbox items definition",
      elements: [
        {
          type: "boolean",
          name: this.nameShow,
          title: "Update existing toolbox items and create new items"
        },
        {
          type: "matrixdynamic",
          name: this.nameMatrix,
          visibleIf: this.getBoolVisibleIf(this.nameShow),
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
  protected setupQuestionsCore(model: SurveyModel, creatorSetup: ICreatorPresetEditorSetup): void {
    const matrix = this.getMatrix(model);
    const nameColumn = matrix.getColumnByName("name");
    const iconNameColumn = matrix.getColumnByName("iconName");
    const names = [];
    const iconNames = [];
    creatorSetup.creator.toolbox.getDefaultItems([], false, true, true).forEach(item => {
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
    model.setValue(this.nameShow, !!json);
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
  public get nameShow() { return this.fullPath + "_show"; }
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

export class CreatorPresetEditableToolboxConfigurator extends CreatorPresetEditableBase {
  private defaultItems: ItemValue[];
  public createMainPageCore(): any {
    return {
      title: "Setup toolbox",
      elements: [
        {
          type: "boolean",
          name: this.nameCategoriesShow,
          defaultValue: false,
          title: "Setup toolbox items and categories"
        },
        {
          type: "buttongroup",
          name: this.nameCategoriesMode,
          title: "Do you want to have categories or plain items",
          defaultValue: "categories",
          choices: [{ value: "categories", text: "Categories" }, { value: "items", text: "No categories" }],
          visibleIf: this.getBoolVisibleIf(this.nameCategoriesShow),
          clearIfInvisible: "onHidden",
          startWithNewLine: false
        },
        {
          type: "boolean",
          name: this.nameShowCategoryTitles,
          defaultValue: false,
          visibleIf: this.getTextVisibleIf(this.nameCategoriesMode, "categories"),
          title: "Show Categories Titles",
          startWithNewLine: false
        },
        {
          type: "matrixdynamic",
          name: this.nameCategories,
          title: "Setup Toolbox categories and items",
          visibleIf: this.getTextVisibleIf(this.nameCategoriesMode, "categories"),
          minRowCount: 1,
          allowRowsDragAndDrop: true,
          showHeader: true,
          addRowText: "Add new Category",
          columns: [
            { cellType: "text", name: "category", title: "Category Name", isUnique: true, isRequired: true },
            { cellType: "text", name: "title", title: "Category Title" },
            { cellType: "expression", name: "count", title: "Number of items in category", expression: "{row.items.length}" }
          ],
          detailPanelMode: "underRowSingle",
          detailElements: [
            {
              type: "presetranking",
              name: "items",
              titleLocation: "hidden",
              selectToRankEnabled: true,
              minSelectedChoices: 1,
              selectToRankAreasLayout: "horizontal",
              selectToRankEmptyRankedAreaText: "Drag toolbox items to hide them",
              selectToRankEmptyUnrankedAreaText: "Drag toolbox items here"
            }
          ]
        },
        {
          type: "presetranking",
          name: this.nameItems,
          visibleIf: this.getTextVisibleIf(this.nameCategoriesMode, "items"),
          titleLocation: "hidden",
          selectToRankEnabled: true,
          minSelectedChoices: 1,
          selectToRankAreasLayout: "horizontal",
          selectToRankEmptyRankedAreaText: "Drag toolbox items to hide them",
          selectToRankEmptyUnrankedAreaText: "Drag toolbox items here"
        }
      ]
    };
  }
  public get nameCategoriesShow() { return this.fullPath + "_show"; }
  public get nameCategoriesMode() { return this.fullPath + "_mode"; }
  private get nameItems() { return this.fullPath + "_items"; }
  private get nameCategories() { return this.fullPath + "_categories"; }
  private get nameShowCategoryTitles() { return this.fullPath + "_showCategoryTitles"; }
  protected getJsonPath(model: SurveyModel): string {
    return model.getValue(this.nameCategoriesMode);
  }
  public getJsonValueCore(model: SurveyModel): any {
    const mode = model.getValue(this.nameCategoriesMode);
    if(mode === "items") return model.getValue(this.nameItems);
    if(mode === "categories") return this.getCategoriesJson(model);
    return undefined;
  }
  private getCategoriesJson(model: SurveyModel): any {
    const res = model.getValue(this.nameCategories);
    if(!Array.isArray(res)) return undefined;
    res.forEach(item => {
      delete item["count"];
    });
    return res;
  }
  protected updateOnMatrixDetailPanelVisibleChangedCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    if(options.question.name === this.nameCategories) {
      this.onDetailPanelShowingChanged(options.row);
    }
  }
  protected setupOnCurrentPageCore(model: SurveyModel, creator: SurveyCreatorModel): void {
    this.setQuestionItemsChoices(model, creator);
  }
  protected setupQuestionsCore(model: SurveyModel, creatorSetup: ICreatorPresetEditorSetup): void {
    this.setQuestionItemsChoices(model, creatorSetup.creator);
  }
  private setQuestionItemsChoices(model: SurveyModel, creator: SurveyCreatorModel): void {
    this.defaultItems = this.getDefaultToolboxItems(model, creator);
    const q = this.getQuestionItems(model);
    q.choices = this.defaultItems;
    this.updateRankingLocalizationName(q);
  }
  private updateRankingLocalizationName(question: QuestionRankingModel): void {
    question.choices.forEach(item => {
      item.locText.localizationName = "qt." + item.value;
    });
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    const val = [];
    creator.toolbox.items.forEach(item => val.push(item.id));
    this.getQuestionItems(model).value = val;
    const nameCategories = {};
    const categories = [];
    creator.toolbox.items.forEach(item => {
      const category = item.category;
      if(!!category) {
        if(!nameCategories[category]) {
          const row = { category: category, items: [item.name] };
          nameCategories[category] = row;
          categories.push(row);
        } else {
          nameCategories[category].items.push(item.name);
        }
      }
    });
    categories.forEach(item => {
      item.title = this.getCategoryTitle(item.category);
    });
    model.setValue(this.nameCategories, categories);
    this.getQuestionCategories(model).visibleRows.forEach(row => {
      row.onDetailPanelShowingChanged = () => {
        this.onDetailPanelShowingChanged(row);
      };
    });
  }
  private locCategoriesName = "toolboxCategories";
  private getCategoryTitle(name: string): string {
    return editorLocalization.getString(this.locCategoriesName + "." + name);
  }
  protected setJsonLocalizationStringsCore(model: SurveyModel, locStrs: any): void {
    (<QuestionPresetRankingModel>this.getQuestionItems(model)).updateModifiedText(locStrs);
    const matrix = this.getQuestionCategories(model);
    if(matrix.isVisible) {
      matrix.visibleRows.forEach(row => {
        const category = row.getValue("category");
        if(row.getValue("title") !== this.getCategoryTitle(category)) {
          if(!locStrs[this.locCategoriesName]) {
            locStrs[this.locCategoriesName] = {};
          }
          locStrs[this.locCategoriesName][category] = row.getValue("title");
        }
        const q = <QuestionPresetRankingModel>row.getQuestionByName("items");
        if(!!q) {
          q.updateModifiedText(locStrs);
        }
      });
    }
  }
  private getQuestionItems(model: SurveyModel): QuestionRankingModel {
    return <QuestionRankingModel>model.getQuestionByName(this.nameItems);
  }
  private getQuestionCategories(model: SurveyModel): QuestionMatrixDynamicModel { return <QuestionMatrixDynamicModel>model.getQuestionByName(this.nameCategories); }
  private onDetailPanelShowingChanged(row: MatrixDropdownRowModelBase): void {
    if(!row.isDetailPanelShowing) return;
    const q = <QuestionRankingModel>row.getQuestionByName("items");
    q.choices = this.getRankingChoices(row);
    this.updateRankingLocalizationName(q);
  }
  private getDefaultToolboxItems(model: SurveyModel, creator: SurveyCreatorModel): ItemValue[] {
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
      res.push(this.createItemValue(key, items[key]));
    }

    return res;
  }
  private createItemValue(val: string, title: string): ItemValue {
    return new PresetItemValue(val, title);
  }
  private getRankingChoices(row: MatrixDropdownRowModelBase): Array<ItemValue> {
    const res = [];
    const model = <SurveyModel>row.getSurvey();
    const matrix = this.getQuestionCategories(<SurveyModel>model);
    if(!Array.isArray(this.defaultItems)) return res;
    const val = model.getValue(this.nameCategories);
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
        res.push(this.createItemValue(item.id, item.title));
      }
    });
    return res;
  }
}
export class CreatorPresetEditableToolbox extends CreatorPresetEditableBase {
  public getJsonValueCore(model: SurveyModel): any {
    const val = model.getValue(this.fullPath + "_showCategoryTitles");
    if(val) {
      return { showCategoryTitles: true };
    }
    return undefined;
  }
}