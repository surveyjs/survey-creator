import * as ko from "knockout";
import { property, Question, SurveyElement } from "survey-core";
import { Survey, ImplementorBase, Panel } from "survey-knockout-ui";
import { ICreatorOptions, CreatorBase } from "@survey/creator";

if (!!ko.options) {
  ko.options.useOnlyNativeEvents = true;
}

class DesignTimeSurveyModel extends Survey {
  constructor(public creator: SurveyCreator, jsonObj?: any) {
    super(jsonObj);
  }
  public getElementWrapperComponentName(element: SurveyElement): string {
    if (element.isDesignMode) {
      if (element instanceof Question) {
        if (element.koElementType() == "survey-question") {
          return "svc-question";
        }
      }
    }
    return super.getElementWrapperComponentName(element);
  }
  public getElementWrapperComponentData(element: SurveyElement): any {
    if (element.isDesignMode) {
      if (element instanceof Question) {
        if (element.koElementType() == "survey-question") {
          return this.creator;
        }
      }
    }
    return super.getElementWrapperComponentData(element);
  }
}

export class SurveyCreator extends CreatorBase<Survey> {
  @property() testProp: string;

  constructor(options: ICreatorOptions = {}) {
    super(options);
    new ImplementorBase(this.toolbox);
    new ImplementorBase(this.dragDropHelper);
    new ImplementorBase(this);
  }

  protected createSurveyCore(json: any = {}): Survey {
    return new DesignTimeSurveyModel(this, json);
  }

  protected onViewTypeChanged(newType: string) {
    const plugin = this.plugins[newType];
    !!plugin && plugin.activate();
  }
}
