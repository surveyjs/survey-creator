import { Action, createDropdownActionModel, IAction, MatrixDynamicRowModel, PopupModel, QuestionMatrixDynamicModel, SurveyModel } from "survey-core";
import { SurveyCreatorModel, SurveyHelper } from "survey-creator-core";
import { CreatorPresetEditableList } from "./presets-editable-list";
import { listComponentCss } from "./presets-theme/list-theme";
export class CreatorPresetEditableCaregorizedListConfigurator extends CreatorPresetEditableList {
  //private replaceNonLettersWithDash(inputString) {
  //  return inputString?.replace(/[^a-zA-Z0-9]/g, "-");
  //}
  protected defaultCategories: any;
  protected getDefaultItems(question?: QuestionMatrixDynamicModel) {
    return question?.name === this.nameCategories ? this.defaultCategories : this.defaultItems;
  }
  protected get nameInnerMatrix() { return "items"; }
  protected get nameCategories() { return this.fullPath + "_categories"; }
  public getMainElementNames() : any { return [this.nameCategories]; }
  protected getMatrixKeyColumnName(question: QuestionMatrixDynamicModel) : any {
    return question.name === this.nameCategories ? "category" : "name";
  }
  public get questionNames() {
    return [this.nameCategories];
  }

  protected setupCategoryActions(model: SurveyModel, creator: SurveyCreatorModel, question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel, actions: IAction[]): void {
    actions.forEach(a => {
      if (a.id == "remove-row") {
        a.iconName = "icon-delete_24x24";
        a.innerCss = "sps-action-button sps-action-button--icon sps-action-button--danger";
      }
      if (a.id == "reset-to-default") {
        a.action = () => { this.resetCategory(model, row); };
      }
    });
  }

  protected ejectRowData(question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel, remove: boolean) {
    const value = question.value;
    const rowDataIndex = question.visibleRows.indexOf(row);
    const rowData = value[rowDataIndex];
    if (remove) {
      value.splice(rowDataIndex, 1);
      question.value = value;
    }
    return rowData;
  }

  private moveToCategory(model: SurveyModel, question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel, categoryName: string, remove = false) {
    const rowData = this.ejectRowData(question, row, remove);
    const categories = this.getQuestionCategories(model);
    const catValue = categories.value;
    const general = this.findOrCreateCategory(catValue, categoryName);
    general[this.nameInnerMatrix].push(rowData);
    categories.value = catValue;
  }

  protected itemMenuCategoriesEnabled(model: SurveyModel) {
    return true;
  }

  protected getItemMenuActionsCore(model: SurveyModel, question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel) {
    const categories = this.getQuestionCategories(model).value;
    const actions = [] as IAction[];
    const isUnsorted = question.name == this.nameMatrix;
    const hasCategories = this.itemMenuCategoriesEnabled(model);
    if (!isUnsorted) {
      actions.push(
        new Action({
          id: "remove-from",
          title: "Remove from " + question.title,
          action: () => {
            const rowDataIndex = question.visibleRows.indexOf(row);
            question.removeRow(rowDataIndex);
          }
        })
      );
    } else {
      if (hasCategories) {
        actions.push(new Action({
          id: "move-to",
          title: "Move To...",
          css: "sps-list__item--label",
          enabled: false
        }));
      } else {
        actions.push(new Action({
          id: "restore-item",
          title: "Add to Toolbox",
          action: () => {
            const rowDataIndex = question.visibleRows.indexOf(row);
            question.removeRow(rowDataIndex);
          }
        }));
      }
    }

    if (!hasCategories) return actions;

    const moveToCategories = categories.map((i: any) => new Action({
      id: "to-" + i.category,
      title: i.title,
      action: () => {
        this.moveToCategory(model, question, row, i.category, true);
      }
    }));
    if (!isUnsorted) {
      actions.push(new Action({
        id: "categories",
        title: "Categories",
        css: "sps-list__item--label",
        enabled: false,
        needSeparator: true
      }));
      const catGroup = new Action({
        id: "move-to-categories",
        title: "Move to category..."
      });
      catGroup.setSubItems({ items: moveToCategories, cssClasses: listComponentCss });
      actions.push(catGroup);
    } else {
      actions.push(...moveToCategories);
    }

    actions.push(
      new Action({
        id: "move-to-new-category",
        title: "Move to new category",
        needSeparator: isUnsorted,
        action: () => {
          this.moveToCategory(model, question, row, this.getDefaultValueForRow(question, "category"), true);
        }
      }));

    return actions;
  }

  protected getItemMenuActions(model: SurveyModel, question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel) {
    const actions = this.getItemMenuActionsCore(model, question, row);
    if (!this.getDefaultItem(question, row.value.name)) {
      actions.push(
        new Action({
          id: "remove-custom-item",
          title: "Delete Custom Item",
          needSeparator: true,
          action: () => {
            this.ejectRowData(question, row, true);
          }
        })
      );
    }
    return actions;
  }

