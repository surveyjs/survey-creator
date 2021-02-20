import * as ko from "knockout";
import { Survey, property, ImplementorBase } from "survey-knockout";
import {
  ICreatorOptions,
  CreatorBase,
  PropertyGridModel,
} from "@survey/creator";
import { TabTranslationPlugin } from "./components/tabs/translation";

if (!!ko.options) {
  ko.options.useOnlyNativeEvents = true;
}

export class SurveyCreator extends CreatorBase<Survey> {
  @property() testProp: string;
  private propertyGrid: PropertyGridModel;

  constructor(options: ICreatorOptions = {}) {
    super(options);
    new ImplementorBase(this.toolbox);
    this.propertyGrid = new PropertyGridModel(this.survey, this);
    new ImplementorBase(this);
    this._dummyinitTabsPlugin();
  }

  protected createSurveyCore(json: any = {}): Survey {
    return new Survey(json);
  }

  public selectElement(element: any) {
    super.selectElement(element);
    if (this.propertyGrid) this.propertyGrid.obj = element;
  }

  private _dummyinitTabsPlugin(): void {
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
