import { Action, IAction, ComputedUpdater, createDropdownActionModelAdvanced } from "survey-core";
import { getLogicString } from "./logic-types";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { editorLocalization } from "../../editorLocalization";
import { SurveyLogicUI } from "./logic-ui";
import { SurveyHelper } from "../../survey-helper";
import { listComponentCss } from "../list-theme";

export class TabLogicPlugin implements ICreatorPlugin {
  private filterQuestionAction: Action;
  private filterActionTypeAction: Action;
  private fastEntryAction: Action;
  public model: SurveyLogicUI;

  public static iconName = "icon-logic-24x24";

  constructor(private creator: SurveyCreatorModel) {
    creator.addTab({ name: "logic", plugin: this, iconName: TabLogicPlugin.iconName });
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
      if (!loc) loc = "en";
      const type = this.model.actionTypeFilter;
      const allType = this.showAllActionTypesText;
      return !!type ? this.model.getTypeByName(type).displayName : allType;
    });
  }
  private createFilterQuestionTitleUpdater(): any {
    return <any>new ComputedUpdater<string>(() => {
      let loc = this.creator.locale;
      if (!loc) loc = "en";
      const questionFilter = this.model.questionFilter;
      const allQuestions = this.showAllQuestionsText;
      return !!questionFilter ? questionFilter : allQuestions;
    });
  }
  public update(): void {
    if (!this.model) return;
    this.model.update(this.creator.survey);
  }
  public canDeactivateAsync(onSuccess: () => void): void {
    if (!!this.model) {
      this.model.tryLeaveUI((res) => {
        if (!res) {
          this.creator.notify(editorLocalization.getString("ed.lg.expressionInvalid"), "error");
        } else {
          onSuccess();
        }
      });
      return;
    }
    onSuccess();
  }
  public deactivate(): boolean {
    this.disposeObjs();
    return true;
  }
  public dispose(): void {
    this.disposeObjs();
  }
  private disposeObjs(): void {
    this.filterActionTypeAction.title = undefined;
    this.filterQuestionAction.title = undefined;
    if (this.model) {
      this.model.dispose();
      this.model = undefined;
    }

    this.filterQuestionAction.visible = false;
    this.filterActionTypeAction.visible = false;
    this.fastEntryAction && (this.fastEntryAction.visible = false);
  }
  public createActions() {
    const items: Array<Action> = [];
    const onQuestionPopupShow = () => {
      const items = this.model.getUsedQuestions().map(question => { return { id: question.name, title: this.creator.getObjectDisplayName(question, "logic-tab:question-filter", "condition", question.name) }; });
      SurveyHelper.sortItems(items, "title");
      const listModel = this.filterQuestionAction.popupModel.contentComponentData.model;
      listModel.setItems([{ id: null, title: this.showAllQuestionsText }].concat(items));
    };

    this.filterQuestionAction = createDropdownActionModelAdvanced({
      id: "svc-logic-filter-question",
      visible: false,
    }, {
      items: [{ id: null, title: this.showAllQuestionsText }],
      onSelectionChanged: (item: IAction) => {
        this.model.questionFilter = !!item.id ? item.id : "";
      },
      allowSelection: true,
      cssClasses: listComponentCss,
      locOwner: this.creator
    }, {
      verticalPosition: "bottom",
      horizontalPosition: "center",
      cssClass: "svc-creator-popup",
      onShow: onQuestionPopupShow
    });
    items.push(this.filterQuestionAction);

    const onActionTypesPopupShow = () => {
      const items = this.model.getUsedActionTypes().map(type => { return { id: type.name, title: type.displayName }; });
      SurveyHelper.sortItems(items, "title");
      const listModel = this.filterActionTypeAction.popupModel.contentComponentData.model;
      listModel.setItems([{ id: null, title: this.showAllActionTypesText }].concat(items));
    };

    this.filterActionTypeAction = createDropdownActionModelAdvanced({
      id: "svc-logic-filter-actiontype",
      visible: false,
    }, {
      items: [{ id: null, title: this.showAllActionTypesText }],
      onSelectionChanged: (item: IAction) => {
        this.model.actionTypeFilter = !!item.id ? item.id : "";
      },
      allowSelection: true,
      cssClasses: listComponentCss,
      locOwner: this.creator
    }, {
      verticalPosition: "bottom",
      horizontalPosition: "center",
      cssClass: "svc-creator-popup",
      onShow: onActionTypesPopupShow
    });
    items.push(this.filterActionTypeAction);

    if (this.creator.logicAllowTextEditExpressions) {
      this.fastEntryAction = new Action({
        id: "svc-logic-fast-entry",
        css: "sv-action--logic-fast-entry",
        iconName: "icon-fast-entry",
        iconSize: "auto",
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
