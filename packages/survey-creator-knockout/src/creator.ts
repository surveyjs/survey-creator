import * as ko from "knockout";
import {
  Survey,
  SurveyModel,
  Base,
  Page,
  property,
  ImplementorBase,
} from "survey-knockout";
import { DragDropHelper } from "./dragdrophelper";
import {
  ISurveyCreatorOptions,
  ICreatorOptions,
  CreatorBase
} from "@survey/creator";
import { PropertyGridModel, TabJsonEditorAcePlugin, TabJsonEditorTextareaPlugin } from "@survey/creator";

export class PropertyGrid extends PropertyGridModel {
  public koSurvey: ko.Observable<SurveyModel> = ko.observable();

  constructor(obj: Base, options: ISurveyCreatorOptions) {
    super(obj, options);
    this.koSurvey(this.survey);
    this.objValueChangedCallback = () => {
      this.koSurvey(this.survey);
    };
  }
}

export class SurveyCreator extends CreatorBase<Survey> {
  @property() testProp: string;
  private propertyGrid: PropertyGrid;

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

  dragDropHelper: DragDropHelper;

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
}
