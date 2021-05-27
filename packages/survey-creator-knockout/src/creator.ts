import * as ko from "knockout";
import { Base, ItemValue, property, Question, QuestionSelectBase, SurveyElement, SurveyModel } from "survey-core";
import { Survey, ImplementorBase, Panel, QuestionRow } from "survey-knockout-ui";
import { ICreatorOptions, CreatorBase } from "@survey/creator";
import { editableStringRendererName } from "./components/string-editor";

if (!!ko.options) {
  ko.options.useOnlyNativeEvents = true;
}

class DesignTimeSurveyModel extends Survey {
  constructor(public creator: SurveyCreator, jsonObj?: any) {
    super(jsonObj);
  }
  public get hasLogo(): boolean {
    if (this.isDesignMode) return true;
    return super["hasLogo"];
  }
  public get isLogoBefore(): boolean {
    if (this.isDesignMode) return false;
    return super["isLogoBefore"];
  }
  public get isLogoAfter(): boolean {
    if (this.isDesignMode) return true;
    return super["isLogoAfter"];
  }
  public getElementWrapperComponentName(element: SurveyElement): string {
    if (element.isDesignMode) {
      if (element instanceof Question) {
        if (element.getType() == "dropdown") {
          return "svc-dropdown-question";
        }
        if (element.getType() == "image") {
          return "svc-image-question";
        }
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
  public getElementWrapperComponentNameByName(element: string): string {
    if (!this.isDesignMode) {
      super.getElementWrapperComponentNameByName(element);
    }
    if (element === "sv-logo-image") return "svc-logo-image";
    return super.getElementWrapperComponentNameByName(element);
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
  public getElementWrapperComponentDataByName(element: string): any {
    if (!this.isDesignMode) {
      super.getElementWrapperComponentNameByName(element);
    }
    if (element === "sv-logo-image") return this.creator;
    return super.getElementWrapperComponentDataByName(element);
  }
  public getItemValueWrapperComponentName(item: ItemValue, question: QuestionSelectBase): string {
    if (!this.isDesignMode) {
      return SurveyModel.TEMPLATE_RENDERER_COMPONENT_NAME;
    }
    if (question.getType() === "imagepicker") {
      return "svc-image-item-value";
    }
    return "svc-item-value";
  }
  public getItemValueWrapperComponentData(item: ItemValue, question: QuestionSelectBase): any {
    if(!this.isDesignMode) {
      return item;
    }
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

  public getRendererForString(element: Base, name: string): string {
    if (this.isDesignMode) return editableStringRendererName;
    return undefined;
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
