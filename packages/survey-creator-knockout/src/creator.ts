import * as ko from "knockout";
import { Survey } from "survey-knockout-ui";
import {
  ICreatorOptions,
  CreatorBase
} from "survey-creator-core";

if (!!ko.options) {
  ko.options.useOnlyNativeEvents = true;
}

export class SurveyCreator extends CreatorBase {
  constructor(options: ICreatorOptions = {}, options2?: ICreatorOptions) {
    super(options, options2);
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
