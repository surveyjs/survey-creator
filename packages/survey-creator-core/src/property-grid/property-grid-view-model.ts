import {
  Base,
  SurveyModel,
  property,
  propertyArray,
  IActionBarItem,
  PopupModel,
  AdaptiveActionContainer,
  Action
} from "survey-core";
import { PropertyGridModel } from "./index";
import { SelectionHistory } from "../selection-history";
import { ObjType, SurveyHelper } from "../surveyHelper";
import { editorLocalization } from "../editorLocalization";
import { ObjectSelectorModel } from "./object-selector";

export class PropertyGridViewModel extends Base {
  private nextSelectionAction: Action;
  private prevSelectionAction: Action;
  private objectSelectionAction: Action;

  @property() survey: SurveyModel;
  @property() title: string;
  @property() hasPrev: boolean;
  @property() hasNext: boolean;

  public toolbar: AdaptiveActionContainer = new AdaptiveActionContainer();
  public get toolbarItems(): Array<Action> {
    return this.toolbar.actions;
  }

  constructor(
    private model: PropertyGridModel,
    private selectionController: SelectionHistory
  ) {
    super();
    this.model.objValueChangedCallback = () => {
      this.onSurveyChanged();
    };
    this.model.changedFromActionCallback = (
      obj: Base,
      propertyName: string
    ) => {
      if (!!this.selectionController) {
        this.selectionController.selectFromAction(obj, propertyName);
      }
    };

    var actions: Array<Action> = [];
    this.prevSelectionAction = new Action({
      id: "svd-grid-history-prev",
      title: "Prev", //TODO editorLocalization.getString("pe.edit"),
      component: "sv-action-bar-item",
      enabled: this.hasPrev,
      action: () => {
        this.selectionController.prev();
      }
    });
    actions.push(this.prevSelectionAction);

    this.nextSelectionAction = new Action({
      id: "svd-grid-history-next",
      title: "Next", //TODO editorLocalization.getString("pe.edit"),
      component: "sv-action-bar-item",
      enabled: this.hasNext,
      action: () => {
        this.selectionController.next();
      }
    });
    actions.push(this.nextSelectionAction);

    const selectorModel = new ObjectSelectorModel(
      (obj: Base, reason: string, displayName: string) => {
        return this.model.options.getObjectDisplayName(
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
          this.model.obj,
          (obj: Base) => {
            this.selectionController.selectFromAction(obj, "name");
            selectorPopupModel.toggleVisibility();
          }
        );
        selectorPopupModel.toggleVisibility();
      },
      popupModel: selectorPopupModel
    });
    actions.push(this.objectSelectionAction);
    this.toolbar.actions = actions;

    this.onSurveyChanged();
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);

    if (!this.toolbarItems || this.toolbarItems.length <= 0) return;

    if (name === "hasNext") {
      this.nextSelectionAction.enabled = this.hasNext;
    }
    if (name === "hasPrev") {
      this.prevSelectionAction.enabled = this.hasPrev;
    }
    if (name === "title") {
      this.objectSelectionAction.title = this.title;
    }
  }

  private onSurveyChanged() {
    this.survey = this.model.survey;
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
    var obj = this.model.obj;
    if (!obj) return "";
    var displayName = SurveyHelper.getObjectName(
      obj,
      this.model.options.showObjectTitles
    );
    return this.model.options.getObjectDisplayName(
      obj,
      "property-grid",
      displayName
    );
  }
}
