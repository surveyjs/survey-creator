import { Helpers, ItemValue, MatrixDropdownRowModelBase, QuestionMatrixDynamicModel, Serializer, SurveyModel } from "survey-core";
import { CreatorPresetEditableBase, ICreatorPresetEditorSetup } from "./presets-editable-base";
import { QuestionToolboxCategory, QuestionToolboxItem, SurveyCreatorModel, SurveyJSON5, editorLocalization } from "survey-creator-core";
import { PresetItemValue, QuestionPresetRankingModel } from "./preset-question-ranking";
import { ICreatorPresetToolboxItem } from "survey-creator-core";
import { CreatorPresetEditorModel } from "./presets-editor";

const LocCategoriesName = "toolboxCategories";

export class CreatorPresetEditableToolboxConfigurator extends CreatorPresetEditableBase {
  private defaultItems = {};
  private allItems: ICreatorPresetToolboxItem[];

  public createMainPageCore(): any {
    const getRankingItemEnableIf = (name: string): string => {
      return "{" + name + ".length} > 1 or {" + name + "} notcontains {item}";
    };
    return {
      title: "Set Up the Toolbox",
      navigationTitle: "Toolbox",
      elements: [
        {
          type: "panel",
          name: "panel_toolbox_items",
          description: "Select the toolbox items you want to show, group them into categories, rename them, and change their order if required.",
          elements: [
            {
              type: "boolean",
              name: this.nameCategoriesMode,
              title: "Enable grouping",
              titleLocation: "hidden",
              defaultValue: "categories",
              valueTrue: "categories",
              valueFalse: "items",
              clearIfInvisible: "onHidden",
              startWithNewLine: false,
              renderAs: "checkbox"
            },
            {
              type: "boolean",
              name: this.nameShowCategoryTitles,
              title: "Show category titles",
              defaultValue: false,
              titleLocation: "hidden",
              visibleIf: this.getTextVisibleIf(this.nameCategoriesMode, "categories"),
              clearIfInvisible: "onHidden",
              startWithNewLine: false,
              renderAs: "checkbox"
            },
            {
              type: "matrixdynamic",
              name: this.nameCategories,
              titleLocation: "hidden",
              visibleIf: this.getTextVisibleIf(this.nameCategoriesMode, "categories"),
              minRowCount: 1,
              allowRowReorder: true,
              addRowText: "Add new category",
              showHeader: false,
              columns: [
                { cellType: "text", name: "category", isUnique: true, isRequired: true },
                { cellType: "text", name: "title" }
              ],
              detailPanelMode: "underRowSingle",
              detailElements: [
                {
                  type: "matrixdynamic",
                  name: "items",
                  titleLocation: "hidden",
                  allowRowReorder: true,
                  cellType: "text",
                  showHeader: false,
                  columns: [
                    {
                      "name": "name",
                      visible: false
                    },
                    {
                      "name": "iconName"
                    },
                    {
                      "name": "title"
                    },
                    {
                      "name": "toolTip"
                    }
                  ],
                }
              ]
            },
            {
              type: "matrixdynamic",
              name: this.nameItems,
              visibleIf: this.getTextVisibleIf(this.nameCategoriesMode, "items"),
              titleLocation: "hidden",
              allowRowReorder: true,
              cellType: "text",
              showHeader: false,
              columns: [
                {
                  "name": "name",
                  visible: false
                },
                {
                  "name": "iconName"
                },
                {
                  "name": "title"
                },
                {
                  "name": "toolTip"
                }
              ],
            }
          ]
        },
        {
          type: "panel",
          name: "panel_toolbox_definition",
          description: "Create a new toolbox item or customize one of the predefined toolbox items.",
          elements: [
            {
              type: "matrixdynamic",
              name: this.nameMatrix,
              titleLocation: "hidden",
              rowCount: 0,
              addRowText: "Add new toolbox item",
              showHeader: false,
              hideColumnsIfEmpty: true,
              noRowsText: "Click the button below to add a new toolbox item.",
              columns: [
                { cellType: "text", name: "name", placeholder: "Name", isUnique: true, isRequired: true },
                { cellType: "text", name: "iconName", placeholder: "Icon name" },
                { cellType: "text", name: "title", placeholder: "Title" }
              ],
              detailPanelMode: "underRow",
              detailElements: [
                { type: "text", name: "tooltip", title: "Tooltip" },
                { type: "comment", name: "json", title: "JSON object to apply when users select this toolbox item", rows: 15 }
              ]
            }
          ]
        }
      ]
    };
  }
  public get nameCategoriesMode() { return this.fullPath + "_mode"; }
  private get nameMatrix() { return this.fullPath + "_matrix"; }
  private get nameItems() { return this.fullPath + "_items"; }
  private get nameCategories() { return this.fullPath + "_categories"; }
  private get nameShowCategoryTitles() { return this.fullPath + "_showCategoryTitles"; }
  private getMatrix(model: SurveyModel): QuestionMatrixDynamicModel {
    return <QuestionMatrixDynamicModel>model.getQuestionByName(this.nameMatrix);
  }
  public getJsonValueCore(model: SurveyModel, creator: SurveyCreatorModel): any {
    const res: any = {};
    const definition = this.getJsonItemsDefinition(model);
    if (definition) {
      res.definition = definition;
    }
    const mode = model.getValue(this.nameCategoriesMode);
    const toolbox = creator.toolbox;
    if (mode === "items") {
      const items = model.getValue(this.nameItems);
      const toolboxItems = toolbox.items.map(item => item.name);
      if (Array.isArray(items) && items.length > 0 && (toolbox.hasCategories || !Helpers.isTwoValueEquals(items, toolboxItems, true))) {
        res.items = items;
      }
    }
    if (mode === "categories") {
      const categories = this.getCategoriesJson(model);
      if (Array.isArray(categories) && categories.length > 0 && (!toolbox.hasCategories || !this.isCategoriesSame(categories, toolbox.categories))) {
        res.categories = this.getCategoriesJson(model);
      }
    }
    if (model.getValue(this.nameShowCategoryTitles)) {
      res.showCategoryTitles = true;
    }
    return Object.keys(res).length > 0 ? res : undefined;
  }
  private isCategoriesSame(categories: any, toolboxCategories: Array<QuestionToolboxCategory>): boolean {
    if (categories.length !== toolboxCategories.length) return false;
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].category !== toolboxCategories[i].name) return false;
      if (categories[i].title !== toolboxCategories[i].title) return false;
      const toolboxItems = toolboxCategories[i].items.map(item => item.name);
      const categoryItems = categories[i].items.map(item => item.name);
      if (!Helpers.isTwoValueEquals(categoryItems, toolboxItems, true)) return false;
    }
    return true;
  }
  private getCategoriesJson(model: SurveyModel): any {
    const res = model.getValue(this.nameCategories);
    if (!Array.isArray(res)) return undefined;
    res.forEach(item => {
      delete item["count"];
    });
    return res;
  }
  private getJsonItemsDefinition(model: SurveyModel): any {
    const matrix = this.getMatrix(model);
    const value = matrix.value;
    if (!Array.isArray(value) || value.length === 0) return undefined;
    const res = [];
    for (let i = 0; i < value.length; i++) {
      const val = {};
      const item = value[i];
      for (let key in item) {
        const itemVal = key === "json" ? this.parseJson(item[key]) : item[key];
        if (!!itemVal) {
          val[key] = itemVal;
        }
      }
      res.push(val);
    }
    return res;
  }

  protected updateOnMatrixDetailPanelVisibleChangedCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    if (options.question.name === this.nameCategories) {
      this.onDetailPanelShowingChanged(options.row);
    }
  }
  protected setupQuestionsCore(model: SurveyModel, creatorSetup: ICreatorPresetEditorSetup): void {
    this.setupPageQuestions(model, creatorSetup.creator);
  }
  private setupPageQuestions(model: SurveyModel, creator: SurveyCreatorModel): void {
    this.setupDefaultItems(creator);
    this.setupItemsDefinition(model, creator);
    this.setQuestionItemsRows(model);
  }
  protected validateCore(model: SurveyModel): boolean {
    const matrix = this.getMatrix(model);
    const val = matrix.value;
    if (!Array.isArray(val)) return true;
    for (let rowIndex = 0; rowIndex < val.length; rowIndex++) {
      const json = val[rowIndex]["json"];
      if (!!json) {
        if (!this.validateJson(json)) {
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
  private setupItemsDefinition(model: SurveyModel, creator: SurveyCreatorModel): void {
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

  private setQuestionItemsRows(model: SurveyModel): void {
    this.allItems = this.getDefaultToolboxItems(model);
    const q = this.getQuestionItems(model);
    if (!this.isItemValuesEqual(q.value, this.allItems)) {
      q.value = this.allItems;
      //this.updateRankingLocalizationName(q);
      const items = this.getQuestionCategories(model);
      items.visibleRows.forEach(row => row.hideDetailPanel());
    }
  }
  private isItemValuesEqual(a: Array<ICreatorPresetToolboxItem>, b: Array<ICreatorPresetToolboxItem>): boolean {
    if (!a || !b || a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i].name !== b[i].name || a[i].title !== b[i].title) return false;
    }
    return true;
  }
  private updateRankingLocalizationName(question: QuestionMatrixDynamicModel): void {
    question.choices.forEach(item => {
      item.locText.localizationName = "qt." + item.value;
    });
  }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    this.setupQuestionsValueDefinition(model, json);
    const val = [];
    creator.toolbox.items.forEach(item => val.push(this.createToolboxItemRow(item)));
    this.getQuestionItems(model).value = val;
    const nameCategories = {};
    const categories = [];
    creator.toolbox.items.forEach(item => {
      const category = item.category;
      if (!!category) {
        if (!nameCategories[category]) {
          const row = { category: category, items: [this.createToolboxItemRow(item)] };
          nameCategories[category] = row;
          categories.push(row);
        } else {
          nameCategories[category].items.push(this.createToolboxItemRow(item));
        }
      }
    });
    model.setValue(this.nameCategories, categories);
    this.getQuestionCategories(model).visibleRows.forEach(row => {
      row.onDetailPanelShowingChanged = () => {
        this.onDetailPanelShowingChanged(row);
      };
    });
    this.updateShowCategoriesTitlesElements(model);
  }
  protected onLocaleChangedCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    const newCreator = new SurveyCreatorModel({});
    newCreator.locale = creator.locale;
    this.setupPageQuestions(model, newCreator);
    this.setupQuestionsValueCore(model, json, newCreator);
  }
  private setupQuestionsValueDefinition(model: SurveyModel, json: any): void {
    json = json || {};
    const question = this.getMatrix(model);
    const value = [];
    const definition = json.definition || [];
    definition.forEach(item => {
      const val = {};
      for (let key in item) {
        val[key] = key === "json" ? JSON.stringify(item[key], null, 2) : item[key];
      }
      value.push(val);
    });
    question.value = value;
  }
  protected updateOnValueChangedCore(model: SurveyModel, name: string): void {
    if (name === this.nameMatrix) {
      this.setQuestionItemsRows(model);
    }
    if (name === this.nameShowCategoryTitles) {
      this.updateShowCategoriesTitlesElements(model);
    }
  }
  private updateShowCategoriesTitlesElements(model: SurveyModel): void {
    const val = model.getValue(this.nameShowCategoryTitles) === true;
    const matrix = this.getQuestionCategories(model);
    matrix.getColumnByName("title").visible = val;
    matrix.visibleRows.forEach(row => {
      const category = row.getValue("category");
      const defaultTitle = this.getCategoryTitle(category);
      if (!!defaultTitle) {
        row.getQuestionByName("category").readOnly = true;
      }
      const titleQuestion = row.getQuestionByName("title");
      if (titleQuestion.isEmpty()) {
        titleQuestion.value = defaultTitle;
      }
    });
  }
  private getCategoryTitle(name: string): string {
    return editorLocalization.getString(LocCategoriesName + "." + name);
  }
  protected setJsonLocalizationStringsCore(model: SurveyModel, locStrs: any): void {
    function updateTextFromQuestion(matrix: QuestionMatrixDynamicModel, locStrs: any) {
      if (!matrix) return;
      const rows = matrix.visibleRows;
      rows.forEach(r => {
        CreatorPresetEditorModel.updateModifiedText(locStrs, r.getValue("title"), "qt." + r.getValue("name"));
      });

    }
    updateTextFromQuestion(this.getQuestionItems(model), locStrs);

    const matrix = this.getQuestionCategories(model);
    if (matrix.isVisible) {
      matrix.visibleRows.forEach(row => {
        const category = row.getValue("category");
        if (row.getValue("title") !== this.getCategoryTitle(category)) {
          if (!locStrs[LocCategoriesName]) {
            locStrs[LocCategoriesName] = {};
          }
          locStrs[LocCategoriesName][category] = row.getValue("title");
        }
        updateTextFromQuestion(<QuestionMatrixDynamicModel>row.getQuestionByName("items"), locStrs);
      });
    }
  }
  private getQuestionItems(model: SurveyModel): QuestionMatrixDynamicModel {
    return <QuestionMatrixDynamicModel>model.getQuestionByName(this.nameItems);
  }
  private getQuestionCategories(model: SurveyModel): QuestionMatrixDynamicModel { return <QuestionMatrixDynamicModel>model.getQuestionByName(this.nameCategories); }
  private onDetailPanelShowingChanged(row: MatrixDropdownRowModelBase): void {
    if (!row.isDetailPanelShowing) return;
    const q = <QuestionMatrixDynamicModel>row.getQuestionByName("items");
    q.choices = this.getRankingChoices(row);
  }
  private setupDefaultItems(creator: SurveyCreatorModel): void {
    const items = {};
    creator.toolbox.getDefaultItems([], false, true, true).forEach(item => {
      this.createToolboxItemRow(item);
    });
    this.defaultItems = items;
  }
  private getDefaultToolboxItems(model: SurveyModel): ICreatorPresetToolboxItem[] {
    const items = {};
    for (let key in this.defaultItems) {
      items[key] = this.defaultItems[key];
    }
    const definitionVal = model.getValue(this.nameMatrix);
    if (Array.isArray(definitionVal)) {
      definitionVal.forEach(item => {
        const key = item.name;
        if (!!key && !items[key] || !!item.title) {
          items[key] = this.createToolboxItemRow(item);
        }
      });
    }
    const res: ICreatorPresetToolboxItem[] = [];
    for (let key in items) {
      res.push({ ...items[key] });
    }

    return res;
  }
  private createToolboxItemRow(item: QuestionToolboxItem): ICreatorPresetToolboxItem {
    return <ICreatorPresetToolboxItem> { name: item.name, title: item.title, iconName: item.iconName, tooltip: item.tooltip, json: item.json };
  }
  private getRankingChoices(row: MatrixDropdownRowModelBase): Array<ICreatorPresetToolboxItem> {
    const res: ICreatorPresetToolboxItem[] = [];
    const model = <SurveyModel>row.getSurvey();
    const matrix = this.getQuestionCategories(<SurveyModel>model);
    if (!Array.isArray(this.allItems)) return res;
    const val = model.getValue(this.nameCategories);
    const usedItems = {};
    if (Array.isArray(val)) {
      const rowIndex = matrix.visibleRows.indexOf(row);
      for (let i = 0; i < val.length; i++) {
        if (i !== rowIndex && Array.isArray(val[i].items)) {
          val[i].items.forEach(v => usedItems[v] = true);
        }
      }
    }
    this.allItems.forEach(item => {
      if (!usedItems[item.name]) {
        res.push({ ...item });
      }
    });
    return res;
  }
  private validateJson(text: string): boolean {
    text = text.trim();
    if (!text) return true;
    const json = this.parseJson(text);
    if (!json || !json.type) return false;
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