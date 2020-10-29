import * as ko from "knockout";
import { Survey, SurveyElement, PropertyGrid } from "survey-knockout";
import { IActionBarItem } from "./components/action-bar/action-bar";
import { DragDropHelper } from "./dragdrophelper";
import { PropertyGridObjectEditorModel } from "./questionEditors/questionEditor";
import { QuestionToolbox } from "./toolbox";

export interface ICreatorOptions {
  [index: string]: any;
}

export interface ITabItem {
  name: string;
  title: string;
  template: string;
  data: any;
  visible: boolean;
  selected?: boolean | ko.Computed<boolean>;
  disabled?: ko.MaybeObservable<boolean>;
  action: () => void;
}

export class SurveyCreator {
  constructor(private options: ICreatorOptions) {
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

  tabs = ko.observableArray<ITabItem>();
  toolbarItems = ko.observableArray<IActionBarItem>();

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
