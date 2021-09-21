import { SurveyModel, AdaptiveActionContainer, Action, IAction, MatrixDropdownRowModelBase, PanelModel, QuestionMatrixDynamicModel, PopupModel, ListModel, property, HashTable } from "survey-core";
import { ConditionEditor } from "../../property-grid/condition-survey";
import { ISurveyCreatorOptions, EmptySurveyCreatorOptions } from "../../settings";
import { LogicItemEditor } from "./logic-item-editor";
import { getLogicString } from "./logic-types";
import { SurveyLogicAction, SurveyLogicItem } from "./logic-items";
import { SurveyLogic } from "./logic";
import { setSurveyJSONForPropertyGrid } from "../../property-grid/index";
import { CreatorBase, ICreatorPlugin } from "../../creator-base";
import { QuestionEmbeddedSurveyModel } from "../embedded-survey";
import { findAction, updateMatrixRemoveAction } from "../../utils/actions";

import "./logic-ui.scss";

interface ILogicItemUI {
  expressionEditor: ConditionEditor;
   itemEditor: LogicItemEditor;
}

export class SurveyLogicUI extends SurveyLogic {
  private expressionEditorValue: ConditionEditor;
  private itemEditorValue: LogicItemEditor;
  private itemsSurveyValue: SurveyModel;
  private visibleItems: SurveyLogicItem[];
  private itemUIHash: HashTable<ILogicItemUI> = {};
  public toolbar: AdaptiveActionContainer = new AdaptiveActionContainer();

