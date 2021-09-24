import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
import { SurveyCreator } from "../creator";

//import "./creator.scss";
const template = require("./creator.html");
// import template from "./creator.html";

export class CreatorViewModel {
  constructor(public creator: SurveyCreator, private rootNode: HTMLElement) {
    this.creator.initKeyboardShortcuts(this.rootNode);
    new ImplementorBase(this.creator.notifier);
    new ImplementorBase(this.creator.toolbox);
    new ImplementorBase(this.creator.dragDropSurveyElements);
    new ImplementorBase(this.creator.dragDropChoices);
    new ImplementorBase(this.creator);
  }
  dispose():void {
    this.creator.removeKeyboardShortcuts(this.rootNode);
  }
}

ko.components.register("survey-creator", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const element = componentInfo.element;
      const model = new CreatorViewModel(params.creator, element);
      ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
