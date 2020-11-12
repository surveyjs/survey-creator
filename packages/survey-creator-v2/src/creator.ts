import * as ko from "knockout";
import { Survey, SurveyElement, PropertyGrid, Base, Page } from "survey-knockout";
import { IToolbarItem } from "@survey/creator/components/toolbar";
import { DragDropHelper } from "./dragdrophelper";
import { QuestionToolbox } from "@survey/creator/toolbox";
import { CreatorBase, ICreatorOptions } from "@survey/creator/creator-base";

export class SurveyCreator extends CreatorBase<Survey> {
  constructor(options: ICreatorOptions = {}) {
    super(options);

    // TODO: remove after implementing initialization
    this.surveyValue(<any>this.createSurvey());

    this.toolbox = new QuestionToolbox(
      this.options && this.options.questionTypes
        ? this.options.questionTypes
        : null
    );
    this.toolboxCategories(this.toolbox.koCategories());
    this.propertyGrid = new PropertyGrid(this.survey);

    this.toolbarItems.push(
      ...(<any>[
        {
          icon: "icon-undo",
          action: () => {},
          title: "Undo",
          showTitle: false,
        },
        {
          icon: "icon-redo",
          action: () => {},
          title: "Redo",
          showTitle: false,
        },
        { component: "svc-action-bar-separator" },
        {
          icon: "icon-settings",
          action: () => this.selectElement(this.survey),
          isActive: ko.computed(() => this.isElementSelected(this.survey)),
          title: "Settings",
          showTitle: false,
        },
        {
          icon: "icon-clear",
          action: function () {
            alert("clear pressed");
          },
          isActive: false,
          title: "Clear",
          showTitle: false,
        },
        {
          icon: "icon-search",
          action: () => {
            this.showSearch = !this.showSearch;
          },
          isActive: ko.computed(() => this.showSearch),
          title: "Search",
          showTitle: false,
        },
        {
          component: "svc-action-bar-separator",
        },
        {
          icon: "icon-preview",
          action: function () {
            alert("preview pressed");
          },
          isActive: ko.observable(false),
          title: "Preview",
          innerCss: "svc-action-bar-item--secondary",
        },
      ])
    );
  }

  private _showSearch = ko.observable<boolean>(false);
  get showSearch() {
    return this._showSearch();
  }
  set showSearch(val: boolean) {
    this._showSearch(val);
  }

  toolbox: QuestionToolbox;

  toolbarItems = ko.observableArray<IToolbarItem>();

  toolboxCategories = ko.observableArray<object>();

  setSurvey(survey: Survey) {
    this.dragDropHelper = new DragDropHelper(survey, (options?: any) => {});
    this.surveyValue(<any>survey);
    this.selectElement(survey);
  }

  selection = ko.observable();
  propertyGrid: PropertyGrid;
  selectElement = (element: Base) => {
    this.selection(element);
    this.propertyGrid.obj = element;
    if(typeof element.getType === "function" && element.getType() === "page") {
      this.currentPage = <Page>element;
    } else if(!!element["page"]) {
      this.currentPage = element["page"];
    } else {
      this.currentPage = undefined;
    }
  }

  isElementSelected(element: Base) {
    return element === this.selection();
  }

  private _currentPage = ko.observable<Page>();
  get currentPage() {
    return this._currentPage();
  }
  set currentPage(page: Page) {
    this._currentPage(page);
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
