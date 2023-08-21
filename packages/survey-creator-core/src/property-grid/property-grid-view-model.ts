import { Base, SurveyModel, property, PopupModel, Action, Question, ActionContainer, ComputedUpdater } from "survey-core";
import { PropertyGridModel } from "./index";
import { SelectionHistory } from "../selection-history";
import { SurveyHelper } from "../survey-helper";
import { ObjectSelectorModel } from "./object-selector";
import { CreatorBase } from "../creator-base";
import { settings } from "../creator-settings";
import { getLocString } from "../editorLocalization";

export class PropertyGridViewModel extends Base {
  private searchResultClass = " spg-editor-highlight";
  public nextSelectionAction: Action;
  public prevSelectionAction: Action;
  public objectSelectionAction: Action;
  private selectorPopupModel: PopupModel;
  private currentSearchResultIndex: number;
  private currentSearchResult: Question;
  public searchActionBar: ActionContainer = new ActionContainer();
  public filterStringPlaceholder = getLocString("ed.propertyGridFilteredTextPlaceholder");

  @property() hasPrev: boolean;
  @property() hasNext: boolean;
  @property() survey: SurveyModel;
  @property() selectedElementName: string;
  @property() searchEnabled: boolean;
  @property() filterString: string;
  @property() searchResultsText: string;
  @property() searchResults: Array<Question> = [];

  constructor(private propertyGridModel: PropertyGridModel, private creator: CreatorBase) {
    super();
    this.searchEnabled = settings.propertyGrid.enableSearch;
    this.selectedElementName = this.getTitle();
    this.propertyGridModel.objValueChangedCallback = () => {
      this.onSurveyChanged();
    };
    this.propertyGridModel.changedFromActionCallback = (obj: Base, propertyName: string) => {
      if (!!this.selectionController) {
        this.selectionController.selectFromAction(obj, propertyName);
      }
    };
    this.initActions();

    this.creator.onPropertyChanged.add((sender, options) => {
      if (options.name === "sidebarLocation") {
        this.selectorPopupModel.horizontalPosition = this.creator.sidebarLocation == "right" ? "left" : "right";
      }
    });
    this.onSurveyChanged();
  }

  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);

    if (!!this.nextSelectionAction && name === "hasNext") {
      this.nextSelectionAction.enabled = this.hasNext;
    }
    if (!!this.prevSelectionAction && name === "hasPrev") {
      this.prevSelectionAction.enabled = this.hasPrev;
    }
    if(name === "filterString") {
      const visibleQuestions = this.survey.getAllQuestions().filter(q => q.isVisible);
      this.searchResults = visibleQuestions.filter(q => (q.title.toLocaleLowerCase()).indexOf(newValue.toLocaleLowerCase()) !== -1);

      const newCurrentIndex = this.searchResults.indexOf(this.currentSearchResult);
      this.updateFoundEditor(newCurrentIndex === -1 ? 0 : newCurrentIndex);
    }
  }

  private updateFoundEditor(index: number) {
    this.currentSearchResultIndex = index;
    const prevResult = this.currentSearchResult;
    this.currentSearchResult = this.searchResults[index];
    prevResult?.updateElementCss();
    this.currentSearchResult?.updateElementCss();
    this.currentSearchResult?.focus();

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

  private get selectionController(): SelectionHistory {
    return this.creator.selectionHistoryController;
  }

  private onSurveyChanged() {
    this.survey = this.propertyGridModel.survey;
    if (!!this.survey) {
      const _self = this;
      this.survey.onValueChanged.add((sender: SurveyModel, options: any) => {
        if (options.name == "name" || options.name == "title") {
          this.updateTitle();
        }
      });
      this.survey.onUpdateQuestionCssClasses.add(function (_, options) {
        const classes = options.cssClasses;
        if (options.question === _self.currentSearchResult) {
          classes.mainRoot += _self.searchResultClass;
        }
      });
    }
    this.updateTitle();
    if (this.selectionController) {
      this.hasPrev = this.selectionController.hasPrev;
      this.hasNext = this.selectionController.hasNext;
    }
  }
  private updateTitle() {
    let titleName = this.getTitle();
    this.selectedElementName = titleName;
    this.objectSelectionAction.title = this.selectedElementName;
  }
  private getTitle(): string {
    var obj = this.getSelectedObj();
    if (!obj) return "";
    var displayName = SurveyHelper.getObjectName(obj, this.propertyGridModel.options.showObjectTitles);
    return this.propertyGridModel.options.getObjectDisplayName(obj, "property-grid-header:selected-element", "property-grid-title", displayName);
  }
  private getSelectedObj(): any {
    return this.propertyGridModel.obj;
  }
  private initActions() {
    if (settings.propertyGrid.showNavigationButtons) {
      this.prevSelectionAction = new Action({
        id: "svd-grid-history-prev",
        iconName: "icon-arrow-left",
        component: "sv-action-bar-item",
        title: getLocString("ed.prevSelected"),
        showTitle: false,
        enabled: this.hasPrev,
        action: () => {
          this.selectionController.prev();
        }
      });

      this.nextSelectionAction = new Action({
        id: "svd-grid-history-next",
        iconName: "icon-arrow-right",
        component: "sv-action-bar-item",
        title: getLocString("ed.nextSelected"),
        showTitle: false,
        enabled: this.hasNext,
        action: () => {
          this.selectionController.next();
        }
      });
    }

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
        if(this.searchResults.length > 0) {
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
        if(this.searchResults.length > 0) {
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

    const selectorModel = new ObjectSelectorModel(
      this.creator,
      (obj: Base, area: string, reason: string, displayName: string) => {
        return this.propertyGridModel.options.getObjectDisplayName(obj, area, reason, displayName);
      }
    );
    this.selectorPopupModel = new PopupModel(
      "svc-object-selector",
      { model: selectorModel },
      "bottom",
      "center"
    );
    this.selectorPopupModel.cssClass += " svc-object-selector";

    this.objectSelectionAction = new Action({
      id: "svd-grid-object-selector",
      title: this.selectedElementName,
      css: "sv-action--object-selector sv-action-bar-item--secondary",
      component: "sv-action-bar-item-dropdown",
      action: () => {
        this.selectorPopupModel.displayMode = this.creator.isMobileView ? "overlay" : "popup";
        selectorModel.show(
          this.selectionController.creator.survey,
          this.propertyGridModel.obj,
          (obj: Base) => {
            this.selectionController.selectFromAction(obj, "name");
            this.selectorPopupModel.toggleVisibility();
          }
        );
        this.selectorPopupModel.toggleVisibility();
        selectorModel.list.scrollToSelectedItem();
      },
      popupModel: this.selectorPopupModel
    });
  }
}