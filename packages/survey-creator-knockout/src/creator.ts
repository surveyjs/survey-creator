import * as ko from "knockout";
import {
  Base,
  ItemValue,
  property,
  Question,
  QuestionRowModel,
  QuestionSelectBase,
  SurveyModel
} from "survey-core";
import { Survey, ImplementorBase, Panel } from "survey-knockout-ui";
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
    return true;
  }
  public get isLogoBefore(): boolean {
    return false;
  }
  public get isLogoAfter(): boolean {
    return true;
  }
  public isPopupEditorContent = false;
  public getElementWrapperComponentName(element: any, reason?: string): string {
    if(reason === "cell" || reason === "column-header" || reason === "row-header") {
      return "svc-matrix-cell";
    }
    if(!element["parentQuestionValue"]) {
      if (element instanceof Question) {
        if (element.getType() == "dropdown") {
          return this.isPopupEditorContent ? "svc-cell-dropdown-question" : "svc-dropdown-question";
        }
        if (element.getType() == "image") {
          return "svc-image-question";
        }
        if (element.getType() == "rating") {
          return "svc-rating-question";
        }
        if (element.koElementType() == "survey-question") {
          return this.isPopupEditorContent ? "svc-cell-question" : "svc-question";
        }
      }
      if (element.getType() == "image") {
        return "svc-image-question";
      }
      if (element.koElementType() == "survey-question") {
        return this.isPopupEditorContent ? "svc-cell-question" : "svc-question";
      }
    }
    if (element instanceof Panel) {
      if (element.koElementType() == "survey-panel") {
        return "svc-panel";
      }
    }
    return super.getElementWrapperComponentName(element, reason);
  }
  public getElementWrapperComponentNameByName(element: string): string {
    if (element === "sv-logo-image") return "svc-logo-image";
    return super.getElementWrapperComponentNameByName(element);
  }
  public getRowWrapperComponentName(row: QuestionRowModel): string {
    return "svc-row";
  }
  public getElementWrapperComponentData(element: any, reason?: string): any {
    if(reason === "cell" || reason === "column-header" || reason === "row-header") {
      return { creator: this.creator, element: element, question: element.question, row: element.row, column: element.column };
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
    return super.getElementWrapperComponentData(element, reason);
  }
  public getElementWrapperComponentDataByName(element: string): any {
    if (element === "sv-logo-image") return this.creator;
    return super.getElementWrapperComponentDataByName(element);
  }
  public getRowWrapperComponentData(row: QuestionRowModel): any {
    return {
      creator: this.creator,
      row
    };
  }
  public getItemValueWrapperComponentName(item: ItemValue, question: QuestionSelectBase): string {
    if (!!question["parentQuestionValue"]) {
      return SurveyModel.TemplateRendererComponentName;
    }
    if (question.getType() === "imagepicker") {
      return "svc-image-item-value";
    }
    return "svc-item-value";
  }
  public getItemValueWrapperComponentData(item: ItemValue, question: QuestionSelectBase): any {
    if (!!question["parentQuestionValue"]) {
      return item;
    }
    return {
      creator: this.creator,
      question,
      item
    };
  }

  public getMatrixCellTemplateData(cell: any) {
    if (!this.isDesignMode) {
      return cell.question;
    }
    return cell.question;
    // return cell.cell.column.templateQuestion;
  }

  public getRendererForString(element: Base, name: string): string {
    if (!element["parentQuestionValue"]) {
      return editableStringRendererName;
    }
    return undefined;
  }
}

export class SurveyCreator extends CreatorBase<Survey> {
  @property() testProp: string;

  constructor(options: ICreatorOptions = {}, options2?: ICreatorOptions) {
    super(options, options2);
    new ImplementorBase(this.toolbox);
    new ImplementorBase(this.dragDropHelper);
    new ImplementorBase(this);
  }

  protected createSurveyCore(json: any = {}, reason: string): Survey {
    if (reason === "designer") return new DesignTimeSurveyModel(this, json);
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
    node.innerHTML = `<survey-creator params="creator: creator"></survey-creator>`;
    ko.cleanNode(node);
    ko.applyBindings({ creator: this }, node);
  }
}
