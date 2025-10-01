import { Action, FunctionFactory, Helpers, IAction, MatrixDynamicRowModel, QuestionMatrixDynamicModel, Serializer, SurveyModel } from "survey-core";
import { CreatorPresetEditableBase, ICreatorPresetEditorSetup } from "./presets-editable-base";
import { QuestionToolboxCategory, QuestionToolboxItem, SurveyCreatorModel, editorLocalization } from "survey-creator-core";
import { ICreatorPresetToolboxItem } from "survey-creator-core";
import { CreatorPresetEditableCaregorizedListConfigurator } from "./presets-editable-categorized";
import { listComponentCss } from "./presets-theme/list-theme";

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
  protected defaultSubitems: any;
  private createItemsMatrixJSON(props: any, addSubitems: boolean): any {
    const defaultJSON = {
      type: "matrixdynamic",
      name: "items",
      title: "Toolbox",
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
        }
      ],
      detailPanelMode: "underRow",
      detailElements: [
        {
          "type": "panel",
          "name": "details",
          "maxWidth": "30%",
          "elements": [
            { type: "text", name: "name", title: "Name", isUnique: true, visible: false, isRequired: true },
            { type: "text", name: "title", title: "Title", visible: false },
            { type: "dropdown", name: "iconName", title: "Icon name", itemComponent: "svc-presets-icon-item", "allowCustomChoices": true, choices: this.iconList, visible: false },
            { type: "text", name: "tooltip", title: "Tooltip", visible: false },
          ],
          visible: false
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
          rows: 15,
          visible: false
        }
      ]
    };
    const newJson = { ...defaultJSON, ...props };
    if (addSubitems) {
      newJson.detailElements.push(this.createItemsMatrixJSON({
        allowAddRows: true,
        addRowText: "Add a new subitem",
        addRowButtonLocation: "bottom",
        name: this.nameSubitems,
        valueName: "subitems",
        titleLocation: "hidden",
        startWithNewLine: false
      }, false));
    }
    return newJson;
  }

  public createMainPageCore(): any {
    return {
      title: "Set up the Toolbox",
      description: "Select the toolbox items you want to show, group them into categories, \nrename them, and change their order if required.",
      navigationTitle: "Toolbox",
      elements: [
        {
          type: "panel",
          name: this.mainPanelName,
          elements: [
            {
              type: "matrixdynamic",
              name: this.nameCategories,
              title: "Toolbox",
              visibleIf: this.getTextVisibleIf(this.nameCategoriesMode, "categories"),
              minRowCount: 1,
              allowRowReorder: true,
              allowAddRows: true,
              addRowButtonLocation: "top",
              addRowText: "Add Custom Category",
              showHeader: false,
              columns: [
                { cellType: "text", name: "category", isUnique: true, isRequired: true, visible: false },
                { cellType: "text", name: "title" }
              ],
              detailPanelMode: "underRow",
              detailElements: [
                { type: "text", name: "category", title: "Name", isRequired: true, visible: false },
                { type: "text", name: "title", title: "Title", visible: false },
                { type: "text", name: "tooltip", title: "Tooltip", visible: false },
                this.createItemsMatrixJSON({
                  name: this.nameInnerMatrix,
                  titleLocation: "hidden",
                  allowAddRows: true,
                  addRowButtonLocation: "bottom",
                  addRowText: "Add a new item",
                  valueName: "items"
                }, true)
              ]
            },
            this.createItemsMatrixJSON({
              name: this.nameItems,
              title: "Toolbox",
              addRowButtonLocation: "top",
              addRowText: "Add Custom Item",
              startWithNewLine: false,
              visibleIf: this.getTextVisibleIf(this.nameCategoriesMode, "items"),
            }, true),
            this.createItemsMatrixJSON({
              allowAddRows: true,
              title: "Unsorted items",
              description: "Drag an item from this column to the left one - it will appear visible in the Toolbox panel. You can also move items, using plus (+) and minus (-) buttons.",
              descriptionLocation: "underInput",
              addRowButtonLocation: "bottom",
              addRowText: "Add a new item",
              startWithNewLine: false,
              name: this.nameMatrix
            }, false)]
        },
        {
          type: "panel",
          title: " ",
          name: this.navigationPanelName,
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
              renderAs: "switch"
            },
            {
              type: "boolean",
              name: this.nameShowCategoryTitles,
              title: "Show category titles",
              defaultValue: false,
              titleLocation: "hidden",
              visibleIf: this.getTextVisibleIf(this.nameCategoriesMode, "categories"),
              clearIfInvisible: "onHidden",
              renderAs: "switch"
            }
          ]
        }
      ]
    };
  }
  public get nameCategoriesMode() { return this.fullPath + "_mode"; }
  protected get nameItems() { return this.fullPath + "_items"; }
  protected get nameSubitems() { return "subitems"; }
  protected get nameShowCategoryTitles() { return this.fullPath + "_showCategoryTitles"; }
  public get questionNames() {
    return [this.nameCategories, this.nameItems, this.nameMatrix, this.nameShowCategoryTitles, this.nameCategoriesMode];
  }
  protected hasIcon(name: string) { return name !== this.nameCategories && name !== this.nameSubitems; }

  protected getDefaultItems(question?: QuestionMatrixDynamicModel) {
    return question?.name === this.nameCategories ? this.defaultCategories : [...this.defaultItems, ...this.defaultSubitems];
  }

  protected updateRowAction(question: QuestionMatrixDynamicModel, rowData: any, keyColumn: string, action: IAction) {
    super.updateRowAction(question, rowData, keyColumn, action);
    if (action.id == "show-detail" && question.name != this.nameCategories) {
      action.visible = !!rowData.subitems;
    }
  }

  private findItem(value: any, itemName: string, hasCategories: boolean) {
    return hasCategories ?
      value.map(c => c.items.filter(i => i.name == itemName)[0]).filter(i => !!i)[0] :
      value.filter(i => i.name == itemName)[0];
  }

  private moveToSubitems(model: SurveyModel, question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel, itemName: string, remove = false) {
    const rowData = this.ejectRowData(question, row, remove);
    const hasCategories = this.itemMenuCategoriesEnabled(model);
    const destination = hasCategories ? this.getQuestionCategories(model) : this.getQuestionItems(model);
    const destValue = JSON.parse(JSON.stringify(destination.value));
    const item = this.findItem(destValue, itemName, hasCategories);
    if (item) {
      if (!item.subitems) item.subitems = [];
      item.subitems.push(rowData);
    }
    destination.value = destValue;
  }

  protected getExistingKeys(model: SurveyModel, key: string) {
    const superItems = super.getExistingKeys(model, key);
    const items = model.getQuestionByName(this.nameItems).value || [];
    const keys = items.map(i => i[key]).filter(v => !!v);
    return [...superItems, ...keys];
  }

  protected itemMenuCategoriesEnabled(model: SurveyModel) {
    return model.getValue(this.nameCategoriesMode) !== "items";
  }

  protected getItemMenuActionsCore(model: SurveyModel, question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel) {
    const categories = this.getQuestionCategories(model).value;
    const actions = super.getItemMenuActionsCore(model, question, row);
    const hasCategories = this.itemMenuCategoriesEnabled(model);
    const catActions = categories.map((c: any) => {
      const catAction = new Action({
        id: "tosubitemcategory-" + c.category,
        title: c.title
      });
      if (c.items) {
        const itemsActions = c.items.map((i: any) => new Action({
          id: "tosubitem-" + i.name,
          title: i.title,
          action: () => {
            this.moveToSubitems(model, question, row, i.name, true);
          }
        }));
        catAction.setSubItems({ items: itemsActions, cssClasses: listComponentCss });
      }
      return catAction;
    }
    );
    const subItems = hasCategories ? catActions : catActions.map(a => a.items).flat();
    const rowDataIndex = question.visibleRows.indexOf(row);
    const rowData = question.value[rowDataIndex];
    if (!rowData["subitems"]) {
      if (question.name == this.nameItems || question.name == this.nameInnerMatrix) {
        actions.push(new Action({
          id: "subcategories",
          title: "Subcategories",
          css: "sps-list__item--label",
          enabled: false,
          needSeparator: true
        }));
        actions.push(new Action({
          id: "convert-to-subcategory",
          title: "Convert to subcategory...",
          action: () => {
            const destination = hasCategories ? this.getQuestionCategories(model) : this.getQuestionItems(model);
            const destValue = JSON.parse(JSON.stringify(destination.value));
            const item = this.findItem(destValue, rowData.name, hasCategories);
            if (item) {
              item.subitems = [];
            }
            destination.value = destValue;
            this.updateMatrixRowActions(model, question.name);
          }
        }));
      }
      const subitemsAction = new Action({
        id: "move-as-subitem",
        title: "Move as subitem"
      });
      subitemsAction.setSubItems({ items: subItems, cssClasses: listComponentCss });
      actions.push(subitemsAction);
    }

    return actions;
  }

  public getJsonValueCore(model: SurveyModel, creator: SurveyCreatorModel, defaultJson: any): any {
    const res: any = {};
    const definition = this.getJsonItemsDefinition(model);
    if (definition) {
      res.definition = definition;
    }
    const mode = model.getValue(this.nameCategoriesMode);
    const toolbox = creator.toolbox;
    const toolboxCategories = defaultJson?.categories;
    if (mode === "categories") {
      const categories = this.getCategoriesJson(model);
      if (Array.isArray(categories) && categories.length > 0 && (!this.isCategoriesSame(categories, toolboxCategories))) {
        res.categories = this.getCategoriesJson(model);
      }
    } else {
      res.categories = [];
    }
    if (model.getValue(this.nameShowCategoryTitles)) {
      res.showCategoryTitles = true;
    }
    return Object.keys(res).length > 0 ? res : undefined;
  }
  protected getDefaultJsonValueCore(creator: SurveyCreatorModel): any {
    return {
      categories: creator.toolbox.categories.map(c => ({ category: c.name, title: c.title, items: c.items.map(i => i.name) }))
    };
  }
  private isCategoriesSame(categories: any, toolboxCategories: any): boolean {
    if (categories.length !== toolboxCategories.length) return false;
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].category !== toolboxCategories[i].category) return false;
      if (categories[i].title !== toolboxCategories[i].title) return false;
      const toolboxItems = toolboxCategories[i].items;
      const categoryItems = categories[i].items;
      if (!Helpers.isTwoValueEquals(categoryItems, toolboxItems)) return false;
    }
    return true;
  }

  private getCategoriesJson(model: SurveyModel): any {
    const categories = model.getValue(this.nameCategories);
    if (!Array.isArray(categories)) return undefined;
    return categories.map(c => ({ category: c.category, title: c.title, items: c.items?.map(i => i.name) }));
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
    const items = (itemsRaw || []).map(i => ({ ...i }));
    let differs = false;
    items.forEach(item => {
      if (this.cleanIfNotDiffers(item, this.defaultItems.filter(i => i.name == item.name)[0])) differs = true;
    });
    if (!differs && !Helpers.isTwoValueEquals(items.map(i=>i.name), this.defaultItems.map(i=>i.name))) differs = true;
    return differs ? items : undefined;
  }
  protected isItemsMatrix(name: string): boolean {
    return name === this.nameItems || name === this.nameSubitems || super.isItemsMatrix(name);
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

  protected setupOnCurrentPageCore(model: SurveyModel, creator: SurveyCreatorModel, active: boolean): void {
    creator.toolbox.forceCompact = !active;
    creator.toolbox.isCompact = !active;
    creator.readOnly = active;
    creator.toolbox.items.forEach(i => i.enabled = active);
    creator.toolbox.enabled = active;
    this.propertyGridSetObj(null);
  }

  protected setupQuestionsCore(model: SurveyModel, creatorSetup: ICreatorPresetEditorSetup): void {
    super.setupQuestionsCore(model, creatorSetup);
    this.setupDefaults(model, creatorSetup.creator);
  }
  private setupDefaults(model: SurveyModel, creator: SurveyCreatorModel): void {
    const toolboxDefaultItems = creator.toolbox.getDefaultItems([], true, true, true);
    const toolboxDefaultCategories = creator.toolbox.getDefaultCategories();
    this.defaultItems = toolboxDefaultItems.map(i => this.createToolboxItemRow(i));
    this.defaultSubitems = [];
    toolboxDefaultItems.forEach(i => {
      if (i.items) {
        this.defaultSubitems.push(...i.items.map(si => this.createToolboxItemRow(si)));
      }
    });
    this.defaultCategories = toolboxDefaultCategories.map(i => this.createToolboxCategoryRow(i));
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
    const defaultItemsMap: any = {};
    this.defaultItems.forEach((i: any) => defaultItemsMap[i.name] = i);
    json = json || {};
    let itemsDefinition = (json["definition"] || []).map(i => typeof i === "string" ? { name: i } : i);
    let categoriesDefinition = json["categories"] || [];
    if (itemsDefinition.length === 0) {
      itemsDefinition = this.defaultItems;
    } else {
      itemsDefinition = itemsDefinition.map(i => ({ ...(defaultItemsMap[itemsDefinition.name] || {}), ...i }));
    }
    const itemsMap: any = {};
    itemsDefinition.forEach((i: any) => itemsMap[i.name] = i);
    if (categoriesDefinition.length === 0) {
      categoriesDefinition = this.defaultCategories;
    } else {
      categoriesDefinition = categoriesDefinition.map(c => ({ ...c, ...{ items: c.items.map(i => itemsMap[i]) } }));
    }

    //categories.filter((c: any) => c.properties).forEach((c: any) => c.properties.forEach((p: any) => delete itemsMap[p.name]));
    //Object.keys(itemsMap).map(key => itemsMap[key]);
    categoriesDefinition.filter((c: any) => c.items).forEach((c: any) => c.items.forEach((p: any) => delete defaultItemsMap[p.name]));
    const hiddenItems = this.defaultItems.filter(t => defaultItemsMap[t.name]);

    model.setValue(this.nameMatrix, hiddenItems);
    model.setValue(this.nameCategories, categoriesDefinition);
    this.updateItemsFromCategories(model);
    this.updateShowCategoriesTitlesElements(model);
  }
  protected onLocaleChangedCore(model: SurveyModel, json: any, creator: SurveyCreatorModel): void {
    const newCreator = new SurveyCreatorModel({});
    newCreator.locale = creator.locale;
    this.setupDefaults(model, newCreator);
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
      let generalCategory = this.findOrCreateCategory(categories, "general");
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
    const obj:ICreatorPresetToolboxItem = {
      name: item.name,
      title: item.title,
      iconName: item.iconName,
      tooltip: item.tooltip,
      json: item.json,
      subitems: item.items?.map(i => this.createToolboxItemRow(i))
    };

    for (const key in obj) {
      if (obj[key] === undefined) {
        delete obj[key];
      }
    }
    return obj;
  }
  private createToolboxCategoryRow(item: QuestionToolboxCategory) {
    const obj = {
      category: item.name,
      title: item.title,
      items: item.items?.map(i => this.createToolboxItemRow(i))
    };

    for (const key in obj) {
      if (obj[key] === undefined) {
        delete obj[key];
      }
    }
    return obj;
  }
}