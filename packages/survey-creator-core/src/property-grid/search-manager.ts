import { Action, ComputedUpdater, IElement, Question, SurveyModel, property, settings } from "survey-core";
import { getLocString } from "../editorLocalization";
import { scrollElementIntoView } from "../utils/creator-utils";
import { SearchManager } from "../components/search-manager";
export class SearchManagerPropertyGrid extends SearchManager {
  private highlightedEditorClass = " spg-question--highlighted";

  private currentMatchIndex: number;
  private currentMatch: Question;
  protected getFilterStringPlaceholder(): string { return getLocString("ed.propertyGridFilteredTextPlaceholder"); }
  public get propertyGridNoResultsFound(): string { return getLocString("ed.propertyGridNoResultsFound"); }

  @property() survey: SurveyModel;
  @property({ defaultValue: [] }) allMatches: Array<Question>;

  private lastCollapsedElement: IElement;
  private expandAllParents(element: IElement) {
    if (!element) return;
    if ((<any>element).page && (<any>element).survey) {
      (<any>element).survey.currentPage = (<any>element).page;
    }
    if (element.isCollapsed) {
      this.lastCollapsedElement = element;
      (element as any).expand(false);
    }
    this.expandAllParents((<any>element).parent);
    this.expandAllParents((<any>element).parentQuestion);
  }
  private switchHighlightedEditor(index: number) {
    this.currentMatchIndex = index;
    const prevMatch = this.currentMatch;
    this.currentMatch = this.allMatches[index];
    prevMatch?.updateElementCss(true);
    if (!!this.currentMatch && prevMatch !== this.currentMatch) {
      this.currentMatch.updateElementCss(true);
      const lastCollapsedElement = this.lastCollapsedElement;
      this.expandAllParents(this.currentMatch);
      const newPanelExpanded = this.lastCollapsedElement != lastCollapsedElement;
      setTimeout(() => {
        const elementId = this.currentMatch?.id;
        scrollElementIntoView(elementId);
      }, newPanelExpanded ? 400 : 10);
    }
    this.updatedMatchCounterText(index);
  }
  private updatedMatchCounterText(index: number) {
    const count = this.allMatches.length;
    if (count === 1) {
      this.matchCounterText = "";
    } else if (this.currentMatch) {
      const value = index + 1;
      this.matchCounterText = [value, count].join("/");
    } else {
      this.matchCounterText = !!this.filterString ? this.propertyGridNoResultsFound : "";
    }
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
  private getAllMatches(newFilter: string) {
    const normalize = settings.comparator.normalizeTextCallback;
    let newValueInLow = normalize(newFilter, "search");
    newValueInLow = newValueInLow.toLocaleLowerCase().trim();
    const visibleQuestions = this.survey.getAllQuestions().filter(q => q.isVisibleInSurvey);
    return visibleQuestions.filter(q => {
      let srcString = q.name + "|" + q.title + "|" + q.description;
      if (!!srcString) {
        srcString = normalize(srcString, "search");
        srcString = srcString.toLocaleLowerCase().trim();
      }
      return srcString.indexOf(newValueInLow) !== -1;
    });
  }
  protected setFiterString(newValue: string, oldValue: string) {
    if (!newValue) {
      this.reset();
      return;
    }

    this.allMatches = this.getAllMatches(newValue);
    if (this.allMatches.length === 0) {
      this.reset();
      return;
    }

    const newCurrentIndex = this.allMatches.indexOf(this.currentMatch);
    this.switchHighlightedEditor(newCurrentIndex === -1 ? 0 : newCurrentIndex);
  }
  private reset() {
    this.allMatches = [];
    this.currentMatchIndex = -1;
    const prevMatch = this.currentMatch;
    this.currentMatch = undefined;
    prevMatch?.updateElementCss(true);
    this.updatedMatchCounterText(-1);
  }

  getSearchActions() {
    const searchActions = super.getSearchActions();

    searchActions.unshift(new Action({
      id: "svd-grid-search-next",
      iconName: "icon-next_16x16",
      component: "sv-action-bar-item",
      title: getLocString("ed.nextFocus"),
      showTitle: false,
      iconSize: "auto",
      innerCss: "svc-search__bar-item",
      visible: <any>new ComputedUpdater(() => this.allMatches.length > 1),
      action: () => {
        if (this.allMatches.length > 0) {
          this.navigateToEditor(this.currentMatchIndex + 1);
        }
      }
    }));

    searchActions.unshift(new Action({
      id: "svd-grid-search-prev",
      iconName: "icon-previous_16x16",
      component: "sv-action-bar-item",
      title: getLocString("ed.prevFocus"),
      showTitle: false,
      iconSize: "auto",
      innerCss: "svc-search__bar-item",
      visible: <any>new ComputedUpdater(() => this.allMatches.length > 1),
      action: () => {
        if (this.allMatches.length > 0) {
          this.navigateToEditor(this.currentMatchIndex - 1);
        }
      }
    }));
    return searchActions;
  }

  constructor() {
    super();
    this.initActionBar();
  }
  public setSurvey(newSurvey: SurveyModel) {
    this.clearFilterString();
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
}