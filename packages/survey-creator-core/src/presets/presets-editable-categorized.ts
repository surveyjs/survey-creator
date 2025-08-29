import { Action, FunctionFactory, Helpers, IAction, IDialogOptions, ItemValue, MatrixDropdownRowModelBase, MatrixDynamicRowModel, QuestionMatrixDropdownRenderedRow, QuestionMatrixDynamicModel, Serializer, settings, SurveyModel } from "survey-core";
import { CreatorPresetEditableBase, ICreatorPresetEditorSetup } from "./presets-editable-base";
import { QuestionToolboxCategory, QuestionToolboxItem, SurveyCreatorModel, SurveyJSON5, editorLocalization } from "survey-creator-core";
import { PresetItemValue, QuestionPresetRankingModel } from "./preset-question-ranking";
import { ICreatorPresetToolboxItem } from "survey-creator-core";
import { CreatorPresetEditorModel } from "./presets-editor";
import { SurveyHelper } from "../survey-helper";
import { CreatorPresetEditableList } from "./presets-editable-list";

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
  public getMainElementName() : any { return this.nameCategories; }
  protected getMatrixKeyColumnName(question: QuestionMatrixDynamicModel) : any { return question.name === this.nameCategories ? "category" : "name"; }
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

  protected getQuestionCategories(model: SurveyModel): QuestionMatrixDynamicModel { return <QuestionMatrixDynamicModel>model.getQuestionByName(this.nameCategories); }

  protected isItemsMatrix(question: QuestionMatrixDynamicModel): boolean {
    return super.isItemsMatrix(question) || question.name === this.nameInnerMatrix;
  }
  private resetCategory(model: SurveyModel, row: MatrixDynamicRowModel) {
    const category = row.getValue("category");
    const defaultItems = this.defaultCategories.filter(i => i.category == category)[0]?.items;
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
  }
  protected findOrCreateGeneralCategory(categories: any) {
    let generalCategory = categories.filter(c => c.category == "general")[0];
    if (!generalCategory) {
      generalCategory = { category: "general", title: "General", [this.nameInnerMatrix]: [] };
      categories.push(generalCategory);
    }
    return generalCategory;
  }
  protected needToSetActions(question: QuestionMatrixDynamicModel) {
    return this.isItemsMatrix(question) || question.name === this.nameCategories;
  }
  protected onGetMatrixRowActionsCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    super.onGetMatrixRowActionsCore(model, creator, options);
    if (options.question.name === this.nameCategories) {
      this.setupCategoryActions(model, creator, options.question, options.row, options.actions);
    }
  }
  public onMatrixRowRemoving(model: SurveyModel, creator: SurveyCreatorModel, options: any) {
    super.onMatrixRowRemoving(model, creator, options);
    if (options.question.name == this.nameCategories) {
      const items = options.question.value[options.rowIndex][this.nameInnerMatrix];
      const hiddenItems = this.getMatrix(model);
      const value = hiddenItems.value ? hiddenItems.value.concat(items) : items;
      hiddenItems.value = value;
    }
    if (options.question.name == this.nameMatrix) {
      const rowData = options.question.value[options.rowIndex];
      const categories = this.getQuestionCategories(model);
      const catValue = categories.value;
      const general = this.findOrCreateGeneralCategory(catValue);
      general[this.nameInnerMatrix].push(rowData);
      categories.value = catValue;
    }
  }
  public onMatrixRowAdded(model: SurveyModel, creator: SurveyCreatorModel, options: any) {
    super.onMatrixRowAdded(model, creator, options);
    if (options.question.name == this.nameCategories) {
      options.row.getQuestionByName("category").value = SurveyHelper.getNewName((options.question.value || []).map(r => ({ name: r.category })), "category");
    }
  }
}