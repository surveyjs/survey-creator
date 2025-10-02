import { Helpers, MatrixDynamicRowModel, QuestionMatrixDynamicModel, SurveyModel, Action, IAction, SvgRegistry, Question } from "survey-core";
import { CreatorPresetEditableBase } from "./presets-editable-base";
import { SurveyCreatorModel, SurveyHelper, getLocString } from "survey-creator-core";
export class CreatorPresetEditableList extends CreatorPresetEditableBase {
  //private replaceNonLettersWithDash(inputString) {
  //  return inputString?.replace(/[^a-zA-Z0-9]/g, "-");
  //}
  private defaultIcon = "square-dashed-24x24";
  protected get nameItems() { return this.path + "_items"; }
  protected get nameMatrix() { return this.fullPath + "_matrix"; }
  protected hasIcon(_: string) { return false; }
  public getMainElementNames() : any { return [this.nameItems]; }
  protected get iconList() { return Object.keys(SvgRegistry.icons).map(name => "icon-" + name); }
  protected getMatrixKeyColumnName(question: QuestionMatrixDynamicModel) : any { return "name"; }
  protected getDefaultItems(question?: QuestionMatrixDynamicModel) {
    return this.defaultItems;
  }
  protected getDefaultItem(question: QuestionMatrixDynamicModel, key: string) {
    const keyColumn = this.getMatrixKeyColumnName(question);
    return this.getDefaultItems(question).filter(i => i[keyColumn] == key)[0];
  }

  protected defaultItems: any;
  //private fillAutoName(question: QuestionMatrixDynamicModel, propName: string) {
  //   question.value?.filter(v =>v.isDefault === false && !v[propName]).forEach(v => v[propName] = this.replaceNonLettersWithDash(v.title));
  //}

  protected updateOnValueChangedCore(model: SurveyModel, name: string): void {
    if (this.needToSetActions(name)) {
      const matrix = model.getQuestionByName(name) as QuestionMatrixDynamicModel;
      this.updateMatrixRowActions(model, matrix);
    }
  }

  protected updateMatrixRowActions(model: SurveyModel, matrix: QuestionMatrixDynamicModel) {
    matrix.renderedTable.rows.forEach(r => {
      if (!r.row) return;
      const iconActions = r.cells[1]?.item?.value.actions;
      this.updateRowActions(matrix, r.row as MatrixDynamicRowModel, iconActions);
      const actions = r.cells[r.cells.length - 1].item?.value.actions;
      this.updateRowActions(matrix, r.row as MatrixDynamicRowModel, actions);
    });
  }

  protected updateRowActions(question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel, actions: IAction[]) {
    if (!actions) return;
    const keyColumn = this.getMatrixKeyColumnName(question);
    if (!question.value) return;
    const rowData = question.value.filter(r => row.value[keyColumn] == r[keyColumn])[0];
    if (!rowData) return;
    actions.forEach(a => this.updateRowAction(question, rowData, keyColumn, a));
  }

  protected updateRowAction(question: QuestionMatrixDynamicModel, rowData: any, keyColumn: string, action: IAction) {
    if (action.id == "icon-action") {
      action.iconName = rowData.iconName || this.defaultIcon;
    }
    if (action.id == "reset-to-default") {
      const defaultItem = this.getDefaultItem(question, rowData[keyColumn]);
      if (!defaultItem) return;
      const defaultData = {};
      Object.keys(rowData).forEach(key => defaultData[key] = defaultItem[key]);
      action.enabled = !Helpers.isTwoValueEquals(rowData, defaultData);
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
      id: "edit-item",
      iconName: "icon-edit",
      location: "end",
      visibleIndex: 13,
      action: () => { this.editItem(model, creator, question, row); }
    };
  }

  protected createIconAction(iconName: string, cssClass: string = "sps-matrixdynamic__row-icon"): IAction {
    return {
      id: "icon-action",
      iconName: iconName,
      innerCss: cssClass,
      location: "start",
      enabled: false
    };
  }

  protected setupStandardActions(actions: IAction[], question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel, allowExpand: boolean, isItemsMatrix: boolean): void {
    actions.forEach(a => {
      if (a.id == "show-detail") {
        a.location = "end";
        a.iconName = "icon-expand-24x24";
        a.visibleIndex = 10;
        a.visible = allowExpand;
      }
      if (a.id == "remove-row") {
        a.visibleIndex = 20;
        a.component = "sv-action-bar-item";
        a.action = () => question.removeRowUI(row);
        a.iconName = isItemsMatrix ? "icon-add_24x24" : "icon-remove_24x24";
      }
    });
  }