  protected replaceRemoveAction(model: SurveyModel, question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel, actions: IAction[]): void {
    const originalAction = actions.filter(a => a.id == "remove-row")[0];
    if (originalAction) {
      originalAction.visible = false;

      const addAction = createDropdownActionModel({
        id: "context-menu",
        iconName: "more-circle-24x24",
        location: "end",
        visibleIndex: 20
      }, {
        items: [],
        showPointer: false,
        verticalPosition: "top",
        horizontalPosition: "center",
        cssClass: "sps-popup-menu",
        cssClasses: listComponentCss,
        searchEnabled: false
      });
      addAction.popupModel.onVisibilityChanged.add((_: PopupModel, opt: { model: PopupModel, isVisible: boolean }) => {
        if (opt.isVisible) {
          const listModel = opt.model.contentComponentData.model;
          listModel.actions = this.getItemMenuActions(model, question, row);
          listModel.flushUpdates();
        }
      });
      actions.push(addAction);
    }
  }

  protected getQuestionCategories(model: SurveyModel): QuestionMatrixDynamicModel { return <QuestionMatrixDynamicModel>model.getQuestionByName(this.nameCategories); }

  protected isItemsMatrix(name: string): boolean {
    return super.isItemsMatrix(name) || name === this.nameInnerMatrix;
  }
  private resetCategory(model: SurveyModel, row: MatrixDynamicRowModel) {
    const category = row.getValue("category");
    const defaultItems = this.defaultCategories.filter(i => i.category == category)[0]?.[this.nameInnerMatrix];
    if (!defaultItems) return;
    const categoriesQuestion = this.getQuestionCategories(model);
    const hiddenItemsQuestion = this.getMatrix(model);
    const hiddenValue = hiddenItemsQuestion.value || [];
    const value = categoriesQuestion.value;
    const categoryRow = value.filter(v => v.category == category)[0];
    categoryRow[this.nameInnerMatrix].forEach(i => {
      if (!defaultItems.some(di => di.name == i.name)) {
        hiddenValue.push(i);
      }
    });
    categoryRow[this.nameInnerMatrix] = defaultItems;
    function clearItemFromDefault(items: any) {
      if (!items) return;
      defaultItems.forEach(di => {
        const index = items.findIndex(i => i.name == di.name);
        if (index >= 0) items.splice(index, 1);
      });
    }
    value.filter(v => v.category != category).forEach(v => {
      defaultItems.forEach(di => {
        clearItemFromDefault(v[this.nameInnerMatrix]);
      });
    });
    clearItemFromDefault(hiddenValue);

    hiddenItemsQuestion.value = hiddenValue;
    categoriesQuestion.value = value;
    this.notifyCallback("Category restored to default");
  }
  protected findOrCreateCategory(categories: any, category?: string) {
    let generalCategory = categories.filter(c => c.category == category)[0];
    if (!generalCategory) {
      generalCategory = { category: category || "general", title: category || "General", [this.nameInnerMatrix]: [] };
      categories.push(generalCategory);
    }
    return generalCategory;
  }
  protected needToSetActions(name: string) {
    return this.isItemsMatrix(name) || name === this.nameCategories;
  }
  protected onGetMatrixRowActionsCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    super.onGetMatrixRowActionsCore(model, creator, options);
    if (options.question.name === this.nameCategories) {
      this.setupCategoryActions(model, creator, options.question, options.row, options.actions);
    }
    if (this.isItemsMatrix(options.question.name)) {
      this.replaceRemoveAction(model, options.question, options.row, options.actions);
    }
  }

  public onMatrixRowRemoving(model: SurveyModel, creator: SurveyCreatorModel, options: any) {
    super.onMatrixRowRemoving(model, creator, options);
    if (options.question.name == this.nameCategories) {
      const items = options.question.value[options.rowIndex][this.nameInnerMatrix];
      if (items) {
        const hiddenItems = this.getMatrix(model);
        const value = hiddenItems.value ? hiddenItems.value.concat(items) : items;
        hiddenItems.value = value;
      }
    }
    if (options.question.name == this.nameMatrix) {
      const rowData = options.question.value[options.rowIndex];
      const defaultCategory = this.defaultCategories.filter(c => c[this.nameInnerMatrix].filter(i => i.name == rowData.name).length > 0)[0];
      this.moveToCategory(model, options.question, options.row, defaultCategory?.category);
    }
  }
  public onMatrixRowAdded(model: SurveyModel, creator: SurveyCreatorModel, options: any) {
    super.onMatrixRowAdded(model, creator, options);
    if (options.question.name == this.nameCategories) {
      this.setDefaultValueForRow(options.question, options.row);
    }
  }
}

