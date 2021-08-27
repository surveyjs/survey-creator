import {
  SurveyModel,
  AdaptiveActionContainer,
  Action,
  IAction,
  MatrixDropdownRowModelBase,
  PanelModel,
  QuestionMatrixDynamicModel
} from "survey-core";
import { ConditionEditor } from "../../property-grid/condition-survey";
import {
  ISurveyCreatorOptions,
  EmptySurveyCreatorOptions
} from "../../settings";
import { LogicItemEditor } from "./logic-item-editor";
import { getLogicString } from "./logic-types";
import { SurveyLogicAction } from "./logic-items";
import { SurveyLogic } from "./logic";
import { setSurveyJSONForPropertyGrid } from "../../property-grid/index";
import { CreatorBase, ICreatorPlugin } from "../../creator-base";
import {QuestionEmbeddedSurveyModel} from "../embedded-survey";
import { findAction, updateMatrixRemoveAction } from "../../utils/actions";

import "./logic-ui.scss";
import { editorLocalization } from "../../editorLocalization";

export class SurveyLogicUI extends SurveyLogic {
  private expressionEditorValue: ConditionEditor;
  private itemEditorValue: LogicItemEditor;
  private itemsSurveyValue: SurveyModel;
  public toolbar: AdaptiveActionContainer = new AdaptiveActionContainer();

  constructor(
    public survey: SurveyModel,
    public options: ISurveyCreatorOptions = null
  ) {
    super(survey, options);
    if (!this.options) this.options = new EmptySurveyCreatorOptions();
    //TODO
    this.itemsSurveyValue = this.options.createSurvey(
      this.getLogicItemSurveyJSON(),
      "logic-items"
    );
    //this.itemsSurveyValue.css = surveyDesignerCss;
    this.itemsSurvey.onMatrixRowRemoved.add((sender, options) => {
      const item = this.items[options.rowIndex];
      const isDeleteEditable = item === this.editableItem;
      this.removeItem(item);
      if(isDeleteEditable) {
        this.mode = "view";
        this.updateNewActionState();
      }
    });
    this.itemsSurvey.onGetMatrixRowActions.add((sender, options) => {
      if (this.readOnly) return;
      updateMatrixRemoveAction(options.question, options.actions, options.row)
    });
    this.updateItemsSurveyData();
    this.setupToolbarItems();
    this.itemEditorValue = new LogicItemEditor(null, this.options);
  }
  public dispose() {
    super.dispose();
    this.itemsSurveyValue.dispose();
  }
  /**
   * The list of toolbar items. You may add/remove/replace them.
   * @see IAction
   */
  public get toolbarItems(): Array<IAction> {
    return this.toolbar.actions;
  }
  public addNewUI() {
    if(this.items.length == 0 || !this.items[this.items.length - 1].isNew) {
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
    this.createExpressionPropertyEditor();
    this.expressionEditor.text = this.editableItem.expression;
    this.itemEditor.editableItem = this.editableItem;
  }
  protected onEndEditing() {
    super.onEndEditing();
    this.expressionEditorValue = null;
    this.itemEditor.editableItem = null;
  }
  protected onEditableItemApply() {
    this.expressionEditor.apply();
    this.itemEditor.apply();
    this.editableItem.apply(this.expressionEditor.text);
    if (this.editableItem.actions.length != this.itemEditor.panels.length) {
      this.itemEditor.editableItem = this.editableItem;
    }
    this.updateItemsSurveyData();
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
  private createExpressionPropertyEditor() {
    this.expressionEditorValue = new ConditionEditor(
      this.survey,
      null,
      this.options
    );
    this.expressionEditor.isModal = false;
  }
  private updateItemsSurveyData() {
    if (!this.itemsSurvey) return;
    const matrix = this.itemsSurvey.getQuestionByName("items");
    var data = [];
    for (var i = 0; i < this.items.length; i++) {
      data.push({
        conditions: this.items[i].expressionText,
        actions: this.items[i].actionsText
      });
    }
    matrix.value = data;
    matrix.onHasDetailPanelCallback = (
      row
    ) => {
      return true;
    };
    matrix.onCreateDetailPanelCallback = (
      row: MatrixDropdownRowModelBase,
      panel: PanelModel
    ) => {
      row.onDetailPanelShowingChanged = () => {
        if(row.isDetailPanelShowing) {
          if(this.mode === "view") {
            const logicItem = this.items[row.rowIndex - 1];
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
          if(this.saveEditableItem()) {
            row.hideDetailPanel(true);
          }
        }
      });
    };
  }
  private updateNewActionState(): void {
    const action = findAction(this.toolbar.actions, "svd-logic-addNew");
    if(!!action) {
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
  public model: SurveyLogicUI;
  constructor(private creator: CreatorBase<SurveyModel>) {
    creator.addPluginTab("logic", this);
  }
  public activate(): void {
    this.model = new SurveyLogicUI(this.creator.survey, this.creator);
  }
  public deactivate(): boolean {
    this.model.dispose();
    this.model = undefined;
    return true;
  }
}
