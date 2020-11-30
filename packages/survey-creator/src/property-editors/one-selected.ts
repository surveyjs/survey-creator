import * as ko from "knockout";

import "./one-selected.scss";
import { SurveyPropertyOneSelectedEditor } from "../propertyEditors/propertyOneSelectedEditor";
import { SurveyElementEditorContentModel } from "../questionEditors/questionEditor";
const templateHtml = require("./one-selected.html");

export class PropertyEditorOneSelectedViewModel {
  public availableClassesContainer: HTMLElement;

  constructor(
    public koAvailableClasses: any,
    public koAllowAddRemoveItems: ko.Observable<boolean>,
    public readOnly: any,
    public onAddClick: any,
    public koSelected: ko.Observable<any>,
    public getLocString: any,
    public getItemText: (item: any, counter?: any) => any,
    public koChangeCounter: ko.Observable<number>,
    public model: SurveyPropertyOneSelectedEditor,
    public onDeleteClick: any,
    public componentInfo: any,
    public afterRender: any
  ) {
    afterRender();
    this.setupAvailableClassesContainer(componentInfo.element.nextSibling);
  }

  public get originalValue(): any {
    return this.model.originalValue;
  }

  public get selectedObjectEditor(): ko.Observable<
    SurveyElementEditorContentModel
  > {
    return this.model.selectedObjectEditor;
  }

  public setupAvailableClassesContainer = (rootElement: HTMLElement) => {
    const className: string = "svd-available-classes-container";
    const element: HTMLElement = rootElement.querySelector("." + className);

    this.availableClassesContainer = element;
    element.onfocus = (event) => {
      if (this.availableClassesContainer.className.indexOf("--active") !== -1)
        return;
      this.toggleClassesContainer();
    };
    element.onblur = (event) => {
      // https://stackoverflow.com/a/60094794/6623551
      if (
        this.availableClassesContainer.className.indexOf("--active") !== -1 &&
        event.relatedTarget &&
        !event.currentTarget["contains"](event.relatedTarget)
      ) {
        this.toggleClassesContainer();
      } else {
        event.relatedTarget && event.relatedTarget["focus"]();
      }
    };
  };

  public toggleClassesContainer() {
    const element = this.availableClassesContainer;
    const className: string = "svd-available-classes-container";
    const activeClassName = className + "--active";
    if (element.className.indexOf(activeClassName) !== -1) {
      element.className = className;
      this.availableClassesContainer.blur();
    } else {
      element.className = className + " " + activeClassName;
      this.availableClassesContainer.focus();
    }
  }
}

ko.components.register("svd-property-editor-one-selected", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyOneSelectedEditor = params.model;

      return new PropertyEditorOneSelectedViewModel(
        model.koAvailableClasses,
        model.koAllowAddRemoveItems,
        model.readOnly,
        model.onAddClick,
        model.koSelected,
        model.getLocString,
        model.getItemText,
        model.koChangeCounter,
        model, //TODO break on props
        model.onDeleteClick,
        componentInfo,
        () => {
          typeof params.afterRender === "function" &&
            params.afterRender.call(model, componentInfo);

          typeof model.koAfterRender === "function" &&
            model.koAfterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
