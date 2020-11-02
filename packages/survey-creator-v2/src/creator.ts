import * as ko from "knockout";
import { Survey, SurveyElement, PropertyGrid } from "survey-knockout";
import {IToolbarItem} from "@survey/creator/components/toolbar";
import { DragDropHelper } from "./dragdrophelper";
import { QuestionToolbox } from "@survey/creator/toolbox";
import { CreatorBase, ICreatorOptions } from "@survey/creator/creator-base";

export class SurveyCreator extends CreatorBase {
  constructor(options: ICreatorOptions) {
    super(options);
    this._survey(this.createSurvey());
    this.toolbox = new QuestionToolbox(
      this.options && this.options.questionTypes
        ? this.options.questionTypes
        : null
    );
    this.toolboxCategories(this.toolbox.koCategories());
    this.propertyGrid = new PropertyGrid(this.survey);
  }

  toolbox: QuestionToolbox;

  toolbarItems = ko.observableArray<IToolbarItem>();

  toolboxCategories = ko.observableArray<object>();

  private createSurvey(reason: string = "designer") {
    return new Survey({});
  }

  private _survey = ko.observable<Survey>();
  get survey() {
    return this._survey();
  }
  set survey(survey: Survey) {
    this.dragDropHelper = new DragDropHelper(survey, (options?: any) => {});
    this._survey(survey);
  }

  selection = ko.observable();
  propertyGrid: PropertyGrid;
  selectElement(element: SurveyElement) {
    this.selection(element);
    this.propertyGrid.obj = element;
  }

  isElementSelected(element: SurveyElement) {
    return element === this.selection();
  }

  dragDropHelper: DragDropHelper;

  clickToolboxItem(json: any) {
    if (!this.readOnly) {
      // var newElement = this.createNewElement(json);
      // this.doClickQuestionCore(newElement);
    }
  }
  dragToolboxItem(json: any, e: DragEvent) {
    if (!this.readOnly) {
      this.dragDropHelper.startDragToolboxItem(
        e,
        json["type"], //this.getNewName(json["type"]),
        json
      );
    }
  }

  readOnly = false;
}
