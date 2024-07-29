import { Action, ActionContainer, Base, ComputedUpdater, IElement, Question, SurveyModel, property, settings } from "survey-core";
import { getLocString } from "../editorLocalization";
import { scrollElementIntoView } from "../utils/utils";
import { QuestionToolbox } from "../toolbox";

export abstract class SearchManager extends Base {
  public searchActionBar: ActionContainer = new ActionContainer();
  public filterStringPlaceholder;
  @property() filterString: string;
  @property() isVisible: boolean;
  @property() matchCounterText: string;

  protected getSearchActions() {
    return [new Action({
      id: "svd-grid-search-close",
      iconName: "icon-clear_16x16",
      component: "sv-action-bar-item",
      title: getLocString("ed.clear"),
      showTitle: false,
      iconSize: 16,
      disableTabStop: true,
      innerCss: "spg-search-editor_bar-item",
      visible: <any>new ComputedUpdater(() => !!this.filterString),
      action: () => {
        this.clearFilterString();
      }
    })];
  }
  initActionBar() {
    this.searchActionBar.setItems(this.getSearchActions());
  }
  public clearFilterString(): void {
    this.filterString = "";
  }

  protected abstract setFiterString(newValue: string, oldValue: string);

  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);

    if (name === "filterString") {
      this.setFiterString(newValue, oldValue);
    }
  }

  constructor() {
    super();
    this.initActionBar();
  }

  dispose(): void {
    this.searchActionBar.dispose();
    super.dispose();
  }
}

export class SearchManagerToolbox extends SearchManager {
  @property() toolbox: QuestionToolbox;
  public filterStringPlaceholder = getLocString("ed.toolboxFilteredTextPlaceholder");
  protected setFiterString(newValue: string, oldValue: string) {
    if (!!oldValue != !!newValue) this.toolbox.lockScrollBar(!!newValue);
    this.toolbox.items.forEach(item => item.visible = item.hasText(newValue));
    this.toolbox.showPlaceholder = !this.toolbox.items.filter(i => i.visible).length;
    this.toolbox.categories.forEach(category => {
      category.forceExpand = !!newValue;
      category.empty = category.items.filter(item => item.visible).length == 0;
    });
  }

  public clearFilterString(): void {
    this.filterString = "";
    this.toolbox.containerElement.querySelector("input").focus();
  }
}

export class SearchManagerPropertyGrid extends SearchManager {
  private highlightedEditorClass = " spg-editor--highlighted";

  private currentMatchIndex: number;
  private currentMatch: Question;
  public filterStringPlaceholder = getLocString("ed.propertyGridFilteredTextPlaceholder");
  public propertyGridNoResultsFound = getLocString("ed.propertyGridNoResultsFound");

  @property() survey: SurveyModel;
  @property() isVisible: boolean;
  @property({ defaultValue: [] }) allMatches: Array<Question>;

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
    this.updatedMatchCounterText(index);
  }
  private updatedMatchCounterText(index: number) {
    const count = this.allMatches.length;
    if(count === 1) {
      this.matchCounterText = "";
    } else if(this.currentMatch) {
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
    const visibleQuestions = this.survey.getAllQuestions().filter(q => q.isVisible);
    return visibleQuestions.filter(q => {
      let srcString = q.name + "|" + q.title + "|" + q.description;
      if(!!srcString) {
        srcString = normalize(srcString, "search");
        srcString = srcString.toLocaleLowerCase().trim();
      }
      return srcString.indexOf(newValueInLow) !== -1;
    });
  }
  protected setFiterString(newValue: string, oldValue: string) {
    if(!newValue) {
      this.reset();
      return;
    }

    this.allMatches = this.getAllMatches(newValue);
    if(this.allMatches.length === 0) {
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
    prevMatch?.updateElementCss();
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
      iconSize: 16,
      innerCss: "spg-search-editor_bar-item",
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
      iconSize: 16,
      innerCss: "spg-search-editor_bar-item",
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