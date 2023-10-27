import { Action, ActionContainer, Base, ComputedUpdater, IElement, Question, SurveyModel, property } from "survey-core";
import { getLocString } from "../editorLocalization";
import { scrollElementIntoView } from "../utils/utils";

export class SearchManager extends Base {
  private highlightedEditorClass = " spg-editor--highlighted";

  private currentMatchIndex: number;
  private currentMatch: Question;
  public searchActionBar: ActionContainer = new ActionContainer();
  public filterStringPlaceholder = getLocString("ed.propertyGridFilteredTextPlaceholder");

  @property() survey: SurveyModel;
  @property() isVisible: boolean;
  @property() filterString: string;
  @property() matchCounterText: string;
  @property() allMatches: Array<Question> = [];

  private expandAllParents(element: IElement) {
    if (!element) return;
    if (element.isCollapsed) {
      element.expand();
    }
    this.expandAllParents((<any>element).parent);
    this.expandAllParents((<any>element).parentQuestion);
  }
  private switchHighlightedEditor(index: number) {
    this.currentMatchIndex = index;
    const prevMatch = this.currentMatch;
    this.currentMatch = this.allMatches[index];
    prevMatch?.updateElementCss();
    if (!!this.currentMatch && prevMatch !== this.currentMatch) {
      this.currentMatch.updateElementCss();
      this.expandAllParents(this.currentMatch);
      setTimeout(() => {
        const elementId = this.currentMatch.id;
        scrollElementIntoView(elementId);
      }, 10);
    }

    const count = this.allMatches.length;
    const value = this.currentMatch ? index + 1 : "0";
    this.matchCounterText = !!this.filterString ? [value, count].join("/") : "";
  }
  private navigateToEditor(index: number) {
    if (index < 0) {
      index = this.allMatches.length - 1;
    }
    if (index >= this.allMatches.length) {
      index = 0;
    }
    this.switchHighlightedEditor(index);
  }

  initActionBar() {
    const searchActions = [];

    searchActions.push(new Action({
      id: "svd-grid-search-prev",
      iconName: "icon-previous_16x16",
      component: "sv-action-bar-item",
      title: getLocString("ed.prevFocus"),
      showTitle: false,
      iconSize: 16,
      innerCss: "spg-search-editor_bar-item",
      visible: <any>new ComputedUpdater(() => !!this.filterString),
      enabled: <any>new ComputedUpdater(() => this.allMatches.length > 0),
      action: () => {
        if (this.allMatches.length > 0) {
          this.navigateToEditor(this.currentMatchIndex - 1);
        }
      }
    }));

    searchActions.push(new Action({
      id: "svd-grid-search-next",
      iconName: "icon-next_16x16",
      component: "sv-action-bar-item",
      title: getLocString("ed.nextFocus"),
      showTitle: false,
      iconSize: 16,
      innerCss: "spg-search-editor_bar-item",
      visible: <any>new ComputedUpdater(() => !!this.filterString),
      enabled: <any>new ComputedUpdater(() => this.allMatches.length > 0),
      action: () => {
        if (this.allMatches.length > 0) {
          this.navigateToEditor(this.currentMatchIndex + 1);
        }
      }
    }));

    searchActions.push(new Action({
      id: "svd-grid-search-close",
      iconName: "icon-clear_16x16",
      component: "sv-action-bar-item",
      title: getLocString("ed.close"),
      showTitle: false,
      iconSize: 16,
      innerCss: "spg-search-editor_bar-item",
      visible: <any>new ComputedUpdater(() => !!this.filterString),
      action: () => {
        this.filterString = "";
      }
    }));

    this.searchActionBar.setItems(searchActions);
  }

  constructor() {
    super();
    this.initActionBar();
  }
  public setSurvey(newSurvey: SurveyModel) {
    this.survey = newSurvey;
    if (!!this.survey) {
      const _self = this;
      this.survey.onUpdateQuestionCssClasses.add(function (_, options) {
        const classes = options.cssClasses;
        if (options.question === _self.currentMatch) {
          classes.mainRoot += _self.highlightedEditorClass;
        }
      });
    }
  }
  public setFiterString(newValue: string) {
    let newValueInLow = newValue.toLocaleLowerCase();
    const visibleQuestions = this.survey.getAllQuestions().filter(q => q.isVisible);
    this.allMatches = visibleQuestions.filter(q => (q.title.toLocaleLowerCase()).indexOf(newValueInLow) !== -1);

    const newCurrentIndex = this.allMatches.indexOf(this.currentMatch);
    this.switchHighlightedEditor(newCurrentIndex === -1 ? 0 : newCurrentIndex);
  }

  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);

    if (name === "filterString") {
      this.setFiterString(newValue);
    }
  }

  dispose(): void {
    this.searchActionBar.dispose();
    super.dispose();
  }
}