import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { ToolboxToolViewModel } from "survey-creator-core";
import { SurveyCreator } from "../creator";
import { IQuestionToolboxItem } from "survey-creator-core";
import { ActionContainer } from "survey-core";

const template = require("./toolbox-tool.html");

export class KnockoutToolboxToolViewModel extends ToolboxToolViewModel {
  public title: ko.Observable<string> = ko.observable("");
  public iconName: ko.Observable<string> = ko.observable("");

  constructor(
    protected item: IQuestionToolboxItem,
    protected creator: SurveyCreator,
    model: ActionContainer,
    public isCompact = false
  ) {
    super(item, creator, model);
  }
}

ko.components.register("svc-toolbox-tool", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      new ImplementorBase(params.item);
      return new KnockoutToolboxToolViewModel(
        params.item,
        params.creator,
        params.model,
        params.isCompact
      );
    }
  },
  template: template.default
});
