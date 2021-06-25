import {
  Base,
  SurveyModel,
  property,
  propertyArray,
  IActionBarItem,
} from "survey-core";
import { PropertyGridModel } from "./index";
import { SelectionHistory } from "../selection-history";
import { SurveyHelper } from "../surveyHelper";
import { editorLocalization } from "../editorLocalization";

export class PropertyGridViewModel extends Base {
  @property() survey: SurveyModel;
  @propertyArray() toolbarItems: Array<IActionBarItem>;
  @property() title: string;
  @property() hasPrev: boolean;
  @property() hasNext: boolean;
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
    this.toolbarItems.push({
      id: "svd-grid-history-prev",
      title: "Prev", //TODO editorLocalization.getString("pe.edit"),
      component: "sv-action-bar-item",
      enabled: () => this.hasPrev,
      action: () => {
        this.selectionController.prev();
      },
    });
    this.toolbarItems.push({
      id: "svd-grid-history-next",
      title: "Next", //TODO editorLocalization.getString("pe.edit"),
      component: "sv-action-bar-item",
      enabled: () => this.hasNext,
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
    var typeName = SurveyHelper.getObjectTypeStr(obj);
    var displayName = editorLocalization.getString(
      "ed." + typeName + "TypeName"
    );
    return this.model.options.getObjectDisplayName(
      obj,
      "property-grid",
      displayName
    );
  }
}
