import * as ko from "knockout";
import {
  Survey,
  Base,
  Page,
  PopupModel,
  ListModel,
  property,
  ImplementorBase,
} from "survey-knockout";
import { DragDropHelper } from "./dragdrophelper";
import { CreatorBase, ICreatorOptions } from "@survey/creator";
import { isPropertyVisible, propertyExists } from "@survey/creator";
import { QuestionConverter } from "@survey/creator";
import { PropertyGrid } from "@survey/creator";
import { TabJsonEditorAcePlugin } from "./components/tabs/json-editor-ace";
import { TabJsonEditorTextareaPlugin } from "./components/tabs/json-editor-textarea";

export interface ICreatorPlugin {
  activate: () => void;
  deactivate?: () => boolean;
}

export class SurveyCreator extends CreatorBase<Survey> {
  @property() testProp: string;
  private propertyGrid: PropertyGrid;

  public plugins: { [name: string]: ICreatorPlugin } = {};

  constructor(options: ICreatorOptions = {}) {
    super(options);

    new ImplementorBase(this.toolbox);
    this.propertyGrid = new PropertyGrid(this.survey, this);

    new ImplementorBase(this);

    this.initTabsPlugin();
  }

  protected createSurveyCore(json: any = {}): Survey {
    return new Survey(json);
  }

  public setSurvey(survey: Survey) {
    super.setSurvey(survey);
    this.dragDropHelper = new DragDropHelper(survey, (options?: any) => {});
    this.selectElement(survey);
  }

  @property() selection: Base;

  public selectElement(element: any) {
    this.selection = element;
    if (typeof element.getType === "function" && element.getType() === "page") {
      this.currentPage = <Page>element;
    } else if (!!element["page"]) {
      this.currentPage = element["page"];
    } else {
      this.currentPage = undefined;
    }

    if (this.propertyGrid) this.propertyGrid.obj = element;
  }

  protected isElementSelectedCore(element: any): boolean {
    return element === this.selection;
  }

  @property({
    onSet: (val, target) => {
      target.survey.currentPage = val;
    },
  })
  currentPage: Page;

  //TODO: refactor this method and remove
  public _dummySetText(text: string): void {
    //should work with JSON5
    //var textWorker = new SurveyTextWorker(this.text);
    //this.initSurvey(new Survey.JsonObject().toJsonObject(textWorker.survey));

    //works only with JSON
    this.initSurveyWithJSON(JSON.parse(text), true);
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

  private initTabsPlugin(): void {
    if (this.showJSONEditorTab) {
      if (TabJsonEditorAcePlugin.hasAceEditor()) {
        new TabJsonEditorAcePlugin(this);
      } else {
        new TabJsonEditorTextareaPlugin(this);
      }
    }
  }

  protected onViewTypeChanged(newType: string) {
    const plugin = this.plugins[newType];
    !!plugin && plugin.activate();
  }

  protected canSwitchViewType(newType: string) {
    const plugin = this.plugins[this.viewType];
    return !plugin || !plugin.deactivate || plugin.deactivate();
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
        const popupModel = new PopupModel(
          "sv-list",
          new ListModel(
            availableTypes.map((type) => ({
              title: type.name,
              id: type.value,
            })),
            (item: any) => {
              this.convertCurrentObject(element, item.id);
            },
            false
          ),
          "bottom",
          "right"
        );

        items.push({
          id: "convertTo",
          css: "sv-action--first sv-action-bar-item--secondary",
          iconName: "icon-change_16x16",
          // title: this.getLocString("qt." + currentType),
          title: this.getLocString("survey.convertTo"),
          enabled: allowChangeType,
          component: "sv-action-bar-item-dropdown",
          action: (newType) => {
            popupModel.toggleVisibility();
          },
          popupModel: popupModel,
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
        iconName: ko.computed(() => {
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

    this.onDefineElementMenuItems.fire(this, {
      obj: element,
      items: items,
    });

    return items;
  }
}
