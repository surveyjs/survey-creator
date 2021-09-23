import { Base, SurveyModel, property, PopupModel, AdaptiveActionContainer, Action } from "survey-core";
import { PropertyGridModel } from "./index";
import { SelectionHistory } from "../selection-history";
import { SurveyHelper } from "../survey-helper";
import { ObjectSelectorModel } from "./object-selector";
import { CreatorBase } from "../creator-base";
import { settings } from "../settings";
import { getLocString } from "../editorLocalization";

export class PropertyGridViewModelBase extends Base {
  public toolbar: AdaptiveActionContainer = new AdaptiveActionContainer();
  private _expandAction: Action;
  private _collapseAction: Action;

  @property() survey: SurveyModel;
  @property() headerText: string;
  @property({
    defaultValue: true, onSet: (val, target) => {
      if (target._expandAction) {
        target._expandAction.visible = !val;
      }
      if (target._collapseAction) {
        target._collapseAction.visible = val;
      }
    }
  }) visible: boolean;

  constructor(public model?: Base, private collapseAction?: () => void, private expandAction?: () => void) {
    super();
    if (settings.propertyGrid.allowCollapse) {
      this._collapseAction = new Action({
        id: "svd-grid-hide",
        iconName: "icon-hide",
        title: getLocString("ed.hidePanel"),
        showTitle: false,
        action: () => {
          if (collapseAction)
            collapseAction();
          else
            this.visible = false;
        }
      })
      this.toolbar.actions.push(this._collapseAction);
    }
  }
  public createExpandAction(visible: boolean) {
    this._expandAction = new Action({
      id: "svd-grid-expand",
      iconName: "icon-expand_20x20",
      action: () => {
        if (this.expandAction)
          this.expandAction();
        else
          this.visible = true;
      },
      title: getLocString("ed.showPanel"),
      visible: visible,
      showTitle: false
    });
    return this._expandAction;
  }
}

export class PropertyGridViewModel<T extends SurveyModel> extends PropertyGridViewModelBase {
  private nextSelectionAction: Action;
  private prevSelectionAction: Action;
  private objectSelectionAction: Action;
  private onPropertyGridVisibilityChanged;

  @property() title: string;
  @property() hasPrev: boolean;
  @property() hasNext: boolean;

  public get toolbarItems(): Array<Action> {
    return this.toolbar.actions;
  }

  constructor(private propertyGridModel: PropertyGridModel, private creator: CreatorBase<T>, collapseAction?: () => void, expandAction?: () => void) {
    super(propertyGridModel as any,
      collapseAction || (() => { this.creator.showPropertyGrid = false; }),
      expandAction || (() => { this.creator.showPropertyGrid = true; }));
    this.onPropertyGridVisibilityChanged = (sender: CreatorBase<T>, options: any) => {
      if (this.isDisposed) return;
      this.visible = options.show;
    };
    this.creator.onShowPropertyGridVisiblityChanged.add(
      this.onPropertyGridVisibilityChanged
    );
    this.visible = this.creator.showPropertyGrid;
    this.propertyGridModel.objValueChangedCallback = () => {
      this.onSurveyChanged();
    };
    this.propertyGridModel.changedFromActionCallback = (
      obj: Base,
      propertyName: string
    ) => {
      if (!!this.selectionController) {
        this.selectionController.selectFromAction(obj, propertyName);
      }
    };

    if (settings.propertyGrid.showNavigationButtons) {
      this.prevSelectionAction = new Action({
        id: "svd-grid-history-prev",
        iconName: "icon-prev",
        component: "sv-action-bar-item",
        title: getLocString("ed.prevSelected"),
        showTitle: false,
        enabled: this.hasPrev,
        action: () => {
          this.selectionController.prev();
        }
      });
      this.toolbar.actions.push(this.prevSelectionAction);

      this.nextSelectionAction = new Action({
        id: "svd-grid-history-next",
        iconName: "icon-next",
        component: "sv-action-bar-item",
        title: getLocString("ed.nextSelected"),
        showTitle: false,
        enabled: this.hasNext,
        action: () => {
          this.selectionController.next();
        }
      });
      this.toolbar.actions.push(this.nextSelectionAction);
    }

    const selectorModel = new ObjectSelectorModel(
      (obj: Base, reason: string, displayName: string) => {
        return this.propertyGridModel.options.getObjectDisplayName(
          obj,
          reason,
          displayName
        );
      }
    );
    const selectorPopupModel: PopupModel = new PopupModel(
      "svc-object-selector",
      {
        model: selectorModel
      },
      "bottom",
      "left"
    );

    this.objectSelectionAction = new Action({
      id: "svd-grid-object-selector",
      title: this.title,
      css: "sv-action--last sv-action-bar-item--secondary",
      iconName: "icon-more",
      component: "sv-action-bar-item-dropdown",
      action: () => {
        selectorModel.show(
          this.selectionController.creator.survey,
          this.propertyGridModel.obj,
          (obj: Base) => {
            this.selectionController.selectFromAction(obj, "name");
            selectorPopupModel.toggleVisibility();
          }
        );
        selectorPopupModel.toggleVisibility();
      },
      popupModel: selectorPopupModel
    });
    this.toolbar.actions.push(this.objectSelectionAction);
    this.onSurveyChanged();
  }

  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);

    if (!this.toolbarItems || this.toolbarItems.length <= 0) return;

    if (!!this.nextSelectionAction && name === "hasNext") {
      this.nextSelectionAction.enabled = this.hasNext;
    }
    if (!!this.prevSelectionAction && name === "hasPrev") {
      this.prevSelectionAction.enabled = this.hasPrev;
    }
    if (name === "title") {
      this.objectSelectionAction.title = this.title;
    }
  }

  public dispose() {
    if (!!this.creator && !this.isDisposed) {
      this.creator.onShowPropertyGridVisiblityChanged.remove(
        this.onPropertyGridVisibilityChanged
      );
    }
    super.dispose();
  }
  private get selectionController(): SelectionHistory {
    return this.creator.selectionHistoryController;
  }

  private onSurveyChanged() {
    this.survey = this.propertyGridModel.survey;
    if (!!this.survey) {
      this.survey.onValueChanged.add((sender: SurveyModel, options: any) => {
        if (options.name == "name" || options.name == "title") {
          this.updateTitle();
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
    this.title = this.getTitle();
  }
  private getTitle(): string {
    var obj = this.propertyGridModel.obj;
    if (!obj) return "";
    var displayName = SurveyHelper.getObjectName(
      obj,
      this.propertyGridModel.options.showObjectTitles
    );
    return this.propertyGridModel.options.getObjectDisplayName(
      obj,
      "property-grid",
      displayName
    );
  }
}