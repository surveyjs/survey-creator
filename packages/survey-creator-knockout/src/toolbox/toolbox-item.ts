import * as ko from "knockout";
import { SurveyCreator } from "../creator";
import { ToolboxToolViewModel, editorLocalization } from "survey-creator-core";
import { IQuestionToolboxItem } from "survey-creator-core";
const template = require("./toolbox-item.html");

export class KnockoutToolboxItemViewModel {
  public title: ko.Observable<string> = ko.observable("");
  public iconName: ko.Observable<string> = ko.observable("");

  constructor(
    protected model: ToolboxToolViewModel,
    protected item: IQuestionToolboxItem,
    protected creator: SurveyCreator,
    public isCompact = false
  ) {
    this.iconName(item.iconName);
    this.title(item.title);
  }
}

ko.components.register("svc-toolbox-item", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new KnockoutToolboxItemViewModel(
        params.model,
        params.item,
        params.creator,
        params.isCompact
      );
    }
  },
  template: template.default
});
