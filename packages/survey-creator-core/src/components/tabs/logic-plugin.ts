import { BaseAction, Action, IAction, PopupModel, ListModel, ComputedUpdater } from "survey-core";
import { getLogicString } from "./logic-types";
import { CreatorBase, ICreatorPlugin } from "../../creator-base";
import { editorLocalization } from "../../editorLocalization";
import { SurveyLogicUI } from "./logic-ui";
import { SurveyHelper } from "../../survey-helper";

export class TabLogicPlugin implements ICreatorPlugin {
  private filterQuestionAction: Action;
  private filterActionTypeAction: Action;
  private fastEntryAction: Action;
  public model: SurveyLogicUI;
  constructor(private creator: CreatorBase) {
    creator.addPluginTab("logic", this);
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
  }
  public activate(): void {
    this.model = new SurveyLogicUI(this.creator.survey, this.creator);

    this.filterQuestionAction.title = this.createFilterQuestionTitleUpdater();
    this.filterQuestionAction.visible = true;
    this.filterActionTypeAction.title = this.createFilterTypeTitleUpdater();
    this.filterActionTypeAction.visible = true;

    if (this.fastEntryAction) {
      this.fastEntryAction.visible = true;
      this.fastEntryAction.active = this.model.expressionEditorIsFastEntry;
      this.fastEntryAction.enabled = false;
    }

    this.model.onPropertyChanged.add((sender, options) => {
      if (!!this.fastEntryAction && options.name === "expressionEditorIsFastEntry") {
        this.fastEntryAction.active = this.model.expressionEditorIsFastEntry;
      }
      if (!!this.fastEntryAction && options.name === "expressionEditorCanShowBuilder") {
        this.fastEntryAction.enabled = this.model.expressionEditorCanShowBuilder;
      }
    });
  }
  private createFilterTypeTitleUpdater(): any {
    return <any>new ComputedUpdater<string>(() => {
      let loc = this.creator.locale;
      if(!loc) loc = "en";
      const type = this.model.actionTypeFilter;
      const allType = this.showAllActionTypesText;
      return !!type ? this.model.getTypeByName(type).displayName : allType; });
  }
  private createFilterQuestionTitleUpdater(): any {
    return <any>new ComputedUpdater<string>(() => {
      let loc = this.creator.locale;
      if(!loc) loc = "en";
      const questionFilter = this.model.questionFilter;
      const allQuestions = this.showAllQuestionsText;
      return !!questionFilter ? questionFilter : allQuestions; });
  }
  public update(): void {
    if (!this.model) return;
    this.model.update(this.creator.survey);
  }
  public deactivate(): boolean {
    if (!!this.model && this.model.haveUnsavedRules()) {
      this.creator.notify(editorLocalization.getString("ed.lg.expressionInvalid"), "error");
      return false;
    }

    this.filterActionTypeAction.title = undefined;
    this.filterQuestionAction.title = undefined;
    if (this.model) {
      this.model.dispose();
      this.model = undefined;
    }

    this.filterQuestionAction.visible = false;
    this.filterActionTypeAction.visible = false;
    this.fastEntryAction && (this.fastEntryAction.visible = false);

    return true;
  }
  public createActions() {
    const items: Array<Action> = [];
    const onQuestionPopupShow = () => {
      const items = this.model.getUsedQuestions().map(question => { return { id: question.name, title: this.creator.getObjectDisplayName(question, "logic-tab:question-filter", "condition", question.name) }; });
      SurveyHelper.sortItems(items, "title");
      questionPopupModel.contentComponentData.model.setItems([{ id: null, title: this.showAllQuestionsText }].concat(items));
    };
    const questionListModel = new ListModel(
      [{ id: null, title: this.showAllQuestionsText }],
      (item: IAction) => {
        this.model.questionFilter = !!item.id ? item.id : "";
        questionPopupModel.toggleVisibility();
      }, true);
    questionListModel.locOwner = this.creator;
    const questionPopupModel = new PopupModel<{ model: ListModel<BaseAction> }>(
      "sv-list", { model: questionListModel }, "bottom", "center",
      undefined, undefined, undefined, undefined, undefined, onQuestionPopupShow
    );

    this.filterQuestionAction = new Action({
      id: "svc-logic-filter-question",
      visible: false,
      component: "sv-action-bar-item-dropdown",
      popupModel: questionPopupModel,
      action: () => { questionPopupModel.toggleVisibility(); }
    });
    items.push(this.filterQuestionAction);

    const onActionTypesPopupShow = () => {
      const items = this.model.getUsedActionTypes().map(type => { return { id: type.name, title: type.displayName }; });
      SurveyHelper.sortItems(items, "title");
      actionTypesPopupModel.contentComponentData.model.setItems([{ id: null, title: this.showAllActionTypesText }].concat(items));
    };
    const actionTypesListModel = new ListModel(
      [{ id: null, title: this.showAllActionTypesText }],
      (item: IAction) => {
        this.model.actionTypeFilter = !!item.id ? item.id : "";
        actionTypesPopupModel.toggleVisibility();
      }, true);
    actionTypesListModel.locOwner = this.creator;
    const actionTypesPopupModel = new PopupModel<{ model: ListModel<BaseAction> }>(
      "sv-list", { model: actionTypesListModel }, "bottom", "center",
      undefined, undefined, undefined, undefined, undefined, onActionTypesPopupShow
    );

    this.filterActionTypeAction = new Action({
      id: "svc-logic-filter-actiontype",
      visible: false,
      component: "sv-action-bar-item-dropdown",
      popupModel: actionTypesPopupModel,
      action: () => { actionTypesPopupModel.toggleVisibility(); }
    });
    items.push(this.filterActionTypeAction);

    if (this.creator.allowEditExpressionsInTextEditor) {
      this.fastEntryAction = new Action({
        id: "svc-logic-fast-entry",
        iconName: "icon-fast-entry",
        locTitleName: "pe.fastEntry",
        visible: false,
        component: "sv-action-bar-item",
        action: () => {
          this.model.toggleExpressionEditorIsFastEntry();
        }
      });
      items.push(this.fastEntryAction);
    }
    return items;
  }
  private get showAllQuestionsText() { return getLogicString("showAllQuestions"); }
  private get showAllActionTypesText() { return getLogicString("showAllActionTypes"); }
}
