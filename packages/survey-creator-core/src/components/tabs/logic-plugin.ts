import { SurveyModel, Action, IAction, PopupModel, ListModel } from "survey-core";
import { getLogicString } from "./logic-types";
import { CreatorBase, ICreatorPlugin, CreatorAction } from "../../creator-base";
import { editorLocalization } from "../../editorLocalization";
import { SurveyLogicUI } from "./logic-ui";
import { SurveyHelper } from "../../survey-helper";

export class TabLogicPlugin implements ICreatorPlugin {
  private filterQuestionAction: CreatorAction;
  private filterActionTypeAction: CreatorAction;
  private fastEntryAction: CreatorAction;
  public model: SurveyLogicUI;
  constructor(private creator: CreatorBase) {
    creator.addPluginTab("logic", this);
    this.createActions().forEach(action => creator.toolbar.actions.push(action));
  }
  public activate(): void {
    this.model = new SurveyLogicUI(this.creator.survey, this.creator);

    this.filterQuestionAction.title = this.showAllQuestionsText;
    this.filterQuestionAction.visible = true;

    this.filterActionTypeAction.title = this.showAllActionTypesText;
    this.filterActionTypeAction.visible = true;

    if (this.fastEntryAction) {
      this.fastEntryAction.visible = true;
      this.fastEntryAction.active = this.model.expressionEditorIsFastEntry;
      this.fastEntryAction.enabled = false;
    }

    this.model.onPropertyChanged.add((sender, options) => {
      if (options.name === "questionFilter") {
        this.filterQuestionAction.updateTitle();
      }
      if (options.name === "actionTypeFilter") {
        this.filterActionTypeAction.updateTitle();
      }
      if (!!this.fastEntryAction && options.name === "expressionEditorIsFastEntry") {
        this.fastEntryAction.active = this.model.expressionEditorIsFastEntry;
      }
      if (!!this.fastEntryAction && options.name === "expressionEditorCanShowBuilder") {
        this.fastEntryAction.enabled = this.model.expressionEditorCanShowBuilder;
      }
    });
  }
  public update(): void {
    if (!this.model) return;
    this.model.update(this.creator.survey);
  }
  public deactivate(): boolean {
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

    this.filterQuestionAction = new CreatorAction({
      id: "svc-logic-filter-question",
      onUpdateTitle: () => { return !!this.model && !!this.model.questionFilter ? this.model.questionFilter : this.showAllQuestionsText; },
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
    const actionTypesPopupModel = new PopupModel<{ model: ListModel }>(
      "sv-list",
      {
        model: new ListModel(
          [{ id: null, title: this.showAllActionTypesText }],
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

    this.filterActionTypeAction = new CreatorAction({
      id: "svc-logic-filter-actiontype",
      onUpdateTitle: () => { return !!this.model && !!this.model.actionTypeFilter ?
        this.model.getTypeByName(this.model.actionTypeFilter).displayName : this.showAllActionTypesText; },
      visible: false,
      component: "sv-action-bar-item-dropdown",
      popupModel: actionTypesPopupModel,
      action: () => { actionTypesPopupModel.toggleVisibility(); }
    });
    items.push(this.filterActionTypeAction);

    if (this.creator.allowEditExpressionsInTextEditor) {
      this.fastEntryAction = new CreatorAction({
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
