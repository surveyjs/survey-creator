import { FunctionFactory, Helpers, IDialogOptions, ItemValue, MatrixDropdownRowModelBase, MatrixDynamicRowModel, QuestionMatrixDynamicModel, Serializer, settings, SurveyModel } from "survey-core";
import { CreatorPresetEditableBase, ICreatorPresetEditorSetup } from "./presets-editable-base";
import { QuestionToolboxCategory, QuestionToolboxItem, SurveyCreatorModel, SurveyJSON5, editorLocalization } from "survey-creator-core";
import { PresetItemValue, QuestionPresetRankingModel } from "./preset-question-ranking";
import { ICreatorPresetToolboxItem } from "survey-creator-core";
import { CreatorPresetEditorModel } from "./presets-editor";
import { CreatorPresetEditableCaregorizedListConfigurator } from "./presets-editable-categorized";

const LocCategoriesName = "toolboxCategories";

function validateToolboxJson (params) {
  const value = params[0];
  if (!value || !value.type) return true;
  const obj = Serializer.createClass(value.type, value);
  return !!obj;
}
FunctionFactory.Instance.register("validateToolboxJson", validateToolboxJson);
export class CreatorPresetEditableToolboxConfigurator extends CreatorPresetEditableCaregorizedListConfigurator {
  private allItems: ICreatorPresetToolboxItem[];
  private createItemsMatrixJSON(props: any): any {
    const defaultJSON = {
      type: "matrixdynamic",
      name: "items",
      titleLocation: "hidden",
      allowRowReorder: true,
      cellType: "text",
      showHeader: false,
      rowCount: 0,
      allowAddRows: false,
      addRowButtonLocation: "top",
      addRowText: "Add Custom Item",
      "noRowsText": "There are no items",
      columns: [
        {
          "name": "name",
          visible: false
        },
        {
          "name": "title"
        },
        { name: "isDefault", type: "boolean", defaultValue: false, visible: false }
      ],
      detailPanelMode: "underRow",
      detailElements: [
        {
          "type": "panel",
          "name": "details",
          "elements": [
            { type: "text", name: "name", title: "Name", isUnique: true, isRequired: true },
            { type: "text", name: "iconName", title: "Icon name" },
            { type: "text", name: "tooltip", title: "Tooltip" },
          ]
        },
        {
          type: "presetjson",
          name: "json",
          startWithNewLine: false,
          renderAs: "default-comment",
          title: "JSON object to apply when users select this toolbox item",
          validators: [{
            type: "expression",
            text: "JSON should be correct",
            expression: "validateToolboxJson({json})"
          }],
          rows: 15
        }
      ]
    };
    return { ...defaultJSON, ...props };
  }

  public createMainPageCore(): any {
    return {
      title: "Set Up the Toolbox",
      navigationTitle: "Toolbox",
      elements: [

        {
          type: "matrixdynamic",
          name: this.nameCategories,
          titleLocation: "hidden",
          visibleIf: this.getTextVisibleIf(this.nameCategoriesMode, "categories"),
          minRowCount: 1,
          allowRowReorder: true,
          addRowButtonLocation: "top",
          addRowText: "Add Custom Category",
          showHeader: false,
          columns: [
            { cellType: "text", name: "category", isUnique: true, isRequired: true, visible: false },
            { name: "isDefault", type: "boolean", defaultValue: false, visible: false },
            { cellType: "text", name: "title" }
          ],
          detailPanelMode: "underRow",
          detailElements: [
            { type: "text", name: "category", isRequired: true, visible: false },
            { type: "text", name: "tooltip", visible: false },
            this.createItemsMatrixJSON({
              name: this.nameInnerMatrix,
              valueName: "items"
            })
          ]
        },
        this.createItemsMatrixJSON({
          name: this.nameItems,
          startWithNewLine: false,
          visibleIf: this.getTextVisibleIf(this.nameCategoriesMode, "items"),
        }),
        this.createItemsMatrixJSON({
          allowAddRows: true,
          addRowButtonLocation: "top",
          addRowText: "Add Custom Item",
          startWithNewLine: false,
          name: this.nameMatrix,
          "descriptionLocation": "underInput",
          description: "Drag an item from this column to the left one - it will appear visible in the toolbox. You can also move them, using plus and minus buttons near the item."
        }),
        {
          type: "panel",
          name: "panel_toolbox_controls",
          elements: [
            {
              type: "boolean",
              name: this.nameCategoriesMode,
              title: "Enable grouping",
              useTitleAsLabel: true,
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
              useTitleAsLabel: true,
              visibleIf: this.getTextVisibleIf(this.nameCategoriesMode, "categories"),
              clearIfInvisible: "onHidden",
              startWithNewLine: false,
              renderAs: "checkbox"
            }]
        }
      ]
    };
  }
  public get nameCategoriesMode() { return this.fullPath + "_mode"; }
  protected get nameItems() { return this.fullPath + "_items"; }
  protected get nameShowCategoryTitles() { return this.fullPath + "_showCategoryTitles"; }

