import { FunctionFactory, Helpers, IDialogOptions, ItemValue, MatrixDropdownRowModelBase, MatrixDynamicRowModel, QuestionMatrixDynamicModel, Serializer, settings, SurveyModel, Action, IAction } from "survey-core";
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

  protected get nameItems() { return this.path + "_items"; }
  protected get nameMatrix() { return this.fullPath + "_matrix"; }
  protected get nameSubitems() { return "subitems"; }
  public getMainElementName() : any { return this.nameMatrix; }
  protected defaultItems: any[];
  //private fillAutoName(question: QuestionMatrixDynamicModel, propName: string) {
  //   question.value?.filter(v =>v.isDefault === false && !v[propName]).forEach(v => v[propName] = this.replaceNonLettersWithDash(v.title));
  //}

  protected updateResetAction(question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel, actions: IAction[]) {
    const rowData = question.value.filter(r => row.value.name == r.name)[0];
    const defaultItem = this.defaultItems.filter(i => i.name == rowData.name)[0];
    if (defaultItem) {
      const defaultData = {};
      Object.keys(rowData).forEach(key => defaultData[key] = defaultItem[key]);
      const resetAction = actions.filter(a => a.id == "reset-to-default")[0];
      resetAction.enabled = !Helpers.isTwoValueEquals(rowData, defaultData);
    }
  }

  protected createResetAction(model: SurveyModel, row: MatrixDynamicRowModel, action: (action: Action) => void): IAction {
    return {
      id: "reset-to-default",
      iconName: "icon-reset",
      location: "end",
      visibleIndex: 15,
      action: action
    };
  }

  protected createEditAction(model: SurveyModel, creator: SurveyCreatorModel, question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel): IAction {
    return {
      id: "edit-category",
      iconName: "icon-edit",
      location: "end",
      visibleIndex: 13,
      action: () => { this.editItem(model, creator, question, row); }
    };
  }

  protected createIconAction(iconName: string, cssClass: string = "sps-matrixdynamic__row-icon"): IAction {
    return {
      id: iconName,
      iconName: iconName,
      innerCss: cssClass,
      location: "start",
      enabled: false
    };
  }

  protected setupStandardActions(actions: IAction[], question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel, isItemsMatrix: boolean = false): void {
    actions.forEach(a => {
      if (a.id == "show-detail") {
        a.location = "end";
        a.iconName = "icon-expand-24x24";
        a.visibleIndex = 10;
      }
      if (a.id == "remove-row") {
        a.visibleIndex = 20;
        a.component = "sv-action-bar-item";
        a.action = () => question.removeRowUI(row);
        a.iconName = isItemsMatrix ? "icon-add_24x24" : "icon-remove_24x24";
      }
    });
  }

  protected updateOnValueChangedCore(model: SurveyModel, name: string) {
    // if (name == this.nameCategories) {
    //   this.fillAutoName(this.getQuestionCategories(model), "category");
    // }
    // if (name == this.nameMatrix) {
    //   this.fillAutoName(this.getMatrix(model), "name");
    // }
  }
  private editItem(model: SurveyModel, creator: SurveyCreatorModel, question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel) {
    let survey;
    const resetAction = {
      id: "reset-to-default",
      title: "Reset to default",
      css: "sps-action--grow",
      innerCss: "sps-btn sps-btn--secondary-alert",
      visibleIndex: 15,
      action: (a)=>{
        const defaultItem = this.defaultItems.filter(i => i.name == survey.getQuestionByName("name").value)[0];
        survey.data = defaultItem;
        creator.notify(a.title);
      }
    };
    survey = this.showDetailPanelInPopup(question, row, model.rootElement, { actions: [new Action(resetAction)] });
    if (survey) {
      // const isDefault = row.getQuestionByName("isDefault");
      // const name = survey.getQuestionByName("name");
      // if (name && isDefault) name.readOnly = isDefault.value;
      survey.getAllPanels().forEach(q => q.visible = true);
      survey.getAllQuestions().forEach(q => q.visible = q.name != this.nameSubitems);
    }
  }

  private resetItem(model: SurveyModel, question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel) {
    const name = row.getValue("name");
    const defaultItems = this.defaultItems.filter(i => i.name == name)[0];
    if (defaultItems) {
      const value = question.value;
      const itemRow = value.filter(v => v.name == name)[0];
      Object.keys(itemRow).forEach((key) => {
        itemRow[key] = defaultItems[key];
      });
      question.value = value;
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
      if (iconName) {
        options.actions.push(this.createIconAction(iconName));
      }
      const resetAction = this.createResetAction(model, options.row, (action: Action) => {
        this.resetItem(model, options.question, options.row);
        action.enabled = false;
      });
      options.actions.push(resetAction);

      options.question.cssClasses.detailIconExpandedId = "icon-edit";
      options.question.cssClasses.detailIconId = "icon-edit";

      options.actions.push(this.createEditAction(model, creator, options.question, options.row));

      this.setupStandardActions(options.actions, options.question, options.row, options.question.name == this.nameMatrix);
      this.updateResetAction(options.question, options.row, options.actions);
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
  public onMatrixCellValueChanged(model: SurveyModel, creator: SurveyCreatorModel, options: any) {
    if (options.question.name == this.nameMatrix || options.question.name == this.nameItems) {
      const renderedRow = options.question.renderedTable.rows.find(r => r.row == options.row);
      const actions = renderedRow.cells[renderedRow.cells.length - 1].item.value.actions;
      this.updateResetAction(options.question, options.row, actions);
    }
  }
}