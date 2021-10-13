import * as ko from "knockout";
import {
  Base,
  ItemValue,
  property,
  Question,
  QuestionRowModel,
  QuestionSelectBase,
  SurveyModel,
  LocalizableString
} from "survey-core";
import { Survey, ImplementorBase, Panel } from "survey-knockout-ui";
import {
  ICreatorOptions,
  CreatorBase,
  getElementWrapperComponentName,
  isStringEditable,
  getElementWrapperComponentData,
  getItemValueWrapperComponentName,
  getItemValueWrapperComponentData
} from "@survey/creator";
import { editableStringRendererName } from "./components/string-editor";

if (!!ko.options) {
  ko.options.useOnlyNativeEvents = true;
}

export class DesignTimeSurveyModel extends Survey {
  constructor(public creator: SurveyCreator, jsonObj?: any) {
    super(jsonObj);
  }
  public isPopupEditorContent = false;

  public getElementWrapperComponentName(element: any, reason?: string): string {
    let componentName = getElementWrapperComponentName(
      element,
      reason,
      this.isPopupEditorContent
    );
    return (
      componentName || super.getElementWrapperComponentName(element, reason)
    );
  }
  public getElementWrapperComponentData(element: any, reason?: string): any {
    const data = getElementWrapperComponentData(element, reason, this.creator);
    return data || super.getElementWrapperComponentData(element);
  }

  public getRowWrapperComponentName(row: QuestionRowModel): string {
    return "svc-row";
  }
  public getRowWrapperComponentData(row: QuestionRowModel): any {
    return {
      creator: this.creator,
      row
    };
  }

  public getItemValueWrapperComponentName(item: ItemValue, question: QuestionSelectBase): string {
    return getItemValueWrapperComponentName(item, question);
  }
  public getItemValueWrapperComponentData(item: ItemValue, question: QuestionSelectBase): any {
    return getItemValueWrapperComponentData(item, question, this.creator);
  }

  public getRendererForString(element: Base, name: string): string {
    if (!this.creator.readOnly && isStringEditable(element, name)) {
      return editableStringRendererName;
    }
    return undefined;
  }
  public getRendererContextForString(element: Base, locStr: LocalizableString) {
    if (!this.creator.readOnly && isStringEditable(element, locStr.name)) {
      return {
        creator: this.creator,
        element,
        locStr
      };
    }
    return <any>locStr;
  }
}

export class SurveyCreator extends CreatorBase<Survey> {
  constructor(options: ICreatorOptions = {}, options2?: ICreatorOptions) {
    super(options, options2);
  }

  protected createSurveyCore(json: any = {}, reason: string): Survey {
    if (reason === "designer" || reason === "modal-question-editor")
      return new DesignTimeSurveyModel(this, json);
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
