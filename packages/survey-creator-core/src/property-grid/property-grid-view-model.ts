import { Base, SurveyModel, property, PopupModel, Action, CssClassBuilder, getActionDropdownButtonTarget } from "survey-core";
import { PropertyGridModel } from "./index";
import { SelectionHistory } from "../selection-history";
import { SurveyHelper } from "../survey-helper";
import { ObjectSelectorModel } from "./object-selector";
import { SurveyCreatorModel } from "../creator-base";
import { settings } from "../creator-settings";
import { getLocString } from "../editorLocalization";
import { SearchManagerPropertyGrid } from "./search-manager";
import { MenuButton } from "../utils/actions";

export class PropertyGridViewModel extends Base {
  public nextSelectionAction: Action;
  public prevSelectionAction: Action;
  public objectSelectionAction: MenuButton;
  public searchManager = new SearchManagerPropertyGrid();
  public onNewSurveyCreatedCallback: () => void;
  private selectorPopupModel: PopupModel;

  @property() hasPrev: boolean;
  @property() hasNext: boolean;
  @property() selectedElementName: string;
  @property({
    onSet: (newValue: boolean, target: PropertyGridViewModel) => {
      target.searchManager.isVisible = newValue;
    }
  }) searchEnabled: boolean;
  @property() showPlaceholder: boolean;

  constructor(private propertyGridModel: PropertyGridModel, private creator: SurveyCreatorModel) {
    super();
    this.searchEnabled = settings.propertyGrid.enableSearch;
    this.selectedElementName = this.getTitle();
    this.propertyGridModel.onSetNewObjectCallback = () => {
      this.onSurveyObjChanged();
    };
    this.propertyGridModel.onNewSurveyCreatedCallback = () => {
      this.onNewSurveyCreated();
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
    this.onSurveyObjChanged();
  }
  public get survey(): SurveyModel {
    return this.getPropertyValue("survey", undefined, () => this.propertyGridModel.survey);
  }
  public set survey(val: SurveyModel) {
    this.setPropertyValue("survey", val);
  }
  public get rootCss(): string {
    return new CssClassBuilder()
      .append("spg-container")
      .append("spg-container_search", this.searchEnabled)
      .toString();
  }

  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);

    if (!!this.nextSelectionAction && name === "hasNext") {
      this.nextSelectionAction.enabled = this.hasNext;
    }
    if (!!this.prevSelectionAction && name === "hasPrev") {
      this.prevSelectionAction.enabled = this.hasPrev;
    }
  }

  private get selectionController(): SelectionHistory {
    return this.creator.selectionHistoryController;
  }

  private onSurveyObjChanged() {
    this.updateTitle();
    if (this.selectionController) {
      this.hasPrev = this.selectionController.hasPrev;
      this.hasNext = this.selectionController.hasNext;
    }
  }
  private onNewSurveyCreated() {
    this.survey = this.propertyGridModel.survey;
    this.searchManager.setSurvey(this.survey);
    if (!!this.survey) {
      this.survey.onValueChanged.add((sender: SurveyModel, options: any) => {
        if (options.name == "name" || options.name == "title") {
          this.updateTitle();
        }
      });
    }
    if (this.onNewSurveyCreatedCallback) {
      this.onNewSurveyCreatedCallback();
    }
  }
  private updateTitle() {
    let titleName = this.getTitle();
    this.selectedElementName = titleName;
    this.objectSelectionAction.tooltip = titleName;
    if (!this.propertyGridModel.showOneCategoryInPropertyGrid) {
      this.objectSelectionAction.title = titleName;
    }
  }
  private getTitle(): string {
    var obj = this.getSelectedObj();
    if (!obj) return "";
    var displayName = SurveyHelper.getObjectName(obj, this.propertyGridModel.options.useElementTitles);
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

    this.createObjectSwitcherAction();
  }

  private createObjectSwitcherAction() {
    const selectorModel = new ObjectSelectorModel(
      this.creator,
      (obj: Base, area: string, reason: string, displayName: string) => {
        return this.propertyGridModel.options.getObjectDisplayName(obj, area, reason, displayName);
      }
    );
    this.selectorPopupModel = new PopupModel(
      "svc-object-selector",
      { model: selectorModel },
      {
        verticalPosition: "bottom",
        horizontalPosition: "center",
        cssClass: "svc-creator-popup",
      }
    );
    this.selectorPopupModel.cssClass += " svc-object-selector";
    this.selectorPopupModel.displayMode = this.creator.isTouch ? "overlay" : "popup";
    this.selectorPopupModel.getTargetCallback = getActionDropdownButtonTarget;
    this.selectorPopupModel.registerPropertyChangedHandlers(["isVisible"], () => {
      if (!this.selectorPopupModel.isVisible) {
        this.objectSelectionAction.pressed = false;
      } else {
        this.objectSelectionAction.pressed = true;
      }
    });
    this.objectSelectionAction = new MenuButton({
      id: "svd-grid-object-selector",
      title: this.selectedElementName,
      css: "sv-action--object-selector",
      component: "sv-action-bar-item-dropdown",
      disableHide: true,
      pressed: false,
      action: () => {
        selectorModel.show(
          this.selectionController.creator.survey,
          this.propertyGridModel.obj,
          (obj: Base) => {
            this.selectionController.selectFromAction(obj, "name");
            this.selectorPopupModel.hide();
          }
        );
        this.selectorPopupModel.show();
        selectorModel.list.scrollToSelectedItem();
      },
      popupModel: this.selectorPopupModel
    });
    this.objectSelectionAction.contentType = "text-description-vertical";
  }

  dispose() {
    this.searchManager.dispose();
    this.nextSelectionAction.dispose();
    this.prevSelectionAction.dispose();
    this.objectSelectionAction.dispose();
    this.selectorPopupModel.dispose();
    super.dispose();
  }
}