  private editItem(model: SurveyModel, creator: SurveyCreatorModel, question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel) {
    let survey: SurveyModel;
    let resetAction;
    const itemKey = this.getMatrixKeyColumnName(question);
    const resetActionParams = {
      id: "reset-to-default",
      title: getLocString("presets.editor.resetToDefault"),
      css: "sps-action--grow",
      innerCss: "sps-btn sps-btn--secondary-alert",
      visibleIndex: 15,
      action: (a) => {
        const defaultItem = this.getDefaultItem(question, survey.getValue(itemKey));
        survey.data = defaultItem;
        resetAction.enabled = false;
        this.notifyCallback(getLocString("presets.editor.itemRestoredToDefault"));
      }
    };
    resetAction = new Action(resetActionParams);
    survey = this.showDetailPanelInPopup(question, row, model.rootElement, { actions: [resetAction] });
    resetAction.enabled = !Helpers.isTwoValueEquals(survey.data, this.getDefaultItem(question, survey.getValue(itemKey)));
    survey.onValueChanged.add(()=>resetAction.enabled = true);
    const keyQuestion = survey.getQuestionByName(itemKey);
    if (this.getDefaultItem(question, keyQuestion.value)) {
      keyQuestion.readOnly = true;
    }
  }

  private resetItem(model: SurveyModel, question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel) {
    const name = row.getValue("name");
    const defaultItems = this.getDefaultItem(question, name);
    if (defaultItems) {
      const value = question.value;
      const itemRow = value.filter(v => v.name == name)[0];
      Object.keys(itemRow).forEach((key) => {
        itemRow[key] = defaultItems[key];
      });
      question.value = value;
    }
    this.notifyCallback(getLocString("presets.editor.itemRestoredToDefault"));
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

  protected isItemsMatrix(name: string): boolean {
    return name === this.nameMatrix;
  }
  protected needToSetActions(name: string) {
    return this.isItemsMatrix(name);
  }
  protected onGetMatrixRowActionsCore(model: SurveyModel, creator: SurveyCreatorModel, options: any): void {
    if (this.needToSetActions(options.question.name)) {
      const question = options.question as QuestionMatrixDynamicModel;
      const allowExpand = question.detailElements.filter(e => e.visible).length > 0;
      if (this.hasIcon(options.question.name)) {
        const keyColumn = this.getMatrixKeyColumnName(options.question);
        const iconName = question.value?.filter(v => v[keyColumn] == options.row.getValue(keyColumn))[0]?.iconName || this.defaultIcon;
        options.actions.push(this.createIconAction(iconName));
      }
      const resetAction = this.createResetAction(model, options.row, (action: Action) => {
        this.resetItem(model, question, options.row);
        action.enabled = false;
      });
      options.actions.push(resetAction);

      question.cssClasses.detailIconExpandedId = "icon-collapse-24x24";
      question.cssClasses.detailIconId = "icon-expand-24x24";

      options.actions.push(this.createEditAction(model, creator, question, options.row));

      this.setupStandardActions(options.actions, question, options.row, allowExpand, question.name == this.nameMatrix);
      this.updateRowActions(question, options.row, options.actions);
    }
  }
  public onMatrixRowDragOver(model: SurveyModel, creator: SurveyCreatorModel, options: any) {
    if (this.isItemsMatrix(options.fromMatrix.name) && this.isItemsMatrix(options.toMatrix.name)) {
      options.allow = true;
    }
  }
  public onMatrixRowRemoving(model: SurveyModel, creator: SurveyCreatorModel, options: any) {
    if (this.isItemsMatrix(options.question.name) && options.question.name != this.nameMatrix) {
      const rowData = options.question.value[options.rowIndex];
      const hiddenItems = this.getMatrix(model);
      const value = hiddenItems.value ? [...hiddenItems.value] : [];
      value.push(rowData);
      hiddenItems.value = value;
    }
  }

  protected getExistingKeys(model: SurveyModel, key: string) {
    const items = model.getQuestionByName(this.nameItems).value || [];
    const unsorted = model.getQuestionByName(this.nameMatrix).value || [];
    return [...items, ...unsorted].map(i => i[key]).filter(v => !!v);
  }

  protected getDefaultValueForRow(model: SurveyModel, question: QuestionMatrixDynamicModel, key: string) {
    return SurveyHelper.getNewName(this.getExistingKeys(model, key).map(r => ({ name: r })), key);
  }

  protected setDefaultValueForRow(model: SurveyModel, question: QuestionMatrixDynamicModel, row: MatrixDynamicRowModel) {
    const key = this.getMatrixKeyColumnName(question);
    const value = this.getDefaultValueForRow(model, question, key);
    row.getQuestionByName(key).value = value;
    row.getQuestionByName("title").value = value;
  }
  public onMatrixRowAdded(model: SurveyModel, creator: SurveyCreatorModel, options: any) {
    if (this.isItemsMatrix(options.question.name)) {
      this.setDefaultValueForRow(model, options.question, options.row);
    }
  }
  public onMatrixCellValueChanged(model: SurveyModel, creator: SurveyCreatorModel, options: any) {
    if (this.needToSetActions(options.question.name)) {
      const renderedRow = options.question.renderedTable.rows.find(r => r.row == options.row);
      if (!renderedRow) return;
      const actions = renderedRow.cells[renderedRow.cells.length - 1].item.value.actions;
      if (!actions) return;
      this.updateRowActions(options.question, options.row, actions);
    }
  }
}
