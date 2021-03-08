import * as ko from "knockout";
import { property } from "survey-core";
import { Survey, ImplementorBase } from "survey-knockout-ui";
import { ICreatorOptions, CreatorBase } from "@survey/creator";

if (!!ko.options) {
  ko.options.useOnlyNativeEvents = true;
}

export class SurveyCreator extends CreatorBase<Survey> {
  @property() testProp: string;

  constructor(options: ICreatorOptions = {}) {
    super(options);
    new ImplementorBase(this.toolbox);
    new ImplementorBase(this);
  }

  protected createSurveyCore(json: any = {}): Survey {
    return new Survey(json);
  }

  protected onViewTypeChanged(newType: string) {
    const plugin = this.plugins[newType];
    !!plugin && plugin.activate();
  }
}
