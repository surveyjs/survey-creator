import * as ko from "knockout";
import { Survey, SurveyElement, PropertyGrid } from "survey-knockout";
import { IToolbarItem } from "@survey/creator/components/toolbar";
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

  protected initTabs() {
    ko.computed(() => {
      this.tabs([]);
      if (this.showDesignerTab) {
        this.tabs.push({
          name: "designer",
          title: this.getLocString("ed.designer"),
          template: "svc-tab-designer",
          data: this,
          action: () => this.makeNewViewActive("designer"),
        });
      }
      if (this.showTestSurveyTab) {
        this.tabs.push({
          name: "test",
          title: this.getLocString("ed.testSurvey"),
          template: "svc-tab-test",
          data: this,
          action: () => this.makeNewViewActive("test"),
        });
      }
      if (this.showLogicTab) {
        this.tabs.push({
          name: "logic",
          title: this.getLocString("ed.logic"),
          template: "svc-tab-logic",
          data: this,
          action: () => this.makeNewViewActive("logic"),
        });
      }
      if (this.showJSONEditorTab) {
        this.tabs.push({
          name: "editor",
          title: this.getLocString("ed.jsonEditor"),
          template: "svc-tab-json-editor",
          data: this,
          action: () => this.makeNewViewActive("editor"),
        });
      }
      if (this.showEmbededSurveyTab) {
        this.tabs.push({
          name: "embed",
          title: this.getLocString("ed.embedSurvey"),
          template: "svc-tab-embed",
          data: this,
          action: () => this.makeNewViewActive("embed"),
        });
      }
      if (this.showTranslationTab) {
        this.tabs.push({
          name: "translation",
          title: this.getLocString("ed.translation"),
          template: "svc-tab-translation",
          data: this,
          action: () => this.makeNewViewActive("translation"),
        });
      }
      if (this.tabs().length > 0) {
        this.koViewType(this.tabs()[0].name);
      }
    });
  }
}
