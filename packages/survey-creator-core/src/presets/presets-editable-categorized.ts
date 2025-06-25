import { FunctionFactory, Helpers, IDialogOptions, ItemValue, MatrixDropdownRowModelBase, MatrixDynamicRowModel, QuestionMatrixDynamicModel, Serializer, settings, SurveyModel } from "survey-core";
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

  protected get nameInnerMatrix() { return "items"; }
  protected get nameCategories() { return this.fullPath + "_categories"; }
  //private fillAutoName(question: QuestionMatrixDynamicModel, propName: string) {
  //   question.value?.filter(v =>v.isDefault === false && !v[propName]).forEach(v => v[propName] = this.replaceNonLettersWithDash(v.title));
  //}
  protected updateOnValueChangedCore(model: SurveyModel, name: string) {
    // if (name == this.nameCategories) {
    //   this.fillAutoName(this.getQuestionCategories(model), "category");
    // }
    // if (name == this.nameMatrix) {
    //   this.fillAutoName(this.getMatrix(model), "name");
    // }
  }
  private editCategory(model: SurveyModel, row: MatrixDynamicRowModel) {
    const survey = this.showDetailPanelInPopup(this.getQuestionCategories(model), row, model.rootElement, false);
    if (survey) {
      const category = survey.getQuestionByName("category");
      const isDefault = row.getQuestionByName("isDefault");

      if (category) {
        category.visible = true;
        if (isDefault) category.readOnly = isDefault.value;
      }
      survey.getAllQuestions().forEach(q => q.visible = q.name != this.nameInnerMatrix);
    }
  }

  protected getQuestionCategories(model: SurveyModel): QuestionMatrixDynamicModel { return <QuestionMatrixDynamicModel>model.getQuestionByName(this.nameCategories); }

  protected isItemsMatrix(question: QuestionMatrixDynamicModel): boolean {
    return super.isItemsMatrix(question) || question.name === this.nameInnerMatrix;
  }
  private resetCategory(model: SurveyModel, row: MatrixDynamicRowModel) {
    const category = row.getValue("category");
    const defaultItems = this.defaultItems.filter(i => i.category == category);
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
  protected onGetMatrixRowActionsCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    super.onGetMatrixRowActionsCore(model, creator, options);
    if (options.question.name === this.nameCategories) {
      options.question.cssClasses.detailIconExpandedId = "icon-collapse-24x24";
      options.question.cssClasses.detailIconId = "icon-expand-24x24";

      const iconName = options.question.value?.filter(v => v.category == options.row.getValue("category"))[0]?.iconName;
      if (iconName) {
        options.actions.push({
          id: iconName,
          iconName: iconName,
          location: "start",
          enabled: false
        });
      }

      options.actions.push({
        id: "reset-to-default",
        iconName: "icon-reset",
        location: "end",
        visibleIndex: 15,
        action: ()=>{ this.resetCategory(model, options.row); }
      });

      options.actions.push({
        id: "edit-category",
        iconName: "icon-edit",
        location: "end",
        visibleIndex: 13,
        action: ()=>{ this.editCategory(model, options.row); }
      });
      options.actions.forEach(a => {
        if (a.id == "show-detail") {
          a.location = "end";
          a.iconName = "icon-expand-24x24",
          a.visibleIndex = 10;
        }
        if (a.id == "remove-row") a.visibleIndex = 20;
      });
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