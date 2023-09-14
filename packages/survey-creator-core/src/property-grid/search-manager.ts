import { Action, ActionContainer, Base, ComputedUpdater, IElement, Question, SurveyModel, property } from "survey-core";
import { getLocString } from "../editorLocalization";

export class SearchManager extends Base {
  private searchResultClass = " spg-editor-highlight";

  private currentSearchResultIndex: number;
  private currentSearchResult: Question;
  public searchActionBar: ActionContainer = new ActionContainer();
  public filterStringPlaceholder = getLocString("ed.propertyGridFilteredTextPlaceholder");

  @property() survey: SurveyModel;
  @property() isVisible: boolean;
  @property() filterString: string;
  @property() searchResultsText: string;
  @property() searchResults: Array<Question> = [];

  private expandAllParents(element: IElement) {
    if (!element) return;
    if (element.isCollapsed) {
      element.expand();
    }
    this.expandAllParents((<any>element).parent);
    this.expandAllParents((<any>element).parentQuestion);
  }
  private updateFoundEditor(index: number) {
    this.currentSearchResultIndex = index;
    const prevResult = this.currentSearchResult;
    this.currentSearchResult = this.searchResults[index];
    prevResult?.updateElementCss();
    if (!!this.currentSearchResult && prevResult !== this.currentSearchResult) {
      this.currentSearchResult.updateElementCss();
      // this.currentSearchResult.focus();
      this.expandAllParents(this.currentSearchResult);
      setTimeout(() => {
        this.currentSearchResult.survey.scrollElementToTop(this.currentSearchResult, this.currentSearchResult, null, this.currentSearchResult.id);
      }, 10);
    }

    const count = this.searchResults.length;
    const value = this.currentSearchResult ? index + 1 : "0";
    this.searchResultsText = !!this.filterString ? [value, count].join("/") : "";
  }
  private goToEditor(index: number) {
    if (index < 0) {
      index = this.searchResults.length - 1;
    }
    if (index >= this.searchResults.length) {
      index = 0;
    }
    this.updateFoundEditor(index);
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
      enabled: <any>new ComputedUpdater(() => this.searchResults.length > 0),
      action: () => {
        if (this.searchResults.length > 0) {
          this.goToEditor(this.currentSearchResultIndex - 1);
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
      enabled: <any>new ComputedUpdater(() => this.searchResults.length > 0),
      action: () => {
        if (this.searchResults.length > 0) {
          this.goToEditor(this.currentSearchResultIndex + 1);
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
        // this.searchEnabled = false;
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
        if (options.question === _self.currentSearchResult) {
          classes.mainRoot += _self.searchResultClass;
        }
      });
    }
  }

  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);

    if (name === "filterString") {
      const visibleQuestions = this.survey.getAllQuestions().filter(q => q.isVisible);
      this.searchResults = visibleQuestions.filter(q => (q.title.toLocaleLowerCase()).indexOf(newValue.toLocaleLowerCase()) !== -1);

      const newCurrentIndex = this.searchResults.indexOf(this.currentSearchResult);
      this.updateFoundEditor(newCurrentIndex === -1 ? 0 : newCurrentIndex);
    }
  }

  dispose(): void {
    this.searchActionBar.dispose();
    super.dispose();
  }
}