  public getJsonValueCore(model: SurveyModel, creator: SurveyCreatorModel): any {
    const res: any = {};
    const definition = this.getJsonItemsDefinition(model);
    if (definition) {
      res.definition = definition;
    }
    const mode = model.getValue(this.nameCategoriesMode);
    const toolbox = creator.toolbox;
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
      const categoryItems = categories[i].items;
      if (!Helpers.isTwoValueEquals(categoryItems, toolboxItems, true)) return false;
    }
    return true;
  }

  private getCategoriesJson(model: SurveyModel): any {
    const categories = model.getValue(this.nameCategories);
    if (!Array.isArray(categories)) return undefined;
    return categories.map(c => ({ category: c.category, title: c.title, items: c.items.map(i => i.name) }));
  }
  private cleanIfNotDiffers(item, defaultItem) {
    if (!defaultItem) return true;
    let differs = false;
    Object.keys(item).forEach(key => {
      if (!Helpers.isTwoValueEquals(item[key], defaultItem[key])) {
        differs = true;
        return;
      }
      if (key !== "name") delete item[key];
    });
    return differs;
  }
  private getJsonItemsDefinition(model: SurveyModel): any {
    const mode = model.getValue(this.nameCategoriesMode);
    const itemsRaw = (mode === "items") ? model.getValue(this.nameItems) : model.getValue(this.nameCategories).map(c => c.items).flat();
    const items = itemsRaw.map(i => ({ ...i, isDefault: undefined }));
    let differs = false;
    items.forEach(item => {
      if (this.cleanIfNotDiffers(item, this.defaultItems.filter(i => i.name == item.name)[0])) differs = true;
    });
    if (!differs && !Helpers.isTwoValueEquals(items.map(i=>i.name), this.defaultItems.map(i=>i.name))) differs = true;
    return differs ? items : undefined;
  }
  protected isItemsMatrix(question: QuestionMatrixDynamicModel): boolean {
    return question.name === this.nameItems || super.isItemsMatrix(question);
  }
  public onMatrixRowRemoving(model: SurveyModel, creator: SurveyCreatorModel, options: any) {
    if (options.question.name == this.nameMatrix) {
      const mode = model.getValue(this.nameCategoriesMode);
      if (mode === "items") {
        this.restoreItems(this.getQuestionItems(model), options.question, options.rowIndex);
      }
    }
    super.onMatrixRowRemoving(model, creator, options);
  }
  protected setupQuestionsCore(model: SurveyModel, creatorSetup: ICreatorPresetEditorSetup): void {
    this.setupPageQuestions(model, creatorSetup.creator);
  }
  private setupPageQuestions(model: SurveyModel, creator: SurveyCreatorModel): void {
    this.defaultItems = creator.toolbox.getDefaultItems([], true, true, true);
    this.setQuestionItemsRows(model);
  }
  private setQuestionItemsRows(model: SurveyModel): void {
    //this.allItems = this.getDefaultToolboxItems(model);
    //const q = this.getMatrix(model);
    //q.value = this.allItems.filter(i => !i.category);
  }
  // private isItemValuesEqual(a: Array<ICreatorPresetToolboxItem>, b: Array<ICreatorPresetToolboxItem>): boolean {
  //   if (!a || !b || a.length !== b.length) return false;
  //   for (let i = 0; i < a.length; i++) {
  //     if (a[i].name !== b[i].name || a[i].title !== b[i].title) return false;
  //   }
  //   return true;
  // }
  // private updateRankingLocalizationName(question: QuestionMatrixDynamicModel): void {
  //   question.choices.forEach(item => {
  //     item.locText.localizationName = "qt." + item.value;
  //   });
  // }
  protected setupQuestionsValueCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    //this.setupQuestionsValueDefinition(model, json);
    this.getQuestionItems(model).value = creator.toolbox.items.map(i => this.createToolboxItemRow(i));
    const categories = creator.toolbox.categories.map(c => ({ category: c.name, isDefault: true, items: c.items.map(i => this.createToolboxItemRow(i)) }));
    model.setValue(this.nameCategories, categories);
    this.updateShowCategoriesTitlesElements(model);
  }
  protected onLocaleChangedCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    const newCreator = new SurveyCreatorModel({});
    newCreator.locale = creator.locale;
    this.setupPageQuestions(model, newCreator);
    this.setupQuestionsValueCore(model, json, newCreator);
  }
  // private setupQuestionsValueDefinition(model: SurveyModel, json: any): void {
  //   json = json || {};
  //   const question = this.getMatrix(model);
  //   const value = [];
  //   const definition = json.definition || [];
  //   definition.forEach(item => {
  //     const val = {};
  //     for (let key in item) {
  //       val[key] = key === "json" ? JSON.stringify(item[key], null, 2) : item[key];
  //     }
  //     value.push(val);
  //   });
  //   question.value = value;
  // }
  private updateItemsFromCategories(model: SurveyModel) {
    this.getQuestionItems(model).value = this.getQuestionCategories(model).value.map(r => [...r.items]).flat();
  }

  private updateCategoriesFromItems(model: SurveyModel) {
    const categories = this.getQuestionCategories(model).value;
    const items = [...this.getQuestionItems(model).value];
    const itemsObject = items.reduce((acc, item) => {
      acc[item.name] = item;
      return acc;
    }, {});
    categories.forEach(category => {
      category.items = category.items.map(item => {
        const res = itemsObject[item.name];
        delete itemsObject[item.name];
        return res;
      }).filter(i => !!i);
    });
    const unsortedNames = Object.keys(itemsObject);
    if (unsortedNames.length > 0) {
      let generalCategory = this.findOrCreateGeneralCategory(categories);
      generalCategory.items = generalCategory.items.concat(unsortedNames.map(name => this.createToolboxItemRow(itemsObject[name])));
    }
    this.getQuestionCategories(model).value = categories;
  }
  protected updateOnValueChangedCore(model: SurveyModel, name: string): void {
    super.updateOnValueChangedCore(model, name);
    if (name === this.nameCategoriesMode) {
      if (model.getValue(this.nameCategoriesMode) == "items") {
        this.updateItemsFromCategories(model);
      } else {
        this.updateCategoriesFromItems(model);
      }
    }
    if (name === this.nameShowCategoryTitles) {
      this.updateShowCategoriesTitlesElements(model);
    }
  }
  private updateShowCategoriesTitlesElements(model: SurveyModel): void {
    const val = model.getValue(this.nameShowCategoryTitles) === true;
    const matrix = this.getQuestionCategories(model);
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
        CreatorPresetEditableBase.updateModifiedText(locStrs, r.getValue("title"), "qt." + r.getValue("name"));
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
  private createToolboxItemRow(item: QuestionToolboxItem): ICreatorPresetToolboxItem {
    return <ICreatorPresetToolboxItem> { name: item.name, isDefault: true, title: item.title, iconName: item.iconName, tooltip: item.tooltip, json: item.json, category: item.category };
  }
}