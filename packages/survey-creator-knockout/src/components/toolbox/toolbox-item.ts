import * as ko from "knockout";
import { SurveyCreator } from "../../creator";
import { ToolboxItemViewModel } from "@survey/creator";
import { editorLocalization } from "@survey/creator";
import { IQuestionToolboxItem } from "@survey/creator";

//import "./toolbox-item.scss";
import { AdaptiveActionBarItemWrapper } from "survey-core";
import { ToolboxViewModel } from "./toolbox";
const template = require("./toolbox-item.html");
// import template from "./toolbox-item.html";

export class KnockoutToolboxItemViewModel extends ToolboxItemViewModel {
  public title: ko.Observable<string> = ko.observable("");
  public iconName: ko.Observable<string> = ko.observable("");
  constructor(
    protected item: IQuestionToolboxItem,
    protected creator: SurveyCreator
  ) {
    super(item, creator);
    var icon = item.iconName;
    if (item.iconName.indexOf("icon-") === -1) {
      icon = "icon-" + icon;
    }

    this.iconName(icon);
    this.title(item.title);
  }
  get ariaLabel() {
    return (
      this.item.tooltip +
      " " +
      editorLocalization.getString("toolbox") +
      " item"
    );
  }
}

ko.components.register("svc-toolbox-item", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const wrapper: AdaptiveActionBarItemWrapper = params.item;
      return new KnockoutToolboxItemViewModel(
        ToolboxViewModel.getToolboxItem(wrapper),
        params.creator
      );
    }
  },
  template: template
});