  constructor(
    public survey: SurveyModel,
    public options: ISurveyCreatorOptions = null
  ) {
    super(survey, options);
    if (!this.options) this.options = new EmptySurveyCreatorOptions();
    this.itemsSurveyValue = this.options.createSurvey(
      this.getLogicItemSurveyJSON(),
      "logic-items"
    );
    this.itemsSurvey.onMatrixRowRemoving.add((sender, options) => {
      const item = this.visibleItems[options.rowIndex];
      options.allow = this.canRemoveItem(item);
    });
    this.itemsSurvey.onMatrixRowRemoved.add((sender, options) => {
      const item = this.visibleItems[options.rowIndex];
      const isDeleteEditable = item === this.editableItem;
      this.removeItem(item, false);
      if (isDeleteEditable) {
        this.mode = "view";
        this.updateNewActionState();
      }
    });
    this.itemsSurvey.onGetMatrixRowActions.add((sender, options) => {
      if (this.readOnly) return;
      updateMatrixRemoveAction(options.question, options.actions, options.row);
    });
    this.updateItemsSurveyData();
    this.setupToolbarItems();
  }
  @property({
    onSet: (value, target: SurveyLogicUI) => {
      target.updateItemsSurveyData();
    }
  }) questionFilter: string;
  @property({
    onSet: (value, target: SurveyLogicUI) => {
      target.updateItemsSurveyData();
    }
  }) actionTypeFilter: string;
  public dispose(): void {
    super.dispose();
    for(let key in this.itemUIHash) {
      const itemUI = this.itemUIHash[key];
      itemUI.expressionEditor.dispose();
      itemUI.itemEditor.dispose();
    }
    this.itemUIHash = {};
  }
  /**
   * The list of toolbar items. You may add/remove/replace them.
   * @see IAction
   */
  public get toolbarItems(): Array<IAction> {
    return this.toolbar.actions;
  }
  public addNewUI() {
    if (this.items.length == 0 || !this.items[this.items.length - 1].isNew) {
      this.addNew();
    }
    const matrix = <QuestionMatrixDynamicModel>this.itemsSurvey.getQuestionByName("items");
    matrix.visibleRows[matrix.visibleRows.length - 1].showDetailPanel();
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "items") {
      this.updateItemsSurveyData();
    }
  }
  public get expressionEditor(): ConditionEditor {
    return this.expressionEditorValue;
  }
  public get itemEditor(): LogicItemEditor {
    return this.itemEditorValue;
  }
  public getExpressionEditor(item: SurveyLogicItem): ConditionEditor {
    return this.getLogicItemUI(item).expressionEditor;
  }
  public getLogicItemEditor(item: SurveyLogicItem): LogicItemEditor {
    return this.getLogicItemUI(item).itemEditor;
  }
  private getLogicItemUI(item: SurveyLogicItem): ILogicItemUI {
    let res: ILogicItemUI = this.itemUIHash[item.id];
    if(!res) {
      res = { expressionEditor: this.createExpressionPropertyEditor(), itemEditor: new LogicItemEditor(item, this.options) };
      res.expressionEditor.text = item.expression;
      this.itemUIHash[item.id] = res;
    }
    return res;
  }
  public get expressionSurvey(): SurveyModel {
    return this.expressionEditor.editSurvey;
  }
  public get itemEditorSurvey(): SurveyModel {
    return this.itemEditor.editSurvey;
  }
  public get itemsSurvey(): SurveyModel {
    return this.itemsSurveyValue;
  }
  protected onStartEditing() {
    super.onStartEditing();
    this.expressionEditorValue = this.getExpressionEditor(this.editableItem);
    this.itemEditorValue = this.getLogicItemEditor(this.editableItem);
  }
  protected onEndEditing() {
    if(!!this.editableItem) {
      this.editableItem.isModified = !!this.itemEditor && !!this.expressionEditor && (this.itemEditor.isModified || this.expressionEditor.text !== this.editableItem.expression);
    }
    super.onEndEditing();
    this.expressionEditorValue = null;
    this.itemEditorValue = null;
  }
  protected onEditableItemApply() {
    this.expressionEditor.apply();
    this.itemEditor.apply();
    this.editableItem.apply(this.expressionEditor.text);
    if (this.editableItem.actions.length != this.itemEditor.panels.length) {
      this.itemEditor.setEditableItem(this.editableItem);
    }
    this.editableItem.isNew = false;
    if (!this.editableItem.isSuitable(this.questionFilter, this.actionTypeFilter)) {
      this.questionFilter = "";
      this.actionTypeFilter = "";
    } else {
      this.updateItemsSurveyData();
    }
  }
  protected hasErrorInUI(): boolean {
    if (!this.expressionEditor.isReady) {
      this.errorText = getLogicString("expressionInvalid");
      !!this.survey.creator &&
        this.survey.creator.notify(this.errorText, "error");
      return true;
    }
    if (this.itemEditor.hasErrors()) {
      this.errorText = getLogicString("actionInvalid");
      !!this.survey.creator &&
        this.survey.creator.notify(this.errorText, "error");
      return true;
    }
    return false;
  }
  protected getExpressionText(): string {
    return this.expressionEditor.text;
  }
  protected getEditingActions(): Array<SurveyLogicAction> {
    return this.itemEditor.getEditingActions();
  }
  protected getLogicItemSurveyJSON(): any {
    var json = {
      elements: [
        {
          type: "matrixdynamic",
          name: "items",
          titleLocation: "hidden",
          detailPanelMode: "underRowSingle",
          allowAddRows: false,
          rowCount: 0,
          columns: [
            {
              cellType: "linkvalue",
              name: "conditions",
              readOnly: true,
              title: this.getLocString("ed.lg.conditions")
            },
            {
              cellType: "linkvalue",
              name: "actions",
              readOnly: true,
              title: this.getLocString("ed.lg.actions")
            }
          ]
        }
      ]
    };
    setSurveyJSONForPropertyGrid(json);
    return json;
  }
  private createExpressionPropertyEditor(): ConditionEditor {
    const res = new ConditionEditor(
      this.survey,
      null,
      this.options
    );
    res.isModal = false;
    return res;
  }
  private getVisibleItems(): SurveyLogicItem[] {
    return this.items.filter(item => item.isNew || item.isSuitable(this.questionFilter, this.actionTypeFilter));
  }
  private updateItemsSurveyData() {
    if (!this.itemsSurvey) return;
    const matrix = this.itemsSurvey.getQuestionByName("items");
    var data = [];
    this.visibleItems = this.getVisibleItems();
    for (var i = 0; i < this.visibleItems.length; i++) {
      data.push({
        conditions: this.visibleItems[i].expressionText,
        actions: this.visibleItems[i].actionsText
      });
    }
    matrix.value = data;
    matrix.onHasDetailPanelCallback = (row) => { return true; };
    matrix.onCreateDetailPanelCallback = (
      row: MatrixDropdownRowModelBase,
      panel: PanelModel
    ) => {
      row.onDetailPanelShowingChanged = () => {
        if (row.isDetailPanelShowing) {
          if (this.mode === "view") {
            const logicItem = this.visibleItems[row.rowIndex - 1];
            this.editItem(logicItem);
          }
          const condQuestion = <QuestionEmbeddedSurveyModel>panel.getQuestionByName("conditions");
          const actionsQuestion = <QuestionEmbeddedSurveyModel>panel.getQuestionByName("actions");
          condQuestion.embeddedSurvey = this.expressionEditor.editSurvey;
          actionsQuestion.embeddedSurvey = this.itemEditorValue.editSurvey;
        } else {
          this.mode = "view";
        }
        this.updateNewActionState();
      };
      panel.addNewQuestion("embeddedsurvey", "conditions");
      panel.addNewQuestion("embeddedsurvey", "actions");

      panel.footerActions.push({
        id: "saveDetailPanel",
        innerCss: "sv-btn sv-matrixdynamic__add-btn",
        title: this.getLocString("pe.doneEditing"),
        action: () => {
          if (this.saveEditableItem()) {
            row.hideDetailPanel(true);
          }
        }
      });
    };
  }
  private updateNewActionState(): void {
    const action = findAction(this.toolbar.actions, "svd-logic-addNew");
    if (!!action) {
      action.enabled = this.mode !== "new";
    }
  }
  private setupToolbarItems() {
    this.toolbar.actions.push(
      new Action({
        id: "svd-logic-addNew",
        title: this.addNewText,
        tooltip: this.addNewText,
        component: "sv-action-bar-item",
        enabled: true,
        action: () => {
          this.addNewUI();
        }
      })
    );
  }
  public get addNewText(): string {
    var lgAddNewItem = getLogicString("addNewItem");
    return !!lgAddNewItem ? lgAddNewItem : this.getLocString("pe.addNew");
  }
}

