import * as ko from "knockout";
import { ItemValue, property, Question, QuestionSelectBase, SurveyElement } from "survey-core";
import { Survey, ImplementorBase, Panel, QuestionRow } from "survey-knockout-ui";
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
      if (element instanceof Panel) {
        if (element.koElementType() == "survey-panel") {
          return "svc-panel";
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
      if (element instanceof Panel) {
        if (element.koElementType() == "survey-panel") {
          return this.creator;
        }
      }
    }
    return super.getElementWrapperComponentData(element);
  }

  public getItemValueWrapperComponentName(item: ItemValue, question: QuestionSelectBase): string {
    return "svc-item-value";
  }
  public getItemValueWrapperComponentData(item: ItemValue, question: QuestionSelectBase): any {
    return {
      creator: this.creator,
      question,
      item
    };
  }

  public getSurveyRowComponentName(row: QuestionRow): string {
    return "svc-row";
  }
  public getSurveyRowComponentData(row: QuestionRow): any {
    return row;
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
