import {
  Base,
  SurveyModel,
  property,
  propertyArray,
  IActionBarItem,
} from "survey-core";
import { PropertyGridModel } from "./index";
import { SelectionHistoryController } from "../controllers/selection-history-controller";

export class PropertyGridViewModel extends Base {
  @property() survey: SurveyModel;
  @propertyArray() toolbarItems: Array<IActionBarItem>;
  @property() title: string;
  constructor(
    private model: PropertyGridModel,
    private selectionController: SelectionHistoryController
  ) {
    super();
    this.model.objValueChangedCallback = () => {
      this.onSurveyChanged();
    };
    this.toolbarItems.push({
      id: "svd-grid-history-prev",
      title: "Prev", //TODO editorLocalization.getString("pe.edit"),
      component: "sv-action-bar-item",
      action: () => {
        this.selectionController.prev();
      },
    });
    this.toolbarItems.push({
      id: "svd-grid-history-next",
      title: "Next", //TODO editorLocalization.getString("pe.edit"),
      component: "sv-action-bar-item",
      action: () => {
        this.selectionController.next();
      },
    });
    this.onSurveyChanged();
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
      this.toolbarItems[0].enabled = this.selectionController.hasPrev;
      this.toolbarItems[1].enabled = this.selectionController.hasNext;
    }
  }
  private updateTitle() {
    this.title = this.getTitle();
  }
  private getTitle(): string {
    var obj = this.model.obj;
    if (!obj) return "";
    var displayName = !!obj["name"] ? obj["name"] : obj.getType();
    return this.model.options.getObjectDisplayName(
      obj,
      "property-grid",
      displayName
    );
  }
}
