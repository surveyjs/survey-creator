import { FunctionFactory, Helpers, IDialogOptions, ItemValue, MatrixDropdownRowModelBase, MatrixDynamicRowModel, QuestionMatrixDynamicModel, Serializer, settings, SurveyModel } from "survey-core";
import { CreatorPresetEditableBase, ICreatorPresetEditorSetup } from "./presets-editable-base";
import { QuestionToolboxCategory, QuestionToolboxItem, SurveyCreatorModel, SurveyJSON5, editorLocalization } from "survey-creator-core";
import { PresetItemValue, QuestionPresetRankingModel } from "./preset-question-ranking";
import { ICreatorPresetToolboxItem } from "survey-creator-core";
import { CreatorPresetEditorModel } from "./presets-editor";
import { SurveyHelper } from "../survey-helper";

export class CreatorPresetEditableList extends CreatorPresetEditableBase {
  //private replaceNonLettersWithDash(inputString) {
  //  return inputString?.replace(/[^a-zA-Z0-9]/g, "-");
  //}

  protected get nameMatrix() { return this.fullPath + "_matrix"; }
  protected defaultItems: any[];
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
  protected updateOnMatrixDetailPanelVisibleChangedCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    if (this.isItemsMatrix(options.question)) {
      const survey = this.showDetailPanelInPopup(options.question, options.row, model.rootElement);
      const isDefault = options.row.getQuestionByName("isDefault");
      if (survey) {
        const name = survey.getQuestionByName("name");
        if (name && isDefault) name.readOnly = isDefault.value;
      }
    }
  }

  protected restoreItems(questionItems: QuestionMatrixDynamicModel, questionHiddenItems: QuestionMatrixDynamicModel, rowIndex: number) {
    const rowData = questionHiddenItems.value[rowIndex];
    const value = questionItems.value ? [...questionItems.value] : [];
    value.push(rowData);
    questionItems.value = value;
  }

  protected getMatrix(model: SurveyModel): QuestionMatrixDynamicModel {
    return <QuestionMatrixDynamicModel>model.getQuestionByName(this.nameMatrix);
  }

  protected isItemsMatrix(question: QuestionMatrixDynamicModel): boolean {
    return question.name === this.nameMatrix;
  }
  protected onGetMatrixRowActionsCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    if (this.isItemsMatrix(options.question)) {
      const iconName = options.question.value?.filter(v => v.name == options.row.getValue("name"))[0]?.iconName;
      options.actions.push({
        id: iconName,
        iconName: iconName,
        location: "start",
        enabled: false
      });
      options.question.cssClasses.detailIconExpandedId = "icon-edit";
      options.question.cssClasses.detailIconId = "icon-edit";

      options.actions.forEach(a => {
        if (a.id == "show-detail") {
          a.location = "end";
          a.iconName = "icon-edit",
          a.visibleIndex = 10;
        }
        if (a.id == "remove-row") {
          a.visibleIndex = 20;
          a.iconName = options.question.name == this.nameMatrix ? "icon-add_16x16" : "icon-remove_16x16";
        }
      });
    }
  }
  public onMatrixRowDragOver(model: SurveyModel, creator: SurveyCreatorModel, options: any) {
    if (this.isItemsMatrix(options.fromMatrix) && this.isItemsMatrix(options.toMatrix)) {
      options.allow = true;
    }
  }
  public onMatrixRowRemoving(model: SurveyModel, creator: SurveyCreatorModel, options: any) {
    if (this.isItemsMatrix(options.question) && options.question.name != this.nameMatrix) {
      const rowData = options.question.value[options.rowIndex];
      const hiddenItems = this.getMatrix(model);
      const value = hiddenItems.value ? [...hiddenItems.value] : [];
      value.push(rowData);
      hiddenItems.value = value;
    }
  }
  public onMatrixRowAdded(model: SurveyModel, creator: SurveyCreatorModel, options: any) {
    if (options.question.name == this.nameMatrix) {
      options.row.getQuestionByName("name").value = SurveyHelper.getNewName((options.question.value || []).map(r => ({ name: r.name })), "name");
    }
  }
}