export class TabLogicPlugin implements ICreatorPlugin {
  private filterQuestionAction: Action;
  private filterActionTypeAction: Action;
  private showAllQuestionsText = getLogicString("showAllQuestions");
  private showAllActionTypesText = getLogicString("showAllActionTypes");
  public model: SurveyLogicUI;
  constructor(private creator: CreatorBase<SurveyModel>) {
    creator.addPluginTab("logic", this);
  }
  get propertyGrid() {
    return null;
  }
  public activate(): void {
    this.model = new SurveyLogicUI(this.creator.survey, this.creator);

    this.filterQuestionAction.title = this.showAllQuestionsText;
    this.filterQuestionAction.visible = true;

    this.filterActionTypeAction.title = this.showAllActionTypesText;
    this.filterActionTypeAction.visible = true;

    this.model.onPropertyChanged.add((sender, options) => {
      if (options.name === "questionFilter") {
        this.filterQuestionAction.title = !!this.model.questionFilter ? this.model.questionFilter : this.showAllQuestionsText;
      }
      if (options.name === "actionTypeFilter") {
        this.filterActionTypeAction.title = !!this.model.actionTypeFilter ? this.model.getTypeByName(this.model.actionTypeFilter).displayName : this.showAllActionTypesText;
      }
    });
  }
  public deactivate(): boolean {
    this.model.dispose();
    this.model = undefined;

    this.filterQuestionAction.visible = false;
    this.filterActionTypeAction.visible = false;

    return true;
  }
  public createActions(items: Array<Action>) {
    const onQuestionPopupShow = () => {
      questionPopupModel.contentComponentData.model.items = [{ id: null, title: this.showAllQuestionsText }].concat(
        this.model.getUsedQuestions().map(question => { return { id: question.name, title: this.creator.getObjectDisplayName(question, "condition", question.name) }; })
      );
    };
    const questionPopupModel = new PopupModel<{ model: ListModel }>(
      "sv-list",
      {
        model: new ListModel(
          [{ id: null, title: this.showAllQuestionsText }],
          (item: IAction) => {
            this.model.questionFilter = !!item.id ? item.id : "";
            questionPopupModel.toggleVisibility();
          },
          true
        )
      },
      "bottom",
      "center",
      undefined, undefined, undefined, undefined, undefined, onQuestionPopupShow
    );

    this.filterQuestionAction = new Action({
      id: "svc-logic-filter-question",
      title: this.showAllQuestionsText,
      visible: false,
      component: "sv-action-bar-item-dropdown",
      popupModel: questionPopupModel,
      action: () => { questionPopupModel.toggleVisibility(); }
    });
    items.push(this.filterQuestionAction);

    const onActionTypesPopupShow = () => {
      actionTypesPopupModel.contentComponentData.model.items = [{ id: null, title: this.showAllActionTypesText }].concat(
        this.model.getUsedActionTypes().map(type => { return { id: type.name, title: type.displayName }; })
      );
    };
    const actionTypesPopupModel = new PopupModel<{ model: ListModel }>(
      "sv-list",
      {
        model: new ListModel(
          [{ id: null, title: this.showAllQuestionsText }],
          (item: IAction) => {
            this.model.actionTypeFilter = !!item.id ? item.id : "";
            actionTypesPopupModel.toggleVisibility();
          },
          true
        )
      },
      "bottom",
      "center",
      undefined, undefined, undefined, undefined, undefined, onActionTypesPopupShow
    );

    this.filterActionTypeAction = new Action({
      id: "svc-logic-filter-actiontype",
      title: this.showAllActionTypesText,
      visible: false,
      component: "sv-action-bar-item-dropdown",
      popupModel: actionTypesPopupModel,
      action: () => { actionTypesPopupModel.toggleVisibility(); }
    });
    items.push(this.filterActionTypeAction);
  }
}
