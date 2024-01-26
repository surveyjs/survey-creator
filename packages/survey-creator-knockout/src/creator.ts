import * as ko from "knockout";
import { Survey } from "survey-knockout-ui";
import {
  ICreatorOptions,
  SurveyCreatorModel
} from "survey-creator-core";
import { SurveyModel } from "survey-core";

if (!!ko.options) {
  ko.options.useOnlyNativeEvents = true;
}

export class SurveyCreator extends SurveyCreatorModel {
  constructor(options: ICreatorOptions = {}, options2?: ICreatorOptions) {
    super(options, options2);
  }

  protected createSurveyCore(json: any = {}, reason: string): SurveyModel {
    return new Survey(json);
  }

  protected onViewTypeChanged(newType: string) {
    const plugin = this.plugins[newType];
    !!plugin && plugin.activate();
  }

  render(target: string | HTMLElement) {
    let node: HTMLElement = target as HTMLElement;
    if (typeof target === "string") {
      node = document.getElementById(target);
    }
    node.innerHTML = "<survey-creator params=\"creator: creator\"></survey-creator>";
    ko.cleanNode(node);
    ko.applyBindings({ creator: this }, node);
  }
}
