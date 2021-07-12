import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { SurveyCreator } from "../../creator";
import {
  VerticalResponsivityManager,
  AdaptiveActionContainer,
  Action
} from "survey-core";
//import "./toolbox.scss";
import { IQuestionToolboxItem } from "@survey/creator";
const template = require("./toolbox.html");
// import template from "./toolbox.html";

export class ToolboxViewModel extends AdaptiveActionContainer {
  private _categoriesSubscription: ko.Computed;
  public categories = ko.observableArray<any>();
  public creator: SurveyCreator;
  private _isCompact = ko.observable(true);
  private _isCompactSubscription: ko.Computed;
  public get isCompact() {
    return this._isCompact();
  }
  public set isCompact(val: boolean) {
    this._isCompact(val);
  }

  constructor(
    private _categories: any[] | ko.Computed<Array<any>>,
    creator: SurveyCreator,
    isCompact: boolean | ko.Computed<boolean>,
  ) {
    super();

    this.dotsItemPopupModel.horizontalPosition = "right";
    this.dotsItemPopupModel.verticalPosition = "top";
    this.creator = creator;
    this._categoriesSubscription = ko.computed(() => {
      const actions: Action[] = [];
      const categories = ko.unwrap(_categories);
      categories.forEach((category: any, categoryIndex) => {
        new ImplementorBase(category);
        (ko.unwrap(category.items) || []).forEach((item, index) => {
          if (categoryIndex != 0 && index == 0) {
            item.needSeparator = true;
          }
          actions.push(item);
        });
      });
      this._isCompactSubscription = ko.computed(() => this.isCompact = ko.unwrap(isCompact));
      this.setItems(actions, false);
      this.categories(categories);
    });
  }

  public invisibleItemSelected(model: Action): void {
    this.creator.clickToolboxItem((<any>model).json);
  }

  dispose() {
    this._categoriesSubscription.dispose();
    this._isCompactSubscription.dispose();
  }
}

ko.components.register('svc-toolbox', {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model: ToolboxViewModel = new ToolboxViewModel(params.categories, params.creator, params.isCompact);
      const container = componentInfo.element.querySelector('.svc-toolbox');
      const manager: VerticalResponsivityManager =
        new VerticalResponsivityManager(container, model, 'div.svc-toolbox__tool', 40);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        manager.dispose();
        model.dispose();
      });
      return model;
    },
  },
  template: template
});
