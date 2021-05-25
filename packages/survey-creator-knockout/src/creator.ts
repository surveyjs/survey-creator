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
  public getElementWrapperComponentName(element: SurveyElement, reason?: string): string {
    if (this.isDesignMode) {
      if(reason === "column-header") {
        return "svc-matrix-column-neader";
      }
      if(reason === "row-header") {
        return "svc-matrix-row-neader";
      }
      if(!element["parentQuestionValue"]) {
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
    }
    return super.getElementWrapperComponentName(element, reason);
  }
  public getElementWrapperComponentData(element: SurveyElement, reason?: string): any {
    if (this.isDesignMode) {
      if(reason === "column-header" || reason === "row-header") {
        return { creator: this.creator, element: element };
      }
      if(!element["parentQuestionValue"]) {
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
    }
    return super.getElementWrapperComponentData(element, reason);
  }

  public getItemValueWrapperComponentName(item: ItemValue, question: QuestionSelectBase): string {
    if(!this.isDesignMode || !!question["parentQuestionValue"]) {
      return SurveyModel.TemplateRendererComponentName;
    }
    if(question.getType() === "imagepicker") {
      return "svc-image-item-value";
    }
    return "svc-item-value";
  }
  public getItemValueWrapperComponentData(item: ItemValue, question: QuestionSelectBase): any {
    if(!this.isDesignMode || !!question["parentQuestionValue"]) {
      return item;
    }
    return {
      creator: this.creator,
      question,
      item
    };
  }

  public getMatrixCellTemplateData(cell: any) {
    if(!this.isDesignMode) {
      return cell.question;
    }
    return cell.question;
    // return cell.cell.column.templateQuestion;
  }

  public getRendererForString(element: Base, name: string): string {
    if (this.isDesignMode && !element["parentQuestionValue"]) {
      return editableStringRendererName;
    }
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
