import * as ko from "knockout";
import { SurveyCreator } from "../../creator";
import { getLocString } from "@survey/creator";
import { IQuestionToolboxItem } from "@survey/creator";

//import "./toolbox-item.scss";
import { AdaptiveActionBarItemWrapper } from "survey-core";
import { ToolboxViewModel } from "./toolbox";
import { KnockoutDragEvent } from "src/events";
const template = require("./toolbox-item.html");
// import template from "./toolbox-item.html";

export class ToolboxItemViewModel {
  private _creator: SurveyCreator;
  public title: ko.Observable<string> = ko.observable("");
  public iconName: ko.Observable<string> = ko.observable("");
  public item: IQuestionToolboxItem;
  constructor(private _itemData: IQuestionToolboxItem, creator: SurveyCreator) {
    this._creator = creator;
    this.item = _itemData;
    var icon = _itemData.iconName;
    if (_itemData.iconName.indexOf("icon-") === -1) {
      icon = "icon-" + icon;
    }

    this.iconName(icon);
    this.title(_itemData.title);
  }
  get ariaLabel() {
    return this.item.tooltip + " " + getLocString("toolbox") + " item";
  }
  click(model: ToolboxItemViewModel) {
    model._creator.clickToolboxItem(model.item.json);
  }
  dragstart(model: ToolboxItemViewModel, e: DragEvent) {
    model._creator.dragDropHelper.startDragToolboxItem(
      new KnockoutDragEvent(e),
      model.item.json.name,
      JSON.stringify(model.item.json),
    );
    return true;
  }
  dragend(model: ToolboxItemViewModel, e: DragEvent) {
    model._creator.dragDropHelper.end();
  }
}

ko.components.register("svc-toolbox-item", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const wrapper: AdaptiveActionBarItemWrapper = params.item;
      return new ToolboxItemViewModel(
        ToolboxViewModel.getToolboxItem(wrapper),
        params.creator
      );
    },
  },
  template: template,
});
