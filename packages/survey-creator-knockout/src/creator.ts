import * as ko from "knockout";
import {
  Survey,
  SurveyModel,
  Base,
  Page,
  property,
  ImplementorBase,
  PageModel,
} from "survey-knockout";
import {
  ISurveyCreatorOptions,
  ICreatorOptions,
  ICreatorPlugin,
  CreatorBase,
} from "@survey/creator";
import { PropertyGridModel, TabJsonEditorAcePlugin } from "@survey/creator";
import { TabJsonEditorTextareaPlugin } from "./components/tabs/json-editor-textarea";
import { TabTranslationPlugin } from "./components/tabs/translation";

if (!!ko.options) {
  ko.options.useOnlyNativeEvents = true;
}
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

  public selectElement(element: any) {
    super.selectElement(element);
    if (this.propertyGrid) this.propertyGrid.obj = element;
  }

  private initTabsPlugin(): void {
    if (this.showJSONEditorTab) {
      if (TabJsonEditorAcePlugin.hasAceEditor()) {
        new TabJsonEditorAcePlugin(this);
      } else {
        new TabJsonEditorTextareaPlugin(this);
      }
    }
    new TabTranslationPlugin(this);
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
