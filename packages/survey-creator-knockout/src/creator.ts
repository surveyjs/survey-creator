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
import { ICreatorOptions, CreatorBase, getElementWrapperComponentName, isStringEditable } from "@survey/creator";
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
    let componentName = getElementWrapperComponentName(element, reason, this.isPopupEditorContent);
    if (!componentName && element instanceof Panel) {
      if (element.koElementType() == "survey-panel") {
        return "svc-panel";
      }
    }
    return componentName || super.getElementWrapperComponentName(element, reason);
  }
  public getRowWrapperComponentName(row: QuestionRowModel): string {
    return "svc-row";
  }
  public getElementWrapperComponentData(element: any, reason?: string): any {
    if(reason === "logo-image") return this.creator;
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
  public getRowWrapperComponentData(row: QuestionRowModel): any {
    return {
      creator: this.creator,
      row
    };
  }
  public getItemValueWrapperComponentName(item: ItemValue, question: QuestionSelectBase): string {
    if (!!question["parentQuestionValue"] || question.isContentElement) {
      return SurveyModel.TemplateRendererComponentName;
    }
    if (question.getType() === "imagepicker") {
      return "svc-image-item-value";
    }
    return "svc-item-value";
  }
  public getItemValueWrapperComponentData(item: ItemValue, question: QuestionSelectBase): any {
    if (!!question["parentQuestionValue"] || question.isContentElement) {
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
    if (isStringEditable(element, name)) {
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
    if (reason === "designer" || reason === "modal-question-editor") return new DesignTimeSurveyModel(this, json);
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
