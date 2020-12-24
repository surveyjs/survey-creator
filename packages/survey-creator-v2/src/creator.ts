import * as ko from "knockout";
import { Survey, Base, Page } from "survey-knockout";
import { IToolbarItem } from "@survey/creator/components/toolbar";
import { DragDropHelper } from "./dragdrophelper";
import { QuestionToolbox } from "@survey/creator/toolbox";
import { CreatorBase, ICreatorOptions } from "@survey/creator/creator-base";
import { isPropertyVisible, propertyExists } from "@survey/creator/utils/utils";
import { QuestionConverter } from "@survey/creator/questionconverter";
import { PropertyGrid } from "./property-grid";

export class SurveyCreator extends CreatorBase<Survey> {
  propertyGrid: PropertyGrid;
  public static defaultNewSurveyText: string =
    '{ "pages": [ { "name": "page1"}] }';

  constructor(options: ICreatorOptions = {}) {
    super(options);

    this.initSurveyWithJSON(
      JSON.parse(SurveyCreator.defaultNewSurveyText),
      false
    );

    this.toolbox = new QuestionToolbox(
      this.options && this.options.questionTypes
        ? this.options.questionTypes
        : null
    );
    this.toolboxCategories(this.toolbox.koCategories());
    this.propertyGrid = new PropertyGrid(this.survey);
    this.selection.subscribe((element) => (this.propertyGrid.obj = element));

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
        { component: "sv-action-bar-separator" },
        {
          icon: "icon-settings",
          action: () => this.selectElement(this.survey),
          isActive: ko.computed(() => this.isElementSelected(this.survey)),
          title: "Settings",
          showTitle: false,
        },
        {
          icon: "icon-clear",
          action: () => {
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
          component: "sv-action-bar-separator",
        },
        {
          icon: "icon-preview",
          css: ko.computed(() =>
            this.koViewType() === "test" ? "sv-action-bar-item--secondary" : ""
          ),
          action: () => {
            this.makeNewViewActive("test");
          },
          isActive: ko.observable(false),
          title: "Preview",
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

  protected initSurveyWithJSON(json: any, clearState: boolean) {
    this.setSurvey(<any>this.createSurvey(json));
  }

  setSurvey(survey: Survey) {
    survey.setDesignMode(true);
    this.surveyValue(<any>survey);
    this.dragDropHelper = new DragDropHelper(survey, (options?: any) => {});
    this.selectElement(survey);
  }

  selection = ko.observable();

  public selectElement(element: any) {
    this.selection(element);
    if (typeof element.getType === "function" && element.getType() === "page") {
      this.currentPage = <Page>element;
    } else if (!!element["page"]) {
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
    this.survey.currentPage = page;
    this._currentPage(page);
  }

  dragDropHelper: DragDropHelper;

  clickToolboxItem(json: any) {
    if (!this.readOnly) {
      var newElement = this.createNewElement(json);
      this.doClickQuestionCore(newElement);
      this.selectElement(newElement);
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

  public getContextActions(element: any /*ISurveyElement*/) {
    if (this.readOnly) {
      return [];
    }

    let opts: any = element["allowingOptions"];
    if (!opts) opts = {};
    let items = [];

    if (opts.allowChangeType === undefined || opts.allowChangeType) {
      var currentType = element.getType();
      var convertClasses = QuestionConverter.getConvertToClasses(
        currentType,
        this.toolbox.itemNames
      );
      var allowChangeType = convertClasses.length > 0;
      if (!element.isPanel && !element.isPage) {
        var createTypeByClass = (className) => {
          return {
            name: this.getLocString("qt." + className),
            value: className,
          };
        };
        var availableTypes = [createTypeByClass(currentType)];
        for (var i = 0; i < convertClasses.length; i++) {
          var className = convertClasses[i];
          availableTypes.push(createTypeByClass(className));
        }
        items.push({
          id: "convertTo",
          css: "sv-action--first sv-action-bar-item--secondary",
          icon: "icon-change_16x16",
          // title: this.getLocString("qt." + currentType),
          title: this.getLocString("survey.convertTo"),
          items: availableTypes.map((type) => ({
            title: type.name,
            value: type.value,
          })),
          enabled: allowChangeType,
          component: "sv-action-bar-item-dropdown",
          action: (newType) => {
            this.convertCurrentObject(element, newType.value);
          },
        });
      }
    }

    if (opts.allowCopy === undefined || opts.allowCopy) {
      items.push({
        id: "duplicate",
        title: this.getLocString("survey.duplicate"),
        action: () => {
          this.fastCopyQuestion(element);
        },
      });
    }

    if (
      (opts.allowChangeRequired === undefined || opts.allowChangeRequired) &&
      typeof element.isRequired !== "undefined" &&
      propertyExists(element, "isRequired") &&
      isPropertyVisible(element, "isRequired")
    ) {
      var isRequired = ko.computed(() => element.isRequired);
      items.push({
        id: "isrequired",
        css: ko.computed(() =>
          element.isRequired ? "sv-action-bar-item--secondary" : ""
        ),
        title: this.getLocString("pe.isRequired"),
        icon: ko.computed(() => {
          if (isRequired()) {
            return "icon-switchactive_16x16";
          }
          return "icon-switchinactive_16x16";
        }),
        action: () => {
          if (this.isCanModifyProperty(<any>element, "isRequired")) {
            element.isRequired = !element.isRequired;
          }
        },
      });
    }

    if (items.length > 0) {
      items.push({ component: "sv-action-bar-separator" });
    }

    if (opts.allowDelete === undefined || opts.allowDelete) {
      items.push({
        id: "delete",
        title: this.getLocString("pe.delete"),
        action: () => {
          this.deleteObject(element);
        },
      });
    }

    this.onDefineElementMenuItems.fire(this, { obj: element, items: items });

    return items;
  }
}
